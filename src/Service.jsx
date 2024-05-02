function Service() {
  return (
    <>
      <div id="services" className="mb-8 " data-aos="zoom-in">
        <div className="p-3 mb-3">
          <h1
            className="text-4xl sm:text-7xl text-blue-400 text-center"
            style={{
              marginTop: 50,
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            Service
          </h1>
          <hr className="mt-3 mb-3" />
          <p>
            Want to have a website like M.Fathin Halim? We provide professional
            quality website development services with attractive designs.
            Discuss your needs with M.Fathin Halim through Discord or Email!
          </p>
          <ul className="p-4 text-left">
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
        <a
          href="https://discordapp.com/users/1156486226094870569"
          className="button p-3 m-3 rounded-lg text-white hover:bg-indigo-800 bg-indigo-600 transition-all duration-300"
          style={{
            animation: "glowing 5000ms infinite",
          }}
        >
          <i style={{ color: "white" }} className="fa-brands fa-discord" />{" "}
          Interested? Chat on Discord!
        </a>
      </div>
    </>
  );
}

export default Service;
