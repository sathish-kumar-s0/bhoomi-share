import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function TermsPage() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-32 lg:pt-36 pb-20">
                <Container className="max-w-4xl">
                    <h1 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-8">Terms of Service</h1>
                    <div className="prose prose-slate max-w-none">
                        <p className="text-slate-600 mb-6">Last updated: October 15, 2025</p>

                        <h2 className="text-xl font-bold text-slate-900 mb-4 mt-8">1. Acceptance of Terms</h2>
                        <p className="text-slate-600 mb-4">
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mb-4 mt-8">2. Investment Risks</h2>
                        <p className="text-slate-600 mb-4">
                            Real estate investments involve risks, including loss of capital, illiquidity, and lack of dividends. Past performance is not indicative of future results. You should carefully consider your investment objectives, risks, charges, and expenses before investing.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mb-4 mt-8">3. User Account</h2>
                        <p className="text-slate-600 mb-4">
                            To access certain features of the Platform, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mb-4 mt-8">4. Intellectual Property</h2>
                        <p className="text-slate-600 mb-4">
                            The Site and its original content, features, and functionality are owned by Bhoomi Share and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mb-4 mt-8">5. Termination</h2>
                        <p className="text-slate-600 mb-4">
                            We may terminate your access to the Site, without cause or notice, which may result in the forfeiture and destruction of all information associated with you. All provisions of this Agreement that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mb-4 mt-8">6. Governing Law</h2>
                        <p className="text-slate-600 mb-4">
                            This Agreement (and any further rules, polices, or guidelines incorporated by reference) shall be governed and construed in accordance with the laws of India, without giving effect to any principles of conflicts of law.
                        </p>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
}
