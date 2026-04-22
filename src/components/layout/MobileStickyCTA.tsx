"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, LayoutDashboard } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function MobileStickyCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero (approx 600px)
            setIsVisible(window.scrollY > 600);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-slate-200 z-40 md:hidden pb-safe"
                >
                    <div className="px-4 py-4 max-w-[1280px] mx-auto">
                        <Link to={user ? (user.role === 'admin' ? "/admin" : "/dashboard") : "/signup"} className="block w-full">
                            <Button size="lg" className="w-full bg-brand-teal shadow-lg shadow-brand-teal/20 text-white font-bold h-12">
                                {user ? (
                                    <>Go to Dashboard <LayoutDashboard className="w-4 h-4 ml-2" /></>
                                ) : (
                                    <>Get Started <ArrowRight className="w-4 h-4 ml-2" /></>
                                )}
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
