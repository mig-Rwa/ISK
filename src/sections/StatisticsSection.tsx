'use client';

import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

interface Stat {
  value: number;
  label: string;
}

const stats: Stat[] = [
  { value: 1954, label: 'Year Founded' },
  { value: 934, label: 'Certified Teachers' },
  { value: 65409, label: 'Graduated Students' },
  { value: 289, label: 'Awards Winner' },
];

export default function StatisticsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStart(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-blue-900 py-20 text-white text-center">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-extrabold">
              {start ? <CountUp end={s.value} duration={2} separator="," /> : '0'}
            </span>
            <span className="mt-2 uppercase tracking-wide font-semibold text-sm text-gray-200">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
