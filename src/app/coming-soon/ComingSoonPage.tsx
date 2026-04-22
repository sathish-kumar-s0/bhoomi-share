"use client";

import React from "react";
import Logo from "@/components/ui/Logo";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center p-4">
            <Container>
                <Logo size="lg" className="mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-4">
                    Coming Soon
                </h1>
                <p className="text-slate-600 max-w-lg mx-auto mb-8 text-lg">
                    We are currently building this page to bring you an exceptional experience.
                    Please check back shortly.
                </p>
                <Link to="/">
                    <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-white hover:text-brand-teal">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Return Home
                    </Button>
                </Link>
            </Container>
        </div>
    );
}
