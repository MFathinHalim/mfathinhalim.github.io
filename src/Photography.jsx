function Photography() {
  const Photographys = [
    "https://ik.imagekit.io/9hpbqscxd/SG/image-73.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-74.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-78.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-70.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-76.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-101.jpg?updatedAt=1705798245623",
    
    "https://ik.imagekit.io/9hpbqscxd/SG/image-96.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-97.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-77.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-75.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-71.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-80.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-71.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-83.jpg?updatedAt=1705798245623",
    "https://ik.imagekit.io/9hpbqscxd/SG/image-89.jpg?updatedAt=1705798245623",

    
  ];
  return (
    <>
        <h2 id="Name" className="text-7xl text-center mt-32">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 auto-rows-[150px] mt-9">
  {Photographys.map((photo, i) => (
    <div
      key={i}
      className={`relative overflow-hidden rounded-2xl shadow-md transition-all duration-300  group ${
        i % 5 === 0
          ? "col-span-2 row-span-2"
          : "col-span-1 row-span-1"
      }`}
      data-aos="zoom-in"
    >
      <img
        src={photo}
        alt={`photo-${i}`}
        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  ))}
</div>

    </>
  );
}

export default Photography;
