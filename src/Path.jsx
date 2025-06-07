function Path() {
  // Data timeline dalam bentuk array objek
  const timelineData = [
    {
      date: "Late 2020",
      title: "Started Coding",
      description:
        "Began my coding journey with interactive lessons on Code.org.",
    },
    {
      date: "2021",
      title: "Python and App Development",
      description:
        "Learned Python and created a Rejang Language Dictionary application.",
    },
    {
      date: "2022",
      title: "Java, C#, and Unity",
      description:
        "Expanded skills with Java and C# to enhance my app and experimented with Unity for game development.",
    },
    {
      date: "Late 2022",
      title: "JavaScript Projects",
      description:
        "Learned JavaScript and developed multiple impressive projects.",
    },
    {
      date: "2023",
      title: "React and Rejangpedia",
      description:
        "Learned React, updated my websites, and built Rejangpedia. Participated in Garuda Hack 3.0.",
    },
    {
      date: "2024",
      title: "Next.js",
      description:
        "Started learning Next.js to build more advanced and optimized web projects.",
    },
  ];

  return (
    <>
      <h3
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration={1000}
        className="text-4xl my-8 "
        style={{ fontWeight: "bold" }}
      >
        Timeline
      </h3>
      <ol className="relative border-s border-gray-300 dark:border-gray-600">
        {timelineData.map((item, index) => (
          <li key={index} className="mb-5 ms-4">
            {/* Lingkaran di timeline */}
            <div
              className={`absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-black`}
            />
            {/* Tanggal timeline */}
            <time
              className={`mb-1 text-sm font-bold leading-none p-1 rounded-md ${
                index === 0
                  ? "border border-black px-2 text-black"
                  : "bg-gray-600 text-white"
              }`}
            >
              {item.date}
            </time>
            {/* Judul dan deskripsi timeline */}
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-base font-normal text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}

export default Path;
