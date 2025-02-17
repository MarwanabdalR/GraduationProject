import img from "../../../public/LogoDesign.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              <button
                className="block lg:hidden text-gray-600 p-2 rounded-md hover:bg-gray-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <HiBars3CenterLeft size={20} />
              </button>
              <button
                className="block lg:hidden text-gray-600 p-2 rounded-md hover:bg-gray-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <CiSearch size={20} />
              </button>
            </div>
            {/* center */}
            <Link to="/e-prova/home" className="block">
              <img src={img} alt="Logo" className="w-24 h-16 mx-auto lg:mx-0" />
            </Link>

            {/* ul */}
            <ul className="hidden xl:flex items-center gap-6 text-sm">
              {["Home", "New Arrivals", "Products", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    className="text-gray-500 hover:text-gray-700 transition"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Section: Icons & Buttons */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <FaHeart
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  size={20}
                />
                <span className="relative inline-block">
                  <MdOutlineShoppingBasket
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                    size={20}
                  />
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {/* Replace the number below with the actual count of selected items */}
                    5
                  </span>
                </span>
                <FaSearch
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  size={20}
                />
              </div>

              {/* Login & Register Buttons (Visible on Medium+ Screens) */}
              <div className="hidden md:flex gap-2">
                <Link
                  className="bg-teal-600 text-white px-4 py-2 text-sm rounded-md"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="bg-gray-100 text-teal-600 px-4 py-2 text-sm rounded-md"
                  to="/register"
                >
                  Register
                </Link>
              </div>

              {/* Cart Icon (Visible on Small Screens) */}
              <div className="md:hidden">
                <span className="relative inline-block">
                  <MdOutlineShoppingBasket
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                    size={20}
                  />
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {/* Replace the number below with the actual count of selected items */}
                    5
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden flex flex-col  py-4">
              <ul className="flex flex-col  gap-4 text-sm">
                {["Home", "New Arrivals", "Products", "Blog"].map((item) => (
                  <li key={item}>
                    <a
                      className="text-gray-500 hover:text-gray-700 transition"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <span className="text-gray-900 font-medium text-sm">
                    Call us:
                  </span>
                  <p className="inline-block font-thin text-xs">
                    &nbsp; +20 11-2063-6239{" "}
                  </p>
                </li>
                <li>
                  <span className="text-gray-900 font-medium text-sm">
                    Email:
                  </span>
                  <p className="inline-block font-thin text-xs">
                    {" "}
                    &nbsp; marwanabdalrady13@gmail.com{" "}
                  </p>
                </li>
                <li>
                  <ul className="flex gap-1 sm:justify-start md:gap-8">
                    <li>
                      <a
                        href="https://www.facebook.com/mrwan.abdalrady.5"
                        rel="noreferrer"
                        target="_blank"
                        className="text-black transition hover:text-white/75 hover:bg-black hover:border-black border-2 rounded-full p-2"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/marwan-abdalrady-57b87b222/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-black transition hover:text-white/75 hover:bg-black hover:border-black border-2 rounded-full p-2"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/MarwanabdalR"
                        rel="noreferrer"
                        target="_blank"
                        className="text-black transition hover:text-white/75 hover:bg-black hover:border-black border-2 rounded-full p-2"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://protofolio-git-main-marwans-projects-3f5c5d0c.vercel.app/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-black transition hover:text-white/75 hover:bg-black hover:border-black border-2 rounded-full p-2"
                      >
                        <i className="fa-solid fa-briefcase"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
