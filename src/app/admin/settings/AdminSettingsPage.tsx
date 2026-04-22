"use client";

import React, { useState } from "react";
import { Settings, Shield, Database, Save, Download, RefreshCw, Key, Bell, CheckCircle2, AlertTriangle, ArrowRight, Activity } from "lucide-react";
import { useUI } from "@/context/UIContext";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AdminSettingsPage() {
    const { showToast } = useUI();
    const [isSaving, setIsSaving] = useState(false);
    const [isBackingUp, setIsBackingUp] = useState(false);
    const [backupProgress, setBackupProgress] = useState(0);

    const handleSaveConfig = () => {
        setIsSaving(true);
        showToast("Synchronizing platform parameters...", "info");
        setTimeout(() => {
            setIsSaving(false);
            showToast("Global configuration saved successfully.", "success");
        }, 2000);
    };

    const handleBackup = () => {
        setIsBackingUp(true);
        setBackupProgress(0);
        showToast("Initiating encrypted database backup...", "info");

        const interval = setInterval(() => {
            setBackupProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsBackingUp(false);
                    showToast("Database snapshot archived successfully.", "success");
                    return 100;
                }
                return prev + 5;
            });
        }, 150);
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 tracking-tight">System Configuration</h1>
                <p className="text-slate-500 mt-1 uppercase text-[10px] font-black tracking-widest leading-none">Global Platform Parameters & Orchestration</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {/* Platform Config Card */}
                    <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-2xl flex items-center justify-center shadow-sm">
                                <Settings className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-black font-heading text-slate-900 tracking-tight">Business Logic</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Platform Processing Fee (%)</label>
                                <div className="relative">
                                    <input type="number" defaultValue={1.5} step="0.1" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-accent/10 font-bold text-slate-900" />
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-black text-slate-300">%</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">GST/Service Tax Rate (%)</label>
                                <div className="relative">
                                    <input type="number" defaultValue={18} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-accent/10 font-bold text-slate-900" />
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-black text-slate-300">%</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Minimum Investment (₹)</label>
                                <div className="relative">
                                    <input type="text" defaultValue="5,00,000" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-accent/10 font-bold text-slate-900" />
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-black text-slate-300">INR</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Secondary Market Locked until (%)</label>
                                <div className="relative">
                                    <input type="number" defaultValue={70} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-accent/10 font-bold text-slate-900" />
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-black text-slate-300">FUNDED</div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleSaveConfig}
                            disabled={isSaving}
                            className="bg-brand-accent text-white w-full py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-brand-accent/20 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3"
                        >
                            {isSaving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                            {isSaving ? "Persisting Changes..." : "Secure Save Parameters"}
                        </button>
                    </div>

                    {/* Infrastructure Card */}
                    <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-slate-400 rounded-2xl flex items-center justify-center shadow-sm">
                                    <Database className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black font-heading text-slate-900 tracking-tight">Data Integrity</h3>
                            </div>
                            {isBackingUp && (
                                <div className="text-[10px] font-black text-brand-accent uppercase tracking-widest px-3 py-1.5 bg-brand-accent/5 rounded-full">
                                    {backupProgress}% Encrypting
                                </div>
                            )}
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start justify-between p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <div>
                                    <div className="text-sm font-black text-slate-900 mb-1 leading-none">Automated Backups</div>
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mirroring every 12 Hours</div>
                                </div>
                                <div className="w-12 h-6 bg-brand-accent rounded-full relative cursor-pointer">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button
                                    onClick={handleBackup}
                                    disabled={isBackingUp}
                                    className="w-full flex items-center justify-between p-6 bg-white border border-slate-100 rounded-xl hover:border-brand-accent/30 hover:shadow-lg hover:shadow-brand-accent/5 transition-all group disabled:opacity-50"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-brand-accent/10 rounded-xl group-hover:scale-110 transition-transform">
                                            <Download className="w-5 h-5 text-brand-accent" />
                                        </div>
                                        <div className="text-left">
                                            <div className="text-sm font-black text-slate-900">Trigger Manual Snapshot</div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase">Immediate DB Mirror to S3 Cloud</div>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-slate-200 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                                </button>

                                {isBackingUp && (
                                    <div className="px-6 space-y-2">
                                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${backupProgress}%` }}
                                                className="h-full bg-brand-accent"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Security Access Card */}
                    <div className="bg-slate-900 text-white p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-accent/20 to-transparent pointer-events-none" />

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10">
                                <Shield className="w-6 h-6 text-brand-accent" />
                            </div>
                            <h3 className="text-xl font-black font-heading tracking-tight">Auth Controls</h3>
                        </div>

                        <div className="space-y-6 relative">
                            {[
                                { label: "Admin MFA", status: "Active", icon: Key },
                                { label: "IP Whitelisting", status: "Strict", icon: Activity },
                                { label: "Session Expiry", status: "30 Mins", icon: Activity },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <item.icon className="w-4 h-4 text-brand-accent" />
                                        <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                                    </div>
                                    <span className="text-[10px] font-black text-brand-accent border border-brand-accent/30 px-2 py-0.5 rounded flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> {item.status}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => showToast("Security logs opening in new tab...", "info")}
                            className="w-full mt-10 py-5 bg-white text-slate-900 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all shadow-xl shadow-brand-accent/20"
                        >
                            View Access Logs
                        </button>
                    </div>

                    {/* Alert Config Card */}
                    <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shadow-sm">
                                <Bell className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-black font-heading text-slate-900 tracking-tight">System Alerts</h3>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 bg-red-50/50 rounded-2xl border border-red-100 flex items-center gap-3">
                                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                                <div className="text-[10px] font-black text-red-700 uppercase leading-tight">Payout Gateway high latency detected</div>
                            </div>
                            <div className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100 flex items-center gap-3">
                                <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0" />
                                <div className="text-[10px] font-black text-orange-700 uppercase leading-tight">32 Pending Bank Verifications</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
