import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { Quote } from "lucide-react";

const STORIES = [
    {
        name: "Rajesh K.",
        role: "Software Architect",
        quote: "I always wanted to invest in commercial real estate but didn't have ₹5 Cr. Bhoomi Share allowed me to start with just ₹1 Lakh. The monthly payouts cover my car EMI!",
        image: "https://i.pravatar.cc/150?u=rajesh"
    },
    {
        name: "Priya M.",
        role: "Digital Marketer",
        quote: "Transparency was my biggest concern. The dashboards, the reports, and the instant withdrawals gave me confidence. It's truly passive income.",
        image: "https://i.pravatar.cc/150?u=priya"
    },
    {
        name: "Amit S.",
        role: "Small Business Owner",
        quote: "Diversifying my portfolio was easy. I now own fractions of offices in Bangalore, Mumbai, and Hyderabad. Best decision for my retirement planning.",
        image: "https://i.pravatar.cc/150?u=amit"
    }
];

export default function StoriesPage() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <main className="flex-1 pt-32 lg:pt-36">
                <section className="py-20 bg-brand-teal/5">
                    <Container className="text-center max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                            Investor Stories
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Join over 10,000 investors who are building wealth with Bhoomi Share.
                        </p>
                    </Container>
                </section>

                <section className="py-24">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {STORIES.map((story, i) => (
                                <div key={i} className="glass-card p-8 rounded-3xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                                    <div className="mb-6">
                                        <Quote className="w-10 h-10 text-brand-teal/20" />
                                    </div>
                                    <p className="text-slate-600 mb-8 italic leading-relaxed">"{story.quote}"</p>
                                    <div className="flex items-center gap-4">
                                        <img src={story.image} alt={story.name} className="w-12 h-12 rounded-full" />
                                        <div>
                                            <h4 className="font-bold text-slate-900">{story.name}</h4>
                                            <p className="text-xs text-slate-500 uppercase tracking-wider">{story.role}</p>
                                        </div>
                                    </div>
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
