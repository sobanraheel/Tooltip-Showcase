import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: TooltipPosition;
  delay?: number;
  className?: string;
  variant?: 'default' | 'rich' | 'dark' | 'glass';
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  delay = 200,
  className = '',
  variant = 'default',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const arrowClasses = {
    top: 'bottom-[-4px] left-1/2 -translate-x-1/2 border-t-current border-l-transparent border-r-transparent border-b-transparent',
    bottom: 'top-[-4px] left-1/2 -translate-x-1/2 border-b-current border-l-transparent border-r-transparent border-t-transparent',
    left: 'right-[-4px] top-1/2 -translate-y-1/2 border-l-current border-t-transparent border-b-transparent border-r-transparent',
    right: 'left-[-4px] top-1/2 -translate-y-1/2 border-r-current border-t-transparent border-b-transparent border-l-transparent',
  };

  const variantClasses = {
    default: 'bg-white text-slate-900 shadow-lg border border-slate-200 py-1.5 px-4 text-sm rounded-md w-max max-w-[280px] whitespace-normal leading-relaxed',
    dark: 'bg-slate-900 text-white shadow-xl py-1.5 px-4 text-sm rounded-md w-max max-w-[280px] whitespace-normal leading-relaxed',
    rich: 'bg-white text-slate-900 shadow-2xl border border-slate-200 p-5 rounded-xl w-72 md:w-80 max-w-[90vw]',
    glass: 'bg-white/80 backdrop-blur-md text-slate-900 shadow-lg border border-white/20 py-1.5 px-4 text-sm rounded-md w-max max-w-[280px] whitespace-normal leading-relaxed',
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: position === 'top' ? 4 : position === 'bottom' ? -4 : 0, x: position === 'left' ? 4 : position === 'right' ? -4 : 0 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`absolute z-50 pointer-events-none ${positionClasses[position]} ${className}`}
          >
            <div className={`${variantClasses[variant]} relative`}>
              {content}
              <div className={`absolute w-0 h-0 border-[4px] ${arrowClasses[position]} ${variant === 'dark' ? 'text-slate-900' : variant === 'glass' ? 'text-white/80' : 'text-white'}`} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
