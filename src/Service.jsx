function Service() {
  return (
    <>
      <div
        id='services'
        className='relative px-3 py-4 md:py-9 md:px-8 super-rounded shadow-lg bg-gray-800 mt-4 bg-opacity-80 bg-blend-overlay bg-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl'
        style={{
          backgroundSize: "cover",
          backgroundImage: "url('https://ik.imagekit.io/9hpbqscxd/SG/image-55.jpg?updatedAt=1705798245623')",
        }}
        data-aos='zoom-in'>
        <div className='pb-3 pt-5 text-center'>
          <h3 id="Name" className='text-2xl md:text-4xl text-white font-bold drop-shadow-lg'>Unlock Your Website</h3>
          <h4 className='md:text-2xl mt-0 md:mt-2 text-gray-400 drop-shadow-lg font-light'>We create websites that take your dreams to the next level.</h4>
        </div>
        <div className='pb-5 text-center'>
          <a href='https://discordapp.com/users/1156486226094870569' className='inline-block px-6 py-3 mt-0 text-sm lg:text-lg font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-110 shadow-md'>
            <i className='fa-brands fa-discord' style={{ color: "white" }} /> Let's Build!
          </a>
          <a href='mailto:halimfathin7@gmail.com' className='inline-block px-6 py-3 my-0 mx-2 border-gray-500 text-sm lg:text-lg border-2 mt-0 text-lg font-semibold rounded-md text-gray-100 bg-transparent hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110 shadow-md'>
  <i className='fa-solid fa-envelope' /> Mail Now
</a>
<div className="flex flex-wrap justify-center gap-4 mt-4 sm:flex">
  <div className="hidden md:inline-flex items-center rounded-full border border-gray-500 px-4 ps-3 py-1 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors bg-transparent">
    <div className="h-1.5 w-1.5 rounded-full bg-blue-red/80 dark:bg-red-400/80 mr-2"></div> Location: Rejang Lebong
  </div>

  <div className="inline-flex items-center rounded-full border border-gray-500 px-4 py-1 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors bg-transparent text-white ps-3">
    <div className="h-1.5 w-1.5 rounded-full bg-blue-500/80 dark:bg-blue-400/80 mr-2"></div> Indie Developer
  </div>

  <div className="inline-flex items-center rounded-full border border-gray-500 px-4 py-1 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors border border-gray-300 bg-transparent ps-3">
    <div className="h-1.5 w-1.5 rounded-full bg-blue-green/80 dark:bg-green-400/80 mr-2"></div> Looking for Internship
  </div>
</div>


        </div>

      </div>
    </>
  );
}

export default Service;
