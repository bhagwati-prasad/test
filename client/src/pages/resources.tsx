import { motion } from "framer-motion";
import ContactForm from "../components/contact-form";
import { Clock, Shield, Users, Download, FileText, Video, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Resources() {
  const features = [
    {
      icon: Clock,
      title: "24/7 AI Monitoring",
      description: "Continuous threat detection and response"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "SOC 2 Type II, ISO 27001 certified"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated cybersecurity specialists"
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: "AI Security Whitepaper",
      description: "Comprehensive guide to AI-native cybersecurity strategies",
      type: "PDF",
      color: "text-cyber-cyan"
    },
    {
      icon: Video,
      title: "Platform Demo Video",
      description: "See Daifend's AI defense systems in action",
      type: "Video",
      color: "text-cyber-violet"
    },
    {
      icon: Download,
      title: "Threat Intelligence Report",
      description: "Latest insights on AI-powered attack trends",
      type: "Report",
      color: "text-cyber-emerald"
    },
    {
      icon: Calendar,
      title: "Webinar Series",
      description: "Monthly expert sessions on emerging threats",
      type: "Webinar",
      color: "text-cyber-amber"
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
              Resources & Contact
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Access expert insights, research, and get in touch with our AI cybersecurity specialists to secure your organization's future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-cyber-slate-900 to-cyber-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information & Features */}
            <div className="relative">
              {/* AI defense architecture visualization */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <img 
                  src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
                  alt="AI defense architecture and cybersecurity visualization" 
                  className="rounded-2xl shadow-2xl opacity-80" 
                />
              </motion.div>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyber-cyan to-cyber-blue rounded-lg flex items-center justify-center">
                      <feature.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-gradient">
              Expert Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest research, insights, and best practices in AI cybersecurity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-cyber-slate-800/50 backdrop-blur-sm rounded-2xl p-8 cyber-border-glow hover:border-cyber-cyan transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${resource.color} group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">{resource.title}</h3>
                      <span className={`text-xs px-3 py-1 rounded-full ${resource.color} bg-opacity-20`}>
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{resource.description}</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black group-hover:scale-105 transition-all duration-300"
                    >
                      <Download className="mr-2" size={16} />
                      Access Resource
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-cyber-slate-900 to-cyber-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 cyber-text-gradient">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                question: "How does AI-native cybersecurity differ from traditional security?",
                answer: "AI-native cybersecurity leverages machine learning and artificial intelligence at its core, rather than as an add-on. This enables real-time threat detection, autonomous response capabilities, and predictive defense mechanisms that adapt to emerging threats."
              },
              {
                question: "What types of AI-powered attacks can Daifend defend against?",
                answer: "Our platform defends against AI-generated phishing, deepfake attacks, LLM exploits, autonomous malware, synthetic media manipulation, and other advanced persistent threats powered by artificial intelligence."
              },
              {
                question: "How quickly can Daifend be deployed in our environment?",
                answer: "Deployment typically takes 2-4 weeks depending on your infrastructure complexity. Our team provides comprehensive onboarding, integration support, and training to ensure smooth implementation."
              },
              {
                question: "Is Daifend suitable for enterprises of all sizes?",
                answer: "Yes, our solutions scale from mid-market companies to Fortune 500 enterprises. We offer flexible deployment options including cloud, hybrid, and on-premises configurations to meet your specific requirements."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-cyber-slate-800/50 backdrop-blur-sm rounded-2xl p-8 cyber-border-glow"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-cyber-emerald flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
