import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-5xl font-extrabold mb-4 text-red-500">Oops! 😢</h1>
      <p className="text-xl text-gray-700 mb-2">
        {error?.statusText || "The page you are looking for does not exist."}
      </p>
      <p className="text-gray-500 mb-6 text-lg">{error?.status || 404}</p>

      <Link
        to="/"
        className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition font-semibold"
      >
        🏠 Go Back Home
      </Link>
    </div>
  );
};

export default Error;
