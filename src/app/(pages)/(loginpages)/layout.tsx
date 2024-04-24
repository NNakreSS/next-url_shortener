// styles
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import "@/app/styles/loginpage.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex flex-col md:gap-x-5 m-auto min-h-screen">
      <Header />
      <main className="px-1 lg:px-40 grow relative h-full w-full">
        <div className="absolute top-0 right-0 w-full bg-light-aqua h-56 login-page-background -z-50" />
        {children}
      </main>
      <Footer />
    </div>
  );
}
