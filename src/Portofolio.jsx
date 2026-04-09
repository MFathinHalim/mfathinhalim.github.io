import React from "react";

function ProjectCard({ project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-sm opacity-20 group-hover:opacity-60 transition-opacity duration-300"
        style={{ backgroundImage: `url(${project.image})` }}
      />

      <div className="absolute inset-0 bg-white/70 dark:bg-[#0f140e]/75 backdrop-blur-md" />

      <div className="relative z-10">
        <a href={project.link} target="_blank" rel="noreferrer">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              loading="lazy"
              draggable="false"
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </a>

        <div className="p-5">
          <div className="overflow-x-auto">
            <div className="flex flex-nowrap gap-2 mb-3 w-max min-w-full pb-1">
              <span className="shrink-0 px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                {project.date}
              </span>

              {project.develop.map((tag) => (
                <span
                  key={tag}
                  className="shrink-0 px-3 py-1 text-xs font-medium rounded-full bg-gray-900 dark:bg-white/15 text-white dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}

              {project.framework.map((fw) => (
                <span
                  key={fw}
                  className="shrink-0 px-3 py-1 text-xs rounded-full border border-gray-300 dark:border-white/10 text-gray-600 dark:text-gray-300"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="block text-lg sm:text-xl font-semibold text-gray-900 dark:text-white hover:underline underline-offset-4"
          >
            {project.title}
          </a>

          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.desc}
          </p>

          <div className="flex justify-end mt-3">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-gray-300 dark:border-white/10 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              Visit
              <i className="fa-solid fa-arrow-up-right-from-square ml-2" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Portfolio({ max }) {
  const pathname = window.location.pathname;

  const projects = [
    {
      image: "/Screenshot/Screenshot%20(7).png",
      title: "Kamus Bahasa Rejang",
      desc: "A digital dictionary application that helps users understand and learn the Rejang language.",
      link: "https://kamusrejang.vercel.app",
      framework: ["React", "NextJS", "MongoDB", "TailwindCSS"],
      develop: ["Website", "Mobile"],
      date: "September 2020",
    },
    {
      image: "/Screenshot/Screenshot%20(6).png",
      title: "rejangpedia",
      desc: "An all-in-one application for digital literacy and community participation.",
      link: "https://rejangpedia.vercel.app/",
      framework: ["React", "NextJS", "MongoDB", "Bootstrap", "ImageKit.io"],
      develop: ["Website", "Mobile"],
      date: "June 2023",
    },
    {
      image: "/Screenshot/Screenshot%20(2).png",
      title: "Yunation",
      desc: "A community website for sharing artwork and exploring creative posts.",
      link: "https://yunation.vercel.app/",
      framework: ["Express", "Bootstrap"],
      develop: ["Website"],
      date: "June 2024",
    },
    {
      image: "/Screenshot/Screenshot%20(10).png",
      title: "Play Review",
      desc: "Analysis Hundred of Reviews with AI",
      link: "https://playreview.vercel.app/",
      framework: ["Python", "Bootstrap", "WhatsApp Bot"],
      develop: ["Website"],
      date: "December 2025",
    },
    {
      image: "/Screenshot/Screenshot%20(3).png",
      title: "Mahiru is Fathin's Wife",
      desc: "Mahiru Shiina is Fathin's Wife.",
      link: "https://mahiru-shiina.vercel.app/",
      framework: ["Next.js", "Bootstrap"],
      develop: ["Website"],
      date: "September 2023",
    },
    {
      image: "/Screenshot/Screenshot%20(4).png",
      title: "Cardcozy",
      desc: "An AI quote web app for expressing feelings in a creative way.",
      link: "https://cardcozy.vercel.app",
      framework: ["NextJS", "AI", "Bootstrap"],
      develop: ["Website"],
      date: "March 2025",
    },
    {
      image:
        "https://img.itch.zone/aW1hZ2UvMTg0MzUyMy8xMDgxODczMy5wbmc=/347x500/i8%2FXQY.png",
      title: "Plane vs Zombie",
      desc: "A fast-paced game built during a 2-day game jam challenge.",
      link: "https://nabeela.itch.io/plane-vs-zombie-desktop",
      framework: ["C#", "Unity"],
      develop: ["Game Development"],
      date: "December 2022",
    },

    {
      image: "/Screenshot/Screenshot (9).png",
      title: "Paperline",
      desc: "You play as a boy born into a wealthy family. You’ve never gone to a normal school, never had real friends — until now.",
      link: "https://paperline.vercel.app",
      framework: ["Tailwind", "NextJS"],
      develop: ["Website", "Game"],
      date: "June 2025",
    },
    {
      image: "/Screenshot/Screenshot%20(12).png",
      title: "Moody",
      desc: "Track your moodswing",
      link: "https://moody-hours.vercel.app/",
      framework: ["React", "Bootstrap"],
      develop: ["Website"],
      date: "September 2025",
    },
    {
      image: "/Screenshot/Screenshot%20(13).png",
      title: "Learn JS",
      desc: "An easy-to-follow website for learning JavaScript basics.",
      link: "https://mfathinhalim.github.io/learnjs",
      framework: ["HTML", "Bootstrap"],
      develop: ["Website"],
      date: "May 2024",
    },
    {
      image: "/Screenshot/Screenshot%20(11).png",

      title: "Fanimelist",
      desc: "A simple anime tracking app for browsing and organizing favorite series.",
      link: "https://fanimelist.vercel.app/",
      framework: ["Tailwind", "NextJS"],
      develop: ["Website"],
      date: "June 2025",
    },
    {
      image:
        "https://github.com/ramadityo/hexagrab/raw/main/assets/20250218_070002_hexagrab.png",
      title: "Contribute to Hexagrab",
      desc: "A color picker tool that helps extract colors from images.",
      link: "https://kamusrejang.vercel.app/",
      framework: ["NextJS", "TailwindCSS"],
      develop: ["Website"],
      date: "February 2025",
    },
  ];

  const visibleProjects = max ? projects.slice(0, max) : projects;

  return (
    <div className="py-8 dark:text-white">
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <a
          href="https://github.com/MFathinHalim"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f140e] px-4 py-3 text-center hover:bg-gray-50 dark:hover:bg-white/5 transition"
        >
          GitHub
        </a>
        <a
          href="https://play.google.com/store/apps/dev?id=9479403092297008477"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f140e] px-4 py-3 text-center hover:bg-gray-50 dark:hover:bg-white/5 transition"
        >
          Google Play
        </a>
        <a
          href="https://codepen.io/mfathinhalim"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f140e] px-4 py-3 text-center hover:bg-gray-50 dark:hover:bg-white/5 transition"
        >
          Codepen
        </a>
      </section>

      <section
        id="projects"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
      >
        {visibleProjects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </section>

      <section className="mt-8">
        {pathname !== "/journey/" ? (
          <a
            href="/journey/"
            className="inline-flex items-center px-5 py-2 rounded-full border border-gray-300 dark:border-white/10 text-sm font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            View Journey
          </a>
        ) : (
          <a
            href="/PORTOFOLIO_FATHIN.pdf"
            download
            className="inline-flex items-center px-5 py-2 rounded-full border border-gray-300 dark:border-white/10 text-sm font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            Download Portofolio
          </a>
        )}
      </section>
    </div>
  );
}

export default Portfolio;
