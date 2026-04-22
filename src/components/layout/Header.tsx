"use client";

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

const NAV_LINKS = [
    { label: "Properties", to: "/#investments" },
    { label: "About Us", to: "/#about" },
    { label: "Contact", to: "/#contact" },
];

export default function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user } = useAuth();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50 && !isScrolled) {
            setIsScrolled(true);
        } else if (latest <= 50 && isScrolled) {
            setIsScrolled(false);
        }
    });

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "glass-header py-2"
                        : "bg-transparent py-3 lg:py-4"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Container className={cn("flex items-center justify-between relative transition-all duration-500", isScrolled ? "h-12 md:h-14" : "h-14 md:h-16")}>
                    {/* Logo (Left Aligned) */}
                    <div className="flex-shrink-0 z-20 relative">
                        <Link to="/" className="flex items-center group rounded-xl hover:bg-white/10 transition-colors">
                            <Logo size={isScrolled ? "sm" : "md"} className="transition-all duration-500" />
                        </Link>
                    </div>

                    {/* Desktop Nav (Absolutely Centered) */}
                    <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                to={link.to}
                                className="text-sm font-bold tracking-wide text-brand-primary/90 hover:text-brand-accent transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Actions (Right Aligned) */}
                    <div className="hidden lg:flex items-center gap-4 flex-shrink-0 z-20 relative">
                        {user ? (
                            <Link to={user.role === 'admin' ? "/admin" : "/dashboard"}>
                                <Button size="sm" className="bg-brand-primary hover:bg-brand-secondary text-white shadow-lg shadow-brand-primary/20 rounded-xl px-6">
                                    Dashboard
                                </Button>
                            </Link>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button variant="ghost" size="sm" className="hidden lg:flex text-brand-primary font-semibold hover:bg-white/50 rounded-xl">
                                        Log In
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button size="sm" className="bg-brand-accent hover:bg-brand-accent-hover text-white shadow-lg shadow-brand-accent/30 rounded-xl font-bold px-6">Invest Now</Button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-brand-primary p-2 ml-auto rounded-xl hover:bg-white/50 transition-colors bg-white/20 backdrop-blur-md border border-white/50"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </Container>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-3xl flex flex-col pt-safe"
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        <div className="flex items-center justify-between p-5 border-b border-brand-primary/10 bg-white/50">
                            <Logo size="sm" />
                            <button
                                className="p-2.5 bg-brand-primary/5 rounded-full text-brand-primary hover:bg-brand-primary/10 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6 relative">
                            {/* Decorative blur in menu */}
                            <div className="absolute top-20 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -z-10" />
                            
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        to={link.to}
                                        className="text-3xl font-heading font-bold text-brand-primary hover:text-brand-accent block py-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <div className="h-px bg-brand-primary/10 my-4" />

                            <div className="flex flex-col gap-4">
                                <Link to="/login" className="w-full">
                                    <Button variant="outline" className="w-full justify-center text-lg font-bold py-6 rounded-2xl border-brand-primary/20 text-brand-primary">
                                        Log In
                                    </Button>
                                </Link>
                                <Link to="/signup" className="w-full">
                                    <Button className="w-full justify-center text-lg font-bold py-6 rounded-2xl bg-brand-accent text-white shadow-xl shadow-brand-accent/20">
                                        Invest Now
                                    </Button>
                                </Link>
                            </div>

                            <div className="mt-auto pt-8 flex items-center justify-center gap-2 text-slate-500 font-medium">
                                <Globe className="w-5 h-5" />
                                <span className="text-sm">English (IN)</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
