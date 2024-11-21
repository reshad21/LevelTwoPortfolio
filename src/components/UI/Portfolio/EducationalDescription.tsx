/* eslint-disable react/no-unescaped-entities */
import React from "react";

const EducationalDescription: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#05021d] to-[#5e0a99] text-[#e3e2fd] py-20 px-8 rounded-xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#e3e2fd]">
            Educational Background
          </h2>
          <p className="text-lg leading-relaxed text-[#d182e3]">
            With a solid academic foundation in Computer Science and Technology,
            I have honed my skills in web development and software engineering.
            This knowledge empowers me to craft innovative solutions and
            contribute meaningfully to the tech community.
          </p>
        </div>

        {/* Right Content */}
        <div className="bg-[#9d98f0] p-6 lg:p-8 rounded-xl shadow-xl relative">
          {/* Accent Element */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#f97a61] to-[#ff4c30] rounded-full blur-2xl opacity-50 -translate-x-12 -translate-y-12"></div>

          <h3 className="text-3xl font-bold text-[#05021d] mb-6 text-center">
            Key Educational Milestones
          </h3>

          <ul className="space-y-8 text-[#05021d]">
            <li className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 bg-gradient-to-r from-[#f9e6dc] to-[#ffffff] hover:bg-gradient-to-r hover:from-[#d182e3] hover:to-[#9d98f0]">
              <span className="text-[#ff4c30] text-2xl">🎓</span>
              <div>
                <p className="font-semibold text-[#9d98f0]">Degree:</p>
                <p className="text-lg">
                  Bachelor of Science in Computer Science
                </p>
                <p className="text-sm text-gray-600">
                  Global University Of Bangladesh | 2018 - 2022
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 bg-gradient-to-r from-[#f9e6dc] to-[#ffffff] hover:bg-gradient-to-r hover:from-[#d182e3] hover:to-[#9d98f0]">
              <span className="text-[#ff4c30] text-2xl">📚</span>
              <div>
                <p className="font-semibold text-[#9d98f0]">Major:</p>
                <p className="text-lg">
                  Web Development & Software Engineering
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 bg-gradient-to-r from-[#f9e6dc] to-[#ffffff] hover:bg-gradient-to-r hover:from-[#d182e3] hover:to-[#9d98f0]">
              <span className="text-[#ff4c30] text-2xl">🏆</span>
              <div>
                <p className="font-semibold text-[#9d98f0]">Achievements:</p>
                <p className="text-lg">
                  Dean's List, Outstanding Project Award
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 bg-gradient-to-r from-[#f9e6dc] to-[#ffffff] hover:bg-gradient-to-r hover:from-[#d182e3] hover:to-[#9d98f0]">
              <span className="text-[#ff4c30] text-2xl">📖</span>
              <div>
                <p className="font-semibold text-[#9d98f0]">Certification:</p>
                <p className="text-lg">
                  Certified Web Developer (Frontend & Backend)
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationalDescription;
