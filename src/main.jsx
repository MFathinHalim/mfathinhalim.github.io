import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import "./index.css";
import Intro from "./Intro.jsx";
import Service from "./Service.jsx";
import Photography from "./Photography.jsx";
import Footer from "./Footer.jsx";
import "aos/dist/aos.css";
import Aos from "nitlix-aos";
import Navbar from "./Navbar.jsx";
import { gsap } from "gsap"; // Import GSAP

//@ts-ignore
/* eslint-disable react/prop-types */

function App() {
  useEffect(() => {
    Aos.init({ duration: 500, once: false });

    // GSAP Animations for elements
    gsap.fromTo(
      "#header",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    gsap.fromTo(
      "#intro",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      "#service",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, delay: 1 }
    );

    gsap.fromTo(
      "#photography",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, delay: 1.5 }
    );

    gsap.fromTo(
      "#footer",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 2 }
    );
  }, []);

  return (
    <div>
      <Header id="header" />
      <div className="mx-auto p-0 mt-8 container">
        <Navbar />
        <Intro id="intro" />
        <div className="parallax" id="service">
          <Service />
        </div>
        <div className="parallax" id="photography">
          <Photography />
        </div>
        <div className="parallax" id="footer">
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
