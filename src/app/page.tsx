'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Code,
  Users,
  Network,
  Bell,
  Cloud,
  Calendar,
  Zap,
  Database,
  Sprout,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Mic,
} from 'lucide-react';

const features = [
  {
    icon: <Code />,
    title: 'Hands-On Labs',
    description:
      '어려운 이론 공부보다는, AWS 콘솔을 직접 눌러보며 서비스를 띄워보는 실습 위주로 진행합니다.',
  },
  {
    icon: <Mic />,
    title: '지식 공유 세미나',
    description:
      '단순히 듣기만 하는 스터디가 아닙니다. 멤버 모두에게 자신이 공부한 내용을 발표할 기회가 주어집니다.',
  },
  {
    icon: <Users />,
    title: '네트워킹',
    description:
      '다양한 배경을 가진 학우들과 기술적인 고민을 나누고 교류하며, 개발자로서의 시야를 넓힙니다.',
  },
  {
    icon: <Network />,
    title: 'Global Event',
    description:
      'AWS가 주최하는 다양한 행사와 글로벌 학생 커뮤니티에 참여할 기회를 얻습니다.',
  },
];

const stats = [
  { label: 'Active Members', value: '13+', icon: <Users /> },
  { label: 'Seminars Held This Year', value: '7', icon: <Calendar /> },
];

const roadmap = [
  {
    step: 'STEP 01',
    title: 'Interest & Passion',
    desc: "시작은 여러분의 호기심입니다. 클라우드가 무엇인지 궁금해하고 스스로 알아보려는 '관심'과 '열정'만 챙겨오세요!",
  },
  {
    step: 'STEP 02',
    title: 'Knowledge & Case',
    desc: '동아리 세션을 통해 선배들의 노하우와 핵심 지식을 흡수합니다. 막히는 부분이 있다면 언제든 물어보세요.',
  },
  {
    step: 'STEP 03',
    title: 'Build Your Own',
    desc: '습득한 지식을 바탕으로 내 손으로 직접 서비스를 구축해봅니다. 여러분의 아이디어가 실제 결과물로 탄생합니다.',
  },
];

