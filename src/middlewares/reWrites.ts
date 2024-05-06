import MiddlewareFactory from "@/types/MiddlewareFactoryType";
import {
  NextResponse,
  type NextFetchEvent,
  type NextMiddleware,
  type NextRequest,
} from "next/server";

const reWrites: MiddlewareFactory = (next: NextMiddleware) => {
  return async (req: NextRequest, _next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    return next(req, _next);
  };
};

export default reWrites;
