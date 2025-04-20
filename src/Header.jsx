import gsap from "gsap";
import { useState, useEffect, useRef } from "react";

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

  return (
    <>
      <section
        className="p-5 md:p-0 md:flex md:justify-center md:items-center min-h-screen md:h-[100vh] w-full"
        style={{
          borderBottom: "1px solid rgba(59,59,59,0.2)",
        }}
      >
        <div className="px-0 py-0 ">
          <div
            className="md:px-4 w-full md:py-6"
            data-aos="fade-top"
            data-aos-easing="linear"
            data-aos-duration={3100}
          >
            {" "}
            <div className="hidden xl:block absolute right-2 bottom-1 xl:bottom-[-10%] z-50">
              <a
                href="/learnjs/"
                className="flex items-center hover:text-black text-neutral-100 border-neutral-400 hover:bg-white backdrop-blur-md px-2 pr-3 py-2 shadow-lg border"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt="Avatar"
                  className="w-10 h-10 mr-4 object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">Learn JS</p>
                  <p className="text-xs opacity-60">Learn JS with Fathin</p>
                </div>
              </a>
            </div>
      
            <div>
              <div className="flex flex-col-reverse text-center md:text-left md:flex-row md:px-7 md:gap-20">
                <div className="flex-1">
                  <p
                    data-aos="fade-right"
                    className="font-normal gradient-text lg:text-4xl" // Diperbesar
                  >
                    Free Palestine
                  </p>
                  <h1
                    id="Name"
                    data-value="MFATHINHALIM"
                    ref={nameRef}
                    data-aos="fade-right"
                    className="mb-2 text-5xl md:text-6xl lg:text-8xl rounded mx-auto w-auto md:mx-0 hover:bg-gray-200 hover:text-black font-normal leading-none text-white" // Diperbesar
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
                    className="mb-8 font-normal text-yellow-300 lg:text-4xl" // Diperbesar
                  >
                    An Indie Highschool Developer
                  </p>
                </div>
                <img
                  loading="lazy"
                  draggable="false"
                  className="mb-4 mx-auto object-center md:grayscale hover:grayscale-0 transition-all duration-300 ease-in-out rounded-full object-center"
                  style={{
                    height: 200,
                    width: 200,
                    objectFit: "cover",
                    willChange: "filter",
                  }}
                  alt="Fathin"
                  src="https://ik.imagekit.io/9hpbqscxd/SG/image-100.jpg?updatedAt=1705798245623"
                />
              </div>
              <div className="flex flex-col space-y-4 sm:flex-row md:px-7 sm:space-y-0 mb-8">
                <div className="mr-4 flex items-center">
                  <i
                    className="fas fa-code mr-2"
                    style={{ color: "gold", fontSize: "1.5rem" }} // Diperbesar
                  />
                  <p className="text-xl">Indie Dev</p> {/* Diperbesar */}
                </div>
                <div className="mr-4 flex items-center">
                  <i
                    className="fab fa-linux mr-2"
                    style={{ color: "#25b3ef", fontSize: "1.5rem" }} // Diperbesar
                  />
                  <p className="text-xl">I use Arch btw</p> {/* Diperbesar */}
                </div>
                <div className="flex items-center">
                  <i
                    className="fas fa-heart mr-2"
                    style={{ color: "red", fontSize: "1.5rem" }} // Diperbesar
                  />
                  <p className="text-xl">Japanese Lover</p> {/* Diperbesar */}
                </div>
              </div>
              <div className="flex flex-col space-y-4 sm:flex-row md:px-3 sm:space-y-0">
                <a
                  href="https://saweria.co/mfathinhalim"
                  className="transition ease-in-out delay-150 hover:-translate-y-1 rounded-md md-hover:scale-110 duration-300 inline-flex justify-center items-center py-4 px-6 text-xl sm:ms-4 font-medium text-center text-white border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-gray-800" // Diperbesar
                >
                  <i className="fa fa-coffee mr-2" aria-hidden="true" /> Buy me
                  a Coffee
                </a>
                <a
                  href="https://discordapp.com/users/1156486226094870569"
                  className="transition ease-in-out delay-150 hover:-translate-y-1 rounded-md md-hover:scale-110 duration-300 inline-flex justify-center items-center py-4 px-6 text-xl sm:ms-4 font-medium text-center text-white bg-indigo-500 hover:bg-indigo-300 focus:ring-4 ring-purple-300"
                >
                  Chat me
                  <i className="fa-brands fa-discord ml-2" aria-hidden="true" />
                </a>
              </div>
              <div class="inline-flex items-center pt-6 justify-center w-full">
                <hr class="w-[90vw] h-px my-8 bg-gray-200 border-0" />
                <span class="absolute px-3 rounded-full font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2">
                  Social Media
                </span>
              </div>{" "}
              <div className="mb-2 z-50">
              <a
                href="https://x.com/mfathinhalim/status/1913810154270953976"
                className="flex items-center hover:bg-black-900 text-neutral-100 bg-black-800 border-stone-600 backdrop-blur-md p-3 pr-10 shadow-lg"
              >
                <div>
                  <p className="text-sm opacity-60">M.Fathin Halim on Twitter</p>
                  <p className="font-semibold">“I'll fix it later” is the biggest lie from programmer</p>
                </div>
              </a>
            </div>
              <div className="flex flex-col space-y-4 mt-4 sm:flex-row  sm:space-y-0">
                <a
                  data-social=" @mfathinhalim"
                  onMouseEnter={() => onHover("Youtube")}
                  onMouseLeave={onLeave}
                  href="https://www.youtube.com/channel/UCP3UJwwVcg4UvaVve2pxbAw"
                  className="social group backdrop-blur-lg transition ease-in-out delay-150 hover:-translate-y-1 md-hover:scale-110 duration-300 inline-flex justify-center items-center py-4 px-6 text-xl sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-red-600"
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
                  className="social ease-in-out backdrop-blur-lg transition ease-in-out delay-150 hover:-translate-y-1 md-hover:scale-110 duration-300 inline-flex justify-center items-center py-4 px-6 text-xl sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-blue-600"
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
                  className="social ease-in-out backdrop-blur-lg transition ease-in-out delay-150 hover:-translate-y-1 md-hover:scale-110 duration-300 inline-flex justify-center items-center py-4 px-6 text-xl sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-gray-800"
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
                  className="social ease-in-out backdrop-blur-lg transition ease-in-out delay-150 hover:-translate-y-1 md-hover:scale-110 duration-300 inline-flex justify-center items-center py-4 px-6 text-xl sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-orange-600"
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
                  className="social ease-in-out backdrop-blur-lg transition ease-in-out delay-150 hover:-translate-y-1 md-hover:scale-110 duration-300 inline-flex justify-center items-center py-4 px-6 text-xl sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-gray-800"
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

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
