import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative bg-gradient-to-r from-indigo-800 via-blue-900 to-blue-700 min-h-screen flex items-center justify-center text-white">
    <div className="absolute inset-0 bg-opacity-40 bg-black"></div>

    <div className="relative z-10 max-w-5xl text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
        Achieve Your <span className="text-blue-300">Global Dreams</span> with Ease
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-200 leading-relaxed">
        Reliable visa consultancy tailored for students, professionals, and families. 
        Let us make your journey stress-free with expert solutions and personalized guidance.
      </p>
      <div className="mt-6 flex justify-center space-x-4">
        <Link
          to="/services"
          className="bg-blue-400 text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg transition-all"
        >
          Explore Services
        </Link>
        <Link
          to="/contact"
          className="bg-gray-50 text-indigo-800 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-all"
        >
          Contact Us
        </Link>
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute top-0 left-0 transform translate-x-12 -translate-y-12 animate-pulse">
      <div className="bg-blue-300 rounded-full w-32 h-32 blur-2xl opacity-30"></div>
    </div>
    <div className="absolute bottom-0 right-0 transform -translate-x-12 translate-y-12 animate-pulse">
      <div className="bg-indigo-600 rounded-full w-40 h-40 blur-2xl opacity-30"></div>
    </div>
  </section>
);

export default Hero;
