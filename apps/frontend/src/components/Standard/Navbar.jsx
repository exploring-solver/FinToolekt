import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-semibold">
          FinToolekt
        </div>
        <div className="flex space-x-4">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/audit" className="hover:text-gray-300">Audit Tool</a>
          <a href="/fraud" className="hover:text-gray-300">Fraud Detection Tool</a>
          <a href="/help" className="hover:text-gray-300">Help</a>
          <a href="/about" className="hover:text-gray-300">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
