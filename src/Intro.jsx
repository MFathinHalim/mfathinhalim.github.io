import { Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Portofolio from "./Portofolio";

const ICONS = {
  linkedin: <Linkedin className="w-5 h-5" />,
  discord: <MessageCircle className="w-5 h-5" />,
  whatsapp: <Phone className="w-5 h-5" />,
  envelope: <Mail className="w-5 h-5" />,
};

function Intro() {
  const [position, setPosition] = useState({ top: 30, left: 20 });
  const [showContact, setShowContact] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      const elfsightBadge = document.querySelector(
        'a[href*="elfsight.com/instagram-feed-instashow"]'
      );
      if (elfsightBadge) {
        elfsightBadge.style.display = "none";
        clearInterval(interval); // stop setelah ketemu dan disembunyikan
      }
    }, 500); // cek tiap 0.5 detik (karena Elfsight munculnya dinamis)

    return () => clearInterval(interval); // bersihkan kalau komponen unmount
  }, []);

  useEffect(() => {
    const elmnt = headerRef.current;
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    const dragMouseDown = (e) => {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    };

    const elementDrag = (e) => {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      setPosition((prev) => ({
        top: prev.top - pos2,
        left: prev.left - pos1,
      }));
    };

    const closeDragElement = () => {
      document.onmouseup = null;
      document.onmousemove = null;
    };

    if (elmnt) {
      elmnt.onmousedown = dragMouseDown;
    }

    return () => {
      if (elmnt) {
        elmnt.onmousedown = null;
      }
      document.onmouseup = null;
      document.onmousemove = null;
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("contactPosition", JSON.stringify(position));
  }, [position]);
  return (
    <div className="text-white font-sans mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center gap-12 pb-20 pt-7">
        <div
          id="contact"
          className="w-full lg:w-7/12 space-y-6"
          data-aos="fade-right"
        >
          <h1 className="text-4xl leading-tight font-bold">
            Hey, Nice to meet you
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed text-justify">
            A passionate programming student who loves{" "}
            <span className="font-semibold text-yellow-300">Programming</span>.
            I enjoy building educational and creative platforms that bring
            impact.
          </p>
          <a
            href="/journey/"
            className="inline-block mt-6 px-6 py-3 bg-yellow-300 text-black font-semibold rounded-xl hover:bg-yellow-400 transition"
          >
            See My Journey
          </a>
          <button
            onClick={() => setShowContact((prev) => !prev)}
            className="inline-block ml-2 mt-6 px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition"
          >
            Contact
          </button>
        </div>

        <div
          className="xl:h-[500px] flex justify-center rounded-xl overflow-hidden"
          data-aos="fade-left"
        >
          <img
            src="https://ik.imagekit.io/yjtsof0mw/Txtr/image-full_body-texter-5_14_2025.jpg"
            alt="Fathin 1"
            className="h-full border border-gray-500/50 rounded-xl scale-125 hover:scale-[1.9] cursor-none shadow-xl transition-all duration-300 ease-in-out object-cover"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section
        className={`mt-32 ${
          showContact
            ? "opacity-100 scale-1"
            : "scale-0 opacity-0 pointer-events-none"
        }`}
        id="header"
        ref={headerRef}
        style={{
          position: "fixed",
          top: `${position.top}px`,
          left: `${position.left}px`,
          cursor: "grab",
          zIndex: "50",
        }}
      >
        {showContact && (
          <section
            style={{
              position: "fixed",
              top: `${position.top}px`,
              left: `${position.left}px`,
              cursor: "grab",
              zIndex: 9999,
            }}
            className="opacity-100"
          >
            <div className="bg-stone-800/50 backdrop-blur-md prevent-select border border-stone-700 rounded-2xl p-5 shadow-xl w-[90vw] sm:w-[600px]">
              {/* Header Bar */}
              <div
                id="header"
                ref={headerRef}
                className="flex items-center mb-4"
              >
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowContact(false)}
                    className="w-5 h-5 bg-red-400 hover:bg-red-500 rounded-full"
                  ></button>{" "}
                </div>
              </div>

              {/* Title & Description */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold" draggable="false">
                  Let’s <span className="text-green-400">Connect</span> 🤝
                </h2>
                <p className="text-gray-400 mt-2">
                  Whether you're a fellow dev, a curious learner, or just want
                  to say hi — I’d love to hear from you!
                </p>
              </div>

              {/* Contact Links */}
              <div className="grid sm:grid-cols-2 gap-4">
                <ContactLink
                  icon="linkedin"
                  label="M.Fathin Halim"
                  url="https://www.linkedin.com/in/m-fathin-halim-8b8198288/"
                />
                <ContactLink
                  icon="discord"
                  label="@mfathinhalim"
                  url="https://discordapp.com/users/1156486226094870569"
                />
                <ContactLink
                  icon="whatsapp"
                  label="+62 822 8162 7963"
                  url="https://wa.me/+6282281627963"
                />
                <ContactLink
                  icon="envelope"
                  label="Email Me"
                  url="mailto:halimfathin7@gmail.com"
                />
              </div>
            </div>
          </section>
        )}
      </section>
      {/* Skills Breakdown Section */}
      <section className="text-white" data-aos="fade-up">
        <div className="grid md:grid-cols-3 gap-5">
          {/* Frontend */}
          <div className="bg-neutral-800/80 p-6 hover:border-neutral-500 transition-all rounded-2xl border border-white/10 shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-300 mb-3">
              Frontend
            </h3>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>HTML, CSS, Javascript, Typescript</li>
              <li>React.js, Next.js</li>
              <li>Tailwind CSS, Bootstrap</li>
              <li>GSAP (basic)</li>
            </ul>
          </div>
          {/* Backend */}
          <div className="bg-neutral-800/80 p-6 rounded-2xl hover:border-neutral-500 transition-all border border-white/10 shadow-lg">
            <h3 className="text-xl font-semibold text-green-400 mb-3">
              Backend
            </h3>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Node.js (Express)</li>
              <li>MongoDB, Firebase</li>
              <li>REST API</li>
              <li>TypeScript</li>
            </ul>
          </div>
          {/* Others */}
          <div className="bg-neutral-800/80 p-6 rounded-2xl border  hover:border-neutral-500 transition-all border-white/10 shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              Tools & Other Skills
            </h3>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Git & GitHub</li>
              <li>Android Studio, Figma</li>
              <li>Python</li>
              <li>Unity & C# (basic game dev)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Box */}
      <section className="mt-5 text-white">
        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[140px] gap-5 px-4 sm:px-0">
          {[
            {
              col: 2,
              row: 2,
              src: "https://cdn.worldvectorlogo.com/logos/javascript-r.svg",
              name: "JavaScript",
            },
            {
              col: 1,
              row: 1,
              src: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
              name: "VS Code",
            },
            {
              col: 1,
              row: 1,
              src: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
              name: "React",
            },
            {
              col: 2,
              row: 1,
              src: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
              name: "Python",
            },
            {
              col: 1,
              row: 1,
              src: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
              name: "TypeScript",
            },
            {
              col: 1,
              row: 1,
              src: "https://cdn.worldvectorlogo.com/logos/android-5.svg",
              name: "Android",
            },
            {
              col: 1,
              row: 1,
              src: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg",
              name: "Bootstrap",
            },
            {
              col: 1,
              row: 1,
              src: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
              name: "Tailwind CSS",
            },
          ].map((tool, i) => (
            <div
              key={i}
              className={`col-span-${tool.col} row-span-${tool.row} bg-neutral-800/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center justify-center shadow-xl hover:scale-[1.03] transition-all duration-300`}
              data-aos="zoom-in"
              title={tool.name}
            >
              <img
                src={tool.src}
                alt={tool.name}
                className="object-contain max-h-full max-w-full"
              />
            </div>
          ))}
        </div>
      </section>
      <Portofolio max={1} />
      {/* Instagram Feed Section */}
      <section className="my-10">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Latest Instagram Posts
        </h2>
        <div className="flex justify-center rounded-xl overflow-hidden">
          <div
            className="elfsight-app-34fd1377-c484-4942-9043-99b6a5fd31ac"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>
    </div>
  );
}

// Reusable Contact Link
const ContactLink = ({ icon, label, url }) => (
  <a
    href={url}
    className="max-w-100 flex items-center gap-3 px-4 py-3 rounded-lg border border-stone-700 hover:bg-stone-700 transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {ICONS[icon] || <span className="w-5 h-5" />} {/* Fallback */}
    <span>{label}</span>
  </a>
);

export default Intro;
