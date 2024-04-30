import bcrypt from "bcryptjs";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("sa");
  const body = await req.json();
  console.log(body);
  const { userName: name, email, password } = body;
  console.log(name, email, password);
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
