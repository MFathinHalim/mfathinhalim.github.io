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
      <div className="sticky flex flex-wrap items-center justify-between my-10 mb-0">
        <div className={` mr-0 mb-10 w-full md:block md:w-auto`}>
          <ul  className="font-medium flex  p-4 p-0 mt-4 border border-gray-100 rounded-lg  flex-row space-x-8 rtl:space-x-reverse mt-0 border-0 bg-transparent">
            <li>
              <a
                href="/"
                className={getLinkClassNames('/')}  // Dynamically add class based on current path
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/journey/"
                className={getLinkClassNames('/journey/')}  // Dynamically add class based on current path
              >
                Journey
              </a>
            </li>
            <li>
              <a
                href="https://discordapp.com/users/1156486226094870569"
                className={getLinkClassNames('https://discordapp.com/users/1156486226094870569')}  // Dynamically add class based on current path
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
