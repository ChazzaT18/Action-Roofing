import React, { useState, useEffect } from "react";

const LoadingOverlay = ({ isVisible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isVisible) {
      // Simulate progress up to 90% while waiting for the heavy lifting
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 90) return prev + Math.random() * 15;
          return prev;
        });
      }, 200);
    } else {
      // Snap to 100% when loading is complete
      setProgress(100);
    }
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#243453] transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center max-w-sm w-full px-10">
        {/* Your Logos */}
        <div className="flex flex-col items-center mb-10 space-y-4 animate-pulse">
          <img
            src="/images/action roofing logo roof.png"
            className="h-20 md:h-24 object-contain"
            alt="Action Roofing Logo"
          />
          <img
            src="/images/action roofing text.png"
            className="h-8 md:h-10 object-contain"
            alt="Action Roofing Logo Text"
          />
        </div>

        {/* Loading Bar Container */}
        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden relative">
          {/* Background Glow */}
          <div
            className="absolute inset-0 bg-[#F9D759]/20 blur-sm"
            style={{ width: `${progress}%` }}
          />

          {/* Actual Progress Bar */}
          <div
            className="h-full bg-[#F9D759] transition-all duration-500 ease-out shadow-[0_0_15px_rgba(249,215,89,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
