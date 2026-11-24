import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import BlogSection from './components/BlogSection';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 dark:bg-[#07090e] text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <main className="w-full overflow-x-hidden">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <BlogSection />
          <GithubSection />
          <Contact />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}
