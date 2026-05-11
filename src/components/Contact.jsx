"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {

  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_8y9zds3",
        "template_59nl3lq",
        e.target,
        "H1LfbcmDQ3RrOqYKn"
      )

      .then(() => {

        alert("Message Sent Successfully!");

        e.target.reset();

      })

      .catch((error) => {

        console.log(error);

        alert("Failed To Send Message");

      })

      .finally(() => {

        setLoading(false);

      });

  }

  return (

    <section
      id="contact"
      className="py-5 pt-24 
        lg:px-6 relative overflow-hidden bg-[#101010]"
    >

      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-white/[0.03] blur-[140px] rounded-full" />

      <div className=" max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-white/40 uppercase tracking-[5px] text-sm mb-5">
            Contact
          </p>

          <h2 className="text-3xl  md:text-4xl lg:text-5xl font-black leading-tight mb-6">
            Let's Create Something
            <span className="gradient-text"> Great Together</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-8 text-base md:text-lg">
            Currently looking for Junior Developer opportunities, internships and freelance projects where I can contribute, learn and grow through real-world development experience.
          </p>

        </motion.div>

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-5 mb-6"
        >

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sonu10211995@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-14
              h-14
              rounded-2xl
              glass
              border
              border-white/[0.06]
              flex
              items-center
              justify-center
              text-xl
              hover:border-white/[20]
              hover:scale-110
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
              w-14
              h-14
              rounded-2xl
              glass
              border
              border-white/[0.06]
              flex
              items-center
              justify-center
              text-xl
              hover:border-white/20
              hover:scale-110
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
              w-14
              h-14
              rounded-2xl
              glass
              border
              border-white/[0.06]
              flex
              items-center
              justify-center
              text-xl
              hover:border-white/20
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaLinkedin />
          </a>

        </motion.div>

        {/* LOCATION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            flex
            items-center
            justify-center
            gap-2
            text-sm
            text-gray-400
            mb-16
          "
        >

          <FaMapMarkerAlt className="text-cyan-400 text-xs" />

          <span>
            Jaipur, Rajasthan
          </span>

        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="
            glass
            border
            border-white/[0.06]
            rounded-[36px]
            p-4
            md:p-12
            space-y-5
            md:space-y-7
          "
        >

          {/* NAME */}
          <div>

            <label className="block mb-3 text-sm text-gray-400">
              Your Name
            </label>

            <input
              type="text"
              name="user_name"
              required
              placeholder="Enter your name"
              className="
                w-full
                bg-white/[0.04]
                border
                border-white/[0.06]
                rounded-2xl
                px-5
                py-4
                outline-none
                focus:border-white/20
                transition
              "
            />

          </div>

          {/* EMAIL */}
          <div>

            <label className="block mb-3 text-sm text-gray-400">
              Your Email
            </label>

            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="
                w-full
                bg-white/[0.04]
                border
                border-white/[0.06]
                rounded-2xl
                px-5
                py-4
                outline-none
                focus:border-white/20
                transition
              "
            />

          </div>

          {/* MESSAGE */}
          <div>

            <label className="block mb-3 text-sm text-gray-400">
              Message
            </label>

            <textarea
              rows={6}
              name="message"
              required
              placeholder="Write your message..."
              className="
                w-full
                bg-white/[0.04]
                border
                border-white/[0.06]
                rounded-2xl
                px-5
                py-4
                outline-none
                resize-none
                focus:border-white/20
                transition
              "
            />

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              via-cyan-600
              to-indigo-600
              text-white
              font-medium
              flex
              items-center
              justify-center
              gap-3
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]
              active:scale-[0.99]
              disabled:opacity-70
              disabled:cursor-not-allowed
              cursor-pointer
            "
          >

            {loading ? "Sending..." : "Send Message"}

            <FaPaperPlane className="text-sm" />

          </button>

        </motion.form>

      </div>
    </section>
  );
}