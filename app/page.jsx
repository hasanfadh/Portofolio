import React from "react";
import TextCursor from "@/components/TextCursor";
import SplitText from "@/components/SplitText";
import TextPressure from "@/components/TextPressure";
import RotatingText from "@/components/RotatingText";
import LogoLoop from "@/components/LogoLoop";
import { SiGithub, SiLinkedin, SiInstagram, SiTailwindcss } from 'react-icons/si';
import "./globals.css";

const techLogos = [
  { node: <SiGithub />, title: "GitHub", href: "https://github.com/hasanfadh" },
  { node: <SiLinkedin />, title: "LinkedIn", href: "https://www.linkedin.com/in/hasan-fadhlurrahman" },
  { node: <SiInstagram />, title: "Instagram", href: "https://www.instagram.com/haa.sanf/" },
];

function App() {
  return (
    <div style={{
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#000000',
      color: '#ffffff',
      padding: '40px 20px',
      boxSizing: 'border-box',
      minHeight: '100vh',
      position: 'relative',
    }}>
      <div style={{position: 'relative', height: '300px', marginBottom: '80px'}}>
        <TextPressure
          text="Hello!"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <header style={{ textAlign: 'center', marginBottom: '20px' }}>
          <SplitText
            text="Saya Hasan Fadhlurrahman"
            style={{ 
              fontSize: '3rem', 
              marginBottom: '0',
              fontWeight: 'bold',
              display: 'block',
              color: '#f1f1f1',
            }}
            strokeColor='#000000'
            delay={200}
            duration={0.8}
            splitType="chars"
            from={{ opacity: 0, y: 100, rotateX: -90 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
          />
          
          <div style={{
            fontSize: '1.2rem',
            color: '#f1f1f1',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            flexWrap: 'wrap'
          }}>
            <span>Pengembang</span>
            <RotatingText
              texts={['Mobile App', 'Website', 'Mobile App', "Website"]}
              style={{
                padding: '4px 12px',
                backgroundColor: '#f5f5f5',
                color: '#000000',
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
      
      <main style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        {/* About Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333333', borderBottom: '2px solid #333333', paddingBottom: '10px' }}>About Me</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333333' }}>
            I am an undergraduate student majoring in Information Systems at Universitas Airlangga (Batch 2023) with a strong interest in personal development — both in hard and soft skills. I am passionate about data science and programming, and actively seek opportunities to grow through internships, organizational involvement, and collaborative projects.
          </p>
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="mailto:hasan.fadlurrahman@gmail.com" style={{ padding: '10px 20px', backgroundColor: '#333333', color: '#ffffff', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>Email Me</a>
            <a href="tel:082333005090" style={{ padding: '10px 20px', backgroundColor: '#333333', color: '#ffffff', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>WhatsApp</a>
          </div>
        </section>

        {/* Education Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333333', borderBottom: '2px solid #333333', paddingBottom: '10px' }}>Education</h2>
          <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '12px', border: '1px solid #333333' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '10px' }}>Universitas Airlangga</h3>
            <p style={{ color: '#aaaaaa', marginBottom: '10px' }}>Bachelor of Information Systems | Aug 2023 - Aug 2027 (Expected)</p>
            <p style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '15px' }}>GPA: <strong>3.50/4.00</strong></p>
            <ul style={{ color: '#d1d1d1', lineHeight: '1.8', paddingLeft: '20px' }}>
              <li>Actively involved in campus organizations, event management, and community engagement programs</li>
              <li>Completed leadership roles in multiple student projects, including sponsorship, event coordination, and strategic planning</li>
            </ul>
          </div>
        </section>

        {/* Experience Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333333', borderBottom: '2px solid #333333', paddingBottom: '10px' }}>Organizational Experience</h2>
          
          <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #333333' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '5px' }}>Event Division Coordinator</h3>
            <p style={{ color: '#aaaaaa', marginBottom: '15px' }}>Airlangga Movie Symphony Orchestra 3.0 | May 2025 - Nov 2025</p>
            <ul style={{ color: '#d1d1d1', lineHeight: '1.8', paddingLeft: '20px' }}>
              <li>Led a 7-member event team to organize a two-day orchestra concert attended by 1,600+ audiences (800/day)</li>
              <li>Designed and executed cinematic stage concepts, lighting moods, and audience engagement activities</li>
              <li>Coordinated 6 sub-units (FOH, stage design, costumes, documentation, MC, and technical flow) ensuring 100% on-time performance execution</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #333333' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '5px' }}>Event and Creative Division Coordinator</h3>
            <p style={{ color: '#aaaaaa', marginBottom: '15px' }}>Ospek Universitas Airlangga AMERTA 2025 | May 2025 - Aug 2025</p>
            <ul style={{ color: '#d1d1d1', lineHeight: '1.8', paddingLeft: '20px' }}>
              <li>Led a 39-member creative and event team to plan and execute AMERTA 2025, welcoming 9,000+ new students</li>
              <li>Managed 14 major event sessions including performances, logistics, and media production</li>
              <li>Reduced coordination time by 20% through structured workflow</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '12px', border: '1px solid #333333' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '5px' }}>Event Division Coordinator</h3>
            <p style={{ color: '#aaaaaa', marginBottom: '15px' }}>Get To Know Airlangga 4.0 | May 2024 - Jan 2025</p>
            <ul style={{ color: '#d1d1d1', lineHeight: '1.8', paddingLeft: '20px' }}>
              <li>Led a 34-member event team to planning and operations for a two-day open house attended by 3,000+ students</li>
              <li>Supervised 14 event segments including campus tours and tryouts</li>
              <li>Increased participant satisfaction by 30% through interactive design and inclusive scheduling</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333333', borderBottom: '2px solid #333333', paddingBottom: '10px' }}>Projects</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '12px', border: '1px solid #333333' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '10px' }}>EmoSense — Emotion Detector</h3>
              <p style={{ color: '#aaaaaa', marginBottom: '10px', fontSize: '0.9rem' }}>Python, Django, IndoBERT | 2025</p>
              <p style={{ color: '#d1d1d1', lineHeight: '1.6' }}>
                Built an emotion analysis web app that detects emotional tone from YouTube comments using a fine-tuned IndoBERT model. Integrated model deployment into Django web framework.
              </p>
            </div>

            <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '12px', border: '1px solid #333333' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '10px' }}>BodyTrackr — Fitness Tracking App</h3>
              <p style={{ color: '#aaaaaa', marginBottom: '10px', fontSize: '0.9rem' }}>Flutter/Dart | 2025</p>
              <p style={{ color: '#d1d1d1', lineHeight: '1.6' }}>
                Developed a Flutter-based health tracking app with food, exercise, and daily monitoring features. All functions passed testing with no major bugs, achieving an average user satisfaction score above 4/5.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333333', borderBottom: '2px solid #333333', paddingBottom: '10px' }}>Skills</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#333333', marginBottom: '15px' }}>Hard Skills</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['Flutter & Dart', 'Machine Learning', 'Python', 'Data Visualization', 'Django', 'NLP'].map(skill => (
                  <span key={skill} style={{ padding: '8px 16px', backgroundColor: '#2a2a2a', color: '#ffffff', borderRadius: '20px', fontSize: '0.9rem' }}>{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#333333', marginBottom: '15px' }}>Soft Skills</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['Leadership', 'Team Coordination', 'Strategic Planning', 'Communication', 'Attention to Detail'].map(skill => (
                  <span key={skill} style={{ padding: '8px 16px', backgroundColor: '#2a2a2a', color: '#ffffff', borderRadius: '20px', fontSize: '0.9rem' }}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333333', borderBottom: '2px solid #333333', paddingBottom: '10px' }}>Certifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
            <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '8px', border: '1px solid #333333' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '5px' }}>Memulai Pemrograman dengan Python</h4>
              <p style={{ color: '#aaaaaa', fontSize: '0.9rem' }}>2025</p>
            </div>
            <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '8px', border: '1px solid #333333' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '5px' }}>Prompt Engineering for Software Developers</h4>
              <p style={{ color: '#aaaaaa', fontSize: '0.9rem' }}>2025</p>
            </div>
            <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '8px', border: '1px solid #333333' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '5px' }}>Belajar Dasar Visualisasi Data</h4>
              <p style={{ color: '#aaaaaa', fontSize: '0.9rem' }}>2024</p>
            </div>
          </div>
        </section>
      </main>
      
      <div style={{ height: "200px", width: "100%", position: "relative", overflow: "hidden" }}>
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
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