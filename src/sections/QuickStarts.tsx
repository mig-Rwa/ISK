// src/sections/QuickStarts.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface QuickItem {
  labelTop: string;
  labelBottom: string;
  href: string;
  img: string; // static image from /public or remote
  color: string; // tailwind color overlay
}

const items: QuickItem[] = [
  {
    labelTop: 'STUDENT',
    labelBottom: 'EVENTS',
    href: '/#events',
    img: '/image/student.jpg',
    color: 'bg-pink-600/70',
  },
  {
    labelTop: 'CLASSROOM',
    labelBottom: 'STORIES',
    href: '/#stories',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=60',
    color: 'bg-yellow-500/70',
  },
  {
    labelTop: 'TEACHERS',
    labelBottom: 'PROFILE',
    href: '/#teachers',
    img: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=60',
    color: 'bg-cyan-500/70',
  },
  {
    labelTop: 'STUDENT',
    labelBottom: 'SUPPORT',
    href: '/support',
    img: '/image/student_support.JPG',
    color: 'bg-indigo-500/70',
  },
  {
    labelTop: 'FINANCIAL',
    labelBottom: 'AID',
    href: '/financial-aid',
    img: '/image/financial_aid.JPG',
    color: 'bg-teal-500/70',
  },
  {
    labelTop: 'CALENDAR',
    labelBottom: '',
    href: '/calendar',
    img: '/image/calender.JPG',
    color: 'bg-lime-500/70',
  },
];

export default function QuickStarts() {
  const [active, setActive] = useState(2); // start roughly center of six

  // width of card incl gap (tailwind gap-6 =1.5rem)
  const CARD_WIDTH = 340 + 32; // slightly wider spacing for easier hover

  return (
    <section className="py-8 overflow-x-hidden">
      {/* Mobile: simple grid */}
      <div className="grid sm:hidden grid-cols-1 gap-6 max-w-6xl mx-auto px-4">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="relative h-48 overflow-hidden rounded-xl shadow-lg">
            <Image src={item.img} alt={item.labelTop} fill className="object-cover -z-20" />
            <div className={`absolute inset-0 ${item.color} -z-10`} />
            <div className="absolute inset-0 flex flex-col justify-center items-start pl-6 text-white">
              <span className="text-lg font-extrabold tracking-wider">{item.labelTop}</span>
              <span className="text-xl font-light -mt-1">{item.labelBottom}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop carousel */}
      <div className="hidden sm:block">
        <div style={{ perspective: '1200px' }} className="relative h-56 flex justify-center items-center overflow-visible select-none">
          {items.map((item, idx) => {
            const position = idx - active; // -1,0,1
            const x = position * CARD_WIDTH;
            const scale = position === 0 ? 1 : 0.75;
            const rotateY = position === 0 ? 0 : position * 25; // -25deg or 25deg
            const z = position === 0 ? 10 : 0;

            return (
              <motion.div
                key={item.href}
                animate={{ x, scale, rotateY, zIndex: z, opacity: 1 }}
                initial={false}
                transition={{ type: 'spring', stiffness: 200, damping: 40 }}
                className="absolute w-80 h-56 cursor-pointer"
                onMouseEnter={() => setActive(idx)}
                onClick={() => setActive(idx)}
              >
                <Link href={item.href} className="block relative h-full w-full overflow-hidden rounded-xl shadow-xl">
                  <Image src={item.img} alt={item.labelTop} fill className="object-cover -z-20" />
                  <div className={`absolute inset-0 ${item.color} -z-10`} />
                  <div className="absolute inset-0 flex flex-col justify-center items-start pl-6 text-white pointer-events-none">
                    <span className="text-lg font-extrabold tracking-wider">{item.labelTop}</span>
                    <span className="text-xl font-light -mt-1">{item.labelBottom}</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
