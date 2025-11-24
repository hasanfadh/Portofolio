"use client";

import React,  { useState }  from "react";
import TextCursor from "@/components/TextCursor";
import SplitText from "@/components/SplitText";
import RotatingText from "@/components/RotatingText";
import LogoLoop from "@/components/LogoLoop";
import CircularGallery from "@/components/CircularGallery";
import { SiGithub, SiLinkedin, SiInstagram, SiTailwindcss } from 'react-icons/si';
import "./globals.css";

const projects = [
  {
    id: 1,
    image: '/images/bhayangkara.png',
    title: 'Rumah Al-Quran Ikhlas Bhayangkara',
    tech: 'Laravel, Blade, PHP, HTML',
    year: '2025',
    description: 'Built a static landing page using HTML5, Tailwind CSS, and vanilla JavaScript. Implemented responsive navigation, scroll-triggered animations with Intersection Observer, and mobile-optimized interface.',
    link: 'https://rumah-al-qur-an-ikhlas-bhayangkara.vercel.app/',
    gradient: 'from-amber-500/30 to-orange-600/30',
    accentColor: 'amber'
  },
  {
    id: 2,
    image: '/images/emosense.png',
    title: 'EmoSense - Emotion Detector on YouTube Comments',
    tech: 'Python, Django, IndoBERT',
    year: '2025',
    description: 'Built an emotion analysis web app that detects emotional tone from YouTube comments using a fine-tuned IndoBERT model. Integrated model deployment into Django web framework.',
    link: 'https://github.com/hasanfadh/EmoSense',
    gradient: 'from-blue-500/30 to-purple-600/30',
    accentColor: 'blue'
  },
  {
    id: 3,
    image: '/images/bodyTrackr.png',
    title: 'BodyTrackr - Fitness Tracking App',
    tech: 'Flutter/Dart',
    year: '2025',
    description: 'Developed a Flutter-based health tracking app with food, exercise, and daily monitoring features. All functions passed testing with no major bugs, achieving an average user satisfaction score above 4/5.',
    link: 'https://github.com/hasanfadh/BodyTrackr',
    gradient: 'from-emerald-500/30 to-teal-600/30',
    accentColor: 'emerald'
  },
];

const hardSkills = ['Flutter & Dart', 'Machine Learning', 'Python', 'Data Visualization', 'Tableau', 'Django', 'NLP', 'Laravel', 'Next.JS'];
const softSkills = ['Leadership', 'Team Coordination', 'Strategic Planning', 'Communication', 'Attention to Detail'];

const certifications = [
  {
    id: 1,
    title: 'Memulai Pemrograman dengan Python',
    year: '2025',
    link: 'https://www.dicoding.com/certificates/98XWL07EWZM3',
    icon: 'python'
  },
  {
    id: 2,
    title: 'Prompt Engineering for Software Developer',
    year: '2025',
    link: 'https://www.dicoding.com/certificates/JMZVVERJRZN9',
    icon: 'ai'
  },
  {
    id: 3,
    title: 'Belajar Dasar Visualisasi Data',
    year: '2024',
    link: 'https://www.dicoding.com/certificates/MEPJNR6WQX3V',
    icon: 'chart'
  },
];

