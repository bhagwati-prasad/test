import { motion } from "framer-motion";
import HeroSection from "../components/hero-section";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Brain, RotateCcw, Lock, Swords, Scale, Star } from "lucide-react";
import { MatrixRainGif, DataFlowGif } from "../components/cyber-gif-backgrounds";

export default function Landing() {
  const offerings = [
    {
      icon: Shield,
      title: "AI Security Strategy",
      description: "Comprehensive AI security roadmap with risk identification, governance, and regulatory compliance alignment.",
      features: ["AI risk identification & mitigation", "Secure AI model lifecycle governance", "NIST AI RMF & EU AI Act compliance"],
      color: "from-cyber-cyan to-cyber-blue",
      hoverColor: "hover:border-cyber-cyan"
    },
    {
      icon: Brain,
      title: "Cybersecurity LLM",
      description: "Custom-trained LLMs for real-time threat detection, analysis, and automated response generation.",
      features: ["Context-aware incident summarization", "Autonomous playbook execution", "Natural language SIEM/XDR queries"],
      color: "from-cyber-violet to-purple-600",
      hoverColor: "hover:border-cyber-violet"
    },
    {
      icon: RotateCcw,
      title: "Self-Healing Systems",
      description: "Autonomous resilience with real-time anomaly detection and automatic corrective actions.",
      features: ["Real-time anomaly detection", "Dynamic patch management", "AI-based risk scoring"],
      color: "from-cyber-emerald to-green-600",
      hoverColor: "hover:border-cyber-emerald"
    },
    {
      icon: Lock,
      title: "LLM Security",
      description: "Comprehensive security for LLM deployment with prompt injection protection and output sanitization.",
      features: ["Prompt injection protection", "Output sanitization filters", "Access control & session integrity"],
      color: "from-cyber-amber to-yellow-600",
      hoverColor: "hover:border-cyber-amber"
    },
    {
      icon: Swords,
      title: "AI Defense",
      description: "Active defense against malicious AI including deepfakes, AI-powered phishing, and generative attacks.",
      features: ["Deepfake detection systems", "AI-based phishing defense", "Cognitive honeypots"],
      color: "from-cyber-red to-red-600",
      hoverColor: "hover:border-cyber-red"
    },
    {
      icon: Scale,
      title: "Responsible AI Assessment",
      description: "Comprehensive AI system evaluation across ethical, legal, and technical dimensions for responsible deployment.",
      features: ["Bias & fairness assessment", "Privacy risk evaluation", "Regulatory compliance scoring"],
      color: "from-cyber-blue to-blue-600",
      hoverColor: "hover:border-cyber-blue"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CISO, Fortune 500 Technology Company",
      content: "Daifend's AI security platform has transformed our threat detection capabilities. Their self-healing systems reduced our incident response time by 85% while maintaining zero false positives.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Security, Global Financial Institution",
      content: "The cybersecurity LLM has revolutionized how our SOC team handles threats. Complex incidents that used to take hours are now resolved in minutes with automated playbook execution.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief AI Officer, Healthcare Enterprise",
      content: "Daifend's responsible AI assessment gave us the confidence to deploy AI systems at scale. Their comprehensive evaluation framework ensures both security and compliance.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-dark">
      <HeroSection />
      
      {/* Offerings Preview Section */}
      <section className="relative py-20 bg-gradient-to-b from-cyber-dark to-cyber-slate-900 overflow-hidden">
        <MatrixRainGif />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-gradient">
              AI Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-native cybersecurity solutions built to defend against evolving threats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group bg-cyber-slate-800/50 backdrop-blur-sm rounded-2xl p-8 cyber-border-glow ${offering.hoverColor} transition-all duration-300`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${offering.color} rounded-lg flex items-center justify-center mr-4`}>
                    <offering.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{offering.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {offering.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {offering.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <ChevronRight className="text-cyber-emerald mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center"
          >
            <Link href="/offerings">
              <Button className="bg-cyber-cyan hover:bg-cyan-400 text-black font-semibold px-8 py-4">
                Explore All Solutions
                <ChevronRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-cyber-slate-900 to-cyber-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-gradient">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by leading organizations worldwide for AI-native cybersecurity solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-cyber-slate-800/50 backdrop-blur-sm rounded-2xl p-8 cyber-border-glow hover:border-cyber-cyan transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyber-cyan to-cyber-blue rounded-full flex items-center justify-center mr-4">
                    <Shield className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex text-cyber-cyan">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-cyber-dark to-cyber-slate-900 overflow-hidden">
        <DataFlowGif />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="cyber-bg-gradient rounded-3xl p-12 cyber-border-glow"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-gradient">
              Secure Your AI Future Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading organizations in building AI-native cyber defense. Book a personalized demo to see Daifend in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources">
                <Button className="bg-cyber-cyan hover:bg-cyan-400 text-black font-semibold px-8 py-4 animate-pulse-glow">
                  Book Demo
                </Button>
              </Link>
              <Link href="/offerings">
                <Button variant="outline" className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-semibold px-8 py-4">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
