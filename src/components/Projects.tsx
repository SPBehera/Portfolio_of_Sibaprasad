import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Layers, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: 'Hospital Management Information System (HMIS)',
    category: 'Healthcare & Mobile',
    description: 'Comprehensive healthcare system managing hospital operations and clinical care workflows. Built OPD, IPD, doctor queue tracking, screening, digital prescriptions, PDF downloads, and real-time push notifications via FCM.',
    tech: ['React.js', 'React Native', 'TypeScript', 'Node.js', 'MySQL', 'FCM'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    highlights: ['Doctor queue management', 'FCM push notifications', 'Prescription PDF generation'],
  },
  {
    title: 'OTA Update Management System',
    category: 'DevOps & Mobile Infrastructure',
    description: 'Over-the-Air update infrastructure and CLI workflow for rolling out live bundle hotfixes to React Native applications. Features device registration, approval pipelines, and mandatory update enforcement.',
    tech: ['Node.js', 'TypeScript', 'Hono', 'MySQL', 'Cloudflare R2', 'AWS S3'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    highlights: ['Zero-friction app hotfixes', 'Device approval flows', 'Version release tracking'],
  },
  {
    title: 'Doctor Consultation Application',
    category: 'Telemedicine & Real-time Video',
    description: 'Cross-platform mobile application facilitating seamless online doctor-patient consultations. Integrates real-time audio/video consultations via ZegoCloud, appointment queue management, and digital prescriptions.',
    tech: ['React Native', 'TypeScript', 'ZegoCloud', 'REST APIs', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    highlights: ['ZegoCloud video integration', 'Real-time patient queues', 'Cross-platform UI'],
  },
  {
    title: 'Enterprise HRMS Platform',
    category: 'Enterprise Web Application',
    description: 'Full-stack Human Resource Management System to streamline employee lifecycle operations. Includes biometric attendance tracking, leave approval workflows, and administrative analytics dashboards with RBAC.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    highlights: ['Role-based access control', 'Automated attendance logs', 'Analytics dashboards'],
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" ref={ref} className="py-7 md:py-9 bg-white dark:bg-[#07090e] border-t border-slate-200/80 dark:border-white/5 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2 border border-indigo-200/60 dark:border-indigo-500/20"
          >
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
          >
            Featured <span className="text-gradient">Projects.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.08 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-indigo-600/90 text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-1.5 mb-5 mt-auto">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 size={12} className="text-cyan-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-slate-100 dark:bg-[#121829] text-indigo-600 dark:text-cyan-400 text-[10px] font-semibold rounded border border-slate-200 dark:border-indigo-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
