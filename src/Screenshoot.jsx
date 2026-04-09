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
  "/Screenshot/Screenshot (9).png",
  "/Screenshot/Screenshot (10).png",
  "/Screenshot/Screenshot (11).png",
  "/Screenshot/Screenshot (12).png",
  "/Screenshot/Screenshot (13).png",
];

const lineOrders = [
  [images[5], images[2], images[4], images[6]],
  images,
  [images[7], images[3], images[5], images[4]],
  [images[2], images[1], images[4], images[6]],
];

const Screenshoot = () => {
  return (
    <section className="bg-black rounded-t-2xl h-32 md:h-60 overflow-hidden">
      <div className="rotate-[10deg] -mt-64 space-y-3 -ml-5">
        {lineOrders.map((lineImages, lineIndex) => {
          const loopedImages = [...lineImages, ...lineImages];

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
