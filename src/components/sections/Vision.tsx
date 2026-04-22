"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";

export default function Vision() {
    return (
        <section className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px] -mt-20" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -mb-20" />

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white leading-tight tracking-tight mb-8">
                        "The best investment on <br className="hidden md:block" />
                        <span className="text-brand-accent">Earth</span> is <span className="text-brand-accent">earth</span>."
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide uppercase opacity-80">
                        - Louis Glickman
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
