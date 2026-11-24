import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Sparkles, ChevronLeft, ChevronRight, Layers, Terminal } from 'lucide-react';
import {
  ReactIcon,
  NextjsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindIcon,
  NodejsIcon,
  ExpressIcon,
  HonoIcon,
  MongoIcon,
  MysqlIcon,
  FirebaseIcon,
  DockerIcon,
  GitIcon,
  PostmanIcon,
  HtmlIcon,
  CssIcon,
  ZegoIcon,
} from './TechIcons';

interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Mobile & Tools' | 'AI Tools';
  level: number;
  icon: React.ReactNode;
  tag: string;
  description: string;
}

const techStack: TechItem[] = [
  {
    name: 'React.js',
    category: 'Frontend',
    level: 95,
    icon: <ReactIcon size={26} />,
    tag: 'Web UI',
    description: 'Component architecture, custom hooks & high-performance state management.',
  },
  {
    name: 'React Native',
    category: 'Mobile & Tools',
    level: 90,
    icon: <ReactIcon size={26} />,
    tag: 'Mobile App',
    description: 'Cross-platform iOS & Android mobile apps, navigation & native modules.',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    level: 95,
    icon: <NodejsIcon size={26} />,
    tag: 'Runtime',
    description: 'Asynchronous event-driven backend services & microservices architecture.',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    level: 92,
    icon: <TypeScriptIcon size={26} />,
    tag: 'Language',
    description: 'Strict static typing, interfaces, generics, and compile-time verification.',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    level: 92,
    icon: <ExpressIcon size={26} />,
    tag: 'Framework',
    description: 'RESTful API routing, enterprise middleware & request lifecycle management.',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    level: 92,
    icon: <MongoIcon size={26} />,
    tag: 'NoSQL',
    description: 'Document modeling, indexing, aggregation pipelines & high data availability.',
  },
  {
    name: 'MySQL',
    category: 'Database',
    level: 90,
    icon: <MysqlIcon size={26} />,
    tag: 'SQL',
    description: 'Relational database design, ACID compliance, query tuning & indexing.',
  },
  {
    name: 'Hono.js',
    category: 'Backend',
    level: 88,
    icon: <HonoIcon size={26} />,
    tag: 'Cloud & Edge',
    description: 'Ultra-lightweight, high-speed API runtime for modern OTA infrastructure.',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    level: 88,
    icon: <NextjsIcon size={26} />,
    tag: 'Full Stack',
    description: 'Server-side rendering, dynamic API routes & SEO-optimized modern web apps.',
  },
  {
    name: 'Firebase FCM',
    category: 'Mobile & Tools',
    level: 92,
    icon: <FirebaseIcon size={26} />,
    tag: 'Push Alerts',
    description: 'Real-time patient queue alerts, push messaging & cloud notification flows.',
  },
  {
    name: 'ZegoCloud SDK',
    category: 'Mobile & Tools',
    level: 88,
    icon: <ZegoIcon size={26} />,
    tag: 'Telemedicine',
    description: 'Real-time doctor-patient audio/video streaming & consultation integration.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 95,
    icon: <TailwindIcon size={26} />,
    tag: 'Styling',
    description: 'Modern utility-first responsive styling, design tokens & dark mode theming.',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    level: 92,
    icon: <JavaScriptIcon size={26} />,
    tag: 'Core JS',
    description: 'Deep mastery of event loop, asynchronous promises, closures & ESNext features.',
  },
  {
    name: 'Docker',
    category: 'Mobile & Tools',
    level: 82,
    icon: <DockerIcon size={26} />,
    tag: 'DevOps',
    description: 'Containerization, microservices packaging & multi-environment consistency.',
  },
  {
    name: 'Git & GitHub',
    category: 'Mobile & Tools',
    level: 92,
    icon: <GitIcon size={26} />,
    tag: 'VCS',
    description: 'Branching workflows, version control, PR reviews & release pipelines.',
  },
  {
    name: 'Postman',
    category: 'Mobile & Tools',
    level: 90,
    icon: <PostmanIcon size={26} />,
    tag: 'API Testing',
    description: 'Endpoint testing, automated collections, environment variables & mock servers.',
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Frontend',
    level: 95,
    icon: <HtmlIcon size={26} />,
    tag: 'Standards',
    description: 'Semantic DOM architecture, accessibility (a11y) & modern CSS Grid/Flexbox.',
  },
];

