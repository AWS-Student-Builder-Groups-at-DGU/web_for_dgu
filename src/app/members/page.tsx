'use client';

import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import { Github, Linkedin, Globe, Sparkles } from 'lucide-react';

type Role = 'Captain' | 'Core' | 'Member';

interface Member {
  id: number;
  name: string;
  role: Role;
  keywords: string[];
  motto: string;
  imageUrl: string;
  github?: string;
  linkedin?: string;
  blog?: string;
}

const MEMBERS_DATA: Record<string, Member[]> = {
  'ACC 1기': [
    {
      id: 1,
      name: '이도형',
      role: 'Captain',
      keywords: ['Platform Engineer', 'DevOps'],
      motto:
        '개발을 도구적 관점으로 접근하여, 촘촘한 소통을 통해 팀과 Align되어 비즈니스 가치를 만들어내는 이도형입니다.',
      imageUrl: `${process.env.NEXT_PUBLIC_S3_URL}/members/1.jpeg`,
      github: 'https://github.com/puretension',
      linkedin: 'https://www.linkedin.com/in/leedohyeong',
    },
    {
      id: 2,
      name: '정은지',
      role: 'Captain',
      keywords: ['SW Engineering', 'DevOps'],
      motto:
        '문제 해결을 위한 다양한 아이디어를 내는 것을 좋아하며, 영감을 얻고 영감을 주는 것이 좋아합니다.',
      imageUrl: `${process.env.NEXT_PUBLIC_S3_URL}/members/2.png`,
      github: 'https://github.com/bianbbc87',
      linkedin: 'https://www.linkedin.com/in/eunji-jung-173288296/',
    },

    {
      id: 3,
      name: '김찬빈',
      role: 'Core',
      keywords: ['Develop', 'DevOps', 'Cloud'],
      motto:
        '커뮤니케이션을 좋아하고, 도전을 즐기는 6년차 풀스택 개발자입니다. 누군가에게 도움이 되는 걸 만들고자 하는 김찬빈입니다.',
      imageUrl: `${process.env.NEXT_PUBLIC_S3_URL}/members/3.png`,
      github: 'https://github.com/devbini',
      linkedin: 'https://www.linkedin.com/in/devbini',
      blog: 'https://chanbeen.com',
    },
    {
      id: 4,
      name: '오현석',
      role: 'Core',
      keywords: ['BE', 'DevOps', 'MLOps'],
      motto:
        '엔지니어의 역할에 대해 항상 고민하는 MLOps 주니어 개발자 오현석입니다',
      imageUrl: `${process.env.NEXT_PUBLIC_S3_URL}/members/4.jpeg`,
      github: 'https://github.com/cupist-owen',
      linkedin: 'https://www.linkedin.com/in/5hseok/',
    },

    {
      id: 5,
      name: '고동현',
      role: 'Member',
      keywords: ['BE', 'AWS SAA'],
      motto:
        '백엔드와 AWS SAA 직무에 관해서 관심이 많은 컴퓨터공학과 3학년 고동현입니다.',
      imageUrl: `${process.env.NEXT_PUBLIC_S3_URL}/members/5.png`,
      github: 'https://github.com/Gosorasora',
      linkedin: 'https://www.linkedin.com/in/kosora/',
    },
    {
      id: 6,
      name: '김민서',
      role: 'Member',
      keywords: ['BE', 'Infra'],
      motto: '꾸준히 노력하며 성장하는, 앞으로 더 잘할 김민서입니다.',
      imageUrl: `${process.env.NEXT_PUBLIC_S3_URL}/members/6.png`,
      github: 'https://github.com/galllee',
      linkedin:
        'https://www.linkedin.com/in/%EB%AF%BC%EC%84%9C-%EA%B9%80-5ba3b8332/',
    },
    {
      id: 7,
      name: '김지우',
      role: 'Member',
      keywords: ['BE', '클라우드', '인프라'],
      motto:
        '백엔드 개발과 클라우드 인프라 구축에 관심이 많은 컴퓨터공학과 4학년입니다.',
      imageUrl: `${process.env.NEXT_PUBLIC_S3_URL}/members/7.png`,
      github: 'https://github.com/ryann1203',
      linkedin: 'http://linkedin.com/in/jiwoo1203',
    },
    {
      id: 8,
      name: '백지은',
      role: 'Member',
      keywords: ['BE', 'DevOps', 'ios'],
      motto:
        '백엔드를 기반으로 다양한 분야를 탐색하며 폭 넓게 도전해보고 있습니다.',
      imageUrl: `${process.env.NEXT_PUBLIC_S3_URL}/members/8.jpeg`,
      github: 'https://github.com/Jieun13',
      linkedin: 'https://www.linkedin.com/in/Jieun13/',
    },
    {
      id: 9,
      name: '서예은',
      role: 'Member',
      keywords: ['BE', 'Infra'],
      motto:
        '막히더라도 포기하지 않고 끝까지 해결하여 배움을 얻는 거를 좋아하는 개발자 서예은입니다.',
      imageUrl: `${process.env.NEXT_PUBLIC_S3_URL}/members/9.png`,
      github: 'https://github.com/michelle259',
      linkedin:
        'https://www.linkedin.com/in/%EC%98%88%EC%9D%80-%EC%84%9C-4b0613373/',
    },
    {
      id: 10,
      name: '이민형',
      role: 'Member',
      keywords: ['Spring boot', 'Cloud', 'Network'],
      motto:
        '백엔드와 클라우드에 관심 있어 학부연구생을 시작하게 된 정보통신공학전공 3학년입니다~',
      imageUrl: `${process.env.NEXT_PUBLIC_S3_URL}/members/10.jpg`,
      github: 'https://github.com/koreamax',
      linkedin: 'https://www.linkedin.com/in/koreamax',
    },
    {
      id: 11,
      name: '이승현',
      role: 'Member',
      keywords: ['BE', 'Infra'],
      motto: '함께 지식을 공유하고 성장하는 것을 좋아하는 개발자 이승현입니다.',
      imageUrl: `${process.env.NEXT_PUBLIC_S3_URL}/members/11.png`,
      github: 'https://github.com/nanami-tomoe',
      linkedin:
        'https://www.linkedin.com/in/%EC%8A%B9%ED%98%84-%EC%9D%B4-405467291/',
    },
    {
      id: 12,
      name: '최선우',
      role: 'Member',
      keywords: ['FE', 'DevOps'],
      motto:
        '프론트엔드 개발 경험을 바탕으로, 현재 AWS를 통해 클라우드와 DevOps 분야로 관심을 넓혀가고 있는 컴퓨터 ai 학부 2학년입니다.',
      imageUrl: `${process.env.NEXT_PUBLIC_S3_URL}/members/12.jpg`,
      github: 'https://github.com/seonwoochoi24',
      linkedin: 'https://www.linkedin.com/in/최선우24',
    },
    {
      id: 13,
      name: '최윤호',
      role: 'Member',
      keywords: ['DevSecOps', 'Network'],
      motto:
        '클라우드와 보안에 관심이 많고 커피 한잔 하면서 대화하길 좋아하는 엔지니어입니다.',
      imageUrl: `${process.env.NEXT_PUBLIC_S3_URL}/members/13.jpg`,
      github: 'https://github.com/yunhoch0i',
      linkedin: 'https://www.linkedin.com/in/yunho-choi',
    },
  ],
  'ASBG 1기': [],
};

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

