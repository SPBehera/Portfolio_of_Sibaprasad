import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Layers, Code } from 'lucide-react';

const projects = [
  {
    title: 'HRMS System',
    description: 'A comprehensive Human Resource Management System designed for modern enterprises. Features include automated attendance tracking via biometric/IP logs, dynamic shift scheduling, leave management with multi-level approval workflows, and detailed employee performance analytics dashboards.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    image: 'https://picsum.photos/seed/hrms/800/600',
  },
  {
    title: 'Academic & Student Management',
    description: 'A robust platform for educational institutions to manage the entire student lifecycle. Includes modules for student registration, automated result generation, fee management with payment gateway integration, and administrative dashboards for real-time reporting and data visualization.',
    tech: ['React', 'Node.js', 'MySQL', 'Sequelize', 'Chart.js'],
    image: 'https://picsum.photos/seed/academic/800/600',
  },
  {
    title: 'E-commerce Web Application',
    description: 'A feature-rich e-commerce platform with a focus on user experience and security. Implements secure JWT-based authentication, a dynamic cart system with persistent storage, integrated search and filtering, and a comprehensive admin panel for product and order management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Cloudinary'],
    image: 'https://picsum.photos/seed/ecommerce/800/600',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="section-padding bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-1.5 rounded-full bg-gold-50 dark:bg-gold-950/30 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-4 border border-gold-200/50 dark:border-gold-500/20"
          >
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white"
          >
            Featured <span className="text-gold-500">Creations.</span>
          </motion.h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass rounded-[2.5rem] overflow-hidden flex flex-col h-full border-gold-500/10 hover:border-gold-500/40 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <button className="p-4 bg-white rounded-full text-zinc-900 hover:bg-gold-500 hover:text-white transition-all hover:scale-110">
                    <Github size={20} />
                  </button>
                  <button className="p-4 bg-white rounded-full text-zinc-900 hover:bg-gold-500 hover:text-white transition-all hover:scale-110">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <Code size={16} className="text-gold-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Web Application</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-gold-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8 leading-relaxed line-clamp-4">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gold-500/5 dark:bg-gold-500/10 text-gold-600 dark:text-gold-400 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-gold-500/10"
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
