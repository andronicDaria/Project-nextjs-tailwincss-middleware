// middleware.ts
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {

  if (request.nextUrl.pathname.startsWith('/blog')) {
    const response = NextResponse.next()
    response.cookies.set('vercel', 'fast')
    response.cookies.set('vercel', 'fast', { path: '/blog' })
   


    return NextResponse.rewrite(new URL('/', request.url)) ;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
};
