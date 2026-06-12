import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/Screenshot/Screenshot (7).png",
  "/Screenshot/Screenshot (6).png",
  "/Screenshot/Screenshot (2).png",
  "/Screenshot/Screenshot (3).png",
  "/Screenshot/Screenshot (17).png",
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
];

function Intro() {
  const [showContact, setShowContact] = useState(false);
  const outerSectionRef = useRef(null); 
  const cardRef = useRef(null); 
  const scrollWrapperRef = useRef(null); 
  const textPanelRef = useRef(null);
  const audioOpenRef = useRef(null);
  const audioCloseRef = useRef(null);

  useGSAP(() => {
    const wrapper = scrollWrapperRef.current;
    if (!wrapper) return;

    const viewport = wrapper.parentElement;
    const maxScrollX = wrapper.scrollWidth - viewport.clientWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: outerSectionRef.current,
        start: "top top",
        end: "+=400%", // Ditambah jeda ekstra agar scroll mengunci saat panel naik
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // 1. Jalankan animasi tracking horizontal gambar & scale down card secara bersamaan
    tl.to(wrapper, {
      x: () => -maxScrollX,
      duration: 3, 
      ease: "power2.inOut", 
    }, 0);

    tl.to(cardRef.current, {
      scale: 0.85,
      borderRadius: "2rem",
      duration: 3,
      ease: "power2.inOut",
    }, 0);

    // 2. LOCK SCROLL EFFECT: Teks meluncur naik dari luar card secara mulus tanpa menimpa gambar
    tl.to(textPanelRef.current, {
      y: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
    }, "-=1.2");

    // Padding waktu penahanan scroll di akhir agar transisinya terasa mantap
    tl.to({}, { duration: 0.5 });

    return () => {
      tl.kill();
    };
  }, { scope: outerSectionRef });

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
      <div 
        ref={outerSectionRef} 
        className="w-full h-screen flex items-center justify-center bg-transparent select-none overflow-hidden"
      >
        {/* CARD CONTAINER UTAMA */}
        <div 
          ref={cardRef}
          className="relative w-full h-full border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden origin-center bg-white dark:bg-black flex flex-col justify-between"
        >
          
          {/* AREA TRACK GAMBAR: Diisolasi penuh pada sisa ruang atas (flex-1) & dikunci posisinya di tengah */}
          <div className="flex-1 w-full flex items-center justify-center overflow-hidden min-h-0 relative">
            <div className="w-full overflow-hidden flex items-center">
              <div
                ref={scrollWrapperRef}
                className="flex gap-5 md:gap-7 pl-6 md:pl-16 pr-0 will-change-transform items-center"
              >
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="shrink-0 overflow-hidden rounded-2xl shadow-2xl border border-white/5 w-[80vw] md:w-[44vw] h-[52vh] md:h-[58vh]"
                  >
                    <img
                      src={src}
                      alt={`Screenshot ${index + 1}`}
                      loading="eager"
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PANEL KONTEN BAWAH CARD: Ditempatkan secara relatif mengikuti susunan flexbox agar tidak saling tabrakan */}
          <div 
            ref={textPanelRef}
            className="w-full p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-[#edf6ea] border-t border-zinc-200 dark:border-zinc-800 opacity-0 translate-y-full will-change-transform shrink-0"
            style={{ transform: "translateY(100%)" }} // Mengunci posisi awal murni di luar area bawah card
          >
            <div className="text-left max-w-xl">
              <h2 className="text-2xl md:text-4xl font-bold text-zinc-900">
                My Journey of Programming
              </h2>
              <p className="opacity-60 mt-3 text-base md:text-lg text-zinc-700 leading-relaxed">
                A structured collection of apps, responsive UI experiments, and core architectural challenges built over my timeline.
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0">
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
                  px-7
                  py-3.5
                  text-sm
                  font-medium
                  rounded-full
                  transition-all
                  duration-300
                  hover:bg-transparent
                  hover:text-black
                  hover:-translate-y-1
                  shadow-md
                "
              >
                <span className="absolute -top-5 left-1/2 w-32 h-32 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 pointer-events-none sparkle" />
                Check Now ↗
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* IFRAME POPUP WORKSPACE MODAL */}
      {showContact && (
        <section className="fixed inset-0 flex items-center justify-center z-[9999] bg-zinc-950/40 backdrop-blur-xs p-4">
          <div className="rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-white h-[90vh] w-[95vw] md:w-[90vw] overflow-hidden">
            <div className="flex items-center bg-zinc-900 dark:bg-zinc-950 p-4">
              <div className="flex justify-between w-full items-center">
                <p className="text-zinc-200 text-xs font-medium tracking-wide font-mono">WORKSPACE // My Journey</p>
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
                  className="w-5 h-5 bg-red-500/80 hover:bg-red-500 rounded-full transition flex items-center justify-center text-[10px] text-zinc-950 font-bold"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="h-[calc(90vh-48px)] bg-white dark:bg-[#060b04]">
              <iframe
                src="/journey/"
                title="Journey Exploration Portal"
                className="w-full h-full border-0"
                style={{ pointerEvents: "auto" }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Resource Audio */}
      <audio ref={audioOpenRef} src="/Sounds/open2.mp3" preload="auto" />
      <audio ref={audioCloseRef} src="/Sounds/close.mp3" preload="auto" />
    </>
  );
}

export default Intro;