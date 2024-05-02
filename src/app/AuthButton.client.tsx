"use client";
import { signIn, signOut } from "@/auth/helpers";
import { useSession } from "next-auth/react";

export default function AuthButton() {

    const session = useSession();

    return session?.data?.user ? (
        <button
            className="p-3 bg-white text-black font-semibold hover:bg-slate-300"
            onClick={async () => {
                await signOut();
                await signIn();
            }}
        >
            {session.data?.user?.name} : Sign Out
        </button>
    ) : (
        <button
            className="p-3 bg-white text-black font-semibold hover:bg-slate-300"
            onClick={async () => await signIn()}
        >
            Sign In
        </button>
    )

};