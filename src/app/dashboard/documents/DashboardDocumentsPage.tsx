"use client";

import React, { useState } from "react";
import { useUI } from "@/context/UIContext";
import { motion, AnimatePresence } from "framer-motion";
import {
    FileText,
    Download,
    Search,
    Filter,
    FileCheck,
    FileWarning,
    Calendar,
    ChevronRight,
    SearchX,
    GanttChartSquare,
    HardDriveDownload,
    MessageSquare,
    X,
    Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";

const DOCUMENT_CATEGORIES = [
    { id: "all", label: "All Files", count: 12 },
    { id: "legal", label: "Legal Agreements", count: 3 },
    { id: "tax", label: "Tax Certificates", count: 2 },
    { id: "reports", label: "Monthly Reports", count: 7 },
];

export default function DocumentsPage() {
    const { showToast } = useUI();
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [isDownloading, setIsDownloading] = useState<string | null>(null);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const DOCUMENTS = [
        { id: "doc-1", name: "Subscription Agreement - Summit Plaza", type: "legal", date: "Jan 15, 2026", size: "4.2 MB", status: "Signed" },
        { id: "doc-2", name: "PAN Card / KYC Certificate", type: "legal", date: "Jan 10, 2026", size: "1.1 MB", status: "Verified" },
        { id: "doc-3", name: "Monthly Performance Report - Dec 2025", type: "reports", date: "Jan 05, 2026", size: "2.8 MB", status: "Ready" },
        { id: "doc-4", name: "TDS Certificate - Q3 FY26", type: "tax", date: "Jan 02, 2026", size: "0.8 MB", status: "Ready" },
        { id: "doc-5", name: "Asset Valuation Report (Knight Frank)", type: "reports", date: "Dec 31, 2025", size: "12.5 MB", status: "Ready" },
        { id: "doc-6", name: "Investment Deed - Metro Logistics", type: "legal", date: "Dec 20, 2025", size: "3.9 MB", status: "Signed" },
        { id: "doc-7", name: "Share Certificate - SPV #9021", type: "legal", date: "Dec 18, 2025", size: "1.5 MB", status: "Verified" },
    ];

    const handleDownload = (docName: string, docId: string) => {
        setIsDownloading(docId);
        showToast(`Preparing ${docName}...`, "info");
        setTimeout(() => {
            setIsDownloading(null);
            showToast(`${docName} downloaded successfully!`, "success");
        }, 2000);
    };

    const handleBulkDownload = () => {
        showToast("Compressing all documents into a ZIP archive...", "info");
        setTimeout(() => {
            showToast("Archive downloaded successfully!", "success");
        }, 3500);
    };

    const filteredDocs = DOCUMENTS.filter(doc => {
        const matchesCategory = activeCategory === "all" || doc.type === activeCategory;
        const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="max-w-6xl mx-auto space-y-10 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold font-heading text-slate-900 tracking-tight">Documents Center</h1>
                    <p className="text-slate-500 mt-1">Access all your legal contracts, tax documents, and monthly reports.</p>
                </div>
                <button
                    onClick={handleBulkDownload}
                    className="flex items-center gap-3 px-8 py-4 bg-brand-teal text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-brand-teal/20 hover:scale-105 transition-transform"
                >
                    <HardDriveDownload className="w-5 h-5" /> Download All Archive
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                {/* Category Sidebar */}
                <aside className="space-y-6">
                    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-2">Categories</h4>
                        <div className="space-y-1">
                            {DOCUMENT_CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={cn(
                                        "w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-sm font-bold transition-all",
                                        activeCategory === cat.id
                                            ? "bg-brand-teal text-white shadow-md"
                                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                    )}
                                >
                                    <span>{cat.label}</span>
                                    <span className={cn(
                                        "text-[10px] font-black px-2 py-0.5 rounded-md",
                                        activeCategory === cat.id ? "bg-white/20" : "bg-slate-100"
                                    )}>{cat.count}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl -mr-12 -mt-12" />
                        <h4 className="font-bold text-lg mb-3 font-heading">Need Support?</h4>
                        <p className="text-white/50 text-xs leading-relaxed mb-6">
                            Can't find a specific document? Our legal team is available 24/7 to assist.
                        </p>
                        <button
                            onClick={() => setIsChatOpen(true)}
                            className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"
                        >
                            Chat with Legal
                        </button>
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="lg:col-span-3 space-y-6">
                    {/* Search Bar */}
                    <div className="bg-white rounded-[2rem] p-4 shadow-sm border border-slate-100 flex items-center gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                            <input
                                type="text"
                                placeholder="Search by document name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 bg-slate-50 border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-teal/10 transition-all text-sm font-bold text-slate-900 placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    {/* Documents List */}
                    <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
                        {filteredDocs.length > 0 ? (
                            <div className="divide-y divide-slate-50">
                                {filteredDocs.map((doc, i) => (
                                    <motion.div
                                        key={doc.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="px-8 py-6 flex items-center justify-between hover:bg-slate-50/50 transition-all group"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className={cn(
                                                "w-12 h-12 rounded-2xl flex items-center justify-center p-3 transition-transform group-hover:scale-110 shadow-sm",
                                                doc.type === 'legal' ? 'bg-blue-50 text-blue-600' :
                                                    doc.type === 'tax' ? 'bg-emerald-50 text-emerald-600' :
                                                        'bg-brand-gold/10 text-brand-gold-dark'
                                            )}>
                                                {doc.type === 'legal' ? <FileCheck className="w-full h-full" /> :
                                                    doc.type === 'tax' ? <GanttChartSquare className="w-full h-full" /> :
                                                        <FileText className="w-full h-full" />}
                                            </div>
                                            <div>
                                                <div className="font-black text-slate-900 text-sm group-hover:text-brand-teal transition-colors tracking-tight">{doc.name}</div>
                                                <div className="flex items-center gap-3 mt-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                    <span>{doc.date}</span>
                                                    <span className="w-1 h-1 rounded-full bg-slate-200" />
                                                    <span>{doc.size}</span>
                                                    <span className="w-1 h-1 rounded-full bg-slate-200" />
                                                    <span className={cn(
                                                        doc.status === 'Verified' || doc.status === 'Signed' ? 'text-emerald-500' : 'text-brand-gold'
                                                    )}>{doc.status}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => handleDownload(doc.name, doc.id)}
                                                disabled={isDownloading === doc.id}
                                                className={cn(
                                                    "flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                                                    isDownloading === doc.id ? "bg-slate-100 text-slate-400" : "bg-slate-50 text-slate-400 hover:bg-brand-teal hover:text-white"
                                                )}
                                            >
                                                {isDownloading === doc.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                                                {isDownloading === doc.id ? "Working..." : "Download"}
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="p-20 flex flex-col items-center text-center">
                                <SearchX className="w-16 h-16 text-slate-100 mb-6" />
                                <h4 className="text-xl font-bold text-slate-900 font-heading">No documents found</h4>
                                <p className="text-slate-400 text-sm max-w-xs mt-2">We couldn't find any documents matching your search or category.</p>
                                <button
                                    onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                                    className="mt-8 text-brand-teal text-xs font-black uppercase tracking-widest border-b-2 border-brand-teal/20"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Chat Modal Simulation */}
            <AnimatePresence>
                {isChatOpen && (
                    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-end p-6">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsChatOpen(false)}
                            className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl flex flex-col h-[600px] overflow-hidden"
                        >
                            {/* Chat Header */}
                            <div className="p-8 bg-slate-900 text-white flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-slate-900">
                                        <MessageSquare className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">Legal Support</div>
                                        <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-black uppercase tracking-widest">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => setIsChatOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Chat Messages */}
                            <div className="flex-1 p-8 space-y-6 overflow-y-auto bg-slate-50">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0" />
                                    <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm text-sm text-slate-600 max-w-[80%]">
                                        Hello Rahul! How can I help you with your documents today?
                                    </div>
                                </div>
                                <div className="flex gap-4 flex-row-reverse">
                                    <div className="w-8 h-8 rounded-full bg-brand-teal flex-shrink-0" />
                                    <div className="bg-brand-teal text-white p-4 rounded-2xl rounded-tr-none shadow-md text-sm max-w-[80%]">
                                        I'm looking for the structural audit report for Summit Plaza.
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0" />
                                    <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm text-sm text-slate-600 max-w-[80%]">
                                        Certainly. That's part of the annual report bundle. Would you like me to send the specific section?
                                    </div>
                                </div>
                                <div className="text-center">
                                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Today, 10:45 AM</span>
                                </div>
                            </div>

                            {/* Chat Input */}
                            <div className="p-6 bg-white border-t border-slate-100">
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        placeholder="Type your message..."
                                        className="flex-1 bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-teal/10"
                                    />
                                    <button
                                        onClick={() => showToast("Message sent!", "success")}
                                        className="p-3 bg-brand-teal text-white rounded-xl shadow-lg shadow-brand-teal/20"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
