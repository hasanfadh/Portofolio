"use client";

import React, { useState, useEffect } from "react";
import TextCursor from "@/components/TextCursor";
import SplitText from "@/components/SplitText";
import RotatingText from "@/components/RotatingText";
import LogoLoop from "@/components/LogoLoop";
import CircularGallery from "@/components/CircularGallery";
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';

const projects = [
    {
    id: 1,
    image: '/images/HasanManagement.png',
    title: 'Hasan Management',
    tech: 'Blade, PHP, Laragon',
    year: '2025',
    description: 'Finance web app for UMKM with 1,000+ transactions, fast budgeting, dashboards, and 60% quicker PDF/Excel reports.',
    link: 'https://github.com/hasanfadh/HasanManagement',
    gradient: 'from-rose-500/30 to-pink-600/30',
    accentColor: 'rose'
  },
  {
    id: 2,
    image: '/images/perpus.png',
    title: 'Perpustakaan Arcadia',
    tech: 'Blade, PHP, Tailwind, Laragon',
    year: '2025',
    description: 'Built library booking & drive-thru pickup system for 1,000 users, automating codes & cutting wait times for faster service.',
    link: 'https://github.com/hasanfadh/PerpustakaanArcadia',
    gradient: 'from-violet-500/30 to-indigo-600/30',
    accentColor: 'violet'
  },
  {
    id: 3,
    image: '/images/scanmart.png',
    title: 'ScanMart',
    tech: 'Blade, PHP, Tailwind, Laragon',
    year: '2025',
    description: 'Built supermarket QR self-checkout web app for 200+ products, cutting queues ~50% with fast, responsive UI.',
    link: 'https://github.com/hasanfadh/ScanMart/',
    gradient: 'from-cyan-500/30 to-sky-600/30',
    accentColor: 'cyan'
  },
  {
    id: 4,
    image: '/images/bodyTrackr.png',
    title: 'BodyTrackr - Fitness Tracking App',
    tech: 'Flutter/Dart',
    year: '2025',
    description: 'Developed a Flutter-based health tracking app with food, exercise, and daily monitoring features. All functions passed testing with no major bugs, achieving an average user satisfaction score above 4/5.',
    link: 'https://github.com/hasanfadh/BodyTrackr',
    gradient: 'from-emerald-500/30 to-teal-600/30',
    accentColor: 'emerald'
  },
  {
    id: 5,
    image: '/images/emosense.png',
    title: 'EmoSense - Emotion Detection on Youtube Comments',
    tech: 'Python, Django, IndoBERT',
    year: '2025',
    description: 'Fine-tuned IndoBERT (88% accuracy) to classify Indonesian YouTube comments, deployed on Django for clearer sentiment trends and insightful emotion analysis.',
    link: 'https://github.com/hasanfadh/EmoSense',
    gradient: 'from-blue-500/30 to-purple-600/30',
    accentColor: 'blue'
  },
  {
    id: 6,
    image: '/images/bhayangkara.png',
    title: 'Rumah Al-Quran Ikhlas Bhayangkara',
    tech: 'HTML, Tailwind CSS, JavaScript',
    year: '2025',
    description: 'Built a static landing page using HTML5, Tailwind CSS, and vanilla JavaScript. Implemented responsive navigation, scroll-triggered animations with Intersection Observer, and mobile-optimized interface.',
    link: 'https://rumah-al-qur-an-ikhlas-bhayangkara.vercel.app/',
    gradient: 'from-amber-500/30 to-orange-600/30',
    accentColor: 'amber'
  },
];

const hardSkills = ['Flutter & Dart', 'Machine Learning', 'Python', 'Data Visualization', 'Tableau', 'Django', 'NLP', 'Laravel', 'Next.JS', 'Tailwind', 'Figma', 'Canva'];
const softSkills = ['Leadership', 'Team Coordination', 'Collaboration', 'Strategic Planning', 'Communication', 'Attention to Detail', 'Problem Solving'];

const certifications = [
  {
    id: 1,
    title: 'Belajar Dasar Visualisasi Data',
    from: 'Dicoding Indonesia',
    year: '2024',
    link: 'https://www.dicoding.com/certificates/MEPJNR6WQX3V',
  },
  {
    id: 2,
    title: 'Memulai Pemrograman dengan Python',
    from: 'Dicoding Indonesia',
    year: '2025',
    link: 'https://www.dicoding.com/certificates/98XWL07EWZM3',
  },
  {
    id: 3,
    title: 'Prompt Engineering untuk Software Developer',
    from: 'Dicoding Indonesia',
    year: '2025',
    link: 'https://www.dicoding.com/certificates/JMZVVERJRZN9',
  },
  // {
  //   id: 4,
  //   title: 'Belajar Penggunaan Generative AI',
  //   from: 'Dicoding Indonesia',
  //   year: '2025',
  //   link: 'https://www.dicoding.com/certificates/L4PQ27WL2ZO1',
  // },
];

