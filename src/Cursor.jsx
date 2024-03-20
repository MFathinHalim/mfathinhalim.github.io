import { useState, useEffect } from "react";

function Cursor() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 639);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  window.onmousemove = function (e) {
    //cursor.style.left = e.clientX + "px";
    //cursor.style.top = e.clientY + "px";
    document.getElementById("cursor2").animate(
      {
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  };
  return (
    <>
      {!isMobile && (
        <span
          className="cursor"
          id="cursor2"
          style={{
            left: 953,
            top: 939,
            height: "300px",
            width: "300px",
          }}
        />
      )}
    </>
  );
}

export default Cursor;
