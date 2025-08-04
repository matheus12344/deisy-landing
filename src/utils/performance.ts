import React from 'react';

// Utilitários para otimização de performance

// Debounce function para otimizar chamadas de função
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function para limitar a frequência de chamadas
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Função para pré-carregar imagens
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

// Função para verificar se o elemento está visível na viewport
export function isElementInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para otimizar scroll events
export function createScrollHandler(callback: () => void, delay: number = 16) {
  let ticking = false;
  
  return () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
}

// Função para otimizar resize events
export function createResizeHandler(callback: () => void, delay: number = 250) {
  return debounce(callback, delay);
}

// Função para medir performance
export function measurePerformance(name: string, fn: () => void) {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
}

// Função para lazy load de componentes
export function lazyLoad<T extends React.ComponentType<unknown>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ComponentType
) {
  return React.lazy(importFunc);
}

// Função para otimizar re-renders
export function shallowEqual(objA: unknown, objB: unknown): boolean {
  if (objA === objB) return true;
  
  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }
  
  const keysA = Object.keys(objA as Record<string, unknown>);
  const keysB = Object.keys(objB as Record<string, unknown>);
  
  if (keysA.length !== keysB.length) return false;
  
  for (const key of keysA) {
    if (!(objB as Record<string, unknown>).hasOwnProperty(key) || (objA as Record<string, unknown>)[key] !== (objB as Record<string, unknown>)[key]) {
      return false;
    }
  }
  
  return true;
}

// Função para otimizar listas grandes
export function virtualizeList<T>(
  items: T[],
  itemHeight: number,
  containerHeight: number,
  scrollTop: number
) {
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight) + 1,
    items.length
  );
  
  return {
    visibleItems: items.slice(startIndex, endIndex),
    startIndex,
    endIndex,
    totalHeight: items.length * itemHeight,
    offsetY: startIndex * itemHeight,
  };
}

// Função para otimizar animações
export function createAnimationFrame(callback: () => void) {
  let animationId: number;
  
  const animate = () => {
    callback();
    animationId = requestAnimationFrame(animate);
  };
  
  const start = () => {
    animationId = requestAnimationFrame(animate);
  };
  
  const stop = () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  };
  
  return { start, stop };
}

// Função para otimizar carregamento de fontes
export function preloadFonts(fonts: string[]) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'font';
  link.type = 'font/woff2';
  link.crossOrigin = 'anonymous';
  
  fonts.forEach(font => {
    link.href = font;
    document.head.appendChild(link.cloneNode());
  });
}

// Função para otimizar carregamento de CSS crítico
export function injectCriticalCSS(css: string) {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}

// Função para otimizar carregamento de recursos
export function preloadResource(href: string, as: string) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
} 