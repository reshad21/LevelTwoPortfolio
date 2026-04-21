"use client";
/* eslint-disable react/no-unescaped-entities */
import { useGetDesignation } from "@/hooks/getDesignation.hook";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Designation: React.FC = () => {
  const { mutate: getDesignation, data } = useGetDesignation();

  useEffect(() => {
    getDesignation();
  }, [getDesignation]);

  // Fallback for designation title
  const designationTitle = data?.data?.designationTitle || "Web Developer";

  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-200 py-16 md:py-24 px-4 md:px-8 lg:px-12 rounded-3xl shadow-2xl mb-8 border border-slate-800/50 group">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-indigo-500/20 rounded-full blur-3xl -z-10 mix-blend-screen transition-opacity duration-700 opacity-50 group-hover:opacity-70"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 mix-blend-screen transition-opacity duration-700 opacity-50 group-hover:opacity-70"></div>

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 z-10 relative">
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 mt-8 lg:mt-0 w-full">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-lg md:text-2xl font-semibold text-indigo-400 tracking-[0.2em] md:tracking-[0.3em] uppercase">
              Hello, I'm
            </h2>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                Rashed
                <br className="hidden lg:block" /> Uzzaman
              </span>
            </h1>
          </div>

          {/* Main Content */}
          <div className="space-y-8 lg:space-y-10 max-w-lg w-full">
            <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed text-balance">
              A dedicated{" "}
              <span className="font-semibold text-slate-200">
                {designationTitle}
              </span>{" "}
              with expertise in{" "}
              <span className="font-semibold text-indigo-300">
                building modern web applications
              </span>
              . I love crafting impactful solutions that make a real difference.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-5 pt-2">
              <a
                href="https://drive.google.com/file/d/1QV0JFOYJJsS6BFZGXM1vnd1kJz7WT2oN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 md:py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-sm md:text-base font-bold uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ring-1 ring-indigo-500/50 w-full sm:w-auto"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex justify-center items-center relative w-full mt-10 lg:mt-0">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px]">
            {/* Spinning decorative rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-indigo-500/40 z-0"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="absolute -inset-4 sm:-inset-6 rounded-full border border-purple-500/20 z-0 hidden sm:block"
            ></motion.div>

            {/* Glowing back orb */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 blur-2xl opacity-40 animate-pulse mix-blend-screen z-0"></div>

            {/* Floating Orbs (Movable Objects) */}
            <motion.div
              animate={{ y: [0, -25, 0], x: [0, 10, 0], rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-2 -right-4 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 bg-slate-900/60 backdrop-blur-md border border-indigo-500/30 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] z-20 flex justify-center items-center overflow-hidden"
            >
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 25, 0], x: [0, -10, 0], rotate: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-6 -left-4 sm:-left-8 w-14 h-14 sm:w-20 sm:h-20 bg-slate-900/60 backdrop-blur-md border border-purple-500/30 rounded-2xl rotate-12 shadow-[0_0_20px_rgba(168,85,247,0.4)] z-20 flex justify-center items-center overflow-hidden"
            >
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
            </motion.div>

            {/* Profile Image Container (Floating) */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute inset-4 sm:inset-6 rounded-full p-1 sm:p-1.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-slate-900 shadow-[0_0_50px_rgba(99,102,241,0.3)] hover:shadow-[0_0_70px_rgba(168,85,247,0.4)] transition-shadow duration-500 z-10"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950 border-[5px] sm:border-[8px] border-slate-950">
                <Image
                  src="/images/reshad.jpg"
                  alt="Profile picture of Rashed Uzzaman Reshad"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110 grayscale-[15%] hover:grayscale-0"
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 350px, 420px"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Designation;
