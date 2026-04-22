"use client";

import { useUI } from "@/context/UIContext";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    CheckCircle2,
    AlertCircle,
    Building,
    Shield,
    PieChart,
    MapPin,
    Building2,
    TrendingUp,
    Info,
    ArrowUpRight,
    Download,
    Filter
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function PortfolioPage() {
    const { showToast } = useUI();
    const [isExporting, setIsExporting] = useState(false);
    const [isGuideOpen, setIsGuideOpen] = useState(false);

    const handleExport = () => {
        setIsExporting(true);
        showToast("Generating portfolio report...", "info");
        setTimeout(() => {
            setIsExporting(false);
            showToast("Report exported successfully!", "success");
        }, 3000);
    };

    return (
        <div className="max-w-6xl mx-auto space-y-10 pb-20">
            {/* Header with Page Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold font-heading text-slate-900 tracking-tight">My Portfolio</h1>
                    <p className="text-slate-500 mt-1">Detailed breakdown of your ₹ 50.45L investment across 3 prime Indian assets.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleExport}
                        disabled={isExporting}
                        className={cn(
                            "flex items-center gap-2 px-5 py-2.5 border border-slate-200 rounded-2xl text-xs font-black transition-all uppercase tracking-widest",
                            isExporting ? "bg-slate-50 text-slate-400 cursor-not-allowed" : "bg-white text-slate-600 hover:bg-slate-50"
                        )}
                    >
                        {isExporting ? (
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            >
                                <Download className="w-4 h-4" />
                            </motion.div>
                        ) : <Download className="w-4 h-4" />}
                        {isExporting ? "Exporting..." : "Export Report"}
                    </button>
                    <button
                        onClick={() => showToast("Asset filtering coming soon!", "info")}
                        className="flex items-center gap-2 px-5 py-2.5 bg-brand-teal text-white rounded-2xl text-xs font-black hover:bg-brand-teal/90 shadow-lg shadow-brand-teal/20 transition-all uppercase tracking-widest"
                    >
                        <Filter className="w-4 h-4" /> Filter Assets
                    </button>
                </div>
            </div>

            {/* Distribution Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* City Wise Allocation */}
                <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h3 className="font-bold text-slate-900 text-xl font-heading">Geographic Distribution</h3>
                            <p className="text-xs text-slate-400 mt-1">Diversification across major Indian tech hubs</p>
                        </div>
                        <div className="p-3 bg-brand-teal/5 text-brand-teal rounded-2xl">
                            <MapPin className="w-6 h-6" />
                        </div>
                    </div>

                    <div className="space-y-8">
                        {[
                            { city: "Mumbai (MMR)", share: "45%", value: "₹ 22.7L", color: "bg-brand-teal" },
                            { city: "Bangalore (BLR)", share: "35%", value: "₹ 17.6L", color: "bg-brand-gold" },
                            { city: "Gurgaon (NCR)", share: "20%", value: "₹ 10.1L", color: "bg-slate-200" }
                        ].map((item) => (
                            <div key={item.city} className="space-y-3">
                                <div className="flex justify-between items-end">
                                    <span className="text-sm font-bold text-slate-700">{item.city}</span>
                                    <div className="text-right">
                                        <div className="text-sm font-black text-slate-900">{item.value}</div>
                                        <div className="text-[10px] font-bold text-slate-400">{item.share} Allocation</div>
                                    </div>
                                </div>
                                <div className="h-3 bg-slate-50 rounded-full overflow-hidden border border-slate-100 p-0.5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: item.share }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className={cn("h-full rounded-full shadow-sm", item.color)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-brand-teal" /> Commercial Office
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-brand-gold" /> Logistics & Warehousing
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-slate-200" /> Mixed Use
                        </div>
                    </div>
                </div>

                {/* Portfolio Health / ESG Score Card */}
                <div className="bg-brand-teal rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                    <div>
                        <div className="flex items-start justify-between mb-8">
                            <div className="w-14 h-14 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-md">
                                <TrendingUp className="w-7 h-7" />
                            </div>
                            <span className="bg-brand-gold text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-black/10">
                                Overweight
                            </span>
                        </div>
                        <h3 className="text-2xl font-black font-heading mb-4 leading-tight">Investment Score</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-8">
                            Your portfolio is currently leaning towards <span className="text-brand-gold font-bold underline">Tier-1 Commercial</span>. Suggest diversifying into Industrial assets for balanced growth.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="text-4xl font-black font-heading">8.4</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-white/50 leading-tight">Risk Efficiency<br />Score</div>
                        </div>
                        <button
                            onClick={() => setIsGuideOpen(true)}
                            className="w-full py-4 bg-white text-brand-teal rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-gold hover:text-white transition-all shadow-xl shadow-black/10"
                        >
                            Optimization Guide
                        </button>
                    </div>
                </div>
            </div>

            {/* Detailed Asset Table/List */}
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-10 border-b border-slate-50">
                    <h3 className="font-bold text-slate-900 text-xl font-heading">Asset Master List</h3>
                    <p className="text-xs text-slate-400 mt-1">Detailed performance metrics per property</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[800px]">
                        <thead className="bg-slate-50/50 text-slate-400 text-[10px] uppercase font-black tracking-[0.15em]">
                            <tr>
                                <th className="px-10 py-5">Property Details</th>
                                <th className="px-10 py-5">Purchase Info</th>
                                <th className="px-10 py-5 text-center">Net Yield</th>
                                <th className="px-10 py-5 text-center">Rental Income</th>
                                <th className="px-10 py-5 text-right">Appreciated Value</th>
                                <th className="px-10 py-5 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {[
                                {
                                    name: "The Summit Plaza",
                                    address: "BKC, Mumbai",
                                    bought: "₹ 20.0L",
                                    date: "Oct 2023",
                                    yield: "8.5%",
                                    payout: "₹ 14,166/mo",
                                    current: "₹ 24,50,000",
                                    appreciation: "+18.5%",
                                    exitWindow: "Open",
                                    reinvest: true
                                },
                                {
                                    name: "Metro Logistics Hub",
                                    address: "Bhiwandi, Thane",
                                    bought: "₹ 15.0L",
                                    date: "Jan 2024",
                                    yield: "9.1%",
                                    payout: "₹ 11,375/mo",
                                    current: "₹ 18,20,000",
                                    appreciation: "+21.3%",
                                    exitWindow: "Closed",
                                    reinvest: false
                                },
                                {
                                    name: "India Growth Fund II",
                                    address: "Pan-India Portfolio",
                                    bought: "₹ 10.0L",
                                    date: "Aug 2024",
                                    yield: "12.5% IRR",
                                    payout: "N/A (Accrued)",
                                    current: "₹ 10,85,000",
                                    appreciation: "+8.5%",
                                    exitWindow: "Closed",
                                    reinvest: false
                                }
                            ].map((asset, i) => (
                                <tr key={i} className="group hover:bg-slate-50/50 transition-all duration-300">
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                                                <Building2 className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="font-black text-slate-900 text-sm group-hover:text-brand-teal transition-colors tracking-tight">{asset.name}</div>
                                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{asset.address}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8">
                                        <div className="text-sm font-bold text-slate-900">{asset.bought}</div>
                                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{asset.date}</div>
                                    </td>
                                    <td className="px-10 py-8 text-center">
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 text-xs font-black">
                                            {asset.yield}
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 text-center">
                                        <div className="text-sm font-black text-slate-900">{asset.payout}</div>
                                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Calculated Monthly</div>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <div className="flex items-center justify-end gap-3">
                                            <div className="text-right">
                                                <div className="text-sm font-black text-slate-900">{asset.current}</div>
                                                <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">{asset.appreciation} Appreciation</div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                {asset.exitWindow === "Open" && (
                                                    <span className="px-2 py-0.5 bg-brand-gold/10 text-brand-gold-dark text-[8px] font-black uppercase tracking-widest rounded-md border border-brand-gold/20">
                                                        Exit Open
                                                    </span>
                                                )}
                                                {asset.reinvest && (
                                                    <span className="px-2 py-0.5 bg-brand-teal/10 text-brand-teal text-[8px] font-black uppercase tracking-widest rounded-md border border-brand-teal/20">
                                                        Auto-Reinvest
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 text-center">
                                        <button
                                            onClick={() => showToast(`Loading full analytics for ${asset.name}...`, "info")}
                                            className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:bg-brand-teal hover:text-white transition-all shadow-sm hover:shadow-md"
                                        >
                                            <ArrowUpRight className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Educational Tooltip Footer */}
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center gap-8 border border-white/5">
                <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center shrink-0 shadow-2xl shadow-brand-gold/20">
                    <Info className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h4 className="text-xl font-bold font-heading mb-2">Understanding "Appreciated Value"</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                        The values shown are based on the latest 3rd party valuations (Knight Frank/JLL) conducted on 31 Dec 2025. These estimates represent market trends and independent audit results.
                    </p>
                </div>
                <button
                    onClick={() => showToast("Opening valuation schedule for Q1 2026...", "info")}
                    className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all text-xs font-black uppercase tracking-widest border border-white/10 shrink-0"
                >
                    View Valuation Schedule
                </button>
            </div>

            {/* Optimization Guide Modal */}
            <AnimatePresence>
                {isGuideOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsGuideOpen(false)}
                            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] p-10 shadow-2xl overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8">
                                <button onClick={() => setIsGuideOpen(false)} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
                                    <X className="w-5 h-5 text-slate-400" />
                                </button>
                            </div>

                            <div className="mb-10">
                                <span className="px-4 py-2 bg-brand-gold/10 text-brand-gold-dark rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Institutional Advice</span>
                                <h3 className="text-2xl font-black font-heading text-slate-900 mb-2">Portfolio Optimization Guide</h3>
                                <p className="text-slate-500 text-sm">Actionable steps to increase your Risk Efficiency Score from 8.4 to 9.2.</p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { title: "Increase Sector Diversity", desc: "Your portfolio is 80% Commercial. Consider adding Industrial assets in Chennai/Pune.", icon: Building, color: "text-brand-teal" },
                                    { title: "Occupancy Risk Management", desc: "One of your assets has a lease expiring in 12 months. Review renewal status.", icon: AlertCircle, color: "text-brand-gold" },
                                    { title: "Regulatory Hedge", desc: "Utilize the 'Auto-Reinvest' feature for tax-efficient capital gains management.", icon: Shield, color: "text-emerald-500" }
                                ].map((tip, i) => (
                                    <div key={i} className="flex gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:border-brand-teal/30 transition-all">
                                        <div className={cn("w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm shrink-0", tip.color)}>
                                            <tip.icon className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900 text-base mb-1">{tip.title}</h4>
                                            <p className="text-slate-500 text-xs leading-relaxed">{tip.desc}</p>
                                        </div>
                                    </div>
                                ))}

                                <button
                                    onClick={() => {
                                        setIsGuideOpen(false);
                                        showToast("Strategy applied to your investment filters!", "success");
                                    }}
                                    className="w-full py-5 bg-brand-teal text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-brand-teal/20 hover:bg-brand-teal-light transition-all mt-4"
                                >
                                    Apply Optimization Strategy
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
