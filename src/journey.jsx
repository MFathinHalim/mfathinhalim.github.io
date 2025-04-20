import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Award from "./Award.jsx";
import Navbar from "./Navbar.jsx";
import Portofolio from "./Portofolio.jsx";
import "aos/dist/aos.css";
import Aos from "nitlix-aos";
import Path from "./Path.jsx";
import Footer from "./Footer.jsx";
import Screenshoot from "./Screenshoot.jsx";
import ScrollingText from "./ScrollingText.jsx";
import MarqueeText from "./TextHorizontal.jsx";

//@ts-ignore
/* eslint-disable react/prop-types */
const LazyLoadIframe = ({ src }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="parallax mt-4 mx-1">
      {isVisible && (
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%", // 16:9
          }}
          className="rounded-2xl overflow-hidden"
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            src={src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="border-gray-700 border rounded-sm"
          />
        </div>
      )}
    </div>
  );
};

function App() {
    const cursorRef = useRef(null); // Using useRef to store the cursor element
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };
  useEffect(() => {
    Aos.init({ once: false });
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.animate(
          {
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove); // Add mousemove listener

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove); // Cleanup
    };
  }, []);

  return (
    <div>
      <div
        className={`custom-cursor`}
        id="cursor2"
        ref={cursorRef} // Attach the ref here
      />
      <MarqueeText />
      <Screenshoot />
      <div className="px-2 mx-auto container">
        <Navbar />
        <div className="parallax">
          <Path />
        </div>
        <div className="parallax">
          <Award />
        </div>
        <article data-aos="fade-up" style={{ fontWeight: "bold" }}>
          <a
            id="Name"
            href="https://www.youtube.com/@mfathinhalim"
            className="text-2xl sm:text-4xl pb-0 px-1 text-gray-200 font-extrabold"
          >
            Check Out TVRI National Coverage About Me
          </a>
        </article>
        <LazyLoadIframe src="https://www.youtube.com/embed/D34ydqP3sK8?si=2ybXlAI46BjMiECF" />
        <div className="parallax">
          <Portofolio />
        </div>
      </div>
      <div className="parallax">
        <Footer />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
