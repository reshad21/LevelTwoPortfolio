/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import React from "react";

const MyIntroduction: React.FC = () => {
  return (
    <motion.section
      className="relative overflow-hidden bg-slate-950 text-slate-200 py-16 md:py-24 px-4 md:px-8 lg:px-12 rounded-3xl shadow-2xl mb-8 border border-slate-800/50 group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-64 h-64 md:w-80 md:h-80 bg-indigo-500/10 rounded-full blur-3xl -z-10 mix-blend-screen transition-opacity duration-700 opacity-50 group-hover:opacity-70"></div>
      <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-3xl -z-10 mix-blend-screen transition-opacity duration-700 opacity-50 group-hover:opacity-70"></div>

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Unified Card */}
        <motion.div
          className="bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 sm:p-12 lg:p-16 relative overflow-hidden group/card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          {/* Animated Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          {/* Movable Floating Orbs */}
          <motion.div
            animate={{ y: [-20, 20, -20], x: [-20, 20, -20] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none z-0"
          ></motion.div>

          <motion.div
            animate={{ y: [20, -20, 20], x: [20, -20, 20] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl pointer-events-none z-0"
          ></motion.div>

          <div className="relative z-10">
            {/* Header Section */}
            <div className="text-center lg:text-left space-y-6 mb-12 pb-8 border-b border-slate-700/50">
              <div className="space-y-3 md:space-y-4">
                <h2 className="text-lg md:text-2xl font-semibold text-indigo-400 tracking-[0.2em] md:tracking-[0.3em] uppercase">
                  About Me
                </h2>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                  Who I Am
                </h3>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <motion.div 
                   className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                   initial={{ width: 0 }}
                   whileInView={{ width: 96 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: 0.3 }}
                ></motion.div>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="space-y-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-4xl mx-auto lg:mx-0 mb-12">
              <p>
                Hi, I'm{" "}
                <span className="font-semibold text-slate-200">
                  Rashed Uzzaman
                </span>
                , a passionate{" "}
                <span className="font-semibold text-indigo-300">Web Developer</span>{" "}
                with a strong background in{" "}
                <span className="font-semibold text-indigo-300">
                  building modern web applications
                </span>
                . I specialize in creating innovative solutions that make an impact.
                Whether it's building seamless user experiences, crafting responsive
                designs, or solving challenging problems, I thrive on creativity and
                precision.
              </p>
              <p>
                Outside of work, I enjoy{" "}
                <span className="font-semibold text-slate-200">
                  bike riding, traveling, playing outdoor games, and watching movies
                </span>
                . I'm always eager to learn, collaborate, and grow in my field.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="pt-8 border-t border-slate-700/50">
              <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-8 flex items-center space-x-3">
                <span className="text-indigo-400">✦</span>
                <span>Quick Facts</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="flex items-center space-x-5 p-4 rounded-2xl bg-slate-800/20 hover:bg-slate-800/60 border border-slate-700/30 hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:-translate-y-1 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0 }}
                >
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 pointer-events-none"
                  ></motion.div>
                  
                  <motion.div 
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-2xl shadow-inner shadow-indigo-500/30"
                  >
                    📛
                  </motion.div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs sm:text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-1">Name</p>
                    <p className="text-base sm:text-lg text-slate-200 font-bold leading-tight">Rashed Uzzaman Reshad</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-5 p-4 rounded-2xl bg-slate-800/20 hover:bg-slate-800/60 border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:-translate-y-1 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 pointer-events-none"
                  ></motion.div>

                  <motion.div 
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-2xl shadow-inner shadow-purple-500/30"
                  >
                    💼
                  </motion.div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-widest mb-1">Designation</p>
                    <p className="text-base sm:text-lg text-slate-200 font-bold leading-tight">Web Developer</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-5 p-4 rounded-2xl bg-slate-800/20 hover:bg-slate-800/60 border border-slate-700/30 hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:-translate-y-1 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 2 }}
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 pointer-events-none"
                  ></motion.div>

                  <motion.div 
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-2xl shadow-inner shadow-indigo-500/30"
                  >
                    📍
                  </motion.div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs sm:text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-base sm:text-lg text-slate-200 font-bold leading-tight text-balance">
                      Barishal, Bangladesh
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-5 p-4 rounded-2xl bg-slate-800/20 hover:bg-slate-800/60 border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:-translate-y-1 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 3 }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 pointer-events-none"
                  ></motion.div>

                  <motion.div 
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-2xl shadow-inner shadow-purple-500/30"
                  >
                    🚀
                  </motion.div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-widest mb-1">Hobbies</p>
                    <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed text-balance">
                      Bike riding, traveling, outdoor games, & movies
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MyIntroduction;
