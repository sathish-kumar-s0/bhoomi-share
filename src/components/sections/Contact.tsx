"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white border-t border-slate-100 scroll-mt-28">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-bold font-heading text-slate-900 mb-6">Get in touch</h2>
                        <p className="text-slate-600 text-lg mb-12">
                            Have questions about investing? Our team is here to help you every step of the way.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-brand-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                                    <p className="text-slate-500">support@bhoomishare.com</p>
                                    <p className="text-slate-500">invest@bhoomishare.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-brand-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                                    <p className="text-slate-500">+91 98765 43210</p>
                                    <p className="text-xs text-slate-400 mt-1">Mon-Fri, 9am - 6pm IST</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-brand-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                                    <p className="text-slate-500">
                                        123 Financial District,<br />
                                        Mumbai, MH 400051
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-premium">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">First Name</label>
                                    <Input type="text" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                                    <Input type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Email Address</label>
                                <Input type="email" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Message</label>
                                <Textarea placeholder="How can we help you?" />
                            </div>
                            <Button className="w-full py-6 text-base shadow-lg shadow-emerald-500/20 rounded-2xl">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
}
