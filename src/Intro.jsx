import { useEffect, useRef, useState } from "react";
import Screenshoot from "./Screenshoot";
import { motion } from "framer-motion";

function Intro() {
  const [showContact, setShowContact] = useState(false);
  const audioOpenRef = useRef(null);
  const audioCloseRef = useRef(null);
  useEffect(() => {
    if (showContact && audioOpenRef.current) {
      audioOpenRef.current.currentTime = 0;
      audioOpenRef.current.play().catch((e) => {
        console.warn("Gagal play sound open:", e);
      });
    }
  }, [showContact]);
  return (
    <>
      <div id="projects" div className="py-16 px-2 lg:px-32">
       <motion.div
  animate={{
    y: [0, -8, 0],
  }}
  data-aos="fade-right"
  className="
    bg-[#edf6ea]
    rounded-3xl
    
    overflow-hidden
    mx-auto
  "
>
  <Screenshoot />

  <div className="px-4 md:px-8 py-8 md:py-10 text-center">
    <h2 className="text-2xl md:text-4xl font-bold">
      My Journey of Programming
    </h2>

    <p className="opacity-60 mt-3 mb-8 text-base md:text-lg max-w-2xl mx-auto">
      A collection of apps, experiments, and challenges I've built over time.
    </p>

    <button
      onClick={() => setShowContact((prev) => !prev)}
      className="
        group
        relative
        overflow-hidden
        bg-black
        text-[#edf6ea]
        border
        border-black
        px-6
        py-3
        rounded-full
        transition-all
        duration-300
        hover:bg-transparent
        hover:text-black
        hover:-translate-y-1
      "
    >
      <span className="absolute -top-5 left-1/2 w-32 h-32 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 pointer-events-none sparkle" />
      Check Now
    </button>
  </div>
</motion.div>
      </div>
      {showContact && (
        <section className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/30">
          <div
            className="rounded-2xl shadow-xl border border-stone-700 bg-white h-[93vh] w-[95vw] transition-opacity duration-300 ease-in-out pointer-events-auto"
            style={{ pointerEvents: "auto" }}
          >
            <div className="flex items-center bg-black rounded-t-2xl p-3 overflow-hidden">
              <div className="flex justify-between w-full px-2 space-x-2">
                <p className="text-white">My Work</p>
                <button
                  onClick={() => {
                    if (audioCloseRef.current) {
                      audioCloseRef.current.currentTime = 0;
                      audioCloseRef.current.play().catch((e) => {
                        console.warn("Gagal play sound close:", e);
                      });
                    }
                    setShowContact(false);
                  }}
                  className="w-5 h-5 bg-red-400 hover:bg-red-500 rounded-full"
                ></button>
              </div>
            </div>
            <div className="h-[calc(93vh-50px)] dark:bg-[#060b04]">
              <iframe
                src="/journey/"
                title="Journey Page"
                className="w-full h-full border-0"
                style={{ pointerEvents: "auto" }}
              />
            </div>
          </div>
        </section>
      )}
      <audio ref={audioOpenRef} src="/Sounds/open2.mp3" preload="auto" />
      <audio ref={audioCloseRef} src="/Sounds/close.mp3" preload="auto" />
    </>
  );
}

export default Intro;
