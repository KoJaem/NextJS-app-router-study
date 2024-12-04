// Error.tsx
"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error occurred:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-lg mb-6">{error.message}</p>

      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
