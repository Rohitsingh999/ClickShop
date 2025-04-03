import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center md:grid md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-bold text-white">ClickShop</h2>
          <p className="mt-3 text-gray-200">Your favorite destination for quality shopping.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link to="/shop" className="hover:text-yellow-400">Shop</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-200">Email: <a href="mailto:singhrohitt001@gmail.com" className="hover:text-yellow-400">singhrohitt001@gmail.com</a></p>
          <p className="text-gray-200">Phone: +6395990698</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="https://www.instagram.com/rohitsingh_1111/?hl=en" target="_blank" className="text-gray-300 hover:text-yellow-400">
              <FaInstagram />
            </a>
            <a href="https://github.com/Rohitsingh999" target="_blank" className="text-gray-300 hover:text-yellow-400">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-200 mt-8 border-t border-gray-500 pt-4">
        &copy; 2025 ClickShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
