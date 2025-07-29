"use client";

import { useState } from "react";
import Calendar, { CalendarValue } from "react-calendar"; // Make sure this matches your calendar lib
import "react-calendar/dist/Calendar.css";

interface Event {
  date: string;
  title: string;
  description?: string;
}

const events: Event[] = [
  { date: "2025-07-29", title: "Fitness Orientation", description: "Intro session for new students" },
  { date: "2025-08-01", title: "Yoga Class" },
];

export default function AcademicCalendarSection() {
  const [value, setValue] = useState<CalendarValue>(new Date());

  const handleChange = (val: CalendarValue) => {
    setValue(val);
  };

  return (
    <section className="w-full bg-white py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Calendar */}
        <div className="w-full lg:max-w-md mx-auto shadow-lg rounded border p-4">
          <Calendar
            onChange={handleChange}
            value={value}
            tileClassName={({ date, view }) => {
              const dateStr = date.toISOString().split("T")[0];
              const match = events.find((e) => e.date === dateStr);
              return match ? "bg-red-500 text-white font-bold rounded-sm" : null;
            }}
            next2Label={null}
            prev2Label={null}
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
                  {new Date(e.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                  {e.description ? " – " : ""}
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
