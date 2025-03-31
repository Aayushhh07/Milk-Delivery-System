import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-6 "> 
      <div className="container mx-auto flex justify-between items-center ml-6">
         {/* Logo */}
         <Link to="/">
          <img src={"../src/assets/logo1.png"} alt="Logo" className="h-12" />
        </Link>
        
        
        <div className="flex items-center space-x-6">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-[#00B86C]">Home</Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-700 hover:text-[#00B86C]">Products</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-[#00B86C]">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-[#00B86C]">Contact</Link>
            </li>
          </ul>
          
          {/* Login Button */}
          <Link to="/signup" className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-[#00B86C] mr-16">
            Login / Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <li>
            <Link to="/" className="text-gray-700 hover:text-[#00B86C]" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/products" className="text-gray-700 hover:text-[#00B86C]" onClick={() => setIsOpen(false)}>Products</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-[#00B86C]" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-[#00B86C]" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
          <li>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-[#00B86C]" onClick={() => setIsOpen(false)}>
              Login / Signup
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
