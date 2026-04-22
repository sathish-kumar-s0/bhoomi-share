import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

export const SEBILogo = ({ className, ...props }: LogoProps) => (
    <svg viewBox="0 0 200 60" className={cn("h-full w-auto", className)} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="200" height="60" rx="8" fill="currentColor" fillOpacity="0.05" />
        <text x="20" y="40" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="24" fill="currentColor">SEBI</text>
        <circle cx="170" cy="30" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M165 30H175M170 25V35" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export const RBILogo = ({ className, ...props }: LogoProps) => (
    <svg viewBox="0 0 200 60" className={cn("h-full w-auto", className)} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="200" height="60" rx="8" fill="currentColor" fillOpacity="0.05" />
        <text x="20" y="40" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="24" fill="currentColor">RBI</text>
        <path d="M160 20C170 20 180 30 180 40H140C140 30 150 20 160 20Z" fill="currentColor" />
    </svg>
);

export const RERALogo = ({ className, ...props }: LogoProps) => (
    <svg viewBox="0 0 200 60" className={cn("h-full w-auto", className)} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="200" height="60" rx="8" fill="currentColor" fillOpacity="0.05" />
        <text x="20" y="40" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="24" fill="currentColor">RERA</text>
        <path d="M160 20L180 35L160 50L140 35L160 20Z" stroke="currentColor" strokeWidth="3" />
    </svg>
);

export const DFSALogo = ({ className, ...props }: LogoProps) => (
    <svg viewBox="0 0 200 60" className={cn("h-full w-auto", className)} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="200" height="60" rx="8" fill="currentColor" fillOpacity="0.05" />
        <text x="20" y="40" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="24" fill="currentColor">DFSA</text>
        <rect x="155" y="20" width="20" height="20" stroke="currentColor" strokeWidth="2" />
        <rect x="160" y="25" width="20" height="20" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export const ISOLogo = ({ className, ...props }: LogoProps) => (
    <svg viewBox="0 0 200 60" className={cn("h-full w-auto", className)} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="200" height="60" rx="8" fill="currentColor" fillOpacity="0.05" />
        <text x="20" y="40" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="24" fill="currentColor">ISO</text>
        <path d="M160 15V45M145 30H175" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <rect x="150" y="20" width="20" height="20" stroke="currentColor" strokeWidth="2" />
    </svg>
);
