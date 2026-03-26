import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Star, Zap, Weight, Heart, Info, ArrowRight, Instagram, Twitter, Linkedin } from 'lucide-react';

const Trainers = () => {
    const trainers = [
        {
            id: 'rahul-verma',
            name: 'Rahul Verma',
            role: 'Head Coach',
            experience: '12+ Years',
            specialties: ['Strength & Conditioning', 'Body Transformation', 'Athletic Performance'],
            certs: ['ACE Certified', 'CrossFit Level 2', 'Nasm Nutrition'],
            img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?q=80&w=2070&auto=format&fit=crop',
            quote: 'Training is not just about the body, it is about the mindset.'
        },
        {
            id: 'sarah-singh',
            name: 'Sarah Singh',
            role: 'Yoga & Mobility Lead',
            experience: '8+ Years',
            specialties: ['Vinyasa Flow', 'Ashtanga', 'Flexibility & Recovery'],
            certs: ['Yoga Alliance 500H', 'Functional Mobility Specialist'],
            img: 'https://images.unsplash.com/photo-1518611012118-2969c63700b7?q=80&w=2070&auto=format&fit=crop',
            quote: 'Find your flow. Balance is the key to longevity.'
        },
        {
            id: 'mike-johnson',
            name: 'Mike Johnson',
            role: 'Strength & HIIT Specialist',
            experience: '10+ Years',
            specialties: ['Kettlebell Training', 'HIIT', 'Powerlifting'],
            certs: ['StrongFirst Level 1', 'Precision Nutrition'],
            img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=2070&auto=format&fit=crop',
            quote: 'Push your limits. The only easy day was yesterday.'
        },
        {
            id: 'deepika-k',
            name: 'Deepika K.',
            role: 'Zumba & Group Dance',
            experience: '6+ Years',
            specialties: ['Zumba Fitness', 'Bolly-fit', 'Cardio Dance'],
            certs: ['Zumba Licensed B1/B2', 'Group Fitness Specialist'],
            img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
            quote: 'Dance like everyone is watching. Fitness should be fun.'
        }
    ];

    return (
        <div className="pt-32 pb-32 bg-secondary flex flex-col items-center overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-24 relative z-10">
                <span className="text-primary font-display tracking-widest uppercase font-bold text-sm block mb-4">Elite Coaching Staff</span>
                <h1 className="text-6xl md:text-8xl text-white font-display tracking-tight leading-none italic uppercase">
                    THE ARCHITECTS OF <br />
                    <span className="text-primary underline decoration-primary/20">TRANSFORMATION</span>
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full" />
                <p className="text-neutral-500 font-light text-lg max-w-3xl mx-auto pt-8 leading-relaxed">
                    Our trainers are more than just fitness experts—they are mentors, strategists, and community leaders with a combined experience of over 40 years.
                </p>
            </div>

            {/* Trainers Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 w-full relative z-10">
                {trainers.map((trainer, idx) => (
                    <motion.div
                        key={trainer.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex flex-col lg:flex-row bg-neutral-900 border border-white/5 rounded-sm overflow-hidden hover:border-primary/40 transition-all duration-700 relative h-full lg:h-[500px]"
                    >
                        {/* Image Section */}
                        <div className="w-full lg:w-2/5 relative h-[400px] lg:h-full overflow-hidden">
                            <img src={trainer.img} className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-1000 scale-105 group-hover:scale-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-900" />
                            <div className="absolute bottom-6 left-6 flex space-x-3 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 delay-300">
                                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 lg:w-8 lg:h-8 flex items-center justify-center bg-primary text-secondary rounded-full hover:bg-white transition-colors shadow-lg">
                                        <Icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center relative space-y-6">
                            <div className="space-y-1">
                                <span className="text-primary font-display tracking-widest text-xs font-bold uppercase block">{trainer.role}</span>
                                <h3 className="text-4xl text-white font-display uppercase italic tracking-widest">{trainer.name}</h3>
                                <div className="flex items-center space-x-2 text-neutral-500 text-[10px] font-bold uppercase tracking-[0.2em] pt-2">
                                    <Award size={14} className="text-primary" />
                                    <span>{trainer.experience} Experience</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {trainer.specialties.map(spec => (
                                        <span key={spec} className="px-3 py-1 bg-white/5 text-neutral-400 text-[10px] uppercase font-bold tracking-widest border border-white/5 rounded-full">
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-neutral-500 font-light italic text-sm border-l-2 border-primary/30 pl-4 py-2 leading-relaxed">
                                    "{trainer.quote}"
                                </p>
                            </div>

                            <div className="pt-8 border-t border-white/5 space-y-4">
                                <h4 className="text-white font-display tracking-widest text-xs uppercase font-bold flex items-center space-x-2">
                                    <Star size={14} className="text-primary" />
                                    <span>Core Certifications</span>
                                </h4>
                                <ul className="grid grid-cols-1 gap-2">
                                    {trainer.certs.map(cert => (
                                        <li key={cert} className="text-neutral-400 text-[11px] uppercase tracking-widest flex items-center space-x-2">
                                            <div className="w-1 h-1 bg-primary rounded-full" />
                                            <span>{cert}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-10 flex space-x-4">
                                <button className="btn-primary py-3 px-8 text-sm flex-1">FREE CONSULT</button>
                                <button className="w-12 h-12 flex items-center justify-center border border-white/10 text-white rounded-sm hover:border-primary hover:text-primary transition-colors">
                                    <Info size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-display font-black text-white/5 uppercase italic tracking-tighter select-none -z-0 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                             ELITE
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Values Section */}
            <div className="mt-40 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { icon: Heart, title: 'Empathy', desc: 'We understand your struggle.' },
                    { icon: Zap, title: 'Energy', desc: 'No boring workouts here.' },
                    { icon: Weight, title: 'Discipline', desc: 'Consistency beats talent.' },
                    { icon: Star, title: 'Growth', desc: '1% Better every single day.' },
                ].map((item, i) => (
                    <div key={i} className="text-center space-y-4 group">
                        <div className="w-16 h-16 bg-white/5 border border-white/10 mx-auto rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110">
                            <item.icon size={28} />
                        </div>
                        <h4 className="text-xl text-white font-display tracking-widest uppercase">{item.title}</h4>
                        <p className="text-neutral-500 text-sm font-light uppercase tracking-widest">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Background Decorative Circles */}
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        </div>
    );
};

export default Trainers;
