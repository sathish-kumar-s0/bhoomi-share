import Logo from "@/components/ui/Logo";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminBottomNav from "@/components/admin/AdminBottomNav";
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { logout } = useAuth();
    return (
        <div className="min-h-screen bg-slate-50">
            <AdminSidebar />
            {/* Admin Mobile Header */}
            <header className="lg:hidden h-14 bg-brand-primary border-b border-white/10 flex items-center justify-between px-4 sticky top-0 z-30">
                <Link to="/" className="flex items-center gap-2">
                    <Logo size="xs" />
                    <span className="font-bold text-white/70 font-heading text-sm">Admin</span>
                </Link>
                <button
                    onClick={logout}
                    className="p-2 text-white/40 hover:text-white transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                </button>
            </header>

            <main className="lg:ml-64 min-h-screen pb-20 lg:pb-0">
                {children}
            </main>
            <AdminBottomNav />
        </div>
    );
}
