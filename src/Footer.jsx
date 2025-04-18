function Footer() {
  return (
    <>
      <footer className="border-t border-gray-700/50 bg-black text-gray-300 py-12 mt-16">
        <div className="px-5 md:px-32 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-white text-xl font-bold mb-2">
              M. Fathin Halim
            </h2>
            <p className="text-sm mb-4 text-justify">
              an Indonesian developer very love programming but sometimes
              capturing silly bugs.
            </p>
            <a
              href="mailto:halimfathin7@gmail.com"
              className="inline-flex items-center px-4 py-2 border border-white rounded-md text-white hover:bg-white hover:text-black transition-all text-sm font-semibold"
            >
              Let's collaborate
              <span className="ml-2">↗</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-3">Navigation</h3>
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
            <h3 className="text-white font-semibold mb-3">Favorites</h3>
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
            <h3 className="text-white font-semibold mb-3">Connect</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <i className="fa-brands fa-github text-white"></i>
                <a
                  href="https://github.com/MFathinHalim"
                  target="_blank"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-brands fa-instagram text-white"></i>
                <a
                  href="https://instagram.com/@mfathin_halim"
                  target="_blank"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-brands fa-linkedin text-white"></i>
                <a
                  href="https://linkedin.com/in/mfathinhalim"
                  target="_blank"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-white"></i>
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

        <div className="border-t border-gray-700/50 mt-12 pt-6 text-center text-sm text-gray-500">
          <p className="mb-1">
            © {new Date().getFullYear()} M. Fathin Halim. All rights reserved.
          </p>
          <a href="https://mahiru-istri-fathin.glitch.me">
            Mahiru is my wife ✨
          </a>
          <div className="mt-7 flex justify-center">
            <img
              src="https://s1.zerochan.net/Shiina.Mahiru.600.3898961.jpg"
              alt="Mahiru"
              style={{
                width: '400px',
                height: '250px',
                objectFit: 'cover'
              }}
              className="rounded-2xl border border-gray-600 shadow-md"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
