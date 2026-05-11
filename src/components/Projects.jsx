"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {

  const [previewVideo, setPreviewVideo] = useState("");

  const projects = [

    {
      id: 1,
      title: "LiveSync Task Manager",

      description:
        "A real-time task management app featuring authentication, role-based access, task assignment, and live synchronization.",

      desktop: "/images/LiveSync.png",

      video: "/videos/LiveSync_TaskManager.mp4",

      usedTechs: [
        "Node.js",
        "Express",
        "MongoDB",
        "Vanilla JS",
        "Socket.IO",
        "Bootstrap",
      ],

      liveLink:
        "https://livesync-taskmanager.onrender.com",

      githubLink:
        "https://github.com/sonu101994/LiveSync-TaskManager",
    },

    {
      id: 2,
      title: "Personal Portfolio",

      description:
        "A modern and responsive developer portfolio to showcase my projects, skills, certifications and development journey.",

      desktop: "/images/portfolio.png",

      video: "/videos/portfolio.mp4",

      usedTechs: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
      ],

      liveLink:
        "https://vercel.com/sonu101994s-projects/bini-portfolio",

      githubLink:
        "https://github.com/sonu101994/Bini-Portfolio",
    },

    {
      id: 3,
      title: "Movie App",

      description:
        "Responsive movie browsing application with trailer viewing, favorites management and API integration.",

      desktop: "/images/movie-desktop.png",

      video: "/videos/movie-app.mp4",

      usedTechs: [
        "React",
        "API Fetching",
        "Bootstrap",
      ],

      liveLink:
        "https://movie-search-app-flax-five.vercel.app/",

      githubLink:
        "https://github.com/sonu101994/Movie_Search_App",
    },

    {
      id: 4,
      title: "Tutorials Freak",

      description:
        "Modern educational landing page with responsive sections, clean UI and optimized layout structure.",

      desktop: "/images/tutorial-desktop.png",

      video: "/videos/tutorial-freak.mp4",

      usedTechs: [
        "HTML5",
        "CSS",
        "Bootstrap",
      ],

      liveLink:
        "https://sonu101994.github.io/tutorials-freak-LandingPage/",

      githubLink:
        "https://github.com/sonu101994/tutorials-freak-LandingPage/",
    },

    {
      id: 5,
      title: "Blinkit Landing Page",

      description:
        "A Blinkit-inspired responsive frontend UI focused on clean layouts, responsiveness and modern design principles.",

      desktop: "/images/blinkit-desk.png",

      video: "/videos/blinkit-landing-page.mp4",

      usedTechs: [
        "HTML5",
        "CSS",
        "JavaScript",
      ],

      liveLink:
        "https://your-blinkit.vercel.app",

      githubLink:
        "https://github.com/sonu101994/blinkit-landing-page",
    },

  ];

  return (

    <section
      id="projects"
      className="py-28 px-6 relative overflow-hidden bg-[#101010]"
    >

      {/* Glow */}
      <div
        className="
          absolute
          left-0
          top-0
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
          className="text-center mb-20"
        >

          <p className="text-white/40 uppercase tracking-[4px] text-sm mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl lg:text-5xl font-black">
            Featured
            <span className="gradient-text"> Projects</span>
          </h2>

        </motion.div>

        {/* PROJECTS */}
        <div className="flex flex-col gap-10">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="
                glass
                border
                border-white/[0.06]
                rounded-3xl
                overflow-hidden
                flex
                flex-col
                lg:flex-row
                group
              "
            >

              {/* IMAGE  */}
              <div
                className="
                  relative
                  lg:w-[42%]
                  h-[240px]
                  lg:h-auto
                  overflow-hidden
                  
                "
              >

                <Image
                  src={project.desktop}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    group-hover:scale-105
                    transition-all
                    duration-700
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/35 " />

                {/* DEMO BUTTON TRIGGER */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    z-20
                  "
                >
                  {/* BUTTON WHICH TRIGGER DEMO VIDEO */}
                  <button
                    onClick={() =>
                      setPreviewVideo(project.video)
                    }
                    className="
                      px-6
                      py-3
                      rounded-2xl
                      bg-gradient-to-r
                      from-cyan-500
                      via-blue-600
                      to-indigo-600
                      text-white
                      font-medium
                      hover:scale-105
                      transition-all
                      duration-300
                      shadow-[0_0_25px_rgba(59,130,246,0.35)]
                    "
                  >
                    Watch Demo
                  </button>

                </div>

              </div>

              {/* TEXT CONTENT */}
              <div
                className="
                  flex-1
                  p-8
                  flex
                  flex-col
                "
              >

                <div>

                  <h3 className="text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-8 mb-8">
                    {project.description}
                  </p>

                </div>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 mb-10">

                  {project.usedTechs.map((tech, i) => (

                    <span
                      key={i}
                      className="
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        bg-white/[0.04]
                        border
                        border-white/[0.06]
                        text-gray-300
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* BUTTONS */}
                <div className="flex items-center gap-4 mt-auto">

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-gradient-to-r
                      from-cyan-500
                      via-blue-600
                      to-indigo-600
                      rounded-2xl
                      py-3.5
                      font-medium
                      text-white
                      hover:scale-[1.02]
                      hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]
                      transition-all
                      duration-300
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      glass
                      flex
                      items-center
                      justify-center
                      border
                      border-white/[0.06]
                      hover:border-cyan-400/30
                      hover:bg-cyan-500/10
                      hover:scale-110
                      transition-all
                      duration-300
                    "
                  >
                    <FaGithub />
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* DEMO VIDEO OF PROJECTS */}
      <AnimatePresence>

        {previewVideo && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black/95
              z-[10000]
              flex
              items-center
              justify-center
              p-4
            "
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setPreviewVideo("")}
              className="
                absolute
                top-6
                right-6
                w-12
                h-12
                rounded-full
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                text-white
                text-2xl
                hover:scale-110
                transition-all
                duration-300
                z-50
              "
            >
              ×
            </button>

            {/* VIDEO PLAYING  */}
            <motion.video
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={previewVideo}
              controls
              autoPlay
              playsInline
              className="
                w-full
                max-w-6xl
                max-h-[85vh]
                rounded-2xl
                object-contain
              "
            />

          </motion.div>

        )}

      </AnimatePresence>

    </section>

  );
}