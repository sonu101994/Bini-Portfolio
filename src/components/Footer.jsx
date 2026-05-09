"use client";

import { motion } from "framer-motion";

import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

export default function Footer() {

    return (

        <footer className="relative overflow-hidden bg-[#101010] ">



            {/* Top Border */}
            <div className="w-full h-[1px] bg-white/[0.05]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="
                 relative
                 z-10
                 w-full
                 px-6
                 py-5
                 lg:px-10
                 max-w-7xl
                 mx-auto
                 flex
                 flex-col
                 md:flex-row
                 items-center
                 justify-center
                 md:justify-between
                 gap-5
                 "
            >

                {/* Icons */}
                <div className="flex items-center justify-center gap-4">

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=sonu10211995@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          w-11
                          h-11
                          rounded-xl
                          bg-white/[0.03]
                          border
                          border-white/[0.05]
                          flex
                          items-center
                          justify-center
                          text-gray-400
                          hover:text-white
                          hover:border-white/15
                          hover:bg-white/[0.05]
                          transition-all
                          duration-300
                         "
                    >
                        <FaEnvelope />
                    </a>

                    <a
                        href="https://github.com/sonu101994"
                        target="_blank"
                        className="
              w-11
              h-11
              rounded-xl
              bg-white/[0.03]
              border
              border-white/[0.05]
              flex
              items-center
              justify-center
              text-gray-400
              hover:text-white
              hover:border-white/15
              hover:bg-white/[0.05]
              transition-all
              duration-300
            "
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        className="
              w-11
              h-11
              rounded-xl
              bg-white/[0.03]
              border
              border-white/[0.05]
              flex
              items-center
              justify-center
              text-gray-400
              hover:text-white
              hover:border-white/15
              hover:bg-white/[0.05]
              transition-all
              duration-300
            "
                    >
                        <FaLinkedin />
                    </a>
                </div>
                 <p>&copy;2026| Designed & Built by Bhawani Singh</p>
            </motion.div>

        </footer>
    );
}