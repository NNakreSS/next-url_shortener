// styles
import "@/app/styles/loginpage.css";
// components
import MainContainer from "@/app/components/general/MainContainer";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex flex-col md:gap-x-5 m-auto min-h-screen">
      <Header />
      <MainContainer>
        <div className="absolute top-0 right-0 w-full bg-light-aqua h-56 login-page-background -z-50" />
        {children}
      </MainContainer>
      <Footer />
    </div>
  );
}
