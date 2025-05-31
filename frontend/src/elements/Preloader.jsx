import React, { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    window.addEventListener("load", () => {
      // Make the preloader stay visible for 2 seconds
      setTimeout(() => {
        preloader.classList.add("opacity-0");
        setTimeout(() => preloader.classList.add("hidden"), 500);
      }, 2000); // Adjusted to 2000 ms (2 seconds)
    });
  }, []);

  const dotStyle = {
    animation: "bounce 0.6s ease-in-out infinite",
  };

  return (
    <div
      id="preloader"
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-orange-300 to-yellow-800 z-50 transition-opacity duration-500"
    >
      <div className="flex gap-3">
        <div
          className="w-4 h-4 bg-red-300 rounded-full"
          style={{ ...dotStyle, animationDelay: "0s" }}
        ></div>
        <div
          className="w-4 h-4 bg-red-600 rounded-full"
          style={{ ...dotStyle, animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-4 h-4 bg-red-900 rounded-full"
          style={{ ...dotStyle, animationDelay: "0.4s" }}
        ></div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