const getAccentColors = (color) => {
  const colors = {
    rose: { border: 'border-rose-500/50', text: 'text-rose-400', bg: 'bg-rose-500', shadow: 'shadow-rose-500/20', hover: 'hover:border-rose-400'
    },
    violet: { border: 'border-violet-500/50', text: 'text-violet-400', bg: 'bg-violet-500', shadow: 'shadow-violet-500/20', hover: 'hover:border-violet-400'
    },
    cyan: { border: 'border-cyan-500/50', text: 'text-cyan-400', bg: 'bg-cyan-500', shadow: 'shadow-cyan-500/20', hover: 'hover:border-cyan-400'
    },
    amber: { border: 'border-amber-500/50', text: 'text-amber-400', bg: 'bg-amber-500', shadow: 'shadow-amber-500/20', hover: 'hover:border-amber-400' },
    blue: { border: 'border-blue-500/50', text: 'text-blue-400', bg: 'bg-blue-500', shadow: 'shadow-blue-500/20', hover: 'hover:border-blue-400' },
    emerald: { border: 'border-emerald-500/50', text: 'text-emerald-400', bg: 'bg-emerald-500', shadow: 'shadow-emerald-500/20', hover: 'hover:border-emerald-400' },
  };
  return colors[color] || colors.amber;
};

const techLogos = [
  { node: <SiGithub />, title: "GitHub", href: "https://github.com/hasanfadh" },
  { node: <SiLinkedin />, title: "LinkedIn", href: "https://www.linkedin.com/in/hasan-fadhlurrahman" },
  { node: <SiInstagram />, title: "Instagram", href: "https://www.instagram.com/haa.sanf/" },
];

