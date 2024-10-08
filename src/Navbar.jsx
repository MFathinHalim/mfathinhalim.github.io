function Navbar() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var navbar = document.getElementById("navbar");

    if (prevScrollpos > currentScrollPos - 5) {
      // Scroll ke atas, tampilkan navbar khusus HP
      navbar.style.top = "10px";
    } else {
      // Scroll ke n sembunyikan navbar khusus HP
      navbar.style.top = "-100px"; // Ubah sesuai dengan tinggi navbar
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <>
      <nav
        id="navbar"
        className="rounded-full border border-slate-600 shadow m-6 sticky top-3 backdrop-blur-lg mt-4 mx-auto"
        style={{
          zIndex: 600,
          width: "fit-content",
          background: "rgba(30, 41, 59, 0.4)",
        }}
      >
        <div className="transition-all justify-content-center p-4 pt-1 sm:pt-4 md:flex md:items-center md:justify-between">
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium super-rounded-full text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                style={{
                  zIndex: 1000,
                }}
                href="#who"
                className="text-1xl md:hover:pl-5 md:hover:pr-5 ease-in-out bg-gray-800 rounded-full border border-slate-800 p-2 super-rounded-full mt-3 font-semibold decoration-blue-500 me-4 md:me-6"
              >
                About
              </a>
            </li>
            <li>
              <a
                style={{
                  zIndex: 1000,
                }}
                href="#award"
                className="text-1xl md:hover:pl-5 md:hover:pr-5 ease-in-out md:hover:bg-gray-800 rounded-full p-2 super-rounded-full mt-3 font-semibold decoration-blue-500 me-4 md:me-6"
              >
                Awards
              </a>
            </li>
            <li>
              <a
                style={{
                  zIndex: 1000,
                }}
                href="#project"
                className="text-1xl md:hover:pl-5 md:hover:pr-5 ease-in-out md:hover:bg-gray-800 rounded-full p-2 super-rounded-full mt-3 font-semibold decoration-blue-500 me-4 md:me-6"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                style={{
                  zIndex: 1000,
                }}
                href="#services"
                className="text-1xl md:hover:pl-5 md:hover:pr-5 ease-in-out md:hover:bg-gray-800 rounded-full p-2 super-rounded-full mt-3 font-semibold decoration-blue-500 "
              >
                Service
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
