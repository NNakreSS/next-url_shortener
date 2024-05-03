import { routes } from "@/libs/routes";

export const useAuth = (pathname: string) => {
  const route = routes[pathname];

  if (!route) {
    return {
      requireLogin: false,
    };
  }

  return {
    requireLogin: route.requireLogin,
    allowedRoles: route?.allowedRoles,
  };
};
