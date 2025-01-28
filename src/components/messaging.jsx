import React, { useState } from "react";
import Layout from "./logincomponents/layout";
import Backarrow from "./logincomponents/backarrow";

const Messaging = () => {
  const [messages, setMessages] = useState([
    { text: "I would like to learn more about my medication", sender: "me", time: "12:30 PM" },
    { text: "Sure, let me help you with that.", sender: "other", time: "12:32 PM" },
  ]);

  const [inputText, setInputText] = useState("");

  const [selectedChatIndex, setSelectedChatIndex] = useState(0);

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      const newMessage = {
        text: inputText,
        sender: "me",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages([...messages, newMessage]);
      setInputText("");
    }
  };

  const obj = [
    {
      label: "Charlotte Mathis",
      time: "12:03 PM",
      message: "Hi there, just wanted to check ",
    },
    {
      label: "James White",
      time: "11:45 AM",
      message: "Can you share the details?",
    },
    {
      label: "Maria Lopez",
      time: "9:30 AM",
      message: "Let me know when you're free.",
    },
    {
      label: "Maria Lopez",
      time: "9:30 AM",
      message: "Let me know when you're free.",
    },
    {
      label: "Maria Lopez",
      time: "9:30 AM",
      message: "Let me know when you're free.",
    },
  ];

  return (
    <Layout>
      <div className="p-5">
        <div className="flex flex-row justify-between items-center mt-4">
          <div className="flex flex-row items-center gap-3">

          <Backarrow hrf="/analytics"/>
          <h1 className="text-4xl font-bold font-title">Messaging</h1>
          </div>
          <button
            className="border p-2 w-32 bg-blue-900 text-white rounded-md hover:bg-blue-700 font-title flex flex-row gap-1"
          >
            <div>
              <img src="plus.png" alt="" />
            </div>
            Add User
          </button>
        </div>
        <div className="relative w-96 my-4">
          <input
            type="text"
            placeholder="Search here"
            className="border p-3 rounded-2xl px-6 pl-10 w-full"
          />
          <svg
            className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 4a7 7 0 1 0 0 14a7 7 0 0 0 0-14zm8.5 15.5l-4-4"
            />
          </svg>
        </div>
        <div className="bg-white my-11 rounded-md">
          <div className="flex flex-row">
            <aside className="xl:w-5/12 w-6/12 bg-white">
              {obj.map((item, index) => (
                <div
                  key={index}
                  className={`flex xl:flex-row flex-col xl:p-5 p-2 gap-2 cursor-pointer w-full ${
                    selectedChatIndex === index ? "bg-red-50" : ""
                  }`}
                  onClick={() => setSelectedChatIndex(index)}
                >
                  <div>
                    <img src="/Ellipse 151.png" alt="img" />
                  </div>
                  <div className="mb-3">
                    <div className="flex lg:flex-row flex-col gap-2 lg:justify-between lg:items-center">
                      <h1>{item.label}</h1>
                      <p className="text-gray-400 text-sm">{item.time}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </aside>
            <div className="w-full">
              <div className="w-full flex flex-col">
                <div className="flex flex-row border border-gray-100 lg:w-full p-3 gap-2" >
                  <img src="/Ellipse 151.png" alt="img" />
                  <div>
                    <h1>{obj[selectedChatIndex]?.label}</h1>
                    <p>Online</p>
                  </div>
                </div>
                <div className="border flex flex-col justify-between gap-12 h-screen">
                  <div className="h-screen overflow-y-auto p-5 bg-white">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          message.sender === "me" ? "justify-end" : "justify-start"
                        } p-2`}
                      >
                        <div className="flex flex-col">
                          <div
                            className={`border flex w-80 p-4 ${
                              message.sender === "me"
                                ? "bg-blue-900 text-white rounded-l-lg rounded-tr-lg"
                                : "bg-gray-400 text-white rounded-r-lg rounded-tl-lg"
                            }`}
                          >
                            <p>{message.text}</p>
                          </div>
                          <p
                            className={`text-sm text-gray-400 flex ${
                              message.sender === "me" ? "justify-end" : "justify-start"
                            }`}
                          >
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-2">
                    <div className="relative w-full">
                      <input
                        className="border p-4 w-full rounded-xl pr-20"
                        type="text"
                        placeholder="Enter the Text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                      />
                      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex gap-3">
                        <img
                          src="/face-wink.png"
                          alt="Happy Emoji"
                          className="w-6 h-6"
                        />
                        <img
                          src="/send-03.png"
                          alt="Message Send Icon"
                          className="w-6 h-6 cursor-pointer"
                          onClick={handleSendMessage}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Messaging;
