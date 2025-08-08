'use client';

import { ArrowRight, Code, Users, Network, BookOpenCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FeatureCard } from '@/components/ui/feature-card';
import {
  containerVariants,
  itemVariants,
} from '@/components/lib/animation-variants';

const features: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <Code className="w-8 h-8 text-orange-400 flex-shrink-0" />,
    title: 'Hands-On Labs',
    description:
      '실제 AWS 콘솔을 다루며 인프라를 구축하고, 애플리케이션을 배포하는 실습 세션을 진행합니다.',
  },
  {
    icon: <BookOpenCheck className="w-8 h-8 text-orange-400 flex-shrink-0" />,
    title: '주제별 스터디',
    description: '자격증 취득, DevOps, CS 등 특정 주제를 깊이 있게 공부합니다.',
  },
  {
    icon: <Users className="w-8 h-8 text-orange-400 flex-shrink-0" />,
    title: '네트워킹',
    description:
      'AWS Community Hero와 Builder 초청, Student Community Day 등의 네트워크 기회!',
  },
  {
    icon: <Network className="w-8 h-8 text-orange-400 flex-shrink-0" />,
    title: 'Global Hackerton',
    description:
      '전 세계 대학생들과 겨루는 AWS 주최 공식 해커톤! AWS 공인 수상과 인증의 기회를 얻습니다.',
  },
];

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const transformX = useTransform(mouseX, [0, 1], [-25, 25]);
  const transformY = useTransform(mouseY, [0, 1], [-25, 25]);
  const transformXInverse = useTransform(mouseX, [0, 1], [25, -25]);
  const transformYInverse = useTransform(mouseY, [0, 1], [25, -25]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    mouseX.set((event.clientX - left) / width);
    mouseY.set((event.clientY - top) / height);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex flex-col justify-center items-center px-4 py-24 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-orange-900/20 rounded-full blur-3xl"
          style={{ x: transformX, y: transformY }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-orange-900/20 rounded-full blur-3xl"
          style={{ x: transformXInverse, y: transformYInverse }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-6 relative z-10 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="space-y-6">
          <motion.h1
            className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500"
            variants={itemVariants}
          >
            AWS Cloud Clubs at DGU
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <span className="font-semibold text-orange-300">
              AWS Cloud Clubs
            </span>
            는 AWS의{' '}
            <span className="font-semibold text-orange-300">
              공식적인 대학생 커뮤니티
            </span>
            입니다.
            <br />
            다양한 기술, 지식, 경험을 공유하는 것을 최우선으로 합니다.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-4 pt-8 max-w-4xl mx-auto">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-10"
            variants={itemVariants}
          >
            <Button
              asChild
              size="lg"
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 border-0"
            >
              <Link href="/session">
                <span>지난 세션 목록</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
