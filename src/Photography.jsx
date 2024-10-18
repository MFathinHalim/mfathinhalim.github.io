function Photography() {
  const Photographys = [
    "https://ik.imagekit.io/9hpbqscxd/SG/image-73.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-74.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-78.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-70.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-71.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-77.jpg?updatedAt=1705798245623",
  ];
  return (
    <>
      <article id="Photography" className=" p-3">
        <h3
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration={1000}
          className="text-4xl text-center sm:text-8xl m-3 text-gray-300"
          style={{ fontWeight: "bold" }}
        >
          Photos
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Photographys.map((Photography) => (
            <div key={Photography}>
              <img
                className="h-auto filter hover:cursor-zoom-in lg:grayscale hover:grayscale-0 h-full w-full rounded-lg"
                style={{objectFit: "cover"}}
                src={Photography}
                alt="image description"
              />
            </div>
          ))}
        </div>
        <a
          href="https://www.instagram.com/mfathin.halim/"
          className="border border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-gray-200 font-bold py-2 mt-3 px-4 rounded-lg inline-flex items-center"
        >
          <i className="fa-brands fa-instagram mr-2"></i> More at Instagram
        </a>
      </article>
    </>
  );
}

export default Photography;
