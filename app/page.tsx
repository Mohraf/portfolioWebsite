import AboutMe from "@/components/About/About";
import ExperiencesComponent from "@/components/Experiences/Experiences";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import WorkProjects from "@/components/Work/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <ExperiencesComponent />
      <WorkProjects />
      <Footer />
    </>
  );
}
