import React from 'react';
import { Factory, Cog, Clock, Cpu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Factory className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Protolabs</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#technology" className="text-gray-700 hover:text-blue-600">Technology</a>
            <a href="#process" className="text-gray-700 hover:text-blue-600">Process</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Get Quote
          </button>
        </div>
      </nav>
    </header>
  );
}