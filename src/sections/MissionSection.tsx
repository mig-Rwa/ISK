import Image from 'next/image';

export default function MissionSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text column */}
        <div>
          <span className="inline-block uppercase tracking-widest text-yellow-400 text-sm mb-4">
            About&nbsp;Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
            Mission &amp; <br className="hidden sm:block" /> Philosophy
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-md">
            Through collaboration, communication, creativity and critical thinking, ISK will teach
            students the value of diversity while they are engaged in meaningful change both locally
            and globally.
          </p>
          <a
            href="#about-more"
            className="inline-block border-2 border-blue-900 text-blue-900 font-semibold py-3 px-10 rounded hover:bg-blue-900 hover:text-white transition-colors"
          >
            Read More
          </a>
        </div>

        {/* Image column */}
        <div className="w-full h-72 sm:h-96 relative shadow-lg rounded">
          <Image
            src="/image/kids.png"
            alt="ISK students"
            fill
            className="object-contain object-center rounded"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
