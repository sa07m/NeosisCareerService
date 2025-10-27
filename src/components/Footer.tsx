import { Link } from 'react-router-dom';
import { Briefcase, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CareerPro</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transform your career with expert guidance and personalized strategies for success.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Resume Writing</li>
              <li className="text-gray-400">LinkedIn Optimization</li>
              <li className="text-gray-400">Interview Coaching</li>
              <li className="text-gray-400">Career Counseling</li>
              <li className="text-gray-400">Executive Coaching</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">info@careerpro.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">New York, NY</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 CareerPro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
