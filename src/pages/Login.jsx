import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, ShieldCheck, Activity, AlertCircle } from 'lucide-react';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Secure Admin Protocol
        if (email.toLowerCase() === 'admin@fitzone.com' && password === 'fitzone_elite_2026') {
            navigate('/admin');
        } else {
            setError('ACCESS DENIED: INVALID WARRIOR IDENTITY OR KEY');
            setTimeout(() => setError(''), 3000);
        }
    };
    return (
        <div className="min-h-screen bg-secondary flex items-center justify-center p-6 relative overflow-hidden pt-32 pb-24">
            {/* Mission Critical Backgrounds */}
            <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-primary/5 blur-[250px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-[1000px] h-[1000px] bg-[#000]/20 blur-[200px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-md w-full relative z-10"
            >
                {/* Main Card */}
                <div className="bg-neutral-900/60 backdrop-blur-2xl border border-white/5 p-10 lg:p-14 rounded-sm shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] relative group overflow-hidden">
                    {/* Glowing Top Bar */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow animate-pulse" />
                    
                    {/* Scanner Animation Line */}
                    <motion.div 
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 w-full h-[1px] bg-primary/20 pointer-events-none z-0"
                    />

                    <div className="text-center mb-14 relative z-10">
                        <Link to="/" className="inline-block mb-10 group/logo">
                            <span className="text-5xl font-display font-black tracking-tighter text-white uppercase italic group-hover/logo:scale-110 transition-transform block">
                                FIT<span className="text-primary italic">ZONE</span>
                            </span>
                        </Link>
                        <div className="space-y-2">
                           <h2 className="text-5xl text-white font-display uppercase tracking-tight italic leading-tight">LOGIN TO <span className="text-primary italic">BASE</span></h2>
                           <p className="text-neutral-400 text-xs mt-3 italic font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                             <ShieldCheck size={14} className="text-primary" /> MISSION DATA CRYPTED
                           </p>
                        </div>
                    </div>

                    <form className="space-y-10 relative z-10" onSubmit={handleLogin}>
                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="p-4 bg-red-500/10 border border-red-500/20 rounded-sm text-red-500 text-[9px] font-bold uppercase tracking-widest flex items-center gap-3 italic"
                            >
                                <AlertCircle size={14} /> {error}
                            </motion.div>
                        )}
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-white flex items-center gap-2">
                                <Activity size={12} className="text-primary" /> WARRIOR IDENTITY
                            </label>
                            <div className="relative group/input">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within/input:text-primary transition-colors" size={20} />
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="WARRIOR@FITZONE.COM" 
                                    className="w-full bg-black/60 border border-white/5 px-14 py-6 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition-all placeholder:text-neutral-800 text-white font-display uppercase italic tracking-widest text-lg" 
                                    required 
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-[10px] font-bold uppercase tracking-[0.5em] text-white">ACCESS KEY</label>
                                <Link to="#" className="text-[9px] font-bold uppercase tracking-widest text-primary hover:text-white transition-colors italic font-bold">LOST CODE?</Link>
                            </div>
                            <div className="relative group/input">
                                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within/input:text-primary transition-colors" size={20} />
                                <input 
                                    type="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••" 
                                    className="w-full bg-black/60 border border-white/5 px-14 py-6 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition-all placeholder:text-neutral-800 text-white font-display uppercase italic tracking-widest text-lg" 
                                    required 
                                />
                            </div>
                        </div>

                        <div className="pt-6">
                           <button type="submit" className="btn-primary w-full py-6 text-xl tracking-[0.3em] shadow-glow group uppercase italic font-black relative overflow-hidden">
                               <span className="relative z-10 flex items-center justify-center gap-4">
                                   INITIALIZE SESSION <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform" />
                               </span>
                               <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                           </button>
                        </div>
                    </form>

                    <div className="mt-16 pt-10 border-t border-white/5 text-center relative z-10">
                        <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest italic leading-none">
                            NO ACCOUNT? <Link to="/signup" className="text-primary hover:text-white transition-colors pl-2 font-black">REGISTER IDENTITY</Link>
                        </p>
                    </div>
                </div>
                
                {/* Decorative Footer Link */}
                <div className="text-center mt-12">
                   <Link to="/" className="text-white/20 text-[10px] font-display uppercase tracking-[0.5em] hover:text-primary transition-colors italic flex items-center justify-center gap-4">
                       <span className="w-10 h-[1px] bg-white/10" /> EXIT SYSTEM <span className="w-10 h-[1px] bg-white/10" />
                   </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
