import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Phone, ArrowRight, ShieldPlus, Activity } from 'lucide-react';

const Signup = () => {
    return (
        <div className="min-h-screen bg-secondary flex items-center justify-center p-6 relative overflow-hidden pt-36 pb-36">
            {/* Global Mission Backgrounds */}
            <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-primary/5 blur-[250px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-[1000px] h-[1000px] bg-[#000]/20 blur-[200px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-md w-full relative z-10"
            >
                {/* Main Identity Card */}
                <div className="bg-neutral-900/60 backdrop-blur-2xl border border-white/5 p-10 lg:p-14 rounded-sm shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] relative group overflow-hidden">
                    {/* Glowing Accent */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-glow" />
                    
                    <div className="text-center mb-14 relative z-10">
                        <Link to="/" className="inline-block mb-10 group/logo">
                            <span className="text-5xl font-display font-black tracking-tighter text-white uppercase italic group-hover/logo:scale-110 transition-transform block">
                                FIT<span className="text-primary italic">ZONE</span>
                            </span>
                        </Link>
                        <div className="space-y-2">
                           <h2 className="text-5xl text-white font-display uppercase tracking-tight italic leading-tight">INITIALIZE <span className="text-primary italic">ENTRY</span></h2>
                           <p className="text-neutral-400 text-xs mt-3 italic font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                             <ShieldPlus size={14} className="text-primary" /> NEW ASSET DEPLOYMENT
                           </p>
                        </div>
                    </div>

                    <form className="space-y-8 relative z-10">
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-white flex items-center gap-2">
                                <Activity size={12} className="text-primary" /> WARRIOR PROFILE
                            </label>
                            <div className="relative group/input">
                                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within/input:text-primary transition-colors" size={20} />
                                <input 
                                    type="text" 
                                    placeholder="FULL IDENTITY" 
                                    className="w-full bg-black/60 border border-white/5 px-14 py-6 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition-all placeholder:text-neutral-800 text-white font-display uppercase italic tracking-widest text-lg" 
                                    required 
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="relative group/input">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within/input:text-primary transition-colors" size={20} />
                                <input 
                                    type="email" 
                                    placeholder="COMMS ADDRESS" 
                                    className="w-full bg-black/60 border border-white/5 px-14 py-6 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition-all placeholder:text-neutral-800 text-white font-display uppercase italic tracking-widest text-lg" 
                                    required 
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="relative group/input">
                                <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within/input:text-primary transition-colors" size={20} />
                                <input 
                                    type="tel" 
                                    placeholder="CONTACT ENCRYPT" 
                                    className="w-full bg-black/60 border border-white/5 px-14 py-6 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition-all placeholder:text-neutral-800 text-white font-display uppercase italic tracking-widest text-lg" 
                                    required 
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="relative group/input">
                                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within/input:text-primary transition-colors" size={20} />
                                <input 
                                    type="password" 
                                    placeholder="SECURE CODE" 
                                    className="w-full bg-black/60 border border-white/5 px-14 py-6 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition-all placeholder:text-neutral-800 text-white font-display uppercase italic tracking-widest text-lg" 
                                    required 
                                />
                            </div>
                        </div>

                        <div className="pt-8">
                           <button type="submit" className="btn-primary w-full py-6 text-xl tracking-[0.3em] shadow-glow group uppercase italic font-black relative overflow-hidden">
                               <span className="relative z-10 flex items-center justify-center gap-4">
                                   COMMIT DEPLOYMENT <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform" />
                               </span>
                               <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                           </button>
                        </div>
                    </form>

                    <div className="mt-16 pt-10 border-t border-white/5 text-center relative z-10">
                         <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest italic leading-none">
                            EXISTING MEMBER? <Link to="/login" className="text-primary hover:text-white transition-colors pl-2 font-black">LOGIN ACCESS</Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;
