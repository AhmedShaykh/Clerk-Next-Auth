import { UserButton } from "@clerk/nextjs";

const Protect = () => {
    return (
        <>
            <UserButton
                afterSignOutUrl="/"
                appearance={{
                    elements: {
                        avatarBox: "h-[38px] w-[38px]"
                    }
                }}
            />
        </>
    )
};

export default Protect;