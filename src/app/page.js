
import { ArrowRight, Code, Monitor, Zap, Globe, BarChart3, Shield, Settings, CheckCircle, Award, Lightbulb, Heart, MapPin } from "lucide-react";
import Link from "next/link";
import { Badge, Button, Card, CardBody, CardHeader, CardTitle } from "react-bootstrap";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Our team of experienced software developers help clients create custom software solutions that meet their specific needs. Such as custom MAMs, cloud based media & broadcasting systems as well as OTT.",
      features: ["Custom MAMs", "Cloud Media Systems", "OTT Platforms", "Broadcasting Solutions"]
    },
    {
      icon: Settings,
      title: "Support and Maintenance",
      description: "We understand that software and systems can develop issues, which is why we offer ongoing support and maintenance services, for everything we do with industry standard service level agreements (SLAs).",
      features: ["24/7 Support", "Industry SLAs", "Proactive Monitoring", "Regular Updates"]
    },
    {
      icon: Monitor,
      title: "Integration Services",
      description: "Our team has extensive experience in integrating various media and broadcasting devices, including playout systems, prompters, and media asset management systems.",
      features: ["Playout Systems", "Prompter Integration", "MAM Systems", "Hybrid Solutions"]
    },
    {
      icon: CheckCircle,
      title: "QA Testing",
      description: "Our team of experienced QA professionals employs rigorous testing methodologies to identify and rectify potential issues, ensuring your software solutions meet the highest standards of quality.",
      features: ["Rigorous Testing", "Quality Assurance", "Bug Detection", "Performance Testing"]
    },
    {
      icon: BarChart3,
      title: "Advertisement Operations",
      description: "Our Advertisement Operations service is a comprehensive solution that covers every aspect of your marketing campaigns, from strategy to execution. We pride ourselves on our commitment to delivering results.",
      features: ["Campaign Strategy", "Ad Execution", "Performance Analytics", "ROI Optimization"]
    }
  ];

  const coreValues = [
    {
      icon: Award,
      title: "Best Quality",
      description: "We are committed to delivering top-quality software solutions that meet the unique needs of our clients. To achieve this, we prioritize continuous learning and innovation, always seeking out new technologies and approaches that can help us create the best possible products.",
      highlight: "Excellence in Every Project"
    },
    {
      icon: Heart,
      title: "Prioritize Client Relationships",
      description: "We believe in building strong, long-lasting relationships with our clients. We value transparency and honesty in all of our dealings, and we strive to create a collaborative and inclusive environment for all of our team members.",
      highlight: "Partnership-Focused Approach"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology",
      description: "Innovation and technology are at the heart of everything we do. We are constantly seeking out new and emerging technologies that can help us create the most innovative and effective software solutions for our clients.",
      highlight: "Cutting-Edge Solutions"
    }
  ];

  const clientTypes = [
    "News Outlets & Digital Publications",
    "Television Networks & Broadcasters",
    "Radio Stations & Podcast Networks",
    "Streaming Platforms & OTT Services",
    "Media Agencies & Production Houses",
    "Entertainment & Sports Networks"
  ];

  const solutionTypes = [
    {
      title: "On-Premises Solutions",
      description: "Secure, controlled environments for sensitive media operations",
      icon: Shield
    },
    {
      title: "Cloud Solutions",
      description: "Scalable, flexible cloud-based media platforms",
      icon: Globe
    },
    {
      title: "Hybrid Solutions",
      description: "Best of both worlds with hybrid infrastructure",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 mb-6 bg-blue-900/50 text-cyan-400 border-blue-700 backdrop-blur-sm">
              Digital Agency • Berlin, Germany
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Transforming{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Media & Broadcasting
              </span>
              {" "}with Technology
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              At Diguality UG, we are passionate about leveraging cutting-edge technology to transform the media and broadcasting industry.
              As a trusted partner, we specialize in crafting tailor-made software solutions that empower media companies to thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-8 py-3">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:text-accent-foreground h-11 rounded-md border-blue-500 text-cyan-400 hover:bg-blue-900/50 px-8 py-3">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-2000"></div>
        </div>
      </section>

      {/* Company Mission */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Our <span className="text-cyan-400">Mission</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our dedicated team of experts combines deep industry knowledge with innovative thinking to deliver solutions that enhance
            content management, distribution, and audience engagement. Whether it&apos;s streamlining workflows, optimizing production processes,
            or harnessing the power of data analytics, we&apos;re here to help our clients stay ahead of the curve.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Our <span className="text-cyan-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services are designed to be flexible and tailored to meet the unique needs of each of our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="rounded-lg border text-card-foreground shadow-sm group bg-slate-800/70 backdrop-blur-sm border-blue-800 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20">
                <CardHeader className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardBody className="flex flex-col space-y-1.5 p-6 pb-4">
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

      {/* Core Values */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Our <span className="text-cyan-400">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="rounded-lg border text-card-foreground shadow-sm group bg-slate-800/70 backdrop-blur-sm border-blue-800 hover:border-cyan-400 transition-all duration-300 text-center hover:shadow-xl hover:shadow-cyan-400/20">
                <CardBody className="p-6 pt-8 pb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {value.description}
                  </p>
                  <div className="text-sm font-semibold text-cyan-400 bg-blue-900/50 px-3 py-1 rounded-full inline-block">
                    {value.highlight}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Deployment <span className="text-cyan-400">Options</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in providing expert solutions including on-premises, cloud, and hybrid solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {solutionTypes.map((solution, index) => (
              <div key={index} className="bg-slate-800/70 backdrop-blur-sm border border-blue-800 rounded-2xl p-8 text-center hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-300">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Media <span className="text-cyan-400">Specialists</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We understand the unique challenges of the media industry and build solutions that address them directly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTypes.map((clientType, index) => (
              <div key={index} className="bg-slate-800/70 backdrop-blur-sm border border-blue-800 rounded-xl p-6 text-center hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                <h3 className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                  {clientType}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proven Results in Media Technology
            </h2>
            <p className="text-xl text-blue-100">
              Delivering excellence in digital solutions for media and broadcasting companies.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
                <p className="text-blue-100 font-semibold mb-2">Media Platforms</p>
                <p className="text-blue-200">launched successfully</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold text-white mb-2">10M+</h3>
                <p className="text-blue-100 font-semibold mb-2">Daily Page Views</p>
                <p className="text-blue-200">handled seamlessly</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold text-white mb-2">99.9%</h3>
                <p className="text-blue-100 font-semibold mb-2">Uptime</p>
                <p className="text-blue-200">guaranteed reliability</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
                <p className="text-blue-100 font-semibold mb-2">Support</p>
                <p className="text-blue-200">for critical operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Info */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Based in <span className="text-cyan-400">Berlin</span>
            </h2>
            <div className="flex items-center justify-center space-x-2 text-lg text-gray-300">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Unter den Linden 10, 10117 Berlin, Germany</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Media Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s build a digital platform that sets you apart from the competition and drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-8 py-3">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:text-accent-foreground h-11 rounded-md border-blue-500 text-cyan-400 hover:bg-blue-900/50 px-8 py-3">
                Learn Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
