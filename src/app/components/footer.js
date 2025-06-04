
import { Code, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                Diguality
                            </span>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Digital agency specializing in building powerful websites and platforms for media and broadcasting companies.
                            Based in Berlin, Germany.
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <span>• Custom Media Platforms</span>
                            <span>• Real-Time Content Delivery</span>
                            <span>• Video & Streaming Solutions</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-cyan-400">Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Custom Platforms</Link></li>
                            <li><Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Video Integration</Link></li>
                            <li><Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Content Management</Link></li>
                            <li><Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Analytics & Insights</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-cyan-400">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2 text-gray-300">
                                <MapPin className="w-4 h-4" />
                                <span>Unter den Linden 10, 10117 Berlin, Germany</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-300">
                                <Mail className="w-4 h-4" />
                                <span>digualitycloud@proton.me</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-300">
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 mb-4 md:mb-0">
                            © {new Date().getFullYear()} Diguality UG. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</Link>
                            <Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors">Services</Link>
                            <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</Link>
                            <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
