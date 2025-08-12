'use client';

import { motion, type Variants } from 'framer-motion';
import { FeatureCard } from '@/components/ui/feature-card';
import { ReactNode } from 'react';
import { itemVariants } from '@/components/lib/animation-variants';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Highlight = ({ children }: { children: ReactNode }) => (
  <span className="font-semibold text-orange-300">{children}</span>
);

const audienceItems: { id: number; content: ReactNode }[] = [
  {
    id: 1,
    content: (
      <>
        <Highlight>
          동국대학교
          <br />
          재학생/휴학생/대학원생
        </Highlight>
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        새로운 기술 학습에 <br />
        <Highlight>열린 마음</Highlight>을 가진 분!
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        모두와 함께 배우고,
        <br /> <Highlight>지식 공유</Highlight>를 즐기는 분
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        컴퓨터공학의 기초(<Highlight>CS</Highlight>)를 <br />
        탄탄히 다지고 싶은 분
      </>
    ),
  },
  {
    id: 5,
    content: (
      <>
        <Highlight>인프라 구성과 배포 자동화</Highlight>에 관심이 있는 분!
      </>
    ),
  },
  {
    id: 6,
    content: (
      <>
        <Highlight>AWS 클라우드 기술</Highlight>에 관심이 있는 분!
      </>
    ),
  },
];

export function TargetStatus() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="w-full max-w-5xl mx-auto"
    >
      <h3 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 m-10">
        Join Us!
      </h3>
      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
        variants={itemVariants}
      >
        <span className="font-semibold text-orange-300">동국대학교 학우</span>
        라면 누구든, <br />
        클라우드에 관심이 있는 모든 학우를 기다립니다.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {audienceItems.map((item) => (
          <motion.div
            key={item.id}
            variants={cardItemVariants}
            className="h-full"
          >
            <FeatureCard title="" textAlign="center" className="h-full">
              <p className="text-white font-medium text-base leading-relaxed">
                {item.content}
              </p>
            </FeatureCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
