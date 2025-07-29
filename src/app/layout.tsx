// app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ISK', // page title shown in the browser tab
  description: 'International School of Kigali',
  icons: {
    icon: '/image/favicon.png', // favicon (32×32 png in public folder)
    shortcut: '/image/favicon.png',
    apple: '/image/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* explicit favicon for browsers that ignore metadata.icon */}
        <link rel="icon" href="/image/favicon.png" sizes="32x32" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* App content */}
        {children}
      </body>
    </html>
  );
}
