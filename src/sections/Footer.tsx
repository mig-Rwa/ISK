import Link from 'next/link';
import Image from 'next/image';

const columns = [
  {
    heading: 'ISKSITE',
    links: [
      { label: 'Terms', href: '#' },
      { label: 'Licenses', href: '#' },
      { label: 'API', href: '#' },
      { label: 'Become an Affiliate', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
  {
    heading: 'HELP',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Authors', href: '#' },
    ],
  },
  {
    heading: 'COMMUNITY',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Forums', href: '#' },
      { label: 'Meetups', href: '#' },
    ],
  },
  {
    heading: 'ABOUT',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Sitemap', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white text-sm">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1920&q=80"
        alt="Library background"
        fill
        className="object-cover -z-20"
      />
      {/* Color overlay */}
      <div className="absolute inset-0 bg-blue-900/80 -z-10" />
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
        {columns.map((col) => (
          <div key={col.heading}>
            <h4 className="text-yellow-400 font-semibold mb-4 uppercase text-xs tracking-wider">
              {col.heading}
            </h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-yellow-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Metrics */}
        <div className="lg:col-span-1 flex flex-col gap-2">
          <Image
            src="/image/school-logo.png"
            alt="School Logo"
            width={160}
            height={160}
            className="mb-4"
          />
          <p>
            <span className="font-bold text-yellow-400">77,609,946</span> students trained
          </p>
          <p>
            <span className="font-bold text-yellow-400">$1,221,177,443</span> community earnings
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-blue-950/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-200 text-xs">
          <div className="space-x-4">
            <Link href="#" className="hover:text-yellow-300">
              ISK Elements
            </Link>
            <Link href="#" className="hover:text-yellow-300">
              All Products
            </Link>
            <Link href="#" className="hover:text-yellow-300">
              Sitemap
            </Link>
          </div>
          <p className="text-center">2025 ISK. All rights reserved.</p>
          <div className="flex gap-3">
            {/* Social icons as inline SVGs */}
            {[
              { label: 'twitter', href: '#', path: 'M23 3a10.9 10.9 0 01-3.14 1.53...' },
              { label: 'facebook', href: '#', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
            ].map((icon) => (
              <Link key={icon.label} href={icon.href} aria-label={icon.label} className="hover:text-yellow-300">
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={icon.path} />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
