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
      <section className="min-h-screen sm:p-10 py-10 px-5 md:px-20 md:py-20 bg-gray-50 dark:bg-stone-900 dark:text-white flex flex-col justify-center">
        <DarkModeToggle />

        <div className="flex flex-col md:justify-between items-center md:flex-row-reverse gap-5 md:gap-10">
          <motion.img
            className="h-[170px] w-[170px] md:h-[175px] md:w-[350px] rounded-full object-cover"
            src="https://ik.imagekit.io/yjtsof0mw/Txtr/image-full_body-texter-5_14_2025.jpg"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          <div>
            <h1
              data-aos="zoom-in"
              data-aos-duration="700"
              className="text-2xl font-bold mb-2"
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
                className="text-6xl hidden md:block font-extrabold mb-4"
              >
                {titles[currentTitle]}
              </motion.h2>
            </AnimatePresence>

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
              className="opacity-100  border border-stone-700 rounded-2xl bg-white dark:bg-stone-800 dark:text-white transition-transform duration-300 ease-in-out pointer-events-auto"
            >
              <div className="prevent-select rounded-2xl shadow-xl max-h-[90vh] overflow-auto w-[90vw] md:w-[600px]">
                {/* Header Bar */}
                <div
                  id="header"
                  ref={headerRef}
                  className="flex items-center bg-black dark:bg-stone-900 rounded-t-2xl p-3"
                >
                  <div className="flex justify-between w-full px-2 space-x-2">
                    <p className="text-white">Contact Me</p>
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
          <ChevronDown className="w-6 h-6 text-stone-400" />
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
    className="max-w-100 flex items-center gap-3 px-4 py-3 rounded-lg border border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-600 transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {ICONS[icon] || <span className="w-5 h-5" />} {/* Fallback */}
    <span>{label}</span>
  </a>
);

export default Header;
