import { chain } from "./middlewares/chain";
import withAuth from "./middlewares/withAuth";

export default chain([withAuth]);

export const config = { matcher: ["/dashboard", "/admin", "/auth/:path*"] };
