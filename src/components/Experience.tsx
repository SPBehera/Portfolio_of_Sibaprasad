import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Angikya Software & Technologies Limited',
    role: 'Full-stack Developer',
    period: 'March 2025 – Present',
    location: 'Bhubaneswar, India',
    description: [
      'Architecting and developing scalable backend services using Node.js and Express.js, focusing on high-performance and maintainability.',
      'Designing complex database schemas in MongoDB and MySQL, ensuring data integrity and efficient query performance.',
      'Implementing secure authentication and authorization systems using JWT and OAuth 2.0 protocols.',
      'Building responsive and intuitive user interfaces with React.js and Next.js, leveraging modern state management patterns.',
      'Collaborating with cross-functional teams to deliver production-grade software solutions across the full MERN stack.',
    ],
  },
  {
    company: 'QSpiders Campus Connect',
    role: 'Software Engineer',
    period: 'September 2024 – February 2025',
    location: 'Bangalore, India',
    description: [
      'Intensive training and project work focused on full-stack engineering principles and modern software development lifecycles.',
      'Developed multiple web applications using the MERN stack, emphasizing clean code and modular architecture.',
      'Gained deep proficiency in JavaScript (ES6+), asynchronous programming, and DOM manipulation.',
      'Participated in code reviews and agile sprints to improve development speed and code quality.',
    ],
  },
  {
    company: 'Juvenilia Technology',
    role: 'Java Developer',
    period: 'November 2023 – December 2024',
    location: 'Remote',
    description: [
      'Contributed to the development of enterprise-level backend systems using Java and Spring Boot.',
      'Implemented RESTful APIs and integrated them with frontend components for seamless data flow.',
      'Worked on database management and optimization using SQL, improving application response times.',
      'Debugged and resolved complex technical issues in legacy systems, ensuring high availability.',
    ],
  },
  {
    company: 'OCAC Training Center',
    role: 'Java Developer Intern',
    period: 'September 2023 – October 2023',
    location: 'Bhubaneswar, India',
    description: [
      'Completed a rigorous internship focused on Java development and software engineering best practices.',
      'Assisted in the development of internal tools and modules using Java SE and EE.',
      'Learned and applied software development lifecycle (SDLC) practices, from requirement gathering to testing.',
      'Gained hands-on experience with version control systems like Git and collaborative development tools.',
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section-padding bg-zinc-50 dark:bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-1.5 rounded-full bg-gold-100 dark:bg-gold-950/30 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-4 border border-gold-200/50 dark:border-gold-500/20"
          >
            Career Path
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white"
          >
            Professional <span className="text-gold-500">Journey.</span>
          </motion.h2>
        </div>

        <div ref={ref} className="space-y-12 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-16 pb-12 border-l-2 border-gold-500/20 last:pb-0"
            >
              <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-gold-500 border-4 border-white dark:border-black shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
              
              <div className="glass p-8 md:p-10 rounded-3xl border-gold-500/10 hover:border-gold-500/30 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-gold-500 transition-colors">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-zinc-500 font-medium">
                      <span className="flex items-center gap-1.5 text-gold-600 dark:text-gold-500">
                        <Briefcase size={16} /> {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={16} /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 text-sm font-bold whitespace-nowrap self-start md:self-center border border-gold-500/20">
                    <Calendar size={16} /> {exp.period}
                  </div>
                </div>
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      <div className="mt-2 w-2 h-2 rounded-full bg-gold-500 shrink-0 opacity-60" />
                      {item}
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
