import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/lib/providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AWS Cloud Clubs at DGU',
  description:
    '미래의 클라우드 리더를 양성하는 AWS Cloud Clubs at DGU 공식 홈페이지입니다.',
  openGraph: {
    title: 'AWS Cloud Clubs at DGU',
    description:
      'AWS Cloud Clubs at DGU 공식 홈페이지입니다.',
    url: 'https://acc-dgu.com/',
    siteName: 'AWS Cloud Club at DGU',
    images: [
      {
        url: process.env.NEXT_PUBLIC_S3_URL + '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AWS Cloud Clubs at DGU 공식 로고',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWS Cloud Clubs at DGU',
    description:
      'AWS Cloud Clubs at DGU 공식 홈페이지입니다.',
    images: [process.env.NEXT_PUBLIC_S3_URL + '/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
