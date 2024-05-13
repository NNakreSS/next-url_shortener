import MainContainer from "@/app/components/general/MainContainer";
import { Header, Menu } from "@/app/components/header";
import User from "@/app/components/header/User";
import { ADMIN_LINKS, ADMIN_USERS, PATH_ADMIN } from "@/libs/routes";
import Navigation from "@/types/NavigationType";

const navigations: Navigation[] = [
  { name: "Anasayfa", path: PATH_ADMIN },
  { name: "Üyeler", path: ADMIN_USERS },
  { name: "Linkler", path: ADMIN_LINKS },
];
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex flex-col md:gap-x-5 m-auto min-h-screen">
      <Header>
        <Menu navigations={navigations} />
        <User />
      </Header>
      <MainContainer>{children}</MainContainer>
    </div>
  );
}
