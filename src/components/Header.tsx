import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Clock } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top bar with contact info */}
      <div className="bg-[#263B80] text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center text-sm">
              <Phone size={14} className="mr-1" />
              <span>+977-9815766415 / 9852830667</span>
            </div>
            <div className="flex items-center text-sm">
              <Mail size={14} className="mr-1" />
              <span>jesusrpm09@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <Clock size={14} className="mr-1" />
            <span>School Hours: Sun-Fri 8:00 AM - 4:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`bg-white py-4 px-4 shadow-md transition-all duration-300 ${
          isScrolled ? 'sticky top-0 z-50 shadow-lg' : ''
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo className="h-16 w-auto" />
            <div className="ml-3 hidden md:block">
              <h1 className="text-[#263B80] font-bold text-lg leading-tight">Shanti Nikunja</h1>
              <p className="text-[#E31B23] text-sm">English Boarding School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLinkWithDropdown 
              title="About Us" 
              links={[
                { text: 'Our History', to: '/about/history' },
                { text: 'Mission & Vision', to: '/about/mission-vision' },
                { text: 'Message from Principal', to: '/about/principal-message' },
              ]} 
            />
            <NavLinkWithDropdown 
              title="Academics" 
              links={[
                { text: 'Nursery to KG', to: '/academics/nursery-kg' },
                { text: 'Primary (1-5)', to: '/academics/primary' },
                { text: 'Middle School (6-8)', to: '/academics/middle-school' },
                { text: 'Secondary (9-10)', to: '/academics/secondary' },
                { text: 'Higher Secondary (11-12)', to: '/academics/higher-secondary' },
              ]} 
            />
            <NavLinkWithDropdown 
              title="Admissions" 
              links={[
                { text: 'Admission Process', to: '/admissions/process' },
                { text: 'Fee Structure', to: '/admissions/fees' },
                { text: 'Apply Online', to: '/admissions/apply' },
              ]} 
            />
            <NavLink to="/facilities">Facilities</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#263B80]" />
            ) : (
              <Menu className="h-6 w-6 text-[#263B80]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-inner">
            <NavLinkMobile to="/" onClick={toggleMenu}>Home</NavLinkMobile>
            <MobileDropdown 
              title="About Us" 
              links={[
                { text: 'Our History', to: '/about/history' },
                { text: 'Mission & Vision', to: '/about/mission-vision' },
                { text: 'Message from Principal', to: '/about/principal-message' },
              ]} 
              onClick={toggleMenu}
            />
            <MobileDropdown 
              title="Academics" 
              links={[
                { text: 'Nursery to KG', to: '/academics/nursery-kg' },
                { text: 'Primary (1-5)', to: '/academics/primary' },
                { text: 'Middle School (6-8)', to: '/academics/middle-school' },
                { text: 'Secondary (9-10)', to: '/academics/secondary' },
                { text: 'Higher Secondary (11-12)', to: '/academics/higher-secondary' },
              ]} 
              onClick={toggleMenu}
            />
            <MobileDropdown 
              title="Admissions" 
              links={[
                { text: 'Admission Process', to: '/admissions/process' },
                { text: 'Fee Structure', to: '/admissions/fees' },
                { text: 'Apply Online', to: '/admissions/apply' },
              ]} 
              onClick={toggleMenu}
            />
            <NavLinkMobile to="/facilities" onClick={toggleMenu}>Facilities</NavLinkMobile>
            <NavLinkMobile to="/gallery" onClick={toggleMenu}>Gallery</NavLinkMobile>
            <NavLinkMobile to="/contact" onClick={toggleMenu}>Contact</NavLinkMobile>
          </div>
        )}
      </nav>
    </header>
  );
};

// Desktop Nav Link Component
const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-[#263B80] font-medium hover:text-[#E31B23] transition-colors"
  >
    {children}
  </Link>
);

// Desktop Dropdown Nav Link Component
const NavLinkWithDropdown: React.FC<{ 
  title: string; 
  links: { text: string; to: string }[];
}> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group" onMouseLeave={() => setIsOpen(false)}>
      <button 
        className="flex items-center text-[#263B80] font-medium hover:text-[#E31B23] transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        {title}
        <ChevronDown size={16} className="ml-1" />
      </button>

      {isOpen && (
        <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#E31B23]"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Mobile Nav Link Component
const NavLinkMobile: React.FC<{ 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
}> = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    className="block py-2 text-[#263B80] font-medium border-b border-gray-200"
    onClick={onClick}
  >
    {children}
  </Link>
);

// Mobile Dropdown Component
const MobileDropdown: React.FC<{ 
  title: string; 
  links: { text: string; to: string }[];
  onClick: () => void;
}> = ({ title, links, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button 
        className="flex items-center justify-between w-full py-2 text-[#263B80] font-medium border-b border-gray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown size={16} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="pl-4 pb-1">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="block py-2 text-sm text-gray-700 hover:text-[#E31B23]"
              onClick={onClick}
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;