const getAccentColors = (color) =>{
  const colors = {
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

  return (
    <div style={{
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#020410',
      padding: '40px 20px',
      boxSizing: 'border-box',
      minHeight: '100vh',
      position: 'relative',
    }}>

      <div style={{}}>
        <CircularGallery bend={0} textColor="#020410" borderRadius={0.05} scrollEase={0.02}/>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <header style={{ textAlign: 'center' }}>
          <SplitText
            text="Hasan Fadhlurrahman"
            style={{ 
              fontSize: '3rem', 
              marginBottom: '0',
              marginTop: '18px',
              fontWeight: 'bold',
              display: 'block',
              color: '#f1f1f1',
            }}
            strokeColor='#000000'
            delay={50}
            duration={0.8}
            splitType="chars"
            from={{ opacity: 0, y: 100, rotateX: -90 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
          />
          
          <div style={{
            fontSize: '1.2rem',
            color: '#f1f1f1',
            marginTop: '0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            flexWrap: 'wrap'
          }}>
            <p style={{ width: '100%', textAlign: 'center', marginBottom: '5px'}}>
              Information Systems at Airlangga University</p>
            <RotatingText
              texts={['Mobile App', 'Website', 'Mobile App', "Website"]}
              style={{
                padding: '4px 12px',
                backgroundColor: '#f5f5f5',
                color: '#020410',
                overflow: 'hidden',
                borderRadius: '6px',
                fontSize: '1.2rem', 
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            />
          </div>
        </header>
      </div>
      
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">
          {/* Projects */}
          <section className="mb-40">
            <div className="mb-20">
              <div className="flex items-center gap-6 mb-2">
                <div className="h-px grow bg-linear-to-r from-transparent via-amber-500/50 to-transparent"></div>              
              </div>
              <h2 className="text-6xl font-black tracking-tight text-center">
                <span className="bg-linear-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Featured
                </span>
                <span className="text-white ml-3">Projects</span>
              </h2>
              <div className="flex items-center gap-6 mt-4">
                <div className="h-px grow bg-linear-to-r from-transparent via-amber-500/50 to-transparent"></div>
              </div>
              <p className="text-slate-400 text-xl text-center font-light tracking-wide">
              Crafting digital experiences with precision and passion
            </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {projects.map((project) => {
              const colors = getAccentColors(project.accentColor);
              return (
                <div
                  key={project.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-linear-to-r ${project.gradient} rounded-3xl blur-2xl transition-all duration-700 ${hoveredProject === project.id ? 'opacity-100 scale-105' : 'opacity-0'}`}></div>
                  
                  {/* Card */}
                  <div className={`relative bg-slate-950/90 backdrop-blur-xl border ${hoveredProject === project.id ? colors.border : 'border-slate-800/50'} rounded-2xl overflow-hidden transition-all duration-500 ${hoveredProject === project.id ? `shadow-2xl ${colors.shadow}` : ''}`}>
                    
                    {/* Image container */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent z-10"></div>
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Floating badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className={`px-4 py-2 ${colors.bg} bg-opacity-90 backdrop-blur-sm rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-lg`}>
                          {project.year}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      {/* Tech stack */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`w-2 h-2 ${colors.bg} rounded-full`}></div>
                        <span className={`text-xs font-semibold ${colors.text} uppercase tracking-widest`}>
                          {project.tech}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className={`text-2xl font-bold text-white mb-4 transition-colors duration-300 ${hoveredProject === project.id ? colors.text : ''}`}>
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                        {project.description}
                      </p>
                      
                      {/* CTA Button */}
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r ${project.gradient} border ${colors.border} text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl ${colors.shadow} hover:-translate-y-1`}
                      >
                        <span>Explore Project</span>
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <section className="mb-40">
          <div className="mb-20">
            <div className="flex items-center gap-6 mb-6">
              <div className="h-px grow bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>
              <h2 className="text-6xl font-black tracking-tight">
                <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Skills
                </span>
                <span className="text-white ml-3">Expertise</span>
              </h2>
              <div className="h-px grow bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>
            </div>
            <p className="text-slate-400 text-xl text-center font-light tracking-wide">
              A powerful blend of technical capabilities and human excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Hard Skills */}
            <div className="group/card relative">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-slate-950/80 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-12 hover:border-blue-500/50 transition-all duration-500">
                
                {/* Icon header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Hard Skills</h3>
                    <p className="text-slate-500 text-sm">Technical Capabilities</p>
                  </div>
                </div>
                
                {/* Skills grid */}
                <div className="flex flex-wrap gap-4">
                  {hardSkills.map((skill, index) => (
                    <div
                      key={skill}
                      className="group/skill relative"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className={`absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl transition-opacity duration-300 ${hoveredSkill === skill ? 'opacity-100' : 'opacity-0'}`}></div>
                      <div className="relative px-6 py-3.5 bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 text-slate-300 rounded-2xl text-sm font-semibold hover:border-blue-500/50 hover:text-white transition-all duration-300 cursor-pointer">
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
              <div className="relative bg-slate-950/80 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-12 hover:border-purple-500/50 transition-all duration-500">
                
                {/* Icon header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative w-16 h-16 bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Soft Skills</h3>
                    <p className="text-slate-500 text-sm">Human Excellence</p>
                  </div>
                </div>
                
                {/* Skills grid */}
                <div className="flex flex-wrap gap-4">
                  {softSkills.map((skill, index) => (
                    <div
                      key={skill}
                      className="group/skill relative"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className={`absolute inset-0 bg-linear-to-r from-purple-500/20 to-pink-600/20 rounded-2xl blur-xl transition-opacity duration-300 ${hoveredSkill === skill ? 'opacity-100' : 'opacity-0'}`}></div>
                      <div className="relative px-6 py-3.5 bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 text-slate-300 rounded-2xl text-sm font-semibold hover:border-purple-500/50 hover:text-white transition-all duration-300 cursor-pointer">
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
        <section className="mb-20">
          <div className="mb-20">
            <div className="flex items-center gap-6 mb-6">
              <div className="h-px grow bg-linear-to-r from-transparent via-emerald-500/50 to-transparent"></div>
              <h2 className="text-6xl font-black tracking-tight">
                <span className="bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                  Certified
                </span>
                <span className="text-white ml-3">Excellence</span>
              </h2>
              <div className="h-px grow bg-linear-to-r from-transparent via-teal-500/50 to-transparent"></div>
            </div>
            <p className="text-slate-400 text-xl text-center font-light tracking-wide">
              Continuous learning and professional validation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="group relative"
                onMouseEnter={() => setHoveredCert(cert.id)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-linear-to-r from-emerald-500/30 to-teal-500/30 rounded-2xl blur-2xl transition-all duration-700 ${hoveredCert === cert.id ? 'opacity-100' : 'opacity-0'}`}></div>
                
                {/* Card */}
                <div className="relative bg-slate-950/90 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-10 hover:border-emerald-500/50 transition-all duration-500 h-full flex flex-col">
                  
                  {/* Icon */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl blur-lg opacity-30"></div>
                    <div className="relative w-14 h-14 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="grow">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">{cert.year}</p>
                    </div>
                  </div>
                  
                  {/* Button */}
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-emerald-400 hover:text-emerald-300 font-bold text-sm transition-all duration-300 group-hover:gap-4"
                  >
                    <span>View Certificate</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      
      <div style={{ height: "100px", width: "100%", position: "relative", overflow: "hidden" }}>
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#020410"
          ariaLabel="Technology partners"
        />
      </div>
      
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