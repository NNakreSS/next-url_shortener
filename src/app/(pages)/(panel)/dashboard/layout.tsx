import User from "@/app/components/header/User";
import MainContainer from "@/app/components/general/MainContainer";
import { Header, Menu } from "@/app/components/header";
import { DASHBOARD_API, PATH_DASHBOARD } from "@/libs/routes";
import type Navigation from "@/types/NavigationType";

const navigations: Navigation[] = [
  { name: "İstatistikler", path: PATH_DASHBOARD },
  { name: "API Anahtarı", path: DASHBOARD_API },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="2xl:container flex flex-col md:gap-x-5 m-auto min-h-screen min-w-screen">
      <Header>
        <Menu navigations={navigations} />
        <User />
      </Header>
      <MainContainer>{children}</MainContainer>
    </div>
  );
}
