import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-slate-900 text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2.5 rounded-lg group-hover:scale-110 transition-transform">
              <Briefcase className="h-7 w-7" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              CareerPro
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Consultation
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg text-center"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
