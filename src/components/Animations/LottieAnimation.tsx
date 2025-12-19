"use client";

import { useEffect, useRef, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { useInView } from "framer-motion";

interface LottieAnimationProps {
  animationData: object | string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export default function LottieAnimation({
  animationData,
  className = "",
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [loadedData, setLoadedData] = useState<object | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (isInView && lottieRef.current && autoplay && loadedData) {
      lottieRef.current.play();
    }
  }, [isInView, autoplay, loadedData]);

  useEffect(() => {
    // Handle string paths (for dynamic imports)
    if (typeof animationData === "string") {
      // Try to fetch the Lottie JSON file
      fetch(animationData)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          // Silently handle 404s - file doesn't exist yet
          setHasError(true);
          return null;
        })
        .then((data) => {
          if (data && typeof data === "object") {
            setLoadedData(data);
          }
        })
        .catch(() => {
          // Silently handle fetch errors - show placeholder instead
          setHasError(true);
        });
    } else if (animationData && typeof animationData === "object") {
      // Already have valid animation data
      setLoadedData(animationData);
    } else {
      setHasError(true);
    }
  }, [animationData]);

  // Show placeholder if no valid animation data
  if (hasError || !loadedData) {
    return (
      <div ref={ref} className={`${className} flex items-center justify-center`}>
        <div className="w-32 h-32 bg-gradient-to-br from-[#0066CC] to-[#FF6B35] rounded-full flex items-center justify-center animate-pulse-slow">
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <Lottie
        lottieRef={lottieRef}
        animationData={loadedData}
        loop={loop}
        autoplay={autoplay && isInView}
        className="w-full h-full"
      />
    </div>
  );
}

