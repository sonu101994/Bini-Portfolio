"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaPlay } from "react-icons/fa";

export default function Projects() {

  /* State To Preview Project Video */
  const [previewVideo, setPreviewVideo] = useState("");
  /* Making An Array Of Project Details */
  const projects = [

    {
      id: 1,
      title: "iShop E-Commerce",
      label: "MERN Stack App",
      description:
      "A complete electronics e-commerce platform with customer storefront, protected admin panel, product search and filtering, cart and wishlist management, address handling, COD checkout, Razorpay online payment flow, order tracking, and admin-side management for products, categories, brands, colors, users, and orders.",
      desktop: "/images/iShop.png",
      video: "/videos/iShop_video_demo.mp4",
      highlights: [
        "Admin panel",
        "products,Cart & wishlist",
        "filter, search & tracking",  
      ],
      usedTechs: [
        "Next.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "Node.js",
        "Express",
        "MongoDB",
        "Razorpay",
      ],
      liveLink: "https://i-shop-8k1t.vercel.app",
      githubLink: "https://github.com/sonu101994/iShop",
    },
    {
      id: 2,
      title: "LiveSync Task Manager",
      label: "Full Stack App",
      description:
        "A real-time task management platform with authentication, role-based access, task assignment, and live synchronization using Socket.IO.",
      desktop: "/images/LiveSync.png",
      video: "/videos/LiveSync_demo.mp4",
      highlights: [
        "Real-time task updates",
        "Role-based dashboards",
        "Secure authentication",
      ],
      usedTechs: [
        "Node.js",
        "Express",
        "MongoDB",
        "Vanilla JS",
        "Socket.IO",
        "Bootstrap",
      ],
      liveLink: "https://live-sync-task-manager.vercel.app",
      githubLink: "https://github.com/sonu101994/LiveSync-TaskManager",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      label: "Portfolio Website",
      description:
        "A modern and responsive developer portfolio designed to showcase projects, skills, certifications, and development journey with smooth interactions.",
      desktop: "/images/portfolio.png",
      video: "/videos/portfolio_demo.mp4",
      highlights: [
        "Responsive layout",
        "Smooth animations",
        "Project showcase",
      ],
      usedTechs: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://vercel.com/sonu101994s-projects/bini-portfolio",
      githubLink: "https://github.com/sonu101994/Bini-Portfolio",
    },
    {
      id: 4,
      title: "Movie App",
      label: "React App",
      description:
        "A responsive movie browsing application with trailer viewing, favorites management, clean UI states, and API-based movie search functionality.",
      desktop: "/images/movie_search.png",
      video: "/videos/movie--search_demo.mp4",
      highlights: [
        "Movie search",
        "Trailer preview",
        "Favorites management",
      ],
      usedTechs: ["React", "REST API", "Bootstrap"],
      liveLink: "https://movie-search-app-flax-five.vercel.app/",
      githubLink: "https://github.com/sonu101994/Movie_Search_App",
    },
    {
      id: 5,
      title: "Tutorials Freak",
      label: "Landing Page",
      description:
        "A modern educational landing page focused on responsive sections, clean visual hierarchy, reusable layout blocks, and consistent spacing.",
      desktop: "/images/tutorial_freak.png",
      video: "/videos/tutorial_demo.mp4",
      highlights: [
        "Responsive sections",
        "Clean layout",
        "Landing page structure",
      ],
      usedTechs: ["HTML5", "CSS", "Bootstrap"],
      liveLink: "https://sonu101994.github.io/tutorials-freak-LandingPage/",
      githubLink: "https://github.com/sonu101994/tutorials-freak-LandingPage/",
    },

  ];

  return (
    <section id="projects" className="py-28 lg:px-6 relative overflow-hidden bg-[#101010]">
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-20"
        >
          <p className="text-white/40 uppercase tracking-[4px] text-sm mb-4">
            Portfolio
          </p>

          <h2 className="text-3xl lg:text-5xl font-black">
            Featured
            <span className="gradient-text"> Projects</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {/* Extracting Details From Projects Array Via Map*/}
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass border border-white/[0.06] rounded-3xl overflow-hidden flex flex-col lg:flex-row group"
            >
              <div className="relative lg:w-[42%] h-[250px] lg:h-auto overflow-hidden bg-black">
                <Image
                  src={project.desktop}
                  alt={`${project.title} project preview`}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute left-4 top-4 z-20 flex items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-black/55 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md">
                    {project.label}
                  </span>

                  {index === 0 && (
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-200 backdrop-blur-md">
                      Featured
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setPreviewVideo(project.video)}
                  aria-label={`watch ${project.title} demo video`}
                  className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/65 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-105"
                >
                  <FaPlay className="text-xs" />
                  Watch Demo
                </button>
              </div>

              <div className="flex-1 p-5 lg:p-8 flex flex-col">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-8 mb-6">
                    {project.description}
                  </p>

                  <div className="grid gap-3 sm:grid-cols-3 mb-7">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-gray-300"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.usedTechs.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full text-sm bg-white/[0.04] border border-white/[0.06] text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-2xl py-3.5 font-medium text-white hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`open ${project.title} github repository`}
                    className="sm:w-14 h-14 rounded-2xl glass flex items-center justify-center border border-white/[0.06] hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300"
                  >
                    <FaGithub />
                  </a>

                  <button
                    type="button"
                    onClick={() => setPreviewVideo(project.video)}
                    className="sm:hidden h-14 rounded-2xl glass flex items-center justify-center gap-2 border border-white/[0.06] text-white hover:border-cyan-400/30 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <FaPlay className="text-xs" />
                    Watch Demo
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {previewVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[10000] flex items-center justify-center p-4"
          >
            <button
              type="button"
              onClick={() => setPreviewVideo("")}
              aria-label="close project demo video"
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white text-2xl hover:scale-110 transition-all duration-300 z-50"
            >
              ×
            </button>

            <motion.video
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={previewVideo}
              controls
              autoPlay
              muted
              playsInline
              preload="metadata"
              className="w-full max-w-6xl max-h-[85vh] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
