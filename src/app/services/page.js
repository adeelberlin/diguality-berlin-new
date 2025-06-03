
import { Monitor, Zap, Shield, BarChart3, ArrowRight, Globe, Users, Play, Camera } from "lucide-react";
import Link from "next/link";
import { Button, Card, CardBody, CardHeader, CardTitle } from "react-bootstrap";

const Services = () => {
    const services = [
        {
            icon: Monitor,
            title: "Custom Media Platforms",
            description: "We build bespoke websites and digital platforms specifically designed for media and broadcasting companies. Our solutions handle everything from breaking news delivery to complex content management workflows.",
            features: ["Responsive News Websites", "Editorial Dashboards", "Content Management Systems", "Mobile-First Design"]
        },
        {
            icon: Play,
            title: "Video & Streaming Solutions",
            description: "Advanced video integration and streaming capabilities that deliver content seamlessly across all platforms. From live broadcasting to on-demand streaming, we've got you covered.",
            features: ["Live Streaming Integration", "Video Player Customization", "Multi-Platform Distribution", "Adaptive Bitrate Streaming"]
        },
        {
            icon: Zap,
            title: "Real-Time Content Delivery",
            description: "Lightning-fast content management systems with live updates, breaking news alerts, and real-time synchronization across all your digital touchpoints.",
            features: ["Live News Updates", "Breaking News Alerts", "Real-Time Synchronization", "Instant Publishing Tools"]
        },
        {
            icon: BarChart3,
            title: "Audience Analytics & Insights",
            description: "Comprehensive analytics solutions that help you understand your audience, track engagement, and optimize your content strategy for maximum impact.",
            features: ["Real-Time Analytics", "Audience Segmentation", "Content Performance Tracking", "Custom Reporting Dashboards"]
        },
        {
            icon: Globe,
            title: "Mobile Optimization",
            description: "Mobile-first design approach ensuring your content reaches audiences on any device. Our responsive solutions provide seamless experiences across smartphones, tablets, and desktops.",
            features: ["Progressive Web Apps", "Mobile-Responsive Design", "Touch-Optimized Interfaces", "Offline Content Access"]
        },
        {
            icon: Shield,
            title: "Scalable CMS Solutions",
            description: "Enterprise-grade content management systems that grow with your organization. Handle millions of page views while maintaining lightning-fast performance and security.",
            features: ["High-Performance Architecture", "Auto-Scaling Infrastructure", "Advanced Security Features", "Multi-Site Management"]
        }
    ];

    const industries = [
        {
            icon: Camera,
            title: "News Outlets",
            description: "Digital platforms for newspapers, magazines, and online publications"
        },
        {
            icon: Play,
            title: "TV Networks",
            description: "Streaming platforms and digital extensions for television broadcasters"
        },
        {
            icon: Users,
            title: "Radio Stations",
            description: "Podcast platforms and digital radio streaming solutions"
        },
        {
            icon: Monitor,
            title: "Streaming Services",
            description: "OTT platforms and video-on-demand services"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
            {/* Hero Section */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        Digital Solutions for <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Media Leaders</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
                        We craft cutting-edge websites and digital platforms that empower media and broadcasting companies to stay competitive in today&apos;s fast-evolving digital landscape.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="rounded-lg border text-card-foreground shadow-sm group bg-slate-800/70 backdrop-blur-sm border-blue-800/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                                <CardHeader className="flex flex-col space-y-1.5 p-6 pt-8 pb-8">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                                        {service.title}
                                    </CardTitle>
                                    <CardHeader className="text-gray-300 text-base leading-relaxed">
                                        {service.description}
                                    </CardHeader>
                                </CardHeader>
                                <CardBody className="flex flex-col space-y-1.5 p-6 pt-8 pb-8">
                                    <ul className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Focus */}
            <section className="py-20 bg-slate-800/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Industry <span className="text-cyan-400">Expertise</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Deep understanding of the unique challenges and opportunities in media and broadcasting.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {industries.map((industry, index) => (
                            <Card key={index} className="rounded-lg border text-card-foreground shadow-sm group bg-slate-800/70 backdrop-blur-sm border-blue-800/50 hover:border-cyan-400/50 transition-all duration-300 text-center hover:shadow-lg hover:shadow-blue-500/20">
                                <CardBody className="pt-8 pb-8">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                        <industry.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                        {industry.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm">{industry.description}</p>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Cutting-Edge <span className="text-cyan-400">Technology</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                            We leverage the latest technologies to build platforms that are fast, secure, and scalable.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-800/70 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-8 text-center hover:border-cyan-400/50 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-white mb-4">Frontend Excellence</h3>
                            <p className="text-gray-300 mb-4">React, TypeScript, Next.js, Tailwind CSS</p>
                            <div className="text-sm text-cyan-400 font-medium">Lightning-fast user experiences</div>
                        </div>
                        <div className="bg-slate-800/70 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-8 text-center hover:border-cyan-400/50 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-white mb-4">Backend Power</h3>
                            <p className="text-gray-300 mb-4">Node.js, Python, Cloud Infrastructure</p>
                            <div className="text-sm text-cyan-400 font-medium">Scalable and secure APIs</div>
                        </div>
                        <div className="bg-slate-800/70 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-8 text-center hover:border-cyan-400/50 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-white mb-4">Media Tech</h3>
                            <p className="text-gray-300 mb-4">CDN, Video Streaming, Real-time APIs</p>
                            <div className="text-sm text-cyan-400 font-medium">Optimized for media delivery</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Let&apos;s build a platform that sets you apart from the competition and drives real results.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-3">
                            Start Your Project
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
