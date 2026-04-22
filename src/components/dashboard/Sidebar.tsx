"use client";

import React from "react";
import Logo from "@/components/ui/Logo";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    PieChart,
    Wallet,
    FileText,
    Settings,
    LogOut,
    Bell
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { label: "Overview", icon: LayoutDashboard, href: "/dashboard" },
    { label: "Portfolio", icon: PieChart, href: "/dashboard/portfolio" },
    { label: "Wallet", icon: Wallet, href: "/dashboard/wallet" },
    { label: "Documents", icon: FileText, href: "/dashboard/documents" },
    { label: "Settings", icon: Settings, href: "/dashboard/settings" },
];

import { useAuth } from "@/context/AuthContext";

export default function Sidebar() {
    const { pathname } = useLocation();
    const { logout } = useAuth();

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-[#E2E8F0] hidden lg:flex flex-col z-40">
            <div className="p-6 h-[80px] flex items-center border-b border-slate-100"> {/* Matched height to header */}
                <Link to="/" className="flex items-center gap-2 group pl-2"> {/* Added left spacing */}
                    <Logo size="sm" />
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-[10px] text-sm font-semibold transition-colors relative",
                                isActive
                                    ? "text-brand-accent bg-[#F1F5F9]"
                                    : "text-[#64748B] hover:text-brand-primary hover:bg-[#F8FAFC]"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                            {isActive && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute left-0 top-0 bottom-0 w-1 bg-brand-accent rounded-r-full"
                                />
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-100">
                <div className="bg-brand-gold/10 rounded-xl p-4 mb-4">
                    <div className="flex items-start gap-3">
                        <Bell className="w-5 h-5 text-brand-gold-dark shrink-0 mt-0.5" />
                        <div>
                            <h4 className="font-bold text-sm text-brand-gold-dark">New Opportunity</h4>
                            <p className="text-xs text-slate-600 mt-1">"Bandra Office One" is now live. Invest before it sells out!</p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={logout}
                    className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl w-full text-sm font-medium transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    Log Out
                </button>
            </div>
        </aside>
    );
}
