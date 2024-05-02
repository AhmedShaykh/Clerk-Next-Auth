import AuthButton from "@/app/AuthButton.server";
import { auth } from "@/auth";

const User = async () => {

    const session = await auth();

    return (
        <div className="flex flex-col items-center gap-8">
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <AuthButton />
        </div>
    )
};

export default User;