function Portofolio() {
  const projects = [
    {
      class: "max-w-full border-gray-700 bg-gray-800 p-4 super-rounded h-auto",
      image: "./LogoISK.jpg",
      title: "ISK Website",
      desc: "A website dedicated to exploring science content by Fajrul Fx.",
      link: "https://sciencekingdom.gg/",
    },
    {
      class:
        "max-w-full border-gray-600 border bg-gray-700 p-4 super-rounded sm:col-span-2",
      image: "./kamus.png",
      title: "Kamus Bahasa Rejang",
      desc: "A digital dictionary application that helps users understand and learn the Rejang language, one of the regional languages in Indonesia.",
      link: "https://kamusrejang.rejanglebongkab.go.id/",
    },
    {
      class:
        "max-w-full sm:col-span-2 border-gray-700 bg-gray-800 p-4 rounded-lg h-auto super-rounded",
      image: "./logo.png",
      title: "rejangpedia",
      desc: "rejangpedia is an all-in application with a spirit of mutual cooperation in preserving Bengkulu culture in general and Rejang Lebong in particular in the form of digital literacy where everyone can participate.",
      link: "https://rejangpedia.glitch.me/",
    },
    {
      class:
        "max-w-full border-gray-600 border bg-gray-700 p-4 rounded-lg h-auto super-rounded",
      image: "./medium.jpg",
      title: "Cerdas AI",
      desc: "a user-friendly bot app that bring AI to everyone, without the need to log in.",
      link: "https://cerdasai.fatih-jihadijih.repl.co/",
    },
    {
      class:
        "max-w-full border-gray-700 bg-gray-800 p-4 rounded-lg h-auto super-rounded",
      image: "https://ik.imagekit.io/9hpbqscxd/SG/image-3.jpg",
      title: "Shared Gallery",
      desc: "you can share cherished moments through images.",
      link: "https://shared-gallery.glitch.me/",
    },
    {
      class:
        "max-w-full border-gray-600 border bg-gray-700 p-4 sm:col-span-2 super-rounded h-auto",
      image: "./PVZ.png",
      title: "Plane VS Zombies",
      desc: "A fun game where players have to control a plane to fight off an incessant zombie attack.",
      link: "https://nabeela.itch.io/plane-vs-zombie-desktop",
    },
    {
      class:
        "max-w-full border-gray-700 bg-gray-800 p-4 rounded-lg h-auto super-rounded sm:col-span-2",
      image: "./images",
      title: "My Simple Notes",
      desc: "a website to store and organize notes. This platform offers a simple solution for users to securely save their valuable insights and learnings.",
      link: "https://mysimplenotes.glitch.me/",
    },
    {
      class:
        "max-w-full border-gray-600 border bg-gray-700 p-4 rounded-lg h-auto super-rounded",
      image: "./gradient-lo-fi-illustrations_52683-82981.jpg",
      title: "Media Vibe",
      desc: "A Video Player That M.Fathin Halim's Make!",
      link: "https://mediavibe.glitch.me/",
    },
    {
      class:
        "max-w-full border-gray-600 border bg-gray-700 p-4 rounded-lg h-auto super-rounded",
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/240/812/desktop-wallpaper-best-music-electronic-no-copyright-sounds-sounds.jpg",
      title: "Do Music",
      desc: "A Simple Music Player!",
      link: "https://domusik.glitch.me/",
    },
    {
      class:
        "max-w-full border-gray-700 bg-gray-800 sm:col-span-2 p-4 rounded-lg h-auto super-rounded",
      image: "./logo(1).png",
      title: "SMP Negeri 1 Rejang Lebong's Website",
      desc: "Website page for SMP Negeri 1 Rejang Lebong.",
      link: "https://smpn1rl.glitch.me/",
    },
  ];
  return (
    <>
      <article id="project" className="mb-8 p-3" style={{ marginTop: 100 }}>
        <h1
          data-aos="fade-up"
          data-aos-easing="linear"
          className="text-4xl sm:text-8xl m-3 mb-0 text-gray-600"
          style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
        >
          Portofolio
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-0">
          {projects.map((project) => (
            <div
              key={project.title}
              data-aos="fade-up"
              className={project.class}
            >
              <img
                loading="lazy"
                draggable="false"
                className="rounded-lg mb-3"
                src={project.image}
                alt="Intergalactic Science Kingdom Website"
                style={{ objectFit: "cover", height: 300 }}
              />
              <a
                className="text-2xl ease-in-out delay-150 mt-3 font-semibold  decoration-blue-500"
                href="https://sciencekingdom.gg/"
              >
                {project.title}
              </a>
              <p>{project.desc}</p>
              <a
                href={project.link}
                style={{ marginBottom: 2, marginTop: 20 }}
                className="inline-flex justify-center hover:text-gray-900 items-center py-2 mt-3 px-5 text-base font-medium text-center text-white rounded-full border border-white hover:bg-white focus:ring-4 focus:ring-gray-400"
              >
                Visit
                <i className="fa-solid fa-arrow-up-right-from-square ml-2" />
              </a>
            </div>
          ))}
          <a
            href="https://github.com/mfathinhalim"
            data-aos="zoom-in"
            className="text-xl text-white text-center rounded-md p-8 h-300 flex hover:bg-gray-700 bg-gray-600 border-gray-500 items-center justify-center sm:col-span-2"
            style={{ textDecoration: "none !important" }}
          >
            <i className="fa-brands fa-github" aria-hidden="true" />
            GitHub
            <i className="fa-solid fa-arrow-up-right-from-square" />
          </a>
          <a
            data-aos="zoom-in"
            href="https://codepen.io/MFathin-Halim-Doma"
            className="text-xl text-white text-center rounded-md p-8 h-300 flex items-center justify-center bg-green-700 hover:bg-green-800"
            style={{ textDecoration: "none !important" }}
          >
            <i className="fa-brands fa-codepen" aria-hidden="true" />
            Codepen!
            <i className="fa-solid fa-arrow-up-right-from-square" />
          </a>
        </div>
      </article>
    </>
  );
}

export default Portofolio;
