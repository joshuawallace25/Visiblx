import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://visiblx.com'),
  title: {
    template: '%s',
    default: 'Visiblx | Visibility Made Simple',
  },
  description: 'Visiblx is a platform that helps individuals and businesses get found on Google with simple, professional pages.',
  keywords: ['Visibility', 'SEO', 'Professional Identity', 'Digital Presence', 'Profile Pages', 'Google Knowledge Panel'],
  authors: [{ name: 'Visiblx Team' }],
  creator: 'Visiblx',
  publisher: 'Visiblx',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://visiblx.com',
    siteName: 'Visiblx',
    title: 'Visiblx | Visibility Made Simple',
    description: 'Visiblx is a platform that helps individuals and businesses get found on Google with simple, professional pages.',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Visiblx Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visiblx | Visibility Made Simple',
    description: 'Visiblx is a platform that helps individuals and businesses get found on Google with simple, professional pages. ',
    images: ['/logo.jpeg'],
  },
  icons: {
    icon: [
      { url: '/logo.jpeg' },
      { url: '/logo.jpeg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/logo.jpeg', sizes: '16x16', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/logo.jpeg', sizes: '180x180', type: 'image/jpeg' },
    ],
    shortcut: ['/logo.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
      </head>
      <body className={`${jakarta.variable} ${inter.variable} ${playfair.variable} antialiased font-body bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container aurora-bg flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
