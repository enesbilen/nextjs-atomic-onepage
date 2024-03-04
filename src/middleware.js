import { NextResponse } from 'next/server';


export function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const url = request.nextUrl.clone();
    const token = request.cookies.get("jwt")?.value;
    if (
        pathname.startsWith("/_next/") ||
        pathname.startsWith("/static/") ||
        pathname === "/favicon.ico" /* ||
        pathname?.inculude("/logout/") */
    ) {
        return NextResponse.next();
    }

    if (!token && pathname !== '/' && pathname !== '/login') {
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    if (token && (pathname === '/login' || pathname === '/register')) {
        url.pathname = "/dashboard";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

