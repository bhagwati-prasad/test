import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Rocket, Calendar } from "lucide-react";
import AnimatedIcons from "./animated-icons";
import { NetworkNodesGif, ThreatScannerGif } from "./cyber-gif-backgrounds";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated GIF-like backgrounds */}
      <div className="absolute inset-0 cyber-bg-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <NetworkNodesGif />
        <ThreatScannerGif />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="animate-float"
        >
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 cyber-text-gradient"
          >
            AI-Native Cyber Defense
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Securing the Future with Intelligent Cyber Defense. Daifend delivers cutting-edge AI security solutions to help enterprises navigate the evolving threat landscape.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button className="bg-cyber-cyan hover:bg-cyan-400 text-black font-semibold px-8 py-4 animate-pulse-glow">
            <Rocket className="mr-2 h-5 w-5" />
            Build AI Defense
          </Button>
          <Link href="/resources">
            <Button variant="outline" className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-semibold px-8 py-4">
              <Calendar className="mr-2 h-5 w-5" />
              Book Demo
            </Button>
          </Link>
        </motion.div>

        {/* Client Trust Indicators */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-8">Trusted by Leading Organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <motion.div 
              whileHover={{ scale: 1.05, opacity: 1 }}
              className="bg-cyber-slate-800 px-6 py-3 rounded-lg cyber-border-glow"
            >
              <span className="text-gray-300 font-medium">Enterprise Companies</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, opacity: 1 }}
              className="bg-cyber-slate-800 px-6 py-3 rounded-lg cyber-border-glow"
            >
              <span className="text-gray-300 font-medium">Government Agencies</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, opacity: 1 }}
              className="bg-cyber-slate-800 px-6 py-3 rounded-lg cyber-border-glow"
            >
              <span className="text-gray-300 font-medium">AI Research Labs</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating animated icons */}
      <AnimatedIcons />
    </section>
  );
}
