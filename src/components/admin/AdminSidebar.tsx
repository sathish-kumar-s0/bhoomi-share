"use client";

import React from "react";
import Logo from "@/components/ui/Logo";
import { Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    Building2,
    Settings,
    LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

const NAV_ITEMS = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    { label: "Properties", icon: Building2, href: "/admin/properties" },
    { label: "Users", icon: Users, href: "/admin/users" },
    { label: "Settings", icon: Settings, href: "/admin/settings" },
];

export default function AdminSidebar() {
    const { pathname } = useLocation();
    const { logout } = useAuth();

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-64 bg-brand-primary border-r border-white/10 hidden lg:flex flex-col z-40 text-white">
            <div className="px-5 py-4 h-16 flex items-center border-b border-white/10 gap-3">
                <Link to="/" className="flex items-center gap-3 group">
                    <Logo size="xs" />
                    <span className="font-bold text-white/70 font-heading text-sm leading-none">Admin Console</span>
                </Link>
            </div>

            <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all relative",
                                isActive
                                    ? "text-white bg-brand-accent shadow-lg shadow-brand-accent/20"
                                    : "text-white/50 hover:text-white hover:bg-white/10"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-3 border-t border-white/10">
                <button
                    onClick={logout}
                    className="flex items-center gap-3 px-4 py-3 text-white/40 hover:text-red-400 hover:bg-red-500/10 rounded-xl w-full text-sm font-medium transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    Log Out
                </button>
            </div>
        </aside>
    );
}
