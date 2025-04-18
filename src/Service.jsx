import React from "react";

function Service() {
  const messages = [
    { text: "Hey there! I want to ask you something", sender: "user" },
    { text: "Hey, what can I do for you?", sender: "other" },
    { text: "Alright, how about we build something super cool together?", sender: "user" },
    { text: "Okay, let's do it! What kind of awesome project are you thinking of?", sender: "other" },
    // You can add more messages here!
  ];

  return (
    <div className="flex flex-col items-center justify-center md:border border-gray-600 mt-5 rounded-lg"> {/* Added min-h-screen and bg-gray-50 for better visual */}
      <div className="space-y-4 my-20 text-left w-screen md:w-[40%] bg-black md:border md:border-neutral-600 md:p-6 md:py-8"> {/* Removed text-center here */}
        <h1 className="text-4xl text-center mb-8" id="Name">
          Let's Talk!
        </h1>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-2.5 ${
              message.sender === "user" ? "justify-end" : ""
            }`}
          >
            {message.sender === "other" && (
              <img
                className="w-8 h-8 rounded-full"
                src="https://ik.imagekit.io/9hpbqscxd/SG/image-100.jpg?updatedAt=1705798245623"
                alt="Chat Bot's image"
              />
            )}
            <div
              className={`flex flex-col gap-1 w-fit max-w-[320px] ${
                message.sender === "user" ? "items-end" : ""
              }`}
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {message.sender === "user" ? "You" : "Your Future Dev"}
                </span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {/* Maybe add a playful "just now" */}
                </span>
              </div>
              <div
                className={`flex flex-col leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl dark:bg-gray-700 ${
                  message.sender === "user"
                    ? "bg-blue-100 dark:bg-blue-600 text-blue-900 dark:text-white rounded-tl-xl"
                    : "bg-gray-100 dark:bg-gray-700 rounded-tr-xl"
                }`}
              >
                <p className="font-normal">{message.text}</p>
              </div>
              {message.sender === "other" && (
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Seen
                </span>
              )}
            </div>
            {message.sender === "user" && (
              <img
                className="w-8 h-8 rounded-full"
                src="https://i.pinimg.com/736x/1a/34/84/1a3484c1d23997cbbc958383874d411c.jpg"
                alt="Your image"
              />
            )}
          </div>
        ))}
        <div className="text-center"> {/* Added a container to center the button */}
          <a
            href="https://discordapp.com/users/1156486226094870569"
            className="transition ease-in-out delay-150 hover:-translate-y-1 rounded-md md-hover:scale-110 duration-300 inline-flex justify-center items-center py-4 px-6 text-xl sm:ms-4 font-medium text-center text-white bg-indigo-500 hover:bg-indigo-300 focus:ring-4 ring-purple-300"
          >
            Chat with me on Discord
            <i className="fa-brands fa-discord ml-2" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Service;