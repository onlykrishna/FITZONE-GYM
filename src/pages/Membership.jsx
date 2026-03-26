import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield, Star, Zap, Crown, User, Coffee, Dumbbell, Users } from 'lucide-react';

const Membership = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const tiers = [
        {
            name: 'Basic',
            price: isAnnual ? 1499 : 2499,
            billing: isAnnual ? '₹17,988' : '₹2,499',
            icon: Dumbbell,
            color: 'text-neutral-400',
            bg: 'bg-neutral-500/10',
            features: [
                'Full Gym Access (6 AM - 10 PM)',
                '1 Initial Fitness Assessment',
                'Basic Locker Room Access',
                'Mobile App Access',
                'Basic Wi-Fi',
                '1 Maintenance Session/Month',
                'Zumba & HIIT Access (Limited)',
                'Standard Water Station'
            ]
        },
        {
            name: 'Pro',
            price: isAnnual ? 1999 : 2999,
            billing: isAnnual ? '₹23,988' : '₹2,999',
            icon: Zap,
            color: 'text-primary',
            bg: 'bg-primary/10',
            popular: true,
            features: [
                'Everything in Basic',
                'Unlimited Group Classes',
                '2 Personal Training Sessions',
                'Steam & Sauna Access',
                'Premium Locker Access',
                'Towel Service Included',
                'Priority Class Booking',
                'Nutrition Guide (PDF)'
            ]
        },
        {
            name: 'Elite',
            price: isAnnual ? 2499 : 3499,
            billing: isAnnual ? '₹29,988' : '₹3,499',
            icon: Crown,
            color: 'text-orange-600',
            bg: 'bg-orange-600/10',
            features: [
                'Everything in Pro',
                'Unlimited PT Sessions',
                'Full Guest Pass (1/Month)',
                'Custom Diet & Workout Plans',
                'Protein Bar Credit (₹500)',
                'Dedicated Concierge',
                'Free Body Comp Analytics',
                'VIP Lounge Access'
            ]
        }
    ];

    const comparisonFeatures = [
        { name: 'Gym Access Office Hours', basic: true, pro: true, elite: true },
        { name: 'Group Fitness Classes', basic: 'Limited', pro: 'Unlimited', elite: 'Unlimited' },
        { name: 'Steam & Sauna', basic: false, pro: true, elite: true },
        { name: 'Locker Facility', basic: 'Standard', pro: 'Premium', elite: 'VIP' },
        { name: 'Personal Training', basic: false, pro: '2 / Month', elite: 'Unlimited' },
        { name: 'Nutrition Counseling', basic: false, pro: true, elite: true },
        { name: 'Guest Passes', basic: false, pro: false, elite: '1 / Month' },
    ];

    return (
        <div className="pt-32 pb-32 bg-secondary flex flex-col items-center">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-20 space-y-6">
                <span className="text-primary font-display tracking-widest uppercase font-bold text-sm block">Pricing Plans</span>
                <h1 className="text-4xl sm:text-6xl md:text-8xl text-white font-display tracking-tight leading-[0.9] italic uppercase">
                    CHOOSE YOUR <span className="text-primary italic">WARRIOR</span> LEVEL
                </h1>
                <div className="w-40 h-1 bg-primary mx-auto rounded-full" />
                <p className="text-neutral-400 font-light text-lg max-w-2xl mx-auto">
                    No hidden fees. No complicated contracts. Just transparent pricing to help you reach your peak performance.
                </p>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center space-x-4 pt-10">
                    <span className={`text-lg font-bold uppercase tracking-widest font-display transition-colors ${!isAnnual ? 'text-white' : 'text-neutral-500'}`}>Monthly</span>
                    <button 
                        onClick={() => setIsAnnual(!isAnnual)}
                        className="w-20 h-10 bg-neutral-800 rounded-full p-1 relative transition-all duration-300 hover:ring-2 ring-primary/50"
                    >
                        <motion.div 
                            animate={{ x: isAnnual ? 40 : 0 }}
                            className="w-8 h-8 bg-primary rounded-full"
                        />
                    </button>
                    <span className={`text-lg font-bold uppercase tracking-widest font-display transition-colors ${isAnnual ? 'text-white' : 'text-neutral-500'}`}>Annual <span className="text-green-500 text-sm ml-2">-30% OFF</span></span>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative z-10">
                {tiers.map((tier) => (
                    <motion.div
                        key={tier.name}
                        whileHover={{ y: -10 }}
                        className={`relative p-10 bg-neutral-900 border border-white/5 rounded-sm shadow-3xl transition-all duration-500 flex flex-col h-full ${tier.popular ? 'ring-4 ring-primary ring-offset-8 ring-offset-secondary' : ''}`}
                    >
                        {tier.popular && (
                            <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-secondary font-display text-sm tracking-widest px-4 py-1 skew-x-[-15deg] font-black uppercase">
                                <span className="skew-x-[15deg] block">MOST POPULAR</span>
                            </div>
                        )}

                        <div className="mb-10 flex items-center justify-between">
                            <div>
                                <h3 className="text-4xl text-white font-display tracking-widest uppercase mb-1">{tier.name}</h3>
                                <div className={`w-12 h-1 bg-current ${tier.color} rounded-full`} />
                            </div>
                            <div className={`p-4 rounded-sm ${tier.bg} ${tier.color}`}>
                                <tier.icon size={32} />
                            </div>
                        </div>

                        <div className="mb-10">
                            <div className="flex items-end space-x-1">
                                <span className="text-6xl text-white font-display font-black leading-none">₹{tier.price}</span>
                                <span className="text-neutral-500 text-lg uppercase font-display mb-1">/ Month</span>
                            </div>
                            <p className="text-neutral-600 text-[10px] mt-2 font-bold uppercase tracking-widest italic">
                                Billed {isAnnual ? 'Annually' : 'Monthly'} as {tier.billing}
                            </p>
                        </div>

                        <ul className="space-y-4 mb-12 flex-grow">
                            {tier.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start space-x-3 text-neutral-400 group">
                                    <Check className={`shrink-0 mt-1 transition-colors ${tier.color}`} size={16} />
                                    <span className="text-sm font-light leading-relaxed group-hover:text-white transition-colors">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-5 font-display text-2xl tracking-widest uppercase rounded-sm transition-all duration-300 ${tier.popular ? 'bg-primary text-white hover:bg-orange-600 shadow-xl shadow-primary/20' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                            START NOW
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Comparison Table */}
            <div className="max-w-7xl mx-auto px-6 w-full mt-40">
                <div className="text-center mb-16 space-y-4">
                  <h2 className="text-5xl text-white font-display uppercase tracking-tight italic">DEEP <span className="text-primary italic">DIVE</span> COMPARISON</h2>
                  <div className="w-20 h-1 bg-primary mx-auto" />
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border border-white/5">
                        <thead className="bg-neutral-900 font-display text-lg tracking-widest text-primary uppercase border-b border-white/10">
                            <tr>
                                <th className="p-8">Feature</th>
                                <th className="p-8">Basic</th>
                                <th className="p-8">Pro</th>
                                <th className="p-8">Elite</th>
                            </tr>
                        </thead>
                        <tbody className="bg-neutral-900/50 text-neutral-300">
                            {comparisonFeatures.map((f, i) => (
                                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-8 font-light uppercase tracking-widest text-sm">{f.name}</td>
                                    <td className="p-8">
                                        {typeof f.basic === 'boolean' ? (f.basic ? <Check className="text-neutral-500" size={20} /> : <X className="text-neutral-800" size={20} />) : <span className="text-xs font-bold">{f.basic}</span>}
                                    </td>
                                    <td className="p-8">
                                        {typeof f.pro === 'boolean' ? (f.pro ? <Check className="text-primary" size={20} /> : <X className="text-neutral-800" size={20} />) : <span className="text-xs font-bold text-primary">{f.pro}</span>}
                                    </td>
                                    <td className="p-8">
                                        {typeof f.elite === 'boolean' ? (f.elite ? <Check className="text-orange-600" size={20} /> : <X className="text-neutral-800" size={20} />) : <span className="text-xs font-bold text-orange-600 font-black">{f.elite}</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* FAQ Area */}
            <div className="max-w-3xl mx-auto px-6 w-full mt-40">
                <div className="text-center mb-16 space-y-4">
                  <h2 className="text-5xl text-white font-display uppercase tracking-tight italic">MEMBERSHIP <span className="text-primary italic">FAQ</span></h2>
                  <div className="w-20 h-1 bg-primary mx-auto" />
                </div>

                <div className="space-y-6">
                    {[
                        { q: 'Can I cancel my membership anytime?', a: 'Yes, but a 30-day notice is required for monthly plans. Annual plans are fixed term for the best value.' },
                        { q: 'Is there a signup fee?', a: 'We have a standard activation fee of ₹999, which is waived off if you signup for the Annual Plan today.' },
                        { q: 'Can I freeze my account during vacation?', a: 'Elite members can freeze for up to 60 days. Pro members for 30 days. Basic members do not have a freeze option.' },
                        { q: 'Do you offer corporate discounts?', a: 'Yes! For organizations with 10+ members, we offer tiered corporate pricing. Contact us for a quote.' },
                        { q: 'What is the "Free Day Pass" policy?', a: 'One pass per person. Valid for 24 hours from the time of issue. Bring your ID!' },
                    ].map((faq, i) => (
                        <details key={i} className="group bg-neutral-900 border border-white/5 p-6 rounded-sm cursor-pointer open:ring-1 ring-primary/50 transition-all duration-300">
                            <summary className="font-display text-xl text-white uppercase tracking-widest list-none flex justify-between items-center group-open:text-primary transition-colors">
                                {faq.q}
                                <span className="text-primary border border-primary/20 w-8 h-8 flex items-center justify-center rounded-full text-xs transition-transform group-open:rotate-180">+</span>
                            </summary>
                            <p className="mt-4 text-neutral-400 font-light leading-relaxed">
                                {faq.a}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Membership;
