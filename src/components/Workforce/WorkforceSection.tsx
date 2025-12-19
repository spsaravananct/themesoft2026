"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, slideInLeft } from "@/lib/animations";

export default function WorkforceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="workforce"
      ref={ref}
      className="min-h-screen flex items-center bg-[#0A0A0A] py-20"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInLeft}
            className="flex flex-col justify-center"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              WORKFORCE
              <br />
              SOLUTIONS
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Unleashing Potential, Constructing Futures: Your Preferred Talent
              Ally.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit px-8 py-3 bg-[#FF6B35] text-white rounded-lg font-semibold hover:bg-[#ff8555] transition-colors"
            >
              Explore Solutions
            </motion.button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="relative w-full max-w-lg mx-auto lg:mx-0 h-96 lg:h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/30 to-[#FF6B35]/30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#0066CC] to-[#FF6B35] rounded-full flex items-center justify-center animate-pulse-slow">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <p className="text-white text-lg font-semibold">
                  Talent Intelligence
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

