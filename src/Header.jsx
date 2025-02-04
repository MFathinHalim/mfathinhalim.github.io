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
      className="p-5 md:p-0 md:flex md:justify-center md:items-center min-h-screen"
        style={{
          borderBottom: "1px solid rgba(59,59,59,0.2)",
        }}
      >
        <div className="px-0 max-w-screen-xl max-h-screen-xl py-0">
          <div
            className="md:px-4 md:py-6 md:border rounded-2xl shadow border-gray-700"
            data-aos="fade-top"
            data-aos-easing="linear"
            data-aos-duration={3100}
          >
            <div className="flex flex-col space-y-4 sm:space-y-0 mb-5 hidden md:block ">
              <div className="flex space-x-2 justify-between">
                <div className="flex space-x-2 px-2 py-1">
                  <div
                    className="bg-red-400"
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      cursor: "pointer"
                    }}
                  ></div>
                  <div
                    className="bg-yellow-400"
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      cursor: "pointer"
                    }}
                  ></div>
                  <div
                    className="bg-green-500"
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      cursor: "pointer"
                    }}
                  ></div>
                </div>
                <p
                  className="px-2 py-1"
                  style={{ width: "fit-content" }}
                >
                  🍉Free Palestine | Indie Dev
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col-reverse text-center md:text-left md:flex-row md:px-7 md:gap-20">
                <div className="flex-1">
                <p
                  data-aos="fade-right"
                  className="font-normal text-red-400 lg:text-3xl"
                >
                  Free Palestine
                </p>
                <h1
                  id="Name"
                  data-value="MFATHINHALIM"
                  className="mb-2 text-4xl md:text-5xl lg:text-8xl rounded mx-auto w-auto md:mx-0 hover:bg-gray-200 hover:text-black font-normal leading-none text-white"
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
                  className="mb-8 font-normal text-green-400 lg:text-3xl"
                >
                  An Indie Highschool Developer
                </p>
              </div>
              <img
                loading="lazy"
                draggable="false"
                data-aos="fade-down"
                className="mb-4 mx-auto object-center rounded-full object-center border-4 border-transparent"
                style={{ height: 150, width: 150, objectFit: "cover" }}
                alt="Fathin"
                src="https://i.pinimg.com/736x/4c/1d/56/4c1d568638959fc8bf661bcfd5d92ca8.jpg"
              />
              </div>
              
             
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 mb-8">
                <div className="mr-4 flex items-center">
                  <i
                    className="fas fa-code mr-2"
                    style={{ color: "gold" }}
                  />
                  <p>Indie Dev</p>
                </div>
                <div className="mr-4 flex items-center">
                  <i className="fab fa-linux mr-2" style={{ color: "#25b3ef" }} />
                  <p>I use Arch btw</p>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-heart mr-2" style={{ color: "red" }} />
                  <p>Japanese Lover</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a
                  href="https://saweria.co/mfathinhalim"
                  className="transition ease-in-out delay-150 hover:-translate-y-1 rounded-md md-hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 text-base sm:ms-4 font-medium text-center text-white border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-gray-800"
                >
                  <i className="fa fa-coffee mr-2" aria-hidden="true" /> Buy me
                  a Coffee
                </a>
                <a
                  href="https://discordapp.com/users/1156486226094870569"
                  className="transition ease-in-out delay-150 hover:-translate-y-1 rounded-md md-hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 text-base sm:ms-4 font-medium text-center text-white bg-indigo-500 hover:bg-indigo-300 focus:ring-4 ring-purple-300"
                >
                  Chat me
                  <i className="fa-brands fa-discord ml-2" aria-hidden="true" />
                </a>
              </div>
              <hr className="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10" />
              <div className="flex flex-col space-y-4 mt-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a
                  data-social=" @mfathinhalim"
                  onMouseEnter={() => onHover("Youtube")}
                  onMouseLeave={onLeave}
                  href="https://www.youtube.com/channel/UCP3UJwwVcg4UvaVve2pxbAw"
                  className="social group backdrop-blur-lg transition ease-in-out delay-150 hover:-translate-y-1 md-hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 text-base sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-red-600"
                >
                  <i
                    className={`fa-brands fa-youtube ${hover === "Youtube" || isMobile ? "pr-1" : ""
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
                    className={`fa-brands fa-facebook ${hover === "Facebook" || isMobile ? "pr-1" : ""
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
                    className={`fa-brands fa-twitter ${hover === "twitter" || isMobile ? "pr-1" : ""
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
                  className="social ease-in-out backdrop-blur-lg transition ease-in-out delay-150 hover:-translate-y-1 md-hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 text-base sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-orange-600"
                >
                  <i
                    className={`fa-brands fa-instagram ${hover === "ig" || isMobile ? "pr-1" : ""
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
                  className="social ease-in-out backdrop-blur-lg transition ease-in-out delay-150 hover:-translate-y-1 md-hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 text-base sm:ms-4 font-medium text-center rounded-full border border-gray-500 hover:bg-white focus:ring-4 focus:ring-gray-400 hover:text-gray-800"
                >
                  <i
                    className={`fa-brands fa-threads ${hover === "threads" || isMobile ? "pr-1" : ""
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
