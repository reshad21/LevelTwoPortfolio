/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const milestones = [
  {
    icon: "🎓",
    label: "Degree",
    title: "Bachelor of Science in Computer Science",
    subtitle: "Global University Of Bangladesh",
    period: "2018 - 2022",
    color: "indigo",
  },
  {
    icon: "📚",
    label: "Major",
    title: "Web Development & Software Eng.",
    subtitle: "Specialized in scalable frontend architecture and backend systems.",
    period: "Academic Focus",
    color: "purple",
  },
  {
    icon: "🏆",
    label: "Achievements",
    title: "Dean's List & Outstanding Project Award",
    subtitle: "Recognized for top-tier academic excellence & senior capstone.",
    period: "Awards",
    color: "indigo",
  },
  {
    icon: "📖",
    label: "Certification",
    title: "Certified Web Developer",
    subtitle: "Comprehensive training in modern full-stack web technologies.",
    period: "Professional",
    color: "purple",
  },
];

const EducationalDescription: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-200 py-16 md:py-24 px-4 md:px-8 lg:px-12 rounded-3xl shadow-2xl mb-8 border border-slate-800/50 group">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen transition-opacity duration-700 opacity-50 group-hover:opacity-70"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen transition-opacity duration-700 opacity-50 group-hover:opacity-70"></div>

      <div className="max-w-5xl mx-auto z-10 relative">
        {/* Header Section */}
        <motion.div
          className="text-center space-y-6 mb-16 md:mb-24"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <h2 className="text-lg md:text-2xl font-semibold text-indigo-400 tracking-[0.2em] md:tracking-[0.3em] uppercase">
              Academic Journey
            </h2>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 leading-tight pb-2">
              Educational Background
            </h3>
          </div>
          
          <div className="pt-2 flex justify-center">
            <motion.div 
               className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
               initial={{ width: 0 }}
               whileInView={{ width: 96 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.3 }}
            ></motion.div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed text-balance max-w-3xl mx-auto mt-6">
            With a solid academic foundation in{" "}
            <span className="font-semibold text-slate-200">
              Computer Science and Technology
            </span>
            , I have honed my skills in web development and software engineering.
            This knowledge empowers me to craft innovative solutions and
            contribute meaningfully to the tech community.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div ref={containerRef} className="relative z-10 w-full mx-auto pb-10">
          {/* Center Vertical Line (Hidden on tiny screens, aligned left on small, centered on large) */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-1 bg-slate-800 rounded-full -translate-x-1/2 opacity-50 z-0"></div>
          
          {/* Animated Highlight Line */}
          <motion.div 
            className="absolute top-0 left-6 md:left-1/2 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent rounded-full -translate-x-1/2 z-0"
            style={{ height: lineHeight }}
          ></motion.div>

          <div className="space-y-12 md:space-y-24">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative flex items-center md:justify-between flex-col md:flex-row w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 50, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-950 border-4 border-slate-800 z-10 shadow-xl group">
                    <motion.div 
                      className={`absolute inset-0 rounded-full ${
                        item.color === "indigo" ? "bg-indigo-500/20" : "bg-purple-500/20"
                      } blur-md`}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    ></motion.div>
                    <span className="text-xl md:text-2xl relative z-10">{item.icon}</span>
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${
                    isEven ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"
                  }`}>
                    <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 p-6 md:p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/30 group relative overflow-hidden">
                      
                      {/* Interactive Hover Glow */}
                      <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-32 h-32 ${item.color === "indigo" ? "bg-indigo-500/10" : "bg-purple-500/10"} rounded-full blur-3xl transition-colors duration-500 group-hover:bg-opacity-20`}></div>

                      <div className="relative z-10">
                        <div className={`inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest mb-4 ${
                          item.color === "indigo" 
                            ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" 
                            : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        }`}>
                          {item.label}
                        </div>
                        
                        <h4 className="text-xl md:text-2xl font-bold text-slate-100 mb-2 leading-snug">
                          {item.title}
                        </h4>
                        
                        <p className="text-base text-slate-300 font-medium mb-3">
                          {item.subtitle}
                        </p>
                        
                        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-800">
                          <span className={`w-2 h-2 rounded-full animate-pulse ${item.color === "indigo" ? "bg-indigo-500" : "bg-purple-500"}`}></span>
                          <span className={`text-sm font-semibold tracking-wider ${item.color === "indigo" ? "text-indigo-300" : "text-purple-300"}`}>
                            {item.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalDescription;
