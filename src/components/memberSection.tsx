'use client';

import { Badge } from '@/components/ui/badge';
import { Mail, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import type { MouseEvent } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
} from '@/components/lib/animation-variants';

export function MemberSection() {
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

  type Position = 'Captain' | 'DevRel' | 'Member';

  const positionToColor: Record<Position, string> = {
    Captain:
      'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 shadow-lg',
    DevRel:
      'bg-gradient-to-r from-orange-400 to-orange-500 text-white border-0 shadow-lg',
    Member: 'bg-white/20 backdrop-blur-sm text-gray-200 border border-white/30',
  };

  interface Member {
    name: string;
    position: Position;
    year: string;
    bio: string;
    image: string;
    email: string;
    linkedin: string;
    github: string;
    interest: string[];
  }

  const members: Member[] = [
    {
      name: '이도형',
      position: 'Captain',
      year: '컴퓨터공학과 4학년',
      bio: '개발을 도구적 관점으로 접근하여, 촘촘한 소통을 통해 팀과 Align되어 비즈니스 가치를 만들어내는 이도형입니다.',
      image: '/member/1.jpeg',
      email: 'rlrlfhtm2@dgu.ac.kr',
      linkedin: 'www.linkedin.com/in/leedohyeong',
      github: 'https://github.com/puretension',
      interest: ['Platform Engineer', 'DevOps'],
    },
    {
      name: '정은지',
      position: 'Captain',
      year: '컴퓨터공학과 4학년',
      bio: '',
      image: '/member/0.png',
      email: 'bian87@dgu.ac.kr',
      linkedin: '#',
      github: '#',
      interest: ['AWS'],
    },
    {
      name: '김찬빈',
      position: 'DevRel',
      year: '융합보안학과 3학년',
      bio: '🧑‍💻 백엔드 중심의 5년차 풀스택 개발자, DevOps/SRE를 꿈꾸며 소통과 실질적 가치를 추구합니다.',
      image: '/member/3.png',
      email: 'flqld86851@gmail.com',
      linkedin: 'https://github.com/devbini',
      github: 'https://linkedin.com/in/devbini',
      interest: ['Software Engineer', 'Infrastructure', 'DevOps', 'SRE'],
    },
    {
      name: '오현석',
      position: 'DevRel',
      year: '정보통신공학과 4학년',
      bio: '엔지니어의 역할에 대해 항상 고민하는 MLOps 주니어 개발자 오현석입니다',
      image: '/member/4.jpeg',
      email: 'ohhs1010@gmail.com\n',
      linkedin: 'https://www.linkedin.com/in/5hseok/',
      github: 'https://github.com/cupist-owen',
      interest: ['BE', 'DevOps', 'MLOps'],
    },
    {
      name: '고동현',
      position: 'Member',
      year: '컴퓨터공학과 3학년',
      bio: '백엔드와 AWS SAA 직무에 관해서 관심이 많은 컴퓨터공학과 3학년 고동현입니다.',
      image: '/member/5.png',
      email: 'hanser0204@naver.com',
      linkedin: 'https://www.linkedin.com/in/kosora/',
      github: 'https://github.com/gosorasora',
      interest: ['BE', 'SAA'],
    },
    {
      name: '김민서',
      position: 'Member',
      year: '정보통신공학과 4학년',
      bio: '',
      image: '/member/0.png',
      email: 'kimim0410@gmail.com',
      linkedin: 'https://linkedin.com/in/galllee',
      github: 'https://github.com/galllee',
      interest: ['AWS'],
    },
    {
      name: '김지우',
      position: 'Member',
      year: '컴퓨터공학과 4학년',
      bio: '백엔드 개발과 클라우드 인프라 구축에 관심이 많은 컴퓨터공학과 4학년입니다.',
      image: '/member/7.png',
      email: '2022110421@dgu.ac.kr',
      linkedin: 'http://linkedin.com/in/jiwoo1203',
      github: 'https://github.com/ryann1203',
      interest: ['BE', 'Cloud', 'Infrastructure'],
    },
    {
      name: '백지은',
      position: 'Member',
      year: 'AI소프트웨어융합학부 3학년',
      bio: '백엔드를 기반으로 다양한 분야를 탐색하며 폭 넓게 도전해보고 있습니다.',
      image: '/member/8.jpeg',
      email: 'jieun13.b@gmail.com',
      linkedin: 'https://www.linkedin.com/in/Jieun13/',
      github: 'https://github.com/Jieun13',
      interest: ['BE', 'DevOps', 'ios'],
    },
    {
      name: '서예은',
      position: 'Member',
      year: '정보통신공학과 4학년',
      bio: '',
      image: '/member/0.png',
      email: 'michelle200323@gmail.com',
      linkedin: 'https://linkedin.com/in/michelle259',
      github: 'https://github.com/michelle259',
      interest: ['AWS'],
    },
    {
      name: '이민형',
      position: 'Member',
      year: '정보통신공학과 3학년',
      bio: '백엔드와 클라우드에 관심 있어 학부연구생을 시작하게 된 정보통신공학전공 3학년입니다~',
      image: '/member/0.png',
      email: 'koreamax012@gmail.com',
      linkedin: 'www.linkedin.com/in/koreamax',
      github: 'https://github.com/Koreamax',
      interest: ['Spring Boot', 'Cloud', 'Network'],
    },
    {
      name: '이승현',
      position: 'Member',
      year: '정보통신공학과 4학년',
      bio: '',
      image: '/member/10.jpg',
      email: 'hh7141@dgu.ac.kr',
      linkedin: 'https://linkedin.com/in/nanami-tomoe',
      github: 'https://github.com/nanami-tomoe',
      interest: ['AWS'],
    },
    {
      name: '최선우',
      position: 'Member',
      year: '컴퓨터 AI 학부 2학년',
      bio: '프론트엔드 개발 경험을 바탕으로, 현재 AWS를 통해 클라우드와 DevOps 분야로 관심을 넓혀가고 있는 컴퓨터 ai 학부 2학년입니다.',
      image: '/member/12.jpg',
      email: 'seonwoo31@dgu.ac.kr',
      linkedin: 'https://www.linkedin.com/in/최선우24',
      github: 'https://github.com/seonwoochoi24',
      interest: ['FE', 'DevOps'],
    },
    {
      name: '최윤호',
      position: 'Member',
      year: '정보통신공학과 4학년',
      bio: '클라우드와 보안에 관심이 많고 커피 한잔 하면서 대화하길 좋아하는 엔지니어입니다.',
      image: '/member/13.jpg',
      email: 'cyunho62100@gmail.com',
      linkedin: 'www.linkedin.com/in/yunho-choi',
      github: 'https://github.com/yunhoch0i',
      interest: ['DevSecOps', 'Network', 'Connection'],
    },
  ];

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="py-20 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/3 w-1/2 h-1/2 bg-orange-900/10 rounded-full blur-3xl"
          style={{ x: transformX, y: transformY }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-1/2 h-1/2 bg-orange-900/10 rounded-full blur-3xl"
          style={{ x: transformXInverse, y: transformYInverse }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 mb-6">
            Our Members
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <span className="font-semibold text-orange-300">
              AWS Cloud Clubs at DGU
            </span>
            를 지탱하고 함께 이끌어가는 멤버들입니다.
            <br />
            <span className="font-semibold text-orange-300">
              2명의 캡틴
            </span>,{' '}
            <span className="font-semibold text-orange-300">2명의 DevRel</span>,{' '}
            <span className="font-semibold text-orange-300">9명의 멤버</span>로
            이루어져 있습니다.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 overflow-hidden"
              variants={itemVariants}
            >
              <div className="relative">
                <div className="w-full h-64 bg-white/5 border-b border-white/10 flex items-center justify-center">
                  <Image
                    src={
                      `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}${member.image}` ||
                      '/placeholder.svg?height=256&width=256'
                    }
                    alt={member.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className={positionToColor[member.position]}>
                    {member.position}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-300 font-medium text-sm">
                    {member.year}
                  </p>
                </div>

                {member.bio && (
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed min-h-[3rem]">
                    {member.bio}
                  </p>
                )}

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {member.interest.map((data, index) => (
                      <Badge
                        key={index}
                        className="bg-white/10 backdrop-blur-sm text-gray-200 border border-white/20 hover:bg-white/20 text-xs"
                      >
                        {data}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg transition-all duration-300 border border-white/20"
                    title="Email"
                  >
                    <Mail className="h-4 w-4 text-orange-400" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="p-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg transition-all duration-300 border border-white/20"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4 text-orange-400" />
                  </a>
                  <a
                    href={member.github}
                    className="p-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg transition-all duration-300 border border-white/20"
                    title="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 text-orange-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center" variants={itemVariants}>
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-400 mb-4">
              참가하고 싶으신가요?
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              모든 멤버는{' '}
              <span className="font-semibold text-orange-300">
                1년간 ACC 활동
              </span>
              을 진행하게 되며, <br />
              활동이 끝나면{' '}
              <span className="font-semibold text-orange-300">
                다음 기수의 멤버
              </span>
              를 모집하게 됩니다.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
