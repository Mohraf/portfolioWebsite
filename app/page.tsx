import AboutMe from "@/components/About/About";
import ExperiencesComponent from "@/components/Experiences/Experiences";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import WorkProjects from "@/components/Work/Work";

export default function Home() {
  const socialLinks = {
    instagram: 'https://instagram.com/f1sher.man',
    linkedin: 'https://linkedin.com/in/amos-ng-uono-179aa8169/',
    github: 'https://github.com/mohraf',
    twitter: 'https://twitter.com/f1sher_man',
    email: 'your.email@example.com'
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <ExperiencesComponent />
      <WorkProjects />
      <Footer socialLinks={socialLinks} />
    </>
  );
}
