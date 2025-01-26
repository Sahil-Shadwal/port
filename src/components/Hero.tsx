"use client";
import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { ArrowDown } from "lucide-react";
import { HeroHighlight } from "./ui/hero-highlight";

const mymy = localFont({
  src: "../assets/font/morse-cyeon.otf",
  display: "swap",
});
const shadwal = localFont({
  src: "../assets/font/Amarante-Regular.ttf",
  display: "swap",
});
const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <HeroHighlight className="h-screen">
        {" "}
        <section className="min-h-screen relative flex flex-col items-center justify-center px-4 py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center space-y-8 md:space-y-12 mb-16 md:mb-24">
              <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className={`${mymy.className} bg-gradient-to-br from-gray-300 to-gray-100 py-4 bg-clip-text 
                text-5xl md:text-7xl lg:text-9xl font-medium tracking-tight text-transparent 
                leading-tight md:leading-tight lg:leading-tight px-4`}
              >
                <span className="text-white ">SHADWAL</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="max-w-2xl mx-auto px-4"
              >
                <p
                  className={`${shadwal.className} text-lg md:text-xl text-slate-300`}
                >
                  Hello there 👋, I&apos;m{" "}
                  <span className="text-slate-700 font-semibold">
                    Sahil Shadwal
                  </span>
                  , a Full-Stack Developer based in India.
                </p>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 px-4 md:px-6 mb-16 md:mb-24">
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.4,
                  duration: 1.2,
                  ease: [0.19, 1, 0.22, 1],
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex h-12 animate-shimmer items-center justify-center 
    rounded-md border border-slate-200 
    bg-[linear-gradient(110deg,#ffffff,45%,#f1f5f9,55%,#ffffff)] 
    bg-[length:200%_100%] px-6 font-medium text-slate-800 
    transition-colors focus:outline-none focus:ring-2 
    focus:ring-slate-200 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span></span>
                <a onClick={scrollToProjects} className="font-semibold">
                  Explore my work
                </a>
                <ArrowDown size={20} />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.4,
                  duration: 1.2,
                  ease: [0.19, 1, 0.22, 1],
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex h-12 animate-shimmer items-center justify-center 
    rounded-md border border-slate-800 
    bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
    bg-[length:200%_100%] px-6 font-medium text-slate-400 
    transition-colors focus:outline-none focus:ring-2 
    focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span>👋</span>
                <a className="font-semibold">Reach Out to Me</a>
              </motion.button>
            </div>
          </div>
        </section>
      </HeroHighlight>
    </div>
  );
};

export default Hero;
