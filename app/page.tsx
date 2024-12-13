import AboutMe from "@/components/About/About";
import ExperiencesComponent from "@/components/Experiences/Experiences";
import HeroSection from "@/components/Hero/Hero";
import WorkProjects from "@/components/Work/Work";

export default function Home() {
  

  return (
    <>
      <HeroSection />
      <AboutMe />
      <ExperiencesComponent />
      <WorkProjects />
    </>
  );
}
