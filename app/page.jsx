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
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: '40px',
        width: '100%',
        padding: '20px',
      }}>
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        </div>
      </div>
      
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