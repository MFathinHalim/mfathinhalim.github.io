import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Photography() {
  const Photographys = [
    "/Fathins/sigma.jpg",
    "/Fathins/Fathin.jpg",
    "/Fathins/Fathin (7).jpg",
    "/Fathins/Fathin (5).png",
    "/Fathins/Fathin (2).png",
    "/Fathins/banner.jpg",
    "/Fathins/Fathin (3).png",
    "/Fathins/Fathin (6).png",
    "/Photography/image (1).jpg",
    "/Photography/image (2).jpg",
    "/Fathins/Fathin (1).png",
    "/Photography/image (3).jpg",
    "/Photography/image (4).jpg",
    "/Photography/image (5).jpg",
  ];

  const introSectionRef = useRef(null);
  const imagesRef = useRef([]);
  const titleRef = useRef(null);
  const instagramRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: introSectionRef.current,
        start: "top top",
        end: "+=300%", 
        pin: true,     
        scrub: 1,      
      }
    });

    // POSISI ENDING YANG TETAP MESSY/ACAK (Hanya digeser menjauh dari tengah agar teks kebaca)
    const scatteredPositionsEnd = [
      { x: "-26vw", y: "-26vh", r: 12 },   
      { x: "28vw",  y: "-20vh", r: -8 },   
      { x: "-28vw", y: "26vh",  r: 6 },    
      { x: "26vw",  y: "22vh",  r: -14 },  
      { x: "-32vw", y: "-10vh", r: -9 },   
      { x: "32vw",  y: "-4vh",  r: 7 },    
      { x: "-18vw", y: "30vh",  r: -5 },   
      { x: "16vw",  y: "28vh",  r: 11 },   
      { x: "-36vw", y: "4vh",   r: 8 },    
      { x: "35vw",  y: "-28vh", r: -10 },  
      { x: "-10vw", y: "-30vh", r: 5 },    
      { x: "12vw",  y: "-26vh", r: -6 },   
      { x: "-34vw", y: "16vh",  r: -11 },  
      { x: "30vw",  y: "10vh",  r: 4 },    
    ];

    // 1. ANIMASI TRANSISE MEJA BERANTAKAN A -> MEJA BERANTAKAN B
    imagesRef.current.forEach((img, index) => {
      if (!img) return;

      const targetPos = scatteredPositionsEnd[index % scatteredPositionsEnd.length];

      tl.to(img, {
        x: targetPos.x,
        y: targetPos.y,
        rotation: targetPos.r, // Berputar acak ke posisi kemiringan baru
        scale: 0.93,          // Efek visual kertas agak merapat ke meja
        duration: 2,
        ease: "power2.out"
      }, 0);
    });

    // 2. ANIMASI TEXT REVEAL
    tl.fromTo(titleRef.current, 
      { scale: 2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.2)" },
      0
    );

    tl.to(titleRef.current, { opacity: 0, scale: 0.8, duration: 0.8 }, 1.2);

    tl.fromTo(instagramRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
      1.4
    );

  }, { scope: introSectionRef });

  return (
    <div 
      ref={introSectionRef} 
      className="relative dark:text-[#edf6ea] w-full h-screen flex items-center justify-center overflow-hidden select-none"
    >
      {/* GALLERY FATHIN FRAME */}
      <div
        ref={titleRef}
        className="absolute z-20 pointer-events-none px-6 py-4 bg-white/95 dark:bg-[#060b04]/95 backdrop-blur-sm border-2 border-zinc-200 dark:border-zinc-700 shadow-xl rounded-sm text-center max-w-sm md:max-w-xl"
      >
        <h2 className="text-5xl font-bold tracking-wider">
          Gallery Fathin
        </h2>
      </div>

      {/* INSTAGRAM FRAME */}
      <div 
        ref={instagramRef}
        className="absolute z-20 pointer-events-auto mx-4 px-6 py-4 md:px-12 md:py-6 bg-white/95 dark:bg-zinc-800/95 backdrop-blur-sm border border-dashed border-zinc-200 dark:border-zinc-700 shadow-xl flex flex-col items-center justify-center max-w-xl text-center opacity-0 rounded-sm"
      >
        <h1 className="text-xl font-semibold tracking-wide font-sans mb-2">
          Also more on my Instagram
        </h1>
        <a 
          href="https://instagram.com/mfathinhalim" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-semibold underline hover:text-zinc-500 transition text-base relative z-30"
        >
          @mfathinhalim ↗
        </a>
      </div>

      {/* COMPONENT FOTO DI ATAS MEJA */}
      <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
        {Photographys.map((photo, index) => {
          
          // KOORDINAT POSISI AWAL (MESSY FORMATION 1)
          const scatteredPositionsStart = [
            { x: "-18vw", y: "-22vh", r: -8 },   
            { x: "16vw",  y: "-26vh", r: 6 },    
            { x: "-24vw", y: "18vh",  r: -12 },  
            { x: "22vw",  y: "24vh",  r: 10 },   
            { x: "-12vw", y: "-8vh",  r: 4 },    
            { x: "14vw",  y: "-6vh",  r: -5 },   
            { x: "-8vw",  y: "22vh",  r: 7 },    
            { x: "10vw",  y: "16vh",  r: -9 },   
            { x: "-28vw", y: "-5vh",  r: -6 },   
            { x: "28vw",  y: "-12vh", r: 11 },   
            { x: "-5vw",  y: "-28vh", r: -4 },   
            { x: "6vw",   y: "-20vh", r: 5 },    
            { x: "-16vw", y: "5vh",   r: -7 },   
            { x: "20vw",  y: "4vh",   r: 3 },    
          ];

          const current = scatteredPositionsStart[index % scatteredPositionsStart.length];

          return (
            <div
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
              className="absolute w-[24vw] h-[16vh] md:w-[13vw] md:h-[18vh] shadow-md border border-zinc-200 dark:border-zinc-800 will-change-transform"
              style={{ 
                transform: `translate(${current.x}, ${current.y}) rotate(${current.r}deg)`,
                zIndex: index + 1 
              }}
            >
              <img 
                src={photo} 
                className="w-full h-full object-cover" 
                alt={`scattered-img-${index}`} 
                loading="eager"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Photography;