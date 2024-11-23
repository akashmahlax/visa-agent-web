import React from "react";

const Contact = () => (
  <section className="relative bg-gradient-to-br from-blue-600 to-blue-900 py-16 px-4 md:px-8 text-white">
    {/* Background Animation */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="bg-gradient-to-br from-blue-400 to-purple-500 opacity-30 rounded-full w-96 h-96 blur-3xl absolute -top-20 -left-20 animate-pulse"></div>
      <div className="bg-gradient-to-br from-green-400 to-blue-600 opacity-30 rounded-full w-96 h-96 blur-3xl absolute bottom-20 right-20 animate-pulse"></div>
    </div>

    {/* Content */}
    <div className="relative max-w-6xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Get in <span className="text-yellow-400">Touch</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-200 mb-10">
        We’re here to assist you with all your visa-related queries. Let us help you achieve your dreams!
      </p>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 text-gray-800">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="mt-12 text-center space-y-4">
        <p className="text-lg">
          <span className="font-bold">Phone:</span> +91 12345 67890
        </p>
        <p className="text-lg">
          <span className="font-bold">Email:</span>{" "}
          <a href="mailto:contact@vinayharry.com" className="underline">
            contact@vinayharry.com
          </a>
        </p>
        <p className="text-lg">
          <span className="font-bold">Address:</span> 123 Visa Avenue, Chandigarh, Punjab, India
        </p>
      </div>
    </div>
  </section>
);

export default Contact;