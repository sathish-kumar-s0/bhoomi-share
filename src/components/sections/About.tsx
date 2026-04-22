"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { Users, Target, ShieldCheck } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-slate-50 scroll-mt-28">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                        Democratizing Real Estate for Everyone
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        We're on a mission to make premium real estate investment accessible, transparent, and liquid for the modern investor.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="text-center group">
                        <div className="w-16 h-16 bg-white border border-slate-200 text-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold font-heading mb-3 text-slate-900">Our Mission</h3>
                        <p className="text-slate-500 leading-relaxed">To remove barriers to entry in real estate and empower individuals to build generational wealth.</p>
                    </div>
                    <div className="text-center group">
                        <div className="w-16 h-16 bg-white border border-slate-200 text-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold font-heading mb-3 text-slate-900">Trust & Security</h3>
                        <p className="text-slate-500 leading-relaxed">We operate with bank-grade security and full regulatory compliance to ensure your assets are safe.</p>
                    </div>
                    <div className="text-center group">
                        <div className="w-16 h-16 bg-white border border-slate-200 text-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold font-heading mb-3 text-slate-900">Community First</h3>
                        <p className="text-slate-500 leading-relaxed">Building a community of smart investors who grow together through shared ownership.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
