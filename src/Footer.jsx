function Footer(){
    return (
        <footer className="rounded-lg shadow m-4">
  <div className="w-full transition-all mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      Made By M.Fathin Halim
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <a
          href="#"
          className="hover:text-3xl ease-in-out delay-150 hover: mt-3 font-semibold decoration-blue-500 me-4 md:me-6"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#award"
          className="hover:text-2xl ease-in-out delay-150 hover: mt-3 font-semibold decoration-blue-500 me-4 md:me-6"
        >
          Awards
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="hover:text-2xl ease-in-out delay-150 hover: mt-3 font-semibold decoration-blue-500 me-4 md:me-6"
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="#services"
          className="hover:text-2xl ease-in-out delay-150 hover: mt-3 font-semibold decoration-blue-500"
        >
          Service
        </a>
      </li>
    </ul>
  </div>
</footer>

    )
}

export default Footer