"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
// import ArrowDown from "@/assets/icons/arrow-down.svg";
import { ArrowDown } from "lucide-react"; // Add this import at the top

const Hero = () => {
  return (
    <div className="min-h-screen ">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Turning ideas into <br /> seamless Experiences
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="mx-auto  max-w-2xl text-center"
        >
          <p className="text-xl text-slate-300">
            Hello there 👋, I&apos;m{" "}
            <span className="text-slate-100 font-semibold">Sahil Shadwal</span>,
            a Full-Stack Developer based in India.
          </p>
        </motion.div>
        <div className="flex items-center space-x-4 ">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-white/90 transition-colors"
          >
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-white/90 transition-colors"
          >
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </motion.button>
        </div>
      </LampContainer>
    </div>
  );
};

export default Hero;
