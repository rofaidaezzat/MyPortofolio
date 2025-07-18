import { useEffect, useRef } from "react";
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
import { motion, useInView } from "framer-motion";
// @ts-ignore
import StarBackground from "../components/StarBackground";

const Index = () => {
  useEffect(() => {
    // Force refresh after init to fix hidden content on first load
  }, []);

  // Refs for each section
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // InView hooks
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const experienceInView = useInView(experienceRef, {
    once: true,
    margin: "-100px",
  });
  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: "-100px",
  });
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans relative overflow-x-hidden">
      {/* ✅ النجوم الخلفية */}
      <StarBackground />
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center py-32 px-4 relative overflow-hidden">
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
            I'm <span className="font-bold text-white">Rofaida Azzat</span>, a
            motivated Computer Science major at Alexandria University (Class of
            2025) with a CGPA of 3.62. I specialize in frontend development, and
            I’m passionate about transforming creative ideas into modern,
            responsive, and user-friendly web applications. I’m proficient in
            technologies like HTML, CSS, JavaScript, TypeScript, React, Next.js,
            Tailwind CSS, and experienced with MongoDB, Git, and Agile
            methodologies. I enjoy collaborating in team environments and
            continuously learning to deliver clean and efficient code.
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
      <motion.section
        ref={aboutRef}
        initial={{ opacity: 0, y: 60 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        id="about"
        className="py-20 px-4 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>I believe in a
        user-centered design approach, ensuring every project is tailored to
        meet real user needs while delivering a seamless and accessible
        experience. I'm a frontend web developer with a strong foundation in
        software engineering and a passion for crafting responsive, scalable,
        and intuitive interfaces. I thrive on transforming complex problems into
        elegant and efficient solutions, aligning user expectations with
        business goals through clean code, thoughtful design, and modern web
        technologies.
      </motion.section>
      <motion.div
        ref={skillsRef}
        initial={{ opacity: 0, y: 60 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        <Skills />
      </motion.div>
      <motion.div
        ref={experienceRef}
        initial={{ opacity: 0, y: 60 }}
        animate={experienceInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <Experience />
      </motion.div>
      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0, y: 60 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      >
        <Projects />
      </motion.div>
      <motion.div
        ref={contactRef}
        initial={{ opacity: 0, y: 60 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default Index;
