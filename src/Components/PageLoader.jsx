import React, { useEffect, useState } from "react";

const PageLoader = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  // Force-keep the mask mounted during animation transitions to stop DOM-flash leaks
  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 500); // Matches duration-500
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[999] bg-[#243453] transition-opacity duration-500 flex flex-col items-center justify-center ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${
        // Margins/Paddings offset values strictly synced to match your Header offsets
        "top-[104px] sm:top-[126px] md:top-[140px]"
      }`}
    >
      <div className="flex flex-col items-center max-w-xs text-center -mt-12">
        {/* Logos - Scaled and Optimized */}
        <div className="flex flex-col items-center mb-8 space-y-4">
          <img
            src="/images/action roofing logo roof.png"
            className="h-24 md:h-28 object-contain"
            alt="Action Roofing Logo"
          />
          <img
            src="/images/action roofing text.png"
            className="h-18 md:h-24 object-contain"
            alt="Action Roofing Logo Text"
          />
        </div>

        {/* 3 Dots Loading Animation */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-0.3s] opacity-80"></div>
          <div className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-0.15s] opacity-90"></div>
          <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;