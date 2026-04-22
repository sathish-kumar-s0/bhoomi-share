"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, X, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface UIContextType {
    showToast: (message: string, type?: ToastType) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = (message: string, type: ToastType = 'success') => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    };

    return (
        <UIContext.Provider value={{ showToast }}>
            {children}

            {/* Global Toasts Container */}
            <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-3 pointer-events-none">
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <motion.div
                            key={toast.id}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                            className={cn(
                                "flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl pointer-events-auto border backdrop-blur-md min-w-[300px]",
                                toast.type === 'success' ? "bg-emerald-500/90 text-white border-emerald-400/20" :
                                    toast.type === 'error' ? "bg-red-500/90 text-white border-red-400/20" :
                                        "bg-slate-900/90 text-white border-slate-700/50"
                            )}
                        >
                            {toast.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> :
                                toast.type === 'error' ? <AlertCircle className="w-5 h-5 shrink-0" /> :
                                    <Info className="w-5 h-5 shrink-0" />}

                            <p className="text-sm font-bold tracking-tight">{toast.message}</p>

                            <button
                                onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
                                className="ml-auto p-1 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </UIContext.Provider>
    );
}

export function useUI() {
    const context = useContext(UIContext);
    if (!context) {
        throw new Error('useUI must be used within a UIProvider');
    }
    return context;
}
