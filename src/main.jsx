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
  useEffect(() => {
    Aos.init({ duration: 500, once: false });

    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smartphone: { smooth: false },
      multiplier: 2,
    });
  
    const scrollContainer = document.querySelector("[data-scroll-container]");
    const resizeObserver = new ResizeObserver(() => scroll.update());
    resizeObserver.observe(scrollContainer);

    return () => {
      scroll.destroy();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div  data-scroll-container>
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
