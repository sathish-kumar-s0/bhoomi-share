"use client";

import React, { useState } from "react";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck, Mail, Lock, User, CheckCircle2, Loader2, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function SignupPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate registration delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Simulating auto-login after registration
        await login("demo", "demo@123");
        setIsLoading(false);
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen bg-white lg:bg-slate-50 flex items-center justify-center p-0 lg:p-4">
            {/* Split Screen Layout for Desktop */}
            <div className="w-full max-w-5xl flex bg-white lg:rounded-[2.5rem] lg:shadow-2xl lg:shadow-slate-200/50 overflow-hidden min-h-[600px] border border-slate-100">

                {/* Left Side: Branding & Info (Hidden on Mobile) */}
                <div className="hidden lg:flex w-1/2 bg-slate-900 p-12 flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl -ml-10 -mb-10" />

                    <div className="relative z-10">
                        <Link to="/" className="flex items-center gap-2 group mb-12">
                            <Logo size="sm" />

                        </Link>

                        <div className="space-y-8 mt-20">
                            <h2 className="text-4xl font-bold font-heading !text-white leading-tight">
                                Start your <span className="text-brand-accent">wealth</span> building journey today.
                            </h2>
                            <div className="space-y-4">
                                {[
                                    "Invest in prime Indian properties from ₹25,000",
                                    "Earn hassle-free monthly rental income",
                                    "SEBI & RERA Compliant platform",
                                    "Full transparency & real-time tracking"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 !text-white/80">
                                        <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                                        <span className="text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 flex items-center gap-4 text-white/60 text-xs">
                        <ShieldCheck className="w-8 h-8 opacity-50" />
                        <p>Fully regulated by the relevant Indian financial authorities. Your investments are secure and transparent.</p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center relative">
                    {/* Mobile Header */}
                    <div className="lg:hidden flex items-center justify-between mb-8">
                        <Link to="/" className="flex items-center gap-2">
                            <Logo size="sm" />
                        </Link>
                        <Link to="/login" className="text-sm font-bold text-brand-teal">Sign In</Link>
                    </div>

                    <div className="max-w-md mx-auto w-full">
                        <div className="mb-10">
                            <h3 className="text-3xl font-bold font-heading text-slate-900">
                                Create Account
                            </h3>
                            <p className="text-slate-500 mt-2">
                                Join 250,000+ Indians building wealth through commercial real estate.
                            </p>
                        </div>

                        <form onSubmit={handleSignup} className="space-y-5">
                            <div className="space-y-4">
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
                                    <Input
                                        required
                                        type="text"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="pl-12 py-6 bg-slate-50 border-slate-200 focus:ring-brand-teal/10 focus:border-brand-teal"
                                    />
                                </div>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
                                    <Input
                                        required
                                        type="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="pl-12 py-6 bg-slate-50 border-slate-200 focus:ring-brand-teal/10 focus:border-brand-teal"
                                    />
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
                                    <Input
                                        required
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Create Password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="pl-12 pr-12 py-6 bg-slate-50 border-slate-200 focus:ring-brand-teal/10 focus:border-brand-teal"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none z-10"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <Button type="submit" disabled={isLoading} className="w-full py-6 text-lg shadow-xl shadow-emerald-500/20 rounded-2xl group">
                                {isLoading ? (
                                    <Loader2 className="w-6 h-6 animate-spin mx-auto" />
                                ) : (
                                    <>Start Investing <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                                )}
                            </Button>

                            <p className="text-center text-sm text-slate-500 pt-4">
                                Already have an account?{" "}
                                <Link to="/login" className="text-brand-teal font-bold hover:underline">Sign In</Link>
                            </p>
                        </form>

                        <div className="mt-12 text-center">
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Secure Indian Verification</p>
                            <div className="flex justify-center gap-6 mt-4 opacity-40 grayscale">
                                <span className="font-bold text-slate-600 text-xs tracking-tighter">PCI-DSS</span>
                                <span className="font-bold text-slate-600 text-xs tracking-tighter">AES-256</span>
                                <span className="font-bold text-slate-600 text-xs tracking-tighter">ISO 27001</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
