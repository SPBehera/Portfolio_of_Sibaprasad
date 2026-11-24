import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import {
  BookOpen,
  Clock,
  ArrowRight,
  X,
  Copy,
  Check,
  AlertCircle,
  Info,
  Lightbulb,
  CheckCircle2,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { technicalBlogs, BlogArticle } from '../data/blogs';
import { WhatsAppIcon } from './TechIcons';

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);
  const [copiedSnippetId, setCopiedSnippetId] = useState<string | null>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setActiveArticle(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeArticle]);

  const categories = ['All', 'React Native', 'Backend Development', 'TypeScript'];

  const filteredBlogs =
    selectedCategory === 'All'
      ? technicalBlogs
      : technicalBlogs.filter((blog) => blog.category.includes(selectedCategory));

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippetId(id);
    setTimeout(() => setCopiedSnippetId(null), 2000);
  };

  return (
    <section
      id="blogs"
      ref={ref}
      className="py-12 md:py-16 bg-white dark:bg-[#07090e] border-t border-slate-200/80 dark:border-white/5 relative scroll-mt-16 transition-colors duration-300"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/3 left-1/10 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-indigo-200/60 dark:border-indigo-500/20 shadow-xs"
          >
            <BookOpen size={13} />
            <span>Technical Insights & Publications</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Engineering <span className="text-gradient">Articles & Guides.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="mt-2.5 max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-400"
          >
            In-depth architectural breakdowns, production lessons, and practical solutions drawn from real-world development with React Native, Node.js, and TypeScript.
          </motion.p>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-6"
          >
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? technicalBlogs.length
                  : technicalBlogs.filter((b) => b.category.includes(cat)).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
                  }`}
                >
                  {cat} <span className="opacity-70 text-[10px]">({count})</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * idx }}
              className="group flex flex-col justify-between rounded-2xl bg-slate-50 dark:bg-[#0c101c] border border-slate-200 dark:border-white/10 overflow-hidden hover:border-indigo-400/60 dark:hover:border-cyan-500/40 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-cyan-500/5 transition-all duration-300"
            >
              {/* Card Header Image / Banner */}
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={blog.featuredImage}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Badges on image */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-indigo-600/90 text-white backdrop-blur-md shadow-xs">
                    {blog.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-black/60 text-slate-200 backdrop-blur-md flex items-center gap-1">
                    <Clock size={11} />
                    {blog.readTime}
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-3 text-[11px] text-slate-300 flex items-center gap-1.5">
                  <Calendar size={11} />
                  <span>{blog.publishDate}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {blog.summary}
                  </p>
                </div>

                {/* Tags & Action Button */}
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/5 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-200/70 dark:bg-white/5 text-slate-700 dark:text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveArticle(blog)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3.5 rounded-xl text-xs font-semibold bg-white dark:bg-white/5 text-indigo-600 dark:text-cyan-400 border border-slate-200 dark:border-white/10 hover:bg-indigo-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-950 transition-all cursor-pointer group/btn shadow-2xs"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.35 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0c101c] border border-slate-200 dark:border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col z-10 overflow-hidden my-auto"
            >
              {/* Modal Top Navigation Bar */}
              <div className="sticky top-0 z-20 px-5 sm:px-8 py-3.5 bg-white/95 dark:bg-[#0c101c]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3 text-xs">
                  <span className="px-2.5 py-1 rounded-md font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 border border-indigo-200 dark:border-indigo-500/20">
                    {activeArticle.category}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Clock size={12} />
                    {activeArticle.readTime}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Close reader"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Scrollable Article Content */}
              <div className="p-5 sm:p-8 md:p-10 overflow-y-auto space-y-8 text-slate-800 dark:text-slate-200">
                {/* Article Header */}
                <div className="space-y-4 pb-6 border-b border-slate-200 dark:border-white/10">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                    {activeArticle.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    <div>
                      <span className="text-slate-400 dark:text-slate-500">Author:</span>{' '}
                      <strong className="text-slate-900 dark:text-white font-semibold">{activeArticle.author}</strong>
                    </div>
                    <span>•</span>
                    <div>
                      <span className="text-slate-400 dark:text-slate-500">Published:</span>{' '}
                      <span className="font-medium">{activeArticle.publishDate}</span>
                    </div>
                  </div>
                </div>

                {/* Intro Paragraphs */}
                <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  {activeArticle.content.intro.map((p, i) => (
                    <p key={i} className={i === 0 ? 'text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100' : ''}>
                      {p}
                    </p>
                  ))}
                </div>

                {/* Dynamic Sections */}
                {activeArticle.content.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4 pt-4">
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-1.5 h-5 rounded-full bg-indigo-600 dark:bg-cyan-400" />
                      {section.heading}
                    </h2>

                    {section.body && (
                      <div className="space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                        {section.body.map((b, bi) => (
                          <p key={bi}>{b}</p>
                        ))}
                      </div>
                    )}

                    {/* Bullet List Items */}
                    {section.listItems && (
                      <ul className="space-y-2 pl-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        {section.listItems.map((item, li) => (
                          <li key={li} className="flex items-start gap-2.5">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Callout box */}
                    {section.callout && (
                      <div
                        className={`p-4 rounded-xl border text-xs sm:text-sm flex items-start gap-3 ${
                          section.callout.type === 'warning'
                            ? 'bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-200'
                            : section.callout.type === 'tip'
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-200'
                            : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-900 dark:text-indigo-200'
                        }`}
                      >
                        {section.callout.type === 'warning' ? (
                          <AlertCircle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                        ) : section.callout.type === 'tip' ? (
                          <Lightbulb size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                        ) : (
                          <Info size={18} className="text-indigo-500 shrink-0 mt-0.5" />
                        )}
                        <p className="leading-relaxed">{section.callout.text}</p>
                      </div>
                    )}

                    {/* Code Snippet Block with Copy */}
                    {section.code && (
                      <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-[#0d1117] text-slate-200 shadow-md">
                        <div className="px-4 py-2 bg-slate-900/90 border-b border-white/5 flex items-center justify-between text-xs">
                          <span className="font-mono text-slate-400">{section.code.filename || section.code.language}</span>
                          <button
                            onClick={() =>
                              copyToClipboard(section.code!.snippet, `snippet-${idx}`)
                            }
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer text-[11px]"
                          >
                            {copiedSnippetId === `snippet-${idx}` ? (
                              <>
                                <Check size={12} className="text-emerald-400" />
                                <span className="text-emerald-400">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy size={12} />
                                <span>Copy Code</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono text-cyan-300 leading-relaxed">
                          <code>{section.code.snippet}</code>
                        </pre>
                      </div>
                    )}

                    {/* Table Render */}
                    {section.table && (
                      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-slate-100 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold">
                            <tr>
                              {section.table.headers.map((h, hi) => (
                                <th key={hi} className="py-2.5 px-4 font-mono">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 dark:divide-white/5">
                            {section.table.rows.map((row, ri) => (
                              <tr key={ri} className="hover:bg-slate-50 dark:hover:bg-white/[0.02]">
                                {row.map((cell, ci) => (
                                  <td
                                    key={ci}
                                    className={`py-2.5 px-4 ${
                                      ci === 0 ? 'font-mono font-bold text-indigo-600 dark:text-cyan-400' : ''
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Error vs Fix Comparison Card (for TypeScript blog) */}
                    {section.comparison && (
                      <div className="space-y-3 pt-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Problem / Error Box */}
                          <div className="rounded-xl border border-red-500/30 bg-red-500/5 dark:bg-red-950/20 p-4 space-y-2">
                            <div className="flex items-center gap-2 text-xs font-semibold text-red-600 dark:text-red-400">
                              <AlertCircle size={14} />
                              <span>{section.comparison.errorTitle}</span>
                            </div>
                            <pre className="p-2.5 rounded-lg bg-black/40 text-red-300 font-mono text-xs overflow-x-auto">
                              <code>{section.comparison.errorCode}</code>
                            </pre>
                            <p className="text-[11px] text-red-500 dark:text-red-400 font-mono">
                              {section.comparison.errorMessage}
                            </p>
                          </div>

                          {/* Fix / Solution Box */}
                          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/20 p-4 space-y-2">
                            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                              <CheckCircle2 size={14} />
                              <span>{section.comparison.solutionTitle}</span>
                            </div>
                            <pre className="p-2.5 rounded-lg bg-black/40 text-emerald-300 font-mono text-xs overflow-x-auto">
                              <code>{section.comparison.solutionCode}</code>
                            </pre>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                              {section.comparison.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Conclusion Block */}
                <div className="p-5 rounded-2xl bg-indigo-50/70 dark:bg-white/[0.03] border border-indigo-100 dark:border-white/10 space-y-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles size={16} className="text-indigo-600 dark:text-cyan-400" />
                    <span>Key Takeaway & Conclusion</span>
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeArticle.content.conclusion.map((c, ci) => (
                      <p key={ci}>{c}</p>
                    ))}
                  </div>
                </div>

                {/* Article Footer & Author CTA */}
                <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Published by <strong className="text-slate-900 dark:text-white">Siba Prasad Behera</strong>
                    <p className="text-[11px]">Full Stack & Mobile Engineer • Bhubaneswar, India</p>
                  </div>

                  <a
                    href={`https://wa.me/918260139338?text=${encodeURIComponent(
                      `Hi Siba! I just read your article "${activeArticle.title}" on your portfolio and wanted to connect.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Discuss on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
