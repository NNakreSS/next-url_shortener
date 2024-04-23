// styles
import "@/app/styles/loginpage.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full">
      <div className="absolute top-0 right-0 w-full bg-light-aqua h-[40vh] mt-20 login-page-background"></div>
      <div className="m-auto">{children}</div>
    </section>
  );
}
