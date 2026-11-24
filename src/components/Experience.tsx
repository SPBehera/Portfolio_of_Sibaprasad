import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Sparkles, ArrowUpRight, ShieldCheck } from 'lucide-react';
import {
  ReactIcon,
  NodejsIcon,
  TypeScriptIcon,
  HonoIcon,
  MysqlIcon,
  MongoIcon,
  FirebaseIcon,
  GitIcon,
} from './TechIcons';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  badge: string;
  isCurrent?: boolean;
  type: 'Full-Time' | 'Internship';
  summary: string;
  keyMetric: string;
  techList: { name: string; icon?: React.ReactNode }[];
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'angikya',
    company: 'Angikya Software & Technologies Limited',
    role: 'Full Stack Developer',
    period: 'March 2025 – Present',
    location: 'Bhubaneswar, Odisha',
    badge: 'Current Employment',
    isCurrent: true,
    type: 'Full-Time',
    summary: 'Spearheading production healthcare management systems (HMIS), React Native mobile applications, real-time telemedicine, and Over-the-Air (OTA) update infrastructure.',
    keyMetric: 'Zero-Downtime Mobile OTA Hotfixes & Live HMIS Workflows',
    techList: [
      { name: 'React.js', icon: <ReactIcon size={14} /> },
      { name: 'React Native', icon: <ReactIcon size={14} /> },
      { name: 'TypeScript', icon: <TypeScriptIcon size={14} /> },
      { name: 'Node.js', icon: <NodejsIcon size={14} /> },
      { name: 'Hono.js', icon: <HonoIcon size={14} /> },
      { name: 'MySQL', icon: <MysqlIcon size={14} /> },
      { name: 'Firebase FCM', icon: <FirebaseIcon size={14} /> },
    ],
    description: [
      'Architect and build core Hospital Management Information System (HMIS) modules: OPD, IPD, doctor queues, screening, consultation, prescription, and patient self-service.',
      'Develop mobile application features in React Native & TypeScript, including push notifications via Firebase Cloud Messaging (FCM) and video consultations with ZegoCloud.',
      'Engineered Over-the-Air (OTA) update backend using Node.js, TypeScript, Hono, MySQL, and cloud storage for automated, zero-downtime mobile hotfixes.',
      'Implemented device registration, approval pipelines, and mandatory update enforcement for secure mobile distribution.',
      'Design performant RESTful APIs with RBAC authentication and optimize MySQL/MongoDB queries for high reliability.',
    ],
  },
  {
    id: 'juvenilia',
    company: 'Juvenilia Technology',
    role: 'Full Stack Developer Intern',
    period: 'November 2023 – September 2024',
    location: 'Bhubaneswar, Odisha',
    badge: '10-Month Internship',
    type: 'Internship',
    summary: 'Built full-stack web applications using React.js, Node.js, Express.js, and MongoDB, focusing on modular component architecture and secure RESTful APIs.',
    keyMetric: 'Scalable MERN Architecture & Secure RBAC Workflows',
    techList: [
      { name: 'React.js', icon: <ReactIcon size={14} /> },
      { name: 'Node.js', icon: <NodejsIcon size={14} /> },
      { name: 'Express.js' },
      { name: 'MongoDB', icon: <MongoIcon size={14} /> },
      { name: 'REST APIs' },
      { name: 'JWT' },
    ],
    description: [
      'Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB.',
      'Built modular, reusable frontend components and integrated backend REST APIs for critical business logic.',
      'Implemented JWT authentication, role-based access control, schema validation, and database operations.',
      'Collaborated closely with QA and UI teams for cross-browser testing, debugging, and production feature releases.',
    ],
  },
  {
    id: 'ocac',
    company: 'Odisha Computer Application Centre (OCAC)',
    role: 'Java Developer Intern',
    period: 'September 2023 – October 2023',
    location: 'Bhubaneswar, Odisha',
    badge: 'Internship',
    type: 'Internship',
    summary: 'Rigorous engineering internship strengthening Core Java, Object-Oriented Programming (OOP) fundamentals, and software debugging workflows.',
    keyMetric: 'Strong Foundation in OOP & SDLC Engineering Practices',
    techList: [
      { name: 'Core Java' },
      { name: 'OOP Principles' },
      { name: 'Data Structures' },
      { name: 'Git', icon: <GitIcon size={14} /> },
    ],
    description: [
      'Completed hands-on software development internship covering Core Java and Object-Oriented Programming (OOP) fundamentals.',
      'Gained practical exposure to software development lifecycle (SDLC), code debugging, and Git version control workflows.',
    ],
  },
];

export default function Experience() {
  const [filter, setFilter] = useState<'All' | 'Full-Time' | 'Internship'>('All');

  const filteredExperiences = filter === 'All'
    ? experiences
    : experiences.filter((e) => e.type === filter);

  return (
    <section id="experience" className="py-7 md:py-9 bg-slate-50/70 dark:bg-[#0a0e18]/40 border-t border-slate-200/80 dark:border-white/5 relative overflow-hidden scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1.5 border border-indigo-200/60 dark:border-indigo-500/20">
            Career Trajectory
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1.5">
            Professional <span className="text-gradient">Experience.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-3">
            Chronological overview of my engineering roles, production healthcare systems, and technical contributions.
          </p>

          {/* Quick Filter Tabs */}
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-slate-200/70 dark:bg-[#121829] border border-slate-200 dark:border-slate-800">
            {(['All', 'Full-Time', 'Internship'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  filter === tab
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab === 'All' ? 'All Roles' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="relative space-y-3.5 max-w-4xl mx-auto">
          {/* Subtle vertical spine line */}
          <div className="hidden md:block absolute top-6 bottom-6 left-6 w-0.5 bg-gradient-to-b from-indigo-500 via-sky-400 to-cyan-400 opacity-25" />

          {filteredExperiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className={`glass-card p-4 sm:p-5 rounded-2xl relative overflow-hidden transition-all duration-300 md:ml-12 border ${
                exp.isCurrent
                  ? 'border-indigo-500/30 dark:border-indigo-500/30 shadow-md shadow-indigo-500/5'
                  : 'border-slate-200/80 dark:border-white/10'
              }`}
            >
              {/* Left Spine Node Indicator (Desktop) */}
              <div className="hidden md:flex absolute -left-12 top-6 w-6 h-6 rounded-full bg-white dark:bg-[#0e1320] border-2 border-indigo-500 items-center justify-center -translate-x-1/2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
              </div>

              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-400 opacity-70" />

              {/* Role & Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-2.5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>

                    {exp.isCurrent ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Active Employment
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-cyan-400 border border-indigo-200 dark:border-indigo-500/20">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-semibold">
                      <Building2 size={13} className="text-indigo-600 dark:text-cyan-400" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#121829] text-slate-700 dark:text-slate-300 text-xs font-semibold whitespace-nowrap self-start border border-slate-200 dark:border-slate-800">
                  <Calendar size={12} className="text-indigo-600 dark:text-cyan-400" />
                  {exp.period}
                </div>
              </div>

              {/* Role Summary & Impact Banner */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-100/70 dark:bg-[#121829]/70 border border-slate-200/60 dark:border-slate-800 mb-3 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <Sparkles size={14} className="text-indigo-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">Core Focus: </span>
                    <span>{exp.summary}</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills with Real Tech Icons */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {exp.techList.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white dark:bg-[#07090e] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-xs"
                  >
                    {tech.icon && <span className="shrink-0">{tech.icon}</span>}
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>

              {/* Accomplishments Bullets */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Key Deliverables & Accomplishments:
                </div>
                <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-600 dark:text-slate-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 size={13} className="text-indigo-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
