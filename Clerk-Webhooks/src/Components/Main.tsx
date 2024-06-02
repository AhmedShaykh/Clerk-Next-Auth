"use client";
import { Button } from "@/Components/ui/button";
import {
    SignInButton,
    SignOutButton,
    SignedIn,
    SignedOut,
    useUser
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Main = () => {

    const { isSignedIn, user } = useUser();

    const router = useRouter();

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-8">
            <SignedOut>
                <SignInButton>
                    <Button className="font-semibold py-4 px-6">
                        Log In
                    </Button>
                </SignInButton>
            </SignedOut>

            <SignedIn>
                <SignOutButton>
                    <Button className="font-semibold py-4 px-6">
                        Log Out: {user?.firstName}
                    </Button>
                </SignOutButton>
            </SignedIn>

            {isSignedIn && (
                <Button
                    className="font-semibold py-6 px-8 text-[1rem]"
                    onClick={() => router.push("/protected")}
                >
                    Go To Protected Page
                </Button>
            )}
        </div>
    )
};

export default Main;