import Link from 'next/link';
import Image from 'next/image';

interface Post {
  title: string;
  date: string; // ISO date
  author: string;
  image: string; // static or remote
  excerpt: string;
  href: string;
}

const posts: Post[] = [
  {
    title: 'Jobs, Career Presentation to Coincide with Conferences',
    date: '2025-03-06',
    author: 'admin',
    image:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=60',
    excerpt:
      'Join our annual career fair where professionals share insights and guidance with students.',
    href: '/news/career-presentation',
  },
  {
    title: '5 Simple & Easy Steps To Choose Future Career',
    date: '2025-03-04',
    author: 'admin',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60',
    excerpt:
      'Discover practical tips that will help you identify and pursue your dream profession.',
    href: '/news/choose-career-steps',
  },
  {
    title: 'Apply for Community Scholarships',
    date: '2025-02-16',
    author: 'admin',
    image:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=60',
    excerpt:
      'Scholarship applications are now open for students who demonstrate community spirit and excellence.',
    href: '/news/community-scholarships',
  },
  {
    title: 'Fall Sports Practices, Meeting in August',
    date: '2024-11-16',
    author: 'admin',
    image:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=60',
    excerpt:
      'All athletes are invited to attend the kickoff meeting for our fall sports season.',
    href: '/news/fall-sports-practice',
  },
];

export default function LatestNewsSection() {
  return (
    <section className="py-24 bg-gray-50" id="latest-news">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-3 uppercase">
          Our Latest News
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay up to date with the most recent stories and announcements from our school community.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="group bg-white rounded-lg border hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-40">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Body */}
            <div className="p-4 flex flex-col flex-1">
              <div className="text-xs text-gray-500 flex justify-between mb-2">
                <span>{post.author}</span>
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>

              <h3 className="font-semibold text-blue-900 mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3 flex-1">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
