import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Users, Calendar, TrendingUp, Settings, LogOut, 
    Plus, Search, Edit2, Trash2, Filter, MoreVertical,
    CheckCircle, Clock, AlertCircle, BarChart3, X, Mail, Phone, MapPin,
    Shield, PieChart, Activity, Bell, Menu
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [searchTerm, setSearchTerm] = useState('');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Mock Data State
    const [members, setMembers] = useState([
        { id: 1, name: 'Aryan Sharma', email: 'aryan@example.com', plan: 'Elite', status: 'Active', joined: 'Mar 12, 2025' },
        { id: 2, name: 'Neha Gupta', email: 'neha@example.com', plan: 'Pro', status: 'Pending', joined: 'Mar 15, 2025' },
        { id: 3, name: 'Vikram Singh', email: 'vikram@example.com', plan: 'Basic', status: 'Active', joined: 'Mar 10, 2025' },
        { id: 4, name: 'Priya Verma', email: 'priya@example.com', plan: 'Elite', status: 'Expired', joined: 'Feb 20, 2025' },
    ]);

    const [trainers, setTrainers] = useState([
        { id: 1, name: 'Rahul Verma', role: 'Head Coach', classes: 12, rating: 4.9, status: 'Active' },
        { id: 2, name: 'Sarah Singh', role: 'Yoga Lead', classes: 8, rating: 4.8, status: 'Active' },
        { id: 3, name: 'Mike Johnson', role: 'Strength Lead', classes: 10, rating: 4.7, status: 'On Leave' },
    ]);

    const [classes, setClasses] = useState([
        { id: 1, name: 'HIIT Express', trainer: 'Rahul Verma', time: '06:00 AM', enrolled: 18, total: 20, intensity: 'High' },
        { id: 2, name: 'Vinyasa Flow', trainer: 'Sarah Singh', time: '07:30 AM', enrolled: 12, total: 25, intensity: 'Medium' },
        { id: 3, name: 'Power Strength', trainer: 'Mike Johnson', time: '09:00 AM', enrolled: 15, total: 15, intensity: 'High' },
    ]);

    // Filtering Logic
    const filteredMembers = useMemo(() => 
        members.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()) || m.email.toLowerCase().includes(searchTerm.toLowerCase())),
    [members, searchTerm]);

    const filteredTrainers = useMemo(() => 
        trainers.filter(t => t.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [trainers, searchTerm]);

    const filteredClasses = useMemo(() => 
        classes.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.trainer.toLowerCase().includes(searchTerm.toLowerCase())),
    [classes, searchTerm]);

    // Handlers
    const handleDeleteMember = (id) => setMembers(members.filter(m => m.id !== id));
    const handleAddNew = (e) => {
        e.preventDefault();
        setIsAddModalOpen(false);
    };

    const stats = [
        { title: 'Total Members', value: members.length + 1280, grow: '+12%', icon: Users },
        { title: 'New Sales', value: '84', grow: '+25%', icon: BarChart3 },
        { title: 'Class Capacity', value: '92%', grow: '+5%', icon: Calendar },
        { title: 'Active Trainers', value: trainers.length, icon: Users },
    ];

    const SidebarContent = () => (
        <div className="h-full flex flex-col p-8">
            <div className="mb-14">
                <span className="text-primary font-display tracking-widest uppercase font-black text-sm block italic">FitZone Admin</span>
                <h2 className="text-3xl font-display uppercase tracking-tight italic">COMMAND <span className="text-primary italic">CENTRE</span></h2>
            </div>

            <nav className="flex-1 space-y-4">
                {['Overview', 'Members', 'Classes', 'Trainers', 'Finance', 'Settings'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => { setActiveTab(tab); setIsSidebarOpen(false); }}
                        className={`w-full flex items-center space-x-4 px-6 py-4 rounded-sm font-display uppercase tracking-widest text-xs transition-all ${activeTab === tab ? 'bg-primary text-secondary shadow-xl translate-x-1 font-bold' : 'text-neutral-400 hover:text-white hover:bg-white/5'}`}
                    >
                        <span className={activeTab === tab ? 'text-secondary' : 'text-primary'}>
                            {tab === 'Overview' && <TrendingUp size={18} />}
                            {tab === 'Members' && <Users size={18} />}
                            {tab === 'Classes' && <Calendar size={18} />}
                            {tab === 'Trainers' && <Users size={18} />}
                            {tab === 'Finance' && <BarChart3 size={18} />}
                            {tab === 'Settings' && <Settings size={18} />}
                        </span>
                        <span>{tab}</span>
                    </button>
                ))}
            </nav>

            <div className="pt-8 border-t border-white/5">
                <Link to="/login" className="flex items-center space-x-4 px-6 py-4 text-neutral-400 hover:text-primary transition-colors font-display uppercase tracking-widest text-xs">
                    <LogOut size={18} />
                    <span>Shutdown Session</span>
                </Link>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-secondary flex flex-col pt-24 text-white overflow-hidden relative">
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-24 left-0 w-full bg-neutral-900/80 backdrop-blur-md border-b border-white/5 z-40 px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-display uppercase tracking-tight italic">{activeTab}</h2>
                <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-primary">
                    <Menu size={24} />
                </button>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Desktop Sidebar */}
                <aside className="hidden lg:flex w-80 bg-neutral-900 border-r border-white/5 flex-col shrink-0">
                    <SidebarContent />
                </aside>

                {/* Mobile Sidebar Overlay */}
                <AnimatePresence>
                    {isSidebarOpen && (
                        <>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsSidebarOpen(false)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] lg:hidden" 
                            />
                            <motion.aside 
                                initial={{ x: '-100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '-100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed top-0 left-0 h-full w-80 bg-neutral-900 border-r border-white/5 z-[101] lg:hidden"
                            >
                                <div className="absolute top-8 right-8">
                                    <button onClick={() => setIsSidebarOpen(false)} className="text-primary"><X size={32} /></button>
                                </div>
                                <SidebarContent />
                            </motion.aside>
                        </>
                    )}
                </AnimatePresence>

                {/* Main Content */}
                <main className="flex-1 p-6 lg:p-12 overflow-y-auto no-scrollbar relative min-h-screen pt-20 lg:pt-12">
                    {/* Header */}
                    <div className="hidden lg:flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <span className="text-primary font-display tracking-widest text-xs font-bold uppercase block italic">Operational Intelligence</span>
                            <h1 className="text-7xl font-display uppercase tracking-tight italic leading-none text-white">{activeTab}</h1>
                        </div>
                        <div className="flex space-x-4 w-full md:w-auto">
                            <div className="relative group flex-1">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-hover:text-primary transition-colors" size={18} />
                                <input 
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search records..." 
                                    className="bg-neutral-900 border border-white/10 pl-12 pr-6 py-5 rounded-sm italic text-xs w-full md:w-80 focus:outline-none focus:ring-1 focus:ring-primary text-white" 
                                />
                            </div>
                            <button 
                                onClick={() => setIsAddModalOpen(true)}
                                className="bg-primary text-secondary px-8 py-5 rounded-sm font-display text-xs uppercase tracking-widest flex items-center shadow-xl hover:-translate-y-1 transition-all font-bold whitespace-nowrap"
                            >
                                <Plus size={20} className="mr-2" /> ADD NEW
                            </button>
                        </div>
                    </div>

                    {/* Overview Tab */}
                    {activeTab === 'Overview' && (
                        <div className="space-y-16">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {stats.map((stat, i) => (
                                    <div key={i} className="bg-neutral-900 p-8 rounded-sm border border-white/10 hover:border-primary/20 transition-all relative group overflow-hidden shadow-2xl">
                                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-1000" />
                                        <div className="relative z-10 flex justify-between items-start mb-6">
                                            <div className="p-3 bg-primary/20 rounded-sm text-primary shadow-lg border border-primary/20">
                                                <stat.icon size={24} />
                                            </div>
                                            {stat.grow && <span className="text-primary font-display text-[11px] font-bold uppercase bg-primary/10 px-3 py-1 rounded-sm border border-primary/10 shadow-glow">{stat.grow}</span>}
                                        </div>
                                        <div className="relative z-10">
                                            <span className="text-neutral-300 text-[11px] uppercase tracking-widest font-bold block mb-2">{stat.title}</span>
                                            <h3 className="text-5xl font-display uppercase leading-none italic text-white">{stat.value}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                                <div className="bg-neutral-900 p-6 lg:p-10 rounded-sm border border-white/5 shadow-2xl overflow-hidden relative">
                                    <div className="flex justify-between items-center mb-10">
                                        <h4 className="text-2xl font-display uppercase tracking-widest italic text-white flex items-center gap-4">
                                            <Activity className="text-primary" size={24} /> Critical Activity
                                        </h4>
                                        <span className="px-3 py-1.5 bg-green-500/10 text-green-500 text-[8px] font-display uppercase tracking-[0.3em] rounded-full border border-green-500/20">LIVE DATA</span>
                                    </div>
                                    <div className="space-y-6">
                                        {classes.map((cls, i) => (
                                            <div key={i} className="flex flex-col sm:flex-row items-center justify-between p-6 bg-secondary/80 rounded-sm border border-white/5 hover:border-primary/10 transition-all shadow-lg gap-6">
                                                <div className="flex items-center space-x-6 w-full">
                                                    <div className="w-14 h-14 flex items-center justify-center bg-primary text-secondary rounded-sm font-display font-black italic text-xl shadow-inner shrink-0">
                                                        {cls.time.split(':')[0]}
                                                    </div>
                                                    <div>
                                                        <h5 className="font-display uppercase tracking-[0.2em] text-sm text-white">{cls.name} <span className="text-[10px] text-primary/50 ml-2">[{cls.intensity}]</span></h5>
                                                        <p className="text-[11px] text-neutral-300 font-bold uppercase tracking-widest pt-1 italic">{cls.trainer} • {cls.time}</p>
                                                    </div>
                                                </div>
                                                <div className="text-right w-full sm:w-auto shrink-0 flex sm:flex-col justify-between sm:justify-end items-center sm:items-end">
                                                    <span className="text-[11px] text-primary block uppercase font-bold tracking-widest italic leading-none mb-1">CAPACITY</span>
                                                    <span className="text-2xl font-display font-bold italic text-white leading-none">{cls.enrolled}/{cls.total}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-neutral-900 p-12 rounded-sm border border-white/5 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl">
                                     <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                                     <div className="space-y-10 relative z-10 w-full">
                                         <div className="p-8 bg-primary/10 rounded-full inline-block text-primary shadow-glow border border-primary/20">
                                            <BarChart3 size={64} />
                                         </div>
                                         <div className="space-y-4">
                                            <h4 className="text-5xl font-display uppercase tracking-tight italic text-white leading-none">REVENUE GOAL ACQUIRED</h4>
                                            <p className="text-neutral-400 font-light text-lg italic max-w-sm mx-auto leading-relaxed pt-2">
                                                March intelligence reports suggest a 25% growth over previous cycle figures.
                                            </p>
                                         </div>
                                         <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full">
                                            <div className="flex-1 bg-secondary/80 p-8 rounded-sm border border-white/5 shadow-inner">
                                                <span className="text-[11px] text-neutral-400 block uppercase font-bold tracking-[0.3em] mb-3 italic">MARCH TARGET</span>
                                                <span className="text-3xl font-display font-bold italic text-white">$10.5K</span>
                                            </div>
                                            <div className="flex-1 bg-primary p-8 rounded-sm shadow-inner overflow-hidden relative">
                                                <div className="relative z-10 flex flex-col">
                                                    <span className="text-[11px] text-secondary/70 block uppercase font-bold tracking-[0.3em] mb-3 italic">CURRENT CAPTURE</span>
                                                    <span className="text-3xl font-display font-bold italic text-secondary">$12.8K</span>
                                                </div>
                                                <div className="absolute top-0 right-0 p-2"><TrendingUp size={24} className="text-secondary/20" /></div>
                                            </div>
                                         </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Members Tab */}
                    {activeTab === 'Members' && (
                        <div className="bg-neutral-900 rounded-sm border border-white/5 overflow-x-auto no-scrollbar shadow-3xl">
                             <table className="w-full text-left min-w-[800px]">
                                 <thead>
                                     <tr className="bg-secondary/80 border-b border-white/10">
                                         <th className="px-10 py-8 text-[11px] font-bold uppercase tracking-[0.3em] text-primary italic">ID</th>
                                         <th className="px-10 py-8 text-[11px] font-bold uppercase tracking-[0.3em] text-white italic">Warrior Identity</th>
                                         <th className="px-10 py-8 text-[11px] font-bold uppercase tracking-[0.3em] text-white italic">Status / Plan</th>
                                         <th className="px-10 py-8 text-[11px] font-bold uppercase tracking-[0.3em] text-white italic">Joined</th>
                                         <th className="px-10 py-8 text-right"></th>
                                     </tr>
                                 </thead>
                                 <tbody className="divide-y divide-white/5">
                                     <AnimatePresence>
                                         {filteredMembers.map((member) => (
                                             <motion.tr 
                                                 key={member.id}
                                                 layout
                                                 initial={{ opacity: 0 }}
                                                 animate={{ opacity: 1 }}
                                                 exit={{ opacity: 0 }}
                                                 className="group hover:bg-white/[0.02] transition-colors"
                                             >
                                                 <td className="px-10 py-8 font-display text-lg text-primary">#FZ-{member.id}</td>
                                                 <td className="px-10 py-8">
                                                     <div className="flex flex-col">
                                                         <span className="text-2xl font-display uppercase italic text-white">{member.name}</span>
                                                         <span className="text-xs text-neutral-400 italic font-medium">{member.email}</span>
                                                     </div>
                                                 </td>
                                                 <td className="px-10 py-8">
                                                     <div className="flex flex-col space-y-2">
                                                         <div className={`w-fit px-4 py-1 rounded-sm text-[9px] font-bold uppercase tracking-widest border ${member.status === 'Active' ? 'bg-green-500/10 text-green-500 border-green-500/20 shadow-glow' : member.status === 'Pending' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}`}>
                                                             {member.status}
                                                         </div>
                                                         <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 italic">Tier: <span className="text-primary">{member.plan}</span></span>
                                                     </div>
                                                 </td>
                                                 <td className="px-10 py-8 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-300 italic">{member.joined}</td>
                                                 <td className="px-10 py-8 text-right">
                                                     <div className="flex justify-end space-x-3 opacity-20 group-hover:opacity-100 transition-all">
                                                         <button className="p-3 bg-white/5 border border-white/5 text-primary hover:bg-primary hover:text-secondary rounded-sm transition-all"><Edit2 size={16} /></button>
                                                         <button onClick={() => handleDeleteMember(member.id)} className="p-3 bg-white/5 border border-white/5 text-red-500 hover:bg-red-500 text-white rounded-sm transition-all"><Trash2 size={16} /></button>
                                                     </div>
                                                 </td>
                                             </motion.tr>
                                         ))}
                                     </AnimatePresence>
                                 </tbody>
                             </table>
                             {filteredMembers.length === 0 && (
                                 <div className="py-40 text-center space-y-4">
                                     <AlertCircle className="mx-auto text-primary/30" size={64} />
                                     <p className="text-neutral-500 font-display uppercase tracking-widest italic text-lg">No identities found</p>
                                 </div>
                             )}
                        </div>
                    )}

                    {/* Classes Tab */}
                    {activeTab === 'Classes' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {filteredClasses.map((cls) => (
                                <motion.div 
                                    key={cls.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-neutral-900 border border-white/10 p-10 rounded-sm shadow-2xl group hover:border-primary/40 transition-all"
                                >
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="p-4 bg-primary/10 rounded-sm text-primary border border-primary/20">
                                            <Calendar size={28} />
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[10px] text-neutral-500 block uppercase font-bold tracking-widest italic">Intensity</span>
                                            <span className="text-primary font-display uppercase italic text-sm">{cls.intensity}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-3xl font-display uppercase tracking-tight italic text-white mb-2">{cls.name}</h3>
                                    <p className="text-neutral-400 font-light text-sm italic mb-8 flex items-center gap-2">
                                        <Users size={14} className="text-primary" /> Led by {cls.trainer}
                                    </p>
                                    <div className="pt-8 border-t border-white/5 flex justify-between items-end">
                                        <div className="space-y-1">
                                            <span className="text-[10px] text-neutral-500 block uppercase font-bold tracking-widest italic font-display">Time Slot</span>
                                            <span className="text-white font-display uppercase italic text-lg">{cls.time}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-primary font-display italic text-2xl font-bold">{cls.enrolled}/{cls.total}</span>
                                            <span className="text-[10px] text-neutral-500 block uppercase font-bold tracking-widest italic font-display">Spots taken</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Trainers Tab */}
                    {activeTab === 'Trainers' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                            {filteredTrainers.map((trainer) => (
                                <motion.div 
                                    key={trainer.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-neutral-900 border border-white/10 p-10 rounded-sm shadow-2xl group overflow-hidden relative"
                                >
                                    <div className="absolute top-0 right-0 p-4">
                                        <div className={`px-4 py-1 rounded-sm text-[8px] font-bold uppercase tracking-widest border ${trainer.status === 'Active' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-orange-500/10 text-orange-500 border-orange-500/20'}`}>
                                            {trainer.status}
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-8 mb-10">
                                        <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all text-4xl font-display font-black italic">
                                            {trainer.name.charAt(0)}
                                        </div>
                                        <div>
                                            <span className="text-primary font-display tracking-widest text-[10px] font-bold uppercase block italic mb-2">{trainer.role}</span>
                                            <h3 className="text-4xl font-display uppercase tracking-tight italic text-white leading-none">{trainer.name}</h3>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/5">
                                        <div className="bg-secondary p-6 rounded-sm text-center">
                                            <span className="text-[10px] text-neutral-500 block uppercase font-bold tracking-widest italic mb-2">CLASSES</span>
                                            <span className="text-3xl font-display font-bold italic text-white">{trainer.classes}</span>
                                        </div>
                                        <div className="bg-secondary p-6 rounded-sm text-center">
                                            <span className="text-[10px] text-neutral-500 block uppercase font-bold tracking-widest italic mb-2">RATING</span>
                                            <div className="flex items-center justify-center gap-2">
                                                <TrendingUp size={16} className="text-primary" />
                                                <span className="text-3xl font-display font-bold italic text-white">{trainer.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Settings / Placeholder for others */}
                    {['Finance', 'Settings'].includes(activeTab) && (
                        <div className="py-40 flex flex-col items-center justify-center space-y-8 animate-pulse text-center">
                             <Shield className="text-primary/20" size={120} />
                             <div className="space-y-4">
                                <h3 className="text-4xl font-display uppercase tracking-tight italic text-white/40">Secure Module Restricted</h3>
                                <p className="text-neutral-500 font-display uppercase tracking-widest italic text-sm">Synchronizing administrative permissions for {activeTab}...</p>
                             </div>
                        </div>
                    )}
                </main>
            </div>

            {/* Add New Modal */}
            <AnimatePresence>
                {isAddModalOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] bg-secondary/90 backdrop-blur-md flex items-center justify-center p-6"
                        onClick={() => setIsAddModalOpen(false)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="max-w-xl w-full bg-neutral-900 border border-white/10 p-12 rounded-sm shadow-3xl relative overflow-hidden"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary shadow-glow" />
                            <div className="flex justify-between items-start mb-12">
                                <div>
                                    <span className="text-primary font-display tracking-widest text-[10px] font-bold uppercase block italic mb-2">Asset Initialization</span>
                                    <h3 className="text-4xl font-display uppercase tracking-tight italic text-white leading-none">DEPLOY TO <span className="text-primary italic">COMMAND</span></h3>
                                </div>
                                <button onClick={() => setIsAddModalOpen(false)} className="text-neutral-500 hover:text-white p-2">
                                    <X size={32} />
                                </button>
                            </div>

                            <form className="space-y-8" onSubmit={handleAddNew}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white italic">WARRIOR NAME</label>
                                        <input placeholder="Full Name" className="w-full bg-black/40 border border-white/10 px-8 py-5 rounded-sm focus:ring-1 focus:ring-primary text-white text-sm outline-none font-bold placeholder:text-neutral-700" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white italic">COMMS ADDRESS</label>
                                        <input type="email" placeholder="example@fitzone.com" className="w-full bg-black/40 border border-white/10 px-8 py-5 rounded-sm focus:ring-1 focus:ring-primary text-white text-sm outline-none font-bold placeholder:text-neutral-700" required />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white italic">TIER SELECTION</label>
                                        <select className="w-full bg-black/40 border border-white/10 px-6 py-5 rounded-sm focus:ring-1 focus:ring-primary text-white text-sm outline-none appearance-none cursor-pointer italic font-bold">
                                            <option>ELITE</option>
                                            <option>PRO</option>
                                            <option>BASIC</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white italic">INITIAL STATUS</label>
                                        <select className="w-full bg-black/40 border border-white/10 px-6 py-5 rounded-sm focus:ring-1 focus:ring-primary text-white text-sm outline-none appearance-none cursor-pointer italic font-bold">
                                            <option>ACTIVE</option>
                                            <option>PENDING</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="pt-8">
                                    <button type="submit" className="btn-primary w-full py-6 text-xl tracking-[0.2em] shadow-xl group uppercase italic font-bold">
                                        COMMIT TO DATABASE <Plus size={24} className="inline-block ml-3 group-hover:rotate-90 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Global Decoration */}
            <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-primary/5 blur-[250px] rounded-full pointer-events-none -z-0" />
            <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-primary/5 blur-[200px] rounded-full pointer-events-none -z-0" />
        </div>
    );
};

export default Admin;
