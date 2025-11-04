import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    // { name: 'About', path: '/about' },
    // { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
    { name: 'Pricing', path: '/payment' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-slate-900 text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <span className="text-2xl font-bold bg-gradient-to-r from-white via-orange-200 to-orange-200 bg-clip-text text-transparent">
              Hire-Axis
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => {
              const isPayment = link.name === 'Pricing';
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isPayment
                      ? 'bg-gradient-to-r from-orange-400 to-amber-500 text-white shadow-lg shadow-orange-500/50 animate-pulse'
                      : isActive(link.path)
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-4 space-y-2">
            {links.map((link) => {
              const isPayment = link.name === 'Payment';
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium text-center transition-all ${
                    isPayment
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/50 animate-pulse'
                      : isActive(link.path)
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
          </div>
        </div>
      )}
    </nav>
  );
}
