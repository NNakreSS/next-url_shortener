import { chain } from "./middlewares/chain";
import reWrites from "./middlewares/reWrites";
import withAuth from "./middlewares/withAuth";

export default chain([reWrites, withAuth]);

export const config = {
  matcher: ["/:path*"],
};
