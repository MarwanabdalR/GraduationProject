import React, { useState } from 'react';

const DropdownItem = ({ href, children }) => (
  <a
    href={href}
    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
  >
    {children}
  </a>
);

const NavItem = ({ href, children }) => (
  <a
    href={href}
    className="block text-center items-center py-[10px] lg:px-3 md:px-0 md:text-sm text-gray-900 hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
  >
    {children}
  </a>
);

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
    <nav className="bg-white border-gray-200 dark:bg-gray-50 shadow-md hidden md:block lg:block -mx-3 -my-2">
      <div className=" flex items-center justify-between mx-auto ">
        <div className="w-full flex items-center justify-between" id="navbar-default">
          <ul className="flex space-x-8">
            <li>
              <div className="relative inline-block">
                <button
                  id="dropdownInformationButton"
                  onClick={toggleDropdown}
                  className=" hover:text-black text-center inline-flex items-center  py-2 px-3 text-gray-900  hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
                  type="button"
                >
                  Categories
                  <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 4">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div
                  id="dropdownInformation"
                  className={`absolute z-10  ${isOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 shadow-sm w-72 dark:bg-gray-600 dark:divide-gray-500`}
                  style={{ maxHeight: '500px', overflowY: 'auto' }} // Enable scrolling
                >
                  <DropdownItem href="/new-arrivals">New Arrivals</DropdownItem>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                    <li>
                      <div className="px-4 py-3 text-lg text-gray-900 dark:text-white">
                        <div>Women</div>
                      </div>
                    </li>
                    {WomendropdownItems.map((item) => (
                      <li key={item.name}>
                        <DropdownItem href={item.link}>{item.name}</DropdownItem>
                      </li>
                    ))}
                  </ul>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                    <li>
                      <div className="px-4 py-3 text-lg text-gray-900 dark:text-white">
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
            {navItems.map((item) => (
              <li key={item.name}>
                <NavItem href={item.link}>{item.name}</NavItem>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}