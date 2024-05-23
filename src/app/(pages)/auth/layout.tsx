// styles
import "@/app/styles/loginpage.css";
// components
import MainContainer from "@/app/components/general/MainContainer";
import Footer from "@/app/components/footer";
import { Header, Logo, Menu } from "@/app/components/header";
import LoginButton from "@/app/components/general/LoginButton";
import Navigation from "@/types/NavigationType";
import { PATH_CONTACT, PATH_DEFAULT } from "@/libs/routes";

const navigations: Navigation[] = [
  { name: "Anasayfa", path: PATH_DEFAULT },
  { name: "İletişim", path: PATH_CONTACT },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="2xl:container flex flex-col md:gap-x-5 m-auto min-h-screen">
      <Header>
        <Logo />
        <Menu navigations={navigations} />
      </Header>
      <MainContainer>
        <div className="absolute top-0 right-0 w-full bg-light-aqua h-56 login-page-background -z-50" />
        <div className="bg-Blue flex flex-col gap-5 mx-auto px-5 py-10 rounded-md w-full md:w-4/5 lg:w-2/5 my-5">
          {children}
        </div>
      </MainContainer>
      <Footer />
    </div>
  );
}
