"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { Shield, FileCheck, Lock } from "lucide-react";
import { SEBILogo, RBILogo, RERALogo, ISOLogo } from "@/components/ui/Logos";

export default function Trust() {
    return (
        <section className="py-20 bg-slate-50 border-y border-slate-200">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold font-heading text-brand-teal mb-6">
                            Regulated, Secure, & Transparent
                        </h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-teal shrink-0">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Regulated & Compliant</h4>
                                    <p className="text-sm text-slate-600">Fully compliant with SEBI and RERA regulations, ensuring your capital is protected by the most stringent Indian financial standards.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-teal shrink-0">
                                    <FileCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Rigorous Due Diligence</h4>
                                    <p className="text-sm text-slate-600">We reject 99% of deals. Only properties with clear titles, Tier-1 tenants, and high yield potential make it to our platform.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-teal shrink-0">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Secure Ownership</h4>
                                    <p className="text-sm text-slate-600">Your specific property shares are held in a separate SPV (Special Purpose Vehicle), giving you true legal ownership.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Professional Logos */}
                        <SEBILogo className="h-16 text-slate-400" />
                        <RBILogo className="h-16 text-slate-400" />
                        <RERALogo className="h-16 text-slate-400" />
                        <ISOLogo className="h-16 text-slate-400" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
