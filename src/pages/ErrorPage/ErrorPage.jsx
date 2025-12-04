import React from "react";
import { useNavigate } from "react-router-dom";
import errorImg from "../../assets/Pet_Care_Logo_V3.png"; // Using logo or you can use a specific error image

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf8f6] text-center p-6">
      <div className="animate__animated animate__bounceIn">
        <h1 className="text-9xl font-extrabold text-amber-200">404</h1>
      </div>
      
      <div className="absolute mt-[-50px]">
         <img src={errorImg} alt="Sad Pet" className="w-32 h-32 opacity-80 mx-auto grayscale" />
      </div>

      <h2 className="text-3xl font-bold text-amber-900 mt-10 mb-2">Uh-oh! Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        We can't seem to find the page you're looking for. It might have been moved or doesn't exist.
      </p>

      <button
        onClick={() => navigate("/")}
        className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-full shadow-lg hover:bg-amber-700 transition hover:shadow-xl"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;