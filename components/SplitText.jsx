"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(GSAPSplitText);

const SplitText = ({
  text,
  className = "",
  style = {},
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Membuat instance SplitText
    const splitText = new GSAPSplitText(element, {
      type: splitType,
      linesClass: "split-line",
      wordsClass: "split-word",
      charsClass: "split-char",
    });

    // Target animasi berdasarkan tipe split
    const targets = splitType === "words" ? splitText.words : 
                   splitType === "lines" ? splitText.lines : 
                   splitText.chars;

    // Animasi GSAP
    gsap.fromTo(targets, 
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        onComplete: () => {
          onLetterAnimationComplete?.();
          splitText.revert(); // Membersihkan setelah animasi selesai
        }
      }
    );

    return () => {
      gsap.killTweensOf(targets);
      splitText.revert();
    };
  }, [text, delay, duration, ease, splitType, from, to, onLetterAnimationComplete]);

  return (
    <div 
      ref={ref}
      className={`split-text-wrapper ${className}`}
      style={{
        display: 'inline-block',
        whiteSpace: 'nowrap', // Ini yang akan mencegah line-break
        overflow: 'hidden',
        ...style
      }}
    >
      {text}
    </div>
  );
};

export default SplitText;