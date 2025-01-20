"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";

const Hero = () => {
  return (
    <div className="min-h-screen relative">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-7xl px-4"
        >
          Turning ideas into <br className="hidden md:block" /> seamless
          Experiences
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="mx-auto max-w-2xl text-center px-4"
        >
          <p className="text-lg md:text-xl mt-4 text-slate-300">
            Hello there 👋, I&apos;m{" "}
            <span className="text-slate-100 font-semibold">Sahil Shadwal</span>,
            a Full-Stack Developer based in India.
          </p>
        </motion.div>
      </LampContainer>

      <div className="absolute left-0 right-0 bottom-20 sm:bottom-32 md:bottom-48 z-50">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 px-6">
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
              duration: 1.2,
              ease: [0.19, 1, 0.22, 1],
              y: {
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white h-12 px-6 rounded-xl hover:bg-white/20 transition-all shadow-lg"
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
              y: {
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 
            bg-gradient-to-b from-teal-500/30 to-transparent 
            backdrop-blur-md text-white h-12 px-6 rounded-xl 
            hover:bg-white/10 transition-all shadow-lg"
          >
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
