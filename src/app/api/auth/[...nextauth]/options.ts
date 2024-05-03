// prisma
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/libs/prismadb";
// auth
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// ----------------------------------------------------
import bcrypt from "bcryptjs";
// types
import type { JWT } from "next-auth/jwt";
import type { User } from "@prisma/client";
import type { Session } from "inspector";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Geçersiz mail ya da şifre...");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("Geçersiz mail ya da şifre...");
        }

        const comparePassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!comparePassword) {
          throw new Error("Geçersiz şifre...");
        }

        return { ...user, role: user.role };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User | any }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }: { session: Session | any; token: JWT }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },

  pages: {
    signIn: "/auth/signin",
  },

  debug: process.env.NODE_ENV === "development",

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
