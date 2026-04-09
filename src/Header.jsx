import DarkModeToggle from "./DarkModeToggle";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Youtube,
  Twitter,
  Instagram,
  Facebook,
  ChevronDown,
} from "lucide-react";

const ICONS = {
  linkedin: <Linkedin className="w-5 h-5" />,
  discord: <MessageCircle className="w-5 h-5" />,
  whatsapp: <Phone className="w-5 h-5" />,
  envelope: <Mail className="w-5 h-5" />,
  youtube: <Youtube className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
  facebook: <Facebook className="w-5 h-5" />,
};

const ContactLink = ({ icon, label, url }) => (
  <a
    href={url}
    className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {ICONS[icon] || <span className="w-5 h-5" />}
    <span>{label}</span>
  </a>
);

function Header() {
  const headerRef = useRef(null);
  const audioOpenRef = useRef(null);
  const audioCloseRef = useRef(null);

  const [position, setPosition] = useState({ top: 30, left: 20 });
  const [showContact, setShowContact] = useState(false);
  const [showPortofolio, setShowPortofolio] = useState(false);
  const [isMiniHeader, setIsMiniHeader] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#hero-header");
    const heroOffset = hero?.offsetHeight ?? 0;

    const onScroll = () => {
      if (window.scrollY > heroOffset * 0.7) {
        setIsMiniHeader(true);
      } else {
        setIsMiniHeader(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (showContact && audioOpenRef.current) {
      audioOpenRef.current.currentTime = 0;
      audioOpenRef.current.play().catch(() => {});
    }
  }, [showContact]);

  useEffect(() => {
    if (showPortofolio && audioOpenRef.current) {
      audioOpenRef.current.currentTime = 0;
      audioOpenRef.current.play().catch(() => {});
    }
  }, [showPortofolio]);

  const setHeaderRef = useCallback((node) => {
    if (headerRef.current) {
      headerRef.current.onmousedown = null;
    }

    if (node) {
      let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

      const dragMouseDown = (e) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = () => {
          document.onmouseup = null;
          document.onmousemove = null;
        };
        document.onmousemove = (e) => {
          e.preventDefault();
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          setPosition((prev) => ({
            top: prev.top - pos2,
            left: prev.left - pos1,
          }));
        };
      };
      node.onmousedown = dragMouseDown;
    }
    headerRef.current = node;
  }, []);

  return (
    <>
      {isMiniHeader && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            zIndex: 500,
          }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-x-0 top-4 z-500 pointer-events-none"
        >
          <div className="hidden md:flex justify-center">
            <div className="w-1/2 justify-between backdrop-blur-xl bg-white/60 dark:bg-black/60 dark:text-white border border-white/40 dark:border-white/20 rounded-full px-4 py-3 shadow-lg ring-1 ring-white/20 dark:ring-white/10 pointer-events-auto flex items-center gap-6 text-sm font-semibold">
              <a
                href="#hero-header"
                className="flex items-center gap-2 px-4 py-1 rounded-full hover:bg-white/30 dark:hover:bg-white/10 transition"
              >
                M.FATHIN HALIM
              </a>

              <div className="flex items-center gap-1 group">
                <a
                  href="#projects"
                  className="px-3 py-1 hover:underline rounded-full transition"
                >
                  Projects
                </a>
                <a
                  href="#gallery"
                  className="px-3 py-1 rounded-full hover:underline transition"
                >
                  Gallery
                </a>
                <button
                  onClick={() => setShowContact(true)}
                  className="px-3 py-1 rounded-full hover:underline transition"
                >
                  Contact
                </button>
                <a
                  href="#more"
                  className="px-3 py-1 rounded-full hover:underline transition"
                >
                  More About Me
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <section
        id="hero-header"
        className="relative px-5 py-10 sm:p-10 xl:px-64 min-h-screen text-black dark:text-[#edf6ea] flex flex-col justify-center"
      >
        <div className="flex flex-col sm:flex-row sm:justify-end sm:items-end gap-1 sm:gap-0">
          <img
            src="/Fathins/my.jpg"
            className="hidden md:block border-yellow-600 dark:border-yellow-300 border border-2"
            style={{
              rotate: "5deg",
              width: "150px",
              height: "150px",
              zIndex: 50,
            }}
          />
        </div>

        <DarkModeToggle />

        <div className="flex flex-wrap gap-2 my-5 justify-between">
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-4 py-1 text-sm font-mono dark:text-white border border-black/50 text-black dark:border-white/20 rounded-full bg-white/5 backdrop-blur-sm shadow-sm hover:bg-white/10 transition">
              &lt;Developer/&gt;
            </span>
            <span className="inline-block px-4 py-1 text-sm font-mono dark:text-white border border-black/50 text-black dark:border-white/20 rounded-full bg-white/5 backdrop-blur-sm shadow-sm hover:bg-white/10 transition">
              &lt;UI/UX/&gt;
            </span>
          </div>
          <span className="inline-block px-4 py-1 text-sm font-mono dark:text-white border border-black/50 text-black dark:border-white/20 rounded-full bg-white/5 backdrop-blur-sm shadow-sm hover:bg-white/10 transition">
            &lt;Student/&gt;
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-1 sm:gap-0">
          <h1
            className={`text-4xl sm:text-6xl xl:text-8xl font-bold hover:opacity-60 transition-opacity duration-300 leading-tight ${
              isMiniHeader ? "opacity-0" : "opacity-100"
            }`}
          >
            M.FATHIN HALIM
          </h1>
          <h1
            className={`text-4xl sm:text-6xl xl:text-8xl font-bold hover:opacity-60 transition-opacity duration-300 leading-tight sm:text-right ${
              isMiniHeader ? "opacity-0" : "opacity-100"
            }`}
          >
            INDIE DEV
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-1 sm:gap-0 dark:text-[#edf6ea]/80 mt-1">
          <h2
            className={`text-2xl sm:text-4xl xl:text-6xl font-bold hover:opacity-60 transition-opacity duration-300 leading-tight ${
              isMiniHeader ? "opacity-0" : "opacity-100"
            }`}
          >
            March 7th 2010
          </h2>
          <button
            onClick={() => setShowPortofolio((prev) => !prev)}
            className={`text-3xl sm:text-5xl xl:text-7xl font-bold group relative overflow-hidden cursor-pointer hover:opacity-60 transition-opacity duration-300 text-left ${
              isMiniHeader ? "opacity-0" : "opacity-100"
            }`}
          >
            5 Years Exp
            <span className="absolute bottom-0 left-0 w-full h-1 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>

        <div
          className={`flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 mt-4 ${
            isMiniHeader ? "opacity-0" : "opacity-100"
          }`}
        >
          <button
            onClick={() => setShowContact((prev) => !prev)}
            className="text-3xl sm:text-5xl xl:text-7xl font-bold group relative overflow-hidden cursor-pointer hover:opacity-60 transition-opacity duration-300 text-left"
          >
            LET'S CONNECT
            <span className="absolute bottom-0 left-0 w-full h-1 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          <a
            href="https://github.com/mfathinhalim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-5xl xl:text-7xl font-bold group relative overflow-hidden cursor-pointer hover:opacity-60 transition-opacity duration-300 sm:text-right"
          >
            MY GITHUB
            <span className="absolute bottom-0 left-0 w-full h-1 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </div>

        <div
          className={`flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-8 mt-6 ${
            isMiniHeader ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="text-base sm:text-lg dark:text-[#edf6ea]/80">
            I'm an{" "}
            <span className="font-bold hover:opacity-60 transition-opacity duration-300">
              indie developer
            </span>{" "}
            who love making things{" "}
            <span className="font-bold hover:opacity-60 transition-opacity duration-300">
              i like
            </span>
          </p>
          <p className="text-base sm:text-lg dark:text-[#edf6ea]/80 sm:text-right">
            Sometimes i made{" "}
            <span className="font-bold hover:opacity-60 transition-opacity duration-300">
              Websites
            </span>
            , sometimes i made{" "}
            <span className="font-bold hover:opacity-60 transition-opacity duration-300">
              Mobile Apps
            </span>
            , and even some{" "}
            <span className="font-bold hover:opacity-60 transition-opacity duration-300">
              Games
            </span>
          </p>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex justify-center w-full mt-10"
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-1 sm:gap-0">
          <iframe
            className="hidden md:block border-red-600 dark:border-red-300 border border-2"
            style={{
              rotate: "-3deg",
              width: "414px",
              height: "212px",
              zIndex: 50,
            }}
            src="https://www.youtube.com/embed/Ww9RtlRdMT0"
            title="Hey, i am here :D"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <img
            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/11979084/373169dddb3c43209069775a112fb838/eyJ3Ijo2MjB9/9.gif?token-hash=1sjuVb83beMHkejZ0-43rG1-VAahWVKUH5rIVXXg-hQ%3D"
            className="hidden md:block border-green-600 dark:border-green-300 border border-2"
            style={{
              objectFit: "cover",
              rotate: "3deg",
              width: "120px",
              height: "120px",
              zIndex: 50,
            }}
          />
        </div>
      </section>

      {showContact && (
        <section
          style={{
            position: "fixed",
            top: `${position.top}px`,
            left: `${position.left}px`,
            cursor: "grab",
            zIndex: 9999,
          }}
          className="border border-gray-700 rounded-2xl backdrop-blur bg-[#edf6ea]/30 dark:bg-black/30 dark:text-[#edf6ea] pointer-events-auto"
        >
          <div className="prevent-select rounded-2xl shadow-xl max-h-[90vh] overflow-auto w-[90vw] md:w-[600px]">
            <div
              ref={setHeaderRef}
              className="flex items-center backdrop-blur rounded-t-2xl p-3 cursor-grab"
            >
              <div className="flex justify-between w-full px-2 space-x-2">
                <p>Contact Me</p>
                <button
                  onClick={() => {
                    if (audioCloseRef.current) {
                      audioCloseRef.current.currentTime = 0;
                      audioCloseRef.current.play().catch(() => {});
                    }
                    setShowContact(false);
                  }}
                  className="w-5 h-5 bg-red-400 hover:bg-red-500 rounded-full"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 p-6">
              <ContactLink
                icon="linkedin"
                label="M.Fathin Halim"
                url="https://www.linkedin.com/in/m-fathin-halim-8b8198288/"
              />
              <ContactLink
                icon="discord"
                label="@mfathinhalim"
                url="https://discordapp.com/users/1156486226094870569"
              />
              <ContactLink
                icon="whatsapp"
                label="+62 822 8162 7963"
                url="https://wa.me/+6282281627963"
              />
              <ContactLink
                icon="envelope"
                label="Email Me"
                url="mailto:halimfathin7@gmail.com"
              />
              <ContactLink
                icon="youtube"
                label="M.Fathin Halim"
                url="https://www.youtube.com/@mfathinhalim"
              />
              <ContactLink
                icon="twitter"
                label="@mfathinhalim"
                url="https://twitter.com/mfathinhalim"
              />
              <ContactLink
                icon="instagram"
                label="@mfathin_halim"
                url="https://instagram.com/mfathin_halim"
              />
              <ContactLink
                icon="facebook"
                label="M.Fathin Halim"
                url="https://facebook.com/MFathinHalim"
              />
            </div>
          </div>
        </section>
      )}
      {showPortofolio && (
        <section className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/30">
          <div
            className="rounded-2xl shadow-xl border border-stone-700 bg-white h-[93vh] w-[95vw] transition-opacity duration-300 ease-in-out pointer-events-auto"
            style={{ pointerEvents: "auto" }}
          >
            {/* Header Bar */}
            <div className="flex items-center bg-black rounded-t-2xl p-3 overflow-hidden">
              <div className="flex justify-between w-full px-2 space-x-2">
                <p className="text-white">My Work</p>
                <button
                  onClick={() => {
                    if (audioCloseRef.current) {
                      audioCloseRef.current.currentTime = 0;
                      audioCloseRef.current.play().catch((e) => {
                        console.warn("Gagal play sound close:", e);
                      });
                    }
                    setShowPortofolio(false);
                  }}
                  className="w-5 h-5 bg-red-400 hover:bg-red-500 rounded-full"
                ></button>
              </div>
            </div>

            <div className="h-[calc(93vh-50px)] dark:bg-[#060b04]">
              <iframe
                src="/journey/"
                title="Journey Page"
                className="w-full h-full border-0"
                style={{ pointerEvents: "auto" }}
              />
            </div>
          </div>
        </section>
      )}

      <audio ref={audioOpenRef} src="/Sounds/open.mp3" preload="auto" />
      <audio ref={audioCloseRef} src="/Sounds/close.mp3" preload="auto" />
    </>
  );
}

export default Header;
