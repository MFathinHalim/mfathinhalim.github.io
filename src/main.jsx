import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import "./index.css";
import Intro from "./Intro.jsx";
import Award from "./Award.jsx";
import Portofolio from "./Portofolio.jsx";
import Service from "./Service.jsx";
import Photography from "./Photography.jsx";
import Footer from "./Footer.jsx";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported
import Aos from "nitlix-aos";
import Cursor from "./Cursor.jsx";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss"; // Import Locomotive Scroll CSS

function App() {
  useEffect(() => {
    // Initialize AOS
    Aos.init({
      duration: 500,
      once: false,
    });

    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smartphone: {
        smooth: true,
      },
      multiplier: 1.8, // Adjusted to make scrolling faster
    });

    // Update scroll on resize
    const scrollContainer = document.querySelector("[data-scroll-container]");
    const resizeObserver = new ResizeObserver(() => scroll.update());
    resizeObserver.observe(scrollContainer);

    // Refresh AOS on scroll
    scroll.on("scroll", () => {
      Aos.refresh(); // Refresh AOS animations
    });

    // Destroy scroll instance on unmount
    return () => {
      scroll.destroy();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div data-scroll-container>
      <Cursor />
      <Header />
      <Navbar />
      <div className='container mx-auto p-0 mt-8'>

        <Intro />

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

        {/* Bento Grid for YouTube Videos */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-12 pt-0 mt-4'>
          {/* YouTube Video 1 */}
          <div className='parallax' data-speed='0.3'>
            <iframe
              width='100%'
              height='315'
              src='https://www.youtube.com/embed/3aSt-zXln7Q'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='rounded-lg'
              data-scroll
            ></iframe>
          </div>

          {/* YouTube Video 2 */}
          <div className='parallax' data-speed='0.3'>
            <iframe
              width='100%'
              height='315'
              src='https://www.youtube.com/embed/rkuFzYL000c'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='rounded-lg'
              data-scroll
            ></iframe>
          </div>
        </div>

        {/* More About Me */}
        <div className='parallax' data-speed='0.5'>
          <h3 className='text-4xl sm:text-8xl mt-3 mb-3 text-gray-800' data-aos='fade-up' style={{ marginTop: 120, fontWeight: "bold" }}>
            More About Me
          </h3>
          <Award />
        </div>

        {/* Portfolio Section */}
        <div className='parallax'>
          <Portofolio />
        </div>

        {/* Photography Section */}
        <div className='parallax'>
          <Photography />
        </div>

        {/* Service Section */}
        <div className='parallax'>
          <Service />
        </div>

        {/* Footer Section */}
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
