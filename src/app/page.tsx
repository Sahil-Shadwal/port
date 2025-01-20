import Hero from "@/components/Hero";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
// import { Header } from "@/sections/Header";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div className="bg-[#092635]">
      {/* <Header /> */}
      <Hero />
      {/* <TapeSection /> */}
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
