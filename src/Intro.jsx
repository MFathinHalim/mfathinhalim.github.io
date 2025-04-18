import { Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
const ICONS = {
  linkedin: <Linkedin className="w-5 h-5" />,
  discord: <MessageCircle className="w-5 h-5" />,
  whatsapp: <Phone className="w-5 h-5" />,
  envelope: <Mail className="w-5 h-5" />,
};
function Intro() {
 
  return (
    <div className="pt-20 text-white font-sans mx-auto">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
          <h1 id="Name" className="text-5xl leading-tight">
            M. Fathin Halim
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A passionate student from Indonesia who loves{" "}
            <span className="font-semibold text-yellow-300">Programming</span>{" "}
            and{" "}
            <span className="font-semibold text-yellow-300">
              Japanese Culture
            </span>
            . I enjoy building educational and creative platforms that bring
            impact.
          </p>
          <a
            href="/journey/"
            className="inline-block mt-6 px-6 py-3 bg-yellow-300 text-black font-semibold rounded-xl hover:bg-yellow-400 transition"
          >
            See My Journey 🚀
          </a>
        </div>

        <div className="lg:col-span-5" data-aos="fade-left">
          <img
            src="./f7-A-Fathin-pembuat-aplikasi-Kamus-Kata-Bahasa-Rejang.jpg"
            alt="M.Fathin Halim"
            className="rounded-3xl object-cover w-full h-auto shadow-2xl"
          />
        </div>
      </section>
            {/* Contact Section */}
            <section id="contact" className="my-20" data-aos="fade-up">
        <div className="border border-gray-700 bg-black rounded-2xl p-4 py-10 shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Let’s <span className="text-green-400">Connect</span> and
            Collaborate 🤝
          </h2>
          <p className="hidden md:block text-gray-400 text-center max-w-2xl mx-auto mb-10">
            Whether you're a fellow dev, a curious learner, or just want to say
            hi — I’d love to hear from you!
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
              label="halimfathin7@gmail.com"
              url="mailto:halimfathin7@gmail.com"
            />
          </div>
        </div>
      </section>
      {/* Skills Breakdown Section */}
      <section className="mt-20 text-white" data-aos="fade-up">
        <div className="grid md:grid-cols-3 gap-5">
          {/* Frontend */}
          <div  className="bg-neutral-800/80 p-6 hover:border-neutral-500 transition-all rounded-2xl border border-white/10 shadow-lg">
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
          <div
 className="bg-neutral-800/80 p-6 rounded-2xl hover:border-neutral-500 transition-all border border-white/10 shadow-lg">
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
          <div
 className="bg-neutral-800/80 p-6 rounded-2xl border  hover:border-neutral-500 transition-all border-white/10 shadow-lg">
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
    </div>
  );
}

// Reusable Contact Link
const ContactLink = ({ icon, label, url }) => (
  <a
    href={url}
    className="max-w-100 flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-700 hover:bg-gray-700 transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {ICONS[icon] || <span className="w-5 h-5" />} {/* Fallback */}
    <span>{label}</span>
  </a>
);

export default Intro;
