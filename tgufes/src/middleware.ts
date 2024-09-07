import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/view_comedy'],
}

export function middleware(req: NextRequest) {
  // 開発環境では認証をスキップ
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next(); // 認証をスキップして次に進む
  }
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === 'tgufesadmin' && pwd === 'chibalotte') {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}
