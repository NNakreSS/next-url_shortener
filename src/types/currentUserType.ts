import { Role } from "@prisma/client";

export default interface currentUserType {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  role: Role;
  hashedPassword: string | null;
}
