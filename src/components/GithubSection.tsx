import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, GitBranch, Star, Code2 } from 'lucide-react';

export default function GithubSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-black text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold-500 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold-600 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-gold-500 text-xs font-bold uppercase tracking-widest mb-8 border border-white/10">
              <Code2 size={14} /> Open Source Contributions
            </div>
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight">
              Pushing code to <span className="text-gold-500">the future.</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-xl">
              I am an active GitHub developer dedicated to building backend-focused applications. My repositories reflect my journey in mastering the MERN stack and exploring modern JavaScript frameworks.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://github.com/SPBehera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gold-500 text-white font-bold hover:bg-gold-600 hover:scale-105 transition-all shadow-lg shadow-gold-500/20"
              >
                View GitHub <ExternalLink size={18} />
              </a>
              <div className="flex items-center gap-4 text-zinc-400 font-medium">
                <Github size={24} />
                <span>@SPBehera</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="glass bg-white/5 border-white/10 p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center hover:border-gold-500/30 transition-colors group">
              <Star className="text-gold-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-xs text-zinc-500 uppercase tracking-[0.2em] font-bold">Repositories</div>
            </div>
            <div className="glass bg-white/5 border-white/10 p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center hover:border-gold-500/30 transition-colors group">
              <GitBranch className="text-gold-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <div className="text-4xl font-bold mb-2">600+</div>
              <div className="text-xs text-zinc-500 uppercase tracking-[0.2em] font-bold">Contributions</div>
            </div>
            <div className="col-span-2 glass bg-white/5 border-white/10 p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 hover:border-gold-500/30 transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Github size={32} className="text-gold-500" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold">Siba Prasad Behera</div>
                  <div className="text-sm text-zinc-500 font-mono">github.com/SPBehera</div>
                </div>
              </div>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-bold">
                    {i === 5 ? '+10' : ''}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
