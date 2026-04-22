"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Crown, Star, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";
import RewardDetailModal from "./RewardDetailModal";

const TIERS = [
    {
        name: "Member",
        icon: Star,
        minInv: "₹25,000",
        benefits: ["Access to all deals", "Basic Support", "1% Cashback"],
        color: "bg-slate-100 text-slate-700",
        border: "border-slate-200"
    },
    {
        name: "Plus",
        icon: ShieldCheck,
        minInv: "₹5 Lakhs",
        benefits: ["Priority Access", "Dedicated RM", "2% Cashback"],
        color: "bg-brand-teal/10 text-brand-teal",
        border: "border-brand-teal/30"
    },
    {
        name: "Elite",
        icon: Crown,
        minInv: "₹25 Lakhs",
        benefits: ["Pre-launch Access", "Wealth Advisory", "3% Cashback"],
        color: "bg-brand-gold/10 text-brand-gold-dark",
        border: "border-brand-gold"
    },
];

export default function Rewards() {
    const { user } = useAuth();
    const [selectedTier, setSelectedTier] = useState<typeof TIERS[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Mock "current tier" for demonstration - in real app would come from user data
    const userTier = user ? "Member" : null;

    const handleViewDetails = (tier: typeof TIERS[0]) => {
        setSelectedTier(tier);
        setIsModalOpen(true);
    };

    return (
        <section id="rewards" className="py-24 bg-slate-50">
            <Container>
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 text-brand-gold-dark rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-brand-gold/20"
                    >
                        <Zap className="w-3.5 h-3.5 fill-current" />
                        Platform Loyalty
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6 tracking-tight">
                        Unlock Exclusive Rewards
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
                        Invest more to earn higher cashback, lower fees, and <span className="text-brand-teal">VIP institutional experiences</span> tailored for your portfolio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TIERS.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all relative overflow-hidden group"
                        >
                            {userTier === tier.name && (
                                <div className="absolute top-0 right-10 bg-brand-teal text-white px-4 py-1.5 rounded-b-xl text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                                    <ShieldCheck className="w-3 h-3" /> Your Current Status
                                </div>
                            )}

                            <div className="w-16 h-16 bg-slate-50 rounded-[1.25rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-teal/5 transition-all duration-500">
                                <tier.icon className="w-8 h-8 text-slate-800 transition-colors group-hover:text-brand-teal" />
                            </div>

                            <h3 className="text-2xl font-black font-heading text-slate-900 mb-2">{tier.name}</h3>
                            <div className="text-[10px] font-black text-slate-400 mb-8 uppercase tracking-widest flex items-center gap-2">
                                <Zap className="w-3 h-3 text-brand-gold" /> Min Invest: {tier.minInv}
                            </div>

                            <div className="h-px bg-slate-50 w-full mb-8" />

                            <ul className="space-y-5 mb-10">
                                {tier.benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-center text-sm font-bold text-slate-600">
                                        <div className="w-2 h-2 rounded-full bg-brand-teal/20 border border-brand-teal/40 mr-4 shrink-0" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                onClick={() => handleViewDetails(tier)}
                                variant="outline"
                                className="w-full py-6 border-slate-200 text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-teal hover:border-brand-teal hover:text-white hover:shadow-lg hover:shadow-brand-teal/20 transition-all"
                            >
                                Explorer Benefits
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <RewardDetailModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    tier={selectedTier}
                />
            </Container>
        </section>
    );
}
