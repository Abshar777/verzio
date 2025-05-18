import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  type?: 'chars' | 'words' | 'lines';
  stagger?: number;
  ease?: string;
  y?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  type = 'chars',
  stagger = 0.02,
  ease = 'power3.out',
  y = 50,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const splitText = new SplitType(textRef.current, {
      types: [type],
    });

    const elements = splitText[type];
    
    if (!elements) return;

    // Set initial state
    gsap.set(elements, { 
      y: y, 
      opacity: 0 
    });

    // Animate
    gsap.to(elements, {
      y: 0,
      opacity: 1,
      duration: duration,
      stagger: stagger,
      ease: ease,
      delay: delay,
    });

    // Cleanup
    return () => {
      splitText.revert();
    };
  }, [delay, duration, type, stagger, ease, y]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default TextReveal;