const targets = [
  {
    icon: <Sprout />,
    title: 'AWS가 처음인 입문자',
    desc: "클라우드가 뭔지 몰라도 괜찮아요! '한번 배워보고 싶다'는 호기심만 있다면 충분합니다.",
  },
  {
    icon: <Lightbulb />,
    title: '개발 경험이 부족한 분',
    desc: '코딩을 잘 못해도 상관없어요. 전공자가 아니어도 따라올 수 있는 실습들이 준비되어 있습니다.',
  },
  {
    icon: <GraduationCap />,
    title: '취업 스펙을 쌓고 싶은 분',
    desc: '남들과 다른 나만의 무기가 필요하다면? AWS 실무 경험과 발표 경험으로 경쟁력을 높여보세요.',
  },
  {
    icon: <HeartHandshake />,
    title: '함께 성장할 친구를 찾는 분',
    desc: '혼자 공부하기 외로웠다면, 서로 밀어주고 끌어주는 동국대 열정 러닝메이트들을 만나보세요.',
  },
];

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function Home() {
  return (
    <PageWrapper>
      <Container>
        <HeroSection>
          <HeroContent>
            <Badge>2026 Recruitment Coming Soon</Badge>
            <Title>
              Start Your Cloud
              <br />
              Journey at <span className="highlight">DGU.</span>
            </Title>
            <Description>
              <strong>AWS Cloud Club</strong>은 개발 실력보다 열정을 봅니다.
              <br />
              클라우드가 처음이라도 괜찮습니다. <br />
              기초부터 함께 배우며 성장할 여러분을 기다립니다.
            </Description>

            <NotifyButton href={'/recruit'}>
              신규 멤버 지원하기 <Bell size={20} />
            </NotifyButton>
          </HeroContent>

          <HeroGraphicsWrapper>
            <CloudContainer>
              <MainCloudIcon>
                <Cloud strokeWidth={1.5} />
              </MainCloudIcon>

              <TechBubble
                $pos="top: -20px; right: 0px;"
                $delay="0s"
                $color="#FF9900"
              >
                <Zap fill="#FF9900" />
              </TechBubble>
              <TechBubble
                $pos="bottom: 20px; left: -20px;"
                $delay="1.5s"
                $color="#00A8E0"
              >
                <Database />
              </TechBubble>
              <TechBubble
                $pos="bottom: 40px; right: -30px;"
                $delay="3s"
                $color="#232F3E"
              >
                <Code />
              </TechBubble>
            </CloudContainer>
          </HeroGraphicsWrapper>
        </HeroSection>

        <StatsSection>
          {stats.map((stat, idx) => (
            <StatItem key={idx}>
              <div className="icon-box">{stat.icon}</div>
              <span className="value">{stat.value}</span>
              <span className="label">{stat.label}</span>
            </StatItem>
          ))}
        </StatsSection>

        <TargetSection>
          <SectionHeader>
            <h2>Who We Are Looking For</h2>
            <p>개발자가 아니어도 좋습니다. AWS에 대한 관심만 가져오세요.</p>
          </SectionHeader>
          <TargetGrid>
            {targets.map((target, idx) => (
              <TargetCard key={idx}>
                <div className="check-icon">{target.icon}</div>
                <div className="content">
                  <h3>{target.title}</h3>
                  <p>{target.desc}</p>
                </div>
              </TargetCard>
            ))}
          </TargetGrid>
        </TargetSection>

        <FeaturesSection>
          <SectionHeader>
            <h2>What We Do</h2>
            <p>이론보다는 내 손으로 직접 만드는 즐거움을 추구합니다.</p>
          </SectionHeader>
          <GridSection>
            {features.map((feature, index) => (
              <Card key={index}>
                <IconWrapper>{feature.icon}</IconWrapper>
                <CardTitle>{feature.title}</CardTitle>
                <CardText>{feature.description}</CardText>
              </Card>
            ))}
          </GridSection>
        </FeaturesSection>

        <RoadmapSection>
          <SectionHeader>
            <h2>Growth Roadmap</h2>
            <p>기초부터 실전 프로젝트까지, 단계별로 함께 성장합니다.</p>
          </SectionHeader>
          <RoadmapFlow>
            {roadmap.map((item, idx) => (
              <RoadmapStepCard key={idx}>
                <span className="step-badge">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </RoadmapStepCard>
            ))}
          </RoadmapFlow>
        </RoadmapSection>
      </Container>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  padding-top: 70px;
  background-color: ${({ theme }) => theme.colors.background};

  background-image:
    linear-gradient(rgba(0, 168, 224, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 168, 224, 0.03) 1px, transparent 1px),
    radial-gradient(
      circle at 15% 50%,
      ${({ theme }) => theme.colors.accent}10,
      transparent 40%
    ),
    radial-gradient(
      circle at 85% 30%,
      ${({ theme }) => theme.colors.secondary}10,
      transparent 40%
    );
  background-size:
    40px 40px,
    40px 40px,
    100% 100%,
    100% 100%;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 1.5rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const HeroSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60vh;
  margin-bottom: 4rem;
  gap: 2rem;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    gap: 4rem;
    text-align: center;
    justify-content: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 550px;
  animation: ${fadeIn} 0.8s ease-out;
  z-index: 2;
`;

const HeroGraphicsWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 400px;
  animation: ${fadeIn} 1s ease-out 0.2s backwards;

  @media (max-width: 960px) {
    width: 100%;
    height: 300px;
  }
`;

const CloudContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} 6s ease-in-out infinite;
`;

const MainCloudIcon = styled.div`
  color: white;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.4)
  );
  backdrop-filter: blur(10px);
  border-radius: 50%;
  padding: 2rem;
  box-shadow:
    0 20px 50px -10px rgba(0, 168, 224, 0.3),
    inset 0 0 20px rgba(255, 255, 255, 0.8);

  svg {
    width: 180px;
    height: 180px;
    color: ${({ theme }) => theme.colors.accent};
    fill: ${({ theme }) => theme.colors.accent}15;
    filter: drop-shadow(0 10px 20px ${({ theme }) => theme.colors.accent}40);
  }
