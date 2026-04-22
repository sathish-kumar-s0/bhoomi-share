"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Search, Wallet, TrendingUp, Repeat } from "lucide-react";

const STEPS = [
    {
        icon: Search,
        title: "Browse",
        description: "View professionally vetted commercial properties leased to top-tier MNCs.",
        delay: 0,
    },
    {
        icon: Wallet,
        title: "Purchase",
        description: "Invest from ₹25,000 in under 3 minutes. Completely digital process.",
        delay: 0.1,
    },
    {
        icon: TrendingUp,
        title: "Earn",
        description: "Receive monthly rental income and track your portfolio's capital growth.",
        delay: 0.2,
    },
    {
        icon: Repeat,
        title: "Exit",
        description: "Sell your stake during our Exit Windows or hold for long-term wealth.",
        delay: 0.3,
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 md:py-32 bg-white border-b border-slate-100 relative overflow-hidden scroll-mt-28">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10" />
            
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-brand-primary text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
                    >
                        Simplified Process
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-heading text-brand-primary mb-6"
                    >
                        Your Path to <br /> Fractional Ownership
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 text-lg leading-relaxed"
                    >
                        Four simple steps to start earning institutional-grade rental income from prime commercial assets.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-slate-100 -z-10" />

                    {STEPS.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: step.delay }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="relative mb-8">
                                <div className="w-16 h-16 bg-white border-2 border-slate-100 text-brand-primary rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_20px_40px_rgba(24,24,27,0.2)]">
                                    <step.icon className="w-8 h-8" />
                                </div>
                                {/* Step number badge */}
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-accent text-white rounded-full flex items-center justify-center text-xs font-black shadow-lg shadow-brand-accent/30 border-2 border-white">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold font-heading text-brand-primary mb-3 group-hover:text-brand-accent transition-colors duration-500">
                                {step.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-sm font-medium px-4">
                                {step.description}
                            </p>
                            
                            {/* Mobile arrow indicator */}
                            {index < STEPS.length - 1 && (
                                <div className="lg:hidden mt-8 text-slate-300">
                                    <TrendingUp className="w-6 h-6 rotate-90" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
