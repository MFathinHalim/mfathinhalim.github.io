import { useEffect, useRef, useState } from "react";
import Screenshoot from "./Screenshoot";

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
      <div className="bg-gray-100 dark:bg-stone-800 dark:text-stone-200 py-16 px-2 md:px-20">
        <div
          data-aos="fade-right"
          className="border dark:border-white/50 pb-5 max-h-[75vh] border-black/40 rounded-3xl shadow-md overflow-hidden max-w-6xl mx-auto"
        >
          <Screenshoot />

          <div className="px-2 md:px-6 pt-8 md:pt-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              My Journey of Programming
            </h2>
            <p className="text-gray-600 dark:text-gray-200/50 mb-5 mt-2 text-lg">
              A collection of apps, experiments, and challenges I've built over
              time.
            </p>
            <button
              onClick={() => setShowContact((prev) => !prev)}
              className="group relative overflow-hidden bg-black  dark:bg-white dark:text-black hover:bg-transparent hover:text-black dark:hover:text-white border dark:border-white dark:hover:bg-transparent px-5 mt-0 text-white py-3 rounded-full transition-all duration-300 hover:-translate-y-1"
            >
              <span className="absolute -top-5 left-1/2 w-32 h-32 z-100 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 pointer-events-none sparkle" />
              Check Now
            </button>
          </div>
        </div>
      </div>
      {showContact && (
        <section className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/30">
          <div
            className="rounded-2xl shadow-xl border border-stone-700 bg-white h-[93vh] w-[95vw] transition-opacity duration-300 ease-in-out pointer-events-auto"
            style={{ pointerEvents: "auto" }} // Extra safety
          >
            {/* Header Bar */}
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

            {/* Content (Iframe) */}
            <div className="h-[calc(93vh-50px)] dark:bg-stone-900">
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
      <audio ref={audioOpenRef} src="/open2.mp3" preload="auto" />
      <audio ref={audioCloseRef} src="/close.mp3" preload="auto" />
    </>
  );
}

export default Intro;
