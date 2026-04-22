"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Wallet, Globe, PieChart, Smartphone } from "lucide-react";

const BENEFITS = [
    {
        icon: Wallet,
        title: "Regular Passive Income",
        description: "Earn monthly rental income deposited directly into your wallet. Consistent yields from prime tenants."
    },
    {
        icon: TrendingUp,
        title: "Capital Appreciation",
        description: "Benefit from the growth of the real estate market. Watch your property value increase over time."
    },
    {
        icon: ShieldCheck,
        title: "Regulated & Secure",
        description: "Fully regulated by SEBI and RERA. Your investments are protected by top-tier legal frameworks."
    },
    {
        icon: Globe,
        title: "Diversify Assets",
        description: "Diversify across different Indian cities and asset classes from a single, unified platform."
    },
    {
        icon: Smartphone,
        title: "Hassle-Free Management",
        description: "We handle everything—sourcing, screening tenants, and maintenance. You just sit back and earn."
    },
    {
        icon: PieChart,
        title: "Exit Anytime",
        description: "Liquidity when you need it. Sell your stake instantly during our bi-annual Exit Windows."
    }
];

export default function WhyInvest() {
    return (
        <section id="why-invest" className="py-24 md:py-32 bg-white relative overflow-hidden scroll-mt-28">
            {/* Subtle background glow */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px] translate-x-1/2 translate-y-1/2 -z-10" />
            
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/5 text-brand-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
                    >
                        The Strategic Advantage
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-heading text-brand-primary mb-6"
                    >
                        Why Smart Investors Focus on Real Estate
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 text-lg leading-relaxed"
                    >
                        Real estate has historically outpaced inflation and stock market volatility. Bhoomi Share makes this stable asset class accessible with institutional-grade control.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {BENEFITS.map((benefit, i) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-premium hover:shadow-premium-hover hover:-translate-y-3 transition-all duration-700 relative overflow-hidden"
                        >
                            {/* Card Accent Glow */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/10 transition-colors duration-700" />
                            
                            <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 text-brand-accent group-hover:bg-brand-accent group-hover:text-white group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-brand-accent/20 transition-all duration-500">
                                <benefit.icon className="w-8 h-8" />
                            </div>
                            
                            <h3 className="text-2xl font-bold font-heading text-brand-primary mb-4 group-hover:text-brand-accent transition-colors duration-500">
                                {benefit.title}
                            </h3>
                            
                            <p className="text-slate-500 leading-relaxed font-medium">
                                {benefit.description}
                            </p>
                            
                            <div className="mt-8 flex items-center text-brand-primary text-xs font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-2 group-hover:translate-y-0">
                                Learn More <div className="ml-2 w-1.5 h-1.5 rounded-full bg-brand-accent" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
