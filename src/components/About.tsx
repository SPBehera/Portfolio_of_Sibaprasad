import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { User, Target, Zap } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-zinc-50 dark:bg-black/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-gold-100 dark:bg-gold-950/30 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-widest border border-gold-200/50 dark:border-gold-500/20">
              The Developer
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white leading-tight">
              Engineering solutions with <span className="text-gold-500">precision and passion.</span>
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                I am a Full-Stack Engineer with over a year of professional experience in the tech industry, dedicated to crafting high-quality digital experiences. My journey is fueled by a deep curiosity for how complex systems work and a drive to build tools that make a difference.
              </p>
              <p>
                Currently, at <strong>Angikya Software & Technologies Limited</strong>, I am at the forefront of developing production-ready applications. My role involves everything from conceptualizing backend architectures to fine-tuning frontend performance, ensuring every line of code serves a purpose.
              </p>
              <p>
                I specialize in the <strong>MERN stack</strong> (MongoDB, Express, React, Node.js) and <strong>Next.js</strong>, with a particular focus on backend engineering. I believe that a strong, scalable backend is the foundation of any successful application.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            <div className="glass p-8 rounded-3xl border-gold-500/10 hover:border-gold-500/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">My Mission</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                To build software that is not just functional, but also elegant, maintainable, and highly performant. I strive to bridge the gap between complex business requirements and seamless user experiences.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border-gold-500/10 hover:border-gold-500/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Core Values</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Clean code, continuous learning, and collaborative problem-solving. I am constantly exploring new technologies like AI and cloud-native patterns to stay at the cutting edge of engineering.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
