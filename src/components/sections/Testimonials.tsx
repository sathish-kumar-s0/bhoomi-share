"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
    {
        name: "Arjun Mehta",
        role: "Software Engineer",
        text: "I always wanted to invest in commercial real estate but didn't have crores. Bhoomi Share made it possible with just ₹25k.",
        rating: 5,
    },
    {
        name: "Priya Sharma",
        role: "Doctor",
        text: "The transparency is unmatched. I can see the property documents and track my monthly rental yields on the dashboard.",
        rating: 5,
    },
    {
        name: "Rohan Gupta",
        role: "Entrepreneur",
        text: "Great platform for diversifying away from mutual funds. The returns have been consistent and better than my FDs.",
        rating: 4,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden border-t border-slate-100 relative">
             <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px] -z-10" />
            
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/5 text-brand-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
                    >
                        Success Stories
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-heading text-brand-primary mb-6"
                    >
                        Trusted by 25,000+ <br /> Smart Investors
                    </motion.h2>
                    <div className="flex justify-center gap-1.5 mb-4">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold drop-shadow-sm" />)}
                    </div>
                    <p className="text-slate-500 text-sm font-bold tracking-widest uppercase opacity-60">4.8/5 Average Portfolio Growth</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {REVIEWS.map((review, i) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group p-10 bg-[#FAFAFA] border border-slate-100 rounded-[2.5rem] shadow-premium hover:bg-white hover:shadow-premium-hover hover:-translate-y-3 transition-all duration-700 flex flex-col h-full relative"
                        >
                            {/* Quote Icon Overlay */}
                            <div className="absolute top-8 right-10 text-slate-100 group-hover:text-brand-accent/10 transition-colors duration-500">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.987z" />
                                </svg>
                            </div>

                            <div className="flex gap-1 text-brand-gold mb-8">
                                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            
                            <p className="text-brand-primary/80 italic leading-relaxed mb-10 text-lg flex-1 font-medium">
                                "{review.text}"
                            </p>
                            
                            <div className="flex items-center gap-4 pt-8 border-t border-slate-200/60">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary font-bold text-lg shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <div className="font-bold text-brand-primary text-base group-hover:text-brand-accent transition-colors duration-500">{review.name}</div>
                                    <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{review.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
