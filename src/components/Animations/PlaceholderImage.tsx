"use client";

import { useState } from "react";
import Image from "next/image";

interface PlaceholderImageProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholderText?: string;
}

export default function PlaceholderImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  placeholderText,
}: PlaceholderImageProps) {
  const [hasError, setHasError] = useState(!src);
  const [isLoading, setIsLoading] = useState(!!src);

  // Placeholder component
  const PlaceholderContent = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/20 to-[#FF6B35]/20 flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#0066CC] to-[#FF6B35] rounded-lg flex items-center justify-center">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        {placeholderText && (
          <p className="text-gray-400 text-sm font-medium">{placeholderText}</p>
        )}
        <p className="text-gray-500 text-xs mt-2">Placeholder Image</p>
      </div>
    </div>
  );

  // If no src provided, show placeholder
  if (!src || hasError) {
    return (
      <div
        className={`relative ${className}`}
        style={{ 
          width: typeof width === "number" ? `${width}px` : width, 
          height: typeof height === "number" ? `${height}px` : height,
          minWidth: typeof width === "number" ? `${width}px` : width,
          minHeight: typeof height === "number" ? `${height}px` : height
        }}
      >
        <PlaceholderContent />
      </div>
    );
  }

  return (
    <div
      className={`relative ${className}`}
      style={{ 
        width: typeof width === "number" ? `${width}px` : width, 
        height: typeof height === "number" ? `${height}px` : height,
        minWidth: typeof width === "number" ? `${width}px` : width,
        minHeight: typeof height === "number" ? `${height}px` : height
      }}
    >
      {isLoading && <PlaceholderContent />}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-lg"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
}

