import gsap from "gsap";
import { useState, useEffect, useRef } from "react";
import Photography from "./Photography";
import Navbar from "./Navbar";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

function Header() {
  const [hover, setHover] = useState("");
  const onHover = (req) => {
    setTimeout(() => {
      setHover(req);
    }, 5); // 1000 milidetik = 1 detik
  };

  const onLeave = () => {
    setHover("");
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 639);
  const nameRef = useRef(null);
  useEffect(() => {
    const texts = ["Hello! I'm", "Halo! Saya", "M."];

    // Langsung set teks pertama saat komponen load
    gsap.set(nameRef.current, {
      text: `${texts[0]} Fathin Halim`,
    });

    let tl = gsap.timeline({ repeat: -1 });

    // animasi semua, mulai dari teks kedua
    texts
      .slice(1)
      .concat(texts[0])
      .forEach((txt) => {
        tl.to(nameRef.current, {
          duration: 3,
          text: `${txt} Fathin Halim`, // Menangani kasus kosong
          ease: "power2.inOut",
          delay: 3,
        });
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    gsap.set(imageRef.current, {
      x: clientX - imageRef.current.offsetWidth / 2, // supaya gambar di tengah mouse
      y: clientY - imageRef.current.offsetHeight / 2, // supaya gambar di tengah mouse
    });
  };

  const handleMouseEnter = () => {
    gsap.to(imageRef.current, { opacity: 0.9, scale: 1, duration: 0.3 });
    window.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, { opacity: 0, scale: 0.8, duration: 0.3 });
    window.removeEventListener("mousemove", handleMouseMove);
  };
  const socials = [
    {
      name: "Youtube",
      icon: "fa-youtube",
      href: "https://www.youtube.com/channel/UCP3UJwwVcg4UvaVve2pxbAw",
      color: "text-red-600",
      username: "@mfathinhalim",
    },
    {
      name: "Facebook",
      icon: "fa-facebook",
      href: "https://www.facebook.com/profile.php?id=100085410154411",
      color: "text-blue-600",
      username: "FathinHalim",
    },
    {
      name: "twitter",
      icon: "fa-twitter",
      href: "https://twitter.com/mfathinhalim",
      color: "text-gray-800",
      username: "@mfathinhalim",
    },
    {
      name: "ig",
      icon: "fa-instagram",
      href: "https://www.instagram.com/mfathin_halim/",
      color: "text-orange-600",
      username: "@mfathin_halim",
    },
    {
      name: "threads",
      icon: "fa-threads",
      href: "https://www.threads.net/@mfathin_halim",
      color: "text-gray-800",
      username: "@mfathin_halim",
    },
  ];

  return (
    <div>
      <section className="px-2 h-[100dvh] max-h-screen flex flex-col gap-4 md:justify-center items-center text-center w-screen relative overflow-hidden bg-[url('https://i.pinimg.com/originals/63/ca/65/63ca65a0fcf1dd9edcb8f060372abda9.gif')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/70">
        <Navbar />
        <h1
          ref={nameRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-3xl cursor-none font-extrabold md:text-7xl relative z-10"
        ></h1>
        <h2 className="text-white/50 font-bold md:text-3xl z-10">
          Make{" "}
          <span className="font-bold bg-white/70 text-black px-3 rounded-full">
            Things
          </span>
          , Usually They Work
        </h2>
        {/* IMAGE FOLLOW MOUSE */}
        <img
          ref={imageRef}
          src="https://ik.imagekit.io/yjtsof0mw/Txtr/image-wujud_aseli_gua-texter-5_14_2025.jpg"
          alt="Follow"
          className="
          z-50
          cursor-none
            fixed
            top-0
            left-0
            w-[150px]
            h-[280px]
            object-cover
            rounded-full
            pointer-events-none
            opacity-0
            scale-y-125
          "
        />

        <div className="flex flex-col justify-center items-center w-screen px-3 pt-5 space-y-4 sm:flex-row sm:space-y-0">
          {socials.map((social, index) => (
            <a
              key={index}
              onMouseEnter={() => onHover(social.name)}
              onMouseLeave={onLeave}
              href={social.href}
              className={`social ease-in-out backdrop-blur-lg transition ease-in-out delay-150 duration-300 inline-flex justify-center items-center py-2 px-4 md:py-4 md:px-6 md:text-xl sm:mx-4 font-medium rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-black hover:${social.color}`}
            >
              <i
                className={`fa-brands ${social.icon} ${
                  hover === social.name || isMobile ? "pr-1" : ""
                }`}
                aria-hidden="true"
              />
              {hover === social.name || isMobile ? social.username : ""}
            </a>
          ))}
        </div>
      </section>
      <a
        href="https://in.pinterest.com/pin/297800594114406829/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-2 right-2 text-xs text-gray-400 hover:text-gray-200 opacity-50 hover:opacity-100 transition"
      >
        Source Background
      </a>
    </div>
  );
}

export default Header;
