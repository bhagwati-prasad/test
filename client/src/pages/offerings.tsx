import { motion } from "framer-motion";
import { Shield, Brain, RotateCcw, Lock, Swords, Scale, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Offerings() {
  const offerings = [
    {
      icon: Shield,
      title: "AI Security Strategy",
      description: "We help organizations craft and execute a comprehensive AI security roadmap. This includes integrating AI into your cybersecurity fabric while ensuring it is safe, interpretable, and aligned with business goals.",
      keyComponents: [
        "AI risk identification and mitigation planning",
        "Secure AI model lifecycle governance", 
        "AI red-teaming and adversarial robustness assessments",
        "Integration strategy with legacy cybersecurity systems",
        "Regulatory and compliance alignment (e.g., NIST AI RMF, EU AI Act)"
      ],
      outcomes: [
        "AI-aware cyber posture",
        "Clear governance and controls for AI use",
        "Secure-by-design AI development"
      ],
      color: "from-cyber-cyan to-cyber-blue",
      borderColor: "hover:border-cyber-cyan"
    },
    {
      icon: Brain,
      title: "Cybersecurity LLM",
      description: "Our custom-trained cybersecurity LLMs are designed to detect, interpret, and respond to complex cyber threats in real time. These models act as intelligent assistants for your SOC and Threat Intelligence teams.",
      keyComponents: [
        "Context-aware incident summarization",
        "Threat report generation and translation",
        "Malware behavior pattern recognition",
        "Autonomous playbook execution",
        "Natural language query interface to your SIEM/XDR data"
      ],
      outcomes: [
        "Custom fine-tuned LLMs trained on threat intelligence",
        "MITRE ATT&CK framework integration",
        "Real-time malware dataset analysis"
      ],
      color: "from-cyber-violet to-purple-600",
      borderColor: "hover:border-cyber-violet"
    },
    {
      icon: RotateCcw,
      title: "Self-Healing Systems",
      description: "Move from reactive defense to autonomous resilience. Our self-healing systems detect anomalies, isolate threats, and automatically initiate corrective actions — all with minimal human intervention.",
      keyComponents: [
        "Real-time anomaly detection & root cause diagnosis",
        "Dynamic patch management and config rollback",
        "Behavioral policy enforcement",
        "AI-based risk scoring and response prioritization",
        "Integration with orchestration tools (SOAR, Kubernetes, cloud infra)"
      ],
      outcomes: [
        "Downtime reduction",
        "Automated threat containment",
        "Continuous system hardening"
      ],
      color: "from-cyber-emerald to-green-600",
      borderColor: "hover:border-cyber-emerald"
    },
    {
      icon: Lock,
      title: "LLM Security",
      description: "We secure the deployment and usage of large language models across enterprise environments. From prompt injection to data leakage — we help mitigate LLM-specific attack vectors.",
      keyComponents: [
        "Prompt injection and jailbreak protection",
        "Output sanitization and hallucination filters",
        "Guardrails for safe response generation",
        "Access control and session integrity",
        "Fine-tuning with secure, domain-specific datasets"
      ],
      outcomes: [
        "Prevent LLM misuse",
        "Ensure operational trust",
        "Maintain AI agent integrity"
      ],
      color: "from-cyber-amber to-yellow-600",
      borderColor: "hover:border-cyber-amber"
    },
    {
      icon: Swords,
      title: "AI Defense",
      description: "Daifend equips you to defend against malicious AI — not just with AI. We build active defenses against generative attacks, AI-powered phishing, deepfakes, and automated adversaries.",
      keyComponents: [
        "Deepfake and synthetic content detection",
        "AI-based phishing defense",
        "GenAI attack detection (e.g., LLM-generated malware/code)",
        "Adversarial input detection and defense",
        "Cognitive honeypots and deception systems"
      ],
      outcomes: [
        "Defense systems built to understand AI attacks",
        "Human-expert level response speed",
        "Proactive threat neutralization"
      ],
      color: "from-cyber-red to-red-600",
      borderColor: "hover:border-cyber-red"
    },
    {
      icon: Scale,
      title: "Responsible AI Assessment",
      description: "Security starts with responsibility. We help you evaluate your AI systems across ethical, legal, and technical dimensions to ensure responsible AI deployment.",
      keyComponents: [
        "Bias, fairness, and discrimination checks",
        "Explainability and transparency scoring",
        "Privacy risk (PII exposure, model inversion)",
        "Compliance with AI governance frameworks",
        "Documentation (Model cards, Datasheets for datasets)"
      ],
      outcomes: [
        "Trusted AI for security-critical systems",
        "Transparency for board-level reporting",
        "Regulatory compliance assurance"
      ],
      color: "from-cyber-blue to-blue-600",
      borderColor: "hover:border-cyber-blue"
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
              Securing the Future with Intelligent Cyber Defense
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At Daifend, our suite of cutting-edge offerings is built to help enterprises navigate the evolving threat landscape using AI-native, proactive, and intelligent security systems. Our capabilities span from foundational AI security strategy to fully autonomous self-healing cybersecurity systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-20 bg-gradient-to-b from-cyber-slate-900 to-cyber-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group bg-cyber-slate-800/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 cyber-border-glow ${offering.borderColor} transition-all duration-500`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${offering.color} rounded-2xl flex items-center justify-center mr-6`}>
                        <offering.icon className="text-white" size={32} />
                      </div>
                      <h2 className="text-3xl font-bold text-white">{offering.title}</h2>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-cyber-cyan mb-4">Overview</h3>
                      <p className="text-gray-300 leading-relaxed">{offering.description}</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-cyber-cyan mb-4">Outcomes</h3>
                      <div className="space-y-3">
                        {offering.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="text-cyber-emerald mr-3 flex-shrink-0" size={20} />
                            <span className="text-gray-300">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-cyber-cyan mb-6">Key Components</h3>
                    <div className="space-y-4">
                      {offering.keyComponents.map((component, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ x: 50, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start group"
                        >
                          <ArrowRight className="text-cyber-cyan mr-3 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" size={16} />
                          <span className="text-gray-300 leading-relaxed">{component}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="mt-8"
                    >
                      <Button className={`w-full bg-gradient-to-r ${offering.color} text-white font-semibold py-4 hover:shadow-xl transition-all duration-300`}>
                        Learn More About {offering.title}
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="cyber-bg-gradient rounded-3xl p-12 cyber-border-glow"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-gradient">
              Ready to Transform Your Security?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how our AI-native cybersecurity solutions can protect your organization from emerging threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources">
                <Button className="bg-cyber-cyan hover:bg-cyan-400 text-black font-semibold px-8 py-4 animate-pulse-glow">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/research">
                <Button variant="outline" className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-semibold px-8 py-4">
                  Explore Research
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
