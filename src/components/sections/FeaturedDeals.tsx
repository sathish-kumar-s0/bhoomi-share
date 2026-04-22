"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight, PieChart, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { PROPERTIES, FUNDS } from "@/data/properties";

type DealType = "properties" | "funds";

export default function FeaturedDeals() {
    const [activeTab, setActiveTab] = useState<DealType>("properties");

    return (
        <section id="investments" className="py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden scroll-mt-28">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] -z-10" />
            
            <Container>
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-xl text-center md:text-left">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold tracking-widest uppercase mb-4"
                        >
                            Investment Opportunities
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold font-heading text-brand-primary mb-6"
                        >
                            Curated Premium <br className="hidden md:block" /> Assets for Your Portfolio
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-500 text-lg leading-relaxed"
                        >
                            Institutional-grade real estate opportunities, rigorously vetted for consistent yields and maximum capital appreciation.
                        </motion.p>
                    </div>

                    <div className="flex p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm self-center md:self-end">
                        {(["properties", "funds"] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "px-8 py-2.5 rounded-xl text-sm font-bold capitalize transition-all duration-500",
                                    activeTab === tab
                                        ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                                        : "text-slate-500 hover:text-brand-primary hover:bg-slate-50"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                        >
                            {activeTab === "properties"
                                ? PROPERTIES.slice(0, 3).map((deal, i) => (
                                    <Card key={deal.id} data={deal} type="property" index={i} />
                                ))
                                : FUNDS.slice(0, 3).map((fund, i) => (
                                    <Card key={fund.id} data={fund} type="fund" index={i} />
                                ))
                            }
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-20 text-center">
                    <Link to="/properties">
                        <Button 
                            variant="outline" 
                            size="lg" 
                            className="h-14 px-10 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white group rounded-2xl font-bold transition-all duration-500"
                        >
                            View All Opportunities
                            <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}

function Card({ data, type, index }: { data: any, type: "property" | "fund", index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="h-full"
        >
            <Link to={`/properties/${data.id}`} className="group block h-full">
                <div className="glass-card h-full flex flex-col bg-white border border-slate-100/50 rounded-[2.5rem] overflow-hidden transition-all duration-700 shadow-premium hover:shadow-premium-hover hover:-translate-y-3">
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                        <img
                            src={data.image}
                            alt={data.title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        
                        {/* Status Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        {/* Top Badges */}
                        <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                            <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                                <span className="text-[10px] font-extrabold text-brand-primary tracking-wider uppercase">
                                    {data.funded >= 90 ? "Closing Soon" : "Open for Funding"}
                                </span>
                            </div>
                            
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute bottom-5 left-5">
                            <span className="px-3 py-1 bg-brand-primary/80 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest rounded-lg border border-white/10">
                                {data.category || data.strategy || "Investment"}
                            </span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex-1 flex flex-col">
                        <div className="mb-6">
                            <div className="flex items-center text-brand-accent text-xs font-bold tracking-widest uppercase mb-3">
                                <MapPin className="w-3.5 h-3.5 mr-1.5" />
                                {data.location}
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-brand-primary group-hover:text-brand-accent transition-colors duration-500 leading-tight">
                                {data.title}
                            </h3>
                        </div>

                        {type === "property" && (
                            <div className="mb-8 p-4 bg-slate-50/80 rounded-2xl border border-slate-100 group-hover:bg-brand-accent/5 group-hover:border-brand-accent/10 transition-colors duration-500">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Funding Progress</span>
                                    <span className="text-sm font-black text-brand-primary">{data.funded}%</span>
                                </div>
                                <div className="h-2 bg-slate-200 rounded-full overflow-hidden p-[1px]">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${data.funded}%` }}
                                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                        className="h-full bg-gradient-to-r from-brand-accent to-brand-accent-hover rounded-full shadow-[0_0_10px_rgba(224,90,61,0.3)]"
                                    />
                                </div>
                                <div className="mt-3 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    <span>{Math.floor(data.funded * 10)} Vetted Investors</span>
                                    <span>{data.price || "₹2.5 Cr Target"}</span>
                                </div>
                            </div>
                        )}

                        {/* Financial Metrics Grid */}
                        <div className="mt-auto grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
                            <div className="flex flex-col">
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 flex items-center">
                                    <PieChart className="w-2.5 h-2.5 mr-1 text-brand-accent" /> Yield
                                </span>
                                <span className="text-lg font-black text-brand-primary">
                                    {type === "property" ? data.yield : data.targetReturn}
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 flex items-center">
                                    <ArrowUpRight className="w-2.5 h-2.5 mr-1 text-brand-accent" /> Growth
                                </span>
                                <span className="text-lg font-black text-brand-primary">
                                    {type === "property" ? data.appreciation : "12-14%"}
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 flex items-center">
                                    <Building2 className="w-2.5 h-2.5 mr-1 text-brand-accent" /> Min. Inv
                                </span>
                                <span className="text-sm font-black text-brand-primary mt-1">
                                    {data.minInvest || "₹25k"}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Reveal Button on Hover Section */}
                    <div className="h-0 group-hover:h-14 transition-all duration-500 px-8 flex items-center justify-center overflow-hidden bg-brand-primary">
                         <span className="text-white text-xs font-bold tracking-widest uppercase flex items-center">
                             Invest in this Opportunity <ArrowUpRight className="ml-2 w-4 h-4" />
                         </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
