"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

const encryption = [
  {
    title: "Jivan HealthTech – Backend Developer Intern",
    period: "Jan 2024 – March 2024",
    description:
      "Worked in a fast-paced healthtech startup to modernize backend architecture. My focus was on building secure APIs and authentication systems that ensured high availability and fast response times for patients and doctors alike.",
    points: [
      "Built secure authentication flows using JWT, bcrypt, and session management, improving data access control.",
      "Developed RESTful APIs for patient records and appointment scheduling, reducing server load by 35%.",
      "Refactored backend structure for modularity and scalability using Express.js and MVC architecture.",
      "Implemented error handling and logging, boosting system reliability and maintainability.",
    ],
  },
  {
    title: "Userology – Freelance Full-Stack Developer",
    period: "March 2023 – April 2023",
    description:
      "Led a solo freelance project to deliver a full-stack solution for a client-centered healthcare dashboard. Delivered on tight deadlines with full security and API integration, while ensuring a clean, responsive frontend.",
    points: [
      "Built secure authentication flows using JWT, bcrypt, and session management, improving data access control.",
      "Developed RESTful APIs for patient records and appointment scheduling, reducing server load by 35%.",
      "Refactored backend structure for modularity and scalability using Express.js and MVC architecture.",
      "Implemented error handling and logging, boosting system reliability and maintainability.",
    ],
  },
];

export const Encryption = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? encryption.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % encryption.length);
  };

  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen w-full h-full z-0 overflow-hidden px-4 py-10">
      {/* Top Title */}
      <motion.h1
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="text-[48px] md:text-[56px] font-extrabold text-center text-gray-100 mb-12"
      >
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Experience
        </span>
      </motion.h1>

      {/* Encryption Card Container */}
      <div className="w-full max-w-4xl mb-8"> {/* Added margin-bottom for spacing */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="bg-[#1e1e2f] border border-[#7042F88B] rounded-2xl p-10 shadow-2xl z-10 text-gray-200"
          >
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-semibold text-purple-400">
                {encryption[current].title}
              </h2>
              <p className="text-md text-gray-400 italic">
                {encryption[current].period}
              </p>
              <p className="text-[17px] leading-relaxed text-gray-300">
                {encryption[current].description}
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-[16px]">
                {encryption[current].points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons - Now positioned below the Encryption box */}
      <div className="flex gap-6 z-20">
        <button
          onClick={handlePrev}
          className="flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-[#2a2a40] text-white hover:bg-purple-600 transition"
        >
          <ArrowLeft size={20} />
          Previous
        </button>
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-[#2a2a40] text-white hover:bg-cyan-600 transition"
        >
          Next
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Background Video */}
      <div className="absolute w-full h-full top-0 left-0 -z-10">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};