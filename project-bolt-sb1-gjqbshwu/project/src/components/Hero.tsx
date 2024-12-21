import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1565962011024-0b77e85c0c8e?auto=format&fit=crop&q=80"
          alt="Manufacturing facility"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Digital Manufacturing<br />
          <span className="text-blue-400">Delivered at Speed</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          From prototype to production, get custom parts manufactured in as fast as 24 hours. 
          Our automated quoting and digital manufacturing processes ensure quality parts, 
          delivered faster than ever before.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 text-lg font-medium transition-colors duration-300">
            Get Instant Quote
          </button>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 text-lg font-medium transition-colors duration-300">
            Explore Materials
          </button>
        </div>
      </div>
    </div>
  );
}