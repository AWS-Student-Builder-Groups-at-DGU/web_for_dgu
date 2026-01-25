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
