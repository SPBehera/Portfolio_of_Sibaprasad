import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Database, Settings, Terminal, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code2 className="text-gold-500" size={24} />,
    skills: [
      { name: 'React.js & Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Redux / Context API', level: 85 },
      { name: 'Responsive Design', level: 95 },
    ],
  },
  {
    title: 'Backend Engineering',
    icon: <Server className="text-gold-500" size={24} />,
    skills: [
      { name: 'Node.js & Express.js', level: 95 },
      { name: 'RESTful API Design', level: 95 },
      { name: 'JWT & OAuth 2.0', level: 90 },
      { name: 'Microservices', level: 75 },
      { name: 'Serverless Functions', level: 80 },
    ],
  },
  {
    title: 'Database Management',
    icon: <Database className="text-gold-500" size={24} />,
    skills: [
      { name: 'MongoDB (NoSQL)', level: 90 },
      { name: 'MySQL / PostgreSQL', level: 85 },
      { name: 'Redis Caching', level: 75 },
      { name: 'Database Optimization', level: 80 },
    ],
  },
  {
    title: 'DevOps & Architecture',
    icon: <Settings className="text-gold-500" size={24} />,
    skills: [
      { name: 'Docker & Containerization', level: 75 },
      { name: 'Git & CI/CD Pipelines', level: 90 },
      { name: 'AWS / Vercel Deployment', level: 85 },
      { name: 'System Design', level: 80 },
    ],
  },
];

const otherSkills = [
  'Artificial Intelligence Basics',
  'Microsoft Excel',
  'Postman API Testing',
  'Agile Methodology',
  'Unit Testing (Jest)',
  'Socket.io',
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section-padding bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-1.5 rounded-full bg-gold-50 dark:bg-gold-950/30 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-4 border border-gold-200/50 dark:border-gold-500/20"
          >
            Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white"
          >
            Technical <span className="text-gold-500">Proficiency.</span>
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 md:p-10 rounded-[2.5rem] border-gold-500/10 hover:border-gold-500/30 transition-all group relative overflow-hidden h-full"
            >
              {/* Subtle background pattern */}
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {category.icon}
              </div>
              
              <div className="flex items-center gap-5 mb-10">
                <div className="p-4 rounded-2xl bg-gold-500/10 text-gold-500 group-hover:scale-110 transition-transform duration-500">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">{category.title}</h3>
              </div>
              
              <div className="space-y-8">
                {category.skills.map((skill, sIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-3">
                      <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">{skill.name}</span>
                      <span className="text-xs font-black text-gold-600 dark:text-gold-500">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-zinc-100 dark:bg-zinc-900/50 rounded-full overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.8, ease: [0.34, 1.56, 0.64, 1], delay: 0.6 + (idx * 0.1) + (sIdx * 0.05) }}
                        className="h-full bg-gradient-to-r from-gold-700 via-gold-500 to-gold-400 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {otherSkills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2.5 rounded-full border border-zinc-200 dark:border-gold-500/20 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:border-gold-500/50 hover:text-gold-600 dark:hover:text-gold-400 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
