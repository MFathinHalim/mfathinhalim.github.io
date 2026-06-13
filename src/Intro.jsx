import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import Screenshoot from "./Screenshoot";

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

// ==========================================
// 1. KOMPONEN UTAMA (KONTROLLER DISPLAY)
// ==========================================
function Intro() {
  const [showContact, setShowContact] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const audioOpenRef = useRef(null);
  const audioCloseRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Langsung eksekusi saat client-side mounted
    checkMobile();
    
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggleContact = () => {
    if (!showContact && audioOpenRef.current) {
      audioOpenRef.current.currentTime = 0;
      audioOpenRef.current.play().catch(() => {});
    }
    setShowContact((prev) => !prev);
  };

  const handleCloseContact = () => {
    if (audioCloseRef.current) {
      audioCloseRef.current.currentTime = 0;
      audioCloseRef.current.play().catch(() => {});
    }
    setShowContact(false);
  };

  return (
    <>
      {isMobile ? (
        <IntroMobile onCheckNow={handleToggleContact} />
      ) : (
        <IntroDesktop onCheckNow={handleToggleContact} />
      )}

      {/* MODAL WORKSPACE GLOBAL */}
      {showContact && (
        <section className="fixed inset-0 flex items-center justify-center z-[9999] bg-zinc-950/40 backdrop-blur-xs p-4">
          <div className="rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-white h-[90vh] w-[95vw] md:w-[90vw] overflow-hidden">
            <div className="flex items-center bg-zinc-900 dark:bg-zinc-950 p-4">
              <div className="flex justify-between w-full items-center">
                <p className="text-zinc-200 text-xs font-medium tracking-wide font-mono">WORKSPACE // My Journey</p>
                <button
                  onClick={handleCloseContact}
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

// ==========================================
// 2. KOMPONEN DESKTOP (DENGAN GSAP & PINNED)
// ==========================================
function IntroDesktop({ onCheckNow }) {
  const outerSectionRef = useRef(null);
  const cardRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const textPanelRef = useRef(null);

  useGSAP(
    () => {
      const wrapper = scrollWrapperRef.current;
      if (!wrapper) return;

      const viewport = wrapper.parentElement;
      const maxScrollX = wrapper.scrollWidth - viewport.clientWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outerSectionRef.current,
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

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

      tl.fromTo(textPanelRef.current,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
        "-=1.2"
      );

      tl.to({}, { duration: 0.5 });
    },
    { scope: outerSectionRef }
  );

  return (
    <div
      ref={outerSectionRef}
      className="w-full h-screen flex items-center justify-center bg-transparent select-none overflow-hidden"
    >
      <div
        ref={cardRef}
        className="relative w-full h-full border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden origin-center bg-white dark:bg-black block"
      >
        {/* IMAGE AREA CENTERED */}
        <div className="w-full flex items-center justify-center overflow-hidden h-full">
          <div className="w-full overflow-hidden flex items-center">
            <div
              ref={scrollWrapperRef}
              className="flex gap-7 pl-16 items-center will-change-transform"
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className="shrink-0 overflow-hidden rounded-2xl shadow-2xl border border-white/5 w-[44vw] h-[58vh]"
                >
                  <img
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TEXT PANEL DESKTOP */}
        <div
          ref={textPanelRef}
          className="w-full p-10 flex flex-row items-center justify-between gap-6 bg-[#edf6ea] border-t border-zinc-200 dark:border-zinc-800 z-10 absolute bottom-0 left-0"
        >
          <div className="text-left max-w-xl">
            <h2 className="text-4xl font-bold text-zinc-900">
              My Journey of Programming
            </h2>
            <p className="opacity-60 mt-3 text-lg text-zinc-700 leading-relaxed">
              A structured collection of apps, responsive UI experiments, and core architectural challenges built over my timeline.
            </p>
          </div>

          <div className="shrink-0">
            <button onClick={onCheckNow} className="group relative overflow-hidden bg-black text-[#edf6ea] border border-black px-7 py-3.5 text-sm font-medium rounded-full transition-all duration-300 hover:bg-transparent hover:text-black hover:-translate-y-1 shadow-md">
              <span className="absolute -top-5 left-1/2 w-32 h-32 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 pointer-events-none sparkle" />
              Check Now ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. KOMPONEN MOBILE (MURNI STATIC CARD)
// ==========================================
function IntroMobile({ onCheckNow }) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="bg-[#edf6ea] rounded-3xl overflow-hidden mx-auto max-w-[90vw] md:max-w-md my-8 shadow-lg"
    >
      {/* Catatan Penting: Jika di HP masih kosong, 
        coba matikan sementara tag <Screenshoot /> di bawah ini 
        untuk memastikan file Screenshoot.jsx tidak menyimpan error internal.
      */}
      <Screenshoot />

      <div className="px-5 py-8 text-center">
        <h2 className="text-2xl font-bold text-zinc-900">
          My Journey of Programming
        </h2>

        <p className="opacity-60 mt-3 mb-6 text-sm text-zinc-700 max-w-xs mx-auto leading-relaxed">
          A collection of apps, experiments, and challenges I've built over time.
        </p>

        <button
          onClick={onCheckNow}
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
            text-sm
            font-medium
            rounded-full
            transition-all
            duration-300
            hover:bg-transparent
            hover:text-black
            hover:-translate-y-1
            active:scale-95
          "
        >
          <span className="absolute -top-5 left-1/2 w-32 h-32 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 pointer-events-none sparkle" />
          Check Now
        </button>
      </div>
    </motion.div>
  );
}

export default Intro;