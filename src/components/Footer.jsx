import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand Section */}
        <div className="space-y-6">
          <Link to="/" className="font-display text-4xl text-primary tracking-tighter italic block">
            FIT<span className="text-white">ZONE</span>
          </Link>
          <p className="text-neutral-400 font-light leading-relaxed max-w-xs">
            Dominate your local fitness landscape. Join the community that out-performs, not out-spends.
          </p>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-sm bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-8">
          <h3 className="text-xl font-display tracking-widest text-primary font-bold underline decoration-primary/30 underline-offset-8">Quick Links</h3>
          <ul className="space-y-4 font-light text-center">
            {['Home', 'Classes', 'Trainers', 'Membership', 'Blog', 'Contact', 'Free Trial'].map((link) => (
              <li key={link}>
                <Link to={`/${link === 'Home' ? '' : link.toLowerCase().replace(' ', '-')}`} className="text-neutral-400 hover:text-primary transition-colors flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  <span>{link}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <h3 className="text-xl font-display tracking-widest text-primary font-bold underline decoration-primary/30 underline-offset-8">Contact Us</h3>
          <ul className="space-y-6">
            <li className="flex items-start space-x-3 text-neutral-400">
              <MapPin className="text-primary shrink-0" size={20} />
              <span>123 Fitness Street, South Avenue, New Delhi, India 110001</span>
            </li>
            <li className="flex items-center space-x-3 text-neutral-400">
              <Phone className="text-primary shrink-0" size={20} />
              <span>+91 99999 99999</span>
            </li>
            <li className="flex items-center space-x-3 text-neutral-400">
              <Mail className="text-primary shrink-0" size={20} />
              <span>hello@fitzonegym.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-8">
          <h3 className="text-xl font-display tracking-widest text-primary font-bold underline decoration-primary/30 underline-offset-8">Newsletter</h3>
          <p className="text-neutral-400 font-light leading-relaxed">
            Get fitness tips and member stories delivered weekly.
          </p>
          <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
            <Mail className="absolute left-4 text-neutral-500" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-12 focus:outline-none focus:border-primary transition-colors placeholder:text-neutral-600"
            />
            <button className="absolute right-2 w-10 h-10 flex items-center justify-center bg-primary text-white rounded-sm hover:bg-orange-600 transition-colors shadow-lg active:scale-95">
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-neutral-500 text-sm font-light relative z-10">
        <p>&copy; {currentYear} FitZone Gym. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
