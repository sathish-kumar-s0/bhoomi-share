"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart as RPieChart,
    Pie,
    Cell
} from 'recharts';
import {
    TrendingUp,
    Calendar,
    DollarSign,
    ShieldCheck,
    PieChart,
    Wallet,
    ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const PERFORMANCE_DATA = [
    { name: 'Jan', value: 42 },
    { name: 'Feb', value: 58 },
    { name: 'Mar', value: 45 },
    { name: 'Apr', value: 62 },
    { name: 'May', value: 75 },
    { name: 'Jun', value: 68 },
    { name: 'Jul', value: 82 },
    { name: 'Aug', value: 95 },
    { name: 'Sep', value: 88 },
    { name: 'Oct', value: 110 },
    { name: 'Nov', value: 105 },
    { name: 'Dec', value: 125 },
];

const ALLOCATION_DATA = [
    { name: 'Commercial', value: 45, color: '#14b8a6' },
    { name: 'Logistics', value: 35, color: '#0f172a' },
    { name: 'Residential', value: 20, color: '#94a3b8' },
];

export default function DashboardPage() {
    return (
        <div className="max-w-6xl mx-auto space-y-8 pb-12">
            {/* Header with Stats Summary */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold font-heading text-slate-900 tracking-tight">Executive Overview</h1>
                    <p className="text-slate-500 mt-1">Welcome back, <span className="font-bold text-brand-teal">Rahul</span>. Your portfolio is up 4.2% this quarter.</p>
                </div>
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">KYC Status</div>
                        <div className="text-sm font-bold text-slate-900">Level 2 Verified</div>
                    </div>
                </div>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    title="Portfolio Value"
                    value="₹ 50,45,000"
                    change="+12.5%"
                    trend="up"
                    icon={PieChart}
                    color="bg-brand-teal"
                    textColor="text-white"
                />
                <StatsCard
                    title="Monthly Income"
                    value="₹ 38,400"
                    change="Next: Feb 01"
                    icon={DollarSign}
                    color="bg-white"
                    textColor="text-slate-900"
                />
                <StatsCard
                    title="Total Yield"
                    value="9.24%"
                    change="+0.5%"
                    trend="up"
                    icon={TrendingUp}
                    color="bg-white"
                    textColor="text-slate-900"
                />
                <StatsCard
                    title="Wallet Balance"
                    value="₹ 1,22,500"
                    change="Available"
                    icon={Wallet}
                    color="bg-white"
                    textColor="text-slate-900"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Performance Chart Area */}
                <div className="lg:col-span-2 glass-card rounded-[2.5rem] p-10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <TrendingUp className="w-32 h-32 text-brand-teal" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="font-bold text-slate-800 text-xl font-heading">Performance Outlook</h3>
                                <p className="text-xs text-slate-400 mt-0.5">Appreciation vs Rental Payouts (LTM)</p>
                            </div>
                            <div className="flex bg-slate-50 p-1 rounded-xl">
                                {["1M", "6M", "1Y", "ALL"].map((p) => (
                                    <button key={p} className={cn(
                                        "px-4 py-1.5 rounded-lg text-[10px] font-black transition-all",
                                        p === "1Y" ? "bg-white text-brand-teal shadow-sm" : "text-slate-400 hover:text-slate-600"
                                    )}>{p}</button>
                                ))}
                            </div>
                        </div>

                        <div className="h-72 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={PERFORMANCE_DATA}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }}
                                        dy={10}
                                    />
                                    <YAxis hide />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px', fontWeight: '900' }}
                                        formatter={(value: any) => [`₹ ${value}k`, 'Value']}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#14b8a6"
                                        strokeWidth={4}
                                        fillOpacity={1}
                                        fill="url(#colorValue)"
                                        animationDuration={2000}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Right Column: Allocation Pie Chart */}
                <div className="lg:col-span-1 glass-card rounded-[2.5rem] p-10">
                    <h3 className="font-bold text-slate-800 text-lg mb-6 font-heading">Asset Allocation</h3>
                    <div className="h-64 w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <RPieChart>
                                <Pie
                                    data={ALLOCATION_DATA}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {ALLOCATION_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </RPieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-2xl font-black text-slate-900 leading-none">3</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Assets</span>
                        </div>
                    </div>
                    <div className="mt-4 space-y-3">
                        {ALLOCATION_DATA.map((item) => (
                            <div key={item.name} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="text-xs font-bold text-slate-600">{item.name}</span>
                                </div>
                                <span className="text-xs font-black text-slate-900">{item.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Refer & Earn Placeholder */}
            <div className="bg-brand-teal rounded-[2rem] p-8 shadow-xl shadow-brand-teal/20 text-white relative overflow-hidden group hover:-translate-y-1 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="relative z-10">
                    <h3 className="font-bold text-xl mb-3 font-heading">Invite a Friend</h3>
                    <p className="text-white/70 text-sm mb-6 leading-relaxed">
                        Spread the wealth and earn <span className="text-brand-gold font-bold">1% bonus credits</span> on their first investment.
                    </p>
                    <button className="w-full py-4 bg-white text-brand-teal rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-black/10 hover:bg-brand-gold hover:text-white transition-all">
                        Share Invite Link
                    </button>
                </div>
            </div>

            {/* My Portfolio Table */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-50 flex items-center justify-between">
                    <div>
                        <h3 className="font-bold text-slate-900 text-xl font-heading">Active Portfolio</h3>
                        <p className="text-xs text-slate-400 mt-0.5">Showing your primary investments and yields</p>
                    </div>
                    <button className="text-brand-teal text-xs font-bold hover:underline">View All Documents</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[800px]">
                        <thead className="bg-slate-50/50 text-slate-400 text-[10px] uppercase font-black tracking-[0.1em]">
                            <tr>
                                <th className="px-8 py-4">Asset Name</th>
                                <th className="px-8 py-4">Allocation</th>
                                <th className="px-8 py-4 text-center">Rental Yield</th>
                                <th className="px-8 py-4 text-center">Appreciation</th>
                                <th className="px-8 py-4 text-right">Current Value</th>
                                <th className="px-8 py-4 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {[
                                { name: "The Summit Plaza", loc: "BKC, Mumbai", allocation: "45%", yield: "8.5%", appreciation: "5.2%", value: "₹ 24,50,000", status: "Active" },
                                { name: "Metro Logistics Hub", loc: "Bhiwandi", allocation: "35%", yield: "9.1%", appreciation: "6.0%", value: "₹ 18,20,000", status: "Active" },
                                { name: "Cyber City Tower C", loc: "Gurgaon", allocation: "20%", yield: "8.2%", appreciation: "5.5%", value: "₹ 7,75,000", status: "New" }
                            ].map((item, i) => (
                                <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-6">
                                        <div className="font-bold text-slate-900 text-sm group-hover:text-brand-teal transition-colors">{item.name}</div>
                                        <div className="text-[10px] text-slate-400 font-medium">{item.loc}</div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 h-1.5 bg-slate-100 rounded-full w-20 relative overflow-hidden">
                                                <div className="absolute left-0 top-0 bottom-0 bg-brand-teal/30 rounded-full" style={{ width: item.allocation }} />
                                            </div>
                                            <span className="text-xs font-bold text-slate-700">{item.allocation}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <span className="text-emerald-600 font-bold text-sm bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">{item.yield}</span>
                                    </td>
                                    <td className="px-8 py-6 text-center text-slate-500 font-medium text-sm">
                                        +{item.appreciation}
                                    </td>
                                    <td className="px-8 py-6 text-right font-black text-slate-900 text-sm">
                                        {item.value}
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <span className={cn(
                                            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
                                            item.status === "Active" ? "bg-brand-teal/10 text-brand-teal" : "bg-brand-gold/10 text-brand-gold-dark"
                                        )}>
                                            <span className={cn("w-1.5 h-1.5 rounded-full", item.status === "Active" ? "bg-brand-teal" : "bg-brand-gold")} />
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function StatsCard({ title, value, change, trend, icon: Icon, color, textColor }: any) {
    const isDark = color.includes('brand-teal');
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className={cn(
                "p-7 rounded-[2rem] shadow-sm border overflow-hidden relative group",
                color,
                isDark ? "border-white/10" : "border-slate-100"
            )}
        >
            {/* Background elements for dark card */}
            {isDark && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:bg-white/10 transition-colors" />
            )}

            <div className="flex justify-between items-start mb-6 relative z-10">
                <div className={cn(
                    "p-3.5 rounded-2xl transition-colors shadow-sm",
                    isDark ? 'bg-white/10 text-white' : 'bg-brand-teal/5 text-brand-teal'
                )}>
                    <Icon className="w-6 h-6" />
                </div>
                {change && (
                    <span className={cn(
                        "text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest",
                        isDark ? 'bg-white/20 text-white border border-white/10' :
                            trend === 'up' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-slate-100 text-slate-500'
                    )}>
                        {change}
                    </span>
                )}
            </div>
            <div className="relative z-10">
                <div className={cn("text-[10px] font-black uppercase tracking-[0.15em] mb-2", isDark ? 'text-white/60' : 'text-slate-400')}>
                    {title}
                </div>
                <div className={cn("text-3xl font-black font-heading tracking-tight", textColor)}>
                    {value}
                </div>
            </div>
        </motion.div>
    )
}
