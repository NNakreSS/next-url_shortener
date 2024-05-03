import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import type { Role } from "@prisma/client";
import { PATH_DEFAULT, PATH_SIGNIN, PATH_SIGNUP } from "./libs/routes";
// custom hooks
import { useAuth } from "./hooks/useAuth";

interface currentUserType {
  name: string;
  email: string;
  image?: string;
  role: Role;
}

async function withAuth(req: NextRequest) {
  const currentUser = (await getToken({
    req: req,
    secret: process.env.SECRET,
  })) as currentUserType | null;

  const pathname = req.nextUrl.pathname;
  const { requireLogin, allowedRoles } = useAuth(pathname);

  console.log("PATHNAME : " + pathname);
  if (pathname == PATH_SIGNIN || pathname == PATH_SIGNUP) {
    if (currentUser) {
      return NextResponse.redirect(new URL(PATH_DEFAULT, req.url));
    }
  }

  if (requireLogin) {
    if (!currentUser) {
      return NextResponse.redirect(new URL(PATH_SIGNIN, req.url));
    } else {
      if (allowedRoles && !allowedRoles.includes(currentUser?.role)) {
        return NextResponse.redirect(new URL(PATH_SIGNIN, req.url));
      }
    }
  }

  return null;
}

export default async function middleware(req: NextRequest) {
  const m1 = await withAuth(req);
  return m1;
}

export const config = { matcher: ["/dashboard", "/admin", "/auth/:path*"] };
