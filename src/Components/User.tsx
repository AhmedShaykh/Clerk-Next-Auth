import AuthButton from "@/app/AuthButton.server";
import { currentUser } from "@clerk/nextjs/server";
import { auth } from "@/auth";

const User = async () => {

    const session = await auth();

    const user = await currentUser();

    return (
        <div className="flex flex-col items-center gap-8">
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <AuthButton />

            <h1 className="text-2xl">
                {user?.fullName}
            </h1>
        </div>
    )
};

export default User;