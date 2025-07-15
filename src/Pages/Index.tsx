import React, { useEffect } from "react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
// @ts-ignore
import Navbar from "../components/Navbar";
// @ts-ignore
import Skills from "../components/Skills";
// @ts-ignore
import Experience from "../components/Experience";
// @ts-ignore
import Projects from "../components/Projects";
// @ts-ignore
import Contact from "../components/Contact";
import { motion } from "framer-motion";
// @ts-ignore
import StarBackground from "../components/StarBackground";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true, // Allow animation every time section enters viewport
      offset: 80,
    });
    // Force refresh after init to fix hidden content on first load
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans relative">
      {/* ✅ النجوم الخلفية */}
      <StarBackground />
      <Navbar />
      {/* Hero Section */}
      <section
        className="flex flex-col justify-center items-center py-32 px-4 relative overflow-hidden"
        data-aos="fade-up"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            <span className="text-green-400">FRONTEND</span>{" "}
            <span className="block text-gray-100">DEVELOPER</span>
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
            Hi! I'm <span className="font-bold text-white">Your Name</span>. A
            creative Frontend Developer with 3+ years of experience in building
            high-performance, scalable, and responsive web solutions.
          </p>
          <a
            href="#contact"
            className="inline-block bg-green-400 text-gray-900 font-bold px-8 py-3 rounded shadow hover:bg-green-300 transition"
          >
            HIRE ME
          </a>
        </motion.div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 max-w-4xl mx-auto"
        data-aos="fade-right"
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300 mb-4">
          I believe in a user centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its users.
        </p>
        <p className="text-gray-400">
          I'm a frontend web developer dedicated to turning ideas into creative
          solutions. I specialize in creating seamless and intuitive user
          experiences. My approach focuses on creating scalable, high-performing
          solutions tailored to both user needs and business objectives.
        </p>
      </section>
      <div data-aos="fade-up">
        <Skills />
      </div>
      <div data-aos="fade-left">
        <Experience />
      </div>
      <div data-aos="zoom-in">
        <Projects />
      </div>
      <div data-aos="fade-up">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
