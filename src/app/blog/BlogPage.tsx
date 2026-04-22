import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { Calendar, User } from "lucide-react";

const POSTS = [
    {
        title: "Why Commercial Real Estate Outperforms Residential",
        excerpt: "Analyzing the yields, lease terms, and appreciation potential of commercial assets vs typical residential flats.",
        date: "Oct 12, 2025",
        author: "Research Team",
        category: "Market Analysis"
    },
    {
        title: "Understanding Fractional Ownership Regulations",
        excerpt: "A deep dive into how SEBI's SM REIT regulations protect small investors in fractional ownership platforms.",
        date: "Sep 28, 2025",
        author: "Legal Dept",
        category: "Education"
    },
    {
        title: "The Rise of Tier-2 Cities in India's Growth Story",
        excerpt: "Why we are bullish on office spaces in cities like Pune, Hyderabad, and Ahmedabad for the next decade.",
        date: "Sep 15, 2025",
        author: "Investment Committee",
        category: "Trends"
    }
];

export default function BlogPage() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <main className="flex-1 pt-32 lg:pt-36">
                <section className="py-20 bg-white">
                    <Container className="text-center max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                            Insights & News
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Stay updated with the latest trends in real estate and wealth management.
                        </p>
                    </Container>
                </section>

                <section className="pb-24">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {POSTS.map((post, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="bg-slate-100 h-48 rounded-2xl mb-6 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md">
                                            {post.category}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-3 group-hover:text-brand-teal transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-4 text-xs text-slate-400 font-bold uppercase tracking-wider">
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
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
