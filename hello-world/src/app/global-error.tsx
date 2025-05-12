"use client";

import "./globals.css";

export default function GlobalError() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Global Error</h1>
        <p className="text-lg">An error occurred while loading the page.</p>
        <br />
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}
