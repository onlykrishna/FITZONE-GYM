import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! Our team will contact you within 24 hours.');
  };

  return (
    <div className="pt-32 pb-32 bg-secondary flex flex-col items-center overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-24 relative z-10 w-full">
        <span className="text-primary font-display tracking-widest uppercase font-bold text-sm block mb-4 italic">Get in Touch</span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-display tracking-tight leading-none italic uppercase">
          REACH OUT TO <br />
          <span className="text-primary underline decoration-primary/20">FIT<span className="text-white">ZONE</span></span>
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        {/* Contact Info & Map */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 bg-neutral-900 border border-white/5 rounded-sm shadow-xl group hover:border-primary transition-all duration-300">
               <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary mb-6 transition-all duration-300">
                  <MapPin size={24} />
               </div>
               <h3 className="text-xl text-white font-display tracking-widest uppercase mb-2">Location</h3>
               <p className="text-neutral-500 text-sm font-light leading-relaxed">
                  123 Fitness Street, South Avenue, New Delhi, India 110001
               </p>
            </div>
            
            <div className="p-8 bg-neutral-900 border border-white/5 rounded-sm shadow-xl group hover:border-primary transition-all duration-300">
               <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary mb-6 transition-all duration-300">
                  <Phone size={24} />
               </div>
               <h3 className="text-xl text-white font-display tracking-widest uppercase mb-2">Phone</h3>
               <p className="text-neutral-500 text-sm font-light leading-relaxed">
                  +91 99999 99999 <br /> +91 88888 88888
               </p>
            </div>

            <div className="p-8 bg-neutral-900 border border-white/5 rounded-sm shadow-xl group hover:border-primary transition-all duration-300">
               <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary mb-6 transition-all duration-300">
                  <Mail size={24} />
               </div>
               <h3 className="text-xl text-white font-display tracking-widest uppercase mb-2">Email</h3>
               <p className="text-neutral-500 text-sm font-light leading-relaxed">
                  hello@fitzonegym.com <br /> support@fitzonegym.com
               </p>
            </div>

            <div className="p-8 bg-neutral-900 border border-white/5 rounded-sm shadow-xl group hover:border-primary transition-all duration-300">
               <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary mb-6 transition-all duration-300">
                  <Clock size={24} />
               </div>
               <h3 className="text-xl text-white font-display tracking-widest uppercase mb-2">Hours</h3>
               <div className="flex justify-between items-center text-neutral-500 text-xs font-bold uppercase tracking-widest mt-2">
                  <span>Mon-Sat</span>
                  <span>6 AM - 10 PM</span>
               </div>
               <div className="flex justify-between items-center text-neutral-500 text-xs font-bold uppercase tracking-widest mt-1">
                  <span>Sunday</span>
                  <span>8 AM - 4 PM</span>
               </div>
            </div>
          </div>

          {/* Social Links Bar */}
          <div className="p-10 bg-primary rounded-sm flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative overflow-hidden group">
             <div className="relative z-10">
               <h4 className="text-secondary font-display text-4xl uppercase leading-none tracking-tight">JOIN THE <br /> <span className="text-white">CONVERSATION</span></h4>
             </div>
             <div className="flex space-x-6 relative z-10">
                {[Facebook, Twitter, Instagram, Globe].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 flex items-center justify-center bg-secondary text-white rounded-full hover:bg-white hover:text-secondary hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                        <Icon size={20} />
                    </a>
                ))}
             </div>
             <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-xl rounded-full group-hover:scale-150 transition-transform duration-1000 -z-0" />
          </div>

          {/* Map Container - Aspect Ratio forced for desktop */}
          <div className="w-full h-[300px] rounded-sm bg-neutral-800 border-4 border-white/5 relative group overflow-hidden">
             <div 
               className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?q=80&w=2070&auto=format&fit=crop)' }} 
             />
             <div className="absolute inset-0 bg-secondary/40 backdrop-blur-[1px] group-hover:backdrop-blur-0 transition-all duration-1000" />
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-secondary p-8 rounded-sm shadow-2xl border-l-[8px] border-primary skew-x-[-10deg]">
                 <p className="font-display text-white text-3xl uppercase tracking-tighter skew-x-[10deg]">WE ARE <span className="text-primary italic">HERE.</span></p>
               </div>
             </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative">
          <div className="p-10 md:p-14 bg-white rounded-sm shadow-3xl text-secondary overflow-hidden relative">
            {/* Form Decorative Side Strip */}
            <div className="absolute top-0 right-0 h-full w-2 bg-primary" />
            
            <div className="space-y-2 mb-10">
                <span className="text-primary font-display tracking-widest uppercase font-black text-sm block">Let's Talk</span>
                <h2 className="text-4xl text-secondary font-display uppercase tracking-tight leading-none italic">DROP US A <span className="text-primary italic">MESSAGE</span></h2>
                <div className="w-12 h-1.5 bg-secondary mt-4" />
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">Full Name</label>
                     <input type="text" placeholder="John Doe" className="w-full bg-neutral-50 border border-neutral-100 px-6 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-neutral-300" required />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">Email Address</label>
                     <input type="email" placeholder="john@example.com" className="w-full bg-neutral-50 border border-neutral-100 px-6 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-neutral-300" required />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">Phone</label>
                     <input type="tel" placeholder="+91 XXXX XXXX XX" className="w-full bg-neutral-50 border border-neutral-100 px-6 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-neutral-300" required />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">Subject</label>
                     <select className="w-full bg-neutral-50 border border-neutral-100 px-6 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer">
                        <option>General Inquiry</option>
                        <option>Personal Training</option>
                        <option>Corporate Tie-up</option>
                        <option>Membership Problem</option>
                     </select>
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">How can we help?</label>
                  <textarea rows={6} placeholder="Type your message here..." className="w-full bg-neutral-50 border border-neutral-100 px-6 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-neutral-300 resize-none" required />
               </div>

               <div className="pt-6">
                  <button type="submit" className="btn-primary w-full py-6 text-2xl tracking-[0.1em] shadow-xl group uppercase italic">
                     SEND MESSAGE NOW <Send size={20} className="inline-block ml-3 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </button>
               </div>
               
               <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-[0.3em] w-full text-center mt-6">
                  * All submissions are processed via secure serverless functions.
               </p>
            </form>

            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 blur-[80px] rounded-full pointer-events-none -z-0" />
          </div>
        </div>
      </div>

      {/* Background Decorative Graphic */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-5 pointer-events-none select-none -z-0">
         <span className="font-display text-[30vw] font-black uppercase text-white leading-none tracking-tighter">CONTACT</span>
      </div>
    </div>
  );
};

export default Contact;
