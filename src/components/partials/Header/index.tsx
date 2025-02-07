import { useState } from 'react';
import { NavLink } from 'react-router';
import NavItem from './NavItem';

const links = [
  { linkText: 'Our Services', linkTo: '/' },
  { linkText: 'Why Us', linkTo: '/about' },
  { linkText: 'Testimonial', linkTo: '/services' },
  { linkText: 'FAQ', linkTo: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent border-gray-200 dark:bg-gray-900">
      <nav className="container">
        <div className="flex flex-wrap items-center justify-between py-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Car Rentals
            </span>
          </NavLink>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <NavItem links={links} withButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
