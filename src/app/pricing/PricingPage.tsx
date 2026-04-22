import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

const PLANS = [
    {
        name: "Basic Inquiry",
        price: "Free",
        desc: "Browse properties and learn about the market.",
        features: ["Access to public listings", "Market reports (Limited)", "Email support"],
        cta: "Sign Up Free",
        highlight: false
    },
    {
        name: "Investor",
        price: "1%",
        period: "per transaction",
        desc: "Standard fee for property acquisition.",
        features: ["Full due diligence reports", "Legal & compliance handling", "Portfolio dashboard", "Monthly payouts"],
        cta: "Start Investing",
        highlight: true
    },
    {
        name: "Wealth Partner",
        price: "0.5%",
        period: "annual AUM",
        desc: "For portfolios exceeding ₹5 Cr.",
        features: ["Dedicated wealth manager", "Early access to deals", "Tax advisory services", "Custom portfolio strategy"],
        cta: "Contact Sales",
        highlight: false
    }
];

export default function PricingPage() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <main className="flex-1 pt-32 lg:pt-36">
                <section className="py-20 bg-slate-50">
                    <Container className="text-center max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                            Simple, Transparent Pricing
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-12">
                            No hidden fees. We only make money when you grow your wealth.
                        </p>
                    </Container>
                </section>

                <section className="py-24">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {PLANS.map((plan, i) => (
                                <div key={i} className={`relative p-8 rounded-3xl border ${plan.highlight ? 'border-brand-teal bg-white shadow-xl scale-105 z-10' : 'border-slate-200 bg-slate-50'}`}>
                                    {plan.highlight && (
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-teal text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">{plan.name}</h3>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                                        {plan.period && <span className="text-sm text-slate-500 font-medium"> / {plan.period}</span>}
                                    </div>
                                    <p className="text-slate-500 mb-8 h-12">{plan.desc}</p>
                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feat, j) => (
                                            <li key={j} className="flex items-start gap-3 text-sm text-slate-700">
                                                <Check className="w-5 h-5 text-brand-teal shrink-0" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className={`w-full py-6 rounded-xl ${plan.highlight ? 'bg-brand-teal hover:bg-brand-teal-dark' : 'bg-slate-900 hover:bg-slate-800'}`}>
                                        {plan.cta}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    );
}
