import { useEffect, useRef, useState } from "react";
import { useTheme } from "./contect/ThemeProvider";
import { Moon, Sun, Pause, Play } from "lucide-react";

export default function DarkModeToggle() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioOpenRef = useRef(null);
  const audioCloseRef = useRef(null);
  const audioBgRef = useRef(null);

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
      <div className="flex gap-5">
        <button
          className="pb-5 rounded-lg border-0 flex items-center gap-2 hover:text-green-600 dark:hover:text-green-300 transition-colors duration-300"
          onClick={() => {
            if (!audioBgRef.current) return;
            audioBgRef.current.volume = 0.5;

            if (isPlaying) {
              audioBgRef.current.pause();
            } else {
              audioBgRef.current.currentTime = 0;
              audioBgRef.current.play().catch((e) => {
                console.warn("Gagal play sound:", e);
              });
            }

            setIsPlaying((prev) => !prev);
          }}
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <button
          onClick={handleToggle}
          className="pb-5 rounded-lg border-0 flex items-center gap-2 hover:text-yellow-600 dark:hover:text-yellow-300 transition-colors duration-300"
        >
          {isDarkMode ? <Moon /> : <Sun />}{" "}
        </button>
      </div>

      {/* Jangan pakai /public di path, cukup dari root */}
      <audio ref={audioOpenRef} src="/open.mp3" preload="auto" />
      <audio ref={audioCloseRef} src="/close.mp3" preload="auto" />
      <audio ref={audioBgRef} src="/bg.mp3" preload="auto" loop />

      <span className="font-extrabold ">
        {new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    </div>
  );
}
