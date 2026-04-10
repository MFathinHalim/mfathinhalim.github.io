function Path() {
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
    {
      date: "2025",
      title: "Present",
      description:
        "Still learning and create connection with other cool developer. At may 2025, i also participated on Google Developer Group Bandung to learning something new and meet with the developer community.",
    },
  ];

  return (
    <>
      <h3
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration={1000}
        className="text-4xl my-8 dark:text-white"
        style={{ fontWeight: "bold" }}
      >
        Timeline
      </h3>
      <div className="flex flex-row-reverse gap-1 sm:gap-0">
        <img
          src="/Fathins/Fathin (8).png"
          className="hidden md:block border-yellow-600 dark:border-yellow-300 border border-2"
          style={{
            rotate: "3deg",
            height: "500px",
            zIndex: 50,
          }}
        />
        <ol className="relative border-s border-gray-300">
          {timelineData.map((item, index) => (
            <li key={index} className="mb-5 ms-4">
              <div
                className={`absolute w-3 h-3 bg-black dark:bg-stone-600 rounded-full mt-1.5 -start-1.5 border border-black`}
              />
              <time
                className={`mb-1 text-sm font-bold leading-none p-1 rounded-md ${
                  index === 0 || index === timelineData.length - 1
                    ? "border border-black px-2 text-black dark:bg-white"
                    : "bg-gray-600 text-white dark:bg-white/40 dark:text-white"
                }`}
              >
                {item.date}
              </time>
              <h3 className="text-lg mt-1 font-semibold dark:text-white">
                {item.title}
              </h3>
              <p className="text-base font-normal text-gray-700 dark:text-stone-300/80">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Path;
