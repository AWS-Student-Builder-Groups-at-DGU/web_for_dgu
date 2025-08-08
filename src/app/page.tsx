import Image from 'next/image';
import { HeroSection } from '@/components/heroSection';

export default function Home() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
