import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, User } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Body scroll lock
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Classes', path: '/classes' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Membership', path: '/membership' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-display text-2xl sm:text-3xl md:text-4xl text-primary tracking-tighter italic whitespace-nowrap">
            FIT<span className="text-white">ZONE</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-display text-lg tracking-widest uppercase transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-neutral-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/login" className="flex items-center space-x-2 text-neutral-50 hover:text-primary transition-colors border-l border-white/20 pl-8">
            <User size={18} />
            <span className="font-bold uppercase tracking-widest text-xs">Login</span>
          </Link>
          <Link to="/free-trial" className="btn-primary py-3">Claim Free Pass</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-secondary z-[60] flex flex-col p-10 overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex justify-between items-center mb-16">
              <span className="font-display text-4xl text-primary tracking-tighter italic">
                FIT<span className="text-white">ZONE</span>
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
              >
                <X size={32} />
              </button>
            </div>

            {/* Drawer Hero/Branding */}
            <div className="mb-12 border-l-4 border-primary pl-6 py-2">
                <span className="text-primary font-display tracking-[0.3em] font-black text-xs block uppercase mb-2">Welcome to the machine</span>
                <h3 className="text-5xl text-white font-display uppercase tracking-tight italic leading-none">JOIN THE <br/> <span className="text-primary">LEGACY</span></h3>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-6 flex-grow">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => 
                    `font-display text-4xl tracking-widest uppercase transition-colors flex items-center justify-between group ${
                      isActive ? 'text-primary' : 'text-neutral-50 hover:text-primary'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.name}</span>
                  <div className="w-8 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                </NavLink>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-12 border-t border-white/10 space-y-8 mt-12">
              <a href="tel:+919999999999" className="flex items-center space-x-4 text-2xl text-white font-bold">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <span>+91 99999 99999</span>
              </a>
              <Link to="/login" className="flex items-center space-x-4 text-2xl text-white font-bold group" onClick={() => setIsOpen(false)}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all">
                  <User className="text-primary group-hover:text-secondary" size={20} />
                </div>
                <span>ASCEND LOGIN</span>
              </Link>
              <Link to="/free-trial" className="btn-primary w-full text-2xl py-8 text-center" onClick={() => setIsOpen(false)}>
                CLAIM FREE PASS
              </Link>
              <p className="text-center text-neutral-600 text-[10px] font-bold uppercase tracking-[0.4em]">FITZONE NEW DELHI • SINCE 2025</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