function App() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredCert, setHoveredCert] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [logoSize, setLogoSize] = useState({ height: 48, gap: 40 });
  
  useEffect(() => {
    const updateLogoSize = () => {
      if (window.innerWidth < 640) {
        setLogoSize({ height: 32, gap: 24 });
      } else if (window.innerWidth < 768) {
        setLogoSize({ height: 40, gap: 32 });
      } else {
        setLogoSize({ height: 48, gap: 40 });
      }
    };
    updateLogoSize();
    window.addEventListener('resize', updateLogoSize);
    return () => window.removeEventListener('resize', updateLogoSize);
  }, []);

  return (
    <div className="bg-[#020410] min-h-screen relative" style={{ fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      
      {/* Circular Gallery */}
      <div className="mb-6 sm:mb-10 mt-6 sm:mt-8 md:mt-10">
        <CircularGallery bend={0} textColor="#020410" borderRadius={0.05} scrollEase={0.02}/>
      </div>

      {/* Header */}
      <div className="relative z-10 px-4 sm:px-6">
        <header className="text-center mb-4 sm:mb-6">
          <SplitText
            text="Hasan Fadhlurrahman"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white block mb-0"
            strokeColor='#000000'
            delay={50}
            duration={0.8}
            splitType="chars"
            from={{ opacity: 0, y: 100, rotateX: -90 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
          />
          
          <div className="text-white mt-0 flex flex-col items-center justify-center gap-2">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center">
              Information Systems at Airlangga University
            </p>
            <RotatingText
              texts={['Frontend', 'Fullstack', 'Machine Learning']}
              className="text-base sm:text-base md:text-lg lg:text-xl font-bold bg-white text-[#020410] px-3 py-1 rounded-md"
            />
          </div>
        </header>
      </div>
      
      {/* Background blur effects */}
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
          
          {/* Projects Section */}
          <section className="mb-16 sm:mb-24 md:mb-32">
            <div className="mb-10 sm:mb-16">
              <div className="flex items-center gap-4 mb-3">
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-amber-500/50 to-transparent"></div>              
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-center">
                <span className="bg-linear-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Featured
                </span>
                <span className="text-white ml-2 sm:ml-3">Projects</span>
              </h2>
              <div className="flex items-center gap-4 mt-3">
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-amber-500/50 to-transparent"></div>
              </div>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl text-center font-light tracking-wide mt-3 px-4">
                Crafting digital experiences with precision and passion
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project) => {
                const colors = getAccentColors(project.accentColor);
                return (
                  <div
                    key={project.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className={`absolute -inset-1 bg-linear-to-r ${project.gradient} rounded-3xl blur-2xl transition-all duration-700 ${hoveredProject === project.id ? 'opacity-100 scale-105' : 'opacity-0'}`}></div>
                    
                    <div className={`relative bg-slate-950/90 backdrop-blur-xl border ${hoveredProject === project.id ? colors.border : 'border-slate-800/50'} rounded-2xl overflow-hidden transition-all duration-500 ${hoveredProject === project.id ? `shadow-2xl ${colors.shadow}` : ''}`}>
                      
                      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent z-10"></div>
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                          <div className={`px-3 sm:px-4 py-1.5 sm:py-2 ${colors.bg} bg-opacity-90 backdrop-blur-sm rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-lg`}>
                            {project.year}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-5 sm:p-6 md:p-8">
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                          <div className={`w-2 h-2 ${colors.bg} rounded-full`}></div>
                          <span className={`text-xs font-semibold ${colors.text} uppercase tracking-widest`}>
                            {project.tech}
                          </span>
                        </div>
                        
                        <h3 className={`text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 transition-colors duration-300 ${hoveredProject === project.id ? colors.text : ''}`}>
                          {project.title}
                        </h3>
                        
                        <p className="text-slate-400 leading-relaxed mb-5 sm:mb-6 md:mb-8 text-xs sm:text-sm">
                          {project.description}
                        </p>
                        
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/btn inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-linear-to-r ${project.gradient} border ${colors.border} text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl ${colors.shadow} hover:-translate-y-1 text-xs sm:text-sm md:text-base`}
                        >
                          <span>Explore Project</span>
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          
          {/* Skills Section */}
          <section className="mb-16 sm:mb-24 md:mb-32">
            <div className="mb-10 sm:mb-16">
              <div className="flex items-center gap-4 mb-3">
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-center px-2">
                  <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Skills
                  </span>
                  <span className="text-white ml-2 sm:ml-3">Expertise</span>
                </h2>
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>
              </div>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl text-center font-light tracking-wide px-4">
                A powerful blend of technical capabilities and human excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {/* Hard Skills */}
              <div className="group/card relative">
                <div className="absolute -inset-1 bg-linear-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-slate-950/80 backdrop-blur-xl border border-slate-800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 hover:border-blue-500/50 transition-all duration-500">
                  
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl blur-lg opacity-50"></div>
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">Hard Skills</h3>
                      <p className="text-slate-500 text-xs sm:text-sm">Technical Capabilities</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                    {hardSkills.map((skill) => (
                      <div
                        key={skill}
                        className="group/skill relative"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className={`absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-600/20 rounded-xl sm:rounded-2xl blur-xl transition-opacity duration-300 ${hoveredSkill === skill ? 'opacity-100' : 'opacity-0'}`}></div>
                        <div className="relative px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3.5 bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 text-slate-300 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold hover:border-blue-500/50 hover:text-white transition-all duration-300 cursor-pointer">
                          {skill}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div className="group/card relative">
                <div className="absolute -inset-1 bg-linear-to-r from-purple-500/20 to-pink-600/20 rounded-3xl blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-slate-950/80 backdrop-blur-xl border border-slate-800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 hover:border-purple-500/50 transition-all duration-500">
                  
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl sm:rounded-2xl blur-lg opacity-50"></div>
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">Soft Skills</h3>
                      <p className="text-slate-500 text-xs sm:text-sm">Human Excellence</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                    {softSkills.map((skill) => (
                      <div
                        key={skill}
                        className="group/skill relative"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className={`absolute inset-0 bg-linear-to-r from-purple-500/20 to-pink-600/20 rounded-xl sm:rounded-2xl blur-xl transition-opacity duration-300 ${hoveredSkill === skill ? 'opacity-100' : 'opacity-0'}`}></div>
                        <div className="relative px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3.5 bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 text-slate-300 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold hover:border-purple-500/50 hover:text-white transition-all duration-300 cursor-pointer">
                          {skill}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-12 sm:mb-16 md:mb-20">
            <div className="mb-10 sm:mb-16">
              <div className="flex items-center gap-4 mb-3">
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-emerald-500/50 to-transparent"></div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-center px-2">
                  <span className="bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                    Certified
                  </span>
                  <span className="text-white ml-2 sm:ml-3">Excellence</span>
                </h2>
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-teal-500/50 to-transparent"></div>
              </div>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl text-center font-light tracking-wide px-4">
                Continuous learning and professional validation
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredCert(cert.id)}
                  onMouseLeave={() => setHoveredCert(null)}
                >
                  <div className={`absolute -inset-1 bg-linear-to-r from-emerald-500/30 to-teal-500/30 rounded-2xl blur-2xl transition-all duration-700 ${hoveredCert === cert.id ? 'opacity-100' : 'opacity-0'}`}></div>
                  
                  <div className="relative bg-slate-950/90 backdrop-blur-xl border border-slate-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 hover:border-emerald-500/50 transition-all duration-500 h-full flex flex-col">
                    
                    <div className="relative mb-6 sm:mb-8">
                      <div className="absolute inset-0 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl blur-lg opacity-30"></div>
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="grow">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm mb-2 sm:mb-4">from {cert.from}</p>
                      <div className="flex items-center gap-2 mb-4 sm:mb-6">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <p className="text-slate-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">{cert.year}</p>
                      </div>
                    </div>
                     
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 sm:gap-3 text-emerald-400 hover:text-emerald-300 font-bold text-xs sm:text-sm transition-all duration-300 group-hover:gap-4"
                    >
                      <span>View Certificate</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      
      {/* Logo Loop */}
      <div className="h-16 sm:h-20 md:h-24 lg:h-28 w-full relative overflow-hidden mb-8">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={logoSize.height}
          gap={logoSize.gap}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#020410"
          ariaLabel="Technology partners"
        />
      </div>
      
      {/* Text Cursor */}
      <TextCursor
        spacing={80}
        maxPoints={10}
        delay={0.01}
        followMouseDirection={true}
        randomFloat={true}
        exitDuration={0.3}
        removalInterval={20}
      />
    </div>
  );
}

export default App;