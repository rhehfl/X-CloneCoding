'use client';
import { useEffect } from 'react';

export default function ScrollRock() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  return null;
}
