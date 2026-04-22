"use client";

import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { MapPin, Search, Filter, TrendingUp, Building2, Globe, ArrowRight, CheckCircle2, SlidersHorizontal } from "lucide-react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { PROPERTIES } from "@/data/properties";

export default function PropertiesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCity, setActiveCity] = useState("All Cities");
    const [activeCategory, setActiveCategory] = useState("All Assets");

    const cities = ["All Cities", "Mumbai", "Bangalore", "Gurgaon", "Chennai", "Hyderabad"];
    const categories = ["All Assets", "Office", "Logistics", "Specialty"];

    const filteredProperties = useMemo(() => {
        return PROPERTIES.filter(p => {
            const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.location.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCity = activeCity === "All Cities" || p.city === activeCity;
            const matchesCategory = activeCategory === "All Assets" || p.category === activeCategory;

            return matchesSearch && matchesCity && matchesCategory;
        });
    }, [searchQuery, activeCity, activeCategory]);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Header />

            {/* Hero Header Section */}
            <FadeIn>
                <section className="pt-40 pb-24 bg-white border-b border-slate-100">
                    <Container>
                        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                            <div className="max-w-2xl">
                                <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 leading-tight">
                                    Invest in <span className="text-brand-teal">India's</span> Top Assets
                                </h1>
                                <p className="text-slate-500 mt-4 text-lg">
                                    Direct access to prime commercial real estate across India's fastest-growing cities. Start your journey with just ₹25,000.
                                </p>
                            </div>
                            <div className="hidden lg:flex items-center gap-6 px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Platform Status</span>
                                    <span className="text-sm font-bold text-emerald-600 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        Live in 6 Cities
                                    </span>
                                </div>
                                <div className="w-px h-8 bg-slate-200" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total AUM</span>
                                    <span className="text-sm font-bold text-slate-900">₹ 450+ Cr</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </FadeIn>

            {/* Filter Bar */}
            <FadeIn delay={0.1}>
                <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4">
                    <Container>
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                            <div className="relative flex-1 group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-teal transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search by city, property name or asset type..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-teal/5 focus:border-brand-teal transition-all text-slate-950 placeholder:text-slate-500"
                                />
                            </div>

                            <div className="flex gap-3 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto no-scrollbar scroll-smooth">
                                <div className="flex gap-2 items-center">
                                    <div className="flex bg-slate-100/50 p-1 rounded-xl border border-slate-200/50">
                                        {["All Cities", "Mumbai", "Bangalore"].map((city) => (
                                            <button
                                                key={city}
                                                onClick={() => setActiveCity(city)}
                                                className={cn(
                                                    "px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap",
                                                    activeCity === city
                                                        ? "bg-white text-brand-teal shadow-sm"
                                                        : "text-slate-500 hover:text-slate-700"
                                                )}
                                            >
                                                {city}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="w-px h-8 bg-slate-200 mx-1 hidden md:block" />
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setActiveCategory(cat)}
                                            className={cn(
                                                "px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border capitalize",
                                                activeCategory === cat
                                                    ? "bg-brand-teal border-brand-teal text-white shadow-lg shadow-brand-teal/10"
                                                    : "bg-white border-slate-200 text-slate-500 hover:border-brand-teal/50 hover:text-brand-teal"
                                            )}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <Button variant="outline" className="hidden md:flex gap-2 border-slate-200 text-slate-600">
                                <SlidersHorizontal className="w-4 h-4" />
                                Filters
                            </Button>
                        </div>
                    </Container>
                </section>
            </FadeIn>

            {/* Properties Grid */}
            <main className="py-12 flex-1">
                <Container>
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                            {filteredProperties.length} Indian Opportunities Found
                        </p>
                    </div>

                    {filteredProperties.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProperties.map((property) => (
                                <PropertyCard key={property.id} data={property} />
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center bg-white rounded-[2rem] border border-dashed border-slate-200">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-slate-300" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">No properties found</h3>
                            <p className="text-slate-500 mt-2">Try adjusting your filters or search terms.</p>
                            <Button variant="ghost" className="mt-6 text-brand-teal font-bold" onClick={() => {
                                setSearchQuery("");
                                setActiveCity("All Cities");
                                setActiveCategory("All Assets");
                            }}>
                                Clear all filters
                            </Button>
                        </div>
                    )}
                </Container>
            </main>

            <Footer />
        </div>
    );
}

function PropertyCard({ data }: { data: any }) {
    const totalReturn = (parseFloat(data.yield) + parseFloat(data.appreciation)).toFixed(1);

    return (
        <Link to={`/properties/${data.id}`} className="group relative block h-full">
            <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-[0_2px_12px_rgba(30,41,59,0.03)] hover:shadow-[0_20px_40px_rgba(30,41,59,0.08)] transition-all duration-500 h-full flex flex-col"
            >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={data.image}
                        alt={data.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Floating Badges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <div className="bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 border border-white/20">
                            <TrendingUp className="w-4 h-4 text-emerald-500" />
                            <span className="text-xs font-bold text-slate-800">
                                {totalReturn}% <span className="text-slate-400 font-medium">IRR</span>
                            </span>
                        </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2">
                            {data.tags.map((tag: string) => (
                                <span key={tag} className="px-2.5 py-1 bg-black/40 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest rounded-lg border border-white/10 uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-6">
                        <div className="flex items-center justify-between gap-2 mb-2">
                            <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-brand-teal transition-colors leading-tight truncate">
                                {data.title}
                            </h3>
                            <ArrowRight className="w-5 h-5 text-brand-teal opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </div>
                        <div className="flex items-center text-slate-400 text-sm font-medium">
                            <MapPin className="w-3.5 h-3.5 mr-1.5 text-slate-300" />
                            {data.location}
                        </div>
                    </div>

                    {/* Funding Progress */}
                    <div className="space-y-3 mb-8">
                        <div className="flex justify-between items-end text-sm">
                            <div className="space-y-0.5">
                                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block">Raised</span>
                                <span className="font-bold text-slate-900">₹ {(data.funded * 2.5).toFixed(1)} Lakhs</span>
                            </div>
                            <span className="font-black text-brand-teal text-lg">{data.funded}%</span>
                        </div>
                        <div className="h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${data.funded}%` }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-brand-teal rounded-full relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:40px_40px] animate-[shimmer_2s_linear_infinite]" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="mt-auto grid grid-cols-2 gap-4 pt-6 border-t border-slate-50">
                        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100/50">
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5 flex items-center justify-between">
                                Rental <CheckCircle2 className="w-3 h-3 text-brand-teal" />
                            </div>
                            <div className="text-base font-bold text-slate-900 leading-none">{data.yield}</div>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100/50">
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5">Appreciation</div>
                            <div className="text-base font-bold text-slate-900 leading-none">{data.appreciation}</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

