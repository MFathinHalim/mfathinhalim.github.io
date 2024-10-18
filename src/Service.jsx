function Service() {
  return (
    <>
      <div
        id='services'
        className='relative p-8 pb-8 rounded-3xl shadow-lg bg-gray-800 mt-4 bg-opacity-70 bg-blend-overlay bg-center bg-fixed transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl'
        style={{
          backgroundImage: "url('https://ik.imagekit.io/9hpbqscxd/SG/image-55.jpg?updatedAt=1705798245623')",
        }}
        data-aos='zoom-in'>
        <div className='pb-6 text-center pt-8'>
          <h3 className='text-3xl sm:text-4xl mt-6 text-white font-bold drop-shadow-lg'>Unlock Your Website</h3>
          <h4 className='text-1xl sm:text-4xl mt-4 text-white font-bold drop-shadow-lg font-light'>We create websites that take your dreams to the next level.</h4>
          <p className='mt-4 text-white'>Ready to turn your ideas into a stunning website?</p>
        </div>
        <div className='text-center pb-9'>
          <a href='https://discordapp.com/users/1156486226094870569' className='inline-block px-6 py-3 m-3 mt-0 text-lg font-semibold rounded-full text-white bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-110 shadow-md'>
            <i className='fa-brands fa-discord' style={{ color: "white" }} /> Let's Build!
          </a>
        </div>
      </div>
    </>
  );
}

export default Service;
