import { User } from "@prisma/client";
import prisma from "@/lib/prisma";

export async function createUser(data: User) {

    try {

        const user = await prisma.user.create({ data });

        return { user };

    } catch (error) {

        return { error };

    }

};

export async function getUserById({ id, clerkUserId }: { id?: string; clerkUserId?: string; }) {

    try {

        if (!id && !clerkUserId) {

            throw new Error("ID Or ClerkUserID Is Required");

        }

        const query = id ? { id } : { clerkUserId };

        const user = await prisma.user.findUnique({ where: query });

        return { user };

    } catch (error) {

        return { error };

    }

};

export async function UpdateUser(id: string, data: Partial<User>) {

    try {

        const user = await prisma.user.update({
            where: { id },
            data
        });

        return { user };

    } catch (error) {

        return { error }

    }

};