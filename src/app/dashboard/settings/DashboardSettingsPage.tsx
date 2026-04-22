"use client";

import { useUI } from "@/context/UIContext";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    User,
    ShieldCheck,
    Building,
    Lock,
    Bell,
    CreditCard,
    ExternalLink,
    CheckCircle2,
    AlertCircle,
    ChevronRight,
    Camera,
    Smartphone,
    Clock,
    X,
    Trash2,
    PlusCircle,
    LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
    { id: "profile", label: "Profile", icon: User },
    { id: "kyc", label: "Identity (KYC)", icon: ShieldCheck },
    { id: "bank", label: "Bank Account", icon: Building },
    { id: "security", label: "Security", icon: Lock },
];

export default function SettingsPage() {
    const { showToast } = useUI();
    const [activeTab, setActiveTab] = useState("profile");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isKYCModalOpen, setIsKYCModalOpen] = useState(false);

    return (
        <div className="max-w-6xl mx-auto space-y-10 pb-20">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold font-heading text-slate-900 tracking-tight">Settings</h1>
                <p className="text-slate-500 mt-1">Manage your personal information, security preferences, and payout methods.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Sidebar Navigation */}
                <aside className="lg:w-64 space-y-2">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all",
                                activeTab === tab.id
                                    ? "bg-brand-teal text-white shadow-lg shadow-brand-teal/20"
                                    : "bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600 border border-slate-100"
                            )}
                        >
                            <tab.icon className="w-5 h-5" />
                            {tab.label}
                        </button>
                    ))}
                </aside>

                {/* Main Content Area */}
                <div className="flex-1">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100"
                    >
                        {activeTab === "profile" && <ProfileForm showToast={showToast} />}
                        {activeTab === "kyc" && <KYCStatus setOpenKYC={setIsKYCModalOpen} />}
                        {activeTab === "bank" && <BankAccountForm showToast={showToast} />}
                        {activeTab === "security" && <SecuritySettings setOpenDelete={setIsDeleteModalOpen} showToast={showToast} />}
                    </motion.div>
                </div>
            </div>

            {/* Modals Simulation */}
            <AnimatePresence>
                {isDeleteModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsDeleteModalOpen(false)}
                            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-md bg-white rounded-[2.5rem] p-10 shadow-2xl"
                        >
                            <div className="text-center">
                                <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Trash2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-black font-heading text-slate-900 mb-2">Delete Account?</h3>
                                <p className="text-slate-500 text-sm mb-8">This action is permanent. All your investment history and tax documents will be wiped.</p>

                                <div className="space-y-3">
                                    <button
                                        onClick={() => {
                                            setIsDeleteModalOpen(false);
                                            showToast("Account deletion request submitted.", "error");
                                        }}
                                        className="w-full py-4 bg-red-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-700 transition-all"
                                    >
                                        Yes, Delete Everything
                                    </button>
                                    <button
                                        onClick={() => setIsDeleteModalOpen(false)}
                                        className="w-full py-4 bg-slate-100 text-slate-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}

                {isKYCModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsKYCModalOpen(false)}
                            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-white rounded-[2.5rem] p-10 shadow-2xl"
                        >
                            <div className="mb-10">
                                <h3 className="text-2xl font-black font-heading text-slate-900 mb-2">Verify Income Source</h3>
                                <p className="text-slate-500 text-sm">Upload your latest ITR-V to increase your investment limit to ₹ 1 Crore.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="border-2 border-dashed border-slate-100 rounded-[2rem] p-12 text-center group hover:border-brand-teal/30 hover:bg-slate-50/50 transition-all cursor-pointer">
                                    <ShieldCheck className="w-12 h-12 text-slate-300 mx-auto mb-4 group-hover:text-brand-teal transition-colors" />
                                    <div className="text-sm font-bold text-slate-900">Click to upload ITR-V</div>
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">PDF, JPG (Max 5MB)</div>
                                </div>

                                <button
                                    onClick={() => {
                                        setIsKYCModalOpen(false);
                                        showToast("Documents submitted for verification.", "success");
                                    }}
                                    className="w-full py-5 bg-brand-teal text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-brand-teal/20 hover:bg-brand-teal-light transition-all"
                                >
                                    Submit for Review
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

