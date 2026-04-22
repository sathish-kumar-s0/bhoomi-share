import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, PlayCircle, TrendingUp, ShieldCheck, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { SEBILogo, RERALogo, DFSALogo } from "@/components/ui/Logos";
import Logo from "@/components/ui/Logo";

export default function Hero() {
    const { user } = useAuth();
    return (
        <section className="relative min-h-[90vh] flex items-center bg-transparent overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
            {/* Background Decor - Subtle Gradients (Copper/Obsidian Theme) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl -ml-20 -mb-20" />

            <Container className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <div className="max-w-2xl pt-6 lg:pt-0 text-center lg:text-left mx-auto lg:mx-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-brand-primary/5 text-brand-primary px-4 py-2 rounded-full text-sm font-bold mb-6 border border-brand-primary/10"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                        New: Institutional Assets Live
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading text-slate-900 leading-[1.1] mb-6 tracking-tight"
                    >
                        "The best investment on <span className="text-brand-accent">Earth</span> is <span className="text-brand-accent">earth</span>."
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0 font-medium"
                    >
                        Invest in prime rental properties from ₹25,000.
                        Earn monthly income and watch your capital grow with India's most trusted platform.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
                    >
                        <Link to={user ? (user.role === 'admin' ? "/admin" : "/dashboard") : "/signup"}>
                            <Button size="lg" className="text-lg px-8 h-14 w-full sm:w-auto bg-brand-primary hover:bg-brand-secondary text-white shadow-xl shadow-brand-primary/20 transition-all rounded-xl">
                                {user ? (
                                    <>Go to Dashboard <LayoutDashboard className="ml-2 w-5 h-5" /></>
                                ) : (
                                    <>Get Started <ArrowRight className="ml-2 w-5 h-5" /></>
                                )}
                            </Button>
                        </Link>
                        <Link to="/#how-it-works">
                            <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-brand-primary w-full sm:w-auto rounded-xl shadow-sm">
                                <PlayCircle className="mr-2 w-5 h-5" /> Learn How
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Social Proof Row */}
                    <div className="flex flex-col gap-4 border-t border-slate-200 pt-8 mt-4 items-center lg:items-start">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Regulated & Trusted By</p>
                        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                            <SEBILogo className="h-8 text-brand-primary" />
                            <div className="h-4 w-px bg-slate-300 hidden sm:block" />
                            <RERALogo className="h-8 text-brand-primary" />
                            <div className="h-4 w-px bg-slate-300 hidden sm:block" />
                            <DFSALogo className="h-8 text-brand-primary" />
                        </div>
                    </div>
                </div>

                {/* Right Visual - Phone Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative block mt-8 lg:mt-0 flex justify-center w-full"
                >
                    {/* Phone Frame - Added responsive scale for tiny devices and centered it perfectly */}
                    <div className="relative w-[320px] max-w-[90vw] mx-auto bg-brand-primary rounded-[3rem] border-8 border-brand-primary shadow-2xl overflow-hidden drop-shadow-2xl sm:scale-100 scale-[0.95] origin-top">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-brand-primary rounded-b-xl z-20" />

                        {/* App Screen */}
                        <div className="bg-slate-50 h-[640px] w-full pt-12 px-6 relative">
                            {/* App Header */}
                            <div className="flex justify-between items-center mb-6">
                                <Logo size="xs" />
                                <img src="/user.png" alt="Avatar" className="w-8 h-8 rounded-full border border-slate-200 shadow-sm bg-white" />
                            </div>

                            {/* Portfolio Balance Card */}
                            <div className="bg-brand-primary text-white p-6 rounded-2xl shadow-lg mb-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/20 rounded-full -mr-10 -mt-10 blur-xl" />
                                <div className="text-white/70 text-sm mb-1 font-medium">Total Portfolio</div>
                                <div className="text-3xl font-black mb-4 tracking-tight">₹ 4,25,000</div>
                                <div className="flex gap-2">
                                    <span className="bg-white/10 border border-white/10 px-2 py-1 rounded text-xs font-bold text-brand-accent">+12.5%</span>
                                    <span className="bg-white/10 border border-white/10 px-2 py-1 rounded text-xs">▲ ₹52k</span>
                                </div>
                            </div>

                            {/* Mini Chart */}
                            <div className="mb-6 p-4 bg-white rounded-[20px] shadow-sm border border-slate-100">
                                <div className="text-slate-500 text-[10px] font-bold mb-3 uppercase tracking-wider">Income Growth</div>
                                <div className="h-20 flex items-end gap-1.5">
                                    {[40, 60, 45, 70, 85, 60, 90, 100].map((h, i) => (
                                        <div key={i} className="flex-1 bg-brand-primary/10 rounded-t-sm relative overflow-hidden group" style={{ height: `${h}%` }}>
                                            <div className="absolute inset-0 bg-brand-primary/50 w-full rounded-t-sm" style={{ opacity: i > 4 ? 1 : 0.3 }} />
                                            <div className="absolute bottom-0 w-full bg-brand-accent h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Deal List */}
                            <div className="space-y-4">
                                <div className="text-slate-900 font-bold text-sm">Active Investments</div>
                                {[1, 2].map(i => (
                                    <div key={i} className="flex gap-3 items-center p-3 bg-white shadow-sm border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                                        <div className="w-10 h-10 bg-slate-100 rounded-lg shrink-0 flex items-center justify-center">
                                            <LayoutDashboard className="w-5 h-5 text-slate-400" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-xs text-brand-primary">Skyline Tower {i === 1 ? 'A' : 'B'}</div>
                                            <div className="text-[10px] text-slate-500 font-medium">Mumbai • Commercial</div>
                                        </div>
                                        <div className="ml-auto text-right">
                                            <div className="text-xs font-bold text-brand-accent">9.2%</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Floating Badges - Clamped inwards on small screens to prevent horizontal overflow */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 -right-1 sm:-right-8 bg-white p-3 sm:p-4 rounded-xl shadow-xl flex items-center gap-2 sm:gap-3 border border-slate-100 z-30 scale-90 sm:scale-100 origin-right"
                    >
                        <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-lg">
                            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                            <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">Yield</div>
                            <div className="text-base sm:text-lg font-black text-brand-primary">9.2%</div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-1/4 -left-1 sm:-left-8 bg-white p-3 sm:p-4 rounded-xl shadow-xl flex items-center gap-2 sm:gap-3 border border-slate-100 z-30 scale-90 sm:scale-100 origin-left"
                    >
                        <div className="p-2 bg-brand-gold/10 text-brand-gold-dark rounded-lg">
                            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                            <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">Security</div>
                            <div className="text-base sm:text-lg font-black text-brand-primary">Regulated</div>
                        </div>
                    </motion.div>

                </motion.div>
            </Container>
        </section>
    );
}
