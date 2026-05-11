"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        px-6
        overflow-hidden
        bg-[#101010]
        py-28
        mb-3
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          grid
          lg:grid-cols-2
          gap-16
          items-center
          relative
          z-10
        "
      >
        {/* IMAGE FIRST ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="
            flex
            justify-center
            order-1
            lg:order-2
          "
        >
          <div className="relative">
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-cyan-400/20
                via-blue-500/10
                to-indigo-500/20
                rounded-full
                blur-2xl
                opacity-60
                animate-pulse
              "
            ></div>

            {/* Border */}
            <div
              className="
                relative
                p-[4px]
                rounded-full
                border-2
                border-white
                shadow-[0_0_40px_rgba(59,130,246,0.25)]
              "
            >
              {/* IMAGE */}
              <div
                className="
                  relative
                  w-50
                  h-50
                  lg:w-[400px]
                  lg:h-[400px]
                  rounded-full
                  overflow-hidden
                  bg-[#101010]
                "
              >
                <Image
                  src="/images/profile-image.png"
                  alt="profile"
                  fill
                  priority
                  className="
                    object-cover
                    object-top
                  "
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-center
            lg:text-left
            order-2
            md:order-1
          "
        >
          

          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
            Hi, I'm <br />

            <span className="gradient-text">
              Bhawani Singh
            </span>
          </h1>


            <p className="text-white/40 uppercase tracking-[4px] text-sm mb-5">
            Mern Stack Developer
          </p>
        

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a
              href="/sonu-resume.pdf"
              download
              className="
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                via-cyan-600
                to-indigo-600
                hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]
                hover:scale-105
                transition-all
                duration-300
                font-medium
                text-white
              "
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-cyan-400/20
                bg-white/[0.03]
                backdrop-blur-xl
                hover:bg-cyan-500/10
                hover:border-cyan-400/40
                hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]
                transition-all
                duration-300
              "
            >
              View Projects
            </a>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-5 mt-10 justify-center lg:justify-start">
            <a
              href="https://github.com/sonu101994"
              target="_blank"
              className="
                w-12
                h-12
                rounded-full
                glass
                flex
                items-center
                justify-center
                hover:scale-110
                hover:border-cyan-400/40
                hover:bg-cyan-500/10
                transition-all
                duration-300
                border
                border-white/[0.06]
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="
                w-12
                h-12
                rounded-full
                glass
                flex
                items-center
                justify-center
                hover:scale-110
                hover:border-cyan-400/40
                hover:bg-cyan-500/10
                transition-all
                duration-300
                border
                border-white/[0.06]
              "
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}