import React from "react";
import { cn } from "@/lib/utils";

type LogoSize = "xs" | "sm" | "md" | "lg";

interface LogoProps {
    className?: string;
    dark?: boolean;
    size?: LogoSize;
}

const sizeConfig: Record<LogoSize, { container: string; text: string; badge: string }> = {
    xs: {
        container: "px-2.5 py-1.5 rounded-md",
        text: "text-[0.8rem] gap-1",
        badge: "px-1 py-0.5 rounded text-[0.65rem]",
    },
    sm: {
        container: "px-3 py-2 rounded-lg",
        text: "text-[0.95rem] gap-1",
        badge: "px-1 py-0.5 rounded text-xs",
    },
    md: {
        container: "px-4 py-2.5 rounded-lg",
        text: "text-[1.15rem] gap-1.5",
        badge: "px-1.5 py-0.5 rounded text-sm",
    },
    lg: {
        container: "px-5 py-3 rounded-xl",
        text: "text-[1.4rem] gap-2",
        badge: "px-2 py-0.5 rounded text-base",
    },
};

export default function Logo({ className, dark = false, size = "md" }: LogoProps) {
    const s = sizeConfig[size];

    return (
        <div className={cn(
            "flex items-center justify-center border-2 shadow-sm transition-all duration-500",
            s.container,
            dark
                ? "bg-white/10 border-white/20 text-white backdrop-blur-md hover:bg-white/20 transition-colors"
                : "bg-brand-primary border-brand-primary text-white shadow-brand-primary/20 hover:bg-brand-secondary transition-colors",
            className
        )}>
            <div className={cn(
                "font-heading font-black tracking-wide leading-none uppercase flex items-center",
                s.text
            )}>
                BHOOMI
                <span className={cn(
                    "bg-brand-accent text-white",
                    s.badge
                )}>
                    SHARE
                </span>
            </div>
        </div>
    );
}
