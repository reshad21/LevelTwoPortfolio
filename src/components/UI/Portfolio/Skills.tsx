"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const techSkills = [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Express.js", level: 95 },
  ];

  const softSkills = [
    { name: "Problem-Solving", level: 85 },
    { name: "Communication", level: 80 },
    { name: "Teamwork", level: 90 },
    { name: "Adaptability", level: 75 },
    { name: "Time Management", level: 85 },
  ];

  const renderSkills = (skills: { name: string; level: number }[], type: "tech" | "soft") => (
    <motion.div 
      className="flex flex-wrap gap-3 sm:gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {}
      }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, scale: 0.8, y: 20 },
            visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
          }}
          whileHover={{ scale: 1.05, y: -2 }}
          className={`group relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 bg-slate-800/30 hover:bg-slate-800/80 border border-slate-700/50 rounded-2xl transition-colors duration-300 shadow-sm cursor-default overflow-hidden
            ${
              type === "tech"
                ? "border-indigo-500/20 hover:border-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.05)] hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                : "border-purple-500/20 hover:border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.05)] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            }`}
        >
          {/* Animated shine sweep effect (Continuous) */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: index * 0.2 }}
            className={`absolute inset-0 bg-gradient-to-r pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-300
            ${
              type === "tech"
                ? "from-indigo-500/0 via-indigo-500/20 to-indigo-500/0"
                : "from-purple-500/0 via-purple-500/20 to-purple-500/0"
            }`}
          ></motion.div>

          {/* Glowing dot (Continuous Pulse) */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: index * 0.2 }}
            className={`w-2 h-2 rounded-full shadow-lg
            ${
              type === "tech"
                ? "bg-indigo-400 shadow-indigo-500/80"
                : "bg-purple-400 shadow-purple-500/80"
            }`}
          ></motion.div>

          <span
            className={`text-sm sm:text-base font-semibold tracking-wide transition-colors duration-300 relative z-10
            ${
              type === "tech"
                ? "text-slate-300 group-hover:text-indigo-300"
                : "text-slate-300 group-hover:text-purple-300"
            }`}
          >
            {skill.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-200 py-16 md:py-24 px-4 md:px-8 lg:px-12 rounded-3xl shadow-2xl my-8 border border-slate-800/50 group">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[600px] md:h-[600px] bg-purple-500/5 rounded-full blur-[100px] -z-10 mix-blend-screen transition-opacity duration-700 group-hover:bg-purple-500/10"></div>
      
      <div className="max-w-6xl mx-auto z-10">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-lg md:text-2xl font-medium text-indigo-400 tracking-wide uppercase">
            Expertise
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Professional Skills
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Technical Skills */}
          <div className="bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-800/60 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-500 hover:border-indigo-500/30 hover:bg-slate-900/60 group/card flex flex-col">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[80px] -z-10 group-hover/card:bg-indigo-500/20 transition-colors duration-700"></div>
            <div className="flex items-center space-x-4 mb-8 border-b border-slate-800 pb-6">
              <span className="text-3xl bg-indigo-500/20 p-3 rounded-xl text-indigo-400 shadow-inner shadow-indigo-500/30">💻</span>
              <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">Technical Skills</h4>
            </div>
            <div className="flex-1">{renderSkills(techSkills, "tech")}</div>
          </div>

          {/* Soft Skills */}
          <div className="bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-800/60 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:bg-slate-900/60 group/card flex flex-col">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[80px] -z-10 group-hover/card:bg-purple-500/20 transition-colors duration-700"></div>
            <div className="flex items-center space-x-4 mb-8 border-b border-slate-800 pb-6">
              <span className="text-3xl bg-purple-500/20 p-3 rounded-xl text-purple-400 shadow-inner shadow-purple-500/30">🤝</span>
              <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">Soft Skills</h4>
            </div>
            <div className="flex-1">{renderSkills(softSkills, "soft")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
