import { motion } from "framer-motion";
import ThreatDashboard from "../components/threat-dashboard";
import { Activity, Shield, Zap, Eye, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function LiveThreats() {
  const threatMetrics = [
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      value: "24/7",
      description: "Continuous AI-powered threat detection across all enterprise endpoints",
      color: "text-cyber-cyan"
    },
    {
      icon: Shield,
      title: "Threats Blocked",
      value: "99.7%",
      description: "Success rate in preventing AI-generated attacks",
      color: "text-cyber-emerald"
    },
    {
      icon: Zap,
      title: "Response Time",
      value: "0.3s",
      description: "Average time from threat detection to automated response",
      color: "text-cyber-amber"
    },
    {
      icon: Eye,
      title: "Active Investigations",
      value: "47",
      description: "Ongoing AI-assisted threat analysis and forensics",
      color: "text-cyber-violet"
    }
  ];

  const threatTypes = [
    {
      name: "AI-Generated Phishing",
      percentage: 34,
      trend: "+12%",
      severity: "high",
      color: "bg-cyber-red"
    },
    {
      name: "Deepfake Attacks", 
      percentage: 22,
      trend: "+8%",
      severity: "medium",
      color: "bg-cyber-amber"
    },
    {
      name: "LLM Exploits",
      percentage: 18,
      trend: "+15%",
      severity: "high",
      color: "bg-cyber-cyan"
    },
    {
      name: "Autonomous Malware",
      percentage: 16,
      trend: "+5%",
      severity: "critical",
      color: "bg-cyber-violet"
    },
    {
      name: "Synthetic Media",
      percentage: 10,
      trend: "+3%",
      severity: "medium",
      color: "bg-cyber-emerald"
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
              Live Threat Intelligence
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Real-time monitoring and analysis of emerging cyber threats powered by AI. Our intelligent defense systems provide continuous protection against the latest attack vectors.
            </p>
          </motion.div>

          {/* Threat Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {threatMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-cyber-slate-800/50 backdrop-blur-sm rounded-2xl p-6 cyber-border-glow hover:border-cyber-cyan transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <metric.icon className={`${metric.color} mr-3`} size={24} />
                  <h3 className="text-lg font-semibold text-white">{metric.title}</h3>
                </div>
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="py-20 bg-gradient-to-b from-cyber-slate-900 to-cyber-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 cyber-text-gradient text-center">
              Real-Time Threat Dashboard
            </h2>
            <ThreatDashboard />
          </motion.div>
        </div>
      </section>

      {/* Threat Analysis */}
      <section className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Threat Types */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="bg-cyber-slate-800/50 backdrop-blur-sm rounded-2xl p-8 cyber-border-glow"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Top Threat Categories</h3>
              <div className="space-y-6">
                {threatTypes.map((threat, index) => (
                  <motion.div
                    key={threat.name}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{threat.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400">{threat.percentage}%</span>
                        <span className={`text-sm ${threat.trend.startsWith('+') ? 'text-cyber-red' : 'text-cyber-emerald'}`}>
                          {threat.trend}
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-cyber-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${threat.percentage}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                        className={`${threat.color} h-2 rounded-full`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* AI Defense Status */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="space-y-8"
            >
              <div className="bg-cyber-slate-800/50 backdrop-blur-sm rounded-2xl p-8 cyber-border-glow">
                <h3 className="text-2xl font-bold text-white mb-6">AI Defense Systems</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Shield className="text-cyber-emerald mr-3" size={24} />
                      <span className="text-white">Neural Threat Detection</span>
                    </div>
                    <span className="text-cyber-emerald font-semibold">ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Eye className="text-cyber-cyan mr-3" size={24} />
                      <span className="text-white">Behavioral Analysis Engine</span>
                    </div>
                    <span className="text-cyber-cyan font-semibold">SCANNING</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Zap className="text-cyber-amber mr-3" size={24} />
                      <span className="text-white">Automated Response System</span>
                    </div>
                    <span className="text-cyber-amber font-semibold">READY</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TrendingUp className="text-cyber-violet mr-3" size={24} />
                      <span className="text-white">Predictive Modeling</span>
                    </div>
                    <span className="text-cyber-violet font-semibold">LEARNING</span>
                  </div>
                </div>
              </div>

              <div className="bg-cyber-slate-800/50 backdrop-blur-sm rounded-2xl p-8 cyber-border-glow">
                <h3 className="text-xl font-bold text-white mb-4">Alert Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <AlertTriangle className="text-cyber-red mr-3" size={20} />
                    <span className="text-gray-300">3 Critical alerts requiring attention</span>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="text-cyber-amber mr-3" size={20} />
                    <span className="text-gray-300">12 Medium priority incidents</span>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="text-cyber-cyan mr-3" size={20} />
                    <span className="text-gray-300">47 Low priority events</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-cyber-slate-900 to-cyber-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="cyber-bg-gradient rounded-3xl p-12 cyber-border-glow"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-gradient">
              Stay Ahead of Emerging Threats
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Deploy our AI-powered threat intelligence platform to protect your organization from the latest attack vectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources">
                <Button className="bg-cyber-cyan hover:bg-cyan-400 text-black font-semibold px-8 py-4 animate-pulse-glow">
                  Request Demo
                </Button>
              </Link>
              <Link href="/offerings">
                <Button variant="outline" className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-semibold px-8 py-4">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
