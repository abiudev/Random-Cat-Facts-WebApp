import { useState } from "react";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="bg-gray-600 relative mt-5">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center">
          <img src="/cat.png" alt="logo" className="h-8 w-8 mr-2" />
          <h1 className="font-sans font-bold ml-2 text-lg">
            CAT <span className="italic font-mukta text-black-400">FACTS</span>{" "}
            <span className="text-2xl text-maroon-400">+</span>
          </h1>
        </div>

        <div className="hidden md:flex justify-end space-x-4">
          <a
            href="https://github.com/abiudev/Random-Cat-Facts-WebApp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-400 rounded-lg px-2 py-1 font-roboto-condensed text-sm text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-green-500"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 rounded-lg px-2 py-1 font-roboto-condensed text-sm text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-blue-500"
          >
            Twitter
          </a>
        </div>
      </div>

      <div className="flex justify-center p-2 text-gray-600 text-xs">
        <p>&copy; {new Date().getFullYear()} CAT FACTS. All rights reserved.</p>
      </div>

      {isOpen && (
        <div className="md:hidden bg-yellow-400">
          <a
            href="https://github.com/abiudev/Random-Cat-Facts-WebApp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-400 rounded-lg px-2 py-1 font-roboto-condensed text-sm text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-green-500"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 rounded-lg px-2 py-1 font-roboto-condensed text-sm text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-blue-500"
          >
            Twitter
          </a>
        </div>
      )}
    </footer>
  );
}
