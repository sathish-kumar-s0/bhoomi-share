"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type UserRole = "admin" | "investor";

interface User {
    name: string;
    email: string;
    role: UserRole;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Check local storage for persisted session
        const storedUser = localStorage.getItem("demo_user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        if (email === "admin" && password === "admin@123") {
            const adminUser: User = {
                name: "Admin User",
                email: "admin@bhoomishare.com",
                role: "admin",
            };
            setUser(adminUser);
            localStorage.setItem("demo_user", JSON.stringify(adminUser));
            navigate("/admin");
            setIsLoading(false);
            return true;
        }

        if ((email === "demo" || email === "demo@bhoomishare.com") && password === "demo@123") {
            const investorUser: User = {
                name: "Rahul Sharma",
                email: "demo@bhoomishare.com",
                role: "investor",
            };
            setUser(investorUser);
            localStorage.setItem("demo_user", JSON.stringify(investorUser));
            navigate("/dashboard");
            setIsLoading(false);
            return true;
        }

        setIsLoading(false);
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("demo_user");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
