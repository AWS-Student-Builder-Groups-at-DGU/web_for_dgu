import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { HeaderSection } from '@/components/headerSection';
import { FooterSection } from '@/components/footerSection';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AWS Cloud Clubs at DGU',
  description: '동국대학교 ACC 동아리 홈페이지',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={geistMono.className}>
        <HeaderSection />
        <main className="min-h-screen">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
