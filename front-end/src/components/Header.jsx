import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">MYBRAND</div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Nav Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-14 left-0 w-full bg-white md:static md:flex md:space-x-8 md:w-auto md:items-center`}
        >
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:text-blue-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="block px-4 py-2 text-gray-700 hover:text-blue-700"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="#teams"
              className="block px-4 py-2 text-gray-700 hover:text-blue-700"
            >
              Teams
            </Link>
          </li>

          {/* Buttons (show inline on desktop, stacked on mobile) */}
          <div className="flex flex-col md:flex-row md:space-x-3 mt-2 md:mt-0 px-4 md:px-0">
            <button className="px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50">
              Log In
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-800 mt-2 md:mt-0">
              Sign Up
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
