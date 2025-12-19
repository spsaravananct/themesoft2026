"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import ParticlesBackground from "@/components/Particles/ParticlesBackground";
import { clientLogos } from "@/lib/constants";
import PlaceholderImage from "@/components/Animations/PlaceholderImage";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Handle form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("Thank you for joining Themesoft!");
    }, 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-20">
      <ParticlesBackground />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Announcement Banner */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 bg-[#FF6B35] rounded-full px-4 py-2 mb-8"
          >
            <span className="text-white text-sm font-medium">
              NEW Latest integration just arrived
            </span>
          </motion.div>

          {/* Main Heading - Left Aligned */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-[1.1] text-left"
          >
            ARTIFICIAL
            <br />
            INTELLIGENCE
          </motion.h1>

          {/* Subheading - Left Aligned */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 text-left max-w-2xl"
          >
            Moving a Leap to the forefront of technological advancements.
          </motion.p>

          {/* Email Signup Form - Left Aligned */}
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mb-16"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6B35] transition-colors backdrop-blur-sm"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-[#FF6B35] text-white rounded-lg font-semibold hover:bg-[#ff8555] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? "Joining..." : "Join Themesoft"}
            </button>
          </motion.form>

          {/* Client Logos - Cards with Labels */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-start justify-start gap-6 md:gap-8"
          >
            {clientLogos.map((client, index) => (
              <div
                key={client.name}
                className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity"
              >
                {client.logo ? (
                  <div className="w-24 h-24 bg-gradient-to-br from-[#0066CC]/30 to-[#FF6B35]/30 rounded-lg flex items-center justify-center backdrop-blur-sm overflow-hidden mb-2 border border-white/10">
                    <PlaceholderImage
                      src={client.logo}
                      alt={client.name}
                      width={96}
                      height={96}
                      className="w-full h-full"
                      placeholderText=""
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-gradient-to-br from-[#0066CC]/30 to-[#FF6B35]/30 rounded-lg flex items-center justify-center backdrop-blur-sm mb-2 border border-white/10">
                    <span className="text-white text-xs font-semibold">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                )}
                <span className="text-white text-sm font-medium text-center">
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

