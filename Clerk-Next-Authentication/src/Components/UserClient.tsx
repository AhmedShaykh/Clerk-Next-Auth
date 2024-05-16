"use client";
import { Button } from "@/Components/ui/button";
import { SignOutButton, useUser } from "@clerk/nextjs";

const UserClient = () => {

    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return (
        <SignOutButton>
            <Button>
                LogOut: {user.firstName}
            </Button>
        </SignOutButton>
    )
};

export default UserClient;