import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DropdownItem = ({ to, children }) => (
  <Link
    to={to}
    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
  >
    {children}
  </Link>
);

DropdownItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const NavItem = ({ to, children }) => (
  <Link
    to={to}
    className="block text-center items-center py-3 px-2 sm:px-3 md:px-4 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 text-sm md:text-base"
  >
    {children}
  </Link>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function CategoryNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    navigate(`/e-prova/products?category=${category}`);
  };

  const WomendropdownItems = [
    { name: 'Blouses', category: 'blouses' },
    { name: 'Tops', category: 'tops' },
    { name: 'T-shirts', category: 't-shirts' },
    { name: 'Sweatshirts', category: 'sweatshirts' },
    { name: 'Hoodies', category: 'hoodies' },
    { name: 'Jacket', category: 'jacket' },
    { name: 'Dresses', category: 'dresses' },
    { name: 'Bottoms', category: 'bottoms' },
    { name: 'Denim', category: 'denim' },
  ];

  const MenendropdownItems = [
    { name: 'Tops', category: 'tops' },
    { name: 'T-shirts', category: 't-shirts' },
    { name: 'Shirts', category: 'shirts' },
    { name: 'Sweatshirts', category: 'sweatshirts' },
    { name: 'Hoodies', category: 'hoodies' },
    { name: 'Jacket', category: 'jacket' },
    { name: 'Bottoms', category: 'bottoms' },
    { name: 'Denim', category: 'denim' },
  ];

  const navItems = [
    { name: 'New Arrivals', to: '/e-prova/newarrivals' },
    { name: 'Women', to: '/e-prova/products?category=women' },
    { name: 'Men', to: '/e-prova/products?category=men' },
    { name: 'Shirt', to: '/e-prova/products?category=shirt' },
    { name: 'Blouse', to: '/e-prova/products?category=blouse' },
    { name: 'Hoodie', to: '/e-prova/products?category=hoodie' },
    { name: 'Dresses', to: '/e-prova/products?category=dresses' },
    { name: 'Jacket', to: '/e-prova/products?category=jacket' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-b border-gray-100 shadow-sm"
    >
      <div className="flex items-center justify-center md:justify-between mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        <div className="w-full flex items-center justify-center md:justify-between" id="navbar-default">
          <ul className="flex items-center">
            <li className="md:mr-4">
              <div className="relative inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  id="dropdownInformationButton"
                  onClick={toggleDropdown}
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-md transition-colors duration-200 inline-flex items-center justify-center text-base"
                  type="button"
                >
                  Categories
                  <motion.svg 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-2.5 h-2.5 ms-2" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 10 4"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </motion.svg>
                </motion.button>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute z-10 ${isOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-md shadow-lg w-full sm:w-72 border border-gray-100 left-0 md:left-auto`}
                  style={{ maxHeight: '500px', overflowY: 'auto' }}
                >
                  <DropdownItem to="/e-prova/new-arrivals">New Arrivals</DropdownItem>
                  <ul className="py-2 text-sm" aria-labelledby="dropdownInformationButton">
                    <li>
                      <div className="px-4 py-2.5 text-base font-medium text-gray-900">
                        <div>Women</div>
                      </div>
                    </li>
                    {WomendropdownItems.map((item) => (
                      <motion.li 
                        key={item.name}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <DropdownItem to={`/e-prova/products?category=women-${item.category}`}>
                          {item.name}
                        </DropdownItem>
                      </motion.li>
                    ))}
                  </ul>
                  <ul className="py-2 text-sm" aria-labelledby="dropdownInformationButton">
                    <li>
                      <div className="px-4 py-2.5 text-base font-medium text-gray-900">
                        <div>Men</div>
                      </div>
                    </li>
                    {MenendropdownItems.map((item) => (
                      <motion.li 
                        key={item.name}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <DropdownItem to={`/e-prova/products?category=men-${item.category}`}>
                          {item.name}
                        </DropdownItem>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </li>
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <motion.li 
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavItem to={item.to}>{item.name}</NavItem>
                </motion.li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}