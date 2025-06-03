"use client";

import { useState } from "react";
import { Code, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "react-bootstrap";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useRouter();

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/services", label: "Services" },
        { path: "/about", label: "About Us" },
        { path: "/contact", label: "Contact" },
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header className="bg-slate-900/95 backdrop-blur-md border-b border-blue-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                            <Code className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            Diguality
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 text-gray-300 hover:text-cyan-400 ${isActive(item.path)
                                    ? "text-cyan-400"
                                    : "text-gray-300 hover:text-cyan-400"
                                    }`}
                            >
                                {item.label}
                                {isActive(item.path) && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-gray-300 hover:text-cyan-400"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-blue-800">
                        <nav className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${isActive(item.path)
                                        ? "text-cyan-400 bg-blue-900/50"
                                        : "text-gray-300 hover:text-cyan-400 hover:bg-blue-900/30"
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navigation;
