import { useEffect } from "react";

export default function ScrollBubbleBar() {
  useEffect(() => {
    const bar = document.getElementById("scroll-bubble-bar");

    const updateBubbles = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight ? scrollTop / docHeight : 0;

      const totalBubbles = 20; // jumlah total bubble
      const visibleBubbles = Math.round(scrollPercent * totalBubbles);

      if (bar) {
        bar.innerHTML = ""; // hapus bubble lama

        for (let i = 0; i < totalBubbles; i++) {
          const bubble = document.createElement("div");

          bubble.className =
            "w-3 h-3 rounded-full transition-all duration-300 " +
            (i < visibleBubbles
              ? "bg-stone-800/20 dark:bg-stone-500/20 scale-100"
              : "bg-gray-300 dark:bg-stone-700 scale-50");

          bar.appendChild(bubble);
        }
      }
    };

    updateBubbles();
    window.addEventListener("scroll", updateBubbles);
    return () => window.removeEventListener("scroll", updateBubbles);
  }, []);

  return (
    <div
      id="scroll-bubble-bar"
      className="fixed bottom-8 opacity-40 left-0 w-full h-6 z-[9999] px-4 flex items-center justify-center gap-5 pointer-events-none"
    ></div>
  );
}
