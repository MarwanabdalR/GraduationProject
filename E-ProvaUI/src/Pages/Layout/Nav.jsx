import img from "../../../public/LogoDesign.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { CiSearch, CiStar } from "react-icons/ci";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("login");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="bg-white shadow-md">
          <div
            className={`transition-all duration-1000 ${
              isScrolled ? "p-2" : "p-7"
            }`}
          >
            <div className="mx-auto max-w-screen-xl sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                  <button
                    className="block lg:hidden text-gray-600 p-2 rounded-md hover:bg-gray-200"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <HiBars3CenterLeft size={20} />
                  </button>
                  <button className="block lg:hidden text-gray-600 p-2 rounded-md hover:bg-gray-200 md:hidden">
                    <CiSearch size={20} />
                  </button>

                  {/* Logo */}
                  <Link to="/e-prova/home" className="block">
                    <img
                      src={img}
                      alt="Logo"
                      className="w-28 h-20 mx-auto lg:mx-0"
                    />
                  </Link>
                </div>

                {/* Navigation Links */}
                <ul className="hidden xl:flex items-center gap-6 text-sm basis-auto xl:basis-96 xl:justify-end">
                  {["Home", "NewArrivals", "Products", "Blog"].map((item) => (
                    <li key={item}>
                      <Link
                        className="text-gray-500 hover:text-gray-700 transition"
                        to={`/e-prova/${item.toLowerCase()}`}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Right Section: Icons & Buttons */}
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex items-center gap-4">
                    <div className="text-black transition hover:text-white/75 hover:bg-black hover:border-black border-2 rounded-full p-2 cursor-pointer shadow-md">
                      <CiSearch className="m-1 cursor-pointer " size={20} />
                    </div>
                    <Link to="/e-prova/wishlist">
                      <span className="relative inline-block">
                        <div className="text-black transition hover:text-white/75 hover:bg-black hover:border-black border-2 rounded-full p-2 cursor-pointer shadow-md">
                          <CiStar className="m-1 cursor-pointer " size={20} />
                          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                            5
                          </span>
                        </div>
                      </span>
                    </Link>
                    <Link to="/e-prova/cart">
                      <span className="relative inline-block">
                        <div className="text-black transition hover:text-white/75 hover:bg-black hover:border-black border-2 rounded-full p-2 cursor-pointer shadow-md">
                          <MdOutlineShoppingBasket
                            className="m-1 cursor-pointer "
                            size={20}
                          ></MdOutlineShoppingBasket>
                          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                            5
                          </span>
                        </div>
                      </span>
                    </Link>
                  </div>

                  {/* Login & Register Buttons */}
                  <div className="hidden md:flex gap-2">
                    <div className="relative w-52 h-12 bg-gray-100 rounded-full flex items-center p-1">
                      {/* Sliding Background */}
                      <div
                        className={`absolute left-1 top-1 bottom-1 w-24 rounded-full bg-white transition-all duration-300 ${
                          active === "register"
                            ? "translate-x-[100%]"
                            : "translate-x-0"
                        }`}
                      ></div>

                      <button
                        className={`w-1/2 text-center text-sm font-medium z-10 ${
                          active === "login" ? "text-black" : "text-gray-500"
                        }`}
                        onMouseEnter={() => setActive("login")}
                      >
                        <Link className="text-xs" to="/e-prova/login">
                          LOGIN
                        </Link>
                      </button>

                      {/* Register Button */}
                      <button
                        className={`w-1/2 text-center text-sm font-medium z-10 ${
                          active === "register" ? "text-black" : "text-gray-500"
                        }`}
                        onMouseEnter={() => setActive("register")}
                      >
                        <Link to="/e-prova/register" className="text-xs">
                          REGISTER
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
                <Link to="/e-prova/cart" className="md:hidden lg:hidden">
                  <span className="relative inline-block">
                    <div className="text-black transition hover:text-white/75 hover:bg-black hover:border-black border-2 rounded-full p-2 cursor-pointer shadow-md">
                      <MdOutlineShoppingBasket
                        className="m-1 cursor-pointer "
                        size={20}
                      ></MdOutlineShoppingBasket>
                      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                        5
                      </span>
                    </div>
                  </span>
                </Link>
              </div>

              {/* Mobile Menu */}
              {isMenuOpen && (
                <div className="lg:hidden flex flex-col py-4">
                  <ul className="flex flex-col gap-4 text-sm">
                    {["Home", "New Arrivals", "Products", "Blog"].map(
                      (item) => (
                        <li key={item}>
                          <a
                            className="text-gray-500 hover:text-gray-700 transition"
                            href={`#${item.toLowerCase()}`}
                          >
                            {item}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
