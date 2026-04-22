import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    Building2,
    Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    { label: "Properties", icon: Building2, href: "/admin/properties" },
    { label: "Users", icon: Users, href: "/admin/users" },
    { label: "Settings", icon: Settings, href: "/admin/settings" },
];

export default function AdminBottomNav() {
    const { pathname } = useLocation();

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-brand-primary border-t border-white/10 lg:hidden z-40 px-2 pb-safe">
            <div className="flex justify-around items-center h-16">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center min-w-[60px] h-full gap-1 transition-colors relative",
                                isActive ? "text-brand-accent" : "text-white/40"
                            )}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="text-[9px] font-bold uppercase tracking-wider">{item.label}</span>
                            {isActive && (
                                <div className="absolute top-0 w-8 h-1 bg-brand-accent rounded-b-full shadow-[0_2px_8px_rgba(224,90,61,0.3)]" />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
