
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Sectors from "@/components/Sectors";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Sectors />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;
