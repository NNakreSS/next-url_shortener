import { Role } from "@prisma/client";

interface Route {
  requireLogin: boolean;
  allowedRoles?: Role[];
}

export const routes: Record<string, Route> = {
  "/": {
    requireLogin: false,
  },
  "/dashboard": {
    requireLogin: true,
    allowedRoles: ["ADMIN", "USER"],
  },
  "/admin": {
    requireLogin: true,
    allowedRoles: ["ADMIN"],
  },
};

// core paths
export const PATH_DEFAULT = "/";
export const PATH_SIGNIN = "/auth/signin";
export const PATH_SIGNUP = "/auth/signin";
export const PATH_DASHBOARD = "/dashboard";
export const PATH_ADMIN = "/admin";
