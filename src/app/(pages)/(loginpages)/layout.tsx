// styles
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import "@/app/styles/loginpage.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container grid grid-cols-12 md:gap-x-5 m-auto">
      <Header />
      <main className="col-span-full px-1 md:px-10 lg:px-40">
        <div className="absolute top-0 right-0 w-full bg-light-aqua h-[40vh] mt-20 login-page-background"></div>
        <div className="m-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
