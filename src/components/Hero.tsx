import React from 'react';
import { motion } from 'motion/react';
import { Github, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white dark:bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-500/10 dark:bg-gold-500/5 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-200/10 dark:bg-gold-500/5 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 dark:bg-gold-950/30 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-8 border border-gold-200/50 dark:border-gold-500/20"
        >
          <Sparkles size={14} className="animate-spin-slow" />
          Crafting Digital Excellence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6"
        >
          Siba Prasad <span className="text-gold-500">Behera</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl font-medium text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto leading-tight"
        >
          MERN & Next.js Developer | <span className="text-gold-600 dark:text-gold-500">Backend-Focused Engineer</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-zinc-500 dark:text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Building scalable web applications and production-grade backend systems. I specialize in architecting high-performance APIs, secure authentication flows, and robust database schemas for the modern web.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-10 py-4 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-bold hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-gold-500/20"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="px-10 py-4 rounded-full border border-zinc-200 dark:border-gold-500/30 text-zinc-900 dark:text-white font-bold hover:bg-zinc-50 dark:hover:bg-gold-500/10 transition-all"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/SPBehera"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-zinc-200 dark:border-gold-500/30 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-gold-500/10 transition-all"
          >
            <Github size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500/60 font-bold">Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500 to-transparent" />
      </motion.div>
    </section>
  );
}
