import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone, Linkedin, Send, Clock, Globe, Github } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="section-padding bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-1.5 rounded-full bg-gold-50 dark:bg-gold-950/30 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-4 border border-gold-200/50 dark:border-gold-500/20"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white"
          >
            Let's <span className="text-gold-500">Collaborate.</span>
          </motion.h2>
        </div>

        <div ref={ref} className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="glass p-10 rounded-[2.5rem] space-y-10 border-gold-500/10">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gold-500/10 text-gold-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Location</h4>
                  <p className="text-zinc-500 text-sm">Bhubaneswar, Odisha, India</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gold-500/10 text-gold-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Email</h4>
                  <a href="mailto:sibaprasadbehera281@gmail.com" className="text-zinc-500 text-sm hover:text-gold-500 transition-colors">
                    sibaprasadbehera281@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gold-500/10 text-gold-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Phone</h4>
                  <a href="tel:+918328952214" className="text-zinc-500 text-sm hover:text-gold-500 transition-colors">
                    +91 8328952214
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gold-500/10 text-gold-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Response Time</h4>
                  <p className="text-zinc-500 text-sm">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-[2rem] bg-gold-500/5 border-gold-500/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Globe className="text-gold-500" size={20} />
                <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Socials</span>
              </div>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/siba-pb" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white hover:text-gold-500 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/SPBehera" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white hover:text-gold-500 transition-colors">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <form className="glass p-10 md:p-16 rounded-[2.5rem] border-gold-500/10 space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gold-600 dark:text-gold-500 uppercase tracking-[0.2em]">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-8 py-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 focus:border-gold-500 transition-all outline-none text-zinc-900 dark:text-white"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gold-600 dark:text-gold-500 uppercase tracking-[0.2em]">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-8 py-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 focus:border-gold-500 transition-all outline-none text-zinc-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-gold-600 dark:text-gold-500 uppercase tracking-[0.2em]">Subject</label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full px-8 py-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 focus:border-gold-500 transition-all outline-none text-zinc-900 dark:text-white"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-gold-600 dark:text-gold-500 uppercase tracking-[0.2em]">Message</label>
                <textarea
                  placeholder="Tell me more about your project..."
                  rows={5}
                  className="w-full px-8 py-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 focus:border-gold-500 transition-all outline-none text-zinc-900 dark:text-white resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-5 rounded-full bg-gold-500 text-white font-bold hover:bg-gold-600 hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-lg shadow-gold-500/20"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
