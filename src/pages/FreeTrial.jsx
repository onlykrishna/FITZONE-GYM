import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Shield, Award, Zap, ArrowRight, User, Smartphone, Calendar, MapPin, Phone, Star, Mail } from 'lucide-react';

const FreeTrial = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // WhatsApp logic same as modal
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const date = formData.get('date');
        const message = `Welcome to FitZone! Your free day pass is confirmed for ${date}. We look forward to seeing you, ${name}!`;
        const waUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
        
        setTimeout(() => {
            window.open(waUrl, '_blank');
        }, 3000);
    };

    return (
        <div className="pt-32 pb-32 bg-secondary min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
            {/* Background Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none">
                <span className="font-display text-[50vw] font-black uppercase text-white leading-none tracking-tighter italic">FREE</span>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                
                {/* Information Side */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <span className="text-primary font-display tracking-[0.5em] font-black text-xl block uppercase italic">24-Hour Access</span>
                        <h1 className="text-6xl md:text-9xl text-white font-display tracking-tight leading-none italic uppercase">
                            YOUR FIRST <br />
                            <span className="text-primary italic">VICTORY</span> IS FREE
                        </h1>
                        <p className="text-neutral-400 font-light text-xl max-w-xl leading-relaxed italic border-l-4 border-primary pl-8 py-4 bg-white/5 backdrop-blur-sm rounded-sm">
                            "Stop overthinking. Start performing. Claim your 24-hour pass and experience the machine first-hand."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { icon: Award, title: 'Elite Gear', desc: 'Rogue, Matrix & Precor.' },
                            { icon: Zap, title: 'Pro Classes', desc: 'HIIT, Yoga & Strength.' },
                            { icon: Shield, title: 'Safe Zone', desc: 'Sanitized & Secure.' },
                            { icon: Star, title: 'Top Coaches', desc: 'Expert guidance.' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start space-x-4 group">
                                <div className="p-3 bg-primary/10 border border-primary/20 rounded-sm text-primary group-hover:bg-primary group-hover:text-secondary transition-all">
                                    <item.icon size={20} />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-lg text-white font-display uppercase tracking-widest">{item.title}</h4>
                                    <p className="text-neutral-500 text-xs font-light uppercase tracking-widest leading-none">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-10 flex items-center space-x-10 border-t border-white/5">
                        <div className="flex -space-x-4">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-secondary bg-neutral-800 flex items-center justify-center text-white font-display text-xs">
                                    {i}
                                </div>
                            ))}
                        </div>
                        <div className="space-y-1">
                            <div className="flex text-primary">
                                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">JOIN 2,500+ RESIDENTS</p>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-white p-10 md:p-14 rounded-sm shadow-3xl overflow-hidden relative"
                            >
                                <div className="absolute top-0 right-0 w-2 h-full bg-primary" />
                                
                                <div className="space-y-2 mb-10">
                                    <span className="text-primary font-display tracking-widest uppercase font-black text-sm block">Start Now</span>
                                    <h2 className="text-5xl text-secondary font-display uppercase tracking-tight leading-none italic">CLAIM PASS</h2>
                                    <p className="text-neutral-400 font-light text-sm pt-4 italic leading-relaxed">
                                        Fill in your details below. We'll send your pass instantly via WhatsApp.
                                    </p>
                                </div>

                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="relative flex items-center">
                                        <User className="absolute left-6 text-neutral-400" size={20} />
                                        <input required name="name" type="text" placeholder="Full Name" className="w-full bg-neutral-50 border border-neutral-100 pl-16 pr-8 py-5 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-neutral-300" />
                                    </div>
                                    <div className="relative flex items-center">
                                        <Smartphone className="absolute left-6 text-neutral-400" size={20} />
                                        <input required name="phone" type="tel" placeholder="WhatsApp Number" className="w-full bg-neutral-50 border border-neutral-100 pl-16 pr-8 py-5 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-neutral-300" />
                                    </div>
                                    <div className="relative flex items-center">
                                        <Calendar className="absolute left-6 text-neutral-400" size={20} />
                                        <input required name="date" type="date" className="w-full bg-neutral-50 border border-neutral-100 pl-16 pr-8 py-5 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-neutral-500 font-bold uppercase" />
                                    </div>

                                    <button type="submit" className="btn-primary w-full py-6 text-2xl tracking-[0.1em] shadow-xl group uppercase italic">
                                        GET MY PASS <ArrowRight size={24} className="inline-block ml-3 group-hover:translate-x-2 transition-transform" />
                                    </button>

                                    <div className="flex items-center justify-center space-x-2 opacity-30 pt-4">
                                        <Shield size={12} />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">SECURE 128-BIT ENCRYPTION</span>
                                    </div>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white p-14 rounded-sm shadow-3xl text-center relative"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-2 bg-primary rounded-b-full" />
                                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                                    <CheckCircle className="text-primary" size={48} />
                                </div>
                                <h2 className="text-5xl text-secondary font-display uppercase tracking-tight leading-none italic mb-6 italic underline decoration-primary/20">CONFIRMED!</h2>
                                <p className="text-neutral-500 font-light text-xl leading-relaxed mb-10 italic">
                                    Your data has been secured. <br />
                                    Redirecting you to <span className="text-primary font-bold">WhatsApp</span> for your pass.
                                </p>
                                <div className="flex justify-center space-x-2">
                                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-3 h-3 bg-primary rounded-full" />
                                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-3 h-3 bg-primary rounded-full" />
                                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-3 h-3 bg-primary rounded-full" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 border-8 border-primary/20 rounded-full" />
                    <div className="absolute top-20 -right-10 w-20 h-20 bg-primary/10 rounded-full" />
                </div>
            </div>

            {/* Footer Location Strip */}
            <div className="max-w-7xl mx-auto px-6 w-full mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12 text-white/40">
                <div className="flex items-center space-x-4">
                    <MapPin className="text-primary" size={24} />
                    <span className="text-xs uppercase font-bold tracking-[0.2em] leading-relaxed">123 Fitness Street, New Delhi</span>
                </div>
                <div className="flex items-center space-x-4">
                    <Phone className="text-primary" size={24} />
                    <span className="text-xs uppercase font-bold tracking-[0.2em] leading-relaxed">+91 99999 99999</span>
                </div>
                <div className="flex items-center space-x-4">
                    <Mail className="text-primary" size={24} />
                    <span className="text-xs uppercase font-bold tracking-[0.2em] leading-relaxed">trial@fitzonegym.com</span>
                </div>
            </div>
        </div>
    );
};

export default FreeTrial;
