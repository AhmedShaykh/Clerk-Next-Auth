import { WebhookEvent } from "@clerk/nextjs/server";
import { createUser } from "@/lib/users";
import { headers } from "next/headers";
import { User } from "@prisma/client";
import { Webhook } from "svix";

export async function POST(req: Request) {

    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {

        throw new Error(
            "Please Add CLERK_WEBHOOK_SECRET From Clerk Dashboard To .ENV"
        );

    };

    const headerPayload = headers();

    const svix_id = headerPayload.get("svix-id");

    const svix_timestamp = headerPayload.get("svix-timestamp");

    const svix_signature = headerPayload.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature) {

        return new Response("Error Occurred -- No Svix Headers", { status: 400 });

    }

    const payload = await req.json();

    const body = JSON.stringify(payload);

    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent;

    try {

        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature
        }) as WebhookEvent;

    } catch (error) {

        console.error("Error Verifying Webhooks:", error);

        return new Response("Error Occurred", { status: 400 });

    }

    const eventType = evt.type;

    if (eventType === "user.created") {

        const { id, email_addresses, first_name, last_name, image_url } = evt.data;

        if (!id || !email_addresses) {

            return new Response("Error Occurred -- Missing Data", {
                status: 400
            });

        }

        const user = {
            clerkUserId: id,
            email: email_addresses[0].email_address,
            ...(first_name ? { firstName: first_name } : {}),
            ...(last_name ? { lastName: last_name } : {}),
            ...(image_url ? { imageUrl: image_url } : {})
        };

        await createUser(user as User);

    }

    return new Response("", { status: 200 });

};