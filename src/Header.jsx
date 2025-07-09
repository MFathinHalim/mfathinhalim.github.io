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
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";

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

function Header() {
  const headerRef = useRef(null);
  const audioOpenRef = useRef(null);
  const audioCloseRef = useRef(null);

  const [position, setPosition] = useState({ top: 30, left: 20 });
  const [showContact, setShowContact] = useState(false);
  const titles = [
    "Indie Developer",
    "Web Developer",
    "Mobile Developer",
    "UI/UX Designer",
    "Programmer",
  ];

  const [currentTitle, setCurrentTitle] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // mulai hilang

      setTimeout(() => {
        setCurrentTitle((prev) => (prev + 1) % titles.length); // ganti teks
        setFade(true); // muncul lagi
      }, 300); // tunggu fade-out selesai
    }, 3000); // tiap 3 detik

    return () => clearInterval(interval);
  }, []);

  // Set posisi awal ke tengah layar saat pertama load kalau belum ada di localStorage
  useEffect(() => {
    const savedPos = localStorage.getItem("contactPosition");
    if (savedPos) {
      setPosition(JSON.parse(savedPos));
    } else {
      // Dapatkan ukuran viewport
      const centerTop = window.innerHeight / 2 - 150; // 150 kira2 tinggi contact box / 2
      const centerLeft = window.innerWidth / 2 - 300; // 300 kira2 lebar contact box / 2
      setPosition({ top: centerTop, left: centerLeft });
    }
  }, []);
  useEffect(() => {
    if (showContact && audioOpenRef.current) {
      audioOpenRef.current.currentTime = 0;
      audioOpenRef.current.play().catch((e) => {
        console.warn("Gagal play sound open:", e);
      });
    }
  }, [showContact]);

  useEffect(() => {
    const elmnt = headerRef.current;
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    const dragMouseDown = (e) => {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    };

    const elementDrag = (e) => {
      e = e || window.event;
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

    const closeDragElement = () => {
      document.onmouseup = null;
      document.onmousemove = null;
    };

    if (elmnt) {
      elmnt.onmousedown = dragMouseDown;
    }

    return () => {
      if (elmnt) {
        elmnt.onmousedown = null;
      }
      document.onmouseup = null;
      document.onmousemove = null;
    };
  }, []);

  return (
    <>
      <section className="relative sm:p-10 py-10 px-5 xl:px-64 min-h-screen text-black dark:text-white flex flex-col justify-center bg-cover bg-center bg-no-repeat">
        <DarkModeToggle />

        <div className="flex flex-col-reverse md:justify-between items-center md:flex-row gap-5 md:gap-10">
          <div>
            <h1
              data-aos="zoom-in"
              data-aos-duration="700"
              className="text-2xl font-bold mb-4"
            >
              Hi, i am M. Fathin Halim
            </h1>
            <AnimatePresence mode="wait">
              <motion.h2
                key={titles[currentTitle]}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="text-8xl uppercase hidden md:block font-passion tracking-normal mb-4"
              >
                {titles[currentTitle]}
              </motion.h2>
            </AnimatePresence>
            <div className="flex gap-2 mb-5">
              <span className="inline-block px-4 py-1 text-sm font-mono dark:text-white border dark:border-white/20 rounded-full bg-white/5 backdrop-blur-sm shadow-sm hover:bg-white/10 transition">
                &lt;Developer/&gt;
              </span>
              <span className="inline-block px-4 py-1 text-sm font-mono dark:text-white border dark:border-white/20 rounded-full bg-white/5 backdrop-blur-sm shadow-sm hover:bg-white/10 transition">
                &lt;UI/UX/&gt;
              </span>
              <span className="inline-block px-4 py-1 text-sm font-mono dark:text-white border dark:border-white/20 rounded-full bg-white/5 backdrop-blur-sm shadow-sm hover:bg-white/10 transition">
                &lt;Student/&gt;
              </span>
            </div>

            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="max-w-xl text-gray-700 dark:text-gray-200/80 text-justify md:text-left text-lg"
            >
              I am an indie developer and designer based in Indonesia,
              specializing in crafting intuitive and visually compelling digital
              experiences. I focus on creating products that seamlessly blend
              form and function. Passionate about{" "}
              <strong>Mobile App Development</strong>,{" "}
              <strong>Web Development</strong>, and{" "}
              <strong>Desktop Applications</strong>, I strive to bring
              intention, creativity, and fun to every project I undertake.
            </p>
            <p className="max-w-xl mt-5 mb-7 text-gray-700 dark:text-gray-100/80 text-justify md:text-left text-lg">
              Check my{" "}
              <a
                className="underline font-bold dark:text-white"
                href="https://www.fiverr.com/fathin_halim"
              >
                Fiverr
              </a>
            </p>
            <div className="flex flex-row items-center gap-3 mt-5">
              <a
                data-aos="fade-down"
                data-aos-delay="400"
                className="inline-block px-6 font-bold py-3 hover:text-black hover:bg-transparent border border-black rounded-xl bg-black text-white dark:bg-white dark:text-black dark:hover:bg-white/60 transition"
                href="https://github.com/mfathinhalim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i> Github
              </a>
              <button
                data-aos="fade-up"
                data-aos-delay="400"
                onClick={() => setShowContact((prev) => !prev)}
                className="inline-block px-6 font-bold py-3 dark:hover:bg-white dark:hover:text-black dark:border-white bg-transparent border border-black rounded-xl hover:bg-black hover:text-white transition"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center h-full items-end">
            
            <div>
              <p className="font-mono mb-2 font-bold text-lg">~/about.md</p>
              <div className="bg-gray-200/30 dark:bg-[#0f0f13]/30 text-green-900 dark:text-green-300 font-mono px-6 py-5 rounded-xl shadow-xl text-sm w-full lg:w-fit border dark:border-green-800/30 backdrop-blur-sm hover:scale-[1.02] transition">
                <p>
                  <span className="text-red-600 dark:text-red-300">const</span>{" "}
                  <span className="text-black dark:text-white font-semibold">
                    developer = &#123;
                  </span>
                </p>
                <p className="pl-6">
                  <span className="text-black dark:text-white">name:</span> "M.
                  Fathin Halim",
                </p>
                <p className="pl-6">
                  <span className="text-black dark:text-white">age:</span> "16
                  years old",
                </p>
                <p className="pl-6">
                  <span className="text-black dark:text-white">role:</span>{" "}
                  "Fullstack Developer",
                </p>
                <p className="pl-6">
                  <span className="text-black dark:text-white">passion:</span>{" "}
                  "Make good apps",
                </p>
                <p className="pl-6">
                  <span className="text-black dark:text-white">status:</span>{" "}
                  "Learning & Growing",
                </p>

                <p className="pl-6">
                  <span className="text-black dark:text-white">hobbies:</span>{" "}
                  ["Ngoding", "Design", "Game", "Musik"],
                </p>
                <p className="text-black dark:text-white">&#125;</p>
              </div>
            </div>

            {/* Status Card */}
            <div className="bg-gray-200/30 dark:bg-[#0f0f13]/30 font-mono px-6 py-5 rounded-xl shadow-xl text-sm w-full lg:w-fit border dark:border-green-800/30 backdrop-blur-sm hover:scale-[1.02] transition">
              <p className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-green-800 dark:bg-green-200 rounded-full animate-pulse"></span>
                <span className="text-gray-800 dark:text-gray-400">
                  status:
                </span>
              </p>
              <p className="mt-1 text-sm dark:text-white">
                The best revenge is to make yourself better
              </p>
            </div>
            
          </div>
        </div>
        {/* Contact Section */}
        <section
          className={`mt-32 ${
            showContact
              ? "opacity-100 scale-1"
              : "scale-0 opacity-0 pointer-events-none"
          }`}
          id="header"
          ref={headerRef}
          style={{
            position: "fixed",
            top: `${position.top}px`,
            left: `${position.left}px`,
            cursor: "grab",
            zIndex: "50",
          }}
        >
          {showContact && (
            <section
              style={{
                position: "fixed",
                top: `${position.top}px`,
                left: `${position.left}px`,
                cursor: "grab",
                zIndex: 9999,
              }}
              className="opacity-100  border border-gray-700 rounded-2xl backdrop-blur bg-white/30 dark:bg-black/30 dark:text-white transition-transform duration-300 ease-in-out pointer-events-auto"
            >
              <div className="prevent-select rounded-2xl shadow-xl max-h-[90vh] overflow-auto w-[90vw] md:w-[600px]">
                {/* Header Bar */}
                <div
                  id="header"
                  ref={headerRef}
                  className="flex items-center backdrop-blur rounded-t-2xl p-3"
                >
                  <div className="flex justify-between w-full px-2 space-x-2">
                    <p>Contact Me</p>
                    <button
                      onClick={() => {
                        if (audioCloseRef.current) {
                          audioCloseRef.current.currentTime = 0;
                          audioCloseRef.current.play().catch((e) => {
                            console.warn("Gagal play sound close:", e);
                          });
                        }
                        setShowContact(false);
                      }}
                      className="w-5 h-5 bg-red-400 hover:bg-red-500 rounded-full"
                    ></button>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="px-6 pt-5">
                  <h2 className="text-2xl font-bold" draggable="false">
                    Let’s <span className="font-bold">Connect</span> 🤝
                  </h2>
                  <p className="text-gray-600 mt-2 dark:text-gray-200/80">
                    Whether you're a fellow dev, a curious learner, or just want
                    to say hi — I’d love to hear from you!
                  </p>
                </div>

                {/* Contact Links */}
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
        </section>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex justify-center w-full mt-10"
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>
      <audio ref={audioOpenRef} src="/open.mp3" preload="auto" />

      <audio ref={audioCloseRef} src="/close.mp3" preload="auto" />
    </>
  );
}
// Reusable Contact Link
const ContactLink = ({ icon, label, url }) => (
  <a
    href={url}
    className="max-w-100 flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {ICONS[icon] || <span className="w-5 h-5" />} {/* Fallback */}
    <span>{label}</span>
  </a>
);

export default Header;
