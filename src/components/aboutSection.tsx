import { Card, CardContent } from '@/components/ui/card';
import { Cloud, Code, Users, BookOpen, ArrowRight } from 'lucide-react';
import acc from 'P/Image/common/acc.png';
import Image from 'next/image';

export function AboutSection() {
  const features = [
    {
      icon: Cloud,
      title: 'AWS InfraStructure',
      description: 'AWS 서비스를 공부합니다.',
    },
    {
      icon: Code,
      title: 'Hands-on Projects',
      description: 'AWS 아키텍처를 직접 구성하며 실습합니다.',
    },
    {
      icon: Users,
      title: 'Community',
      description: '전국의 AWS Cloud Clubs 연합과 연결합니다.',
    },
    {
      icon: BookOpen,
      title: 'Study',
      description: '자체적으로 3개의 스터디를 운영하여 학습을 독려합니다.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AWS Cloud Club At DGU?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            2025년 7월, AWS 승인을 기반으로 동국대학교 클라우드 동아리가
            창설되었습니다. AWS 기술에 대한 열정을 가진 학생 커뮤니티를
            만들어가는 데 전념합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              - AWS 클라우드 서비스를 활용한 실무 경험을 쌓을 수 있도록 합니다.
              <br />
              - 업계 요구 사항 간의 격차 해소와 기술력을 개발하고, 혁신적인
              프로젝트에 참여하며,
              <br />
              &nbsp;&nbsp;클라우드 컴퓨팅 분야에서 성공적인 커리어를 준비할 수
              있는 플랫폼 역할을 합니다.
            </p>
          </div>
          <div className="relative">
            <Image src={acc} alt="IMG" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
