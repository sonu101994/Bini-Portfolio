"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiBootstrap,
} from "react-icons/si";

export default function About() {

  const skills = [
    {
      name: "React",
      icon: <FaReact />,
    },

    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },

    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },

    {
      name: "Express.js",
      icon: <SiExpress />,
    },

    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },

    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },

    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
    },

    {
      name: "Bootstrap",
      icon: <SiBootstrap />,
    },

    {
      name: "GitHub",
      icon: <FaGithub />,
    },

    {
      name: "HTML",
      icon: <FaHtml5 />,
    },

    {
      name: "CSS",
      icon: <FaCss3Alt />,
    },
  ];

  return (

    <section
      id="about"
      className="
        py-28
        px-1
        lg:px-6
        relative
        overflow-hidden
        bg-[#101010]
      "
    >

      {/* BACKGROUND */}
      <div
        className="
          absolute
          top-0
          right-0
          w-[400px]
          h-[400px]
          bg-white/[0.03]
          blur-[120px]
          rounded-full
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-white/40 uppercase tracking-[4px] text-sm mb-4">
            About Me
          </p>

          <h2 className="text-3xl lg:text-5xl font-black leading-tight">
            Building Modern
            <span className="gradient-text">
              {" "}Web Applications
            </span>
          </h2>

        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            bg-[#171717]
            border
            border-white/[0.06]
            rounded-[36px]
            overflow-hidden
          "
        >

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}
            <div className="p-8 md:p-12">

              {/* TITLE */}
              <h3
                className="
                  text-3xl
                  lg:text-4xl
                  font-black
                  leading-tight
                  mb-6
                  text-[#f5f5f5]
                "
              >
                Junior MERN Stack Developer
              </h3>

              {/* TEXT */}
              <div
                className="
                  space-y-5
                  text-[#a0a0a0]
                  leading-8
                  text-[15px]
                "
              >

                <p>
                  Hi, I’m Bhawani Singh. After working in different non-tech fields for 5 years, I transitioned into web development to build my career in tech.
                </p>

                <p>
                  Recently completed a certified MERN Stack Developer course from WsCube Tech Jaipur with hands-on experience in React, Next.js, Node.js, Express.js and MongoDB through real-world projects.
                </p>

                <p>
                  I also use modern AI-assisted tools to improve productivity, problem-solving and development workflows while building responsive web applications.
                </p>

                <p className="text-lg font-semibold text-[#f5f5f5]">
                  Open to Junior Developer Opportunities & Freelance Projects
                </p>

              </div>

            </div>

            {/* RIGHT */}
            <div
              className="
                border-t
                lg:border-t-0
                lg:border-l
                border-white/[0.06]
                bg-[#151515]
                p-8
                md:p-12
                flex
                flex-col
                justify-center
              "
            >

              <p className="text-white/40 uppercase tracking-[4px] text-sm mb-8">
                Skills
              </p>

              {/* SKILLS GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">

                {skills.map((skill, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                    }}
                    className="
                      rounded-2xl
                      bg-[#1e1e1e]
                      border
                      border-white/[0.06]
                      flex
                      flex-col
                      items-center
                      justify-center
                      py-6
                      gap-3
                      text-center
                      hover:border-blue-500/20
                      transition-all
                      duration-300
                    "
                  >

                    {/* ICON */}
                    <div
                      className="
                        text-3xl
                        text-[#e0e0e0]
                        transition-all
                        duration-300
                      "
                    >
                      {skill.icon}
                    </div>

                    {/* NAME */}
                    <p
                      className="
                        text-sm
                        text-[#b0b0b0]
                        font-medium
                      "
                    >
                      {skill.name}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}