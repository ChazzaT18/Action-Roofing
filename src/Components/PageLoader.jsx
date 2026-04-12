import React from "react";

const PageLoader = ({ isVisible }) => {
  return (
    <div
      className={`fixed inset-x-0 top-[70px] lg:top-[90px] bottom-0 z-[40] bg-[#243453] transition-opacity duration-500 flex flex-col items-center justify-center ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center max-w-xs text-center">
        {/* Logos - Increased size */}
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

        {/* 3 Dots Loading Animation - Scaled up and White */}
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