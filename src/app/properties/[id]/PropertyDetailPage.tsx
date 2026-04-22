"use client";

import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight, ShieldCheck, Download, History, Building2, Ruler, Loader2, FileText, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InvestmentModal from "@/components/invest/InvestmentModal";
import { useUI } from "@/context/UIContext";
import { useAuth } from "@/context/AuthContext";
import { ALL_INVESTMENTS, Property } from "@/data/properties";

export default function PropertyDetailPage() {
    const params = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { user } = useAuth();
    const { showToast } = useUI();
    const [isInvestModalOpen, setIsInvestModalOpen] = useState(false);
    const [downloadingDoc, setDownloadingDoc] = useState<string | null>(null);

    // Find the current property/fund
    const property = ALL_INVESTMENTS.find(p => p.id.toString() === params.id);

    // Ensure property correctly typed for usage below
    const p = property as Property;

    // Auto-open modal after login if redirecting back
    useEffect(() => {
        if (searchParams.get("action") === "invest" && user) {
            setIsInvestModalOpen(true);
            // Clean up the URL
            window.history.replaceState({}, '', window.location.pathname);
        }
    }, [searchParams, user]);

    // Handle not found
    if (!property) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Investment Not Found</h1>
                    <Link to="/properties">
                        <Button>Back to Properties</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const handleDownload = (doc: string) => {
        setDownloadingDoc(doc);
        showToast(`Preparing ${doc} for download...`, "info");

        setTimeout(() => {
            setDownloadingDoc(null);
            showToast(`${doc} downloaded successfully.`, "success");
        }, 2000);
    };

    return (
        <div className="bg-white">
            <Header />
            <main className="flex-1 pt-32 lg:pt-36 bg-slate-50 min-h-screen">
                {/* Image Gallery */}
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px] md:h-[600px] mb-12 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50">
                        <div className="relative h-full group overflow-hidden">
                            <img src={p.images?.[0] || p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                        <div className="grid grid-cols-1 gap-4 h-full">
                            <div className="relative h-full group overflow-hidden">
                                <img src={p.images?.[1] || p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <div className="relative">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 text-brand-teal mb-4"
                                >
                                    <div className="p-2 bg-brand-teal/10 rounded-xl">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <span className="font-black text-[10px] uppercase tracking-[0.2em]">{p.location}</span>
                                </motion.div>
                                <h1 className="text-5xl font-black font-heading text-slate-900 mb-6 tracking-tight leading-none">{p.title}</h1>
                                <div className="flex items-center gap-3">
                                    <span className="bg-slate-900 text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">{p.category || p.strategy || "Institutional Asset"}</span>
                                    <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                        <CheckCircle2 className="w-3.5 h-3.5" /> Fully Leased
                                    </span>
                                </div>
                            </div>

                            {/* Highlights Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { label: 'Annual Yield', value: p.yield, sub: 'Monthly Payout' },
                                    { label: 'Target IRR', value: p.targetReturn, sub: 'Projected 5Y' },
                                    { label: 'Min Investment', value: p.minInvest, sub: 'Indian Citizens' },
                                    { label: 'Total Funded', value: `${p.funded}%`, sub: 'Active Raise' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all flex flex-col justify-between h-32"
                                    >
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</div>
                                        <div>
                                            <div className="text-2xl font-black text-slate-900 leading-none mb-1">{item.value}</div>
                                            <div className="text-[10px] font-bold text-brand-teal/60 uppercase tracking-widest">{item.sub}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Description */}
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                                <h3 className="text-2xl font-black font-heading mb-6 tracking-tight">Investment Thesis</h3>
                                <p className="text-slate-500 font-medium leading-[1.8] mb-10 text-lg">
                                    Strategic grade-A asset located in the core of Mumbai's financial center. The property is currently occupied by a <span className="text-slate-900 font-bold">Fortune 500 Global Tech Giant</span> with a long-term lease agreement ensuring consistent rental escalations and high capital appreciation potential.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                        <div className="p-3 bg-white rounded-2xl shadow-sm">
                                            <ShieldCheck className="w-6 h-6 text-brand-teal" />
                                        </div>
                                        <div>
                                            <div className="font-black text-slate-900 uppercase text-xs tracking-widest mb-1">Secured Tenant</div>
                                            <div className="text-sm text-slate-500 font-medium tracking-tight">Tier-1 Multinational with 9-year lock-in period.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                        <div className="p-3 bg-white rounded-2xl shadow-sm">
                                            <ArrowUpRight className="w-6 h-6 text-brand-teal" />
                                        </div>
                                        <div>
                                            <div className="font-black text-slate-900 uppercase text-xs tracking-widest mb-1">Growth Corridor</div>
                                            <div className="text-sm text-slate-500 font-medium tracking-tight">Prime BKC location with 12% avg. annual growth.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Documents */}
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-black font-heading tracking-tight">Data Room</h3>
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">3 Files Available</div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {['Financial Model.pdf', 'Title Deed Report.pdf', 'Lease Summary.pdf'].map((doc) => (
                                        <button
                                            key={doc}
                                            onClick={() => handleDownload(doc)}
                                            disabled={downloadingDoc !== null}
                                            className="flex items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-white hover:border-brand-teal/30 transition-all group disabled:opacity-50"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                                                    <FileText className="w-5 h-5 text-brand-teal" />
                                                </div>
                                                <div className="text-left">
                                                    <div className="text-sm font-black text-slate-900 group-hover:text-brand-teal transition-colors truncate">{doc.split('.')[0]}</div>
                                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PDF • 2.4 MB</div>
                                                </div>
                                            </div>
                                            {downloadingDoc === doc ? (
                                                <Loader2 className="w-5 h-5 text-brand-teal animate-spin" />
                                            ) : (
                                                <Download className="w-5 h-5 text-slate-300 group-hover:text-brand-teal transition-colors" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar (Investment Card) */}
                        <div className="lg:col-span-1">
                            <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] sticky top-32 overflow-hidden">
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-teal/20 via-transparent to-transparent pointer-events-none" />

                                <div className="relative z-10 space-y-10">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Fundraising Milestone</span>
                                            <span className="text-2xl font-black text-brand-teal">{property.funded}%</span>
                                        </div>
                                        <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-brand-teal shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${property.funded}%` }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                            />
                                        </div>
                                        <div className="text-[10px] font-black text-white/40 text-right uppercase tracking-widest">
                                            ₹ 12.5 Cr Remaining
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            { label: 'Minimum Ticket', value: property.minInvest },
                                            { label: 'Lock-in Period', value: '3 Years' },
                                            { label: 'Payout Cycle', value: 'Monthly' },
                                        ].map((stat, i) => (
                                            <div key={i} className="flex justify-between items-center pb-4 border-b border-white/10 last:border-0 last:pb-0">
                                                <span className="text-sm font-bold text-white/50">{stat.label}</span>
                                                <span className="text-sm font-black tracking-tight">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => {
                                            if (!user) {
                                                const currentPath = window.location.pathname;
                                                navigate(`/login?redirect=${encodeURIComponent(currentPath + "?action=invest")}`);
                                                return;
                                            }
                                            setIsInvestModalOpen(true);
                                        }}
                                        className="w-full py-6 bg-brand-teal text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-brand-teal/40 hover:scale-[1.02] active:scale-95 transition-all"
                                    >
                                        Initiate Investment
                                    </button>

                                    <p className="text-[9px] text-center text-white/30 font-bold uppercase tracking-widest leading-relaxed px-4">
                                        By proceeding, you agree to the <br /> Asset Ownership Framework & Terms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-xl border-t border-slate-200 z-40 lg:hidden pb-safe">
                <Button
                    onClick={() => {
                        if (!user) {
                            const currentPath = window.location.pathname;
                            navigate(`/login?redirect=${encodeURIComponent(currentPath + "?action=invest")}`);
                            return;
                        }
                        setIsInvestModalOpen(true);
                    }}
                    className="w-full py-6 bg-brand-teal text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-brand-teal/20"
                >
                    Initiate Investment
                </Button>
            </div>

            <Footer />
            <InvestmentModal
                isOpen={isInvestModalOpen}
                onClose={() => setIsInvestModalOpen(false)}
                propertyName={property.title}
            />
        </div>
    );
}
