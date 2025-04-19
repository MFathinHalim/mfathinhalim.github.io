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
import Navbar from "./Navbar.jsx";
import ScrollingText from "./ScrollingText.jsx"
//@ts-ignore
/* eslint-disable react/prop-types */

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 639);
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
      <Header id="header" />
      <ScrollingText />
      <div className="parallax" id="photography">
          <Photography />
        </div>
      <div className="px-5 mx-auto md:w-[75%]">
        <Navbar />
        <Intro id="intro" />

        <div className="parallax" id="service">
          <Service />
        </div>
        <div className='flex flex-wrap mt-9'>
        {/* Left Section with Image */}
        <div  className='w-full md:w-1/2 pt-3 mb-3'>
          <h3 id="Name" className='text-3xl sm:text-4xl text-white text-left font-bold drop-shadow-lg'>
            <p id="Name" className='text-sm bg-white text-black p-1 mb-2 px-2 ps-2 rounded-lg font-extrabold' style={{ width: "fit-content" }}>
              FAQ
            </p>
            Things You Are Probably Wondering
          </h3>
        </div>

        {/* Right Section with Q&A and Icons */}
        <div className='w-full z-20 overflow-visible md:w-1/2' data-aos='fade-up'>
          <div className='space-y-4'>
            <div className='hover:-translate-y-1 transition-all border-2 border-gray-600 p-4 rounded-xl shadow-md flex items-center'>
              <i className='fa-solid fa-code text-blue-400 text-3xl mr-4'></i>
              <div>
                <h4 className='text-xl text-white font-bold drop-shadow-lg'>Does Fathin&apos;s parent also programmers?</h4>
                <p className='text-white mt-2'>No, they are not programmers :)</p>
              </div>
            </div>
            <div className='hover:-translate-y-1 transition-all border-2 border-gray-600 p-4 rounded-xl shadow-md flex items-center'>
              <i className='fa-solid fa-clock text-green-400 text-4xl mr-4'></i>
              <div>
                <h4 className='text-xl text-white font-bold drop-shadow-lg'>Since when did Fathin learn programming?</h4>
                <p className='text-white mt-2'>Since 2020, when Fathin was in 5th grade.</p>
              </div>
            </div>
            <div className='hover:-translate-y-1 transition-all border-2 border-gray-600 p-4 rounded-xl shadow-md flex items-center'>
              <i className='fa-solid fa-gamepad text-red-400 text-3xl mr-4'></i>
              <div>
                <h4 className='text-xl text-white font-bold drop-shadow-lg'>Why did Fathin study programming?</h4>
                <p className='text-white mt-2'>Because my parents said, &quot;Rather than being a gamer, how about you make the game?&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        <div className="parallax" id="footer">
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
