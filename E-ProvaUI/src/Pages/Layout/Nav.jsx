import img from "../../../public/LogoDesign.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { CiSearch, CiStar } from "react-icons/ci";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

export default function Nav() {
  const [active, setActive] = useState("login");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
                  <IconButton
                    className="block lg:hidden text-gray-600 p-2 rounded-md hover:bg-gray-200"
                    onClick={() => setIsDrawerOpen(true)}
                  >
                    <HiBars3CenterLeft size={20} />
                  </IconButton>
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

              {/* Drawer for Mobile Menu */}
              <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                PaperProps={{ sx: { width: "350px" } }}
              >
                <List>
                  <ListItem>
                    <form className="flex items-center w-full">
                      <input
                        type="search"
                        className="w-full px-4 py-2 text-sm border-2 border-gray-300 rounded-lg"
                        placeholder="Search"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg"
                      >
                        Search
                      </button>
                    </form>
                  </ListItem>

                  {["Home", "NewArrivals", "Products", "Blog"].map((item) => (
                    <ListItem
                      button
                      key={item}
                      onClick={() => setIsDrawerOpen(false)}
                      component={Link}
                      to={`/e-prova/${item.toLowerCase()}`}
                      className="hover:text-red-600 transition"
                    >
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                  <ListItem>
                    <Link
                      to="/e-prova/login"
                      className="block w-full px-4 py-2 text-center text-sm font-medium text-white bg-black rounded-lg"
                    >
                      Login
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      to="/e-prova/register"
                      className="block w-full px-4 py-2 text-center text-sm font-medium text-white bg-[#e94328] rounded-lg"
                    >
                      Register
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Typography variant="caption" className="font-light">
                      Call us: +20 (112) 0636239
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="caption" className="font-light">
                      Email:{" "}
                      <a href="mailto:marwanabdalrady13@gmail.com">
                        marwanabdalrady13@gmail.com
                      </a>
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ul className="mt-8 flex justify-center items-center gap-10">
                      <li>
                        <a
                          href="https://www.facebook.com/mrwan.abdalrady.5"
                          rel="noreferrer"
                          target="_blank"
                          className="text-black transition hover:text-red-600 hover:bg-black hover:border-black border-2 rounded-full p-2"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/marwan-abdalrady-57b87b222/"
                          rel="noreferrer"
                          target="_blank"
                          className="text-black transition hover:text-red-600 hover:bg-black hover:border-black border-2 rounded-full p-2"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/MarwanabdalR"
                          rel="noreferrer"
                          target="_blank"
                          className="text-black transition hover:text-red-600 hover:bg-black hover:border-black border-2 rounded-full p-2"
                        >
                          <i className="fa-brands fa-github"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://protofolio-git-main-marwans-projects-3f5c5d0c.vercel.app/"
                          rel="noreferrer"
                          target="_blank"
                          className="text-black transition hover:text-red-600 hover:bg-black hover:border-black border-2 rounded-full p-2"
                        >
                          <i className="fa-solid fa-briefcase"></i>
                        </a>
                      </li>
                    </ul>
                  </ListItem>
                </List>
              </Drawer>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
