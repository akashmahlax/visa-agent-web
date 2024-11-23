import { NavLink } from "react-router-dom";
const Footer = () => (
    <footer className="bg-blue-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">About Vinay Harry</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Vinay Harry is a trusted visa consultancy agent with years of experience in helping individuals and families
            achieve their dreams of studying, working, or living abroad.
          </p>
        </div>
  
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Testimonials", "Contact"].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-yellow-400 transition duration-300"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm">
            <span className="font-semibold">Phone:</span> +91 12345 67890
          </p>
          <p className="text-gray-400 text-sm">
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:contact@vinayharry.com" className="hover:text-yellow-400 underline">
              contact@vinayharry.com
            </a>
          </p>
          <p className="text-gray-400 text-sm">
            <span className="font-semibold">Address:</span> 123 Visa Avenue, Chandigarh, Punjab, India
          </p>
        </div>
      </div>
  
      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Vinay Harry. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
  
  export default Footer;  