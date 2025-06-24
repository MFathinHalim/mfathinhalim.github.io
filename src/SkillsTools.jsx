import { useState, useRef } from "react";

const tools = [
  {
    name: "Figma",
    icon: "https://cdn.prod.website-files.com/5f15081919fdf673994ab5fd/63feaf1bf551685b4ac7dd7b_Fima%20Logo.svg",
    skills: [
      "user interface design",
      "user experience design",
      "design systems",
      "figma prototyping",
    ],
  },
  {
    name: "Photoshop",
    icon: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg",
    skills: ["photo editing", "graphic design"],
  },
  {
    name: "React",
    icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    skills: [
      "frontend",
      "web development",
      "react hooks",
      "form validation",
      "dark mode ui",
    ],
  },
  {
    name: "Next.js",
    icon: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
    skills: [
      "web development",
      "next.js routing",
      "performance optimization",
      "api consumption",
    ],
  },
  {
    name: "Python",
    icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    skills: ["backend", "python scripting", "automation", "debugging"],
  },
  {
    name: "JavaScript",
    icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    skills: ["frontend", "backend", "javascript", "web development"],
  },
  {
    name: "TypeScript",
    icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    skills: ["frontend", "backend", "typescript"],
  },
  {
    name: "Android Studio",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/1200px-Android_Studio_icon_%282023%29.svg.png",
    skills: ["mobile development", "android development", "app debugging"],
  },
  {
    name: "Visual Studio Code",
    icon: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
    skills: ["development", "code editing", "extensions", "visual studio code"],
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg",
    skills: ["frontend", "bootstrap framework", "responsive design"],
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    skills: [
      "frontend",
      "tailwind css",
      "utility-first css",
      "responsive design",
    ],
  },
  {
    name: "Unity",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEpvhQOuCkjQFYaax3e8BMa9yk4Y6xt_HUQ&s",
    skills: ["c# scripting", "game scripting"],
  },
  {
    name: "C#",
    icon: "https://cdn.worldvectorlogo.com/logos/c--4.svg",
    skills: ["game scripting", "c# scripting", "backend"],
  },
  {
    name: "MongoDB",
    icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    skills: ["backend", "database integration"],
  },
  {
    name: "Git",
    icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    skills: ["version control", "debugging"],
  },
  {
    name: "Postman",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp",
    skills: ["api testing", "api consumption", "debugging"],
  },
];

const allSkills = [
  "user experience design",
  "user interface design",
  "design systems",
  "prototyping",
  "photo editing",
  "graphic design",
  "frontend",
  "web development",
  "backend",
  "mobile development",
  "development",
  "code editing",
  "extensions",
  "game scripting",
  "responsive design",
  "typescript",
  "javascript",
  "python scripting",
  "c# scripting",
  "tailwind css",
  "bootstrap framework",
  "react hooks",
  "next.js routing",
  "form validation",
  "dark mode ui",
  "performance optimization",
  "debugging",
  "database integration",
  "figma prototyping",
  "visual studio code",
  "android development",
  "api consumption",
];
const highlightColors = [
  "bg-yellow-300 text-black",
  "bg-green-300 text-black",
  "bg-blue-300 text-black",
  "bg-pink-300 text-black",
  "bg-purple-300 text-black",
  "bg-orange-300 text-black",
  "bg-teal-300 text-black",
];

export default function SkillsTools() {
  const [hoveredSkills, setHoveredSkills] = useState([]);
  const shineSoundRef = useRef(null);

  return (
    <div className="md:pr-8 py-20 md:py-32 bg-gray-50 dark:bg-stone-900 dark:text-stone-200">
      <div className="grid md:grid-cols-2 gap-8 px-4 md:pl-20 md:pr-10">
        {/* Tool Icons */}
        <div data-aos="fade-down" className="grid grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <div
              key={i}
              onMouseEnter={() => {
                setHoveredSkills(tool.skills);
                if (shineSoundRef.current) {
                  shineSoundRef.current.currentTime = 0;
                  shineSoundRef.current
                    .play()
                    .catch((e) => console.warn("Gagal play sound:", e));
                }
              }}
              onMouseLeave={() => setHoveredSkills([])}
              className="group w-20 h-20 bg-white dark:bg-stone-900 dark:border-gray-200/20 border border-gray-200 rounded-full flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
              title={tool.name}
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-10 h-10 transition-transform group-hover:scale-[150%]"
              />
            </div>
          ))}
        </div>
        <div data-aos="fade-right" data-aos-delay="400">
          <h2 className="text-6xl font-extrabold mb-3 pl-2">Skills & Tools</h2>
          <h2 className="text-xl font-bold mb-3 pl-2">
            My friends that helped me
          </h2>

          {/* Skill Badges */}
          <div className="flex flex-wrap justify-between gap-2">
            {allSkills.map((skill, i) => {
              const isHovered = hoveredSkills.includes(skill);
              const colorClass = highlightColors[i % highlightColors.length];
              return (
                <span
                  key={i}
                  className={`text-sm py-1 px-2 rounded-lg transition-all duration-300 font-semibold whitespace-nowrap ${
                    isHovered
                      ? `${colorClass}`
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <audio ref={shineSoundRef} src="/shine.mp3" preload="auto" />
    </div>
  );
}
