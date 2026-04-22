import { Link } from "react-router-dom";
import Container from "@/components/ui/Container"; // Make sure this path is correct based on Header.tsx
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-secondary text-white pt-20 md:pt-32 pb-12 border-t-4 border-brand-accent relative overflow-hidden">
            {/* Subtle glow effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] -mt-20 pointer-events-none" />
            <Container className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link to="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
                            <Logo dark size="sm" />
                        </Link>
                        <p className="text-white/60 mb-8 leading-relaxed font-medium">
                            Democratizing real estate investment through fractional ownership of premium assets.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Facebook, href: "https://facebook.com/bhoomishare" },
                                { Icon: Twitter, href: "https://twitter.com/bhoomishare" },
                                { Icon: Instagram, href: "https://instagram.com/bhoomishare" },
                                { Icon: Linkedin, href: "https://linkedin.com/company/bhoomishare" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-brand-accent hover:text-white transition-all shadow-sm"
                                >
                                    <social.Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-heading text-white">Platform</h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Browse Properties", to: "/#investments" },
                                { label: "How it Works", to: "/#how-it-works" },
                                { label: "Pricing", to: "/pricing" }, 
                                { label: "Success Stories", to: "/stories" }, 
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link to={link.to} className="text-white/60 hover:text-brand-accent transition-colors font-medium">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-heading text-white">Company</h4>
                        <ul className="space-y-4">
                            {[
                                { label: "About Us", to: "/#about" },
                                // { label: "Careers", to: "/careers" },
                                // { label: "Blog", to: "/blog" },
                                { label: "Contact", to: "/#contact" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link to={link.to} className="text-white/60 hover:text-brand-accent transition-colors font-medium">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-heading text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-white/60 font-medium">
                                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                                <a 
                                    href="https://goo.gl/maps/placeholder" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-brand-accent transition-colors"
                                >
                                    123 Financial District,<br />
                                    Mumbai, MH 400051
                                </a>
                            </li>
                            <li className="flex items-center gap-4 text-white/60 font-medium">
                                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                                <a href="tel:+919876543210" className="hover:text-brand-accent transition-colors">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center gap-4 text-white/60 font-medium">
                                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                                <a href="mailto:support@bhoomishare.com" className="hover:text-brand-accent transition-colors">support@bhoomishare.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50 font-medium">
                    <p>© {currentYear} Bhoomi Share. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