// Split tech stack into two continuous marquee rows
const row1 = techStack.slice(0, 9);
const row2 = techStack.slice(9);

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const carouselRef = useRef<HTMLDivElement>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Mobile & Tools'];

  const filteredTech = activeCategory === 'All'
    ? techStack
    : techStack.filter((t) => t.category === activeCategory);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="py-7 md:py-8 bg-white dark:bg-[#07090e] border-t border-slate-200/80 dark:border-white/5 relative overflow-hidden scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-3">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1.5 border border-indigo-200/60 dark:border-indigo-500/20">
            Continuous Tech Stack
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">
            Skills & <span className="text-gradient">Expertise.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Interactive, continuous showcase of technologies, libraries, and frameworks I run in production. Hover over any technology to inspect.
          </p>
        </div>

      </div>

      {/* INFINITE RUNNING CAROUSEL SECTION */}
      <div className="relative w-full py-1.5 space-y-2.5">
        {/* Left & Right Edge Blur Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-[#07090e] dark:via-[#07090e]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-[#07090e] dark:via-[#07090e]/80 to-transparent z-10" />

        {/* Running Row 1 (Right to Left) */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex gap-3.5">
            {[...row1, ...row1, ...row1].map((item, idx) => (
              <div
                key={`r1-${item.name}-${idx}`}
                className="glass-card p-3 sm:p-3.5 rounded-2xl flex items-center gap-3 min-w-[230px] sm:min-w-[260px] shrink-0 border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#121829] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-cyan-400">
                      {item.level}%
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate mb-1">
                    {item.tag}
                  </div>
                  <div className="h-1 w-full bg-slate-200/80 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${item.level}%` }}
                      className="h-full bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Running Row 2 (Left to Right) */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-reverse flex gap-3.5">
            {[...row2, ...row2, ...row2].map((item, idx) => (
              <div
                key={`r2-${item.name}-${idx}`}
                className="glass-card p-3 sm:p-3.5 rounded-2xl flex items-center gap-3 min-w-[230px] sm:min-w-[260px] shrink-0 border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#121829] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-400">
                      {item.level}%
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate mb-1">
                    {item.tag}
                  </div>
                  <div className="h-1 w-full bg-slate-200/80 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${item.level}%` }}
                      className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INTERACTIVE CAROUSEL CONTROLS & CARDS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-4 sm:mt-5">
        
        {/* Category Tabs & Carousel Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-3.5">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-slate-200/60 dark:bg-[#121829] border border-slate-200 dark:border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-white dark:bg-[#07090e] text-indigo-600 dark:text-cyan-400 shadow-sm border border-slate-200/80 dark:border-indigo-500/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollCarousel('left')}
              aria-label="Previous technologies"
              className="p-1.5 rounded-lg bg-white dark:bg-[#121829] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500/30 shadow-sm transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scrollCarousel('right')}
              aria-label="Next technologies"
              className="p-1.5 rounded-lg bg-white dark:bg-[#121829] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-500/30 shadow-sm transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Horizontally Scrollable Carousel Cards */}
        <div
          ref={carouselRef}
          className="flex gap-3.5 overflow-x-auto pb-2 pt-1 scrollbar-none scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredTech.map((item) => (
            <div
              key={`card-${item.name}`}
              className="glass-card p-4 rounded-2xl min-w-[240px] sm:min-w-[270px] max-w-[270px] shrink-0 snap-start flex flex-col justify-between border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#121829] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 border border-indigo-200 dark:border-indigo-500/20">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {item.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-500 dark:text-slate-400 text-[10px]">Proficiency</span>
                  <span className="text-indigo-600 dark:text-cyan-400 font-mono text-[10px] font-bold">
                    {item.level}%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${item.level}%` }}
                    className="h-full bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400 rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI & Productivity Banner with Real Tool Badges */}
        <div className="mt-4 glass-card p-3 sm:p-4 rounded-2xl border-indigo-500/20 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white shrink-0 shadow-md shadow-indigo-500/20">
              <Sparkles size={16} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">AI-Assisted Software Engineering</h4>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                Leveraging prompt engineering, AI code generation, automated debugging, and AI API integrations to accelerate shipping.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 self-start md:self-auto">
            {['GitHub Copilot', 'ChatGPT', 'Google Gemini', 'Prompt Engineering', 'AI Debugging'].map((tool) => (
              <span
                key={tool}
                className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-cyan-400 border border-indigo-200 dark:border-indigo-500/30"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
