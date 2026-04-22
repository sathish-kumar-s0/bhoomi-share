"use client";

import React, { useState, useMemo } from "react";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { useUI } from "@/context/UIContext";

export default function Calculator() {
    const { showToast } = useUI();
    const [amount, setAmount] = useState(500000); // 5 Lakhs
    const [years, setYears] = useState(5);

    const rentalYield = 0.08; // 8% pa
    const appreciationRate = 0.12; // 12% pa

    const calculations = useMemo(() => {
        const totalRentalIncome = amount * rentalYield * years;
        // Compound interest formula for appreciation: A = P(1 + r)^t
        const futureValue = amount * Math.pow((1 + appreciationRate), years);
        const totalAppreciation = futureValue - amount;

        return {
            rentalIncome: Math.round(totalRentalIncome),
            appreciation: Math.round(totalAppreciation),
            totalValue: Math.round(futureValue + totalRentalIncome),
            totalProfit: Math.round(totalRentalIncome + totalAppreciation)
        };
    }, [amount, years]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(val);
    };

    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
                        Calculate Your Potential Returns
                    </h2>
                    <p className="text-slate-600 text-lg">
                        See how your money grows with compounding appreciation and consistent rental income.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-premium overflow-hidden border border-slate-100 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                    {/* Controls */}
                    <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
                        <div className="mb-10">
                            <div className="flex justify-between items-center mb-4">
                                <label className="font-bold text-slate-700">Investment Amount</label>
                                <div className="text-2xl font-bold text-brand-teal bg-brand-teal/5 px-4 py-2 rounded-lg">
                                    {formatCurrency(amount)}
                                </div>
                            </div>
                            <input
                                type="range"
                                min="25000"
                                max="10000000"
                                step="25000"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                            />
                            <div className="flex justify-between mt-2 text-xs text-slate-400 font-bold uppercase">
                                <span>₹25k</span>
                                <span>₹1 Cr</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <label className="font-bold text-slate-700">Duration (Years)</label>
                                <div className="text-2xl font-bold text-brand-teal bg-brand-teal/5 px-4 py-2 rounded-lg">
                                    {years} Years
                                </div>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="20"
                                step="1"
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                            />
                            <div className="flex justify-between mt-2 text-xs text-slate-400 font-bold uppercase">
                                <span>1 Year</span>
                                <span>20 Years</span>
                            </div>
                        </div>

                        <div className="mt-12 p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 rounded-full bg-brand-gold" />
                                <span className="text-sm text-slate-600 font-medium">Conservative Estimates:</span>
                            </div>
                            <div className="text-xs text-slate-500 flex gap-4 pl-6">
                                <span>• 8% Rental Yield</span>
                                <span>• 12% Capital Appreciation</span>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="p-8 lg:p-12 bg-slate-900 text-white flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl -mr-20 -mt-20" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -ml-20 -mb-20" />

                        <div className="relative z-10 space-y-8">
                            <div className="flex justify-between items-end pb-6 border-b border-white/10">
                                <span className="text-slate-400 text-lg">Total Rental Income</span>
                                <span className="text-2xl font-bold text-brand-accent">{formatCurrency(calculations.rentalIncome)}</span>
                            </div>

                            <div className="flex justify-between items-end pb-6 border-b border-white/10">
                                <span className="text-slate-400 text-lg">Capital Appreciation</span>
                                <span className="text-2xl font-bold text-brand-gold">{formatCurrency(calculations.appreciation)}</span>
                            </div>

                            <div className="pt-4 space-y-6">
                                <div>
                                    <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Projected Profit</div>
                                    <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                                        {formatCurrency(calculations.totalProfit)}
                                    </div>
                                    <div className="text-emerald-400 font-medium flex items-center gap-2">
                                        Total ROI: {((calculations.totalProfit / amount) * 100).toFixed(1)}%
                                    </div>
                                </div>

                                <button
                                    onClick={() => {
                                        showToast("Generating personalized valuation report...", "info");
                                        setTimeout(() => showToast("Valuation report downloaded!", "success"), 2000);
                                    }}
                                    className="w-full py-5 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-teal hover:text-white transition-all shadow-xl shadow-brand-teal/10"
                                >
                                    Download Full Analysis
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
