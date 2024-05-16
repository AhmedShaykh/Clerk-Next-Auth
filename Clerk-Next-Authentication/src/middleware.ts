import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { auth, BASE_PATH } from "@/auth";

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)", "/((?!api|_next/static|_next/image|favicon.ico).*)"]
};

// ================ Next Auth ================ //

export default auth((req) => {

    const reqUrl = new URL(req.url);

    if (!req.auth && reqUrl?.pathname !== "/") {

        return NextResponse.redirect(
            new URL(
                `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(
                    reqUrl?.pathname
                )}`,
                req.url
            )
        );
    }
});

// ================ Clerk Authentication ================ //

const isProtectedRoute = createRouteMatcher(["/about(.*)", "/protected(.*)"]);

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
});