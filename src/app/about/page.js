
import { Code, Users, Zap, ArrowRight, Monitor, Globe, Shield } from "lucide-react";
import Link from "next/link";
import { Button, Card, CardBody } from "react-bootstrap";

const About = () => {
    const values = [
        {
            icon: Code,
            title: "Technical Excellence",
            description: "We are committed to delivering cutting-edge digital solutions using the latest technologies and best practices. Our team stays ahead of industry trends to ensure your platform is future-ready and built to scale."
        },
        {
            icon: Users,
            title: "Media Industry Focus",
            description: "Deep expertise in the media and broadcasting sector means we understand your unique challenges. From breaking news delivery to audience engagement, we build solutions that address real industry needs."
        },
        {
            icon: Zap,
            title: "Innovation & Speed",
            description: "In the fast-paced media landscape, speed matters. We deliver high-performance solutions with rapid development cycles, helping you stay ahead of the competition and capitalize on market opportunities."
        }
    ];

    const expertise = [
        {
            category: "Frontend Development",
            technologies: "React, TypeScript, Next.js, Tailwind CSS",
            description: "Creating engaging, responsive user interfaces"
        },
        {
            category: "Backend Systems",
            technologies: "Node.js, Python, Cloud APIs, Microservices",
            description: "Building scalable, secure backend infrastructure"
        },
        {
            category: "Media Technology",
            technologies: "Video Streaming, CDN, Real-time APIs, CMS",
            description: "Specialized solutions for media companies"
        },
        {
            category: "DevOps & Infrastructure",
            technologies: "AWS, Docker, CI/CD, Auto-scaling",
            description: "Ensuring reliability and performance at scale"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Hero Section */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                About <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Diguality</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Based in Berlin, Diguality is a specialized digital agency that builds powerful websites and platforms
                                exclusively for media and broadcasting companies. We combine deep industry knowledge with cutting-edge
                                technology to help media brands dominate the digital landscape.
                            </p>
                            <p className="text-lg text-gray-400 mb-8">
                                From news outlets to streaming services, we understand the unique challenges of the media industry.
                                Our solutions are designed to handle real-time content delivery, massive traffic spikes, and the
                                complex workflows that define modern media operations.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 border border-blue-800">
                                <div className="grid grid-cols-2 gap-6 h-full">
                                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/50 flex flex-col justify-center items-center text-center shadow-lg">
                                        <Monitor className="w-12 h-12 text-blue-400 mb-4" />
                                        <p className="text-white font-semibold">Custom Platforms</p>
                                    </div>
                                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-700/50 flex flex-col justify-center items-center text-center shadow-lg">
                                        <Globe className="w-12 h-12 text-cyan-400 mb-4" />
                                        <p className="text-white font-semibold">Global Reach</p>
                                    </div>
                                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/50 flex flex-col justify-center items-center text-center shadow-lg">
                                        <Zap className="w-12 h-12 text-blue-400 mb-4" />
                                        <p className="text-white font-semibold">Real-Time Tech</p>
                                    </div>
                                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-700/50 flex flex-col justify-center items-center text-center shadow-lg">
                                        <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                                        <p className="text-white font-semibold">Enterprise Security</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Our <span className="text-cyan-400">Approach</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            We combine technical expertise with deep media industry knowledge to deliver solutions that drive real business results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="rounded-lg border text-card-foreground shadow-sm group bg-slate-800/70 backdrop-blur-sm border-blue-800 hover:border-cyan-400 transition-all duration-300 text-center hover:shadow-xl hover:shadow-cyan-400/20">
                                <CardBody className="p-6 pt-8 pb-8">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                        <value.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {value.description}
                                    </p>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Expertise */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Technical <span className="text-cyan-400">Expertise</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Our team combines diverse technical skills with specialized knowledge of media technology stacks.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {expertise.map((skill, index) => (
                            <div key={index} className="bg-slate-800/70 backdrop-blur-sm border border-blue-800 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                                <h3 className="text-xl font-semibold text-white mb-3">{skill.category}</h3>
                                <p className="text-cyan-400 font-medium mb-3">{skill.technologies}</p>
                                <p className="text-gray-300">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Proven <span className="text-cyan-400">Results</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Track record of delivering high-performance digital solutions for media companies across Europe.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-blue-800">
                                <h3 className="text-3xl font-bold text-blue-400 mb-2">50+</h3>
                                <p className="text-white font-semibold mb-2">Media Platforms</p>
                                <p className="text-gray-300">successfully launched</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-cyan-800">
                                <h3 className="text-3xl font-bold text-cyan-400 mb-2">10M+</h3>
                                <p className="text-white font-semibold mb-2">Page Views</p>
                                <p className="text-gray-300">handled daily</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-blue-800">
                                <h3 className="text-3xl font-bold text-blue-400 mb-2">99.9%</h3>
                                <p className="text-white font-semibold mb-2">Uptime</p>
                                <p className="text-gray-300">guaranteed reliability</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-cyan-800">
                                <h3 className="text-3xl font-bold text-cyan-400 mb-2">24/7</h3>
                                <p className="text-white font-semibold mb-2">Support</p>
                                <p className="text-gray-300">for critical operations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-800 to-cyan-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Build Your Platform?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Let&apos;s discuss how we can help transform your digital presence and drive real business results.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-3">
                            Start the Conversation
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
