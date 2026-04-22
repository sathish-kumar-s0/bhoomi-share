"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Loader2, CreditCard, Wallet, Landmark } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useUI } from "@/context/UIContext";
import { useNavigate } from "react-router-dom";

interface InvestmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    propertyName: string;
}

export default function InvestmentModal({ isOpen, onClose, propertyName }: InvestmentModalProps) {
    const { showToast } = useUI();
    const [amount, setAmount] = useState<number>(25000);
    const [step, setStep] = useState(1); // 1: Amount, 2: Payment, 3: Success
    const [isProcessing, setIsProcessing] = useState(false);
    const navigate = useNavigate();

    const handleInvest = () => {
        if (amount < 25000) {
            showToast("Minimum investment is ₹25,000", "error");
            return;
        }
        setStep(2);
    };

    const handlePayment = () => {
        setIsProcessing(true);
        showToast("Processing secure payment...", "info");

        setTimeout(() => {
            setIsProcessing(false);
            setStep(3);
            showToast(`Investment of ₹${amount.toLocaleString()} successful!`, "success");
        }, 2500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-950/60 z-[100] backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100%", opacity: 0 }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed bottom-0 left-0 right-0 md:top-0 md:left-auto md:right-0 md:w-[500px] bg-white z-[110] shadow-2xl flex flex-col border-l border-slate-100"
                    >
                        <div className="flex items-center justify-between p-8 border-b border-slate-50">
                            <div>
                                <h3 className="text-xl font-black font-heading text-slate-900 leading-none">Invest in Asset</h3>
                                <p className="text-[10px] font-black text-brand-teal uppercase tracking-widest mt-2">{propertyName}</p>
                            </div>
                            <button onClick={onClose} className="p-3 hover:bg-slate-50 rounded-2xl transition-colors">
                                <X className="w-6 h-6 text-slate-300" />
                            </button>
                        </div>

                        <div className="flex-1 p-6 md:p-8 overflow-y-auto">
                            {step === 1 && (
                                <div className="space-y-8 md:space-y-10">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                                            Investment Commitment (INR)
                                        </label>
                                        <div className="relative group">
                                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl md:text-3xl font-black text-slate-400 group-focus-within:text-brand-teal transition-colors">₹</span>
                                            <input
                                                type="number"
                                                value={amount}
                                                onChange={(e) => setAmount(Number(e.target.value))}
                                                className="w-full pl-12 md:pl-14 pr-6 md:pr-8 py-6 md:py-8 bg-slate-50 border-none rounded-[2rem] text-3xl md:text-4xl font-black text-slate-900 focus:ring-4 focus:ring-brand-teal/5 transition-all outline-none"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                                            <Check className="w-3 h-3 text-brand-teal" /> Min. Ticket: ₹25,000
                                        </div>
                                    </div>

                                    <div className="bg-slate-50/50 p-8 rounded-[2.5rem] border border-slate-100 space-y-4">
                                        <div className="flex justify-between items-center text-xs font-bold">
                                            <span className="text-slate-500 uppercase tracking-widest">Platform Fee (1%)</span>
                                            <span className="text-slate-900">₹ {(amount * 0.01).toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-xs font-bold">
                                            <span className="text-slate-500 uppercase tracking-widest">Regulatory GST (18%)</span>
                                            <span className="text-slate-900">₹ {(amount * 0.01 * 0.18).toLocaleString()}</span>
                                        </div>
                                        <div className="h-px bg-slate-100 my-2" />
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-black text-slate-900 uppercase tracking-widest">Total Payable</span>
                                            <span className="text-2xl font-black text-brand-teal">₹ {(amount + amount * 0.01 * 1.18).toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <div className="p-8 bg-brand-teal/5 rounded-[2.5rem] border border-brand-teal/10 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-brand-teal/10 transition-colors" />
                                        <h4 className="text-[10px] font-black text-brand-teal uppercase tracking-widest mb-4">Conservative Est. Returns</h4>
                                        <div className="grid grid-cols-2 gap-8">
                                            <div>
                                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Monthly Payout</div>
                                                <div className="text-lg font-black text-slate-900 leading-none">₹ {Math.round((amount * 0.08) / 12).toLocaleString()}</div>
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">5Y Valuation</div>
                                                <div className="text-lg font-black text-slate-900 leading-none">₹ {Math.round(amount * 1.5).toLocaleString()}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        size="lg"
                                        className="w-full py-8 text-xs font-black uppercase tracking-[0.2em] bg-brand-teal hover:bg-brand-teal-dark shadow-xl shadow-brand-teal/20 rounded-[1.5rem]"
                                        onClick={handleInvest}
                                    >
                                        Proceed to Secure Payment
                                    </Button>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-xl font-black font-heading text-slate-900 tracking-tight">Select Payment Channel</h4>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Total Due: ₹ {(amount + amount * 0.01 * 1.18).toLocaleString()}</p>
                                    </div>

                                    <div className="space-y-3">
                                        {[
                                            { name: 'UPI / GPay / Instant', icon: Wallet },
                                            { name: 'Corporate Net Banking', icon: Landmark },
                                            { name: 'Debit / Credit Card', icon: CreditCard }
                                        ].map((method) => (
                                            <button
                                                key={method.name}
                                                onClick={handlePayment}
                                                disabled={isProcessing}
                                                className="w-full p-6 bg-white border border-slate-100 rounded-[2rem] hover:border-brand-teal hover:bg-brand-teal/5 cursor-pointer transition-all flex items-center justify-between group disabled:opacity-50"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-white group-hover:shadow-sm transition-all border border-transparent group-hover:border-brand-teal/10">
                                                        <method.icon className="w-5 h-5 text-slate-400 group-hover:text-brand-teal" />
                                                    </div>
                                                    <span className="text-sm font-black text-slate-700 group-hover:text-slate-900 transition-colors">{method.name}</span>
                                                </div>
                                                <div className="w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-brand-teal group-hover:border-4 transition-all" />
                                            </button>
                                        ))}
                                    </div>

                                    <div className="pt-8 text-center">
                                        <div className="flex items-center justify-center gap-4 grayscale opacity-40">
                                            <span className="text-[10px] font-black text-slate-900">PCI-DSS COMPLIANT</span>
                                            <div className="w-1 h-1 bg-slate-300 rounded-full" />
                                            <span className="text-[10px] font-black text-slate-900">AES-256 BANK GRADE</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="flex flex-col items-center justify-center h-full text-center pb-20">
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-[2.5rem] flex items-center justify-center mb-8 border-4 border-emerald-100 shadow-xl shadow-emerald-500/10"
                                    >
                                        <Check className="w-12 h-12" />
                                    </motion.div>
                                    <h3 className="text-3xl font-black font-heading text-slate-900 tracking-tight leading-none mb-4">Commitment Sealed</h3>
                                    <p className="text-slate-500 text-sm font-medium mb-12 max-w-[280px]">
                                        Your fractional ownership in <span className="text-slate-900 font-bold">{propertyName}</span> is being processed and will reflect in your portfolio within 2-4 hours.
                                    </p>
                                    <Button
                                        className="w-full py-8 text-xs font-black uppercase tracking-[0.2em] bg-slate-900 hover:bg-slate-800 rounded-[1.5rem]"
                                        onClick={() => navigate("/dashboard/wallet")}
                                    >
                                        Return to Dashboard
                                    </Button>
                                </div>
                            )}
                        </div>

                        {/* Loading Overlay */}
                        <AnimatePresence>
                            {isProcessing && (
                                <motion.div
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-white/80 backdrop-blur-md z-[120] flex flex-col items-center justify-center"
                                >
                                    <Loader2 className="w-12 h-12 text-brand-teal animate-spin mb-6" />
                                    <p className="text-sm font-black text-slate-900 uppercase tracking-widest">Authorizing Investment...</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
