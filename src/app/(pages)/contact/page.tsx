import { getCurrentUser } from "@/app/actions/getCurrentUser";
import Footer from "@/app/components/footer";
import LoginButton from "@/app/components/general/LoginButton";
import MainContainer from "@/app/components/general/MainContainer";
import { Header, Logo, Menu } from "@/app/components/header";
import { PATH_CONTACT, PATH_DEFAULT } from "@/libs/routes";
import type Navigation from "@/types/NavigationType";

const navigations: Navigation[] = [
  { name: "Anasayfa", path: PATH_DEFAULT },
  { name: "İletişim", path: PATH_CONTACT },
];

const Contact = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="2xl:container md:gap-x-5 m-auto">
      <Header>
        <Logo />
        <Menu navigations={navigations} />
        <LoginButton currentUser={currentUser} />
      </Header>
      <MainContainer>İletişim</MainContainer>
      <Footer />
    </div>
  );
};

export default Contact;
