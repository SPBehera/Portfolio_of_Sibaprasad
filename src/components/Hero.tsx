import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, ArrowRight, FileText, CheckCircle2, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden pt-24 pb-10 md:pt-28 md:pb-12 bg-gradient-to-b from-indigo-50/50 via-slate-50/40 to-slate-50 dark:from-[#0b101d] dark:via-[#07090e] dark:to-[#07090e] scroll-mt-16">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/15 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-5"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-[11px] sm:text-xs font-semibold tracking-wide border border-emerald-200/70 dark:border-emerald-500/25 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Full Stack & Mobile Roles
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.14]">
              Hi, I&apos;m <span className="text-gradient">Siba Prasad Behera</span>
            </h1>

            {/* Subtitle / Role */}
            <h2 className="text-base sm:text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-300">
              Full Stack Developer <span className="text-slate-300 dark:text-slate-700 font-normal">|</span> <span className="text-indigo-600 dark:text-cyan-400">MERN Stack & React Native</span>
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Building reliable, high-performance web and mobile applications with React.js, React Native, Node.js, and TypeScript. Specializing in healthcare management systems (HMIS), Over-the-Air (OTA) update infrastructure, and secure RESTful APIs.
            </p>

            {/* Highlights Grid/Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 max-w-lg mx-auto lg:mx-0 text-[11px] sm:text-xs font-semibold">
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white dark:bg-[#0e1320] border border-slate-200/80 dark:border-slate-800 shadow-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={13} className="text-indigo-600 dark:text-cyan-400 shrink-0" />
                <span>2+ Yrs Exp</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white dark:bg-[#0e1320] border border-slate-200/80 dark:border-slate-800 shadow-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={13} className="text-indigo-600 dark:text-cyan-400 shrink-0" />
                <span>HMIS Systems</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white dark:bg-[#0e1320] border border-slate-200/80 dark:border-slate-800 shadow-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={13} className="text-indigo-600 dark:text-cyan-400 shrink-0" />
                <span>OTA Updates</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white dark:bg-[#0e1320] border border-slate-200/80 dark:border-slate-800 shadow-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={13} className="text-indigo-600 dark:text-cyan-400 shrink-0" />
                <span>Bhubaneswar</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2 sm:pt-3">
              <a
                href="#projects"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-600/25 hover:shadow-lg transition-all flex items-center gap-1.5 sm:gap-2 hover:scale-[1.02]"
              >
                View Projects <ArrowRight size={14} />
              </a>

              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-white dark:bg-[#0e1320] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-indigo-500/30 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-cyan-400 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 sm:gap-2 shadow-sm hover:scale-[1.02]"
              >
                <FileText size={14} /> Resume
              </a>

              <a
                href="#contact"
                className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/60 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5"
              >
                <Mail size={14} /> Contact
              </a>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <a
                  href="https://github.com/SPBehera"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-[#0e1320] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500/40 shadow-sm transition-all"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/siba-pb"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-[#0e1320] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500/40 shadow-sm transition-all"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Backlight Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-600 via-sky-400 to-cyan-400 rounded-3xl blur-xl opacity-40 dark:opacity-50 animate-pulse pointer-events-none" />

              {/* Showcase Frame */}
              <div className="relative rounded-3xl p-2.5 sm:p-3 bg-white/90 dark:bg-[#0e1320]/90 backdrop-blur-xl border border-slate-200/80 dark:border-indigo-500/30 shadow-2xl">
                <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src="/profile.jpg"
                    alt="Siba Prasad Behera - Full Stack Developer"
                    className="w-full h-full object-cover object-[center_18%] transition-transform duration-500 hover:scale-105"
                  />
                  {/* Bottom Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Inset Label */}
                  <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
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
