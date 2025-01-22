import Hero from "@/components/Hero";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
// import { Header } from "@/sections/Header";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div className="bg-[#F8FAFC]">
      <div className="min-h-screen w-full bg-dot-black/[0.6]  relative">
        {/* Radial gradient overlay */}
        <div className="fixed pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:linear-gradient(to_right,black,transparent_30%,transparent_70%,black)] "></div>{" "}
        {/* Content */}
        <div className="relative z-10">
          <Hero />
          <ProjectsSection />
          <TapeSection />
          <TestimonialsSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
