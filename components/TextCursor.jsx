"use client";
import React, { useState, useEffect, useRef } from "react";

// TextCursor Component yang diubah untuk efek cahaya
const TextCursor = ({
  delay = 0.01,
  spacing = 80,
  followMouseDirection = true,
  randomFloat = true,
  exitDuration = 0.3,
  removalInterval = 20,
  maxPoints = 10,
}) => {
  const [trail, setTrail] = useState([]);
  const lastMoveTimeRef = useRef(Date.now());
  const idCounter = useRef(0);

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    setTrail((prev) => {
      let newTrail = [...prev];
      if (newTrail.length === 0) {
        newTrail.push({
          id: idCounter.current++,
          x: mouseX,
          y: mouseY,
          angle: 0,
          timestamp: Date.now(),
          ...(randomFloat && {
            randomX: Math.random() * 10 - 5,
            randomY: Math.random() * 10 - 5,
            randomRotate: Math.random() * 10 - 5,
          }),
        });
      } else {
        const last = newTrail[newTrail.length - 1];
        const dx = mouseX - last.x;
        const dy = mouseY - last.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance >= spacing) {
          let rawAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
          if (rawAngle > 90) rawAngle -= 180;
          else if (rawAngle < -90) rawAngle += 180;
          const computedAngle = followMouseDirection ? rawAngle : 0;
          const steps = Math.floor(distance / spacing);
          for (let i = 1; i <= steps; i++) {
            const t = (spacing * i) / distance;
            const newX = last.x + dx * t;
            const newY = last.y + dy * t;
            newTrail.push({
              id: idCounter.current++,
              x: newX,
              y: newY,
              angle: computedAngle,
              timestamp: Date.now(),
              ...(randomFloat && {
                randomX: Math.random() * 10 - 5,
                randomY: Math.random() * 10 - 5,
                randomRotate: Math.random() * 10 - 5,
              }),
            });
          }
        }
      }
      if (newTrail.length > maxPoints) {
        newTrail = newTrail.slice(newTrail.length - maxPoints);
      }
      return newTrail;
    });
    lastMoveTimeRef.current = Date.now();
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [spacing, maxPoints, followMouseDirection, randomFloat]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMoveTimeRef.current > 100) {
        setTrail((prev) => (prev.length > 0 ? prev.slice(1) : prev));
      }
    }, removalInterval);
    return () => clearInterval(interval);
  }, [removalInterval]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 999,
    }}>
      {trail.map((item, index) => {
        const age = (Date.now() - item.timestamp) / 1000;
        const fadeProgress = Math.min(age / exitDuration, 1);
        const opacity = Math.max(0, (1 - (index / trail.length) * 0.3) * (1 - fadeProgress));
        const scale = Math.max(0.3, 1 - fadeProgress * 0.7);
        
        return (
          <div
            key={item.id}
            style={{
              position: 'absolute',
              left: item.x - 16, // Center the light
              top: item.y - 16,  // Center the light
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: `radial-gradient(circle, 
                rgba(255, 255, 255, 0.9) 0%,
                rgba(255, 255, 255, 0.6) 30%,
                rgba(255, 255, 255, 0.3) 60%,
                transparent 100%
              )`,
              boxShadow: `
                0 0 20px rgba(255, 255, 255, ${opacity * 0.8}),
                0 0 40px rgba(255, 255, 255, ${opacity * 0.4}),
                0 0 60px rgba(255, 255, 255, ${opacity * 0.2})
              `,
              userSelect: 'none',
              pointerEvents: 'none',
              transform: `
                scale(${scale})
                ${followMouseDirection ? `rotate(${item.angle}deg)` : ''}
                ${randomFloat ? `translate(${item.randomX || 0}px, ${item.randomY || 0}px)` : ''}
              `,
              opacity: opacity,
              transition: 'all 0.3s ease-out',
              filter: 'blur(0.5px)',
              animation: randomFloat ? `lightFloat-${item.id % 3} 2s ease-in-out infinite` : 'none',
            }}
          />
        );
      })}
      
      <style>{`
        @keyframes lightFloat-0 {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            filter: blur(0.5px);
          }
          50% { 
            transform: translateY(-5px) scale(1.1);
            filter: blur(0.3px);
          }
        }
        @keyframes lightFloat-1 {
          0%, 100% { 
            transform: translateX(0px) scale(1);
            filter: blur(0.5px);
          }
          50% { 
            transform: translateX(3px) scale(1.05);
            filter: blur(0.7px);
          }
        }
        @keyframes lightFloat-2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            filter: blur(0.5px);
          }
          50% { 
            transform: translateY(-3px) translateX(-3px) scale(1.1);
            filter: blur(0.3px);
          }
        }
      `}</style>
    </div>
  );
};

export default TextCursor;