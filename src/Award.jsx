function Award() {
  const awards = [
    {
      name: "Award for the Rejang Language Dictionary Project",
      year: "2020",
      desc: `The Rejang Language Dictionary project preserves
        and promotes the community's linguistic heritage through research,
        collaboration, and the development of a comprehensive dictionary.
        The award recognizes dedication and innovation in
        creating a valuable resource for Rejang speakers and those
        interested in the region's linguistic diversity.`,
      link: "https://play.google.com/store/apps/details?id=org.kamusbahasarejang.kamusbahasarejang",
      img: [
        "https://play-lh.googleusercontent.com/UgCNG2x18CiA6nu4TUHwP9b-QhH3FnlU3WP0812FMMpRmBs6YO5phTLZ9PM3Ab5Jd2o=w2560-h1440-rw",
        "https://play-lh.googleusercontent.com/AleA5pJ6XfoXT1RtdvLw5U0oYccWrebhD5DNpFc7oTrcfPWxHvbZFmSGgKeJlS0Qtw=w2560-h1440-rw",
      ],
    },
  ];
  return (
    <>
      <article id="award" className="mb-8 p-3">
        <h1
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration={1000}
          className="text-4xl sm:text-8xl m-3 text-green-600"
          style={{
            marginTop: 120,
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          Award
        </h1>

        {awards.map((award) => (
          <div
            key={award.name}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            <section className="grid grid-cols-2 gap-4">
              {award.img.map((image) => (
                <img
                  key={image}
                  loading="lazy"
                  draggable="false"
                  className="mt-3 w-full h-full mx-auto sm:mx-0 m-3 super-rounded"
                  style={{ objectFit: "contain", height: 460 }}
                  src={image}
                  alt="M.Fathin Halim"
                  data-aos="fade-right"
                />
              ))}
            </section>
            <section className="p-3">
              <h6 className="text-2xl ease-in-out delay-150">{award.name}</h6>
              <p className="mt-3 mb-3">
                <strong>Year: </strong> {award.year}
              </p>
              <p className="text-justify">
                <strong>Description:</strong>
                {award.desc}
              </p>
              <a
                href={award.link}
                className="bg-gray-300 hover:bg-gray-400 border border-2 border-slate-700 text-gray-800 font-bold py-2 mt-3 px-4 super-rounded inline-flex items-center"
              >
                See The Application
              </a>
            </section>
          </div>
        ))}
      </article>
    </>
  );
}

export default Award;
