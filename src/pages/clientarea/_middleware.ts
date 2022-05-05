import { NextResponse, NextRequest } from 'next/server'

import { useSession, getSession } from "next-auth/react"

export async function middleware(req, ev) {
    const { pathname } = req.nextUrl

    /*if (pathname == '/clientarea') {
        return NextResponse.redirect('/login')
    }*/

    return NextResponse.next()
}