function Footer() {
  return (
    <>
      <footer className="text-gray-800 dark:text-stone-300 pb-5 pt-16">
        <div className="px-5 md:px-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className=" text-xl font-bold mb-2 dark:text-white">
              M. Fathin Halim
            </h2>
            <p className="text-sm mb-4 text-justify">
              a developer very love programming but sometimes capturing silly
              bugs.
            </p>
            <a
              href="mailto:halimfathin7@gmail.com"
              className="inline-flex items-center px-4 py-2 border border-black dark:border-stone-600 rounded-md  hover:bg-white hover:text-black transition-all text-sm font-semibold"
            >
              Let's collaborate
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className=" font-semibold mb-3 dark:text-white">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/journey/" className="hover:underline">
                  Journey
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Skills / Focus */}
          <div>
            <h3 className=" font-semibold mb-3 dark:text-white">Favorites</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://kamusrejang.vercel.app"
                  className="hover:underline"
                >
                  Kamus Bahasa Rejang
                </a>
              </li>
              <li>
                <a
                  href="https://rejangpedia.vercel.app"
                  className="hover:underline"
                >
                  rejangpedia
                </a>
              </li>
              <li>
                <a
                  href="https://storybook-id.vercel.app"
                  className="hover:underline"
                >
                  StoryBook
                </a>
              </li>
              <li>
                <a
                  href="https://cardcozy.vercel.app"
                  className="hover:underline"
                >
                  CardCozy
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className=" font-semibold mb-3 dark:text-white">Connect</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <i className="fa-brands fa-github "></i>
                <a
                  href="https://github.com/MFathinHalim"
                  target="_blank"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-brands fa-instagram "></i>
                <a
                  href="https://instagram.com/@mfathin_halim"
                  target="_blank"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-brands fa-linkedin "></i>
                <a
                  href="https://linkedin.com/in/mfathinhalim"
                  target="_blank"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-envelope "></i>
                <a
                  href="mailto:halimfathin7@gmail.com"
                  className="hover:underline"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-gray-700/50 pt-14 text-center text-sm text-gray-500 dark:text-stone-400">
          <p className="mb-1">
            © {new Date().getFullYear()} M. Fathin Halim. All rights reserved.
          </p>
          <a className="mb-0 pb-0" href="https://mahiru-istri-fathin.glitch.me">
            Mahiru is my wife ✨
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
