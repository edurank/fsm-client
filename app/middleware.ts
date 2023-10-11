import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {

  const token = localStorage.getItem("authToken");
  const { pathname } = request.nextUrl;

  console.log(request.url);
  
  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next();
  }

  if (!token && pathname !== '/login') {
    return NextResponse.redirect('/login');
  }
}