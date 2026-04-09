import React, { useEffect, useState, useRef } from "react";
import { Heart, MessageCircle, Share, Bookmark } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Photography() {
  const Photographys = [
    "https://ik.imagekit.io/yjtsof0mw/Txtr/image-full_body-texter-5_14_2025.jpg",
    "./f7-A-Fathin-pembuat-aplikasi-Kamus-Kata-Bahasa-Rejang.jpg",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-73.jpg?updatedAt=1705798245623",
    "/Fathins/Fathin (5).png",
    "/Fathins/Fathin (2).png",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-102.jpg?updatedAt=1705798245623",
    "/Fathins/Fathin (3).png",
    "/Fathins/Fathin (6).png",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-77.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-96.jpg?updatedAt=1705798245623",
    "/Fathins/Fathin (1).png",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-74.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-80.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-71.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-78.jpg?updatedAt=1705798245623",
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [liked, setLiked] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight")
        setSelectedIndex((i) => (i + 1) % Photographys.length);
      if (e.key === "ArrowLeft")
        setSelectedIndex(
          (i) => (i - 1 + Photographys.length) % Photographys.length,
        );
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  const prev = () =>
    setSelectedIndex(
      (i) => (i - 1 + Photographys.length) % Photographys.length,
    );
  const next = () => setSelectedIndex((i) => (i + 1) % Photographys.length);

  return (
    <>
      <div
        id="gallery"
        className="relative px-2 md:px-32 xl:px-64 py-5 md:pb-32 md:pt-20 dark:text-[#edf6ea]"
        ref={containerRef}
      >
        <h1 className="px-2 text-5xl font-bold text-center">Gallery</h1>
        <p className="px-2 text-end mb-3 font-bold text-xl">
          *These are Fathin
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 auto-rows-[150px]">
          {Photographys.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden transition-all duration-300 group cursor-pointer ${
                i % 5 === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              }`}
              data-aos="zoom-in"
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={photo}
                alt={`photo-${i}`}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          ))}
        </div>

        <p className="px-2 mt-3 font-bold text-xl">
          *These are Fathin's Photos
        </p>
      </div>

      {/* Instagram-style Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/75 z-50 flex  items-center justify-center p-4"
          onClick={(e) =>
            e.target === e.currentTarget && setSelectedIndex(null)
          }
        >
          <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden flex flex-col md:flex-row w-full max-w-5xl h-[60vh] relative">
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-3 right-3 z-10 text-white bg-black/40 rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-black/60 transition"
            >
              ✕
            </button>

            <div className="flex-1 bg-black flex items-center justify-center relative min-w-0">
              <button
                onClick={prev}
                className="absolute left-2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full w-8 h-8 flex items-center justify-center transition"
              >
                ‹
              </button>

              <img
                src={Photographys[selectedIndex]}
                alt={`photo-${selectedIndex}`}
                className="h-[30vh] md:h-full md:max-h-[85vh] max-w-full object-contain"
              />

              <button
                onClick={next}
                className="absolute right-2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full w-8 h-8 flex items-center justify-center transition"
              >
                ›
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-3 flex gap-1.5">
                {Photographys.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full cursor-pointer transition-all ${
                      i === selectedIndex ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right sidebar */}
            <div className="md:w-72 flex-shrink-0 flex flex-col border-l border-zinc-200 dark:border-zinc-700">
              {/* Header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-200 dark:border-zinc-700">
                <img
                  src="https://ik.imagekit.io/9hpbqscxd/SG/image-100.jpg?updatedAt=1705798245623"
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium flex-shrink-0"
                />

                <div>
                  <p className="text-sm font-bold dark:text-white">
                    mfathinhalim
                  </p>
                  <p className="text-xs text-zinc-500">Curup, Bengkulu</p>
                </div>
              </div>

              {/* Caption */}
              <div className="flex-1 overflow-y-auto px-4 py-3 hidden md:block">
                <div className="flex gap-2">
                  <img
                    src="https://ik.imagekit.io/9hpbqscxd/SG/image-100.jpg?updatedAt=1705798245623"
                    className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white text-xs flex-shrink-0"
                  />

                  <p className="text-sm dark:text-zinc-200">
                    <span className="font-bold">mfathinhalim</span> Hey, check
                    this out
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="border-t border-zinc-200 dark:border-zinc-700 px-4 py-3">
                <div className="flex gap-4 mb-2">
                  <button
                    onClick={() => setLiked(!liked)}
                    className="text-2xl transition-transform active:scale-125"
                  >
                    {liked ? (
                      <Heart className="text-red-500" />
                    ) : (
                      <Heart className="text-xl dark:text-white" />
                    )}
                  </button>
                  <button className="text-xl dark:text-white">
                    <MessageCircle />
                  </button>
                  <button className="text-xl dark:text-white">
                    <Share />
                  </button>
                  <button className="text-xl ml-auto dark:text-white">
                    <Bookmark />
                  </button>
                </div>
                <p className="text-xs font-semibold dark:text-white">
                  {liked ? "7310" : "7309"} likes
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">March 7th 2010</p>
              </div>

              {/* Comment input */}
              <div className="border-t border-zinc-200 dark:border-zinc-700 px-4 py-2 flex gap-2 items-center">
                <input
                  placeholder="Add a comment... (it's static btw)"
                  className="flex-1 text-sm bg-transparent outline-none dark:text-white dark:placeholder-zinc-500"
                />
                <p className="text-xs cursor-not-allowed font-semibold text-blue-500">
                  Post
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Photography;
