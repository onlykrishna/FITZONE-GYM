import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, User, Calendar, ArrowRight, Star, TrendingUp, Search, Menu, X, Mail } from 'lucide-react';

const Blog = () => {
    const featuredPost = {
        title: 'Best Gyms in South Delhi: Why Local Beats Franchises',
        excerpt: 'Discover why local fitness communities are outperforming big-name franchises in results, community, and personalization.',
        author: 'Rahul Verma',
        date: 'March 20, 2025',
        readTime: '8 min read',
        category: 'Transformation',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop'
    };

    const recentPosts = [
        {
            title: 'How to Start a Fitness Journey in Your 30s',
            excerpt: 'The ultimate guide to mobility, strength training, and nutrition for the modern professional.',
            author: 'Sarah Singh',
            date: 'March 18, 2025',
            readTime: '6 min read',
            category: 'Beginner',
            image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop'
        },
        {
            title: 'HIIT vs Cardio: What is Best for Weight Loss?',
            excerpt: 'Breaking down the science of metabolism and which workout style delivers maximum caloric burn.',
            author: 'Mike Johnson',
            date: 'March 15, 2025',
            readTime: '10 min read',
            category: 'Science',
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop'
        },
        {
            title: 'Complete Guide to Gym Memberships in New Delhi',
            excerpt: 'Comparing prices, facilities, and contracts to help you make an informed decision.',
            author: 'Rahul Verma',
            date: 'March 12, 2025',
            readTime: '5 min read',
            category: 'Comparison',
            image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
        }
    ];

    return (
        <div className="pt-32 pb-32 bg-secondary flex flex-col items-center relative overflow-hidden">
            {/* Blog Header */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-24 space-y-6 relative z-10 w-full">
                <span className="text-primary font-display tracking-widest uppercase font-black text-sm block italic">FitZone Knowledge Hub</span>
                <h1 className="text-6xl md:text-8xl lg:text-[10rem] text-white font-display tracking-tight leading-[0.85] italic uppercase">
                    THE <span className="text-primary italic">WARRIOR</span> <br /> CHRONICLES
                </h1>
                <p className="text-neutral-400 font-light text-xl max-w-2xl mx-auto pt-8 leading-relaxed italic border-x border-primary/10 px-10">
                    Expert insights on strength, nutrition, and the local fitness landscape. Master your body and mind.
                </p>
                <div className="pt-16 flex flex-wrap justify-center gap-6">
                   {['All', 'Transformation', 'Nutrition', 'HIIT', 'Yoga', 'Lifestyle'].map(cat => (
                      <button key={cat} className="px-10 py-3 border border-white/5 bg-white/5 text-neutral-500 font-display text-xs uppercase tracking-[0.3em] rounded-sm hover:bg-primary hover:text-secondary hover:translate-y-[-2px] transition-all duration-300 italic">
                         {cat}
                      </button>
                   ))}
                </div>
            </div>

            {/* Featured Post */}
            <div className="max-w-7xl mx-auto px-6 w-full mb-32 relative z-10">
                <motion.div
                    whileHover={{ y: -10 }}
                    className="relative bg-neutral-900 rounded-sm overflow-hidden flex flex-col lg:flex-row h-full lg:min-h-[650px] group shadow-3xl border border-white/5"
                >
                    <div className="w-full lg:w-3/5 relative h-[400px] lg:h-auto overflow-hidden">
                        <img src={featuredPost.image} className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-opacity duration-1000 scale-105 group-hover:scale-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-900" />
                        <div className="absolute top-8 left-8 bg-primary/20 backdrop-blur-sm border border-primary/30 p-6 rounded-sm flex flex-col items-center justify-center">
                            <span className="font-display text-white text-4xl font-black italic">20</span>
                            <span className="text-primary font-display text-[10px] font-bold uppercase tracking-widest">MARCH</span>
                        </div>
                    </div>
                    <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center relative">
                        <div className="bg-primary text-secondary inline-block px-6 py-1 font-display tracking-[0.2em] text-[10px] uppercase font-bold rounded-sm mb-8 w-fit skew-x-[-15deg]">
                            <span className="skew-x-[15deg] block">FEATURED ARTICLE</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl text-white font-display uppercase tracking-tight italic mb-8 leading-tight group-hover:text-primary transition-colors">
                            {featuredPost.title}
                        </h2>
                        <p className="text-neutral-400 font-light text-xl mb-12 leading-relaxed italic border-l-2 border-primary/20 pl-8">
                            "{featuredPost.excerpt}"
                        </p>
                        <div className="flex items-center space-x-10 text-neutral-500 mb-14">
                            <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest">
                                <User size={16} className="text-primary" />
                                <span>{featuredPost.author}</span>
                            </div>
                            <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest">
                                <Clock size={16} className="text-primary" />
                                <span>{featuredPost.readTime}</span>
                            </div>
                        </div>
                        <Link to="#" className="btn-primary w-fit text-sm flex items-center group/btn shadow-2xl">
                            READ ARTICLE <ArrowRight className="ml-3 group-hover/btn:translate-x-3 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Recent Posts Grid */}
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                {recentPosts.map((post, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex flex-col space-y-8"
                    >
                        <div className="relative h-[400px] overflow-hidden rounded-sm bg-neutral-900 border border-white/5 group-hover:border-primary/30 transition-all duration-700">
                            <img src={post.image} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
                            <div className="absolute top-6 left-6">
                                <span className="bg-primary text-secondary font-display text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1 skew-x-[-15deg] shadow-xl">
                                    <span className="skew-x-[15deg] block">{post.category}</span>
                                </span>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 text-neutral-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                                <span>{post.date}</span>
                                <div className="w-1.5 h-1.5 bg-primary/30 rounded-full" />
                                <span>{post.readTime}</span>
                            </div>
                            <h3 className="text-3xl text-white font-display uppercase tracking-tight italic group-hover:text-primary transition-colors leading-none italic">{post.title}</h3>
                            <p className="text-neutral-500 font-light text-base line-clamp-3 leading-relaxed italic">
                                "{post.excerpt}"
                            </p>
                            <Link to="#" className="text-primary font-display tracking-widest text-xs font-bold flex items-center group-hover:translate-x-4 transition-all pt-4">
                                READ STORY <ArrowRight className="ml-3 w-5" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="max-w-7xl mx-auto px-6 w-full mt-40 pb-20 relative z-10">
                <div className="relative bg-neutral-900 p-12 md:p-24 border border-white/5 rounded-sm overflow-hidden text-center group shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                    <div className="space-y-6 relative z-10 mb-14">
                        <span className="text-primary font-display tracking-widest uppercase font-black text-sm block italic">Stay Informed</span>
                        <h2 className="text-5xl md:text-7xl text-white font-display uppercase tracking-tight italic leading-none">THE <span className="text-primary italic">SQUAD</span> NEWSLETTER</h2>
                        <p className="text-neutral-400 font-light max-w-xl mx-auto text-xl leading-relaxed pt-6 italic opacity-80">
                            Join 2,000+ warriors who get the latest fitness science and member stories delivered weekly. No spam. Just strength.
                        </p>
                    </div>

                    <form className="max-w-xl mx-auto relative z-10 space-y-8">
                        <div className="flex flex-col md:flex-row gap-6">
                            <input type="email" placeholder="Warrior Email Address" className="flex-1 bg-black/40 border border-white/10 px-8 py-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-neutral-700 text-white italic" required />
                            <button className="btn-primary flex items-center justify-center py-6 px-16 group/sub">
                                SUBSCRIBE <Mail size={24} className="ml-4 group-hover/sub:translate-x-3 transition-transform" />
                            </button>
                        </div>
                        <p className="text-[10px] text-neutral-600 font-bold uppercase tracking-[0.5em] italic mt-10">
                            * Respecting your privacy since 2025. Unsubscribe anytime.
                        </p>
                    </form>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display font-black text-white/5 uppercase select-none -z-0">LEGACY</div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 blur-[200px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/5 blur-[200px] rounded-full pointer-events-none" />
        </div>
    );
};

export default Blog;
