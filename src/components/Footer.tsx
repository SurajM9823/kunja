import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#263B80] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <Logo className="h-16 w-auto bg-white rounded-full p-1" />
              <div className="ml-3">
                <h3 className="font-bold text-lg leading-tight">Shanti Nikunja</h3>
                <p className="text-sm">English Boarding School</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Providing quality education from nursery to class XII since 2053 BS. Our mission is to nurture young minds and foster academic excellence.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#263B80] p-2 rounded-full hover:bg-[#FFDD00] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#263B80] p-2 rounded-full hover:bg-[#FFDD00] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#263B80] p-2 rounded-full hover:bg-[#FFDD00] transition-colors">
                <Youtube size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#263B80] p-2 rounded-full hover:bg-[#FFDD00] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-[#FFDD00] pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about/history" className="text-sm hover:text-[#FFDD00] transition-colors flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-sm hover:text-[#FFDD00] transition-colors flex items-center">
                  <span className="mr-2">›</span> Academic Programs
                </Link>
              </li>
              <li>
                <Link to="/admissions/process" className="text-sm hover:text-[#FFDD00] transition-colors flex items-center">
                  <span className="mr-2">›</span> Admission Process
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-sm hover:text-[#FFDD00] transition-colors flex items-center">
                  <span className="mr-2">›</span> Facilities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-[#FFDD00] transition-colors flex items-center">
                  <span className="mr-2">›</span> Gallery
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm hover:text-[#FFDD00] transition-colors flex items-center">
                  <span className="mr-2">›</span> Events & News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-[#FFDD00] transition-colors flex items-center">
                  <span className="mr-2">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-[#FFDD00] pb-2">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/academics/nursery-kg" className="text-sm hover:text-[#FFDD00] transition-colors flex items-center">
                  <span className="mr-2">›</span> Nursery / KG
                </Link>
              </li>
              <li>
                <Link to="/academics/primary" className="text-sm hover:text-[#FFDD00] transition-colors flex items-center">
                  <span className="mr-2">›</span> Primary School (1-5)
                </Link>
              </li>
              <li>
                <Link to="/academics/middle-school" className="text-sm hover:text-[#FFDD00] transition-colors flex items-center">
                  <span className="mr-2">›</span> Middle School (6-8)
                </Link>
              </li>
              <li>
                <Link to="/academics/secondary" className="text-sm hover:text-[#FFDD00] transition-colors flex items-center">
                  <span className="mr-2">›</span> Secondary School (9-10)
                </Link>
              </li>
              <li>
                <Link to="/academics/higher-secondary" className="text-sm hover:text-[#FFDD00] transition-colors flex items-center">
                  <span className="mr-2">›</span> Higher Secondary (11-12)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-[#FFDD00] pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">Shanti Nikunja English Boarding School, Golbazaar-7, Siraha, Nepal</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-sm">+977-9815766415 / 9852830667</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-sm">jesusrpm09@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2 flex-shrink-0" />
                <span className="text-sm">Sun-Fri: 8:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="mt-8 pt-6 border-t border-gray-600 text-center text-sm">
          <p>© {new Date().getFullYear()} Shanti Nikunja English Boarding School. All Rights Reserved.</p>
          <p className="mt-1">Designed with ❤️ for quality education</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;