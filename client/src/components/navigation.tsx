import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/img/daifend_logo.png";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/offerings", label: "Offerings" },
    { path: "/research", label: "Research" },
    { path: "/live-threats", label: "Live Threats" },
    { path: "/resources", label: "Resources" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-cyber-dark/90 backdrop-blur-lg border-b border-cyber-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-cyber-cyan"
            >
              <img src={logo} alt="Daifend Logo" className="h-8" />
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <motion.span
                  whileHover={{ color: "hsl(183, 100%, 38%)" }}
                  className={`px-3 py-2 transition-colors duration-200 cursor-pointer ${
                    location === item.path
                      ? "text-cyber-cyan"
                      : "text-gray-300 hover:text-cyber-cyan"
                  }`}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/resources">
              <Button className="bg-cyber-cyan hover:bg-cyan-400 text-black font-medium cyber-glow-hover">
                Book Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyber-slate-800 border-t border-cyber-slate-700"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <motion.span
                    whileHover={{ x: 10 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 transition-colors duration-200 cursor-pointer ${
                      location === item.path
                        ? "text-cyber-cyan"
                        : "text-gray-300 hover:text-cyber-cyan"
                    }`}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
              <Link href="/resources">
                <Button 
                  className="w-full bg-cyber-cyan hover:bg-cyan-400 text-black font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
