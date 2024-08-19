import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the accessToken exists in cookies
  const token = request.cookies.get("accessToken");

  // If token is not found, redirect to login page
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Continue to the requested page if authenticated
  return NextResponse.next();
}

// Specify paths where this middleware should run
export const config = {
  matcher: ["/dashboard/:path*", "/opportunities/:path*"], // Protect all routes under /dashboard and /opportunities
};
