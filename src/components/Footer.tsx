
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">SoApp</h3>
            <p className="mb-4 text-gray-400">
              Revolutionizing retail shopping with seamless checkout experiences through NFC and RFID technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-soapp-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-soapp-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-soapp-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-soapp-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-400 hover:text-white transition-colors">Security</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 text-soapp-blue mt-1" />
                <span className="text-gray-400">+1 (234) 567-8910</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-soapp-blue mt-1" />
                <span className="text-gray-400">info@soapp.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-soapp-blue mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Innovation Street, Tech City, CA 94043</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-400">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-soapp-blue"
                required
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-soapp-blue hover:bg-soapp-blue/80 text-white rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {year} SoApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
