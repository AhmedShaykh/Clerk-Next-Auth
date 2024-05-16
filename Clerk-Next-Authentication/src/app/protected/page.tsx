import UserClient from "@/Components/UserClient";
import { currentUser } from "@clerk/nextjs/server";

const Protected = async () => {

    const user = await currentUser();

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-8">
            <h2 className="text-2xl">User: {user?.fullName}</h2>

            <UserClient />
        </div>
    )
};

export default Protected;