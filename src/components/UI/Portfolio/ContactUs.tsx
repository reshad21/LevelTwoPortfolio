/* eslint-disable react/no-unescaped-entities */
"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef } from "react";

export default function ContactUs() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_m5j9tp8",
          "template_pjuuara",
          form.current,
          "H1FDX9WkK7hJQntOL"
        )
        .then(
          () => {
            alert("Message sent successfully!");
          },
          () => {
            alert("Failed to send the message. Please try again later.");
          }
        );
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-200 py-16 md:py-24 px-4 md:px-8 lg:px-12 rounded-3xl shadow-2xl mb-8 border border-slate-800/50 group">
      
      {/* Background Glow */}

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-lg md:text-2xl font-medium text-indigo-400 uppercase tracking-wide">
            Let's Connect
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
            Get in Touch
          </h3>
          <p className="text-sm sm:text-base text-slate-400 mt-4 px-4">
            Feel free to reach out for any project or question.
          </p>
        </div>

        {/* FORM WITH ANIMATED BORDER */}
        <div className="relative rounded-2xl overflow-hidden p-[2px] flex justify-center items-center">
          
          {/* Animated Border Layer */}
          <motion.div
            className="absolute z-0 w-[250%] h-[250%]"
            style={{
              background: "conic-gradient(from 0deg, transparent 75%, rgba(255, 255, 255, 1) 100%)"
            }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear"
            }}
          />

          {/* Inner Mask to hide the center of the gradient */}
          <div className="absolute inset-[2px] bg-slate-950 rounded-[14px] z-0" />

          {/* Actual Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="relative z-10 w-full bg-slate-950 p-6 sm:p-8 md:p-10 shadow-xl space-y-6 sm:space-y-8 rounded-[14px]"
          >
            <div className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm text-indigo-300 mb-2 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-slate-950/50 border border-slate-800 text-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-indigo-300 mb-2 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-slate-950/50 border border-slate-800 text-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-indigo-300 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl bg-slate-950/50 border border-slate-800 text-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition resize-none"
                  placeholder="Enter your message"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold uppercase tracking-widest shadow-lg transition transform active:scale-95 flex justify-center items-center gap-2"
            >
              Send Message ✈
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}