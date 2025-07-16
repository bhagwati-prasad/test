import { motion } from "framer-motion";
import { AlertTriangle, Atom, FlaskConical, Bot, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { NetworkNodesGif, DataFlowGif } from "../components/cyber-gif-backgrounds";

export default function Research() {
  const researchAreas = [
    {
      icon: AlertTriangle,
      title: "AI-Powered Attacks",
      description: "With generative AI becoming weaponized, threat actors are building sophisticated AI-powered attack tools. Daifend studies these offensive capabilities to predict and neutralize them before they reach your enterprise.",
      researchAreas: [
        "LLM-generated phishing & social engineering",
        "Autonomous malware and zero-day discovery using AI",
        "AI-augmented ransomware and botnets",
        "Code generation & obfuscation using LLMs",
        "Automated penetration testing bots"
      ],
      whyItMatters: "We simulate, dissect, and defend against attacks powered by the very AI systems businesses are adopting — turning AI from a risk into a shield.",
      color: "from-cyber-red to-red-600",
      borderColor: "hover:border-cyber-red",
      bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
    },
    {
      icon: Atom,
      title: "Quantum Cryptography",
      description: "Quantum computing threatens to break today's cryptographic standards. Daifend's research explores both the risks and the new cryptographic frontiers to future-proof security.",
      researchAreas: [
        "Post-quantum cryptographic algorithm implementation",
        "Quantum key distribution (QKD) protocols",
        "Risk modeling of hybrid (quantum + classical) systems",
        "Quantum-resilient VPNs, storage, and identity systems",
        "NIST PQC algorithm benchmarking and transition planning"
      ],
      whyItMatters: "To prepare organizations for the quantum threat — not after it arrives, but before it materializes.",
      color: "from-cyber-cyan to-blue-600",
      borderColor: "hover:border-cyber-cyan",
      bgImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
    },
    {
      icon: FlaskConical,
      title: "AI Attack Simulations",
      description: "We build AI-driven simulation environments to test how cyber defenses respond to dynamic, intelligent threat agents — replicating real-world breaches in safe, controlled labs.",
      researchAreas: [
        "Autonomous red team agents using reinforcement learning",
        "Simulated insider threats and compromised LLMs",
        "Defensive posture benchmarking with synthetic threats",
        "Attack path prediction using graph neural networks",
        "Integration with SOC runbooks and real attack datasets"
      ],
      whyItMatters: "Insights to harden infrastructure and prepare blue teams for AI-era threats.",
      color: "from-cyber-violet to-purple-600",
      borderColor: "hover:border-cyber-violet",
      bgImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
    },
    {
      icon: Bot,
      title: "Agentic AI Security",
      description: "Multi-agent AI systems (like AutoGPT, open agents, or enterprise copilots) pose novel security challenges due to their autonomy and emergent behaviors. Daifend leads in researching how to secure agent-based architectures.",
      researchAreas: [
        "Autonomous agent governance and control",
        "Detection of rogue agent behavior", 
        "Agent-to-agent communication threat modeling",
        "Secure task delegation in agent swarms",
        "Zero-trust policies for agent orchestration"
      ],
      whyItMatters: "Agents that act on their own — whether in a business workflow or a malware framework — need a new paradigm of security. We're building that paradigm.",
      color: "from-cyber-emerald to-green-600",
      borderColor: "hover:border-cyber-emerald",
      bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-dark pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 cyber-text-gradient">
              Pioneering the Future of AI-Driven Cybersecurity
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At Daifend, our research is focused on anticipating the next generation of threats and building the technological foundations for secure, resilient, and trustworthy digital systems. We explore the intersection of advanced AI, cryptography, and cyber defense to stay ahead of the evolving adversarial landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gradient-to-b from-cyber-slate-900 to-cyber-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative overflow-hidden bg-cyber-slate-800/30 backdrop-blur-sm rounded-3xl cyber-border-glow ${area.borderColor} transition-all duration-500`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10">
                  <img 
                    src={area.bgImage} 
                    alt={`${area.title} research visualization`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="relative z-10 p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mr-6`}>
                          <area.icon className="text-white" size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-white">{area.title}</h2>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-cyber-cyan mb-4">Overview</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">{area.description}</p>
                        
                        <div className="bg-cyber-dark/50 rounded-xl p-6 cyber-border-glow">
                          <h4 className="text-md font-semibold text-cyber-emerald mb-3">Why it matters:</h4>
                          <p className="text-gray-300 leading-relaxed italic">{area.whyItMatters}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-cyber-cyan mb-6">Research Areas</h3>
                      <div className="space-y-4 mb-8">
                        {area.researchAreas.map((research, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start group"
                          >
                            <ArrowRight className="text-cyber-cyan mr-3 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" size={16} />
                            <span className="text-gray-300 leading-relaxed">{research}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <motion.div whileHover={{ scale: 1.02 }}>
                          <Button className={`w-full bg-gradient-to-r ${area.color} text-white font-semibold py-4 hover:shadow-xl transition-all duration-300`}>
                            <ExternalLink className="mr-2" size={20} />
                            View Research Papers
                          </Button>
                        </motion.div>
                        
                        <motion.div whileHover={{ scale: 1.02 }}>
                          <Button variant="outline" className="w-full border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-semibold py-4">
                            Join Research Program
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Collaboration */}
      <section className="relative py-20 bg-gradient-to-b from-cyber-dark to-cyber-slate-900 overflow-hidden">
        <NetworkNodesGif />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-gradient">
              Research Collaboration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with our research team to advance the frontier of AI cybersecurity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-cyber-slate-800/50 backdrop-blur-sm rounded-2xl p-8 cyber-border-glow hover:border-cyber-cyan transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Academic Partnerships</h3>
              <p className="text-gray-300 mb-6">Collaborate with leading universities on cutting-edge AI security research</p>
              <Button variant="outline" className="w-full border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black">
                Partner With Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-cyber-slate-800/50 backdrop-blur-sm rounded-2xl p-8 cyber-border-glow hover:border-cyber-violet transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Industry Research</h3>
              <p className="text-gray-300 mb-6">Joint research initiatives with Fortune 500 companies and government agencies</p>
              <Button variant="outline" className="w-full border-cyber-violet text-cyber-violet hover:bg-cyber-violet hover:text-black">
                Explore Opportunities
              </Button>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-cyber-slate-800/50 backdrop-blur-sm rounded-2xl p-8 cyber-border-glow hover:border-cyber-emerald transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Open Source</h3>
              <p className="text-gray-300 mb-6">Contributing to the cybersecurity community through open research and tools</p>
              <Button variant="outline" className="w-full border-cyber-emerald text-cyber-emerald hover:bg-cyber-emerald hover:text-black">
                View Contributions
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-cyber-slate-900 to-cyber-dark overflow-hidden">
        <DataFlowGif />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="cyber-bg-gradient rounded-3xl p-12 cyber-border-glow"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-gradient">
              Join the Future of AI Security Research
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Be part of groundbreaking research that shapes the future of cybersecurity. Connect with our research team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources">
                <Button className="bg-cyber-cyan hover:bg-cyan-400 text-black font-semibold px-8 py-4 animate-pulse-glow">
                  Contact Research Team
                </Button>
              </Link>
              <Link href="/live-threats">
                <Button variant="outline" className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-semibold px-8 py-4">
                  View Live Research
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
