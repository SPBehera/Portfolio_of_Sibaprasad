import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun, FileText, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blogs', href: '#blogs' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3.5 sm:px-6 md:px-8 py-3',
        scrolled ? 'glass py-2 shadow-md shadow-indigo-950/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 sm:gap-2.5 text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white group"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Code2 size={15} />
          </div>
          <span>SPB<span className="text-gradient">.dev</span></span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4.5 lg:gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}

          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all shadow-sm"
          >
            <FileText size={13} />
            Resume
          </a>

          <div className="h-5 w-[1px] bg-slate-200 dark:bg-slate-800" />
          
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-xl bg-slate-100 dark:bg-[#121829] hover:bg-indigo-500/10 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all cursor-pointer"
          >
            {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 sm:gap-3 md:hidden">
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-cyan-400 border border-indigo-200 dark:border-indigo-500/30"
          >
            <FileText size={11} />
            Resume
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-[#121829] text-slate-600 dark:text-slate-400 cursor-pointer"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-1.5 rounded-lg bg-indigo-600 text-white cursor-pointer"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden glass mt-2.5 rounded-2xl overflow-hidden border-indigo-500/20 shadow-xl"
          >
            <div className="flex flex-col p-3.5 gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 p-2 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-cyan-400 rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between px-2">
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-indigo-600 dark:text-cyan-400 flex items-center gap-1.5"
                >
                  <FileText size={12} /> View Full Resume
                </a>
                <span className="text-[10px] text-slate-400 font-mono">+91 8260139338</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
