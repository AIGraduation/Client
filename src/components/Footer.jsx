import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-20">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img src={Logo} alt="CrisisCore AI" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6 mb-6 text-sm">
          <Link to="/" className="text-gray-600 hover:text-green-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-green-600">
            About
          </Link>
          <Link
            to="/text-analysis"
            className="text-gray-600 hover:text-green-600"
          >
            Text Analysis
          </Link>
          <Link
            to="/image-analysis"
            className="text-gray-600 hover:text-green-600"
          >
            Image Analysis
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-green-600">
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {currentYear} CrisisCore AI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
