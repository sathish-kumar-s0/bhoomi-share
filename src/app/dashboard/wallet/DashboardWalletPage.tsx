"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Wallet,
    ArrowUpCircle,
    ArrowDownCircle,
    MinusCircle,
    PlusCircle,
    Search,
    Filter,
    ChevronRight,
    ExternalLink,
    CheckCircle2,
    Clock,
    X,
    TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

import { useUI } from "@/context/UIContext";

declare global {
    interface Window {
        Razorpay: any;
    }
}

export default function WalletPage() {
    const { showToast } = useUI();
    const [activeFilter, setActiveFilter] = useState("all");
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
    const [balance, setBalance] = useState(122500);
    const [amount, setAmount] = useState("");

    const handleAddFunds = () => {
        if (!amount) {
            showToast("Please enter an amount", "error");
            return;
        }

        const options = {
            key: "rzp_test_AcFY4djFN57zq9",
            amount: Number(amount) * 100,
            currency: "INR",
            name: "Bhoomi Share",
            description: "Wallet Top-up",
            image: "/logo.png",
            handler: function (response: any) {
                showToast(`Payment Successful! ID: ${response.razorpay_payment_id}. Added ₹${amount} to wallet.`, "success");
                setBalance(prev => prev + Number(amount));
                setIsAddModalOpen(false);
                setAmount("");
            },
            prefill: {
                name: "Bhoomi Share User",
                email: "user@bhoomishare.com",
                contact: "9999999999"
            },
            notes: {
                address: "Bhoomi Share Corporate Office"
            },
            theme: {
                color: "#0F766E"
            }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response: any) {
            showToast(`Payment Failed: ${response.error.description}`, "error");
        });
        rzp1.open();
    };

    const handleWithdraw = () => {
        showToast(`Withdrawal of ₹${amount || '10,000'} initiated to HDFC Bank.`, 'success');
        setIsWithdrawModalOpen(false);
        setAmount("");
    };

    return (
        <div className="max-w-6xl mx-auto space-y-10 pb-20">
            {/* Wallet Header / Balance Card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-slate-900 rounded-[2.5rem] p-6 md:p-10 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-brand-teal/30 transition-colors" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                                <Wallet className="w-6 h-6 text-brand-gold" />
                            </div>
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-white/50">Bhoomi Share Wallet</span>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                            <div>
                                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1 text-center md:text-left">Available Balance</div>
                                <div className="text-5xl font-black font-heading tracking-tight text-center md:text-left">
                                    ₹ {balance.toLocaleString('en-IN')}<span className="text-xl text-white/30 ml-2">.00</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setIsAddModalOpen(true)}
                                    className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-brand-teal text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-brand-teal/20 hover:bg-brand-teal-light transition-all"
                                >
                                    <PlusCircle className="w-4 h-4" /> Add Funds
                                </button>
                                <button
                                    onClick={() => setIsWithdrawModalOpen(true)}
                                    className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all"
                                >
                                    <MinusCircle className="w-4 h-4" /> Withdraw
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-slate-100 flex flex-col justify-between group">
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Locked Funds</div>
                            <div className="p-2 bg-slate-50 text-slate-400 rounded-xl group-hover:text-brand-teal transition-colors">
                                <Clock className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="text-3xl font-black font-heading text-slate-900 tracking-tight">₹ 49.30L</div>
                        <p className="text-xs text-slate-400 mt-2 font-medium">Invested in 3 properties</p>
                    </div>

                    <div className="pt-8 border-t border-slate-50 mt-8">
                        <div className="flex justify-between items-center text-xs font-bold mb-3">
                            <span className="text-slate-500">Auto-Invest Status</span>
                            <span className="text-emerald-500">Enabled</span>
                        </div>
                        <div className="h-1.5 bg-slate-50 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[100%]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Transactions Section */}
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 md:p-10 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h3 className="font-bold text-slate-900 text-xl font-heading">Transaction History</h3>
                        <p className="text-xs text-slate-400 mt-1">Track your dividends, payouts, and wallet movements</p>
                    </div>

                    <div className="flex items-center gap-3 bg-slate-50 p-1.5 rounded-[1.25rem] border border-slate-100 overflow-x-auto no-scrollbar">
                        {["all", "income", "deposits", "investments"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={cn(
                                    "px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
                                    activeFilter === filter
                                        ? "bg-white text-brand-teal shadow-md"
                                        : "text-slate-400 hover:text-slate-600"
                                )}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="divide-y divide-slate-50">
                    {[
                        { id: "#TX-90210", title: "Rental Payout - The Summit Plaza", type: "income", date: "Jan 01, 2026", amount: "+₹ 14,166", status: "Completed" },
                        { id: "#TX-90209", title: "Rental Payout - Metro Logistics", type: "income", date: "Jan 01, 2026", amount: "+₹ 11,375", status: "Completed" },
                        { id: "#TX-88210", title: "Wallet Top-up via UPI", type: "deposit", date: "Dec 24, 2025", amount: "+₹ 50,000", status: "Completed" },
                        { id: "#TX-87102", title: "Investment - Cyber City Tower C", type: "investment", date: "Nov 15, 2025", amount: "-₹ 7,75,000", status: "Completed" },
                        { id: "#TX-86500", title: "Withdrawal to HDFC Bank", type: "withdrawal", date: "Oct 12, 2025", amount: "-₹ 1,50,000", status: "Completed" }
                    ].map((tx, i) => (
                        <div key={i} className="px-6 md:px-10 py-6 hover:bg-slate-50/50 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
                            <div className="flex items-center gap-6">
                                <div className={cn(
                                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110",
                                    tx.type === "income" || tx.type === "deposit" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-400"
                                )}>
                                    {tx.type === "income" ? <ArrowUpCircle className="w-6 h-6" /> :
                                        tx.type === "deposit" ? <PlusCircle className="w-6 h-6" /> :
                                            tx.type === "investment" ? <MinusCircle className="w-6 h-6" /> :
                                                <ArrowDownCircle className="w-6 h-6" />}
                                </div>
                                <div>
                                    <div className="font-black text-slate-900 text-sm group-hover:text-brand-teal transition-colors">{tx.title}</div>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tx.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-200" />
                                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{tx.id}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-10">
                                <div className="text-right">
                                    <div className={cn(
                                        "font-black text-base tracking-tight",
                                        tx.amount.startsWith("+") ? "text-emerald-600" : "text-slate-900"
                                    )}>
                                        {tx.amount}
                                    </div>
                                    <div className="flex items-center justify-end gap-1.5 mt-0.5">
                                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{tx.status}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => showToast(`Opening transaction details for ${tx.id}...`, 'info')}
                                    className="p-3 bg-white border border-slate-100 rounded-xl text-slate-300 hover:text-brand-teal hover:border-brand-teal transition-all"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-8 bg-slate-50/50 flex items-center justify-center">
                    <button
                        onClick={() => showToast("Loading more transactions...", 'info')}
                        className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-brand-teal transition-colors"
                    >
                        Load More Transactions
                    </button>
                </div>
            </div>

            {/* Setup Auto-Invest Banner */}
            <div className="bg-brand-gold rounded-[2.5rem] p-6 md:p-10 text-slate-900 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] -mr-32 -mt-32" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl shadow-brand-gold/20">
                        <TrendingUp className="w-10 h-10 text-brand-gold" />
                    </div>
                    <div>
                        <h4 className="text-xl font-black font-heading mb-2">Automate Your Wealth</h4>
                        <p className="text-slate-800/60 text-sm max-w-md font-medium">
                            Set up rules to automatically reinvest your monthly rental income into new opportunities and maximize compound returns.
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => showToast("Auto-invest configuration rules coming soon!", 'info')}
                    className="relative z-10 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-black/20"
                >
                    Configure Rules
                </button>
            </div>

            {/* Modals Simulation */}
            <AnimatePresence>
                {
                    isAddModalOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsAddModalOpen(false)}
                                className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-lg mx-4 bg-white rounded-[2.5rem] p-6 md:p-10 shadow-2xl overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8">
                                    <button onClick={() => setIsAddModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
                                        <X className="w-5 h-5 text-slate-400" />
                                    </button>
                                </div>

                                <div className="mb-10">
                                    <h3 className="text-2xl font-black font-heading text-slate-900 mb-2">Add Funds</h3>
                                    <p className="text-slate-500 text-sm">Top up your wallet via UPI, NetBanking or Bank Transfer.</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Amount (INR)</label>
                                        <input
                                            type="number"
                                            placeholder="Enter amount..."
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-teal/10 focus:border-brand-teal transition-all text-lg font-black text-slate-900"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button onClick={() => setAmount("10000")} className="py-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black uppercase text-slate-400 hover:border-brand-teal hover:text-brand-teal transition-all">₹ 10,000</button>
                                        <button onClick={() => setAmount("50000")} className="py-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black uppercase text-slate-400 hover:border-brand-teal hover:text-brand-teal transition-all">₹ 50,000</button>
                                    </div>

                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center p-2">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="w-full h-full object-contain" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900">UPI / NetBanking</div>
                                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Instant Settlement</div>
                                            </div>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-slate-300 hidden md:block" />
                                    </div>

                                    <button
                                        onClick={handleAddFunds}
                                        className="w-full py-5 bg-brand-teal text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-brand-teal/20 hover:bg-brand-teal-light transition-all"
                                    >
                                        Proceed to Pay
                                    </button>
                                    <button
                                        onClick={() => {
                                            showToast(`(TEST) Payment Successful! Added ₹${amount} to wallet.`, "success");
                                            setBalance(prev => prev + Number(amount));
                                            setBalance(prev => prev + Number(amount));
                                            setIsAddModalOpen(false);
                                            setAmount("");
                                        }}
                                        className="w-full py-3 bg-slate-100 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all"
                                    >
                                        Simulate Successful Payment (Test Mode)
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )
                }

                {
                    isWithdrawModalOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsWithdrawModalOpen(false)}
                                className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-lg mx-4 bg-white rounded-[2.5rem] p-6 md:p-10 shadow-2xl overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8">
                                    <button onClick={() => setIsWithdrawModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
                                        <X className="w-5 h-5 text-slate-400" />
                                    </button>
                                </div>

                                <div className="mb-10">
                                    <h3 className="text-2xl font-black font-heading text-slate-900 mb-2">Withdraw Funds</h3>
                                    <p className="text-slate-500 text-sm">Transfer your rental income back to your bank account.</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Amount to Withdraw (INR)</label>
                                        <input
                                            type="number"
                                            placeholder="Enter amount..."
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-teal/10 focus:border-brand-teal transition-all text-lg font-black text-slate-900"
                                        />
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest ml-1 flex flex-wrap justify-between gap-2">
                                            <span>Max: ₹ 1,22,500</span> <button onClick={() => setAmount("122500")} className="text-brand-teal whitespace-nowrap">Withdraw All</button>
                                        </p>
                                    </div>

                                    <div className="p-6 bg-slate-900 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
                                        <div className="flex items-center gap-4 text-white">
                                            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center p-2 text-brand-teal">
                                                <TrendingUp className="w-full h-full" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold">HDFC Bank Ltd.</div>
                                                <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">**** 4209</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-emerald-500 self-end md:self-auto">
                                            <span className="text-[10px] font-bold uppercase tracking-widest md:hidden">Verified</span>
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleWithdraw}
                                        className="w-full py-5 bg-brand-teal text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-brand-teal/20 hover:bg-brand-teal-light transition-all"
                                    >
                                        Initiate Bank Transfer
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )
                }
            </AnimatePresence>
        </div>
    );
}
