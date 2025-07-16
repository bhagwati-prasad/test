import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ThreatData {
  level: string;
  color: string;
  threats: number;
  detectionRate: number;
  responseTime: string;
  activeShields: number;
}

export default function ThreatDashboard() {
  const [threatData, setThreatData] = useState<ThreatData>({
    level: "HIGH",
    color: "text-cyber-amber",
    threats: 1247,
    detectionRate: 99.7,
    responseTime: "0.3s",
    activeShields: 7
  });

  const [threatStream, setThreatStream] = useState([
    { time: "13:42:15", type: "AI-generated phishing", source: "192.168.1.45", status: "BLOCKED", color: "text-cyber-red" },
    { time: "13:41:52", type: "Suspicious LLM query pattern", source: "internal", status: "ANALYZING", color: "text-cyber-amber" },
    { time: "13:41:33", type: "Deepfake attempt on auth", source: "external", status: "BLOCKED", color: "text-cyber-cyan" },
    { time: "13:41:08", type: "Autonomous malware signature", source: "network", status: "QUARANTINED", color: "text-cyber-violet" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newThreat = {
        time: new Date().toLocaleTimeString(),
        type: "New threat detected",
        source: "unknown",
        status: "ANALYZING",
        color: "text-cyber-cyan"
      };
      setThreatStream(prev => [newThreat, ...prev.slice(0, 3)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-cyber-slate-800/50 backdrop-blur-sm rounded-2xl p-8 cyber-border-glow">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Global Threat Level */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-cyber-dark/80 rounded-xl p-6 cyber-border-glow"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Global Threat Level</h3>
          <div className="flex items-center justify-center">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative w-24 h-24"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-amber to-cyber-red rounded-full animate-pulse-glow"></div>
              <div className="absolute inset-2 bg-cyber-dark rounded-full flex items-center justify-center">
                <span className={`text-2xl font-bold ${threatData.color}`}>{threatData.level}</span>
              </div>
            </motion.div>
          </div>
          <p className="text-center text-gray-400 mt-4">Current Status: Elevated</p>
        </motion.div>

        {/* Active Threats */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-cyber-dark/80 rounded-xl p-6 cyber-border-glow"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Active Threats Detected</h3>
          <div className="text-center">
            <motion.div 
              key={threatData.threats}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="text-4xl font-bold text-cyber-red mb-2"
            >
              {threatData.threats.toLocaleString()}
            </motion.div>
            <p className="text-gray-400">In the last 24 hours</p>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">AI-Generated Phishing</span>
              <span className="text-cyber-red">34%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Deepfake Attacks</span>
              <span className="text-cyber-amber">22%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">LLM Exploits</span>
              <span className="text-cyber-cyan">18%</span>
            </div>
          </div>
        </motion.div>

        {/* AI Defense Status */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-cyber-dark/80 rounded-xl p-6 cyber-border-glow"
        >
          <h3 className="text-lg font-semibold text-white mb-4">AI Defense Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Detection Rate</span>
              <span className="text-cyber-emerald font-semibold">{threatData.detectionRate}%</span>
            </div>
            <div className="w-full bg-cyber-slate-700 rounded-full h-2">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${threatData.detectionRate}%` }}
                transition={{ delay: 0.5, duration: 1 }}
                className="bg-gradient-to-r from-cyber-emerald to-green-400 h-2 rounded-full"
              ></motion.div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Response Time</span>
              <span className="text-cyber-cyan font-semibold">{threatData.responseTime}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Active Shields</span>
              <span className="text-cyber-blue font-semibold">{threatData.activeShields}/7</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Threat Stream Visualization */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-cyber-dark/80 rounded-xl p-6 cyber-border-glow"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Real-Time Threat Stream</h3>
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent">
            <div className="space-y-3">
              {threatStream.map((threat, index) => (
                <motion.div
                  key={`${threat.time}-${index}`}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex items-center space-x-4 text-sm"
                >
                  <motion.span 
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className={`w-2 h-2 rounded-full ${threat.color.replace('text-', 'bg-')}`}
                  ></motion.span>
                  <span className={threat.color}>{threat.time}</span>
                  <span className="text-gray-300 flex-1">{threat.type}</span>
                  <span className="text-cyber-emerald">{threat.status}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Scanning line effect */}
          <motion.div 
            animate={{ x: [-100, window.innerWidth] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
}
