import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MarqueeText = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Looping horizontal movement
      gsap.to(".marquee-track", {
        ease: "none",
        duration: 15,
        repeat: -1,
      });

    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={marqueeRef}>
      {/* Marquee area */}
      <div className="overflow-hidden bg-black">
        <div className=" text-center py-4 whitespace-nowrap">
            <span
              className="text-center text-white text-[3rem] font-bold mx-10"
            >
              Fathin's Journey
            </span>

        </div>
      </div>
    </div>
  );
};

export default MarqueeText;
