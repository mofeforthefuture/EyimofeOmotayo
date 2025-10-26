"use client";
import React, { useEffect, useState } from "react";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    setIsAnimating(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Reset animation state after scroll completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Genie smoke effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute -top-2 -left-2 w-16 h-16 opacity-30 transition-all duration-1000 ${
            isAnimating ? "animate-pulse" : ""
          }`}
        >
          <div className="w-full h-full bg-gradient-to-tr from-purple-400 to-pink-400 rounded-full blur-sm animate-ping"></div>
        </div>
        <div
          className={`absolute -top-1 -right-1 w-12 h-12 opacity-20 transition-all duration-1000 delay-200 ${
            isAnimating ? "animate-pulse" : ""
          }`}
        >
          <div className="w-full h-full bg-gradient-to-bl from-blue-400 to-purple-400 rounded-full blur-sm animate-ping"></div>
        </div>
        <div
          className={`absolute -bottom-1 -left-1 w-10 h-10 opacity-25 transition-all duration-1000 delay-500 ${
            isAnimating ? "animate-pulse" : ""
          }`}
        >
          <div className="w-full h-full bg-gradient-to-tr from-pink-400 to-yellow-400 rounded-full blur-sm animate-ping"></div>
        </div>
      </div>

      {/* Sparkles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white rounded-full transition-all duration-1000 ${
              isAnimating ? "animate-ping" : "animate-pulse"
            }`}
            style={{
              top: `${20 + i * 10}%`,
              left: `${15 + i * 12}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Main button */}
      <button
        onClick={scrollToTop}
        className={`
          relative w-14 h-14 rounded-full 
          bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500
          shadow-lg hover:shadow-xl
          transition-all duration-300 ease-out
          hover:scale-110 active:scale-95
          ${isAnimating ? "animate-bounce" : "hover:animate-pulse"}
          group
        `}
        aria-label="Back to top"
      >
        {/* Button glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>

        {/* Icon container */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <svg
            className={`w-6 h-6 text-white transition-transform duration-300 ${
              isAnimating ? "rotate-180" : "group-hover:rotate-12"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-white rounded-full transition-all duration-1000 ${
                isAnimating ? "animate-ping" : "animate-pulse"
              }`}
              style={{
                top: `${30 + i * 15}%`,
                left: `${25 + i * 15}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </button>

      {/* Genie trail effect */}
      <div
        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          isAnimating ? "opacity-100 scale-150" : "opacity-0 scale-100"
        }`}
      >
        <div className="w-8 h-4 bg-gradient-to-t from-purple-300 to-transparent rounded-full blur-sm"></div>
      </div>
    </div>
  );
};

export default BackToTopButton;
