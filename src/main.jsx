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
    <div className="container mx-auto p-0 mt-8 ">
      <Navbar />
      <Intro />

      <h3
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration={1000}
        className="text-4xl sm:text-8xl m-3 text-gray-800"
        style={{ marginTop: 120, fontWeight: "bold" }}
      >
        More About Me
      </h3>

      <Award />
      <Portofolio />
      <Photography />
      <Service />

      <Footer />
    </div>
    <img
      src="waves.svg"
      draggable="false"
      style={{
        width: "100%",
        objectFit: "cover",
        height: "300px",
      }}
    />
  </React.StrictMode>
);
