import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { UIProvider } from "./context/UIContext";
import ScrollToAnchor from "./components/utils/ScrollToAnchor";


// Pages
import HomePage from "./app/HomePage";
import LoginPage from "./app/login/LoginPage";
import SignupPage from "./app/signup/SignupPage";
import ComingSoonPage from "./app/coming-soon/ComingSoonPage";
import PropertiesPage from "./app/properties/PropertiesPage";
import PropertyDetailPage from "./app/properties/[id]/PropertyDetailPage";
import AboutPage from "./app/about/AboutPage";
import ContactPage from "./app/contact/ContactPage";
import CareersPage from "./app/careers/CareersPage";
import PricingPage from "./app/pricing/PricingPage";
import StoriesPage from "./app/stories/StoriesPage";
import BlogPage from "./app/blog/BlogPage";
import PrivacyPage from "./app/legal/PrivacyPage";
import TermsPage from "./app/legal/TermsPage";

// Dashboard Pages
import DashboardOverview from "./app/dashboard/DashboardOverviewPage";
import DashboardDocuments from "./app/dashboard/documents/DashboardDocumentsPage";
import DashboardPortfolio from "./app/dashboard/portfolio/DashboardPortfolioPage";
import DashboardSettings from "./app/dashboard/settings/DashboardSettingsPage";
import DashboardWallet from "./app/dashboard/wallet/DashboardWalletPage";

// Admin Pages
import AdminDashboard from "./app/admin/AdminDashboardPage";
import AdminProperties from "./app/admin/properties/AdminPropertiesPage";
import AdminSettings from "./app/admin/settings/AdminSettingsPage";
import AdminUsers from "./app/admin/users/AdminUsersPage";

// Layouts
import DashboardLayout from "./app/dashboard/layout";
import AdminLayout from "./app/admin/layout";

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <UIProvider>
                    <ScrollToAnchor />
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/coming-soon" element={<ComingSoonPage />} />
                        <Route path="/properties" element={<PropertiesPage />} />
                        <Route path="/properties/:id" element={<PropertyDetailPage />} />

                        {/* Content Routes */}
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/stories" element={<StoriesPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/terms" element={<TermsPage />} />

                        {/* Dashboard Routes */}
                        <Route path="/dashboard" element={<DashboardLayout children={<Outlet />} />}>
                            <Route index element={<DashboardOverview />} />
                            <Route path="documents" element={<DashboardDocuments />} />
                            <Route path="portfolio" element={<DashboardPortfolio />} />
                            <Route path="settings" element={<DashboardSettings />} />
                            <Route path="wallet" element={<DashboardWallet />} />
                        </Route>

                        {/* Admin Routes */}
                        <Route path="/admin" element={<AdminLayout children={<Outlet />} />}>
                            <Route index element={<AdminDashboard />} />
                            <Route path="properties" element={<AdminProperties />} />
                            <Route path="settings" element={<AdminSettings />} />
                            <Route path="users" element={<AdminUsers />} />
                        </Route>

                        {/* 404 handler can be added here */}
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                </UIProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}
