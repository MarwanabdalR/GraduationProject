import PropTypes from 'prop-types';
import { useState } from 'react';

const DropdownItem = ({ href, children }) => (
  <a
    href={href}
    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
  >
    {children}
  </a>
);

DropdownItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const NavItem = ({ href, children }) => (
  <a
    href={href}
    className="block text-center items-center py-3 px-2 sm:px-3 md:px-4 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 text-sm md:text-base"
  >
    {children}
  </a>
);

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function CategoryNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const WomendropdownItems = [
    { name: 'Blouses', link: '/women/blouses' },
    { name: 'Tops', link: '/women/tops' },
    { name: 'T-shirts', link: '/women/t-shirts' },
    { name: 'Sweatshirts', link: '/women/sweatshirts' },
    { name: 'Hoodies', link: '/women/hoodies' },
    { name: 'Jacket', link: '/women/jacket' },
    { name: 'Dresses', link: '/women/dresses' },
    { name: 'Bottoms', link: '/women/bottoms' },
    { name: 'Denim', link: '/women/denim' },
  ];

  const MenendropdownItems = [
    { name: 'Tops', link: '/men/tops' },
    { name: 'T-shirts', link: '/men/t-shirts' },
    { name: 'Shirts', link: '/men/shirts' },
    { name: 'Sweatshirts', link: '/men/sweatshirts' },
    { name: 'Hoodies', link: '/men/hoodies' },
    { name: 'Jacket', link: '/men/jacket' },
    { name: 'Bottoms', link: '/men/bottoms' },
    { name: 'Denim', link: '/men/denim' },
  ];

  const navItems = [
    { name: 'New Arrivals', link: '/new-arrivals' },
    { name: 'Women', link: '/women' },
    { name: 'Men', link: '/men' },
    { name: 'Shirt', link: '/shirt' },
    { name: 'Blouse', link: '/blouse' },
    { name: 'Hoodie', link: '/hoodie' },
    { name: 'Dresses', link: '/dresses' },
    { name: 'Jacket', link: '/jacket' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm">
      <div className="flex items-center justify-center md:justify-between mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        <div className="w-full flex items-center justify-center md:justify-between" id="navbar-default">
          <ul className="flex items-center">
            <li className="md:mr-4">
              <div className="relative inline-block">
                <button
                  id="dropdownInformationButton"
                  onClick={toggleDropdown}
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-md transition-colors duration-200 inline-flex items-center justify-center text-base"
                  type="button"
                >
                  Categories
                  <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 4">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div
                  id="dropdownInformation"
                  className={`absolute z-10 ${isOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-md shadow-lg w-full sm:w-72 border border-gray-100 left-0 md:left-auto`}
                  style={{ maxHeight: '500px', overflowY: 'auto' }}
                >
                  <DropdownItem href="/new-arrivals">New Arrivals</DropdownItem>
                  <ul className="py-2 text-sm" aria-labelledby="dropdownInformationButton">
                    <li>
                      <div className="px-4 py-2.5 text-base font-medium text-gray-900">
                        <div>Women</div>
                      </div>
                    </li>
                    {WomendropdownItems.map((item) => (
                      <li key={item.name}>
                        <DropdownItem href={item.link}>{item.name}</DropdownItem>
                      </li>
                    ))}
                  </ul>
                  <ul className="py-2 text-sm" aria-labelledby="dropdownInformationButton">
                    <li>
                      <div className="px-4 py-2.5 text-base font-medium text-gray-900">
                        <div>Men</div>
                      </div>
                    </li>
                    {MenendropdownItems.map((item) => (
                      <li key={item.name}>
                        <DropdownItem href={item.link}>{item.name}</DropdownItem>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavItem href={item.link}>{item.name}</NavItem>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}