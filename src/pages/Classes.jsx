import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, User, Users, MapPin, Filter, ArrowRight, X, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Classes = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedDay, setSelectedDay] = useState('Monday');
    const [selectedClass, setSelectedClass] = useState(null);

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const categories = ['All', 'HIIT', 'Yoga', 'Strength Training', 'Zumba', 'CrossFit', 'Meditation'];

    const classData = [
        { day: 'Monday', time: '06:00 AM', name: 'HIIT Express', category: 'HIIT', trainer: 'Rahul Verma', spots: 2, total: 20 },
        { day: 'Monday', time: '07:00 AM', name: 'Vinyasa Flow', category: 'Yoga', trainer: 'Sarah Singh', spots: 15, total: 25 },
        { day: 'Monday', time: '08:00 AM', name: 'Power Strength', category: 'Strength Training', trainer: 'Mike Johnson', spots: 4, total: 15 },
        { day: 'Monday', time: '07:00 PM', name: 'Peak HIIT', category: 'HIIT', trainer: 'Rahul Verma', spots: 8, total: 20 },
        
        { day: 'Tuesday', time: '07:00 AM', name: 'Hatha Yoga', category: 'Yoga', trainer: 'Sarah Singh', spots: 18, total: 25 },
        { day: 'Tuesday', time: '06:00 AM', name: 'Elite CrossFit', category: 'CrossFit', trainer: 'Mike Johnson', spots: 6, total: 15 },
        { day: 'Tuesday', time: '06:00 PM', name: 'Evening Yoga', category: 'Yoga', trainer: 'Sarah Singh', spots: 12, total: 25 },

        { day: 'Wednesday', time: '06:00 AM', name: 'HIIT Max', category: 'HIIT', trainer: 'Rahul Verma', spots: 10, total: 20 },
        { day: 'Wednesday', time: '08:00 AM', name: 'Compound Strength', category: 'Strength Training', trainer: 'Mike Johnson', spots: 3, total: 15 },
        { day: 'Wednesday', time: '07:00 PM', name: 'Turbo HIIT', category: 'HIIT', trainer: 'Rahul Verma', spots: 5, total: 20 },

        { day: 'Thursday', time: '07:00 AM', name: 'Ashtanga Flow', category: 'Yoga', trainer: 'Sarah Singh', spots: 9, total: 25 },
        { day: 'Thursday', time: '06:00 PM', name: 'Solar Yoga', category: 'Yoga', trainer: 'Sarah Singh', spots: 14, total: 25 },

        { day: 'Friday', time: '06:00 AM', name: 'HIIT Finale', category: 'HIIT', trainer: 'Rahul Verma', spots: 0, total: 20 },
        { day: 'Friday', time: '06:00 AM', name: 'CrossFit WOD', category: 'CrossFit', trainer: 'Mike Johnson', spots: 7, total: 15 },

        { day: 'Saturday', time: '07:00 AM', name: 'Weekend Warrior', category: 'HIIT', trainer: 'Rahul Verma', spots: 11, total: 30 },
        { day: 'Saturday', time: '10:00 AM', name: 'Zumba Party', category: 'Zumba', trainer: 'Deepika K.', spots: 22, total: 40 },

        { day: 'Sunday', time: '08:00 AM', name: 'Deep Meditation', category: 'Meditation', trainer: 'Sarah Singh', spots: 30, total: 35 },
        { day: 'Sunday', time: '10:00 AM', name: 'Zumba Sun', category: 'Zumba', trainer: 'Deepika K.', spots: 15, total: 40 },
    ];

    const filteredClasses = classData.filter(c => 
        c.day === selectedDay && (selectedCategory === 'All' || c.category === selectedCategory)
    );

    const getCategoryColor = (cat) => {
        switch(cat) {
            case 'HIIT': return 'bg-primary text-secondary';
            case 'Yoga': return 'bg-orange-200 text-orange-900';
            case 'Strength Training': return 'bg-neutral-800 text-white border border-white/20';
            case 'Zumba': return 'bg-pink-100 text-pink-700';
            case 'CrossFit': return 'bg-secondary text-primary border border-primary/30';
            case 'Meditation': return 'bg-cyan-100 text-cyan-800';
            default: return 'bg-neutral-200 text-neutral-800';
        }
    };

    return (
        <>
            <div className="pt-32 pb-32 bg-secondary flex flex-col items-center relative overflow-hidden">
                {/* Header */}
                <div className="max-w-7xl mx-auto px-6 text-center mb-16 md:mb-24 space-y-4 relative z-10 w-full">
                    <span className="text-primary font-display tracking-widest uppercase font-bold text-sm block italic">Class Timetable</span>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white font-display tracking-tight leading-[0.9] italic uppercase">
                        SCHEDULE <span className="text-primary underline decoration-primary/20 italic">YOUR POWER</span>
                    </h1>
                    <p className="text-neutral-400 font-light text-base md:text-lg max-w-2xl mx-auto pt-8 leading-relaxed italic opacity-80">
                        Designed for peak performance. Book your spot today. Limited capacity of 25 warriors per session.
                    </p>
                </div>

                {/* Timetable Section */}
                <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-12 items-start relative z-10">
                    
                    {/* Filters Sidebar */}
                    <div className="w-full lg:w-1/4 space-y-10 lg:sticky lg:top-40 overflow-hidden">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2 text-white/20 font-display text-sm tracking-widest uppercase mb-4">
                                <Filter size={16} />
                                <span>Filter by Day</span>
                            </div>
                            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
                                {days.map(day => (
                                    <button
                                        key={day}
                                        onClick={() => setSelectedDay(day)}
                                        className={`px-6 py-4 font-display uppercase tracking-widest text-sm rounded-sm transition-all text-left whitespace-nowrap lg:whitespace-normal shrink-0 border border-white/5 ${selectedDay === day ? 'bg-primary text-secondary shadow-[0_0_30px_rgba(249,115,22,0.3)] translate-x-1' : 'bg-white/5 text-neutral-500 hover:bg-white/10 hover:text-white'}`}
                                    >
                                        {day}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-2 text-white/20 font-display text-sm tracking-widest uppercase mb-4">
                                <Filter size={16} />
                                <span>Filter by Type</span>
                            </div>
                            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-6 py-4 font-display uppercase tracking-widest text-xs rounded-sm transition-all text-left flex justify-between items-center whitespace-nowrap lg:whitespace-normal shrink-0 min-w-[120px] lg:min-w-0 border border-white/5 ${selectedCategory === cat ? 'bg-white text-secondary shadow-lg translate-x-1' : 'bg-white/5 text-neutral-500 hover:bg-white/10 hover:text-white'}`}
                                    >
                                        <span>{cat}</span>
                                        {selectedCategory === cat && <div className="hidden lg:block w-1.5 h-1.5 bg-primary rounded-full" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Schedule Display */}
                    <div className="flex-1 w-full space-y-8 min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${selectedDay}-${selectedCategory}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <div className="flex justify-between items-end border-b-2 border-white/5 pb-4 mb-10">
                                    <div>
                                        <h2 className="text-3xl md:text-5xl text-white font-display uppercase leading-none tracking-tighter italic">{selectedDay}</h2>
                                        <p className="text-primary font-display tracking-widest text-xs font-bold uppercase mt-1 italic">Found {filteredClasses.length} Classes Available</p>
                                    </div>
                                    <div className="hidden md:flex space-x-2">
                                        <div className="w-2 h-10 bg-primary/10 rounded-full" />
                                        <div className="w-2 h-10 bg-primary/20 rounded-full" />
                                        <div className="w-2 h-10 bg-primary/30 rounded-full" />
                                    </div>
                                </div>

                                {filteredClasses.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {filteredClasses.map((cls, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ y: -5 }}
                                                onClick={() => setSelectedClass(cls)}
                                                className="group bg-neutral-900/50 backdrop-blur-sm p-8 rounded-sm shadow-xl flex flex-col justify-between cursor-pointer border border-white/5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden h-[240px]"
                                            >
                                                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-[8] transition-all duration-700 pointer-events-none" />
                                                
                                                <div className="relative z-10 flex justify-between items-start mb-6">
                                                    <div className={`px-4 py-1 font-display tracking-widest text-[10px] font-bold uppercase skew-x-[-15deg] ${getCategoryColor(cls.category)} shadow-lg`}>
                                                        <span className="skew-x-[15deg] block">{cls.category}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2 text-white/40 font-display text-sm">
                                                        <Clock size={16} className="text-primary" />
                                                        <span>{cls.time}</span>
                                                    </div>
                                                </div>

                                                <div className="relative z-10 space-y-1">
                                                    <h3 className="text-3xl text-white font-display uppercase tracking-widest group-hover:text-primary transition-colors leading-none italic">{cls.name}</h3>
                                                    <p className="text-white/40 flex items-center space-x-2 text-sm uppercase tracking-widest font-display pt-2">
                                                        <User size={14} className="text-primary" />
                                                        <span>Trainer: {cls.trainer}</span>
                                                    </p>
                                                </div>

                                                <div className="relative z-10 flex justify-between items-end pt-6 border-t border-white/5 mt-auto">
                                                    <div className="space-y-1">
                                                        <div className="flex items-center space-x-2 text-white/20 text-xs font-bold uppercase tracking-widest">
                                                            <Users size={12} />
                                                            <span>Spots Left</span>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                           {cls.spots < 5 && cls.spots > 0 && (
                                                               <span className="bg-red-500 text-white text-[8px] font-bold px-1 rounded-sm animate-pulse tracking-tighter uppercase">Almost Full</span>
                                                           )}
                                                           {cls.spots === 0 && (
                                                               <span className="bg-neutral-700 text-white text-[8px] font-bold px-1 rounded-sm tracking-tighter uppercase">Sold Out</span>
                                                           )}
                                                           <span className={`text-xl font-display font-bold ${cls.spots === 0 ? 'text-white/20' : (cls.spots < 5 ? 'text-red-500' : 'text-primary')}`}>
                                                               {cls.spots} / {cls.total}
                                                           </span>
                                                        </div>
                                                    </div>
                                                    <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-24 bg-white/5 rounded-sm border-2 border-dashed border-white/5">
                                        <div className="p-8 inline-block bg-primary/5 rounded-full mb-4">
                                            <Filter className="text-primary opacity-20" size={64} />
                                        </div>
                                        <h3 className="text-3xl text-white/20 font-display uppercase tracking-widest italic leading-none">NO SESSIONS FOUND</h3>
                                        <p className="text-neutral-500 font-light mt-4 italic uppercase tracking-widest text-xs">Try selecting another category or day.</p>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
            </div>

            {/* Success Modal for Booking */}
            <AnimatePresence>
                {selectedClass && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary/80 backdrop-blur-sm px-4"
                        onClick={() => setSelectedClass(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-white p-10 max-w-lg w-full rounded-sm shadow-2xl relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <button onClick={() => setSelectedClass(null)} className="absolute top-4 right-4 text-neutral-300 hover:text-primary transition-colors">
                                <X size={24} />
                            </button>
                            
                            <div className="text-center space-y-6">
                                <div className="p-6 bg-primary/10 inline-block rounded-full">
                                    <Star className="text-primary fill-primary" size={48} />
                                </div>
                                <h2 className="text-4xl text-secondary font-display uppercase leading-none tracking-tight italic">CLASS DETAILS</h2>
                                <div className="w-20 h-1 bg-primary mx-auto" />
                                
                                <div className="space-y-4 text-left pt-6 pb-6 border-y border-neutral-100">
                                    <div className="flex justify-between items-center">
                                        <span className="text-neutral-400 text-xs font-bold uppercase tracking-widest">Session Name</span>
                                        <span className="font-display text-2xl text-secondary uppercase italic">{selectedClass.name}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-neutral-400 text-xs font-bold uppercase tracking-widest">Time & Day</span>
                                        <span className="text-secondary font-bold text-sm uppercase">{selectedClass.day} | {selectedClass.time}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-neutral-400 text-xs font-bold uppercase tracking-widest">Instructor</span>
                                        <span className="text-primary font-display text-xl uppercase tracking-widest leading-none">{selectedClass.trainer}</span>
                                    </div>
                                    <p className="text-neutral-500 font-light text-xs pt-4 border-t border-neutral-50">
                                        * Please arrive 10 minutes before the session starts. Bring a towel and a water bottle.
                                    </p>
                                </div>

                                <div className="pt-4 flex flex-col space-y-4">
                                    <Link to="/free-trial" className="btn-primary w-full py-6 text-xl tracking-[0.2em] shadow-xl uppercase italic text-center">
                                        CLAIM FREE PASS TO JOIN
                                    </Link>
                                    <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-[0.3em] text-center italic">No Credit Card Required • Instant Activation</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Classes;
