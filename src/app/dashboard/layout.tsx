"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import BottomNav from "@/components/dashboard/BottomNav";
import React, { useState } from "react";
import { UserCircle, LogOut, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

function UserDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const { logout } = useAuth();

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:bg-brand-teal hover:text-white transition-colors"
            >
                <UserCircle className="w-6 h-6" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 origin-top-right"
                        >
                            <Link
                                to="/dashboard/settings"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-brand-teal rounded-xl transition-colors"
                            >
                                <User className="w-4 h-4" /> Profile
                            </Link>
                            <Link
                                to="/dashboard/settings"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-brand-teal rounded-xl transition-colors"
                            >
                                <Settings className="w-4 h-4" /> Settings
                            </Link>
                            <div className="h-px bg-slate-100 my-1" />
                            <button
                                onClick={() => {
                                    logout();
                                    setIsOpen(false);
                                }}
                                className="w-full flex items-center gap-2 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                            >
                                <LogOut className="w-4 h-4" /> Sign Out
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar />

            <div className="lg:ml-64 min-h-screen flex flex-col pb-20 lg:pb-0">
                {/* Top Header for Dashboard */}
                <header className="h-20 bg-white border-b border-slate-200 px-6 md:px-8 flex items-center justify-between sticky top-0 z-30">
                    <h1 className="text-xl font-bold font-heading text-slate-800 lg:hidden">
                        Invest<span className="text-brand-gold">India</span>
                    </h1>
                    <div className="hidden lg:block">
                        {/* Breadcrumbs or Page Title placeholder */}
                    </div>

                    <div className="flex items-center gap-4 ml-auto relative">
                        <div className="text-right hidden sm:block">
                            <div className="text-sm font-bold text-slate-900">Vikram Singh</div>
                            <div className="text-xs text-slate-500">Premium Investor</div>
                        </div>
                        <UserDropdown />
                    </div>
                </header>

                <main className="flex-1 p-4 md:p-8">
                    {children}
                </main>
            </div>

            <BottomNav />
        </div>
    );
}
