'use client';

import { useRef } from 'react';
import type { MouseEvent } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
} from '@/components/lib/animation-variants';
import { SessionCard } from '@/components/ui/SessionCard';

const CLOUDFRONT_BASE_URL = process.env.NEXT_PUBLIC_CLOUDFRONT_URL;

const sessions = [
  {
    id: 3,
    title: '2nd Sessions',
    date: '2025-07-31',
    time: '19:00',
    location: '정보문화관 P404',
    type: ['Theory', 'Hands-On'],
    description:
      '1. (정은지) Amazon Q CLI를 이용한 가성비 인프라 설계부터 배포까지\n' +
      '2. (오현석) 서버 개발자를 대체하는 방법: Serverless A to Z',
    images: [
      `${CLOUDFRONT_BASE_URL}/2nd_1.JPG`,
      `${CLOUDFRONT_BASE_URL}/2nd_2.JPG`,
    ],
    isNew: true,
  },
  {
    id: 2,
    title: '1st Sessions',
    date: '2025-07-17',
    time: '19:00',
    location: '정보문화관 P404',
    type: ['Theory', 'Hands-On'],
    description:
      '1. (이도형) VPC 내부 네트워크 기술 뼛속까지 뜯어보기\n' +
      '2. (김찬빈) K6 탐색적 부하테스트 : SLI 측정과 SNS/Gmail 알람 연동 실습',
    images: [
      `${CLOUDFRONT_BASE_URL}/1nd_1.JPG`,
      `${CLOUDFRONT_BASE_URL}/1nd_2.JPG`,
    ],
    isNew: false,
  },
  {
    id: 1,
    title: 'OT (Orientation)',
    date: '2025-07-10',
    time: '19:00',
    location: '정보문화관 P404',
    type: ['Networking'],
    description: 'ACC 활동의 첫 시작, 가벼운 네트워킹과 뒤풀이 진행',
    images: [
      `${CLOUDFRONT_BASE_URL}/ot.JPG`,
      `${CLOUDFRONT_BASE_URL}/ot_2.JPG`,
    ],
    isNew: false,
  },
];

export function SessionSection() {
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
      className="py-24 sm:py-32 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-orange-900/15 rounded-full blur-3xl"
          style={{ x: transformX, y: transformY }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-orange-900/15 rounded-full blur-3xl"
          style={{ x: transformXInverse, y: transformYInverse }}
        />
      </div>
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 mb-6">
            지난 세션
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AWS Cloud Clubs at DGU의 활동 주제를 공유합니다.
          </p>
        </motion.div>
        <div className="grid gap-8 max-w-4xl mx-auto">
          {sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
