
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Certificates", link: "#certificates" },
    { name: "Contact", link: "#contact" },
  ];

  return (

    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-[9999]
      "
    >

      <div
        className="
          w-full
          px-5
          lg:px-10
          py-5
          backdrop-blur-xl
          bg-[#101010]/50
          border-b
          border-white/[0.05]
        "
      >

        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="
            max-w-7xl
            mx-auto
            flex
            items-center
            justify-between
          "
        >

          {/* LOGO */}
          <a
            href="#home"
            className="
              text-3xl
              lg:text-4xl
              font-black
              tracking-wide
            "
          >

            <span
              className="
               gradient-text
              "
            >
              &lt;Bhawani Singh /&gt;
            </span>

          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-12">

            {navLinks.map((item, index) => (

              <motion.li
                key={index}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >

                <a
                  href={item.link}
                  className="
                    text-lg
                    font-medium
                    text-gray-300
                    hover:text-white
                    transition-all
                    duration-300
                    relative
                    group
                  "
                >
                  {item.name}

                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      h-[2px]
                      w-0
                      rounded-full
                      bg-cyan-400
                      transition-all
                      duration-500
                      ease-in-out
                      group-hover:w-full
                    "
                  ></span>

                </a>

              </motion.li>

            ))}

          </ul>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden
              text-4xl
              text-white
            "
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>

        </motion.nav>

        {/* MOBILE MENU */}
        <AnimatePresence>

          {menuOpen && (

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="
                md:hidden
                mt-5
              "
            >

              <ul
                className="
                  flex
                  flex-col
                  gap-6
                  bg-[#151515]/95
                  backdrop-blur-xl
                  border
                  border-white/[0.05]
                  rounded-2xl
                  p-6
                "
              >

                {navLinks.map((item, index) => (

                  <motion.li
                    key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  >

                    <a
                      href={item.link}
                      onClick={() => setMenuOpen(false)}
                      className="
                        text-xl
                        font-medium
                        text-gray-300
                        transition-all
                        duration-300
                        block
                      "
                    >
                      {item.name}
                    </a>

                  </motion.li>

                ))}

              </ul>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </header>

  );
}