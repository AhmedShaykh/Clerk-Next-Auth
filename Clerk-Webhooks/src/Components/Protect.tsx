import { UserButton } from "@clerk/nextjs";

const Protect = () => {
    return (
        <>
            <UserButton
                afterSignOutUrl="/"
                appearance={{
                    elements: {
                        avatarBox: "h-[45px] w-[45px]"
                    }
                }}
            />
        </>
    )
};

export default Protect;