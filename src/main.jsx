import React from "react";
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
import "aos/dist/aos.css";
import Aos from "aos";
import Cursor from "./Cursor.jsx";
Aos.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Cursor />
    <Header />
    <div className='container mx-auto p-0 mt-8 '>
      <Navbar />
      <Intro />

      <article className='text-center' data-aos='fade-up' style={{ marginTop: 120, fontWeight: "bold" }}>
        <a href='https://www.youtube.com/@mfathinhalim' className='text-2xl sm:text-4xl pb-0 text-gray-200 font-extrabold'>
          Check Out My Videos
        </a>
      </article>

      {/* Bento Grid for YouTube Videos */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-12 pt-0 mt-4'>
        {/* YouTube Video 1 */}
        <iframe width='100%' height='315' src='https://www.youtube.com/embed/3aSt-zXln7Q' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen className='rounded-lg' data-aos='fade-right'></iframe>

        {/* YouTube Video 2 */}
        <iframe width='100%' height='315' src='https://www.youtube.com/embed/rkuFzYL000c' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen className='rounded-lg' data-aos='fade-left'></iframe>
      </div>
      <h3 className='text-4xl sm:text-8xl mt-3 mb-3 text-gray-800' style={{ marginTop: 120, fontWeight: "bold" }}>
        More About Me
      </h3>
      <Award />

      <Portofolio />
      <Photography />
      <Service />

      <Footer />
    </div>
    <img
      src='waves.svg'
      draggable='false'
      style={{
        width: "100%",
        objectFit: "cover",
        height: "100px",
      }}
    />
  </React.StrictMode>,
);
