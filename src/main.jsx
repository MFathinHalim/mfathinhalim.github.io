import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import "./index.css";
import Intro from "./Intro.jsx";
import Award from "./Award.jsx";
import Portofolio from "./Portofolio.jsx";
import Service from "./Service.jsx";
import Photography from "./Photography.jsx";
import Footer from "./Footer.jsx";
import "aos/dist/aos.css"; 
import Aos from "nitlix-aos";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

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
    <div ref={ref} className='parallax' data-speed='0.3'>
      {isVisible && (
        <iframe
          width='100%'
          height='600'
          src={src}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='rounded-lg'
          data-scroll
        />
      )}
    </div>
  );
};

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
      <div className='container mx-auto p-0 mt-8'>
        <Intro />

        <div id="p" className='parallax' data-speed='0.5'>
          <h3 className='text-4xl sm:text-8xl mt-3 mb-3 text-gray-800' data-aos='fade-up' style={{ marginTop: 120, fontWeight: "bold" }}>
            More About Me
          </h3>
          <Award />
        </div>
        
        <div className='parallax'>
          <Service />
        </div>
        <div className='parallax'>
          <Portofolio />
        </div>
        <div className='parallax'>
          <Photography />
        </div>
        <article
          className='text-center'
          data-aos='fade-up'
          style={{ marginTop: 120, fontWeight: "bold" }}
        >
          <a
            href='https://www.youtube.com/@mfathinhalim'
            className='text-2xl sm:text-4xl pb-0 text-gray-200 font-extrabold'
            data-scroll
          >
            Check Out My Videos
          </a>
        </article>
          <LazyLoadIframe src='https://www.youtube.com/embed/3aSt-zXln7Q' />
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
