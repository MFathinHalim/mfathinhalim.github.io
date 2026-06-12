import React, { useEffect, useRef, useState } from "react";

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
  "/Screenshot/Screenshot (14).png",
  "/Screenshot/Screenshot (15).png",
  "/Screenshot/Screenshot (16).png",
  "/Screenshot/Screenshot (17).png",
];

const lineOrders = [
  images.slice(0, 4),
  images.slice(8, 16),
  images.slice(4, 8),
];

const Screenshoot = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Mengubah state berdasarkan apakah komponen terlihat di layar
        setIsInView(entry.isIntersecting);
      },
      { 
        root: null, 
        threshold: 0.05 // Animasi start/resume ketika minimal 5% bagian komponen masuk layar
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative overflow-hidden bg-black rounded-t-3xl max-h-[550px]"
    >
      <div className="rotate-[-6deg] space-y-4">
        {lineOrders.map((lineImages, lineIndex) => {
          const loopedImages = [...lineImages, ...lineImages];

          return (
            <div
              key={lineIndex}
              className={`flex gap-4 w-max ${
                lineIndex % 2 === 0 ? "animate-scroll" : "animate-scrollReverse"
              } ${!isInView ? "animation-paused" : ""}`} // Tambah class pause jika tidak di layar
            >
              {loopedImages.map((src, index) => (
                <div
                  key={`${lineIndex}-${index}`}
                  className="shrink-0 overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="h-[240px] w-auto object-cover transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Screenshoot;