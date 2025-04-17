function Footer() {
  return (
    <>
      <div className='flex flex-wrap mt-9'>
        {/* Left Section with Image */}
        <div  className='w-full md:w-1/2 pt-3 mb-3'>
          <h3 id="Name" className='text-3xl sm:text-4xl text-white text-left font-bold drop-shadow-lg'>
            <p id="Name" className='text-sm bg-white text-black p-1 mb-2 px-2 ps-2 rounded-lg font-extrabold' style={{ width: "fit-content" }}>
              FAQ
            </p>
            Things You Are Probably Wondering
          </h3>
        </div>

        {/* Right Section with Q&A and Icons */}
        <div className='w-full md:w-1/2' data-aos='fade-up'>
          <div className='space-y-4'>
            <div className='hover:-translate-y-1 transition-all border-2 border-gray-600 p-4 rounded-xl shadow-md flex items-center'>
              <i className='fa-solid fa-code text-blue-400 text-3xl mr-4'></i>
              <div>
                <h4 className='text-xl text-white font-bold drop-shadow-lg'>Does Fathin&apos;s parent also programmers?</h4>
                <p className='text-white mt-2'>No, they are not programmers :)</p>
              </div>
            </div>
            <div className='hover:-translate-y-1 transition-all border-2 border-gray-600 p-4 rounded-xl shadow-md flex items-center'>
              <i className='fa-solid fa-clock text-green-400 text-4xl mr-4'></i>
              <div>
                <h4 className='text-xl text-white font-bold drop-shadow-lg'>Since when did Fathin learn programming?</h4>
                <p className='text-white mt-2'>Since 2020, when Fathin was in 5th grade.</p>
              </div>
            </div>
            <div className='hover:-translate-y-1 transition-all border-2 border-gray-600 p-4 rounded-xl shadow-md flex items-center'>
              <i className='fa-solid fa-gamepad text-red-400 text-3xl mr-4'></i>
              <div>
                <h4 className='text-xl text-white font-bold drop-shadow-lg'>Why did Fathin study programming?</h4>
                <p className='text-white mt-2'>Because my parents said, &quot;Rather than being a gamer, how about you make the game?&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className='rounded-lg m-4'>
        <div className='w-full transition-all mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>Made By M.Fathin Halim</span>
          <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
            <li>
              <a href='/' className='hover:text-xl ease-in-out delay-150 mt-3 font-semibold decoration-blue-500 me-4 md:me-6'>
                Home
              </a>
            </li>
            <li>
              <a href='/journey/' className='hover:text-xl ease-in-out delay-150 mt-3 font-semibold decoration-blue-500 me-4 md:me-6'>
                Journey
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