export default function MembersPage() {
  const [activeGen, setActiveGen] = useState('ACC 1기');
  const [mounted, setMounted] = useState(false);

  const gens = Object.keys(MEMBERS_DATA);
  const currentMembers = MEMBERS_DATA[activeGen] || [];

  const captains = currentMembers.filter((m) => m.role === 'Captain');
  const Cores = currentMembers.filter((m) => m.role === 'Core');
  const members = currentMembers.filter((m) => m.role === 'Member');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <PageWrapper>
      <Container>
        <HeaderSection>
          <div className="badge">
            <Sparkles size={14} /> DGU Builders
          </div>
          <h1>
            Meet the <span className="highlight">Architects</span>
          </h1>
          <p>AWS Student Builder Groups at DGU를 이끄는 멤버들을 소개합니다.</p>
        </HeaderSection>

        <TabWrapper>
          {gens.map((gen) => (
            <TabButton
              key={gen}
              $active={activeGen === gen}
              onClick={() => setActiveGen(gen)}
            >
              {gen}
            </TabButton>
          ))}
        </TabWrapper>

        {captains.length > 0 && (
          <SectionWrapper>
            <SectionTitle>Captains</SectionTitle>
            <MemberGrid>
              {captains.map((m, i) => (
                <MemberCardItem key={m.id} member={m} index={i} />
              ))}
            </MemberGrid>
          </SectionWrapper>
        )}

        {Cores.length > 0 && (
          <SectionWrapper>
            <SectionTitle>Core Members</SectionTitle>
            <MemberGrid>
              {Cores.map((m, i) => (
                <MemberCardItem key={m.id} member={m} index={i} />
              ))}
            </MemberGrid>
          </SectionWrapper>
        )}

        {members.length > 0 && (
          <SectionWrapper>
            <SectionTitle>Members</SectionTitle>
            <MemberGrid>
              {members.map((m, i) => (
                <MemberCardItem key={m.id} member={m} index={i} />
              ))}
            </MemberGrid>
          </SectionWrapper>
        )}
      </Container>
    </PageWrapper>
  );
}

