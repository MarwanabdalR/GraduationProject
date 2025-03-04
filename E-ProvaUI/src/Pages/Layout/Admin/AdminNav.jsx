import img from "../../../../public/LogoDesign.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { MdInsertComment } from "react-icons/md";
import { FaUsersCog, FaGift } from "react-icons/fa";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";

export default function AdminNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav>
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <IconButton
                className="block lg:hidden text-gray-600 p-2 rounded-md hover:bg-gray-200"
                onClick={() => setIsDrawerOpen(true)}
              >
                <HiBars3CenterLeft size={20} />
              </IconButton>
              <Link to="/e-prova/admin" className="block">
                <img src={img} alt="Logo" className="w-28 h-20" />
              </Link>
            </div>
            <ul className="hidden lg:flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-500 hover:text-gray-700 transition-all duration-300"
                  to="/e-prova/admin/dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 hover:text-gray-700 transition-all duration-300"
                  to="/e-prova/admin/products"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 hover:text-gray-700 transition-all duration-300"
                  to="/e-prova/admin/products/manage"
                >
                  Manage Products
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 hover:text-gray-700 transition-all duration-300"
                  to="/e-prova/admin/categories"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 hover:text-gray-700 transition-all duration-300"
                  to="/e-prova/admin/categories/manage"
                >
                  Manage Categories
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 hover:text-gray-700 transition-all duration-300"
                  to="/e-prova/admin/brands"
                >
                  Brands
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 hover:text-gray-700 transition-all duration-300"
                  to="/e-prova/admin/brands/manage"
                >
                  Manage Brands
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 hover:text-gray-700 transition-all duration-300"
                  to="/e-prova/admin/orders"
                >
                  Orders
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <Link
                to="/e-prova/admin/reviews"
                className="text-black hover:bg-black hover:text-white p-2 rounded-full transition-all duration-700"
              >
                <MdInsertComment size={20} />
              </Link>
              <Link
                to="/e-prova/admin/offers"
                className="text-black hover:bg-black hover:text-white p-2 rounded-full transition-all duration-700"
              >
                <FaGift size={20} />
              </Link>
              <Link
                to="/e-prova/admin/add-admin"
                className="text-black hover:bg-black hover:text-white p-2 rounded-full transition-all duration-700"
              >
                <FaUsersCog size={20} />
              </Link>
            </div>
          </div>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <List>
              <ListItem
                button
                onClick={() => setIsDrawerOpen(false)}
                component={Link}
                to="/e-prova/admin"
              >
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem
                button
                onClick={() => setIsDrawerOpen(false)}
                component={Link}
                to="/e-prova/admin/add-admin"
              >
                <ListItemText primary="Add Admin" />
              </ListItem>
              <ListItem
                button
                onClick={() => setIsDrawerOpen(false)}
                component={Link}
                to="/e-prova/admin/products"
              >
                <ListItemText primary="Products" />
              </ListItem>
              <ListItem
                button
                onClick={() => setIsDrawerOpen(false)}
                component={Link}
                to="/e-prova/admin/products/manage"
              >
                <ListItemText primary="Products Management" />
              </ListItem>
              <ListItem
                button
                onClick={() => setIsDrawerOpen(false)}
                component={Link}
                to="/e-prova/admin/categories"
              >
                <ListItemText primary="Categories" />
              </ListItem>
              <ListItem
                button
                onClick={() => setIsDrawerOpen(false)}
                component={Link}
                to="/e-prova/admin/categories/manage"
              >
                <ListItemText primary="Categories Management" />
              </ListItem>
              <ListItem
                button
                onClick={() => setIsDrawerOpen(false)}
                component={Link}
                to="/e-prova/admin/brands"
              >
                <ListItemText primary="Brands" />
              </ListItem>
              <ListItem
                button
                onClick={() => setIsDrawerOpen(false)}
                component={Link}
                to="/e-prova/admin/brands/manage"
              >
                <ListItemText primary="Brands Management" />
              </ListItem>
              <ListItem
                button
                onClick={() => setIsDrawerOpen(false)}
                component={Link}
                to="/e-prova/admin/orders"
              >
                <ListItemText primary="Orders" />
              </ListItem>
              <ListItem
                button
                onClick={() => setIsDrawerOpen(false)}
                component={Link}
                to="/e-prova/admin/reviews"
              >
                <ListItemText primary="Reviews" />
              </ListItem>
              <ListItem
                button
                onClick={() => setIsDrawerOpen(false)}
                component={Link}
                to="/e-prova/admin/offers"
              >
                <ListItemText primary="Offers" />
              </ListItem>
            </List>
          </Drawer>
        </nav>
      </motion.header>
    </>
  );
}
