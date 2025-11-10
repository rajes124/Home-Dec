import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-2">
        {error?.statusText || "Something went wrong."}
      </p>
      <p className="text-gray-500 mb-6">{error?.status || 404}</p>
      <Link
        to="/"
        className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;
