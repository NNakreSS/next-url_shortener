import Header from "@/app/components/dashboard/Header";
import MainContainer from "@/app/components/general/MainContainer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex flex-col md:gap-x-5 m-auto min-h-screen">
      <Header />
      <MainContainer>{children}</MainContainer>
    </div>
  );
}
