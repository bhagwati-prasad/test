import { motion } from "framer-motion";

export function NetworkNodesGif() {
  return (
    <div className="absolute inset-0 opacity-30 overflow-hidden">
      <svg 
        className="w-full h-full" 
        viewBox="0 0 1920 1080" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="nodeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(183, 100%, 38%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {/* Animated network nodes */}
        <g>
          {[...Array(12)].map((_, i) => {
            const x = 200 + (i * 150);
            const y = 200 + Math.sin(i * 0.5) * 100;
            return (
              <g key={i}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="url(#nodeGlow)"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2 + (i * 0.2),
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Connection lines */}
                {i < 11 && (
                  <motion.line
                    x1={x}
                    y1={y}
                    x2={200 + ((i + 1) * 150)}
                    y2={200 + Math.sin((i + 1) * 0.5) * 100}
                    stroke="url(#nodeGlow)"
                    strokeWidth="2"
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                )}
              </g>
            );
          })}
        </g>
        
        {/* Data packets moving along connections */}
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={`packet-${i}`}
            r="3"
            fill="hsl(183, 100%, 38%)"
            animate={{
              x: [200, 1720],
              y: [200 + Math.sin(i * 0.5) * 100, 200 + Math.sin((i + 10) * 0.5) * 100],
            }}
            transition={{
              duration: 4 + (i * 0.5),
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.8
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function MatrixRainGif() {
  return (
    <div className="absolute inset-0 opacity-20 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1920 1080">
        <defs>
          <linearGradient id="matrixGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(160, 84%, 39%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(160, 84%, 39%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(160, 84%, 39%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {[...Array(40)].map((_, i) => (
          <motion.rect
            key={i}
            x={i * 48}
            y={0}
            width="2"
            height="120"
            fill="url(#matrixGradient)"
            animate={{
              y: [-120, 1200],
            }}
            transition={{
              duration: 3 + (i * 0.1),
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function ThreatScannerGif() {
  return (
    <div className="absolute inset-0 opacity-25 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1920 1080">
        <defs>
          <linearGradient id="scanLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(183, 100%, 38%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(183, 100%, 38%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(183, 100%, 38%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Horizontal scanning lines */}
        <motion.rect
          x={0}
          y={0}
          width="100%"
          height="4"
          fill="url(#scanLine)"
          animate={{
            y: [0, 1080],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.rect
          x={0}
          y={0}
          width="100%"
          height="2"
          fill="hsl(217, 91%, 60%)"
          opacity={0.6}
          animate={{
            y: [1080, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5
          }}
        />
        
        {/* Grid overlay */}
        <g opacity={0.3}>
          {[...Array(20)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1={0}
              y1={i * 54}
              x2={1920}
              y2={i * 54}
              stroke="hsl(183, 100%, 38%)"
              strokeWidth="1"
              opacity={0.2}
            />
          ))}
          {[...Array(40)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 48}
              y1={0}
              x2={i * 48}
              y2={1080}
              stroke="hsl(183, 100%, 38%)"
              strokeWidth="1"
              opacity={0.1}
            />
          ))}
        </g>
        
        {/* Alert indicators */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={`alert-${i}`}
            cx={200 + (i * 200)}
            cy={200 + Math.sin(i * 1.2) * 150}
            r="6"
            fill="hsl(0, 84%, 60%)"
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function DataFlowGif() {
  return (
    <div className="absolute inset-0 opacity-20 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1920 1080">
        <defs>
          <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(263, 70%, 50%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(263, 70%, 50%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(263, 70%, 50%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Data streams */}
        {[...Array(12)].map((_, i) => (
          <motion.path
            key={i}
            d={`M0,${100 + i * 80} Q960,${50 + i * 80} 1920,${100 + i * 80}`}
            stroke="url(#dataFlow)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="20,10"
            animate={{
              strokeDashoffset: [-30, 0],
            }}
            transition={{
              duration: 2 + (i * 0.1),
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Data packets */}
        {[...Array(15)].map((_, i) => (
          <motion.rect
            key={`data-${i}`}
            width="8"
            height="4"
            fill="hsl(43, 96%, 56%)"
            rx="2"
            animate={{
              x: [-20, 1940],
              y: [100 + (i % 12) * 80, 100 + (i % 12) * 80],
            }}
            transition={{
              duration: 3 + (i * 0.1),
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2
            }}
          />
        ))}
      </svg>
    </div>
  );
}