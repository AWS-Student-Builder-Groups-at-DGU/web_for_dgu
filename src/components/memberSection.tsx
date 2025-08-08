import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Linkedin, Github } from 'lucide-react';

import Image from 'next/image';

export function MemberSection() {
  type Position = 'Captain' | 'DevRel' | 'Member';

  const positionToColor: Record<Position, string> = {
    Captain: 'bg-orange-600',
    DevRel: 'bg-orange-400',
    Member: 'bg-gray-500',
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
      image: '',
      email: 'rlrlfhtm2@dgu.ac.kr',
      linkedin: 'www.linkedin.com/in/leedohyeong',
      github: 'https://github.com/puretension',
      interest: ['Platform Engineer', 'DevOps'],
    },
    {
      name: '정은지',
      position: 'Captain',
      year: '컴퓨터공학과 4학년',
      bio: 'Description',
      image: '',
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
      image: '',
      email: 'flqld86851@gmail.com',
      linkedin: 'https://github.com/devbini',
      github: 'https://linkedin.com/in/devbini',
      interest: ['DevOps', 'FE', 'BE', 'SRE'],
    },
    {
      name: '오현석',
      position: 'DevRel',
      year: '정보통신공학과 4학년',
      bio: '엔지니어의 역할에 대해 항상 고민하는 MLOps 주니어 개발자 오현석입니다',
      image: '',
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
      image: '',
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
      image: '',
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
      image: '',
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
      image: '',
      email: ' jieun13.b@gmail.com',
      linkedin: 'https://www.linkedin.com/in/Jieun13/',
      github: 'https://github.com/Jieun13',
      interest: ['BE', 'DevOps', 'ios'],
    },

    {
      name: '서예은',
      position: 'Member',
      year: '정보통신공학과 4학년',
      bio: '',
      image: '',
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
      image: '',
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
      image: '',
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
      image: '',
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
      image: '',
      email: 'cyunho62100@gmail.com',
      linkedin: 'www.linkedin.com/in/yunho-choi',
      github: 'https://github.com/yunhoch0i',
      interest: ['DevSecOps', 'Network', 'Connection'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Members
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AWS Cloud Clubs at DGU를 지탱하고 함께 이끌어가는 멤버들입니다.
            <br />
            2명의 캡틴, 2명의 DevRel, 9명의 멤버로 이루어져 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {members.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`${positionToColor[member.position] || 'bg-gray-400'} text-white`}
                  >
                    {member.position}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-medium text-sm">
                    {member.year}
                  </p>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {member.interest.map((data, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {data}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    title="Email"
                  >
                    <Mail className="h-4 w-4 text-gray-600" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    title="LinkedIn"
                    target="_blank"
                  >
                    <Linkedin className="h-4 w-4 text-gray-600" />
                  </a>
                  <a
                    href={member.github}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    title="GitHub"
                    target="_blank"
                  >
                    <Github className="h-4 w-4 text-gray-600" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-orange-50 to-blue-50">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                참가하고 싶으신가요?
              </h2>
              <p className="text-gray-600 mb-6">
                모든 멤버는 1년간 ACC 활동을 진행하게 되며, <br />
                활동이 끝나면 다음 기수의 멤버를 모집하게 됩니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
