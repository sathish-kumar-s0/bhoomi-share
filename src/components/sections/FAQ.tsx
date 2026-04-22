"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
    {
        question: "How does Bhoomi Share work?",
        answer: "We source high-yield properties, fractionalize them into affordable units (tokens), and allow you to invest from ₹25,000. We handle all property management, and you earn monthly rental income plus capital appreciation."
    },
    {
        question: "Is my investment regulated?",
        answer: "Yes. We are fully compliant with SEBI regulations in India and DFSA guidelines for our international offerings. Your assets are held in a separate SPV (Special Purpose Vehicle) for maximum security."
    },
    {
        question: "When do I get paid?",
        answer: "Rental income is distributed monthly directly to your Bhoomi Share wallet, which you can withdraw to your bank account anytime."
    },
    {
        question: "Can I sell my investment?",
        answer: "Yes! We offer a secondary market with bi-annual Exit Windows where you can sell your stake to other investors or back to the platform, offering you liquidity unlike traditional real estate."
    },
    {
        question: "What are the fees?",
        answer: "We charge a transparent 1.5% annual management fee and a 1% initial transaction fee. There are no hidden charges."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-28">
            <Container className="max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-500">
                        Everything you need to know about investing with us.
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-bold text-slate-900">{faq.question}</span>
                                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-slate-600 leading-relaxed text-sm">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
