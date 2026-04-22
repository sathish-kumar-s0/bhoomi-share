import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, TrendingUp, ShieldCheck, Crown, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

interface RewardDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    tier: {
        name: string;
        icon: any;
        minInv: string;
        benefits: string[];
    } | null;
}

export default function RewardDetailModal({ isOpen, onClose, tier }: RewardDetailModalProps) {
    if (!tier) return null;

    const Icon = tier.icon;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/60 backdrop-blur-md">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100"
                    >
                        {/* Header Image/Pattern */}
                        <div className="h-32 bg-slate-900 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-teal via-transparent to-transparent" />
                            </div>
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="absolute -bottom-8 left-10 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-slate-100">
                                <Icon className="w-10 h-10 text-brand-teal" />
                            </div>
                        </div>

                        <div className="pt-12 p-10">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-3xl font-black font-heading text-slate-900 leading-tight">{tier.name} Tier</h3>
                                    <p className="text-slate-500 font-medium">{tier.minInv} Minimum Individual Portfolio</p>
                                </div>
                            </div>

                            <div className="space-y-6 mb-10">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Core Benefits</h4>
                                <div className="grid grid-cols-1 gap-4">
                                    {tier.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100/50">
                                            <div className="p-1.5 bg-brand-teal/10 rounded-lg shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900">{benefit}</div>
                                                <div className="text-[10px] text-slate-400 font-medium leading-relaxed mt-0.5">
                                                    Fully automated rewards delivered monthly to your wallet balance.
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <Link to="/properties" onClick={onClose}>
                                    <Button className="w-full py-7 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-[1.5rem] font-black text-sm uppercase tracking-widest shadow-xl shadow-brand-teal/20 transition-all hover:-translate-y-1">
                                        Invest to Unlock
                                    </Button>
                                </Link>
                                <button
                                    onClick={onClose}
                                    className="w-full py-4 text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-slate-600 transition-colors"
                                >
                                    Dismiss
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
