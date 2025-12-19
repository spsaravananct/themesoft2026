"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/lib/animations";
import { testimonials } from "@/lib/constants";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import PlaceholderImage from "@/components/Animations/PlaceholderImage";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center bg-gradient-to-br from-[#FF6B35] to-white py-20"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white/10 backdrop-blur-md rounded-lg"
                >
                  {/* Profile Image */}
                  <div className="mb-6">
                    {testimonials[currentIndex].image ? (
                      <PlaceholderImage
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        width={96}
                        height={96}
                        className="w-24 h-24 rounded-full mx-auto overflow-hidden"
                        placeholderText={testimonials[currentIndex].name.charAt(0)}
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0066CC] to-[#FF6B35] flex items-center justify-center mx-auto">
                        <span className="text-white text-3xl font-bold">
                          {testimonials[currentIndex].name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A0A0A] mb-6 max-w-3xl">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Attribution */}
                  <div className="text-lg text-gray-700">
                    <p className="font-semibold">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role} @{" "}
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="w-6 h-6 text-[#FF6B35]" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-colors z-10"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="w-6 h-6 text-[#FF6B35]" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#FF6B35] w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

