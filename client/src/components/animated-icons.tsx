import { motion } from "framer-motion";
import { Shield, Lock, Brain, Zap, Eye, Cpu } from "lucide-react";

export default function AnimatedIcons() {
  const icons = [
    { Icon: Shield, color: "text-cyber-cyan", position: { top: "25%", left: "10%" }, delay: 0.5 },
    { Icon: Lock, color: "text-cyber-violet", position: { top: "33%", right: "10%" }, delay: 1 },
    { Icon: Brain, color: "text-cyber-blue", position: { bottom: "25%", left: "25%" }, delay: 1.5 },
    { Icon: Zap, color: "text-cyber-amber", position: { top: "60%", right: "20%" }, delay: 2 },
    { Icon: Eye, color: "text-cyber-emerald", position: { bottom: "40%", right: "35%" }, delay: 2.5 },
    { Icon: Cpu, color: "text-cyber-red", position: { top: "70%", left: "15%" }, delay: 3 },
  ];

  return (
    <>
      {icons.map(({ Icon, color, position, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} opacity-30`}
          style={position}
          initial={{ scale: 0, rotate: 0 }}
          animate={{ 
            scale: [0, 1.2, 1], 
            rotate: [0, 180, 360],
            y: [0, -10, 0]
          }}
          transition={{ 
            delay,
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}
    </>
  );
}
