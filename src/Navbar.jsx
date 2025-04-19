import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Get the current path from window.location.pathname
  const currentPath = window.location.pathname;

  const getLinkClassNames = (path) => {
    return currentPath === path
      ? 'block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 font-bold'  // Bold if current page
      : 'block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-400 md:p-0 dark:text-white md:dark:hover:bg-transparent';  // Normal if not
  };

  return (
    <nav>
      <div className="sticky w-screen-xl flex flex-wrap items-center justify-between mt-64">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span id="Name" className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          </span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                id="Name" 
                href="/"
                className={getLinkClassNames('/')}  // Dynamically add class based on current path
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                id="Name" 
                href="/journey/"
                className={getLinkClassNames('/journey/')}  // Dynamically add class based on current path
              >
                Journey
              </a>
            </li>
            <li>
              <a
                id="Name" 
                href="https://discordapp.com/users/1156486226094870569"
                className={getLinkClassNames('https://discordapp.com/users/1156486226094870569')}  // Dynamically add class based on current path
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
