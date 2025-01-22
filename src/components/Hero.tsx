"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

const Hero = () => {
  return (
    <HeroHighlight className="h-screen">
      <section className="min-h-screen relative flex flex-col items-center justify-center px-4 py-20 md:py-32 overflow-hidden">
        {/* Main Content Container */}
        <div className="container mx-auto max-w-7xl">
          {/* Hero Text */}
          <div className="text-center space-y-8 md:space-y-12 mb-16 md:mb-24">
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-br from-slate-600 to-slate-900 py-4 bg-clip-text 
              text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-transparent 
              leading-tight md:leading-tight lg:leading-tight px-4"
            >
              {/* <Highlight> */}
              Turning ideas into
              <br className="hidden md:block" />
              seamless Experiences
              {/* </Highlight> */}
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
              <p className="text-lg md:text-xl text-slate-600">
                Hello there 👋, I&apos;m{" "}
                <span className="text-slate-900 font-semibold">
                  <Highlight>Sahil Shadwal</Highlight>
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
                delay: 1.2,
                duration: 1.2,
                ease: [0.19, 1, 0.22, 1],
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 
              border border-slate-200 bg-slate-900 text-white 
              h-12 px-8 rounded-xl hover:bg-slate-800 transition-all shadow-lg"
            >
              <span className="font-semibold">Explore My Work</span>
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 
              border border-slate-200 bg-gradient-to-b from-teal-600 to-teal-700 
              text-white h-12 px-8 rounded-xl 
              hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg"
            >
              <span>👋</span>
              <span className="font-semibold">Reach Out to Me</span>
            </motion.button>
          </div>
        </div>

        {/* Memoji Image */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-50"
        >
          <Image
            src={memojiImage}
            className="w-[120px] h-[120px] md:w-[160px] md:h-[160px]"
            alt="White Developer behind the laptop"
            priority
          />
        </motion.div> */}
      </section>
    </HeroHighlight>
  );
};

export default Hero;
