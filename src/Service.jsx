import React from "react";

function Service() {
  const messages = [
    { text: "Hey there! I want to ask you something", sender: "user" },
    { text: "Hey, what can I do for you?", sender: "other" },
    { text: "Alright, how about we build something super cool together?", sender: "user" },
    { text: "Okay, let's do it! What kind of awesome project are you thinking of?", sender: "other" },
  ];

  return (
    <div className="flex justify-center mb-32">
      <div className="w-full bg-[#2b2d31] rounded-2xl shadow-lg flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#1e1f22] px-6 py-4 border-b border-[#3d3f43]">
          <h1 className="text-white text-xl font-semibold text-center">Our conversation maybe?</h1>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 scrollbar-thin scrollbar-thumb-[#404249]">
          {messages.map((message, index) => (
            <div key={index} className="flex items-start gap-3">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={message.sender === "other" ? "https://ik.imagekit.io/9hpbqscxd/SG/image-100.jpg?updatedAt=1705798245623" : "https://i.pinimg.com/736x/1a/34/84/1a3484c1d23997cbbc958383874d411c.jpg"}
                  alt="Bot Avatar"
                />
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">
                    {message.sender === "user" ? "You" : "Your Future Dev"}
                  </span>
                  <span className="text-xs text-gray-400">just now</span>
                </div>
                <div
                  className={`text-sm whitespace-pre-wrap leading-relaxed`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="bg-[#1e1f22] px-6 py-4 border-t border-[#3d3f43] text-center">
          <a
            href="https://discordapp.com/users/1156486226094870569"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition"
          >
            Chat with me
            <i className="fa-brands fa-discord ml-2 text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Service;
