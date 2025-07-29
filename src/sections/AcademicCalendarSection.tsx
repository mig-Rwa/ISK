"use client";

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface SchoolEvent {
  date: string; // ISO yyyy-mm-dd
  title: string;
  description?: string;
}

const events: SchoolEvent[] = [
  { date: '2025-01-01', title: 'Free Sessions', description: 'No attendance required' },
  { date: '2025-01-29', title: 'Break Evening' },
];

type CalendarValue = Date | Date[] | null;

export default function AcademicCalendarSection() {
  // Using react-calendar's provided Value union type
  const [value, setValue] = useState<CalendarValue>(new Date());

  // react-calendar passes (value, event). Provide a wrapper so the types line up.
  const handleChange = (val: CalendarValue): void => {
    setValue(val);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const selectedEvents = events.filter((e) => {
    if (!value) return false;
    const dates = Array.isArray(value) ? value : [value];
    return dates.some((d) => d && e.date === d.toISOString().split('T')[0]);
  });

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-3">Academic Calendar</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our students are talented, hardworking and full of good ideas. We encourage and empower
          them to bring their ideas to life. Hands-on opportunities are what we’re all about.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Calendar */}
        <div className="w-full lg:max-w-md mx-auto shadow-lg rounded border p-4">
          <Calendar
            onChange={handleChange}
            value={value}
            tileClassName={({ date, view }) => {
              if (
                events.find((e) => e.date === date.toISOString().split('T')[0]) &&
                view === 'month'
              ) {
                return 'bg-red-500 text-white hover:bg-red-600';
              }
              return undefined;
            }}
            prev2Label={null}
            next2Label={null}
          />
          <div className="mt-4 flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 inline-block rounded-sm" /> Free Sessions
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-400 inline-block rounded-sm" /> Break
            </div>
          </div>
        </div>

        {/* Events list */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-blue-900 mb-6">Free Sessions</h3>
          <ul className="space-y-4 border-l-2 border-gray-200 pl-6">
            {events.map((e) => (
              <li key={e.date} className="relative">
                <span className="absolute -left-3 top-1.5 w-3 h-3 bg-red-500 rounded-full" />
                <p className="font-semibold text-blue-900">
                  {new Date(e.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                  {e.description ? ' – ' : ''}
                  {e.title}
                </p>
                {e.description && <p className="text-gray-600 text-sm">{e.description}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
