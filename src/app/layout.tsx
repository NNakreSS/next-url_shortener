import type { Metadata } from "next";
import { kanit } from "@/app/fonts";
import "./styles/globals.css";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "nkLink",
  description: "Advanced Url Shortener",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(kanit.className, "bg-background")}>{children}</body>
    </html>
  );
}
