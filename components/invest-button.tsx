"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const InvestButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Button
      className={cn(
        "fixed bottom-8 right-8 z-50 transition-all duration-300 shadow-lg",
        "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      )}
      size="lg"
      onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
    >
      Invest Now
    </Button>
  );
};

export default InvestButton;