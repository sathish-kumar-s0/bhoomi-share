import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { Users, Target, ShieldCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <main className="flex-1 pt-32 lg:pt-36">
                <section className="py-20 bg-slate-50">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                                Democratizing Real Estate for Everyone
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                We're on a mission to make premium real estate investment accessible, transparent, and liquid for the modern investor.
                            </p>
                        </div>
                    </Container>
                </section>

                <section className="py-24">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-teal/10 text-brand-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-3">Our Mission</h3>
                                <p className="text-slate-500">To remove barriers to entry in real estate and empower individuals to build generational wealth.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-teal/10 text-brand-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-3">Trust & Security</h3>
                                <p className="text-slate-500">We operate with bank-grade security and full regulatory compliance to ensure your assets are safe.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-teal/10 text-brand-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Users className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-3">Community First</h3>
                                <p className="text-slate-500">Building a community of smart investors who grow together through shared ownership.</p>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    );
}
