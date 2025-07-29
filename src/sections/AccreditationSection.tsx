import Image from 'next/image';

const partners = [
  { src: '/image/cis.png', alt: 'Council of International Schools' },
  { src: '/image/aisa.png', alt: 'Association of International Schools in Africa' },
  { src: '/image/cb.png', alt: 'College Board' },
];

// Only one set; keyframes loop continuously
const scrollingList = partners;

export default function AccreditationSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-8">
        Accredited by
      </h2>

      {/* Marquee container */}
      <div className="overflow-hidden flex justify-center">
        <div
          className="inline-flex gap-24 animate-scroll-left"
          // @ts-expect-error – Tailwind keyframes added globally
        >
          {scrollingList.map((p, idx) => (
            <div key={idx} className="w-40 h-16 relative flex-shrink-0">
              <Image src={p.src} alt={p.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
Add/update in globals.css:

@layer utilities {
  @keyframes scroll-left {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
  .animate-scroll-left {
    animation: scroll-left 25s linear infinite;
  }
}
*/
