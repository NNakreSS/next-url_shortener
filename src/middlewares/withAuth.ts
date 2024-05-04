import {
  NextResponse,
  NextRequest,
  NextMiddleware,
  NextFetchEvent,
} from "next/server";
import { getToken } from "next-auth/jwt";
import type { Role } from "@prisma/client";
import {
  PATH_DEFAULT,
  PATH_SIGNIN,
  PATH_SIGNUP,
  PATH_UNAUTH,
} from "@/libs/routes";
// custom hooks
import { useAuth } from "@/hooks/useAuth";
import MiddlewareFactory from "@/types/MiddlewareFactoryType";

interface currentUserType {
  name: string;
  email: string;
  image?: string;
  role: Role;
}

const withAuth: MiddlewareFactory = (next: NextMiddleware) => {
  return async (req: NextRequest, _next: NextFetchEvent) => {
    const currentUser = (await getToken({
      req: req,
      secret: process.env.SECRET,
    })) as currentUserType | null;

    const pathname = req.nextUrl.pathname;
    const { requireLogin, allowedRoles } = useAuth(pathname);

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
          return NextResponse.redirect(new URL(PATH_UNAUTH, req.url));
        }
      }
    }

    return next(req, _next);
  };
};

export default withAuth;
