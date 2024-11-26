function Path() {
  return (
    <>
      <h3
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration={1000}
        className="text-4xl text-center sm:text-8xl m-3 text-gray-300 mt-14"
        style={{ fontWeight: "bold" }}
      >
        My Journey
      </h3>
      <div class="mt-12 flex justify-center gap-2"><span class="h-1 w-20 bg-gray-200 rounded-full"></span><span class="h-1 w-10 bg-gray-200/30 rounded-full"></span><span class="h-1 w-5 bg-gray-200/10 rounded-full"></span></div>      <ol className="relative border-s border-gray-300 dark:border-gray-600">
        <li className="mb-5 ms-4">
          <div className="absolute w-3 h-3 bg-orange-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900" />
          <time className="mb-1 text-sm font-normal leading-none text-orange-300">
            Late 2020
          </time>
          <h3 className="text-lg font-semibold text-white">
            Started Coding
          </h3>
          <p className="text-base font-normal text-gray-700 dark:text-gray-400">
            Began my coding journey with interactive lessons on Code.org.
          </p>
        </li>
        <li className="mb-5 ms-4">
          <div className="absolute w-3 h-3 bg-teal-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900" />
          <time className="mb-1 text-sm font-normal leading-none text-teal-300">
            2021
          </time>
          <h3 className="text-lg font-semibold text-white">
            Python and App Development
          </h3>
          <p className="text-base font-normal text-gray-700 dark:text-gray-400">
            Learned Python and created a Rejang Language Dictionary application.
          </p>
        </li>
        <li className="mb-5 ms-4">
          <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900" />
          <time className="mb-1 text-sm font-normal leading-none text-blue-300">
            2022
          </time>
          <h3 className="text-lg font-semibold text-white">
            Java, C#, and Unity
          </h3>
          <p className="text-base font-normal text-gray-700 dark:text-gray-400">
            Expanded skills with Java and C# to enhance my app and experimented with Unity for game development.
          </p>
        </li>
        <li className="mb-5 ms-4">
          <div className="absolute w-3 h-3 bg-green-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900" />
          <time className="mb-1 text-sm font-normal leading-none text-green-300">
            Late 2022
          </time>
          <h3 className="text-lg font-semibold text-white">
            JavaScript Projects
          </h3>
          <p className="text-base font-normal text-gray-700 dark:text-gray-400">
            Learned JavaScript and developed multiple impressive projects.
          </p>
        </li>
        <li className="mb-5 ms-4">
          <div className="absolute w-3 h-3 bg-purple-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900" />
          <time className="mb-1 text-sm font-normal leading-none text-purple-300">
            2023
          </time>
          <h3 className="text-lg font-semibold text-white">
            React and Rejangpedia
          </h3>
          <p className="text-base font-normal text-gray-700 dark:text-gray-400">
            Learned React, updated my websites, and built Rejangpedia. Participated in Garuda Hack 3.0.
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-pink-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900" />
          <time className="mb-1 text-sm font-normal leading-none text-pink-300">
            2024
          </time>
          <h3 className="text-lg font-semibold text-white">
            Next.js
          </h3>
          <p className="text-base font-normal text-gray-700 dark:text-gray-400">
            Started learning Next.js to build more advanced and optimized web projects.
          </p>
        </li>
      </ol>
    </>
  );
}

export default Path;
