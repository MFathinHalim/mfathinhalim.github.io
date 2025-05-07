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
    gsap.to(imageRef.current, { opacity: 1, scale: 1, duration: 0.3 });
    window.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, { opacity: 0, scale: 0.8, duration: 0.3 });
    window.removeEventListener("mousemove", handleMouseMove);
  };

  return (
    <div>
      <section className="px-5 h-[100dvh] max-h-screen flex flex-col gap-4 justify-center items-center w-screen relative overflow-hidden bg-[url('https://i.pinimg.com/originals/63/ca/65/63ca65a0fcf1dd9edcb8f060372abda9.gif')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/70">
        <Navbar />
        <h1
          ref={nameRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-2xl cursor-none font-extrabold md:text-7xl relative z-10 cursor-pointer"
        ></h1>
        <h2 className="text-white/50 font-bold md:text-3xl z-10">
          Make <span className="bg-white/70 text-black px-5 rounded-full">Things</span>, Usually They Work
        </h2>
        {/* IMAGE FOLLOW MOUSE */}
        <img
          ref={imageRef}
          src="https://ik.imagekit.io/9hpbqscxd/SG/image-110.jpg?updatedAt=1705798245623"
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

        <div className="flex flex-col justify-center items-center w-screen px-3 pt-5 space-y-4 sm:flex-row  sm:space-y-0">
          <a
            data-social=" @mfathinhalim"
            onMouseEnter={() => onHover("Youtube")}
            onMouseLeave={onLeave}
            href="https://www.youtube.com/channel/UCP3UJwwVcg4UvaVve2pxbAw"
            className="social group backdrop-blur-lg transition ease-in-out delay-150 duration-300 inline-flex justify-center items-center py-4 px-6 md:text-xl sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-red-600"
          >
            <i
              className={`fa-brands fa-youtube ${
                hover === "Youtube" || isMobile ? "pr-1" : ""
              }`}
              aria-hidden="true"
            />{" "}
            {hover === "Youtube" || isMobile ? "@mfathinhalim" : ""}
          </a>

          <a
            onMouseEnter={() => onHover("Facebook")}
            onMouseLeave={onLeave}
            data-social=" FathinHalim"
            href="https://www.facebook.com/profile.php?id=100085410154411"
            className="social ease-in-out backdrop-blur-lg transition ease-in-out delay-150 duration-300 inline-flex justify-center items-center py-4 px-6 md:text-xl sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-blue-600"
          >
            <i
              className={`fa-brands fa-facebook ${
                hover === "Facebook" || isMobile ? "pr-1" : ""
              }`}
              aria-hidden="true"
            />{" "}
            {hover === "Facebook" || isMobile ? "@mfathinhalim" : ""}
          </a>

          <a
            onMouseEnter={() => onHover("twitter")}
            onMouseLeave={onLeave}
            data-social=" @mfathinhalim"
            href="https://twitter.com/mfathinhalim"
            className="social ease-in-out backdrop-blur-lg transition ease-in-out delay-150 duration-300 inline-flex justify-center items-center py-4 px-6 md:text-xl sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-gray-800"
          >
            <i
              className={`fa-brands fa-twitter ${
                hover === "twitter" || isMobile ? "pr-1" : ""
              }`}
              aria-hidden="true"
            />{" "}
            {hover === "twitter" || isMobile ? "@mfathinhalim" : ""}
          </a>

          <a
            onMouseEnter={() => onHover("ig")}
            onMouseLeave={onLeave}
            data-social=" @mfathin_halim"
            href="https://www.instagram.com/mfathin_halim/"
            className="social ease-in-out backdrop-blur-lg transition ease-in-out delay-150 duration-300 inline-flex justify-center items-center py-4 px-6 md:text-xl sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-orange-600"
          >
            <i
              className={`fa-brands fa-instagram ${
                hover === "ig" || isMobile ? "pr-1" : ""
              }`}
              aria-hidden="true"
            />{" "}
            {hover === "ig" || isMobile ? "@mfathin_halim" : ""}
          </a>

          <a
            onMouseEnter={() => onHover("threads")}
            onMouseLeave={onLeave}
            data-social=" @mfathin_halim"
            href="https://www.threads.net/@mfathin_halim"
            className="social ease-in-out backdrop-blur-lg transition ease-in-out delay-150 duration-300 inline-flex justify-center items-center py-4 px-6 md:text-xl sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-gray-800"
          >
            <i
              className={`fa-brands fa-threads ${
                hover === "threads" || isMobile ? "pr-1" : ""
              }`}
              aria-hidden="true"
            />{" "}
            {hover === "threads" || isMobile ? "@mfathin_halim" : ""}
          </a>
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
