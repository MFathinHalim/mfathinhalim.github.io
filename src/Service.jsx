function Service() {
  return (
    <>
      <div
        id='services'
        className='relative p-8 pb-8 rounded-3xl shadow-lg bg-gray-800 mt-4 bg-opacity-80 bg-blend-overlay bg-center bg-fixed transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl'
        style={{
          backgroundImage: "url('https://ik.imagekit.io/9hpbqscxd/SG/image-55.jpg?updatedAt=1705798245623')",
        }}
        data-aos='zoom-in'>
        <div className='pb-6 text-center pt-8'>
          <h3 className='text-3xl sm:text-4xl mt-6 text-white font-bold drop-shadow-lg'>Unlock Your Website</h3>
          <h4 className='text-1xl sm:text-4xl mt-4 text-gray-400 font-bold drop-shadow-lg font-light'>We create websites that take your dreams to the next level.</h4>
        </div>
        <div className='text-center pb-9'>
          <a href='https://discordapp.com/users/1156486226094870569' className='inline-block px-6 py-3 m-3 mt-0 text-lg font-semibold rounded-full text-white bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-110 shadow-md'>
            <i className='fa-brands fa-discord' style={{ color: "white" }} /> Let's Build!
          </a>
          <a href='mailto:halimfathin7@gmail.com' className='hidden sm:inline-block px-6 py-3 m-3 ms-2 border-gray-500 border-2 mt-0 text-lg font-semibold rounded-full text-gray-100 bg-transparent hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110 shadow-md'>
  <i className='fa-solid fa-envelope' /> Mail Now
</a>
<div className="flex flex-wrap justify-center gap-4 mt-4 hidden sm:flex">
  <div className="inline-flex items-center rounded-full border border-gray-500 px-4 ps-3 py-1 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors bg-transparent">
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
