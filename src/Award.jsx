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
    {
      name: "1st place dimsa fair 2021 social sciences branch",
      year: "2021",
      desc: `M. Fathin Halim won 1st place in the 2021 DIMSA Fair for the Social Sciences category. DIMSA Fair is a National Science Olympiad (OSN) organized by DIMSA, which gathers participants from all over Indonesia to compete in various branches of science, including Social Sciences.`,
      link: "https://www.youtube.com/watch?v=QNrdu9Tzrmo",
      img: [
        "https://ik.imagekit.io/9hpbqscxd/SG/image-89.jpg?updatedAt=1705798245623"
      ],
    },
  ];
  return (
    <>
      <article id="award" className="mb-8 p-3">
        <h3
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration={1000}
          id="Name"
          className="text-4xl text-center text-white sm:text-8xl m-3"
        >
          Award
        </h3>
        <p className="text-lg text-center text-gray-400 mb-6">  Acknowledging achievements and milestones.</p>


        {awards.map((award) => (
          <>
          <div
            key={award.name}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            <section 
              className={`grid grid-cols-${award.img.length} gap-4`} // Set grid columns dynamically based on number of images
            >
          {award.img.map((image) => (
              <img
                loading="lazy"
                draggable="false"
                className="mt-3 w-full h-full mx-auto sm:mx-0 m-3 super-rounded"
                style={{ objectFit: "cover", maxHeight: 460 }}
                src={image}
                data-aos="fade-right"
              />
            ))}
            </section>

            <section className="p-3">
              <h6 className="text-2xl ease-in-out delay-150">{award.name}</h6>
              <p className="mt-3 mb-3">
                <strong className="text-sky-400">Year: </strong> {award.year}
              </p>
              <p className="text-justify">
                <strong className="text-sky-400">Description:</strong>
                {award.desc}
              </p>
              <a
                href={award.link}
                className="bg-gray-300 hover:bg-gray-400 border border-2 border-slate-700 text-gray-800 font-bold py-2 mt-3 px-4 rounded-full inline-flex items-center"
              >
                Link
              </a>
            </section>
            
          </div>
          <hr className="w-full h-1 mx-auto bg-gray-700 border-0 rounded md:my-10" />
          </>
        ))}
      </article>
    </>
  );
}

export default Award;
