/* eslint-disable react/no-unescaped-entities */
import React from "react";

const MyIntroduction: React.FC = () => {
  return (
    <section className="text-[#e3e2fd] py-20 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#9d98f0]">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi, I'm{" "}
            <span className="font-semibold text-[#d182e3]">
              Rashed Uzzaman Reshad
            </span>
            , a passionate{" "}
            <span className="font-semibold text-[#ff4c30]">Web Developer</span>{" "}
            with a strong background in{" "}
            <span className="font-semibold text-[#d182e3]">
              building modern web applications
            </span>
            . I specialize in creating innovative solutions that make an impact.
            Whether it's building seamless user experiences, crafting responsive
            designs, or solving challenging problems, I thrive on creativity and
            precision.
          </p>
          <p className="text-lg mt-4">
            Outside of work, I enjoy{" "}
            <span className="font-semibold text-[#ff4c30]">
              bike riding, traveling, playing outdoor games, and watching movies
            </span>
            . I'm always eager to learn, collaborate, and grow in my field.
          </p>
        </div>

        {/* Right Content */}
        <div className="bg-gradient-to-br from-[#9d98f0] to-[#d182e3] rounded-xl shadow-lg p-6 lg:p-8 relative">
          {/* Gradient Accent */}
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#f97a61] to-[#ff4c30] rounded-full blur-3xl opacity-50"></div>

          <h3 className="text-3xl font-bold text-[#05021d] mb-8 text-center">
            Quick Facts
          </h3>

          <ul className="space-y-6 text-[#05021d]">
            <li className="flex items-center space-x-4 hover:bg-[#f9e6dc] p-4 rounded-lg transition-colors duration-300">
              <span className="text-[#ff4c30] text-xl">📛</span>
              <div>
                <p className="font-semibold text-[#812297]">Name:</p>
                <p className="text-lg">Rashed Uzzaman Reshad</p>
              </div>
            </li>
            <li className="flex items-center space-x-4 hover:bg-[#f9e6dc] p-4 rounded-lg transition-colors duration-300">
              <span className="text-[#ff4c30] text-xl">💼</span>
              <div>
                <p className="font-semibold text-[#812297]">Designation:</p>
                <p className="text-lg">Web Developer</p>
              </div>
            </li>
            <li className="flex items-center space-x-4 hover:bg-[#f9e6dc] p-4 rounded-lg transition-colors duration-300">
              <span className="text-[#ff4c30] text-xl">📍</span>
              <div>
                <p className="font-semibold text-[#812297]">Location:</p>
                <p className="text-lg">
                  Barishal Sadar, Barishal, 8200, Bangladesh
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-4 hover:bg-[#f9e6dc] p-4 rounded-lg transition-colors duration-300">
              <span className="text-[#ff4c30] text-xl">⚽</span>
              <div>
                <p className="font-semibold text-[#812297]">Hobbies:</p>
                <p className="text-lg">
                  Bike riding, traveling, playing outdoor games, watching movies
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-4 hover:bg-[#f9e6dc] p-4 rounded-lg transition-colors duration-300">
              <span className="text-[#ff4c30] text-xl">🎉</span>
              <div>
                <p className="font-semibold text-[#812297]">Fun Fact:</p>
                <p className="text-lg">
                  I’m an avid biker who enjoys staying active with sports like
                  cricket, table tennis, and carom.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MyIntroduction;
