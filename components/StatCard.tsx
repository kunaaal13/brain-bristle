"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCard({ value, suffix = "", label }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div 
      ref={ref}
      className="bg-white rounded-3xl p-8 shadow-sm text-center border border-navy/5 flex flex-col justify-center h-full hover:shadow-md transition-shadow"
    >
      <div className="text-5xl md:text-6xl font-bold font-heading text-grey-turquoise mb-4">
        {count}{suffix}
      </div>
      <p className="text-navy/80 font-medium text-lg">{label}</p>
    </div>
  );
}
