import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 text-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <NavLink to="/" className="text-2xl font-bold">
            Vinay Harry
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Services", "Testimonials", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-yellow-300 transition duration-300"
              }
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="bg-yellow-400 text-green-500 py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300 font-semibold"
          >
            Get Started
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-white focus:outline-none hover:text-yellow-300 transition duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;