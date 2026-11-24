import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, GitBranch, Star, Code2, GitCommit, CheckCircle2 } from 'lucide-react';

// 7 rows x 18 weeks contribution activity heatmap simulation
const heatmapMatrix: number[][] = [
  [0, 1, 2, 3, 2, 1, 0, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2],
  [1, 2, 3, 4, 3, 2, 1, 3, 4, 4, 4, 3, 2, 3, 4, 4, 4, 3],
  [0, 1, 2, 2, 1, 0, 1, 2, 3, 3, 2, 1, 0, 1, 2, 3, 2, 1],
  [2, 3, 4, 3, 2, 1, 2, 3, 4, 4, 3, 2, 3, 4, 4, 4, 3, 2],
  [1, 2, 3, 2, 1, 0, 1, 2, 3, 3, 2, 1, 2, 3, 4, 3, 2, 1],
  [0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1, 1, 2, 3, 2, 1, 0],
  [1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 2, 3, 4, 3, 2, 1],
];

const getHeatmapColor = (level: number) => {
  switch (level) {
    case 1:
      return 'bg-emerald-950/70 border border-emerald-900/40';
    case 2:
      return 'bg-emerald-800/80 border border-emerald-700/50';
    case 3:
      return 'bg-emerald-500 border border-emerald-400/60 shadow-xs shadow-emerald-500/20';
    case 4:
      return 'bg-emerald-400 border border-emerald-300 shadow-xs shadow-emerald-400/40';
    default:
      return 'bg-slate-800/50 border border-slate-700/30';
  }
};

export default function GithubSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="github" ref={ref} className="py-8 md:py-12 bg-white dark:bg-[#07090e] border-t border-slate-200/80 dark:border-white/5 relative overflow-hidden scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Narrative & Action */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider border border-indigo-200/60 dark:border-indigo-500/20">
              <Code2 size={13} /> Open Source & Engineering
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Pushing code to <span className="text-gradient">production.</span>
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              Active full-stack and mobile engineer building scalable web platforms, real-time healthcare systems (HMIS), and Over-the-Air (OTA) release pipelines. Exploring modern TypeScript architectures, modular microservices, and high-performance databases.
            </p>

            {/* Engineering Highlights */}
            <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-[#121829] border border-slate-200/70 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={14} className="text-indigo-600 dark:text-cyan-400 shrink-0" />
                <span>100% Type-Safe TypeScript</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-[#121829] border border-slate-200/70 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={14} className="text-indigo-600 dark:text-cyan-400 shrink-0" />
                <span>Modular Architecture</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-[#121829] border border-slate-200/70 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={14} className="text-indigo-600 dark:text-cyan-400 shrink-0" />
                <span>Zero-Downtime Releases</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-[#121829] border border-slate-200/70 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={14} className="text-indigo-600 dark:text-cyan-400 shrink-0" />
                <span>Production Healthcare APIs</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://github.com/SPBehera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30 transition-all hover:scale-105"
              >
                View GitHub Profile <ExternalLink size={14} />
              </a>
              <a
                href="https://github.com/SPBehera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#121829] dark:hover:bg-[#1a233b] text-slate-700 dark:text-slate-300 text-xs font-mono border border-slate-200 dark:border-slate-800 transition-all"
              >
                <Github size={15} className="text-indigo-600 dark:text-cyan-400" />
                <span>@SPBehera</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Authentic GitHub Terminal / Bento Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl bg-[#0d1117] text-white p-5 sm:p-6 border border-slate-700/80 shadow-2xl overflow-hidden font-sans">
              
              {/* Top Glow Ambient */}
              <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl" />

              {/* Profile Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 shrink-0">
                    <Github size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white leading-tight">Siba Prasad Behera</span>
                    </div>
                    <div className="text-xs text-slate-400 font-mono">github.com/SPBehera</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-950/70 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active Contributor
                  </span>
                </div>
              </div>

              {/* Stat Metric Tiles */}
              <div className="grid grid-cols-3 gap-2.5 py-4 border-b border-slate-800 text-center relative z-10">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                    <Star size={14} />
                  </div>
                  <div className="text-lg font-bold text-white font-mono">15+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Repositories</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <div className="flex items-center justify-center gap-1 text-emerald-400 mb-1">
                    <GitCommit size={14} />
                  </div>
                  <div className="text-lg font-bold text-white font-mono">600+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Contributions</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <div className="flex items-center justify-center gap-1 text-cyan-400 mb-1">
                    <GitBranch size={14} />
                  </div>
                  <div className="text-lg font-bold text-white font-mono">2+ Yrs</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Shipping</div>
                </div>
              </div>

              {/* Visual GitHub Contribution Heatmap */}
              <div className="pt-4 pb-3 relative z-10">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-2.5">
                  <span className="font-semibold flex items-center gap-1.5">
                    <GitCommit size={13} className="text-emerald-400" />
                    Contribution Activity
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">600+ commits / year</span>
                </div>

                {/* Heatmap Matrix */}
                <div className="flex flex-col gap-1 overflow-x-auto pb-1">
                  {heatmapMatrix.map((row, rIdx) => (
                    <div key={`heat-row-${rIdx}`} className="flex gap-1 justify-between">
                      {row.map((level, cIdx) => (
                        <div
                          key={`cell-${rIdx}-${cIdx}`}
                          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-xs transition-colors ${getHeatmapColor(level)}`}
                          title={`Activity level ${level}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>

                {/* Heatmap Legend */}
                <div className="flex items-center justify-between pt-2 text-[10px] text-slate-400">
                  <span>Continuous Daily Activity</span>
                  <div className="flex items-center gap-1">
                    <span>Less</span>
                    <span className="w-2.5 h-2.5 rounded-xs bg-slate-800/60 border border-slate-700/40" />
                    <span className="w-2.5 h-2.5 rounded-xs bg-emerald-950/70 border border-emerald-900/40" />
                    <span className="w-2.5 h-2.5 rounded-xs bg-emerald-800/80" />
                    <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500" />
                    <span className="w-2.5 h-2.5 rounded-xs bg-emerald-400" />
                    <span>More</span>
                  </div>
                </div>
              </div>

              {/* Pinned Repos Preview */}
              <div className="pt-3 border-t border-slate-800 space-y-2 relative z-10">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Featured Repositories
                </div>

                <div className="grid sm:grid-cols-2 gap-2">
                  <a
                    href="https://github.com/SPBehera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all text-left group block"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                      <span className="truncate">hmis-telemedicine</span>
                      <ExternalLink size={11} className="opacity-60 group-hover:opacity-100" />
                    </div>
                    <div className="text-[10px] text-slate-400 truncate mb-1.5">
                      OPD, queues, video consultation & FCM
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-sky-400" /> React Native
                      </span>
                      <span>•</span>
                      <span>TypeScript</span>
                    </div>
                  </a>

                  <a
                    href="https://github.com/SPBehera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all text-left group block"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                      <span className="truncate">ota-release-engine</span>
                      <ExternalLink size={11} className="opacity-60 group-hover:opacity-100" />
                    </div>
                    <div className="text-[10px] text-slate-400 truncate mb-1.5">
                      Zero-downtime mobile bundle hotfixes
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" /> Node.js
                      </span>
                      <span>•</span>
                      <span>MySQL</span>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
