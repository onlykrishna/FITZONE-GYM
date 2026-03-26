import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Users, Shield, Zap, Star, MapPin, Phone, Dumbbell, Activity, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeDTilt from '../components/ThreeDTilt';

const Home = () => {
  const stats = [
    { label: 'Trial Signups', value: '+35', sub: 'Per Month' },
    { label: 'Member Retention', value: '+28%', sub: 'Higher Lift' },
    { label: 'PageSpeed Score', value: '93', sub: 'Top Loading' },
    { label: 'Built Timeline', value: '3 Wks', sub: 'Fast Track' },
  ];

  const categories = [
    { title: 'HIIT', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop', desc: 'High Intensity Interval Training to burn fat & build stamina.' },
    { title: 'Yoga', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop', desc: 'Find your balance, flexibility, and inner peace.' },
    { title: 'Strength', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop', desc: 'Pure power. Build muscle with elite coaching.' },
    { title: 'Zumba', img: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=800&auto=format&fit=crop', desc: 'Dance your way to fitness with high energy.' },
  ];

  const trainers = [
    { name: 'Rahul Verma', role: 'Head Coach', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop' },
    { name: 'Sarah Singh', role: 'Yoga Specialist', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop' },
    { name: 'Mike Johnson', role: 'Strength Lead', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop' },
  ];

  const testimonials = [
    { name: 'Amit K.', quote: 'FitZone is a game changer. The community is so supportive and the trainers are top-notch.', role: 'Member for 2 Years' },
    { name: 'Priya R.', quote: 'The class schedule fits perfectly with my office timings. Best HIIT classes in the city!', role: 'Group Class Regular' },
    { name: 'Siddharth M.', quote: 'I have tried other gyms, but the personal attention here is unmatched. Genuine results.', role: 'Personal Training' },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* BG Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/hero-bg.png"
            className="w-full h-full object-cover scale-105"
            alt="Gym Interior"
          />
          <div className="absolute inset-0 bg-secondary/70 backdrop-blur-[2px]" />
          
          {/* 3D Animative Flashes (Decorative Icons) */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
             <motion.div animate={{ y: [0, -40, 0], rotate: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 8 }} className="absolute top-[20%] left-[10%] text-primary/30"><Dumbbell size={120} /></motion.div>
             <motion.div animate={{ y: [0, 50, 0], rotate: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 10, delay: 1 }} className="absolute bottom-[20%] right-[10%] text-primary/30"><Activity size={100} /></motion.div>
             <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.5, 0.1] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <ThreeDTilt>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="space-y-6"
            >
                <div className="relative inline-block px-4">
                    <span className="text-primary font-display tracking-[0.6em] font-black text-xl block uppercase">The Ultimate Fitness Destination</span>
                </div>
                
                <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] text-white leading-[0.85] tracking-tighter font-display italic uppercase">
                    TRAIN <span className="text-primary hover:text-white transition-colors cursor-default drop-shadow-[0_0_20px_rgba(232,82,26,0.3)]">HARDER.</span> <br />
                    LIVE <span className="text-primary italic drop-shadow-[0_0_20px_rgba(232,82,26,0.2)]">BETTER.</span>
                </h1>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-12">
                <Link 
                  to="/free-trial"
                  className="btn-primary w-full md:w-auto text-2xl px-16 py-8 shadow-[0_0_50px_rgba(232,82,26,0.3)] hover:shadow-primary/50 group bg-primary border-0 text-center"
                  style={{ transform: "translateZ(30px)" }}
                >
                    CLAIM FREE PASS <ArrowRight className="inline-block ml-3 group-hover:translate-x-3 transition-transform" />
                </Link>
                <Link 
                  to="/classes" 
                  className="btn-ghost w-full md:w-auto text-2xl px-16 py-8 text-white border-white/20 hover:bg-white hover:text-secondary bg-transparent"
                  style={{ transform: "translateZ(20px)" }}
                >
                    VIEW CLASSES
                </Link>
                </div>
            </motion.div>
          </ThreeDTilt>
        </div>

        {/* Scrolling Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hidden md:block"
        >
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-12 md:py-16 relative z-20 -mt-16 mx-4 md:mx-24 rounded-sm shadow-[0_20px_60px_-15px_rgba(232,82,26,0.5)] md:skew-x-[-3deg] overflow-hidden border-r-8 border-secondary">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 md:skew-x-[3deg]">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl md:text-6xl font-display text-secondary font-black mb-1 group-hover:scale-110 transition-transform tracking-tight">{stat.value}</div>
              <div className="text-secondary font-display tracking-[0.2em] text-[10px] md:text-xs uppercase font-bold">{stat.label}</div>
              <div className="text-white/70 text-[8px] md:text-[10px] font-light uppercase tracking-[0.3em] font-black italic">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Rest of the Home components (Categories, Why us, etc.) remained in my mind but I should rewrite fully since I am using write_to_file */}
      {/* (Adding categories and trainers with 3D tilt as well) */}
      
      {/* Categories Grid */}
      <section className="py-40 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 blur-[200px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 space-y-10 md:space-y-0">
            <div className="space-y-6">
              <span className="text-primary font-display tracking-[0.5em] uppercase font-black text-sm block">Program Selection</span>
              <h2 className="text-7xl lg:text-8xl text-white tracking-tight uppercase italic leading-none">THE <span className="text-primary">WARRIOR</span> <br/> REPERTOIRE</h2>
            </div>
            <div className="max-w-md space-y-6 border-l-2 border-primary/20 pl-8">
              <p className="text-neutral-400 font-light text-lg">
                Every session is a battle. Every battle is progress. Choose your discipline and dominate.
              </p>
              <Link to="/classes" className="flex items-center space-x-3 text-primary font-display tracking-widest uppercase hover:text-white transition-colors group">
                 <span>Explore all classes</span>
                 <ArrowRight className="group-hover:translate-x-3 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <ThreeDTilt key={cat.title}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => window.dispatchEvent(new CustomEvent('open-elite-modal'))}
                  className="group relative h-[600px] overflow-hidden rounded-sm cursor-pointer shadow-3xl transition-all duration-1000"
                >
                  <img 
                    src={cat.img} 
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-1000 scale-105 group-hover:scale-110" 
                    loading="lazy"
                    alt={cat.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent p-10 flex flex-col justify-end z-10">
                    <span className="text-primary font-display text-sm tracking-[0.4em] uppercase mb-2 font-black">Elite Class</span>
                    <h3 className="text-5xl text-white font-display italic mb-4 uppercase tracking-tighter">{cat.title}</h3>
                    <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                      {cat.desc}
                    </p>
                    <div className="w-12 h-1 bg-primary group-hover:w-full transition-all duration-700" />
                  </div>
                </motion.div>
              </ThreeDTilt>
            ))}
          </div>
        </div>
      </section>

      {/* Why FitZone Section */}
      <section className="py-40 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative group">
               <ThreeDTilt>
                  <div className="relative z-10 shadow-3xl">
                     <img 
                      src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full rounded-sm grayscale group-hover:grayscale-0 transition-all duration-1000"
                     />
                  </div>
               </ThreeDTilt>
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
               <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-secondary/5 rounded-full" />
               <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-1/2 -right-16 z-20 hidden lg:block"
               >
                  <div className="bg-secondary p-10 rounded-sm shadow-3xl border-l-[10px] border-primary max-w-sm rotate-3">
                     <TrendingUp className="text-primary mb-6" size={48} />
                     <h4 className="text-white font-display text-3xl uppercase tracking-tighter mb-4 italic leading-none">RESULTS <span className="text-primary">GUARANTEED.</span></h4>
                     <p className="text-neutral-500 font-light text-sm uppercase tracking-widest leading-relaxed">
                        Data-driven protocols engineered for the Indian physique.
                     </p>
                  </div>
               </motion.div>
            </div>

            <div className="space-y-16">
               <div className="space-y-6">
                  <span className="text-primary font-display tracking-widest uppercase font-black text-sm block">Authenticity First</span>
                  <h2 className="text-7xl text-secondary font-display tracking-tight leading-none italic uppercase">WE BUILD <span className="text-primary underline decoration-primary/20">WARRIORS</span></h2>
                  <p className="text-neutral-600 text-xl font-light leading-relaxed max-w-xl italic">
                     "Large franchise gyms win on brand awareness and massive advertising budgets. FitZone wins on soul, sweat, and individual strategy."
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {[
                    { title: 'The Lab', desc: 'Elite biomechanical testing.', icon: Activity },
                    { title: 'The Brotherhood', desc: 'Real community support.', icon: Users },
                    { title: 'The Strategy', desc: 'Personal macro tracking.', icon: Star },
                    { title: 'The Gear', desc: 'Best equipment in New Delhi.', icon: Shield },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col space-y-4">
                       <div className="w-12 h-12 bg-primary text-secondary flex items-center justify-center rounded-sm">
                          <item.icon size={24} />
                       </div>
                       <h5 className="text-2xl text-secondary font-display uppercase italic tracking-widest">{item.title}</h5>
                       <p className="text-neutral-500 text-xs font-bold uppercase tracking-[0.2em]">{item.desc}</p>
                    </div>
                  ))}
               </div>

               <Link to="/free-trial" className="btn-primary flex items-center space-x-4 shadow-2xl w-fit">
                   <span>GET STARTED NOW</span>
                   <ArrowRight size={24} />
               </Link>
            </div>
          </div>
      </section>

      {/* Trainers Section */}
      <section className="py-40 bg-secondary relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-32">
          <span className="text-primary font-display tracking-widest uppercase font-black text-sm block mb-4">Master Instructors</span>
          <h2 className="text-7xl md:text-8xl text-white tracking-tight uppercase italic leading-none">MEET THE <span className="text-primary">FORCE</span></h2>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-black text-white/5 uppercase select-none -z-0">LEGACY</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            {trainers.map((trainer, i) => (
              <ThreeDTilt key={i}>
                <div 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-elite-modal'))}
                  className="group relative bg-neutral-800 rounded-sm overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-700 h-[650px] shadow-3xl cursor-pointer"
                >
                   <img 
                    src={trainer.img} 
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                    loading="lazy"
                    alt={trainer.name}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent z-10 flex flex-col justify-end p-10">
                      <span className="text-primary font-display tracking-[0.3em] font-bold text-xs uppercase mb-2 relative z-20">{trainer.role}</span>
                      <h3 className="text-5xl text-white font-display uppercase italic tracking-tighter mb-4 relative z-20">{trainer.name.split(' ')[0]} <span className="text-primary">{trainer.name.split(' ')[1]}</span></h3>
                      <p className="text-neutral-300 text-sm font-light uppercase tracking-widest mb-10 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 relative z-20">
                         Leading transformation strategy for over {i + 8} years.
                      </p>
                      <Link to="/trainers" className="btn-ghost py-4 px-8 text-white w-fit text-sm relative z-20 border-white/20">VIEW PROFILE</Link>
                   </div>
                </div>
              </ThreeDTilt>
           ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="relative py-40 overflow-hidden bg-primary group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center space-y-12">
           <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-6"
           >
              <h2 className="text-5xl sm:text-7xl md:text-[10rem] font-display text-secondary leading-[0.8] tracking-tighter uppercase italic font-black">
                 YOUR LEGACY <br />
                 <span className="text-white drop-shadow-3xl">STARTS TODAY.</span>
              </h2>
              <p className="text-secondary font-display text-2xl md:text-4xl uppercase tracking-widest italic pt-8 px-4">
                 CLAIM YOUR FREE DAY PASS BEFORE SPOTS FILL.
              </p>
           </motion.div>
           
           <div className="flex flex-col md:flex-row gap-8 pt-10 w-full md:w-auto">
             <Link to="/free-trial" className="bg-secondary text-white font-display text-4xl px-20 py-10 rounded-sm hover:-rotate-1 hover:scale-110 active:scale-95 transition-all shadow-3xl skew-x-[-10deg] text-center">
               <span className="skew-x-[10deg] block tracking-tighter italic">I WANT THE FREE PASS</span>
             </Link>
           </div>
           
           <div className="flex items-center space-x-4 text-secondary/40 font-display text-xs uppercase tracking-[0.5em] pt-12">
              <span className="w-12 h-1 bg-secondary/10" />
              <span>No Credit Card Required</span>
              <span className="w-12 h-1 bg-secondary/10" />
           </div>
        </div>
        
        {/* Floating Background Text */}
        <div className="absolute top-20 right-[-10%] opacity-10 select-none hidden lg:block">
           <span className="text-[25vw] font-display font-black text-white italic leading-none">FITZONE</span>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 bg-zinc-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
             <div className="text-center mb-32 space-y-4">
                <span className="text-primary font-display tracking-widest uppercase font-black text-sm block">Real Feedback</span>
                <h2 className="text-7xl text-secondary tracking-tight font-display uppercase italic font-black">THE <span className="text-primary underline decoration-primary/10">PROOF</span></h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {testimonials.map((test, i) => (
                   <div key={i} className="p-12 bg-white border border-zinc-100 rounded-sm shadow-xl relative group hover:shadow-3xl transition-all duration-700 hover:-translate-y-4">
                      <div className="absolute -top-6 left-12 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-4xl italic group-hover:scale-125 transition-transform shadow-lg shadow-primary/30">"</div>
                      <p className="text-secondary/80 font-light text-xl leading-relaxed italic mb-12 pt-6">
                        {test.quote}
                      </p>
                      <div className="flex items-center space-x-6 border-t border-zinc-50 pt-10">
                         <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-display text-3xl italic">
                            {test.name.split(' ')[0][0]}
                         </div>
                         <div className="space-y-1">
                            <h4 className="text-2xl text-secondary font-display uppercase leading-none italic">{test.name}</h4>
                            <p className="text-primary font-display tracking-widest text-xs uppercase font-black">{test.role}</p>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
      </section>
    </div>
  );
};

export default Home;
