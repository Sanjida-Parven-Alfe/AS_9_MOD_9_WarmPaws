import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); 
  };

  return (
    <div className="min-h-[calc(100vh-20px)] flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 via-orange-100 to-rose-50 text-center p-4">
      <h1 className="text-6xl font-extrabold text-amber-900 mb-4">404</h1>
      <p className="text-2xl text-amber-800 mb-6">
        Oops! Page not found.
      </p>
      <p className="text-amber-700 mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={handleGoHome}
        className="bg-amber-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors shadow-md"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
