'use client';

import Image from 'next/image';

export default function HeroClean() {
  return (
    <section className="relative flex items-center overflow-hidden h-[85vh] pt-12 md:pt-20">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1920&q=80"
        alt="Library background"
        fill
        className="object-cover -z-20"
        priority
      />
      <div className="absolute inset-0 bg-blue-900/70 -z-10" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto px-6">
        {/* Text + Logo */}
        <div className="md:w-3/5 text-center md:text-left flex flex-col items-center md:items-start md:-ml-6 lg:-ml-10">
          <p className="uppercase tracking-widest text-sky-300 text-sm mb-2">Welcome to</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            International School <span className="text-yellow-400">of Kigali</span>
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-md md:max-w-none mx-auto md:mx-0">
            Let us think of education as the means of developing our greatest abilities, because in each of us there is a
            private hope and dream which, fulfilled, can be translated into benefit for everyone.
          </p>
          <a
            href="#tour"
            className="inline-block mt-8 bg-yellow-400 text-blue-900 font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Take a Tour
          </a>
        </div>

        {/* Student cut-out image */}
        {/* anchor to bottom on medium+ screens */}
        <div className="relative w-2/3 sm:w-1/2 md:w-auto flex justify-end md:absolute md:-bottom-20 md:-right-32">
          <Image
            src="/image/student-cut.png"
            alt="ISK student"
            width={700}
            height={950}
            className="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.45)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
