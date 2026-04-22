"use client";
import React, { useState } from "react";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowRight, ShieldCheck, Mail, Lock, CheckCircle2, Loader2, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
    const [searchParams] = useSearchParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);

        const success = await login(email, password);

        if (success) {
            const redirectPath = searchParams.get("redirect");
            if (redirectPath) {
                navigate(redirectPath);
            } else if (email === "admin") {
                navigate("/admin");
            } else {
                navigate("/dashboard");
            }
        } else {
            setError("Invalid credentials. Please try again.");
            setIsSubmitting(false);
        }
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
                                Back to <span className="text-brand-accent">growing</span> your real estate portfolio.
                            </h2>
                            <div className="space-y-4">
                                {[
                                    "Track your rental income in real-time",
                                    "Access exclusive institutional opportunities",
                                    "Download tax-ready financial reports",
                                    "Connect with your dedicated advisor"
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
                        <p>Access your secure investor portal with end-to-end encryption and multi-factor safety.</p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center relative">
                    {/* Mobile Header */}
                    <div className="lg:hidden flex items-center justify-between mb-8">
                        <Link to="/" className="flex items-center gap-2">
                            <Logo size="sm" />
                        </Link>
                        <Link to="/signup" className="text-sm font-bold text-brand-teal">Create Account</Link>
                    </div>

                    <div className="max-w-md mx-auto w-full">
                        <div className="mb-10">
                            <h3 className="text-3xl font-bold font-heading text-slate-900">
                                Welcome Back
                            </h3>
                            <p className="text-slate-500 mt-2">
                                Sign in to manage your real estate investments.
                            </p>
                        </div>

                        {error && (
                            <div className="mb-6 bg-red-50 text-red-600 text-sm p-4 rounded-xl border border-red-100 flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-4">
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
                                    <Input
                                        required
                                        type="text"
                                        placeholder="Email or Username"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-12 py-6 bg-slate-50 border-slate-200 focus:ring-brand-teal/10 focus:border-brand-teal"
                                    />
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
                                    <Input
                                        required
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
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

                            <div className="flex items-center justify-between px-1">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-brand-teal focus:ring-brand-teal" />
                                    <span className="text-xs text-slate-500 group-hover:text-slate-700 transition-colors">Remember me</span>
                                </label>
                                <a href="#" className="text-xs text-brand-teal font-bold hover:underline">Forgot Password?</a>
                            </div>

                            <Button type="submit" disabled={isSubmitting} className="w-full py-6 text-lg shadow-xl shadow-emerald-500/20 rounded-2xl group">
                                {isSubmitting ? (
                                    <Loader2 className="w-6 h-6 animate-spin mx-auto" />
                                ) : (
                                    <>Sign In Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                                )}
                            </Button>

                            <p className="text-center text-sm text-slate-500 pt-4">
                                Don't have an account?{" "}
                                <Link to="/signup" className="text-brand-teal font-bold hover:underline">Create One</Link>
                            </p>
                        </form>

                        {/* <div className="mt-12">
                            <div className="relative mb-8">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-slate-100" />
                                </div>
                                <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-black">
                                    <span className="bg-white px-4 text-slate-400">Demo Access</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => { setEmail("demo"); setPassword("demo@123"); }}
                                    className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-brand-teal/50 hover:bg-brand-teal/5 transition-all group"
                                >
                                    <span className="text-xs font-bold text-slate-700 group-hover:text-brand-teal">Investor</span>
                                    <span className="text-[10px] text-slate-400">demo / demo@123</span>
                                </button>
                                <button
                                    onClick={() => { setEmail("admin"); setPassword("admin@123"); }}
                                    className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-brand-teal/50 hover:bg-brand-teal/5 transition-all group"
                                >
                                    <span className="text-xs font-bold text-slate-700 group-hover:text-brand-teal">Admin</span>
                                    <span className="text-[10px] text-slate-400">admin / admin@123</span>
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
