import Footer from "./components/footer";
import { Header, Logo, Menu } from "./components/header";
import About from "./components/home/about/About";
import Hero from "./components/home/Hero";
import Info from "./components/home/info/Info";
import MainContainer from "./components/general/MainContainer";
import { PATH_CONTACT, PATH_DEFAULT } from "@/libs/routes";
import Navigation from "@/types/NavigationType";
import LoginButton from "./components/general/LoginButton";
import { getCurrentUser } from "../libs/actions/getCurrentUser";

const navigations: Navigation[] = [
  { name: "Anasayfa", path: PATH_DEFAULT },
  { name: "İletişim", path: PATH_CONTACT },
];

const Home = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="2xl:container md:gap-x-5 m-auto">
      <Header>
        <Logo />
        <Menu navigations={navigations} />
        <LoginButton currentUser={currentUser} />
      </Header>
      <MainContainer>
        <Hero />
        <About />
        <Info />
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Home;
