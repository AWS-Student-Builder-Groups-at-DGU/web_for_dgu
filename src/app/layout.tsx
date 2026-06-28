import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/lib/providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollTop from "@/components/ScrollTop";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AWS Student Builder Groups at DGU',
  description:
    '미래의 클라우드 리더를 양성하는 AWS Student Builder Groups at DGU 공식 홈페이지입니다.',
  openGraph: {
    title: 'AWS Student Builder Groups at DGU',
    description:
      'AWS Student Builder Groups at DGU 공식 홈페이지입니다.',
    url: 'https://acc-dgu.com/',
    siteName: 'AWS Student Builder Groups at DGU',
    images: [
      {
        url: process.env.NEXT_PUBLIC_S3_URL + '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AWS Student Builder Groups at DGU 공식 로고',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWS Student Builder Groups at DGU',
    description:
      'AWS Student Builder Groups at DGU 공식 홈페이지입니다.',
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
          <ScrollTop/>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
