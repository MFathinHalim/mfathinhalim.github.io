function Portofolio() {
  const projects = [
    {
      class:
        "max-w-full border-gray-700 bg-b hover:bg-gray-900 p-4 super-rounded h-auto sm:col-span-2 lg:col-span-1",
      image: "./LogoISK.jpg",
      title: "ISK Website",
      desc: "A website dedicated to exploring science content by Fajrul Fx.",
      link: "https://sciencekingdom.gg/",
    },
    {
      class:
        "max-w-full h-auto border-gray-600 border bg-b hover:bg-gray-900 p-4 super-rounded sm:col-span-2",
      image: "./kamus.png",
      title: "Kamus Bahasa Rejang",
      desc: "A digital dictionary application that helps users understand and learn the Rejang language, one of the regional languages in Indonesia.",
      link: "https://kamusrejang.glitch.me/",
    },
    {
      class:
        "max-w-full sm:col-span-2 border-gray-700 bg-b hover:bg-gray-900 p-4 rounded-lg h-auto sm:col-span-2 super-rounded",
      image: "./logo.png",
      title: "rejangpedia",
      desc: "rejangpedia is an all-in application with a spirit of mutual cooperation in preserving Bengkulu culture in general and Rejang Lebong in particular in the form of digital literacy where everyone can participate.",
      link: "https://rejangpedia.glitch.me/",
    },
    {
      class:
        "max-w-full border-gray-600 border bg-b hover:bg-gray-900 p-4 rounded-lg sm:col-span-2 h-auto lg:col-span-1 super-rounded",
      image: "./medium.jpg",
      title: "Cerdas AI",
      desc: "a user-friendly bot app that bring AI to everyone, without the need to log in.",
      link: "https://cerdasai.fatih-jihadijih.repl.co/",
    },
    {
      class:
        "max-w-full border-gray-700 bg-b hover:bg-gray-900 p-4 rounded-lg h-auto super-rounded sm:col-span-2 lg:col-span-1",
      image: "https://ik.imagekit.io/9hpbqscxd/SG/image-3.jpg",
      title: "Shared Gallery",
      desc: "you can share cherished moments through images.",
      link: "https://shared-gallery.glitch.me/",
    },
    {
      class:
        "max-w-full border-gray-600 border bg-b hover:bg-gray-900 p-4 sm:col-span-2 super-rounded h-auto",
      image: "./PVZ.png",
      title: "Yunation",
      desc: "A website dedicated for Yunation! Yunayu's Art Community ( ^ v ^ ). This website let user upload their artwork too :D",
      link: "https://yunation.glitch.me",
    },
    {
      class:
        "max-w-full border-gray-700 bg-b hover:bg-gray-900 p-4 rounded-lg h-auto super-rounded sm:col-span-2",
      image: "./images",
      title: "My Simple Notes",
      desc: "a website to store and organize notes. This platform offers a simple solution for users to securely save their valuable insights and learnings.",
      link: "https://mysimplenotes.glitch.me/",
    },
    {
      class:
        "max-w-full border-gray-600 border bg-b hover:bg-gray-900 p-4 rounded-lg h-auto super-rounded lg:col-span-1 sm:col-span-2",
      image: "./gradient-lo-fi-illustrations_52683-82981.jpg",
      title: "Media Vibe",
      desc: "A Video Player That M.Fathin Halim's Make!",
      link: "https://mediavibe.glitch.me/",
    },
    {
      class:
        "max-w-full border-gray-600 border bg-b hover:bg-gray-900 p-4 rounded-lg h-auto super-rounded sm:col-span-2 lg:col-span-1",
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/240/812/desktop-wallpaper-best-music-electronic-no-copyright-sounds-sounds.jpg",
      title: "Do Music",
      desc: "A Simple Music Player!",
      link: "https://domusik.glitch.me/",
    },
    {
      class:
        "max-w-full border-gray-700 bg-b hover:bg-gray-900 sm:col-span-2 p-4 rounded-lg h-auto super-rounded",
      image: "./logo(1).png",
      title: "SMP Negeri 1 Rejang Lebong's Website",
      desc: "Website page for SMP Negeri 1 Rejang Lebong.",
      link: "https://smpn1rl.glitch.me/",
    },
  ];
  return (
    <>
      <article id="project" className="mb-8 p-3" style={{ marginTop: 100 }}>
        <h3
          data-aos="fade-up"
          data-aos-easing="linear"
          className="text-6xl text-center sm:text-8xl m-3 mb-4 text-gray-600"
          style={{ fontWeight: "bold" }}
        >
          Projects
        </h3>
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
                className="text-2xl ease-in-out delay-150 mt-3 text-gray-300 font-semibold  decoration-blue-500"
                href={project.link}
              >
                {project.title}
              </a>
              <p className="text-gray-400">{project.desc}</p>
              <a
                href={project.link}
                style={{ marginBottom: 2, marginTop: 20 }}
                className="inline-flex justify-center hover:text-gray-200 items-center py-2 mt-3 px-5 text-base font-medium text-center text-gray-200 rounded-full border border-gray-600 hover:bg-gray-600 focus:ring-4 focus:ring-gray-700"
              >
                Visit
                <i className="fa-solid fa-arrow-up-right-from-square ml-2" />
              </a>
            </div>
          ))}
          <a
            href="https://github.com/mfathinhalim"
            data-aos="zoom-in"
            className="text-xl text-white text-center super-rounded p-8 h-300 flex hover:bg-gray-700 border-gray-600 border bg-b items-center justify-center sm:col-span-2"
            style={{ textDecoration: "none !important" }}
          >
            <i className="fa-brands fa-github mr-1" aria-hidden="true" />
            GitHub
            <i className="fa-solid fa-arrow-up-right-from-square ml-1" />
          </a>
          <a
            data-aos="zoom-in"
            href="https://codepen.io/MFathin-Halim-Doma"
            className="text-xl text-white text-center super-rounded p-8 h-300 flex items-center justify-center border bg-b border-green-700 hover:bg-green-700 lg:col-span-1 sm:col-span-2"
            style={{ textDecoration: "none !important" }}
          >
            <i className="fa-brands fa-codepen mr-1" aria-hidden="true" />
            Codepen
            <i className="fa-solid fa-arrow-up-right-from-square ml-1" />
          </a>
        </div>
      </article>
    </>
  );
}

export default Portofolio;
