import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/home/about/About";
import Hero from "./components/home/Hero";
import Info from "./components/home/info/Info";
import MainContainer from "./components/general/MainContainer";

const Home = () => {
  return (
    <div className="container md:gap-x-5 m-auto">
      <Header />
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
