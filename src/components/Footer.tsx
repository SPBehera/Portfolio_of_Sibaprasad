import React from 'react';
import {
  Code2,
  ArrowUp,
  FileText,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { WhatsAppIcon } from './TechIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Tech Stack', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Articles & Blogs', href: '#blogs' },
    { label: 'Contact', href: '#contact' },
  ];

  const specializations = [
    'Enterprise HMIS Architecture',
    'React Native & CodePush OTA',
    'MERN Stack Microservices',
    'Hono.js High-Speed REST APIs',
    'Real-time WebRTC & Telemedicine',
    'Relational (MySQL) & NoSQL Systems',
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/SPBehera',
      icon: <Github size={18} />,
      label: 'SPBehera',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/siba-pb/',
      icon: <Linkedin size={18} />,
      label: 'siba-pb',
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/918260139338?text=Hi%20Siba,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!',
      icon: <WhatsAppIcon size={18} />,
      label: '+91 8260139338',
    },
    {
      name: 'Email',
      href: 'mailto:sibaprasadbehera281@gmail.com',
      icon: <Mail size={18} />,
      label: 'sibaprasadbehera281@gmail.com',
    },
  ];

  return (
    <footer className="relative bg-slate-100/80 dark:bg-[#07090e] border-t border-slate-200 dark:border-white/10 overflow-hidden pt-16 pb-12 transition-colors duration-300">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Col 1: Identity & Bio (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 text-lg font-black tracking-tight text-slate-900 dark:text-white group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <Code2 size={16} />
              </div>
              <span className="text-xl">
                SPB<span className="text-gradient">.dev</span>
              </span>
            </a>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pr-2">
              Full Stack & Mobile Engineer specializing in MERN stack, React Native,
              mission-critical healthcare HMIS architectures, and Over-the-Air release pipelines.
            </p>

            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Full-Time & High-Impact Contracts</span>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-2.5">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-9 h-9 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-300 dark:hover:border-cyan-400/40 hover:scale-105 transition-all flex items-center justify-center shadow-xs"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-indigo-600 dark:group-hover:bg-cyan-400 transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Focus / Domains (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Specializations
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              {specializations.map((spec) => (
                <li
                  key={spec}
                  className="flex items-center gap-2 py-1 px-2.5 rounded-md bg-white/60 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5"
                >
                  <Sparkles size={12} className="text-indigo-500 dark:text-cyan-400 shrink-0" />
                  <span className="truncate">{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Action & Resume (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Direct Contact
            </h4>

            {/* Direct WhatsApp Action Card */}
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 dark:border-emerald-500/30 space-y-2.5">
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                <span>Fastest Response</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">WhatsApp</span>
              </div>
              <a
                href="https://wa.me/918260139338?text=Hello%20Siba,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all hover:shadow-emerald-600/25"
              >
                <WhatsAppIcon size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Resume Button */}
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:border-indigo-300 dark:hover:border-cyan-400/40 text-xs font-semibold transition-all shadow-xs"
            >
              <FileText size={15} className="text-indigo-600 dark:text-cyan-400" />
              <span>View Full Resume</span>
              <ExternalLink size={13} className="text-slate-400" />
            </a>

            <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-indigo-500 shrink-0" />
                <span>Bhubaneswar, Odisha, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone size={13} className="text-emerald-500 shrink-0" />
                <span>+91 8260139338</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Colophon */}
        <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 sm:pr-24 lg:pr-28">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Siba Prasad Behera. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <span className="text-[11px] text-slate-400 dark:text-slate-500">
              Built with React, TypeScript & Tailwind CSS
            </span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all font-medium cursor-pointer shadow-xs active:scale-95"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
