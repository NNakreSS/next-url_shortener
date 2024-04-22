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
        <div className="container grid grid-cols-12 md:gap-x-5 m-auto">
          <Header />
          <main className="col-span-full px-1 md:px-10 lg:px-40">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
