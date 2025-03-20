import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import "./index.css";
import Intro from "./Intro.jsx";
import Service from "./Service.jsx";
import Photography from "./Photography.jsx";
import Footer from "./Footer.jsx";
import "aos/dist/aos.css"; 
import Aos from "nitlix-aos";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import Navbar from "./Navbar.jsx";
//@ts-ignore
/* eslint-disable react/prop-types */

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    // Event delegation untuk hover pada link
    const handleMouseOver = (e) => {
      if (e.target.matches("a, h1, h3, h4, strong, #Name")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.matches("a, h1, h3, h4, strong, #Name")) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  useEffect(() => {
    Aos.init({ duration: 500, once: false });

    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smartphone: { smooth: false },
      multiplier: 2,
    });

    scroll.on("scroll", (instance) => {
      setScrollOffset(instance.scroll.y); // Simpan posisi scroll
    });

    const scrollContainer = document.querySelector("[data-scroll-container]");
    const resizeObserver = new ResizeObserver(() => scroll.update());
    resizeObserver.observe(scrollContainer);

    return () => {
      scroll.destroy();
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY + scrollOffset }); // Sesuaikan posisi dengan scroll
    };

    const scrollContainer = document.querySelector("[data-scroll-container]");
    if (scrollContainer) {
      scrollContainer.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [scrollOffset]);

  return (
    
    <div  data-scroll-container>
            <div
      className={`custom-cursor ${isHovering ? "custom-cursor--link" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />  
      <Header />
      <div className='px-2 mx-auto p-0 mt-8 container'>
    
        <Navbar />
        <Intro />
        <div className='parallax'>
          <Service />
        </div>
        <div className='parallax'>
          <Photography />
        </div>
        <div className='parallax'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
