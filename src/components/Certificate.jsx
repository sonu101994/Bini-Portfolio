"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaExpand } from "react-icons/fa";

export default function Certificate() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="certificates"
      className="py-28 
        lg:px-6 relative overflow-hidden bg-[#101010]"
    >


      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-20"
        >
          <p className=" text-white/40 uppercase tracking-[4px] text-sm mb-4">
            Achievement
          </p>

          <h2 className="text-3xl md:text-5xl font-black">
            Professional
            <span className="gradient-text"> Certification</span>
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            glass
            border
            border-white/10
            rounded-[40px]
            overflow-hidden
          "
        >

          <div className="grid lg:grid-cols-2">

            {/* IMAGE SIDE */}
            <div className="relative min-h-[300px] md:min-h-[350px] lg:min-h-[500px] group overflow-hidden">

              <Image
                src="/images/web-certificate.png"
                alt="certificate"
                fill
                className="
                  object-cover
                  object-top
                  group-hover:scale-105
                  transition
                  blur-[2px]
                  duration-700
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Buttons */}
              <div className="absolute bottom-6 left-6 flex gap-4 z-20">

                <button
                  onClick={() => setOpen(true)}
                  className="
                    flex
                    items-center
                    gap-2
                    px-3
                    sm:px-6
                    py-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-500
                    via-cyan-600
                    to-indigo-600
                    text-white
                    text-sm
                    md:text-base
                    font-medium
                    shadow-[0_0_25px_rgba(59,130,246,0.35)]
                    hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  <FaExpand />
                  Preview
                </button>

                <a
                  href="/images/certificate.pdf"
                  download
                  className="
                    flex
                    items-center
                    gap-2
                    sm:px-6
                    px-3
                    py-3
                    rounded-2xl
                    bg-white/[0.04]
                    backdrop-blur-xl
                    border
                    border-cyan-400/20
                    text-white
                    text-sm
                    md:text-base
                    hover:bg-cyan-500/10
                    hover:border-cyan-400/40
                    hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  <FaDownload />
                  Download
                </a>

              </div>
            </div>

            {/* CONTENT SIDE */}
            <div className="p-4 lg:p-14 flex flex-col justify-center">

              <p className="text-cyan-400 uppercase tracking-[3px] text-sm mb-5">
                Recently Completed
              </p>

              <h3 className="text-2xl md:text-3xl lg:text-5xl font-black leading-tight mb-5">
                MERN Stack
                <br />
                Development
              </h3>

              <p className="text-gray-400 leading-8 md:text-lg text-base mb-8">
                Successfully completed a MERN Stack Web Development certification from WsCube Tech Jaipur, focused on React, Next.js, Node.js, Express.js and MongoDB. Gained hands-on experience by building responsive web applications and learning real-world development workflows and project scenarios.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-4">

                {[
                  "React",
                  "Next.js",
                  "MongoDB",
                  "Node.js",
                  "Express",
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="
                      px-5
                      py-3
                      rounded-2xl
                      bg-white/5
                      border
                      border-white/10
                      text-gray-300
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* FULLSCREEN PREVIEW */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="
              fixed
              inset-0
              bg-black/95
              z-[99999]
              flex
              items-center
              justify-center
              p-4
            "
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              className="
                absolute
                top-6
                right-6
                z-50
                w-12
                h-12
                rounded-full
                glass
                text-2xl
                hover:scale-110
                transition
              "
            >
              ×
            </button>

            {/* IMAGE */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                max-w-6xl
                h-[90vh]
              "
            >
              <Image
                src="/images/web-certificate.png"
                alt="certificate"
                fill
                className="object-contain rounded-3xl"
              />
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}