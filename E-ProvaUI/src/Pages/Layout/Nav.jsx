import img from "../../../public/LogoDesign.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Left Section */}
          <div className="flex items-center gap-4">
            {/* Drawer Button (Mobile & Tablet) */}
            <button
              className="block lg:hidden text-gray-600 p-2 rounded-md hover:bg-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars size={20} />
            </button>

            {/* Logo */}
            <Link to="/e-prova/home" className="block">
              <img src={img} alt="Logo" className="w-24 h-16 mx-auto lg:mx-0" />
            </Link>
          </div>

          {/* Centered Navigation (Visible on Large Screens) */}
          <ul className="hidden xl:flex items-center gap-6 text-sm">
            {["About", "Careers", "History", "Services", "Projects", "Blog"].map((item) => (
              <li key={item}>
                <a className="text-gray-500 hover:text-gray-700 transition" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Section: Icons & Buttons */}
          <div className="flex items-center gap-4">
            {/* Icons for Wishlist, Cart, and Search */}
            <div className="hidden md:flex items-center gap-4">
              <FaHeart className="text-gray-600 hover:text-gray-800 cursor-pointer" size={20} />
              <FaShoppingCart className="text-gray-600 hover:text-gray-800 cursor-pointer" size={20} />
              <FaSearch className="text-gray-600 hover:text-gray-800 cursor-pointer" size={20} />
            </div>

            {/* Login & Register Buttons (Visible on Medium+ Screens) */}
            <div className="hidden md:flex gap-2">
              <Link className="bg-teal-600 text-white px-4 py-2 text-sm rounded-md" to="/login">
                Login
              </Link>
              <Link className="bg-gray-100 text-teal-600 px-4 py-2 text-sm rounded-md" to="/register">
                Register
              </Link>
            </div>

            {/* Search Icon (Visible on Small Screens) */}
            <div className="md:hidden">
              <FaSearch className="text-gray-600 hover:text-gray-800 cursor-pointer" size={20} />
            </div>

            {/* Cart Icon (Visible on Small Screens) */}
            <div className="md:hidden">
              <FaShoppingCart className="text-gray-600 hover:text-gray-800 cursor-pointer" size={20} />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col items-center py-4">
            <ul className="flex flex-col items-center gap-4 text-sm">
              {["About", "Careers", "History", "Services", "Projects", "Blog"].map((item) => (
                <li key={item}>
                  <a className="text-gray-500 hover:text-gray-700 transition" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Login/Register */}
            <div className="flex flex-col gap-2 mt-4">
              <Link className="bg-teal-600 text-white px-4 py-2 text-sm rounded-md" to="/login">
                Login
              </Link>
              <Link className="bg-gray-100 text-teal-600 px-4 py-2 text-sm rounded-md" to="/register">
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
}
