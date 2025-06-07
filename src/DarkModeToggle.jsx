import { useEffect, useRef } from "react";
import { useTheme } from "./contect/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const audioOpenRef = useRef(null);
  const audioCloseRef = useRef(null);

  useEffect(() => {
    // optional, bisa buat testing sound awal
    if (audioOpenRef.current && isDarkMode) {
      audioOpenRef.current.currentTime = 0;
      audioOpenRef.current.play().catch((e) => {
        console.warn("Gagal play sound open:", e);
      });
    }
  }, []);

  const handleToggle = () => {
    if (isDarkMode) {
      if (audioCloseRef.current) {
        audioCloseRef.current.currentTime = 0;
        audioCloseRef.current.play().catch((e) => {
          console.warn("Gagal play sound close:", e);
        });
      }
    } else {
      if (audioOpenRef.current) {
        audioOpenRef.current.currentTime = 0;
        audioOpenRef.current.play().catch((e) => {
          console.warn("Gagal play sound open:", e);
        });
      }
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex justify-between">
      <button
        onClick={handleToggle}
        className="pb-5 rounded-lg border-0 flex items-center gap-2 hover:text-yellow-600 dark:hover:text-yellow-300 transition-colors duration-300"
      >
        {isDarkMode ? <Moon /> : <Sun />}{" "}
      </button>

      {/* Jangan pakai /public di path, cukup dari root */}
      <audio ref={audioOpenRef} src="/open.mp3" preload="auto" />
      <audio ref={audioCloseRef} src="/close.mp3" preload="auto" />
      <span className="font-extrabold ">
        {new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    </div>
  );
}
