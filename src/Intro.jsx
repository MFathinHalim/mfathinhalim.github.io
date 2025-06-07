import { useState } from "react";
import Screenshoot from "./Screenshoot";

function Intro() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <div className="bg-gray-100 py-16 px-2 md:px-20">
        <div className="border pb-5 max-h-[75vh] border-black/40 rounded-3xl shadow-md overflow-hidden max-w-6xl mx-auto">
          <Screenshoot />

          <div className="px-2 md:px-6 md:pt-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
              Check My Journey of Programming
            </h2>
            <p className="text-gray-600 mb-5 mt-2 text-lg">
              A collection of apps, experiments, and challenges I've built over
              time.
            </p>
            <button
              onClick={() => setShowContact((prev) => !prev)}
              className="bg-black px-5 mt-0 text-white py-3 rounded-full"
            >
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
                  onClick={() => setShowContact(false)}
                  className="w-5 h-5 bg-red-400 hover:bg-red-500 rounded-full"
                ></button>
              </div>
            </div>

            {/* Content (Iframe) */}
            <div className="h-[calc(93vh-50px)]">
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
    </>
  );
}

export default Intro;
