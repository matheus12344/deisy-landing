"use client";

import { useEffect, useState, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'scale-in';
}

export default function LazySection({ 
  children, 
  className = '', 
  threshold = 0.1, 
  delay = 0,
  animation = 'fade-in'
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay, hasAnimated]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000';
    
    switch (animation) {
      case 'fade-in':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`;
      case 'slide-up':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`;
      case 'slide-left':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-20'
        }`;
      case 'scale-in':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`;
      default:
        return baseClasses;
    }
  };

  return (
    <div 
      ref={ref} 
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
} 