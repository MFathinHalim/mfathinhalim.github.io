import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Award from "./Award.jsx";
import Navbar  from "./Navbar.jsx";
import Portofolio from "./Portofolio.jsx";
import "aos/dist/aos.css"; 
import Aos from "nitlix-aos";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import Path from "./Path.jsx";
import Footer from "./Footer.jsx";
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
    <div ref={ref} className='parallax mt-4 mx-1' data-speed='0.3'>
      {isVisible && (
        <div
  style={{
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%', // 16:9 aspect ratio (height / width * 100)
  }}
  className="rounded-2xl overflow-hidden"
>
  <iframe
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
    src={src}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="border-gray-700 border rounded-sm"
    data-scroll
  />
</div>

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
      <div className='px-2 mx-auto p-0 mt-8 container'>
      <Navbar />
        <div className='parallax'>
          <Path />
        </div>
        <div className='parallax'>
          <Award />
        </div>
        <article
          data-aos='fade-up'
          style={{ fontWeight: "bold" }}
        >
          <a
          id="Name"
            href='https://www.youtube.com/@mfathinhalim'
            className='text-2xl sm:text-4xl pb-0 px-1 text-gray-200 font-extrabold'
            data-scroll
          >
Check Out TVRI National Coverage About Me
          </a>
        </article>
          <LazyLoadIframe src='https://www.youtube.com/embed/D34ydqP3sK8?si=2ybXlAI46BjMiECF' />
        <div className='parallax'>
          <Portofolio />
        </div>
      </div>
        <div className='parallax'>
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
