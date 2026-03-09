import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-zinc-200 dark:border-gold-500/10 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
          <div className="flex items-center gap-3 text-2xl font-black tracking-tighter text-zinc-900 dark:text-white">
            <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center text-white">
              <Sparkles size={20} />
            </div>
            <span>SPB<span className="text-gold-500">.dev</span></span>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-gold-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold-500/20 to-transparent mb-12" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-zinc-500 text-xs font-medium uppercase tracking-widest">
            © 2026 Siba Prasad Behera. All rights reserved.
          </div>
          <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em] text-center md:text-right">
            Built with <span className="text-gold-500">Excellence</span> & passion for backend engineering.
          </div>
        </div>
      </div>
    </footer>
  );
}
