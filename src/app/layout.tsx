import type { Metadata } from "next";
import { inter } from "@/app/fonts";
import "./styles/globals.css";
// components
import Footer from "./components/footer";
import Header from "./components/header";
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
      <body className={clsx(inter.className, "bg-background")}>
        <div className="container content-between min-h-screen grid grid-cols-12">
          <Header />
          <main className="flex-grow col-span-full"> {children} </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
