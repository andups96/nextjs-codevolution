"use client";

import "./globals.css";
import { useState } from "react";

interface ErrorWrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "Simulated error",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error(message);
  }

  return (
    <div>
      <button
        title="Simulate an error"
        className="bg-red-950 text-red-500 rounded p-1 leading-non font-semibold"
        onClick={() => setError(true)}
      >
        Throw Error
      </button>
    </div>
  );
};

export const ErrorWrapper = ({ children }: ErrorWrapperProps) => {
  return (
    <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
      <div className="absolute top-0 left-4 -translate-y-1/2">
        <ErrorSimulator message="Simulated Error in Root Layout" />
      </div>
      {children}
    </div>
  );
};
