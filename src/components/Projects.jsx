"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {

  const [previewVideo, setPreviewVideo] = useState(null);

  const projects = [

    {
      id: 3,
      title: "Movie App",
      description:
        "Responsive movie browsing application with trailer viewing, favorites management and API integration.",

      desktop: "/images/movie-desktop.png",

      video: "/videos/movie-app.mp4",

      usedTechs: ["React", "API Fetching", "Bootstrap"],

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

      usedTechs: ["HTML5", "CSS", "Bootstrap"],

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

      usedTechs: ["HTML5", "CSS", "JavaScript"],

      liveLink: "https://your-blinkit.vercel.app",

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
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
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

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-10">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                glass
                rounded-3xl
                overflow-hidden
                border
                border-white/[0.06]
                group
              "
            >

              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden">

                {/* BACKGROUND IMAGE */}
                <Image
                  src={project.desktop}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    scale-110
                    blur-[2px]
                    group-hover:scale-125
                    transition-all
                    duration-700
                  "
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/50" />

                {/* BUTTON */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    z-20
                    px-4
                  "
                >

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

              {/* CONTENT */}
              <div className="p-7">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-3 mb-8">

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

                {/* LINKS */}
                <div className="flex items-center gap-4">

                  <a
                    href={project.liveLink}
                    target="_blank"
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
                      py-3
                      font-medium
                      text-white
                      hover:scale-[1.03]
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
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      glass
                      flex
                      items-center
                      justify-center
                      hover:scale-110
                      transition-all
                      duration-300
                      border
                      border-white/[0.06]
                      hover:border-cyan-400/30
                      hover:bg-cyan-500/10
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

      {/* VIDEO PREVIEW OVERLAY */}
      <AnimatePresence>

        {previewVideo && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black
              z-[9999]
              flex
              items-center
              justify-center
            "
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setPreviewVideo(null)}
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

            {/* VIDEO */}
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
                max-w-7xl
                max-h-[85vh]
                object-contain
              "
            />

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}