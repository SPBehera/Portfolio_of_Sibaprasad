import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  Linkedin,
  ArrowRight,
  FileText,
  Mail,
  Code2,
  Smartphone,
  Server,
  Zap,
  Sparkles,
} from 'lucide-react';
import { WhatsAppIcon } from './TechIcons';

const dynamicRoles = [
  'Full Stack Developer',
  'React Native Specialist',
  'MERN Stack Engineer',
  'Over-the-Air (OTA) Architect',
  'Healthcare HMIS Builder',
];

interface SparkleParticle {
  id: number;
  top: string;
  left: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
  type: 'star' | 'orb';
}

const backgroundSparkles: SparkleParticle[] = [
  { id: 1, top: '14%', left: '10%', size: 16, color: '#818cf8', duration: 5.5, delay: 0.2, type: 'star' },
  { id: 2, top: '24%', left: '26%', size: 13, color: '#22d3ee', duration: 4.8, delay: 1.1, type: 'star' },
  { id: 3, top: '36%', left: '6%', size: 7, color: '#38bdf8', duration: 6.2, delay: 0.5, type: 'orb' },
  { id: 4, top: '16%', left: '72%', size: 18, color: '#06b6d4', duration: 5.0, delay: 0.8, type: 'star' },
  { id: 5, top: '28%', left: '90%', size: 14, color: '#a78bfa', duration: 6.0, delay: 1.5, type: 'star' },
  { id: 6, top: '52%', left: '5%', size: 13, color: '#c084fc', duration: 5.2, delay: 2.0, type: 'star' },
  { id: 7, top: '64%', left: '20%', size: 8, color: '#22d3ee', duration: 4.5, delay: 0.9, type: 'orb' },
  { id: 8, top: '78%', left: '42%', size: 15, color: '#60a5fa', duration: 5.8, delay: 1.7, type: 'star' },
  { id: 9, top: '46%', left: '74%', size: 7, color: '#34d399', duration: 6.5, delay: 0.3, type: 'orb' },
  { id: 10, top: '66%', left: '84%', size: 17, color: '#38bdf8', duration: 5.4, delay: 1.2, type: 'star' },
  { id: 11, top: '84%', left: '12%', size: 12, color: '#818cf8', duration: 4.9, delay: 2.3, type: 'star' },
  { id: 12, top: '86%', left: '68%', size: 8, color: '#c084fc', duration: 5.6, delay: 1.8, type: 'orb' },
  { id: 13, top: '8%', left: '46%', size: 15, color: '#22d3ee', duration: 6.1, delay: 0.7, type: 'star' },
  { id: 14, top: '40%', left: '38%', size: 7, color: '#818cf8', duration: 4.7, delay: 2.5, type: 'orb' },
  { id: 15, top: '88%', left: '88%', size: 14, color: '#38bdf8', duration: 5.3, delay: 1.0, type: 'star' },
  { id: 16, top: '30%', left: '60%', size: 6, color: '#22d3ee', duration: 5.9, delay: 2.2, type: 'orb' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-indigo-50/50 via-slate-50/40 to-slate-50 dark:from-[#0b101d] dark:via-[#07090e] dark:to-[#07090e] scroll-mt-16 transition-colors duration-300"
    >
      {/* Background Animated Ambient Glows & Flowing Sparkles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Subtle Developer Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] opacity-60 dark:opacity-40" />

        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            x: [0, 25, 0],
            y: [0, -18, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 9,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-3xl opacity-70"
        />

        <motion.div
          animate={{
            scale: [1, 1.22, 1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 11,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/20 rounded-full blur-3xl opacity-60"
        />

        {/* Floating Sparkle Particles & Stardust */}
        {backgroundSparkles.map((s) => (
          <motion.div
            key={s.id}
            style={{ top: s.top, left: s.left }}
            className="absolute pointer-events-none"
            animate={{
              y: [0, -26, 0],
              x: [0, 8, -6, 0],
              opacity: [0.15, 0.85, 0.2],
              scale: [0.75, 1.25, 0.75],
              rotate: s.type === 'star' ? [0, 90, 180] : 0,
            }}
            transition={{
              repeat: Infinity,
              duration: s.duration,
              delay: s.delay,
              ease: 'easeInOut',
            }}
          >
            {s.type === 'star' ? (
              <svg
                width={s.size}
                height={s.size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  filter: `drop-shadow(0 0 ${Math.max(3, s.size / 2.5)}px ${s.color})`,
                }}
              >
                <path
                  d="M12 0L14.4 8.6L23 11L14.4 13.4L12 22L9.6 13.4L1 11L9.6 8.6L12 0Z"
                  fill={s.color}
                />
              </svg>
            ) : (
              <div
                className="rounded-full blur-[0.3px]"
                style={{
                  width: s.size,
                  height: s.size,
                  backgroundColor: s.color,
                  boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-5"
          >
            {/* Availability Pill with Pulsing Status */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-[11px] sm:text-xs font-semibold tracking-wide border border-emerald-200/80 dark:border-emerald-500/30 shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Full Stack & Mobile Roles</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
            >
              Hi, I&apos;m <span className="text-gradient">Siba Prasad Behera</span>
            </motion.h1>

            {/* Subtitle with Animated Rotating Roles */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="h-10 sm:h-12 flex items-center justify-center lg:justify-start gap-2 text-base sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200"
            >
              <span className="shrink-0">I build as a</span>
              <div className="relative inline-flex overflow-hidden h-full items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="text-gradient font-black whitespace-nowrap"
                  >
                    {dynamicRoles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-xs sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Building reliable, high-performance web and mobile applications with React.js, React Native, Node.js, and TypeScript. Specializing in healthcare management systems (HMIS), Over-the-Air (OTA) update infrastructure, and secure RESTful APIs.
            </motion.p>

            {/* Highlights Grid: Core Competencies with Interactive Micro-Animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 pt-1 max-w-xl mx-auto lg:mx-0"
            >
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white/90 dark:bg-[#0e1320]/90 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-indigo-400 dark:hover:border-cyan-500/40 transition-colors group cursor-default"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Code2 size={15} />
                </div>
                <div className="text-left leading-tight min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-slate-100 truncate">Web Apps</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 truncate">React & TS</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white/90 dark:bg-[#0e1320]/90 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-cyan-400 dark:hover:border-cyan-500/40 transition-colors group cursor-default"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Smartphone size={15} />
                </div>
                <div className="text-left leading-tight min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-slate-100 truncate">Mobile</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 truncate">React Native</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white/90 dark:bg-[#0e1320]/90 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-emerald-400 dark:hover:border-emerald-500/40 transition-colors group cursor-default"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Server size={15} />
                </div>
                <div className="text-left leading-tight min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-slate-100 truncate">Backend</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 truncate">Node & APIs</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white/90 dark:bg-[#0e1320]/90 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-amber-400 dark:hover:border-amber-500/40 transition-colors group cursor-default"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Zap size={15} />
                </div>
                <div className="text-left leading-tight min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-slate-100 truncate">Experience</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 truncate">2+ Yrs In Prod</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2 sm:pt-3"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-600/25 hover:shadow-lg transition-all flex items-center gap-1.5 sm:gap-2 group"
              >
                <span>View Projects</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-white dark:bg-[#0e1320] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-indigo-500/30 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-cyan-400 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 sm:gap-2 shadow-sm"
              >
                <FileText size={14} />
                <span>Resume</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/918260139338?text=Hello%20Siba,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5"
              >
                <WhatsAppIcon size={15} />
                <span>WhatsApp</span>
              </motion.a>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/SPBehera"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-[#0e1320] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500/40 shadow-sm transition-all"
                >
                  <Github size={16} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/siba-pb"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-[#0e1320] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500/40 shadow-sm transition-all"
                >
                  <Linkedin size={16} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Profile Card with Floating Animated Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Backlight Glow with Breathing Scale */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.35, 0.55, 0.35],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-2 bg-gradient-to-tr from-indigo-600 via-sky-400 to-cyan-400 rounded-3xl blur-2xl pointer-events-none"
              />

              {/* Floating Badge 1: Top-Left (React Native) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: 'easeInOut',
                }}
                className="absolute -top-3.5 -left-3 sm:-top-4 sm:-left-4 z-20 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#0e1320]/95 backdrop-blur-md border border-slate-200 dark:border-cyan-500/30 shadow-lg shadow-indigo-500/10 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200">
                  React Native
                </span>
              </motion.div>

              {/* Floating Badge 2: Bottom-Right (Full Stack MERN) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                  delay: 0.6,
                }}
                className="absolute -bottom-3.5 -right-3 sm:-bottom-4 sm:-right-4 z-20 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#0e1320]/95 backdrop-blur-md border border-slate-200 dark:border-indigo-500/30 shadow-lg shadow-cyan-500/10 flex items-center gap-2"
              >
                <Code2 size={13} className="text-indigo-500 dark:text-cyan-400" />
                <span className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200">
                  Full Stack MERN
                </span>
              </motion.div>

              {/* Floating Badge 3: Top-Right (Active Commits) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4.2,
                  ease: 'easeInOut',
                  delay: 1.2,
                }}
                className="absolute top-1/4 -right-3 sm:-right-5 z-20 px-2.5 py-1 rounded-lg bg-emerald-500/15 dark:bg-emerald-950/80 border border-emerald-500/40 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 shadow-md flex items-center gap-1.5"
              >
                <Sparkles size={11} className="text-emerald-500" />
                <span>600+ Commits</span>
              </motion.div>

              {/* Showcase Frame */}
              <div className="relative rounded-3xl p-2.5 sm:p-3 bg-white/90 dark:bg-[#0e1320]/90 backdrop-blur-xl border border-slate-200/80 dark:border-indigo-500/30 shadow-2xl overflow-hidden group">
                <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src="/profile.jpg"
                    alt="Siba Prasad Behera - Full Stack Developer"
                    className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Bottom Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Inset Label with Active Status Dot */}
                  <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">
                        Online & Coding
                      </span>
                    </div>
                    <div className="text-sm font-bold tracking-tight">Siba Prasad Behera</div>
                    <div className="text-xs text-cyan-300 font-medium">MERN & React Native Specialist</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
