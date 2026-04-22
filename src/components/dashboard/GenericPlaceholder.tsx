"use client";

import React from "react";
import Container from "@/components/ui/Container";

export default function GenericDashboardPage({ title }: { title: string }) {
    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-heading text-slate-900">{title}</h1>
                <p className="text-slate-500 mt-2">Manage and view your {title.toLowerCase()} details.</p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-sm">
                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-300">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No Data Available</h3>
                <p className="text-slate-500 max-w-sm mx-auto">
                    You haven't added any information to this section yet.
                    Start investing to see your {title.toLowerCase()} grow.
                </p>
            </div>
        </div>
    );
}
