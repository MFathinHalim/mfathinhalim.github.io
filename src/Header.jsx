import { useState, useEffect } from "react";

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section
        id="bg-img"
        className="pb-0 bg-no-repeat bg-gray-600 bg-blend-multiply bg-cover bg-attachment-fixed"
        style={{
          borderBottom: "1px solid rgba(59,59,59,0.2)",
        }}
      >
        <div className="px-0 md:px-4 mx-auto max-w-screen-xl max-h-screen-xl py-0 md:py-24">
          <div
            data-aos="fade-top"
            data-aos-easing="linear"
            data-aos-duration={3100}
            id="card"
            className="p-12 pt-3 pl-3 pr-3 border rounded-lg shadow border-gray-700"
            style={{ backgroundColor: "rgba(28, 29, 29, 0.288)",     backdropFilter: "blur(5px)", // This applies the blur effect to the background

            }}
          >
            <div className="flex flex-col space-y-4 sm:space-y-0 mb-5">
              <p
                className="border rounded-full border-slate-600 px-3 py-1"
                style={{ width: "fit-content" }}
              >
                🇵🇸 Indie Dev | btw i use Arch
              </p>
              <h2 className="text-1xl px-3 py-1 text-center">
                <span>
                  System: <strong className="text-green-300">Success</strong>
                </span>
              </h2>
            </div>
            <div className="text-center">
              <img
                loading="lazy"
                draggable="false"
                data-aos="fade-down"
                className="mb-4 mx-auto object-center rounded-full border-4 border-transparent border-x-blue-500 border-y-gray-700"
                style={{ height: 150, width: 150, objectFit: "cover" }}
                alt="Fathin"
                src="./aa.jpg"
              />
              <h1
                id="Name"
                data-value="MFATHINHALIM"
                className="p-3 mb-4 text-4xl md:text-7xl text-center rounded hover:bg-gray-200 hover:text-black font-extrabold tracking-tight leading-none text-white w-auto mx-auto"
                style={{
                  position: "relative",
                  width: "fit-content",
                  height: "fit-content",
                  overflow: "hidden",
                  transition: "background-color 0.3s ease",
                }}
              >
                M. Fathin Halim
              </h1>
              <p
                data-aos="fade-right"
                className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 text-left md:text-center"
              >
                Embark on a journey with <strong>M.Fathin Halim</strong>, an
                indie middle school <strong>Programmer</strong>, a Boundless
                enthusiasm for learning and fueled by <strong>Dreams</strong>
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 mb-8">
                <div className="mr-4 flex items-center">
                  <i
                    className="fas fa-code mr-2"
                    style={{ color: "#25b3ef" }}
                  />
                  <p>Indie Dev</p>
                </div>
                <div className="mr-4 flex items-center">
                  <i className="fab fa-linux mr-2" style={{ color: "gold" }} />
                  <p>Linux Enthusiast</p>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-heart mr-2" style={{ color: "red" }} />
                  <p>Japanese Lover</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a
                  href="https://saweria.co/mfathinhalim"
                  className="transition ease-in-out delay-150 hover:-translate-y-1 md-hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 text-base sm:ms-4 font-medium text-center text-white rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-gray-800"
                >
                  <i className="fa fa-coffee mr-2" aria-hidden="true" /> Buy me
                  a Coffee
                </a>
                <a
                  href="https://discordapp.com/users/1156486226094870569"
                  className="transition ease-in-out delay-150 hover:-translate-y-1 md-hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 text-base sm:ms-4 font-medium text-center text-white rounded-full bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900"
                >
                  Chat me
                  <i className="fa-brands fa-discord ml-2" aria-hidden="true" />
                </a>
              </div>
              <hr className="w-48 h-1 mx-auto my-4 bg-gray-500 border-0 rounded md:my-10" />
              <div className="flex flex-col space-y-4 mt-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a
                  data-social=" @mfathinhalim"
                  onMouseEnter={() => onHover("Youtube")}
                  onMouseLeave={onLeave}
                  href="https://www.youtube.com/channel/UCP3UJwwVcg4UvaVve2pxbAw"
                  className="social group backdrop-blur-lg transition ease-in-out delay-150 hover:-translate-y-1 md-hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 text-base sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-red-600"
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
                  className="social ease-in-out backdrop-blur-lg transition ease-in-out delay-150 hover:-translate-y-1 md-hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 text-base sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-blue-600"
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
                  className="social ease-in-out backdrop-blur-lg transition ease-in-out delay-150 hover:-translate-y-1 md-hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 text-base sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-gray-800"
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
                  href="https://www.instagram.com/mfathin.halim/"
                  className="social ease-in-out backdrop-blur-lg transition ease-in-out delay-150 hover:-translate-y-1 md-hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 text-base sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-orange-600"
                >
                  <i
                    className={`fa-brands fa-instagram ${
                      hover === "ig" || isMobile ? "pr-1" : ""
                    }`}
                    aria-hidden="true"
                  />{" "}
                  {hover === "ig" || isMobile ? "@mfathin.halim" : ""}
                </a>
                <a
                  onMouseEnter={() => onHover("threads")}
                  onMouseLeave={onLeave}
                  data-social=" @mfathin_halim"
                  href="https://www.threads.net/@mfathin.halim"
                  className="social ease-in-out backdrop-blur-lg transition ease-in-out delay-150 hover:-translate-y-1 md-hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 text-base sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-gray-800"
                >
                  <i
                    className={`fa-brands fa-threads ${
                      hover === "threads" || isMobile ? "pr-1" : ""
                    }`}
                    aria-hidden="true"
                  />{" "}
                  {hover === "threads" || isMobile ? "@mfathin.halim" : ""}
                </a>
              </div>
            </div>
          </div>
          <div className="text-center max-w-screen-xl pt-7 pb-0">
            <a href="#who"><i className="text-center fa-solid fa-arrow-down text-3xl bounce"></i></a>
          </div>
        </div>
      </section>
    </>
  );
}
/*
  * <div
  !  id="car"
  ?  className="car-movement hide-on-mobile"
  *  style={{ zIndex: "-1000 !important" }}>
  !  <div className="car">
  ?   <img
  *      loading="lazy"
  !      draggable="false"
  ?      alt="anime"
  *      style={{ width: 150, height: 150 }}
  !      src="./ngoding.webp"
  ?    />
  *  </div>
  ! </div>*/
export default Header;
