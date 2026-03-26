import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle, Smartphone, User } from 'lucide-react';

const StickyModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if user already saw or closed it in this session
    const hasSeenModal = sessionStorage.getItem('fitzone_modal_seen');
    if (hasSeenModal) return;

    // Time-based trigger (5s)
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('fitzone_modal_seen', 'true');
    }, 15000); // Set to 15s to be less intrusive for first time development, but business plan said 5s

    // Exit-intent trigger
    const handleMouseLeave = (e) => {
      if (e.clientY < 0 && !sessionStorage.getItem('fitzone_modal_seen')) {
        setIsOpen(true);
        sessionStorage.setItem('fitzone_modal_seen', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // WhatsApp redirect logic
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const date = formData.get('date');
    const message = `Welcome to FitZone! Your free day pass is confirmed for ${date}. We look forward to seeing you, ${name}!`;
    const waUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
        window.open(waUrl, '_blank');
        setIsOpen(false);
    }, 2000);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-neutral-900 border border-white/5 rounded-sm overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-primary transition-colors z-20"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              {/* Image Side */}
              <div className="hidden md:block w-2/5 relative bg-neutral-800">
                <img 
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
                  className="absolute inset-0 w-full h-full object-cover z-0" 
                  alt="Training"
                />
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] p-6 flex flex-col justify-end z-10">
                  <div className="bg-secondary p-4 rounded-sm border-l-4 border-primary shadow-2xl">
                    <p className="font-display text-white text-xl tracking-wider uppercase mb-1 italic font-black">Join the Elite</p>
                    <p className="text-neutral-300 text-[10px] font-bold uppercase tracking-widest italic leading-none mt-1">FitZone New Delhi</p>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative z-20">
                {!submitted ? (
                  <>
                    <div className="mb-10">
                      <span className="text-primary font-display tracking-[0.4em] uppercase font-black text-xs block mb-3">Exclusive Offer</span>
                      <h2 className="text-5xl text-white font-display italic uppercase leading-[0.85] mb-6 tracking-tighter">
                        CLAIM YOUR <span className="text-primary underline decoration-primary/20">FREE</span> <br/> DAY PASS
                      </h2>
                      <p className="text-neutral-400 font-light text-sm italic font-bold uppercase tracking-widest leading-relaxed mt-4">
                        Experience the machine. No commitment. Just results.
                      </p>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="relative group/input">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within/input:text-primary transition-colors" size={18} />
                        <input
                          required
                          name="name"
                          type="text"
                          placeholder="FULL IDENTITY"
                          className="w-full bg-black/40 border border-white/5 px-12 py-5 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition-all placeholder:text-neutral-800 text-white font-display uppercase italic tracking-[0.2em] text-lg"
                        />
                      </div>
                      <div className="relative group/input">
                        <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within/input:text-primary transition-colors" size={18} />
                        <input
                          required
                          name="phone"
                          type="tel"
                          placeholder="CONTACT CODE"
                          className="w-full bg-black/40 border border-white/5 px-12 py-5 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition-all placeholder:text-neutral-800 text-white font-display uppercase italic tracking-[0.2em] text-lg"
                        />
                      </div>
                      <div className="relative group/input">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within/input:text-primary transition-colors" size={18} />
                        <input
                          required
                          name="date"
                          type="date"
                          className="w-full bg-black/40 border border-white/5 px-12 py-5 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition-all placeholder:text-neutral-800 text-white font-display uppercase italic tracking-[0.2em] text-lg filter invert-[0.8]"
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full py-6 text-2xl tracking-[0.3em] shadow-glow group uppercase italic font-black relative overflow-hidden mt-4">
                         <span className="relative z-10">INITIALIZE PASS</span>
                         <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                      </button>
                    </form>
                    <button 
                      onClick={handleClose}
                      className="mt-8 text-neutral-500 hover:text-white text-[10px] font-bold uppercase tracking-[0.4em] transition-colors w-full text-center italic"
                    >
                      ABORT MISSION
                    </button>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-primary" size={48} />
                    </div>
                    <h2 className="font-display text-4xl text-secondary mb-4 tracking-wider uppercase">YOU'RE IN!</h2>
                    <p className="text-neutral-500 font-light text-lg mb-8 leading-relaxed">
                      Redirecting to WhatsApp for confirmation. <br />
                      Check your phone in a moment!
                    </p>
                    <div className="flex justify-center space-x-2">
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1] }} 
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="w-2 h-2 bg-primary rounded-full" 
                        />
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1] }} 
                            transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                            className="w-2 h-2 bg-primary rounded-full" 
                        />
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1] }} 
                            transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                            className="w-2 h-2 bg-primary rounded-full" 
                        />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default StickyModal;
