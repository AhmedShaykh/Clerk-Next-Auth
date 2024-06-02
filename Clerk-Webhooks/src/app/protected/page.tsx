import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const Protected = async () => {

    const user = await currentUser();

    return (
        <div className="flex flex-col justify-center items-center mt-52 gap-8">
            <div className="flex justify-center gap-4 items-center">
                <h2 className="text-2xl">
                    {user?.fullName}
                </h2>

                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: "h-[38px] w-[38px]"
                        }
                    }}
                />
            </div>
        </div>
    )
};

export default Protected;