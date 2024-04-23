import Services from "./Services";
import WhoWeAre from "./WhoWeAre";

function About() {
  return (
    <section className="py-12 flex flex-wrap gap-20">
      <WhoWeAre />
      <Services />
    </section>
  );
}

export default About;
