// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  // 開発環境を除外
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  // 特定のパスにのみ適用
  if (url.pathname === '/view_comedy') {
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, password] = Buffer.from(authValue, 'base64').toString().split(':');

      const validUser = process.env.BASIC_AUTH_USER;
      const validPassword = process.env.BASIC_AUTH_PASSWORD;

      if (user === validUser && password === validPassword) {
        return NextResponse.next();
      }
    }

    return new NextResponse('認証が必要です', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/view_comedy'],
};
