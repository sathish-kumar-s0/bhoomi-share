"use client";

import React, { useState } from "react";
import { Plus, Search, Filter, MoreVertical, Edit2, Trash2, X, Building2, MapPin, DollarSign, Image as ImageIcon, Upload } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useUI } from "@/context/UIContext";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const PROPERTIES = [
    { id: 1, name: "The Summit Plaza", location: "Mumbai, MH", status: "Active", value: "₹ 45.0 Cr", yield: "8.2%", type: "Commercial" },
    { id: 2, name: "Metro Logistics Hub", location: "Thane, MH", status: "Funding", value: "₹ 12.5 Cr", yield: "9.5%", type: "Industrial" },
    { id: 3, name: "Tech Park Meridian", location: "Whitefield, KA", status: "Active", value: "₹ 85.0 Cr", yield: "7.8%", type: "Office" },
    { id: 4, name: "Greenfield SEZ", location: "Gachibowli, TS", status: "Coming Soon", value: "₹ 30.0 Cr", yield: "10.2%", type: "Mixed Use" },
];

export default function AdminProperties() {
    const { showToast } = useUI();
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddProperty = (e: React.FormEvent) => {
        e.preventDefault();
        showToast("Processing new asset registration...", "info");
        setTimeout(() => {
            setIsAddModalOpen(false);
            showToast("New property added to market listings!", "success");
        }, 2000);
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 tracking-tight">Managed Properties</h1>
                    <p className="text-slate-500 mt-1 uppercase text-[10px] font-black tracking-widest">Total Assets: 4  |  Total Value: ₹ 172.5 Cr</p>
                </div>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-brand-accent text-white rounded-xl sm:rounded-2xl font-bold text-xs uppercase tracking-wider shadow-xl shadow-brand-accent/20 hover:scale-105 transition-transform"
                >
                    <Plus className="w-5 h-5" /> Add Property
                </button>
            </div>

            {/* Filters Bar */}
            <div className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100 shadow-sm mb-6 flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search properties by name or city..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-accent/10 transition-all text-sm font-bold text-slate-900 placeholder:text-slate-400"
                    />
                </div>
                <button className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-100 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:border-brand-accent hover:text-brand-accent transition-all">
                    <Filter className="w-4 h-4" /> Filter Assets
                </button>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[1000px]">
                        <thead className="bg-slate-50/50 border-b border-slate-100">
                            <tr>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Property & Strategy</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Location</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Valuation</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Target Yield</th>
                                <th className="px-8 py-6 text-right text-[10px] font-black uppercase tracking-widest text-slate-400">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {PROPERTIES.map((prop, i) => (
                                <tr key={prop.id} className="hover:bg-slate-50/50 transition-all group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                                                <Building2 className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-black text-slate-900 mb-0.5">{prop.name}</div>
                                                <div className="text-[10px] font-black text-brand-accent uppercase tracking-widest">{prop.type}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                                            <MapPin className="w-4 h-4 text-slate-300" /> {prop.location}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={cn(
                                            "px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest",
                                            prop.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                                                prop.status === 'Funding' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                                                    'bg-slate-100 text-slate-500 border border-slate-200'
                                        )}>
                                            {prop.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-sm font-black text-slate-900 tracking-tight">{prop.value}</td>
                                    <td className="px-8 py-6 text-sm font-black text-emerald-600">{prop.yield}</td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => showToast(`Opening editor for ${prop.name}...`, "info")}
                                                className="p-3 bg-white border border-slate-200 text-slate-400 rounded-xl hover:text-brand-accent hover:border-brand-accent transition-all shadow-sm"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => showToast(`${prop.name} has been archived.`, "error")}
                                                className="p-3 bg-white border border-slate-200 text-slate-400 rounded-xl hover:text-red-500 hover:border-red-500 transition-all shadow-sm"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Property Modal */}
            <AnimatePresence>
                {isAddModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/20 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsAddModalOpen(false)}
                            className="absolute inset-0"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-white rounded-2xl p-10 shadow-2xl overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl -mr-16 -mt-16" />

                            <div className="flex items-center justify-between mb-10">
                                <div>
                                    <h3 className="text-2xl font-black font-heading text-slate-900 tracking-tight">Register New Asset</h3>
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Listing Configuration</p>
                                </div>
                                <button onClick={() => setIsAddModalOpen(false)} className="p-3 hover:bg-slate-50 rounded-2xl transition-colors">
                                    <X className="w-6 h-6 text-slate-300" />
                                </button>
                            </div>

                            <form onSubmit={handleAddProperty} className="space-y-8">
                                {/* Image Upload Section */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Property Image</label>
                                    <div className="relative group cursor-pointer">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageSelection}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        />
                                        <div className={cn(
                                            "w-full h-52 rounded-2xl border-2 border-dashed transition-all flex flex-col items-center justify-center gap-4 relative overflow-hidden",
                                            selectedImage ? 'border-brand-accent/20' : 'border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-brand-accent/30'
                                        )}>
                                            {selectedImage ? (
                                                <>
                                                    <img src={selectedImage} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-bold flex items-center gap-2">
                                                            <Edit2 className="w-3 h-3" /> Change Image
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="p-4 bg-white rounded-2xl shadow-sm shadow-slate-200/50">
                                                        <Upload className="w-6 h-6 text-brand-accent" />
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="text-sm font-bold text-slate-700">Click to upload property image</p>
                                                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">PNG, JPG up to 5MB</p>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Asset Name</label>
                                        <div className="relative">
                                            <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                            <input required type="text" placeholder="e.g. Signature Towers" className="w-full pl-12 pr-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-accent/10 text-slate-900 placeholder:text-slate-400" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Location</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                            <input required type="text" placeholder="City, State" className="w-full pl-12 pr-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-accent/10 text-slate-900 placeholder:text-slate-400" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Target Valuation</label>
                                        <div className="relative">
                                            <DollarSign className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                            <input required type="text" placeholder="₹ Amount in Cr" className="w-full pl-12 pr-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-accent/10 text-slate-900 placeholder:text-slate-400" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Strategy Type</label>
                                        <select className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-accent/10 font-bold text-sm text-slate-900 appearance-none">
                                            <option>Commercial Office</option>
                                            <option>Industrial Logistics</option>
                                            <option>Retail Plaza</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-slate-50 flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setIsAddModalOpen(false)}
                                        className="flex-1 py-5 bg-slate-50 text-slate-400 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-[2] py-5 bg-brand-accent text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-brand-accent/20 hover:scale-105 transition-transform"
                                    >
                                        Confirm & Launch
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
