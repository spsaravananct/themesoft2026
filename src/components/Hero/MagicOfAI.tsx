"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, slideInLeft } from "@/lib/animations";
import Link from "next/link";

export default function MagicOfAI() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center bg-[#0A0A0A] py-20"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInLeft}
            className="relative w-full max-w-lg mx-auto lg:mx-0 h-96 lg:h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/30 to-[#FF6B35]/30 rounded-lg flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#0066CC] to-[#FF6B35] rounded-full flex items-center justify-center animate-pulse-slow">
                <span className="text-white text-6xl font-bold">AI</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The magic of AI at your fingertips.
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Achieve clear, impactful results without the complexity.
            </p>
            <Link
              href="#contact"
              className="w-fit inline-block px-8 py-4 bg-[#FF6B35] text-white rounded-lg font-semibold hover:bg-[#ff8555] transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

