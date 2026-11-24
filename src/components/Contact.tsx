import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Clock,
  Github,
  Copy,
  Check,
  FileText,
  User,
  Tag,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { WhatsAppIcon } from './TechIcons';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sibaprasadbehera281@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+918260139338');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formattedMessage = `Hello Siba! I saw your portfolio and would like to connect.%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Subject:* ${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}%0A%0A*Message:*%0A${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `https://wa.me/918260139338?text=${formattedMessage}`;

    // Open WhatsApp directly in new window / app
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 400);
  };

  const quickStarters = [
    'Discuss an engineering role',
    'Healthcare HMIS consultation',
    'React Native mobile project',
  ];

  return (
    <section id="contact" ref={ref} className="py-8 md:py-12 bg-slate-50/70 dark:bg-[#0a0e18]/40 border-t border-slate-200/80 dark:border-white/5 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-200/60 dark:border-emerald-500/20"
          >
            Direct Communication
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2"
          >
            Let&apos;s <span className="text-gradient">Connect.</span>
          </motion.h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Available for full-time engineering roles, high-impact contract systems, and technical consultations. Reach out directly or message me on WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Direct Contact & Verified Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-4"
          >
            {/* Direct Channels Card */}
            <div className="glass-card p-5 sm:p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-lg relative overflow-hidden flex-grow flex flex-col justify-between space-y-4">
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-400 opacity-80" />

              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Direct Contact Details
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  WhatsApp Online
                </span>
              </div>

              <div className="space-y-3">
                {/* WhatsApp & Phone Row */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-2xl bg-slate-50/80 dark:bg-[#121829]/80 border border-slate-200/70 dark:border-slate-700/60 hover:border-emerald-500/50 transition-all">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-500/20">
                      <WhatsAppIcon size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">WhatsApp / Phone</div>
                      <a
                        href="https://wa.me/918260139338?text=Hello%20Siba!%20I%20would%20like%20to%20connect%20regarding%20an%20opportunity."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block font-mono"
                      >
                        +91 8260139338
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href="https://wa.me/918260139338?text=Hello%20Siba!%20I%20would%20like%20to%20connect%20regarding%20an%20opportunity."
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Chat on WhatsApp"
                      className="p-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-600 dark:text-emerald-400 hover:text-white border border-emerald-500/25 transition-all shadow-xs"
                    >
                      <WhatsAppIcon size={15} />
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      title="Copy phone number"
                      className="p-2 rounded-xl bg-white dark:bg-[#07090e] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500/40 transition-all shadow-xs"
                    >
                      {copiedPhone ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>

                {/* Email Row with Copy & Mailto */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-2xl bg-slate-50/80 dark:bg-[#121829]/80 border border-slate-200/70 dark:border-slate-700/60 hover:border-indigo-500/50 transition-all">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 shrink-0 border border-indigo-500/20">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Email Address</div>
                      <a
                        href="mailto:sibaprasadbehera281@gmail.com"
                        className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors truncate block"
                      >
                        sibaprasadbehera281@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    className="p-2 rounded-xl bg-white dark:bg-[#07090e] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500/40 shrink-0 transition-all shadow-xs"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Location & Relocation */}
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50/80 dark:bg-[#121829]/80 border border-slate-200/70 dark:border-slate-700/60">
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 shrink-0 border border-indigo-500/20">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Current Base</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100">
                      Bhubaneswar, Odisha, India
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Open to Remote & Hybrid / Relocation roles
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantees */}
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-500/20 text-xs">
                <Clock size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">
                  WhatsApp Status: <strong>Direct & Instant messaging active</strong>
                </span>
              </div>
            </div>

            {/* Social & Resume Action Box */}
            <div className="glass-card p-4 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Professional Profiles:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/siba-pb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#121829] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500/40 text-xs font-semibold transition-all shadow-xs"
                >
                  <Linkedin size={14} className="text-blue-500" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/SPBehera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#121829] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500/40 text-xs font-semibold transition-all shadow-xs"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 border border-indigo-200 dark:border-indigo-500/30 text-xs font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all shadow-xs"
                >
                  <FileText size={14} />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive WhatsApp Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-200/90 dark:border-white/10 shadow-xl relative overflow-hidden h-full flex flex-col justify-between">
              
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 opacity-90" />

              {formSubmitted ? (
                /* Success Feedback Screen */
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-lg shadow-emerald-500/10">
                    <WhatsAppIcon size={32} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Redirected to WhatsApp!</h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mt-1">
                      Your message has been formatted and opened in WhatsApp for <strong>+91 8260139338</strong>.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={`https://wa.me/918260139338?text=Hello%20Siba!%20My%20name%20is%20${encodeURIComponent(formData.name)}.%20Email:%20${encodeURIComponent(formData.email)}.%20Subject:%20${encodeURIComponent(formData.subject)}.%20Message:%20${encodeURIComponent(formData.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-md shadow-emerald-600/30"
                    >
                      <WhatsAppIcon size={15} />
                      Open WhatsApp Again
                    </a>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-all"
                    >
                      Compose Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  
                  {/* Card Header inside Form */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800/80 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/25 shrink-0">
                        <WhatsAppIcon size={17} />
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                          Direct WhatsApp Dispatch
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Messages deliver instantly to +91 8260139338
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Chat
                    </span>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <User size={13} className="text-emerald-500 dark:text-emerald-400" /> Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Siba Prasad"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 hover:bg-slate-50 dark:bg-[#121829]/90 dark:hover:bg-[#161f36] border border-slate-200/90 dark:border-slate-700/80 focus:border-emerald-500 dark:focus:border-emerald-400 focus:bg-white dark:focus:bg-[#121829] focus:ring-4 focus:ring-emerald-500/15 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all shadow-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Mail size={13} className="text-emerald-500 dark:text-emerald-400" /> Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. siba@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 hover:bg-slate-50 dark:bg-[#121829]/90 dark:hover:bg-[#161f36] border border-slate-200/90 dark:border-slate-700/80 focus:border-emerald-500 dark:focus:border-emerald-400 focus:bg-white dark:focus:bg-[#121829] focus:ring-4 focus:ring-emerald-500/15 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Subject Line */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Tag size={13} className="text-emerald-500 dark:text-emerald-400" /> Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full-Time Role / Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 hover:bg-slate-50 dark:bg-[#121829]/90 dark:hover:bg-[#161f36] border border-slate-200/90 dark:border-slate-700/80 focus:border-emerald-500 dark:focus:border-emerald-400 focus:bg-white dark:focus:bg-[#121829] focus:ring-4 focus:ring-emerald-500/15 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all shadow-xs"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <MessageSquare size={13} className="text-emerald-500 dark:text-emerald-400" /> Message
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, engineering role, or timeline..."
                      rows={4}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 hover:bg-slate-50 dark:bg-[#121829]/90 dark:hover:bg-[#161f36] border border-slate-200/90 dark:border-slate-700/80 focus:border-emerald-500 dark:focus:border-emerald-400 focus:bg-white dark:focus:bg-[#121829] focus:ring-4 focus:ring-emerald-500/15 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all resize-none shadow-xs"
                    />

                    {/* Quick Starters Chips */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
                      <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Quick starters:</span>
                      {quickStarters.map((starter) => (
                        <button
                          type="button"
                          key={starter}
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              subject: starter,
                              message: prev.message ? prev.message : `Hi Siba, I would like to connect with you regarding: ${starter}.`,
                            }));
                          }}
                          className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 hover:bg-slate-200 dark:bg-[#121829] dark:hover:bg-[#1a233b] text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800 transition-colors cursor-pointer"
                        >
                          + {starter}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button to WhatsApp */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800/80">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Opening WhatsApp...</span>
                      ) : (
                        <>
                          <WhatsAppIcon size={18} />
                          <span>Send to WhatsApp</span>
                        </>
                      )}
                    </button>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/15 text-xs text-slate-600 dark:text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span className="text-[11px] sm:text-xs">
                        Direct to: <strong className="text-emerald-600 dark:text-emerald-400 font-mono">+91 8260139338</strong>
                      </span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
