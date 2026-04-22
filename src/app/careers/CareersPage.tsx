import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Briefcase } from "lucide-react";

const POSITIONS = [
    { title: "Senior Frontend Engineer", dept: "Engineering", loc: "Remote / Mumbai", type: "Full-time" },
    { title: "Product Designer", dept: "Design", loc: "Mumbai", type: "Full-time" },
    { title: "Investment Analyst", dept: "Finance", loc: "Mumbai", type: "Full-time" },
    { title: "Customer Success Manager", dept: "Operations", loc: "Bangalore", type: "Full-time" },
];

export default function CareersPage() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <main className="flex-1 pt-32 lg:pt-36">
                <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl -mr-20 -mt-20" />
                    <Container className="relative z-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                            Build the future of <span className="text-brand-teal">Investing</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                            Join our team of dreamers, builders, and problem solvers. We're rethinking how wealth is created.
                        </p>
                        <Button className="bg-brand-teal text-white hover:bg-brand-teal-light px-8 py-6 text-lg rounded-full">
                            View Open Roles
                        </Button>
                    </Container>
                </section>

                <section className="py-24">
                    <Container>
                        <div className="flex items-center gap-3 mb-12">
                            <Briefcase className="w-6 h-6 text-brand-teal" />
                            <h2 className="text-2xl font-bold font-heading text-slate-900">Open Positions</h2>
                        </div>

                        <div className="grid gap-4">
                            {POSITIONS.map((job, i) => (
                                <div key={i} className="group p-6 bg-white border border-slate-100 rounded-2xl hover:border-brand-teal/30 hover:shadow-lg transition-all flex items-center justify-between cursor-pointer">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-brand-teal transition-colors">{job.title}</h3>
                                        <div className="flex gap-4 text-sm text-slate-500">
                                            <span>{job.dept}</span>
                                            <span>•</span>
                                            <span>{job.loc}</span>
                                            <span>•</span>
                                            <span>{job.type}</span>
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors">
                                        <ArrowRight className="w-5 h-5" />
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
