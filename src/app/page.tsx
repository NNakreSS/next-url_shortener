import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/home/about/About";
import Hero from "./components/home/Hero";
import Info from "./components/home/info/Info";

const Home = () => {
  return (
    <div className="container grid grid-cols-12 md:gap-x-5 m-auto">
      <Header />
      <main className="col-span-full px-1 md:px-10 lg:px-40">
        <Hero />
        <About />
        <Info />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
