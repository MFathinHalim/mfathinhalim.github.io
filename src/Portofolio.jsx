function Portofolio() {
    const projects = [
        {
            class: "max-w-full border-gray-700 bg-b hover:bg-gray-900 p-4 super-rounded h-auto sm:col-span-2 lg:col-span-1",
            image: "./LogoISK.jpg",
            title: "ISK Website",
            desc: "A website dedicated to exploring science content by Fajrul Fx.",
            link: "https://sciencekingdom.gg/",
            framework: ["Bootstrap", "Express"],
            develop: ["website"],
        },
        {
            class: "max-w-full h-auto border-gray-600 border bg-b hover:bg-gray-900 p-4 super-rounded sm:col-span-2",
            image: "./kamus.png",
            title: "Kamus Bahasa Rejang",
            desc: "A digital dictionary application that helps users understand and learn the Rejang language, one of the regional languages in Indonesia.",
            link: "https://kamusrejang.glitch.me/",
            framework: ["React", "Node", "Express", "MongoDB", "Bootstrap"],
            develop: ["website", "mobile application"],
        },
        {
            class: "max-w-full sm:col-span-2 border-gray-700 bg-b hover:bg-gray-900 p-4 rounded-lg h-auto sm:col-span-2 super-rounded",
            image: "./logo.png",
            title: "rejangpedia",
            desc: "rejangpedia is an all-in application with a spirit of mutual cooperation form of digital literacy where everyone can participate.",
            link: "https://rejangpedia.glitch.me/",
            framework: ["React", "Node", "Express", "MongoDB", "Bootstrap"],
            develop: ["website", "mobile application"],
        },
        {
            class: "max-w-full border-gray-600 border bg-b hover:bg-gray-900 p-4 rounded-lg h-auto super-rounded lg:col-span-1 sm:col-span-2",
            image: "https://ik.imagekit.io/9hpbqscxd/SG/image-66.jpg?updatedAt=1705798245623",
            title: "Texter",
            desc: "Texter, social media inspired by Twitter(X) and Threads!",
            link: "https://texter-id.glitch.me/",
            framework: ["Next.js", "MongoDB", "Bootstrap"],
            develop: ["website"],
        },
        {
            class: "max-w-full border-gray-700 bg-b hover:bg-gray-900 p-4 rounded-lg h-auto super-rounded sm:col-span-2 lg:col-span-1",
            image: "https://ik.imagekit.io/9hpbqscxd/SG/image-3.jpg",
            title: "Shared Gallery",
            desc: "You can share cherished moments through images.",
            link: "https://shared-gallery.glitch.me/",
            framework: ["React", "Express", "Node", "Bootstrap"],
            develop: ["website"],
        },
        {
            class: "max-w-full border-gray-600 border bg-b hover:bg-gray-900 p-4 sm:col-span-2 super-rounded h-auto",
            image: "./PVZ.png",
            title: "Yunation",
            desc: "A website dedicated for Yunation! Yunayu's Art Community ( ^ v ^ ). This website let user upload their artwork too :D",
            link: "https://yunation.glitch.me/",
            framework: ["Express", "Bootstrap"],
            develop: ["website"],
        },
        /*
        {
            class: "max-w-full border-gray-600 border bg-b hover:bg-gray-900 p-4 sm:col-span-2 super-rounded h-auto",
            image: "./images",
            title: "My Simple Notes",
            desc: "A website to store and organize notes. This platform offers a simple solution for users to securely save their valuable insights and learnings.",
            link: "https://mysimplenotes.glitch.me/",
            framework: ["React", "Bootstrap"],
            develop: ["website"],
        },
        {
            class: "max-w-full border-gray-700 bg-b hover:bg-gray-900 p-4 rounded-lg h-auto super-rounded sm:col-span-2 lg:col-span-1",
            image: "./medium.jpg",
            title: "Cerdas AI",
            desc: "A user-friendly bot app that brings AI to everyone.",
            link: "https://cerdasai.fatih-jihadijih.repl.co/",
            framework: ["Python", "Bootstrap", "WhatsApp Bot"],
            develop: ["website"],
        },
        {
            class: "max-w-full border-gray-600 border bg-b hover:bg-gray-900 p-4 rounded-lg h-auto super-rounded sm:col-span-2 lg:col-span-1",
            image: "https://e1.pxfuel.com/desktop-wallpaper/240/812/desktop-wallpaper-best-music-electronic-no-copyright-sounds-sounds.jpg",
            title: "Do Music",
            desc: "A Simple Music Player!",
            link: "https://domusik.glitch.me/",
            framework: ["Node", "Express", "Bootstrap"],
            develop: ["website"],
        },
        {
            class: "max-w-full border-gray-700 bg-b hover:bg-gray-900 sm:col-span-2 p-4 rounded-lg h-auto super-rounded",
            image: "https://img.itch.zone/aW1hZ2UvMTg0MzUyMy8xMDgxODczMy5wbmc=/347x500/i8%2FXQY.png",
            title: "Plane vs Zombie",
            desc: "PVZ is a game made by Fathin and Nabeel for a game jam in 2 DAYS!",
            link: "https://nabeela.itch.io/plane-vs-zombie-desktop",
            framework: ["C#", "Unity"],
            develop: ["game development"],
        },
        {
            class: "max-w-full border-gray-600 border bg-b hover:bg-gray-900 p-4 sm:col-span-2 super-rounded h-auto",
            image: "./logo(1).png",
            title: "SMP Negeri 1 Rejang Lebong's Website",
            desc: "Website page for SMP Negeri 1 Rejang Lebong.",
            link: "https://smpn1rl.glitch.me/",
            framework: ["HTML", "Bootstrap"],
            develop: ["website"],
        },
        {
            class: "max-w-full border-gray-700 bg-b hover:bg-gray-900 p-4 rounded-lg h-auto super-rounded sm:col-span-2 lg:col-span-1",
            image: "https://cdn.glitch.global/415b2a45-a913-4f2c-96ca-b6598c3c6e8a/logo.png?v=1718077655964",
            title: "Fathin Chat",
            desc: "Simple Chatting app.",
            link: "https://fathinchat.glitch.me/",
            framework: ["Bootstrap", "Node", "Express", "Socket.io"],
            develop: ["website"],
        },
        {
            class: "max-w-full border-gray-600 border bg-b hover:bg-gray-900 p-4 rounded-lg h-auto super-rounded sm:col-span-2 lg:col-span-1",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            title: "Learn JS",
            desc: "Learn Javascript With Fathin.",
            link: "https://mfathinhalim.github.io/learnjs",
            framework: ["HTML", "Bootstrap"],
            develop: ["website"],
        },
        {
            class: "max-w-full border-gray-700 bg-b hover:bg-gray-900 sm:col-span-2 p-4 rounded-lg h-auto super-rounded",
            image: "https://i.pinimg.com/originals/44/94/3b/44943b3d9b339f4b8eac2efd27024411.png",
            title: "Domainshort",
            desc: "Domain Short is a URL shortener made by Fathin.",
            link: "https://domaisshort.glitch.me/",
            framework: ["Tailwind", "Node", "MongoDB"],
            develop: ["website"],
        },
        {
            class: "max-w-full border-gray-700 bg-b hover:bg-gray-900 sm:col-span-2 p-4 rounded-lg h-auto super-rounded",
            image: "https://ik.imagekit.io/9hpbqscxd/SG/image-83.jpg?updatedAt=1705798245623",
            title: "IMPHNEN",
            desc: "Ingin Menjadi Programmer Handal Namun Enggan Ngoding landing page",
            link: "https://imphnen.glitch.me",
            framework: ["HTML", "Bootstrap"],
            develop: ["website"],
        },
        {
          class: "max-w-full border-gray-600 border bg-b hover:bg-gray-900 p-4 rounded-lg h-auto super-rounded sm:col-span-2 lg:col-span-1",
          image: "https://ik.imagekit.io/9hpbqscxd/SG/image-85.jpg?updatedAt=1705798245623",
          title: "Empire of Caveine",
          desc: "Empire of Caveine page concept.",
          link: "https://caveine.glitch.me/",
          framework: ["Bootstrap", "HTML"],
          develop: ["website"],
      }, */
    ];

    return (
        <>
            <article id='project' className='mb-8 p-3' style={{ marginTop: 30 }}>
                <h3 id="Name" data-aos='fade-up' data-aos-easing='linear' className='text-6xl sm:text-8xl m-3 mb-4 text-gray-200' style={{ fontWeight: "bold" }}>
                    Projects
                </h3>
                <p className='text-lg text-gray-400 mb-6'> My collection of projects, each filled with countless cherished memories for Fathin.</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 pt-0'>
                    <a
                        href='https://github.com/mfathinhalim'
                        data-aos='zoom-in'
                        className='text-xl text-white text-center super-rounded p-8 h-300 flex hover:bg-gray-700 border-gray-600 border bg-b items-center justify-center'
                        style={{ textDecoration: "none !important" }}>
                        <i className='fa-brands fa-github mr-1' aria-hidden='true' />
                        GitHub
                    </a>
                    <a
                        href='https://play.google.com/store/apps/dev?id=5920539852130258160'
                        data-aos='zoom-in'
                        className='text-xl text-white text-center super-rounded p-8 h-300 flex hover:text-black hover:bg-orange-400 border-yellow-600 border bg-b items-center justify-center'
                        style={{ textDecoration: "none !important" }}>
                        <i className='fa-brands fa-google-play mr-1' aria-hidden='true' />
                        Play Store
                    </a>
                    <a
                        data-aos='zoom-in'
                        href='https://codepen.io/MFathin-Halim-Doma'
                        className='text-xl text-white text-center super-rounded p-8 h-300 flex items-center justify-center border bg-b border-green-700 hover:bg-green-700'
                        style={{ textDecoration: "none !important" }}>
                        <i className='fa-brands fa-codepen mr-1' aria-hidden='true' />
                        Codepen
                    </a>
                    {projects.map((project) => (
                        <div key={project.title} data-aos='fade-up' className={project.class}>
                            <div className='flex flex-wrap gap-2 mb-2'>
                                {project.develop.map((fw) => (
                                    <span key={fw} className='px-3 py-1 text-xs font-semibold text-gray-200 border-transparent bg-gray-700 border-2 rounded-lg'>
                                        {fw}
                                    </span>
                                ))}
                            </div>
                            <img
                                loading='lazy'
                                draggable='false'
                                className='rounded-lg mb-3'
                                src={project.image}
                                alt={project.title}
                                style={{ objectFit: "cover", height: 300 }}
                            />
                            <a id="Name" className='text-2xl ease-in-out delay-150 mt-3 text-gray-300 font-semibold decoration-blue-500' href={project.link}>
                                {project.title}
                            </a>
                            <div className='flex flex-wrap gap-2 mt-2 mb-2'>
                                {project.framework.map((fw) => (
                                    <span key={fw} className='px-3 py-1 text-xs font-semibold text-gray-200 border-gray-600 border rounded-full'>
                                        {fw}
                                    </span>
                                ))}
                            </div>
                            <p className='text-gray-400'>{project.desc}</p>
                            <a
                                href={project.link}
                                style={{ marginBottom: 2, marginTop: 20 }}
                                className='inline-flex justify-center hover:text-gray-200 items-center py-2 mt-3 px-5 text-base font-medium text-center text-gray-200 rounded-full border border-gray-600 hover:bg-gray-600 focus:ring-4 focus:ring-gray-700'>
                                Visit
                                <i className='fa-solid fa-arrow-up-right-from-square ml-2' />
                            </a>
                        </div>
                    ))}
                </div>
            </article>
        </>
    );
}

export default Portofolio;
