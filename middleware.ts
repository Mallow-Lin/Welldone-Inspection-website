import { NextRequest, NextResponse } from 'next/server';

const legacyPaths: Record<string, string> = {
  '/About': '/about',
  '/Services': '/services',
  '/Projects': '/projects',
  '/Contact': '/contact',
};

export function middleware(request: NextRequest) {
  const destination = legacyPaths[request.nextUrl.pathname];
  if (!destination) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = destination;
  return NextResponse.redirect(url, 308);
}
