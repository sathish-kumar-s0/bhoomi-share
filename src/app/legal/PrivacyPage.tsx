import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function PrivacyPage() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-32 lg:pt-36 pb-20">
                <Container className="max-w-4xl">
                    <h1 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-8">Privacy Policy</h1>
                    <div className="prose prose-slate max-w-none">
                        <p className="text-slate-600 mb-6">Last updated: October 15, 2025</p>

                        <h2 className="text-xl font-bold text-slate-900 mb-4 mt-8">1. Introduction</h2>
                        <p className="text-slate-600 mb-4">
                            Bhoomi Share ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mb-4 mt-8">2. Data We Collect</h2>
                        <p className="text-slate-600 mb-4">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Financial Data:</strong> includes bank account and payment card details.</li>
                            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-900 mb-4 mt-8">3. How We Use Your Data</h2>
                        <p className="text-slate-600 mb-4">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-900 mb-4 mt-8">4. Data Security</h2>
                        <p className="text-slate-600 mb-4">
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mb-4 mt-8">5. Contact Us</h2>
                        <p className="text-slate-600 mb-4">
                            If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@bhoomishare.com.
                        </p>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
}