`;

const TechBubble = styled.div<{ $pos: string; $delay: string; $color: string }>`
  position: absolute;
  ${({ $pos }) => $pos}
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  animation: ${float} 5s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};
  z-index: 10;

  svg {
    width: 24px;
    height: 24px;
    color: ${({ $color }) => $color};
  }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.primary}10;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 999px;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary}30;

  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 50%;
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.accent};
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.textDark};
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;

  .highlight {
    color: ${({ theme }) => theme.colors.accent};
    position: relative;
    display: inline-block;
    filter: drop-shadow(0 0 8px ${({ theme }) => theme.colors.accent}50);
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textDark}CC;
  margin-bottom: 3rem;
  font-weight: 500;
`;

const NotifyButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 1.1rem 2.5rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    #1a2330
  );
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px -5px ${({ theme }) => theme.colors.primary}80;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: rotate(45deg);
    transition: 0.5s;
    opacity: 0;
  }

  svg {
    margin-left: 0.75rem;
    transition: transform 0.3s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px -5px ${({ theme }) => theme.colors.accent}60;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.accent},
      #e68a00
    );
    &::after {
      opacity: 1;
      left: 100%;
    }
    svg {
      transform: rotate(15deg);
    }
  }
`;

const StatsSection = styled.div`
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.primary},
    #1a1f2c
  );
  border-radius: 24px;
  padding: 4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 8rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.secondary}30;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.05;
    background-image:
      linear-gradient(#fff 1px, transparent 1px),
      linear-gradient(90deg, #fff 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
    padding: 3rem 2rem;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 1;

  .icon-box {
    color: ${({ theme }) => theme.colors.accent};
    filter: drop-shadow(0 0 10px ${({ theme }) => theme.colors.accent}80);
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  .value {
    font-size: 3.5rem;
    font-weight: 900;
    line-height: 1;
    font-family: 'Courier New', Courier, monospace;
    text-shadow: 0 0 15px ${({ theme }) => theme.colors.secondary}80;
  }
  .label {
    font-size: 1.1rem;
    opacity: 0.9;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

const TargetSection = styled.section`
  margin-bottom: 8rem;
`;

const TargetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TargetCard = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 8px 24px rgba(35, 47, 62, 0.08);
    transform: translateY(-3px);

    .check-icon {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
    }
    .check-icon svg {
      color: white;
    }
  }

  .check-icon {
    flex-shrink: 0;
    width: 3rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.lightGray}50;
    color: ${({ theme }) => theme.colors.gray};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .content {
    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.textDark};
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.gray};
      line-height: 1.5;
      word-break: keep-all;
    }
  }
`;

const FeaturesSection = styled.section`
  margin-bottom: 10rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.textDark};
    margin-bottom: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 1rem;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 40px;
      height: 3px;
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.accent},
        transparent
      );
    }
    &::after {
      transform: rotate(180deg);
    }
  }
  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  svg {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    stroke-width: 2px;
    transition: all 0.3s ease;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.secondary}
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: transparent;
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15);

    &::before {
      transform: scaleX(1);
    }

    ${IconWrapper} {
      border-color: ${({ theme }) => theme.colors.accent};
      background-color: ${({ theme }) => theme.colors.accent};
      box-shadow: 0 0 20px ${({ theme }) => theme.colors.accent}60;
      svg {
        color: white;
      }
    }
  }
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textDark};
`;

const CardText = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  font-weight: 500;
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RoadmapSection = styled.section`
  margin-bottom: 8rem;
`;

const RoadmapFlow = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
    align-items: center;
  }
`;

const RoadmapStepCard = styled.div`
  flex: 1;
  background: white;
  padding: 3rem 2rem;
  border-radius: 24px;
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  position: relative;
  transition: all 0.3s ease;
  max-width: 340px;
  width: 100%;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -2.5rem;
    top: 50%;
    width: 1rem;
    height: 1rem;
    border-top: 3px solid ${({ theme }) => theme.colors.secondary}60;
    border-right: 3px solid ${({ theme }) => theme.colors.secondary}60;
    transform: translateY(-50%) rotate(45deg);
    z-index: 10;

    @media (max-width: 768px) {
      right: 50%;
      top: auto;
      bottom: -2rem;
      transform: translateX(50%) rotate(135deg);
    }
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 15px 35px rgba(0, 168, 224, 0.15);
    transform: translateY(-5px);

    .step-badge {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: white;
      box-shadow: 0 0 15px ${({ theme }) => theme.colors.secondary}60;
    }
  }

  .step-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.secondary}20;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 800;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.textDark};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray};
    line-height: 1.6;
    word-break: keep-all;
  }
`;
