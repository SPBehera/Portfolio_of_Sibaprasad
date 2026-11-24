import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Layers, Smartphone, ShieldCheck, MapPin, Briefcase, Code2 } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-7 md:py-9 bg-slate-50/70 dark:bg-[#0a0e18]/40 border-t border-slate-200/80 dark:border-white/5 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Column: Developer Overview Card (NO PICTURE) */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-2xl p-4 sm:p-6 relative border-indigo-500/20 shadow-xl space-y-4 sm:space-y-5">
              {/* Profile Header without Photo */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 shrink-0">
                  <Code2 size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    Siba Prasad Behera
                  </h3>
                  <p className="text-xs text-indigo-600 dark:text-cyan-400 font-medium">
                    Full Stack & Mobile Engineer
                  </p>
                  <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><MapPin size={11} /> Bhubaneswar, India</span>
                  </div>
                </div>
              </div>

              {/* 4 Key Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#121829] border border-slate-200/60 dark:border-slate-800">
                  <div className="text-xl font-extrabold text-indigo-600 dark:text-cyan-400 font-mono">2+ Yrs</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Dev Experience</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#121829] border border-slate-200/60 dark:border-slate-800">
                  <div className="text-xl font-extrabold text-indigo-600 dark:text-cyan-400 font-mono">4+</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Production Systems</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#121829] border border-slate-200/60 dark:border-slate-800">
                  <div className="text-xl font-extrabold text-indigo-600 dark:text-cyan-400 font-mono">OTA</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Hotfix Pipeline</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#121829] border border-slate-200/60 dark:border-slate-800">
                  <div className="text-xl font-extrabold text-indigo-600 dark:text-cyan-400 font-mono">100%</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Type-Safe TS</div>
                </div>
              </div>

              {/* Current Role Callout */}
              <div className="p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-500/25">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1">
                  <Briefcase size={13} className="text-indigo-600 dark:text-cyan-400" />
                  <span>Current Employment</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Full Stack Developer at <strong>Angikya Software & Technologies Limited</strong> (March 2025 – Present).
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 space-y-5"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2.5 border border-indigo-200/60 dark:border-indigo-500/20">
                About Me
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                Engineering scalable solutions with <span className="text-gradient">precision and passion.</span>
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I am a <strong>Full Stack & React Native Developer</strong> with hands-on experience architecting production web and mobile software. I focus on building high-reliability backends, intuitive mobile frontends, and mission-critical workflows.
              </p>
              <p>
                Currently at <strong>Angikya Software & Technologies Limited</strong>, I lead features for comprehensive <strong>Hospital Management Information Systems (HMIS)</strong>—engineering modules across OPD, IPD, doctor queues, and consultation pipelines. I also architected an automated <strong>Over-the-Air (OTA) update system</strong> for mobile hotfixes and integrated real-time video consultations via ZegoCloud.
              </p>
              <p>
                My foundation was established through my full-stack internship at <strong>Juvenilia Technology</strong> and Java development internship at <strong>OCAC</strong>, giving me a disciplined approach to API design, schema modeling, role-based authorization, and performance tuning.
              </p>
            </div>

            {/* 3 Compact Feature Pills */}
            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              <div className="glass-card p-3.5 rounded-xl">
                <div className="p-2 w-fit rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 mb-2">
                  <Layers size={18} />
                </div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">Full Stack</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  Node.js, Express, Hono, React, MongoDB, MySQL.
                </p>
              </div>

              <div className="glass-card p-3.5 rounded-xl">
                <div className="p-2 w-fit rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mb-2">
                  <Smartphone size={18} />
                </div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">Mobile & Video</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  React Native, FCM alerts, ZegoCloud, OTA updates.
                </p>
              </div>

              <div className="glass-card p-3.5 rounded-xl">
                <div className="p-2 w-fit rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-2">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">Production Grade</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  RBAC security, device approval, rapid debugging.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
