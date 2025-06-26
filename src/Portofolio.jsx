import React from "react";

function ProjectCard({ project }) {
  return (
    <div
      className={`border bg-b hover:bg-gray-50 dark:hover:bg-stone-800 py-4 super-rounded ${project.class}`}
    >
      <div className="flex flex-wrap gap-2 mb-2">
        <span className="px-3 py-1 text-xs font-semibold text-gray-800 bg-stone-200 rounded-lg border-2 border-transparent">
          {project.date}
        </span>
        {project.develop.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-semibold text-white bg-gray-700 dark:bg-stone-600 rounded-lg border-2 border-transparent"
          >
            {tag}
          </span>
        ))}
      </div>

      <img
        loading="lazy"
        draggable="false"
        className="rounded-lg mb-3"
        src={project.image}
        alt={project.title}
        style={{ objectFit: "cover", height: 300 }}
      />

      <a
        href={project.link}
        className="text-xl font-semibold mt-3 block decoration-blue-500 hover:underline"
      >
        {project.title}
      </a>

      <div className="flex flex-wrap gap-2 mt-2 mb-2">
        {project.framework.map((fw) => (
          <span
            key={fw}
            className="px-3 py-1 text-xs font-semibold border border-stone-600 rounded-full"
          >
            {fw}
          </span>
        ))}
      </div>

      <p className="text-gray-600 dark:text-gray-300/60">{project.desc}</p>

      <a
        href={project.link}
        className="inline-flex items-center dark:hover:bg-stone-700 justify-center mt-3 px-5 py-2 text-base font-medium border border-stone-600 rounded-full hover:bg-gray-200"
        style={{ marginBottom: 2 }}
      >
        Visit
        <i className="fa-solid fa-arrow-up-right-from-square ml-2" />
      </a>
    </div>
  );
}

