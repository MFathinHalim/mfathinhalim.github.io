import React from "react";

// Urutan asli
const images = [
  "/Screenshot/Screenshot (1).png",
  "/Screenshot/Screenshot (7).png",
  "/Screenshot/Screenshot (6).png",
  "/Screenshot/Screenshot (2).png",
  "/Screenshot/Screenshot (3).png",
  "/Screenshot/Screenshot (4).png",
  "/Screenshot/Screenshot (5).png",
  "/Screenshot/Screenshot (8).png",
];

// Urutan khusus untuk masing-masing line
const lineOrders = [
  [
    images[2], // (4)
    images[5], // (5)
    images[4], // (6)
    images[6], // (2)
  ],
  images, // Line 1: urutan default
  [
    images[7], // (4)
    images[3], // (5)
    images[5], // (6)
    images[4], // (2)
  ],
  [
    images[2], // (4)
    images[1], // (5)
    images[4], // (6)
    images[6], // (2)
  ],
];

const Screenshoot = () => {
  return (
    <section className="bg-gray-black rounded-t-2xl h-32 md:h-60 overflow-hidden">
      <div className="rotate-[10deg] -mt-64 space-y-3 -ml-5">
        {/* Gradient Black Overlay */}
        {lineOrders.map((lineImages, lineIndex) => {
          const loopedImages = [...lineImages, ...lineImages]; // Loop panjang

          return (
            <div
              key={lineIndex}
              className={`flex flex-row gap-3 whitespace-nowrap ${
                lineIndex % 2 === 0 ? "-ml-32" : ""
              } ${
                lineIndex % 2 === 0 ? "animate-scroll" : "animate-scrollReverse"
              }`}
            >
              {loopedImages.map((src, index) => (
                <img
                  key={`${lineIndex}-${index}`}
                  src={src}
                  alt={`Work ${lineIndex}-${index}`}
                  className="h-[12vw] min-h-[135px] border border-neutral-400/50 w-auto object-cover"
                />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Screenshoot;
