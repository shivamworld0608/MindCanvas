import { useState } from "react";
import Login from "./login";

const HeroSection = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  return (
    <div className="flex flex-col items-center mt-8 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Welcome to
        <span className="bg-custom-red text-transparent bg-clip-text">
          {" "}MindCanvas
        </span>
      </h1>
      <p className="mt-14 text-xl text-center text-neutral-500 max-w-4xl">
        Where
        <span className="bg-custom-red to-red-800 text-transparent bg-clip-text">{" "}Thoughts </span>  
        become Art
        <span className="bg-custom-red to-red-800 text-transparent bg-clip-text">{" "}... </span> 
      </p>
      <div className="flex justify-center my-10">
        <button
          onClick={openLoginModal}
          className="py-3 px-2 mx-3 rounded-md border border-gray-300 hover:bg-custom-red hover:text-white hover:border-white"
        >
          Get Started
        </button>
      </div>

      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <button
              onClick={closeLoginModal}
              className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
            >
              &times;
            </button>
            <Login closeModal={closeLoginModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
