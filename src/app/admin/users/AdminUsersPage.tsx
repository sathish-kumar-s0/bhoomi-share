"use client";

import React, { useState } from "react";
import { Search, Filter, ShieldCheck, ShieldAlert, MoreHorizontal, Download, UserPlus, X, Mail, Phone, Calendar, ArrowUpRight, Lock, Unlock, AlertCircle } from "lucide-react";
import { useUI } from "@/context/UIContext";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AdminUsersPage() {
    const { showToast } = useUI();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [isManageModalOpen, setIsManageModalOpen] = useState(false);

    const USERS = [
        { name: "Rahul Sharma", email: "rahul@example.com", joined: "Jan 12, 2026", status: "Verified", amount: "₹ 5.2L", phone: "+91 98765 43210" },
        { name: "Anita Desai", email: "anita@example.com", joined: "Jan 15, 2026", status: "Pending", amount: "₹ 0", phone: "+91 88776 55443" },
        { name: "Vikram Singh", email: "vikram@example.com", joined: "Jan 18, 2026", status: "Verified", amount: "₹ 12.8L", phone: "+91 99887 76655" },
        { name: "Sanya Malhotra", email: "sanya.m@test.com", joined: "Jan 20, 2026", status: "Verified", amount: "₹ 4.5L", phone: "+91 77665 54433" },
    ];

    const handleVerifyToggle = (userName: string, currentStatus: string) => {
        const newStatus = currentStatus === "Verified" ? "Pending" : "Verified";
        showToast(`Updating ${userName}'s status to ${newStatus}...`, "info");
        setTimeout(() => {
            showToast(`${userName} is now ${newStatus}.`, "success");
        }, 1500);
    };

    const handleManageUser = (user: any) => {
        setSelectedUser(user);
        setIsManageModalOpen(true);
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 tracking-tight">Investor Directory</h1>
                    <p className="text-slate-500 mt-1 uppercase text-[10px] font-black tracking-widest">Active Investors: 12,450  |  Pending KYC: 142</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => showToast("Exporting investor data...", "info")}
                        className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-white border border-slate-100 text-slate-400 rounded-xl sm:rounded-2xl font-bold text-[10px] uppercase tracking-wider hover:border-brand-accent hover:text-brand-accent transition-all shadow-sm"
                    >
                        <Download className="w-4 h-4" /> Export CSV
                    </button>
                    <button
                        onClick={() => showToast("Manual user creation disabled for safety.", "error")}
                        className="flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 bg-brand-primary text-white rounded-xl sm:rounded-2xl font-bold text-xs uppercase tracking-wider shadow-xl shadow-brand-primary/20 hover:bg-brand-secondary transition-all"
                    >
                        <UserPlus className="w-5 h-5" /> Add Investor
                    </button>
                </div>
            </div>

            {/* Admin Tools Bar */}
            <div className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100 shadow-sm mb-6 flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by name, email, or pan number..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-accent/10 transition-all text-sm font-bold text-slate-900 placeholder:text-slate-400"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <select className="px-6 py-4 bg-slate-50 border-none rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-500 appearance-none min-w-[160px] focus:ring-2 focus:ring-brand-accent/10">
                        <option>All Status</option>
                        <option>Verified</option>
                        <option>Pending</option>
                    </select>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[1000px]">
                        <thead className="bg-slate-50/50 border-b border-slate-100">
                            <tr>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Investor Profile</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Onboarding Date</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">KYC Status</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Total Portfolio</th>
                                <th className="px-8 py-6 text-right text-[10px] font-black uppercase tracking-widest text-slate-400">Management</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {USERS.map((user, i) => (
                                <tr key={user.email} className="hover:bg-slate-50/50 transition-all group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-sm font-black text-slate-400 group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-all">
                                                {user.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <div className="text-sm font-black text-slate-900 mb-0.5">{user.name}</div>
                                                <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                                            <Calendar className="w-4 h-4 text-slate-300" /> {user.joined}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <button
                                            onClick={() => handleVerifyToggle(user.name, user.status)}
                                            className={cn(
                                                "px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border transition-all",
                                                user.status === 'Verified'
                                                    ? 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100'
                                                    : 'bg-orange-50 text-orange-600 border-orange-100 hover:bg-orange-100'
                                            )}
                                        >
                                            {user.status === 'Verified' ? <ShieldCheck className="w-3.5 h-3.5" /> : <ShieldAlert className="w-3.5 h-3.5" />}
                                            {user.status}
                                        </button>
                                    </td>
                                    <td className="px-8 py-6 text-sm font-black text-brand-accent tracking-tight">{user.amount}</td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleManageUser(user)}
                                                className="px-5 py-2.5 bg-white border border-slate-200 text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:text-brand-accent hover:border-brand-accent transition-all shadow-sm"
                                            >
                                                Manage Access
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Manage Access Modal */}
            <AnimatePresence>
                {isManageModalOpen && selectedUser && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/20 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsManageModalOpen(false)}
                            className="absolute inset-0"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-white rounded-2xl p-10 shadow-2xl overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-2xl font-black font-heading text-slate-900 tracking-tight">Manage Access</h3>
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Ref ID: USER-{selectedUser.email.split('@')[0].toUpperCase()}</p>
                                </div>
                                <button onClick={() => setIsManageModalOpen(false)} className="p-3 hover:bg-slate-50 rounded-2xl transition-colors">
                                    <X className="w-6 h-6 text-slate-300" />
                                </button>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-100">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-lg font-black text-brand-accent shadow-sm">
                                        {selectedUser.name.split(' ').map((n: string) => n[0]).join('')}
                                    </div>
                                    <div>
                                        <div className="text-lg font-black text-slate-900">{selectedUser.name}</div>
                                        <div className="text-xs font-medium text-slate-500">{selectedUser.email}</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                                        <Phone className="w-4 h-4 text-slate-300" />
                                        <div className="text-[10px] font-black text-slate-900 truncate">CONTACTABLE</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                                        <Lock className="w-4 h-4 text-slate-300" />
                                        <div className="text-[10px] font-black text-slate-900 uppercase">Multi-Auth</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={() => {
                                        setIsManageModalOpen(false);
                                        showToast(`OTP reset link sent to ${selectedUser.name}.`, "success");
                                    }}
                                    className="w-full flex items-center justify-between p-6 bg-slate-50 rounded-xl border border-slate-100 hover:bg-white hover:border-brand-accent/30 transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <Unlock className="w-5 h-5 text-slate-400 group-hover:text-brand-accent" />
                                        <div className="text-left">
                                            <div className="text-sm font-black text-slate-900">Reset 2FA Access</div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase">Emergency Override</div>
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-slate-200" />
                                </button>

                                <button
                                    onClick={() => {
                                        setIsManageModalOpen(false);
                                        showToast(`${selectedUser.name}'s account has been frozen.`, "error");
                                    }}
                                    className="w-full flex items-center justify-between p-6 bg-red-50/50 rounded-xl border border-red-100 hover:bg-red-50 transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <AlertCircle className="w-5 h-5 text-red-400" />
                                        <div className="text-left">
                                            <div className="text-sm font-black text-red-600">Freeze Account</div>
                                            <div className="text-[10px] font-bold text-red-900/40 uppercase">Restricts all Withdrawals</div>
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-red-200" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
