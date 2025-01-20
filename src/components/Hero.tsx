"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";

const Hero = () => {
  return (
    <div className="min-h-screen">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
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
          className="mx-auto mt-8 max-w-2xl text-center"
        >
          <p className="text-xl text-slate-300">
            Hello there 👋, I&apos;m{" "}
            <span className="text-slate-100 font-semibold">Sahil Shadwal</span>,
            a Full-Stack Developer based in India.
          </p>
        </motion.div>
      </LampContainer>
    </div>
  );
};

export default Hero;