const MemberCardItem = ({
  member,
  index,
}: {
  member: Member;
  index: number;
}) => (
  <TrendyCard $role={member.role} style={{ animationDelay: `${index * 0.1}s` }}>
    <CardContent>
      <TopRow>
        <ImageContainer>
          <div className="img-glow" />
          <Image src={member.imageUrl} alt={member.name} fill sizes="80px" />
        </ImageContainer>
        <NameInfo>
          <div className="name-box">
            <h3>{member.name}</h3>
            <RoleTag $role={member.role}>{member.role}</RoleTag>
          </div>
          <SocialLinks>
            {member.github && (
              <a href={member.github} target="_blank">
                <Github size={16} />
              </a>
            )}
            {member.linkedin && (
              <a href={member.linkedin} target="_blank">
                <Linkedin size={16} />
              </a>
            )}
            {member.blog && (
              <a href={member.blog} target="_blank">
                <Globe size={16} />
              </a>
            )}
          </SocialLinks>
        </NameInfo>
      </TopRow>

      <MottoSection>
        <p>&quot;{member.motto}&quot;</p>
      </MottoSection>

      <TagCloud>
        {member.keywords.map((k) => (
          <span key={k}>#{k}</span>
        ))}
      </TagCloud>
    </CardContent>
  </TrendyCard>
);

const PageWrapper = styled.div`
  padding: 140px 0 100px;
  background-color: #fcfcfd;
  min-height: 100vh;
  background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
  background-size: 32px 32px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  animation: ${fadeIn} 0.6s ease-out;
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: ${({ theme }) => theme.colors.primary}10;
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.5rem 1rem;
    border-radius: 99px;
    font-size: 0.85rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    color: #1a202c;
    letter-spacing: -0.04em;
    margin-bottom: 1rem;
    .highlight {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
  p {
    color: #4a5568;
    font-size: 1.2rem;
  }
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 5rem;
`;

const TabButton = styled.button<{ $active: boolean }>`
  padding: 0.6rem 1.8rem;
  border-radius: 12px;
  font-weight: 700;
  border: 1px solid
    ${(props) => (props.$active ? props.theme.colors.primary : '#e2e8f0')};
  background: ${(props) =>
    props.$active ? props.theme.colors.primary : 'white'};
  color: ${(props) => (props.$active ? 'white' : '#64748b')};
  cursor: pointer;
  transition: 0.2s;
`;

const SectionWrapper = styled.div`
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #adb5bd;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #eee;
  }
`;

const MemberGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const TrendyCard = styled.div<{ $role: Role }>`
  background: white;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: ${fadeIn} 0.6s ease-out backwards;
  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme, $role }) =>
      $role === 'Captain'
        ? theme.colors.accent
        : $role === 'Core'
          ? theme.colors.secondary
          : theme.colors.primary}50;
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.08);
    .img-glow {
      opacity: 0.5;
    }
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 68px;
  height: 68px;
  flex-shrink: 0;
  img {
    border-radius: 18px;
    object-fit: cover;
    z-index: 1;
  }
  .img-glow {
    position: absolute;
    inset: -5px;
    background: ${({ theme }) => theme.colors.accent}40;
    filter: blur(10px);
    border-radius: 50%;
    opacity: 0;
    transition: 0.4s;
  }
`;

const NameInfo = styled.div`
  flex: 1;
  .name-box {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.4rem;
    h3 {
      font-size: 1.2rem;
      font-weight: 800;
      color: #1a202c;
    }
  }
`;

const RoleTag = styled.span<{ $role: Role }>`
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  background: ${({ theme, $role }) =>
    $role === 'Captain'
      ? theme.colors.accent
      : $role === 'Core'
        ? theme.colors.secondary
        : '#f1f5f9'};
  color: ${({ $role }) => ($role === 'Member' ? '#64748b' : 'white')};
`;

const MottoSection = styled.div`
  flex: 1;
  margin-bottom: 1.5rem;
  p {
    font-size: 0.9rem;
    color: #4a5568;
    line-height: 1.6;
    word-break: keep-all;
    font-weight: 500;
  }
`;

const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding-top: 1rem;
  border-top: 1px solid #f1f5f9;
  span {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary}08;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.6rem;
  a {
    color: #a0aec0;
    transition: 0.2s;
    &:hover {
      color: #1a202c;
    }
  }
`;
