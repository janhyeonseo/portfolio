import Header from "@/components/layout/Header";
import AboutSection from "@/components/sections/About";
import AwardsSection from "@/components/sections/Awards";
import ContactSection from "@/components/sections/Contact";
import ExperienceSection from "@/components/sections/Experience";
import GuestbookSection from "@/components/sections/Guestbook";
import HeroSection from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/Projects";
import SkillsSection from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AwardsSection />
        <GuestbookSection />
      </main>
      <ContactSection />
    </>
  );
}
