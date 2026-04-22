import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    PieChart,
    Wallet,
    FileText,
    Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { label: "Home", icon: LayoutDashboard, href: "/dashboard" },
    { label: "Portfolio", icon: PieChart, href: "/dashboard/portfolio" },
    { label: "Wallet", icon: Wallet, href: "/dashboard/wallet" },
    { label: "Vault", icon: FileText, href: "/dashboard/documents" },
    { label: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export default function BottomNav() {
    const { pathname } = useLocation();

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 lg:hidden z-40 px-2 pb-safe">
            <div className="flex justify-around items-center h-16">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center min-w-[64px] h-full gap-1 transition-colors",
                                isActive ? "text-brand-teal" : "text-slate-400"
                            )}
                        >
                            <Icon className={cn("w-5 h-5", isActive && "fill-current/10")} />
                            <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                            {isActive && (
                                <div className="absolute top-0 w-8 h-1 bg-brand-teal rounded-b-full shadow-[0_2px_8px_rgba(20,184,166,0.3)]" />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
