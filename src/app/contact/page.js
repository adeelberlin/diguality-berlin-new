"use client";
import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Card, CardBody, CardHeader, CardTitle, Form } from "react-bootstrap";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const form = useState({
        defaultValues: {
            name: "",
            email: "",
            company: "",
            message: "",
        },
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log("Form submitted:", data);

        form.reset();
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
            {/* Hero Section */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                        Ready to transform your media operations? Let&apos;s discuss your project and explore how we can help you succeed.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <Card className="bg-slate-800/70 backdrop-blur-sm border-blue-800/50 p-6 pt-0">
                            <CardHeader>
                                <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form {...form}>
                                    <form onSubmit={onSubmit}>
                                        <div className="space-y-6">
                                            <div>
                                                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300">
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-700/80 border-blue-800 text-white placeholder:text-gray-400 focus:border-cyan-400"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-700/80 border-blue-800 text-white placeholder:text-gray-400 focus:border-cyan-400"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300">
                                                    Subject
                                                </label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={form.subject}
                                                    onChange={handleChange}
                                                    className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-700/80 border-blue-800 text-white placeholder:text-gray-400 focus:border-cyan-400"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300">
                                                    Message
                                                </label>
                                                <textarea
                                                    style={{ height: '161px' }}
                                                    id="message"
                                                    name="message"
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    rows={5}
                                                    className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-700/80 border-blue-800 text-white placeholder:text-gray-400 focus:border-cyan-400"
                                                    required
                                                ></textarea>
                                            </div>

                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 rounded-md px-8 w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold"
                                            >
                                                <span>Send Message</span>
                                                <Send className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </form>
                                </Form>
                            </CardBody>
                        </Card>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">Let&apos;s Start a Conversation</h2>
                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    Whether you&apos;re looking to modernize your content management system, optimize your distribution network,
                                    or implement cutting-edge analytics, we&apos;re here to help make your vision a reality.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <Card className="bg-slate-800/70 backdrop-blur-sm border-blue-800/50 hover:border-cyan-400/50 transition-all duration-300">
                                    <CardBody className="p-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                                                <MapPin className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white text-lg">Location</h3>
                                                <p className="text-gray-300">Unter den Linden 10, 10117 Berlin, Germany</p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>

                                <Card className="bg-slate-800/70 backdrop-blur-sm border-blue-800/50 hover:border-cyan-400/50 transition-all duration-300">
                                    <CardBody className="p-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                                                <Mail className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white text-lg">Email</h3>
                                                <p className="text-gray-300">digualitycloud@proton.me</p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>

                                <Card className="bg-slate-800/70 backdrop-blur-sm border-blue-800/50 hover:border-cyan-400/50 transition-all duration-300">
                                    <CardBody className="p-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">

                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white text-lg">Phone</h3>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 rounded-2xl p-6 border border-blue-800/50">
                                <h3 className="text-xl font-semibold text-white mb-4">Response Time</h3>
                                <p className="text-gray-300">
                                    We typically respond to all inquiries within <span className="text-cyan-400 font-semibold">24 hours</span>.
                                    For urgent matters, please mention it in your message.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
