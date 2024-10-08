import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-yellow-400">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src="/cat.png" alt="logo" className="h-12 w-12 mr-2" />
          <h1 className="font-sans font-bold ml-2 text-2xl">
            CAT <span className="italic font-mukta text-black-400">FACTS</span>{" "}
            <span className="text-4xl text-maroon-400">+</span>
          </h1>
        </div>

        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden md:flex justify-end space-x-6">
          <ol className=" font-bold flex space-x-4 list-none font-roboto-condensed">
            <li>
              <a href="https://random-cat-facts-ten.vercel.app">Home</a>
            </li>
            <li>
              <a href="https://abiud.vercel.app" target="_blank">
                Developer
              </a>
            </li>
            <li>
              <a href="https://catfact.ninja" target="_blank">
                {" "}
                More
              </a>
            </li>
          </ol>
          <a
            href="https://github.com/abiudev/Random-Cat-Facts-WebApp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-400 rounded-lg px-3 py-1 font-roboto-condensed inline-block text-center"
          >
            {" "}
            Source Code{" "}
          </a>
          <a
            href="https://catfact.ninja"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 rounded-lg px-3 py-1 font-roboto-condensed inline-block text-center"
          >
            API 🔀
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-yellow-400">
          <ol className="space-y-2 list-none p-4 font-roboto-condensed">
            <li>
              <a href="https://random-cat-facts-ten.vercel.app">Home</a>
            </li>
            <li>
              <a href="https://abiud.vercel.app" target="_blank">
                Developer
              </a>
            </li>
            <li>
              <a href="https://catfact.ninja" target="_blank">
                {" "}
                More
              </a>
            </li>
          </ol>
          <a
            href="https://github.com/abiudev/Random-Cat-Facts-WebApp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-400  mr-3 ml-2 rounded-lg px-3 py-1 font-roboto-condensed inline-block text-center"
          >
            Source Code
          </a>
          <a
            href="https://catfact.ninja"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 rounded-lg px-3 py-1 font-roboto-condensed inline-block text-center"
          >
            API 🔀
          </a>
        </div>
      )}
    </header>
  );
}
