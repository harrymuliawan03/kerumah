import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const unprotectedPath = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  // let storedToken;
  // if (typeof window !== "undefined") {
  //   storedToken = localStorage.getItem("accessToken");
  // }
  // if (!storedToken && request.nextUrl.pathname.startsWith("/dashboard")) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // } else {
  //   if (storedToken) {
  //     // Check if the requested URL is unprotected
  //     if (unprotectedPath.includes(request.nextUrl.pathname)) {
  //       return NextResponse.redirect(new URL("/", request.url));
  //     }
  //   }
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", ...unprotectedPath],
};
