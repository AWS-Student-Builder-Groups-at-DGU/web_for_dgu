import Image from "next/image";
import {Hero} from "@/components/hero";

export default function Home() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <main>
          <Hero/>
      </main>
    </div>
  );
}
