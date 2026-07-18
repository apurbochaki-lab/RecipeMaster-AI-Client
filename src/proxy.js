import { NextResponse } from 'next/server'
import { getUserSession } from './lib/session';


export async function proxy(request) {

    const user = await getUserSession();
    if (!user) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
    matcher: ['/xxx/:path*', '/recipes/add', '/recipes/manage']
}