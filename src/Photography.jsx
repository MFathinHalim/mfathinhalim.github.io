function Photography() {
  const Photographys = [
    "https://ik.imagekit.io/9hpbqscxd/SG/image-58.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-57.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-56.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-55.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-54.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-53.jpg?updatedAt=1705798245623",
  ];
  return (
    <>
      <article id="Photography" className="mb-8 p-3">
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
                className="h-auto filter hover:cursor-zoom-in lg:grayscale hover:grayscale-0 max-w-full rounded-lg"
                src={Photography}
                alt="image description"
              />
            </div>
          ))}
        </div>
        <a
          href="https://www.instagram.com/mfathin_halim/"
          className="border border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-gray-200 font-bold py-2 mt-3 px-4 rounded-lg inline-flex items-center"
        >
          <i className="fa-brands fa-instagram mr-2"></i> More at Instagram
        </a>
      </article>
    </>
  );
}

export default Photography;
