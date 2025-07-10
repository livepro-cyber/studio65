import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

interface LoadingPageProps {
  onComplete: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast progress animation over 1000ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 200);
          return 100;
        }
        return prev + 8;
      });
    }, 80); // 80ms intervals for smooth animation

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center z-[500]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main content */}
      <div className="text-center space-y-8">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-lg" />
            <div className="relative bg-white border-2 border-orange-500/20 rounded-xl p-4 shadow-lg">
              <Building2 className="w-8 h-8 text-orange-500" strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>

        {/* Company name */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 tracking-[0.05em]">
            Studio65
          </h1>

          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent w-16" />
            <div className="w-2 h-2 bg-orange-500 rotate-45 rounded-sm" />
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent w-16" />
          </div>

          <p className="text-orange-500 text-lg tracking-[0.3em] font-medium uppercase">Architecture</p>
          <p className="text-orange-500 text-lg tracking-[0.3em] font-medium uppercase">Interior</p>
          <p className="text-orange-500 text-lg tracking-[0.3em] font-medium uppercase">Town Planning</p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="w-64 mx-auto space-y-3"
        >
          <div className="h-1 bg-orange-100 rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <span className="font-medium">LOADING</span>
            <span className="font-mono">{progress}%</span>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: progress > 40 ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Top corners */}
          <div className="absolute top-8 left-8 w-6 h-6 border-l-2 border-t-2 border-orange-500/30 rounded-tl-sm" />
          <div className="absolute top-8 right-8 w-6 h-6 border-r-2 border-t-2 border-orange-500/30 rounded-tr-sm" />

          {/* Bottom corners */}
          <div className="absolute bottom-8 left-8 w-6 h-6 border-l-2 border-b-2 border-orange-500/30 rounded-bl-sm" />
          <div className="absolute bottom-8 right-8 w-6 h-6 border-r-2 border-b-2 border-orange-500/30 rounded-br-sm" />
        </motion.div>

        {/* Floating particles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: progress > 60 ? 0.6 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-orange-400 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-500 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-700" />
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-orange-500 rounded-full animate-pulse delay-1000" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingPage;