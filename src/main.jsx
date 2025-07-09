import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "aos/dist/aos.css";
import Aos from "nitlix-aos";
import Header from "./Header.jsx";
import Intro from "./Intro.jsx";
import SkillsTools from "./SkillsTools.jsx";
import Footer from "./Footer.jsx";
import Service from "./Service.jsx";
import Photography from "./Photography.jsx";
import { ThemeProvider } from "./contect/ThemeProvider.jsx";
import Little from "./Little.jsx";
import Cursor from "./Cursor.jsx";
import ScrollBubbleBar from "./ScrollBubbleBar.jsx";
//@ts-ignore
/* eslint-disable react/prop-types */

function App() {
  useEffect(() => {
    Aos.init({ once: false });
  }, []);

  return (
    <ThemeProvider>
      <ScrollBubbleBar />

      <Cursor />
      <div className="dark:bg-stone-900">
        <div className="fixed inset-0 z-0 bg-[url('https://img.freepik.com/premium-photo/blue-watercolor-texture-background_469760-1573.jpg')] dark:hidden bg-cover bg-center bg-no-repeat"></div>
        <div className="fixed inset-0 z-0 hidden dark:block bg-[url('https://wallpaper.dog/large/20622098.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="fixed inset-0 dark:bg-black/50 z-0"></div>
        <Header />
        <div className="relative z-10  backdrop-blur-lg">
          <SkillsTools />
        </div>
        <Intro />
        <div className="relative z-10  backdrop-blur-lg">
          <Little />
          <Service />
          <Photography />
          <div className="flex dark:text-white flex-wrap px-4 py-20 md:py-40 md:px-32 xl:px-64 mx-auto ">
            {/* Left Section with Image */}
            <div className="w-full md:w-1/2 pt-3 mb-3">
              <h3
                id="Name"
                className="text-4xl md:text-6xl font-passion tracking-wide text-left drop-shadow-lg"
              >
                <p
                  id="Name"
                  className="text-sm bg-stone-700 text-white p-1 mb-2 px-2 ps-2 rounded-lg"
                  style={{ width: "fit-content" }}
                >
                  FAQ
                </p>
                Things You Are Probably Wondering
              </h3>
            </div>
            <div
              className="w-full z-20 overflow-visible md:w-1/2"
              data-aos="fade-up"
            >
              <div className="space-y-4">
                <div className="hover:-translate-y-1 transition-all border border-black dark:border-white/40 p-4 flex items-center">
                  <i className="fa-solid fa-code text-black dark:text-white/80 text-3xl mr-4"></i>
                  <div>
                    <h4 className="text-xl  font-bold drop-shadow-lg">
                      Does Fathin&apos;s parent also programmers?
                    </h4>
                    <p className="opacity-60 mt-2">
                      No, they are not programmers :)
                    </p>
                  </div>
                </div>
                <div className="hover:-translate-y-1 transition-all border border-black dark:border-white/40 p-4 flex items-center">
                  <i className="fa-solid fa-clock text-black dark:text-white/80 text-4xl mr-4"></i>
                  <div>
                    <h4 className="text-xl  font-bold drop-shadow-lg">
                      Since when did Fathin learn programming?
                    </h4>
                    <p className="opacity-60 mt-2">
                      Since 2020, when Fathin was in 5th grade.
                    </p>
                  </div>
                </div>
                <div className="hover:-translate-y-1 transition-all border border-black dark:border-white/40 p-4 flex items-center">
                  <i className="fa-solid fa-gamepad text-black dark:text-white/80 text-3xl mr-4"></i>
                  <div>
                    <h4 className="text-xl  font-bold drop-shadow-lg">
                      Why did Fathin study programming?
                    </h4>
                    <p className="opacity-60 mt-2">
                      Because my parents said, &quot;Rather than being a gamer,
                      how about you make the game?&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="mail"
            className="relative py-10 md:py-32 border-b-4 dark:border-stone-600 dark:text-white px-10 md:px-32 xl:px-64 rounded-b-[32px] md:rounded-b-[150px] mx-auto"
          >
            {/* Amplop penutup */}

            {/* Form Kontak */}
            <h2 className="text-5xl md:text-7xl tracking-wide font-passion text-center mb-2">
              GET IN TOUCH
            </h2>
            <p className="text-center text-gray-500 dark:text-white/60 mt-0 pt-0 mb-6">
              Have a project you’d like to bring to life? Let’s collaborate!
            </p>
            <form
              className="space-y-6 max-w-full"
              action="https://formspree.io/f/xnnvjwnb"
              method="POST"
            >
              <div>
                <label className="font-bold">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
                  placeholder="What's your name?"
                  required
                />
              </div>
              <div>
                <label className="font-bold">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
                  placeholder="How can I get back to you?"
                  required
                />
              </div>
              <div>
                <label className="font-bold">Message</label>
                <textarea
                  name="message"
                  className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
                  placeholder="What would you like to say?"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button className="bg-black dark:bg-stone-300 dark:text-black hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-full shadow-md">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