function ProfileForm({ showToast }: { showToast: (msg: string, type?: 'success' | 'error' | 'info') => void }) {
    return (
        <div className="space-y-10">
            <div className="flex items-center gap-8">
                <div className="relative group">
                    <div className="w-32 h-32 rounded-[2rem] bg-slate-100 flex items-center justify-center border-4 border-slate-50 overflow-hidden">
                        <User className="w-16 h-16 text-slate-300" />
                    </div>
                    <button
                        onClick={() => showToast("Profile picture upload coming soon!", "info")}
                        className="absolute bottom-0 right-0 p-3 bg-brand-teal text-white rounded-2xl shadow-lg hover:scale-110 transition-transform"
                    >
                        <Camera className="w-4 h-4" />
                    </button>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">Rahul Sharma</h3>
                    <p className="text-sm text-slate-400">Investor ID: <span className="font-bold text-slate-900">#IND-90210</span></p>
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                        <CheckCircle2 className="w-3 h-3" /> Fully Verified
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full legal Name</label>
                    <input type="text" defaultValue="Rahul Sharma" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-teal/10 focus:border-brand-teal transition-all text-sm font-bold text-slate-900" />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email address</label>
                    <input type="email" defaultValue="rahul.sharma@example.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-teal/10 focus:border-brand-teal transition-all text-sm font-bold text-slate-900" />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <input type="text" defaultValue="+91 98765 43210" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-teal/10 focus:border-brand-teal transition-all text-sm font-bold text-slate-900" />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">City of Residence</label>
                    <input type="text" defaultValue="Mumbai, India" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-teal/10 focus:border-brand-teal transition-all text-sm font-bold text-slate-900" />
                </div>
            </div>

            <div className="pt-6 border-t border-slate-50 flex justify-end">
                <button
                    onClick={() => showToast("Profile changes saved successfully!", "success")}
                    className="px-10 py-5 bg-brand-teal text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-brand-teal/20 hover:scale-105 transition-transform"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}

function KYCStatus({ setOpenKYC }: { setOpenKYC: (open: boolean) => void }) {
    return (
        <div className="space-y-10">
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">Identity Verification</h3>
                    <p className="text-sm text-slate-400 mt-1">Verification level ensures platform safety and limits.</p>
                </div>
                <div className="p-4 bg-emerald-50 text-emerald-600 rounded-3xl">
                    <ShieldCheck className="w-8 h-8" />
                </div>
            </div>

            <div className="space-y-6">
                {[
                    { title: "Personal Identification", status: "Verified", desc: "Aadhar/PAN Card details provided.", icon: CheckCircle2, color: "text-emerald-500" },
                    { title: "Bank Verification", status: "Verified", desc: "Bank account linked and penny-dropped.", icon: CheckCircle2, color: "text-emerald-500" },
                    { title: "Proof of Funds", status: "Pending", desc: "Required for investments above ₹50L.", icon: Clock, color: "text-brand-gold" }
                ].map((step, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                        <div className="flex items-center gap-6">
                            <div className={cn("w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm", step.color)}>
                                <step.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="font-black text-slate-900 text-sm tracking-tight">{step.title}</div>
                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{step.desc}</div>
                            </div>
                        </div>
                        <span className={cn("text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full", step.status === "Verified" ? "bg-emerald-100 text-emerald-700" : "bg-brand-gold/10 text-brand-gold-dark")}>
                            {step.status}
                        </span>
                    </div>
                ))}
            </div>

            <div className="p-8 bg-brand-teal rounded-[2rem] text-white flex items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                        <AlertCircle className="w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg leading-tight">Increase Investment Limit</h4>
                        <p className="text-white/60 text-sm">Upload your latest ITR to unlock investments up to ₹ 1 Cr.</p>
                    </div>
                </div>
                <button
                    onClick={() => setOpenKYC(true)}
                    className="px-8 py-4 bg-white text-brand-teal rounded-2xl font-black text-xs uppercase tracking-widest whitespace-nowrap shadow-xl shadow-black/10"
                >
                    Verify Now
                </button>
            </div>
        </div>
    );
}

function BankAccountForm({ showToast }: { showToast: (msg: string, type?: 'success' | 'error' | 'info') => void }) {
    return (
        <div className="space-y-10">
            <div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">Linked Bank Account</h3>
                <p className="text-sm text-slate-400 mt-1">This account will be used for all rental payouts and withdrawals.</p>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -mr-24 -mt-24" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl -ml-16 -mb-16" />

                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-10">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-teal p-3">
                                <Building className="w-full h-full" />
                            </div>
                            <div>
                                <div className="text-xl font-black font-heading tracking-tight">HDFC Bank Ltd.</div>
                                <div className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Primary Payout Account</div>
                            </div>
                        </div>
                        <CreditCard className="w-8 h-8 text-white/20" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-10">
                        <div>
                            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Account Holder</div>
                            <div className="text-base font-bold">RAHUL SHARMA</div>
                        </div>
                        <div>
                            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Account Number</div>
                            <div className="text-base font-bold tracking-widest">**** **** 4209</div>
                        </div>
                        <div>
                            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">IFSC Code</div>
                            <div className="text-base font-bold">HDFC0001202</div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                onClick={() => showToast("Account addition flow coming soon!", "info")}
                className="flex items-center justify-between p-8 border-2 border-dashed border-slate-100 rounded-[2.5rem] hover:border-brand-teal/30 hover:bg-slate-50/50 transition-all cursor-pointer group"
            >
                <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                        <PlusCircle className="w-7 h-7" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-slate-900 leading-tight">Add New Bank Account</h4>
                        <p className="text-slate-400 text-sm">Requires penny-drop verification (1-2 days).</p>
                    </div>
                </div>
                <ChevronRight className="w-6 h-6 text-slate-300" />
            </div>
        </div>
    );
}

function SecuritySettings({ setOpenDelete, showToast }: { setOpenDelete: (open: boolean) => void, showToast: (msg: string, type?: 'success' | 'error' | 'info') => void }) {
    return (
        <div className="space-y-10">
            <div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">Security & Access</h3>
                <p className="text-sm text-slate-400 mt-1">Enhance your account security with multi-factor authentication.</p>
            </div>

            <div className="space-y-6">
                <div className="flex items-center justify-between p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-400">
                            <Lock className="w-7 h-7" />
                        </div>
                        <div>
                            <h4 className="font-black text-slate-900 text-base tracking-tight">Login Password</h4>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Last changed 4 months ago</p>
                        </div>
                    </div>
                    <button
                        onClick={() => showToast("Password reset link sent to your email.", "success")}
                        className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-slate-100 transition-all"
                    >
                        Change
                    </button>
                </div>

                <div className="flex items-center justify-between p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-teal">
                            <Smartphone className="w-7 h-7" />
                        </div>
                        <div>
                            <h4 className="font-black text-slate-900 text-base tracking-tight">2-Factor Authentication</h4>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">OTP via SMS & WhatsApp</p>
                        </div>
                    </div>
                    <div
                        onClick={() => showToast("2FA preferences updated.", "success")}
                        className="w-14 h-8 bg-brand-teal rounded-full relative p-1 cursor-pointer"
                    >
                        <div className="w-6 h-6 bg-white rounded-full absolute right-1" />
                    </div>
                </div>
                <div className="flex items-center justify-between p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-400">
                            <LogOut className="w-7 h-7" />
                        </div>
                        <div>
                            <h4 className="font-black text-slate-900 text-base tracking-tight">Sign Out</h4>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Active session since 2h ago</p>
                        </div>
                    </div>
                    <button
                        className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-slate-100 transition-all"
                        onClick={() => window.location.href = "/login"}
                    >
                        Log Out
                    </button>
                </div>
            </div>

            <div className="p-10 bg-red-50/50 border border-red-100 rounded-[2.5rem]">
                <h4 className="font-black text-red-600 text-sm uppercase tracking-widest mb-2">Danger Zone</h4>
                <p className="text-red-900/60 text-sm mb-6 max-w-lg">
                    Once you delete your account, you will lose access to all your investment history and documents. This action cannot be undone.
                </p>
                <button
                    onClick={() => setOpenDelete(true)}
                    className="px-8 py-4 bg-red-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-red-600/20 hover:bg-red-700 transition-all"
                >
                    Delete My Account
                </button>
            </div>
        </div>
    );
}
