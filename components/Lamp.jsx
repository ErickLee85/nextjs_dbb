"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";

function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        style={{fontSize:'clamp(3rem,5vw,5rem)'}}
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-9xl">
        The Services<br /> we offer
      </motion.h1>
    </LampContainer>
  );
}

export default LampDemo;
