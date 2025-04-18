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
import ScrollingText from "./ScrollingText.jsx"
//@ts-ignore
/* eslint-disable react/prop-types */

function App() {
  useEffect(() => {
    Aos.init({ once: false });    
  }, []);

  return (
    <div>
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
