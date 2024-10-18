import { useState, useEffect, useRef } from "react";

function Cursor() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 639);
  const cursorRef = useRef(null); // Using useRef to store the cursor element

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.animate(
          {
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove); // Add mousemove listener

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove); // Cleanup
    };
  }, []);

  return (
    <>
      {!isMobile && (
        <span
          className="cursor"
          id="cursor2"
          ref={cursorRef} // Attach the ref here
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
