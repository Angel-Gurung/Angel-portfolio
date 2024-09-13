import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between p-5 bg-black text-white z-50 shadow-lg">
      <div className="text-2xl font-bold">Angel Gurung</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className="hover:text-pink-600 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="hover:text-pink-600 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="hover:text-pink-600 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
