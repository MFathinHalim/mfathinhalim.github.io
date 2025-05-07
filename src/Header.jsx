import gsap from "gsap";
import { useState, useEffect, useRef } from "react";
import Photography from "./Photography";
import Navbar from "./Navbar";

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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    // Pindahkan image ke posisi mouse dengan gsap
    gsap.to(imageRef.current, {
      x: clientX + 20,
      y: clientY + 20,
      duration: 0.3,
      ease: "power2.out",
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
      <section
        className="px-5 h-[100dvh] flex flex-col gap-2 justify-center items-center  w-screen relative overflow-hidden"
        style={{
          borderBottom: "1px solid rgba(59,59,59,0.2)",
        }}
      >
        <Navbar />
        <h1
          ref={nameRef}
          className="text-2xl font-bold md:text-7xl relative z-10 cursor-pointer"
        >
          Hello, I'm{" "}
          <span
            className="font-bold"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            M.Fathin Halim
          </span>
        </h1>
        <h2 className="text-white/70 font-semibold md:text-3xl">
          A person behind some silly idea
        </h2>
        {/* IMAGE FOLLOW MOUSE */}
        <img
          ref={imageRef}
          src="https://ik.imagekit.io/9hpbqscxd/SG/image-100.jpg?updatedAt=1705798245623" // ganti dengan image yang kamu mau
          alt="Follow"
          className="w-[200px] h-[250px] object-cover rounded-full"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            pointerEvents: "none",
            opacity: 0,
            scale: 0.8,
          }}
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
    </div>
  );
}

export default Header;
