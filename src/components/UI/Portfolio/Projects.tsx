"use client";
/* eslint-disable react/no-unescaped-entities */
import { useGetAllProject } from "@/hooks/getAllProject.hook";
import { TProjectData } from "@/types";
import { convert } from "html-to-text";
import React, { useEffect } from "react";

const Projects: React.FC = () => {
  // Fetch all projects
  const {
    mutate: getAllProject,
    error: fetchError,
    isSuccess: isFetchSuccess,
    data,
  } = useGetAllProject();

  // Fetch projects on component mount
  useEffect(() => {
    getAllProject();
  }, [getAllProject]);

  if (!isFetchSuccess) {
    return (
      <div className="flex justify-center items-center py-24 bg-slate-950 rounded-3xl border border-slate-800/50 mb-8 shadow-2xl">
        <p className="text-indigo-400 font-medium animate-pulse tracking-wide">
          {fetchError ? "Error fetching projects." : "Loading projects..."}
        </p>
      </div>
    );
  }

  // Function to truncate content to a specified word limit
  const truncateContent = (content: string, wordLimit: number) => {
    const plainText = convert(content, { wordwrap: false });
    const words = plainText.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : plainText;
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-200 py-16 md:py-24 px-4 md:px-8 lg:px-12 rounded-3xl shadow-2xl mb-8 border border-slate-800/50 group">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen transition-opacity duration-700 opacity-50 group-hover:opacity-70"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 md:w-[400px] md:h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen transition-opacity duration-700 opacity-50 group-hover:opacity-70"></div>

      <div className="max-w-6xl mx-auto z-10">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-lg md:text-2xl font-medium text-indigo-400 tracking-wide uppercase">
            Portfolio
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Selected Works
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data?.data && data?.data.length > 0 ? (
            data.data.map((project: TProjectData) => (
              <div
                key={project._id}
                className="group/card flex flex-col bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800/60 p-6 sm:p-8 shadow-xl relative overflow-hidden transition-all duration-500 hover:border-indigo-500/50 hover:bg-slate-900/80 hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.3)] hover:-translate-y-2"
              >
                {/* Card Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -z-10 group-hover/card:bg-indigo-500/20 transition-colors duration-500"></div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover/card:text-indigo-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {truncateContent(project.content, 25)}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech?.length > 0 ? (
                        project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-[11px] font-medium bg-indigo-500/10 text-indigo-300 rounded-md border border-indigo-500/20 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-slate-500 italic">
                          No technologies listed
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto block w-full text-center px-4 py-3 bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-sm font-bold uppercase tracking-widest rounded-xl transition-all duration-300 ring-1 ring-slate-700 hover:ring-indigo-500 shadow-md transform active:scale-95"
                >
                  View Project
                </a>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 flex justify-center items-center bg-slate-900/40 rounded-2xl border border-slate-800/60">
              <p className="text-slate-400 text-lg">
                No projects available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
