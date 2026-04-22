"use client";

import React, { useState } from "react";
import { Users, TrendingUp, Building2, DollarSign, Download, RefreshCw } from "lucide-react";
import { useUI } from "@/context/UIContext";
import { motion } from "framer-motion";

const STATS = [
    { label: "Total Investors", value: "12,450", change: "+12%", icon: Users, color: "bg-blue-500" },
    { label: "Assets Under Mgmt", value: "₹ 450 Cr", change: "+8%", icon: TrendingUp, color: "bg-emerald-500" },
    { label: "Active Deals", value: "8", change: "0%", icon: Building2, color: "bg-purple-500" },
    { label: "Total Dist. Revenue", value: "₹ 12.5 Cr", change: "+24%", icon: DollarSign, color: "bg-brand-gold" },
];

export default function AdminDashboard() {
    const { showToast } = useUI();
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
            showToast("Market statistics updated successfully.", "info");
        }, 1500);
    };

    const handleDownloadReport = () => {
        setIsDownloading(true);
        showToast("Generating comprehensive admin report...", "info");
        setTimeout(() => {
            setIsDownloading(false);
            showToast("Admin report downloaded successfully!", "success");
        }, 3000);
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">Admin Overview</h1>
                    <p className="text-slate-500 mt-1 text-sm sm:text-base">Welcome back, Admin. System is running at 99.8% efficiency.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleRefresh}
                        className="p-3 sm:p-4 bg-white border border-slate-200 text-slate-400 rounded-xl hover:text-brand-accent hover:border-brand-accent transition-all shadow-sm"
                    >
                        <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
                    </button>
                    <button
                        onClick={handleDownloadReport}
                        disabled={isDownloading}
                        className="flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 bg-brand-primary text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-xl shadow-brand-primary/20 hover:bg-brand-secondary transition-all disabled:opacity-50"
                    >
                        <Download className={`w-4 h-4 sm:w-5 sm:h-5 ${isDownloading ? 'animate-bounce' : ''}`} /> {isDownloading ? "Generating..." : "Download Report"}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
                {STATS.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
                    >
                        <div className="flex items-center justify-between mb-4 sm:mb-6">
                            <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg ${stat.color} group-hover:scale-110 transition-transform`}>
                                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <span className="text-[9px] sm:text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 sm:px-3 py-1 rounded-full uppercase tracking-wider">
                                {stat.change}
                            </span>
                        </div>
                        <div className="text-xl sm:text-3xl font-black text-slate-900 mb-1 tracking-tight">{stat.value}</div>
                        <div className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                <div className="bg-white p-5 sm:p-8 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                        <h3 className="font-black text-base sm:text-lg font-heading text-slate-900 tracking-tight">Recent Signups</h3>
                        <button className="text-[10px] font-black text-brand-accent uppercase tracking-widest hover:underline">View All</button>
                    </div>
                    <div className="space-y-4 sm:space-y-6">
                        {[
                            { name: "Rahul Sharma", email: "rahul@example.com", time: "2 mins ago", initial: "RS" },
                            { name: "Anita Varma", email: "anita.v@test.in", time: "15 mins ago", initial: "AV" },
                            { name: "Siddharth Malhotra", email: "sid.m@startup.co", time: "1 hour ago", initial: "SM" },
                            { name: "Priya Iyer", email: "priya@invest.io", time: "3 hours ago", initial: "PI" },
                            { name: "Vikram Seth", email: "vseth@global.com", time: "5 hours ago", initial: "VS" },
                        ].map((user, i) => (
                            <div key={i} className="flex items-center justify-between py-1 group">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-xs sm:text-sm font-black text-slate-400 group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-all">
                                        {user.initial}
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-900 group-hover:text-brand-accent transition-colors">{user.name}</div>
                                        <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mt-1 hidden sm:block">{user.email}</div>
                                    </div>
                                </div>
                                <div className="text-[9px] sm:text-[10px] font-bold text-slate-300 uppercase tracking-wider whitespace-nowrap">{user.time}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-5 sm:p-8 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                        <h3 className="font-black text-base sm:text-lg font-heading text-slate-900 tracking-tight">Pending Approvals</h3>
                        <div className="px-2 sm:px-3 py-1 bg-red-50 text-red-600 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider border border-red-100">
                            3 Required
                        </div>
                    </div>
                    <div className="space-y-3 sm:space-y-6">
                        {[
                            { name: "Arjun Kapoor", type: "PAN Verification", status: "Priority" },
                            { name: "Deepika Padukone", type: "ITR-V Audit", status: "Normal" },
                            { name: "Ranbir Singh", type: "Bank Linking", status: "New" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 group hover:border-brand-accent/30 hover:bg-white transition-all">
                                <div className="flex items-center gap-3 sm:gap-5">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-[9px] sm:text-[10px] font-black text-orange-600">
                                        KYC
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-900">{item.name}</div>
                                        <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.type}</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => showToast(`Opening review portal for ${item.name}...`, "info")}
                                    className="px-3 sm:px-5 py-2 bg-white border border-slate-200 text-brand-accent rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-wider hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all shadow-sm"
                                >
                                    Review
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
