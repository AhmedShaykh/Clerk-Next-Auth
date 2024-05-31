import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="grid place-items-center h-screen">
            <SignUp path="/signup" />
        </div >
    );
};