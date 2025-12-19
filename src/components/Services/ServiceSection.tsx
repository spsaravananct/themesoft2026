"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { slideInLeft, slideInRight, fadeInUp } from "@/lib/animations";
import LottieAnimation from "@/components/Animations/LottieAnimation";
import PlaceholderImage from "@/components/Animations/PlaceholderImage";

interface ServiceSectionProps {
  service: {
    id: string;
    title: string;
    description: string;
    image: string;
    lottie: string;
  };
  index: number;
}

export default function ServiceSection({ service, index }: ServiceSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <section
      id={service.id}
      ref={ref}
      className="min-h-screen flex items-center bg-[#0A0A0A] py-20"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual/Animation Side */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={isEven ? slideInLeft : slideInRight}
            className={`${isEven ? "lg:order-1" : "lg:order-2"} flex justify-center lg:justify-${isEven ? "start" : "end"}`}
          >
            <div className="relative w-full max-w-lg h-96 lg:h-[500px] rounded-lg overflow-hidden">
              {/* Show image if available, otherwise show Lottie animation */}
              {service.image ? (
                <PlaceholderImage
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={500}
                  className="w-full h-full rounded-lg"
                  placeholderText={service.title}
                />
              ) : service.lottie ? (
                <LottieAnimation
                  animationData={service.lottie}
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#0066CC]/20 to-[#FF6B35]/20 flex items-center justify-center rounded-lg">
                  <div className="text-white text-6xl font-bold opacity-50">
                    {service.title.charAt(0)}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={isEven ? slideInRight : slideInLeft}
            className={`${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col justify-center`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF6B35] mb-6">
              {service.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              {service.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit mt-4 px-8 py-3 bg-[#FF6B35] text-white rounded-lg font-semibold hover:bg-[#ff8555] transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

