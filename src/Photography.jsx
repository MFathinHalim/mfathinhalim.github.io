import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Photography() {
  const Photographys = [
    "https://ik.imagekit.io/9hpbqscxd/SG/image-73.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-74.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-78.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-70.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-76.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-102.jpg?updatedAt=1705798245623",

    "https://ik.imagekit.io/9hpbqscxd/SG/image-96.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-97.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-77.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-75.jpg?updatedAt=1705798245623",
    "./f7-A-Fathin-pembuat-aplikasi-Kamus-Kata-Bahasa-Rejang.jpg",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-80.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-104.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-89.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-71.jpg?updatedAt=1705798245623",
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const scrollY = window.scrollY;
        const topOffset = containerRef.current.offsetTop;
        const visibleHeight = window.innerHeight;

        const scrollWithin = Math.max(0, scrollY - topOffset);
        const opacity = Math.min(
          1,
          scrollWithin / (containerHeight - visibleHeight / 2)
        );

        setScrollPosition(opacity);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="relativ px-2 pb-32 pt-20 bg-gray-100 dark:bg-stone-900 text-white"
        ref={containerRef}
      >
        <h1 className="px-2 text-4xl mb-7 font-extrabold text-center">
          Photography
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 auto-rows-[150px]">
          {Photographys.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden transition-all duration-300  group ${
                i % 5 === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              }`}
              data-aos={`zoom-in`}
            >
              <img
                src={photo}
                alt={`photo-${i}`}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Photography;
