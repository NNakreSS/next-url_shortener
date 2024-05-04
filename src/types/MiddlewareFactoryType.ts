import { NextMiddleware } from "next/server";

type MiddlewareFactoryType = (middleware: NextMiddleware) => NextMiddleware;

export default MiddlewareFactoryType;
