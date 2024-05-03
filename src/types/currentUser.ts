import { Role } from "@prisma/client";

export default interface currentUser {
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