function Portfolio({ max }) {
  const pathname = window.location.pathname;
  const projects = [
    {
      class:
        "max-w-full col-span-3 h-auto border-stone-600 border bg-b hover:bg-gray-50 p-4 super-rounded",
      image: "/Screenshot/Screenshot%20(7).png",
      title: "Kamus Bahasa Rejang",
      desc: "A digital dictionary application that helps users understand and learn the Rejang language, one of the regional languages in Indonesia.",
      link: "https://kamusrejang.vercel.app",
      framework: ["React", "NextJS", "MongoDB", "TailwindCSS"],
      develop: ["website", "mobile application"],
      date: "September 2020",
    },
    {
      class:
        "max-w-full border-stone-700 bg-b hover:bg-gray-50 col-span-3 p-4 h-auto super-rounded",
      image:
        "https://i.pinimg.com/736x/0e/37/5c/0e375c0d864cb30410be98d8fcdf4b09.jpg",
      title: "Fanimelist",
      desc: "Anime List made by M.Fathin Halim",
      link: "https://fanimelist.vercel.app/",
      framework: ["Tailwind", "NextJS"],
      develop: ["website"],
      date: "June 2025",
    },
    {
      class:
        "max-w-full col-span-3 h-auto border-stone-600 border bg-b hover:bg-gray-50 p-4 super-rounded",

      image: "/Screenshot/Screenshot%20(6).png",
      title: "rejangpedia",
      desc: "rejangpedia is an all-in application with a spirit of mutual cooperation form of digital literacy where everyone can participate.",
      link: "https://rejangpedia.vercel.app/",
      framework: ["React", "NextJS", "MongoDB", "Bootstrap", "ImageKit.io"],
      develop: ["website", "mobile application"],
      date: "June 2023",
    },
    {
      class:
        "max-w-full col-span-3 border border-stone-700 bg-b hover:bg-gray-50 p-4 h-auto col-span-3 super-rounded",
      image:
        "https://github.com/ramadityo/hexagrab/raw/main/assets/20250218_070002_hexagrab.png",
      title: "Contribute to Hexagrab",
      desc: "Find colors from image. Made by Adityo, ui/ux by Fathin.",
      link: "https://kamusrejang.vercel.app/",
      framework: ["NextJS", "TailwindCSS"],
      develop: ["website"],
      date: "February 2025",
    },
    {
      class:
        "max-w-full border-stone-600 border bg-b hover:bg-gray-50 p-4 h-auto super-rounded lg:col-span-1 col-span-3",
      image:
        "https://ik.imagekit.io/9hpbqscxd/SG/image-66.jpg?updatedAt=1705798245623",
      title: "Texter",
      desc: "Texter, social media inspired by Twitter(X) and Threads!",
      link: "https://texter-id.glitch.me/",
      framework: ["Next.js", "MongoDB", "Bootstrap"],
      develop: ["website"],
      date: "September 2023",
    },
    {
      class:
        "max-w-full border-stone-600 border bg-b hover:bg-gray-50 p-4 h-auto super-rounded col-span-3 lg:col-span-2",
      image: "/Screenshot/Screenshot%20(2).png",
      title: "Yunation",
      desc: "A website dedicated for Yunation! Yunayu's Art Community ( ^ v ^ ). This website let user upload their artwork too :D",
      link: "https://yunation.vercel.app/",
      framework: ["Express", "Bootstrap"],
      develop: ["website"],
      date: "June 2024",
    },
    {
      class:
        "max-w-full border-stone-600 border bg-b hover:bg-gray-50 p-4 col-span-3 super-rounded h-auto",
      image: "../../images",
      title: "My Simple Notes",
      desc: "A website to store and organize notes. This platform offers a simple solution for users to securely save their valuable insights and learnings.",
      link: "https://mysimplenotes.glitch.me/",
      framework: ["React", "Bootstrap"],
      develop: ["website"],
      date: "February 2023",
    },
    {
      class:
        "max-w-full border-stone-700 bg-b hover:bg-gray-50 p-4 h-auto super-rounded col-span-3 lg:col-span-1",
      image: "../../medium.jpg",
      title: "Cerdas AI",
      desc: "A user-friendly bot app that brings AI to everyone.",
      link: "https://cerdasai.fatih-jihadijih.repl.co/",
      framework: ["Python", "Bootstrap", "WhatsApp Bot"],
      develop: ["website"],
      date: "July 2023",
    },
    {
      class:
        "max-w-full border-stone-600 border bg-b hover:bg-gray-50 p-4 h-auto super-rounded col-span-3 lg:col-span-2",
      image: "https://media.tenor.com/t9pwGPO3TpoAAAAM/apt.gif",
      title: "Cardcozy",
      desc: "Cardcozy is ai quote web to confess feeling to other!",
      link: "https://cardcozy.vercel.app",
      framework: ["NextJS", "AI", "Bootstrap"],
      develop: ["website"],
      date: "March 2025",
    },
    {
      class:
        "max-w-full border-stone-700 bg-b hover:bg-gray-50 col-span-3 p-4 h-auto super-rounded",
      image:
        "https://img.itch.zone/aW1hZ2UvMTg0MzUyMy8xMDgxODczMy5wbmc=/347x500/i8%2FXQY.png",
      title: "Plane vs Zombie",
      desc: "PVZ is a game made by Fathin and Nabeel for a game jam in 2 DAYS!",
      link: "https://nabeela.itch.io/plane-vs-zombie-desktop",
      framework: ["C#", "Unity"],
      develop: ["game development"],
      date: "December 2022",
    },
    {
      class:
        "max-w-full border-stone-600 border bg-b hover:bg-gray-50 p-4 h-auto super-rounded col-span-3 lg:col-span-2",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      title: "Learn JS",
      desc: "Learn Javascript With Fathin.",
      link: "https://mfathinhalim.github.io/learnjs",
      framework: ["HTML", "Bootstrap"],
      develop: ["website"],
      date: "May 2024",
    },
    {
      class:
        "max-w-full border-stone-700 bg-b hover:bg-gray-50 p-4 h-auto super-rounded col-span-3 lg:col-span-1",
      image:
        "https://i.pinimg.com/originals/44/94/3b/44943b3d9b339f4b8eac2efd27024411.png",
      title: "Domainshort",
      desc: "Domain Short is a URL shortener made by Fathin.",
      link: "https://domaisshort.glitch.me/",
      framework: ["Tailwind", "Node", "MongoDB"],
      develop: ["website"],
      date: "June 2024",
    },
  ];

  return (
    <div className="py-8 dark:text-white">
      <section className="socials my-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <a
          href="https://github.com/MFathinHalim"
          target="_blank"
          className="w-full border-stone-600 border bg-b dark:hover:bg-stone-800 hover:bg-gray-50 p-4 h-auto super-rounded flex items-center justify-center space-x-2 col-span-3 lg:col-span-1"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github fa-xl cursor-pointer hover:text-blue-600 mr-2"></i>{" "}
          GitHub
        </a>
        <a
          href="https://play.google.com/store/apps/dev?id=9479403092297008477"
          target="_blank"
          className="w-full border-stone-700 border bg-b dark:hover:bg-stone-800 hover:bg-gray-50 p-4 h-auto super-rounded flex items-center justify-center space-x-2"
          rel="noreferrer"
        >
          <i className="fa-brands fa-google-play fa-xl cursor-pointer hover:text-green-600 mr-2"></i>
          Google Play
        </a>
        <a
          href="https://codepen.io/mfathinhalim"
          target="_blank"
          className="w-full border-stone-700 border bg-b dark:hover:bg-stone-800 hover:bg-gray-50 p-4 h-auto super-rounded flex items-center justify-center space-x-2"
          rel="noreferrer"
        >
          <i className="fa-brands fa-codepen fa-xl cursor-pointer hover:text-black mr-2"></i>
          Codepen
        </a>
      </section>

      <section
        id="projects"
        className="grid grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {(max ? projects.slice(0, max) : projects).map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </section>

      <section className="flex flex-wrap gap-3 mt-6 mb-10 ">
        {pathname !== "/journey/" ? (
          <a
            href="/journey/"
            className="border px-5 border-black hover:bg-gray-50 py-2"
            style={{ borderRadius: 9999 }}
          >
            View Journey
          </a>
        ) : (
          <a
            href="/CV.pdf"
            className="border px-5 border-black dark:border-white dark:hover:text-black hover:bg-gray-50 py-2"
            style={{ borderRadius: 9999 }}
            download
          >
            Download CV
          </a>
        )}
      </section>
    </div>
  );
}

export default Portfolio;
