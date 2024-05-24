function Service() {
  return (
    <>
      <h3
        className="text-4xl sm:text-7xl text-indigo-400 text-center mt-8 "
        style={{ fontWeight: "bold" }}
      >
        Service
      </h3>

      <div
        id="services"
        className="mb-8 p-4 pb-6 rounded-xl"
        data-aos="zoom-in"
      >
        <div className="pb-3 ">
          <p>
            Want to have a website like M.Fathin Halim? We provide professional
            quality website development services with attractive designs.
            Discuss your needs with M.Fathin Halim through Discord or Email!
          </p>
          <ul className="p-4 ">
            <li>An Application with Simple Backend</li>
            <li>Website for a class or school</li>
            <li>Personal Website</li>
            <li>Simple Portfolio</li>
            <li>Team Website</li>
            <li>And more</li>
          </ul>
          <p>
            We use Express-based NodeJS as the Backend and Bootstrap for styling
            on the Frontend to create responsive and attractive websites.
          </p>
        </div>
        <div className="text-center pt-3">
          <a
            href="https://discordapp.com/users/1156486226094870569"
            className="button p-3 m-3 rounded-full text-white hover:bg-indigo-600 bg-indigo-500 transition-all duration-300"
          >
            <i style={{ color: "white" }} className="fa-brands fa-discord" />{" "}
            Chat on Discord!
          </a>
        </div>
      </div>
    </>
  );
}

export default Service;
