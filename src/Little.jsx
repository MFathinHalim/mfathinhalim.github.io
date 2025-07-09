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
  Gamepad2,
  Bike,
  Coffee,
  BookOpen,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
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

function Little() {
  const headerRef = useRef(null);
  const audioOpenRef = useRef(null);
  const audioCloseRef = useRef(null);

  const [position, setPosition] = useState({ top: 30, left: 20 });
  const [showContact, setShowContact] = useState(false);
  const titles = ["About Me"];

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
      <section className="sm:p-10 py-10 px-5 md:px-32 xl:px-64 md:pb-20 dark:text-white">
        <div className="flex flex-col md:justify-between items-center md:flex-row-reverse gap-5 md:gap-10">
          <motion.img
            className="w-[300px] h-[500px] object-cover"
            src="https://ik.imagekit.io/9hpbqscxd/SG/image-111.jpg?updatedAt=1705798245623"
            animate={{ x: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          <div>
            <h1 data-aos="fade-right" className="text-2xl mb-2">
              a little more things
            </h1>
            <AnimatePresence mode="wait">
              <motion.h2
                key={titles[currentTitle]}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="text-8xl font-passion hidden md:block tracking-wide mb-6"
              >
                {titles[currentTitle]}
              </motion.h2>
            </AnimatePresence>

            <p
              data-aos="fade-down"
              data-aos-delay="400"
              className="max-w-xl text-gray-700 dark:text-gray-200/80 text-justify md:text-left text-lg mb-5"
            >
              I’ve spent my past 5 years experience building projects both
              independently and collaboratively. Outside of tech, I enjoy
              creative outlets like sketching and exploring storytelling — often
              finding inspiration in everyday moments and digital trends.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="max-w-xl text-gray-700 dark:text-gray-200/80 text-justify md:text-left text-lg"
            >
              In my free time, I enjoy drawing,{" "}
              <span className="inline-flex items-center gap-1">
                playing video games
                <Gamepad2 className="w-4 h-4 text-pink-500" />
              </span>
              ,{" "}
              <span className="inline-flex items-center gap-1">
                going on bike rides <Bike className="w-4 h-4 text-green-600" />
              </span>
              ,{" "}
              <span className="inline-flex items-center gap-1">
                reading books and novels{" "}
                <BookOpen className="w-4 h-4 text-sky-500" />
              </span>
              <br />I love learning new things and sharing knowledge with others
              on social media, especially Discord.
            </p>
            <p className="mt-10 font-bold">You can find me on</p>
            <div
              data-aos="fade-right"
              className="flex flex-row items-center justify-between md:justify-start gap-10 mt-5"
            >
              <a
                className="hover:text-blue-400 transition-all"
                href="https://facebook.com/MFathinHalim"
              >
                <FacebookIcon />
              </a>
              <a
                className="hover:text-orange-400 transition-all"
                href="https://instagram.com/mfathin_halim"
              >
                <InstagramIcon />
              </a>
              <a
                className="hover:text-blue-300 transition-all"
                href="https://twitter.com/mfathinhalim"
              >
                <TwitterIcon />
              </a>
              <a
                className="hover:text-blue-500 transition-all"
                href="https://www.linkedin.com/in/m-fathin-halim-8b8198288/"
              >
                <LinkedinIcon />
              </a>
              <a
                className="hover:text-red-400 transition-all"
                href="https://www.youtube.com/@mfathinhalim"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
      <audio ref={audioOpenRef} src="/open.mp3" preload="auto" />
      <audio ref={audioCloseRef} src="/close.mp3" preload="auto" />
    </>
  );
}

export default Little;
