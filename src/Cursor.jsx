import { useState, useEffect } from "react";

function Cursor() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handle screen resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const cursorEl = document.getElementById("cursor2");
    if (!cursorEl) return;

    const handleMouseMove = (e) => {
      cursorEl.animate(
        [
          {
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
          },
        ],
        { duration: 300, fill: "forwards" } // jangan 3000ms, nanti lambat banget
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  return (
    <>
      {!isMobile && (
        <span
          id="cursor2"
          className="pointer-events-none bg-yellow-400/20 opacity-30 dark:bg-stone-400/20 rounded-full blur-2xl"
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            height: "300px",
            width: "300px",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
        />
      )}
    </>
  );
}

export default Cursor;
