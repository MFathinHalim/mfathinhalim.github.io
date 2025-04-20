import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ScrollingZoomText = () => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const isJourney = pathname.startsWith("/journey");

  const lines = isJourney
    ? ["Journey"]
    : ["Hey you", "Let me introduce myself"];
  const stars = Array.from({ length: 100 }, (_, index) => ({
    id: index,
    animationDuration: Math.random() * 5 + 5,
    animationDelay: Math.random() * 1 + 1,
    top: Math.random() * 100 + '%', // Use percentage for responsiveness
    left: Math.random() * 100 + '%', // Use percentage for responsiveness
  }));

  useEffect(() => {
    const container = containerRef.current;
    let tl;
    if(!isJourney) {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=500", // Adjust as needed
          pin: true,
          scrub: true,
          markers: false,
        },
      });
    } else {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          scrub: true,
          markers: false,
        },
      });
    }


    textRefs.current.forEach((el) => {
      tl.fromTo(
        el,
        {
          scale: isJourney ? 1 : 0.5,
          opacity: isJourney ? 0.3 : 0,
        },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
        },
        0
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-black"
      style={{
        height: isJourney ? '37vh' : "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Star Background */}
      <div
        className="stars-container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className="star m-0"
            style={{
              animation: `twinkle ${star.animationDuration}s linear ${star.animationDelay}s infinite`,
              top: star.top,
              left: star.left,
            }}
          />
        ))}
      </div>

      {/* Text Content */}
      {lines.map((line, index) => (
        <div
          key={index}
          id={`Name`}
          className="text-2xl md:text-7xl py-4"
          ref={(el) => (textRefs.current[index] = el)}
          style={{
            whiteSpace: "nowrap",
            fontWeight: 600,
            color: "white", // Set a default text color so it's visible before the gradient
            zIndex: 10, // Make sure the text is on top of the stars
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

export default () => (
  <>
    <ScrollingZoomText />
  </>
);