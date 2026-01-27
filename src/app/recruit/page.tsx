'use client';

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Send,
  Sparkles,
  BookOpen,
  Rocket,
  MessageSquare,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import { subscribeEmail } from '@/api/recruit';

const TALENTS = [
  {
    icon: <BookOpen size={28} />,
    title: '기초를 다지고 싶은 열정',
    desc: 'CS 기초(CS Fundamentals)가 완벽하지 않아도 괜찮습니다. 활동을 통해 전공 지식을 탄탄히 다지고 싶은 의지가 있는 분을 찾습니다.',
  },
  {
    icon: <Rocket size={28} />,
    title: '클라우드를 향한 호기심',
    desc: '화려한 프로젝트 경험보다는 AWS 클라우드 기술 자체에 대한 순수한 호기심과, 직접 부딪히며 배우고자 하는 태도를 중요하게 생각합니다.',
  },
  {
    icon: <MessageSquare size={28} />,
    title: '적극적인 소통과 협업',
    desc: '질문과 발표를 두려워하지 않고, 팀원들과의 협업에 적극적으로 참여하여 함께 성장하는 시너지를 내는 분을 환영합니다.',
  },
];

const slideUp = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

export default function RecruitPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      await subscribeEmail(email);

      setStatus('success');
      setEmail('');
      alert(
        '🎉 알림 신청이 완료되었습니다! 모집이 시작되면 연락 드리겠습니다 😊',
      );

      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return (
    <PageWrapper>
      <Container>
        <HeaderSection>
          <HeaderBadge>
            <Sparkles size={14} /> Recruitment
          </HeaderBadge>
          <Title>
            Next Cloud <HighlightText>Builders</HighlightText>
          </Title>
          <Description>
            동국대학교 재학생, 휴학생, 대학원생 등 <strong>20명 내외</strong>의
            <br />
            새로운 멤버를 기다리고 있습니다.
          </Description>
        </HeaderSection>

        <TalentSection>
          <SectionTitle>Who we are looking for</SectionTitle>
          <Grid>
            {TALENTS.map((item, idx) => (
              <TalentCard key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                <IconWrapper>{item.icon}</IconWrapper>
                <CardTitle>{item.title}</CardTitle>
                <CardDesc>{item.desc}</CardDesc>
              </TalentCard>
            ))}
          </Grid>
        </TalentSection>

        <NotifyWrapper>
          <NotifyCard>
            <NotifyContent>
              <NotifyTitle>모집 알림 신청하기</NotifyTitle>
              <NotifyDesc>
                아직 모집 기간이 아닙니다.
                <br />
                이메일을 남겨주시면{' '}
                <AccentText>다음 기수 모집 시작 시 가장 먼저</AccentText>{' '}
                알려드릴게요.
              </NotifyDesc>

              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <EmailInput
                    type="email"
                    placeholder="example@dongguk.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === 'loading'}
                  />
                  <SubmitButton type="submit" disabled={status === 'loading'}>
                    {status === 'loading' ? (
                      <SpinningLoader size={20} />
                    ) : (
                      <>
                        신청하기 <Send size={18} />
                      </>
                    )}
                  </SubmitButton>
                </InputGroup>
                <PrivacyNote>
                  <CheckCircle2 size={12} /> 입력하신 이메일은 모집 알림 발송
                  용도로만 사용됩니다.
                </PrivacyNote>
              </Form>
            </NotifyContent>
          </NotifyCard>
        </NotifyWrapper>
      </Container>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  padding: 140px 0 100px;
  background-color: #fcfcfd;
  min-height: 100vh;
  background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
  background-size: 32px 32px;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  animation: ${slideUp} 0.6s ease-out;
`;

const HeaderBadge = styled.div`
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
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  color: #1a202c;
  letter-spacing: -0.04em;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HighlightText = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

const Description = styled.p`
  color: #4a5568;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6;

  strong {
    color: #2d3748;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    br {
      display: none;
    }
  }
`;

const TalentSection = styled.section`
  margin-bottom: 8rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TalentCard = styled.div`
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  animation: ${slideUp} 0.6s ease-out backwards;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.08);
    border-color: ${({ theme }) => theme.colors.accent}50;
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  background: #f1f5f9;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;

  ${TalentCard}:hover & {
    background: ${({ theme }) => theme.colors.accent};
    color: white;
    transform: scale(1.1) rotate(5deg);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 1rem;
  word-break: keep-all;
`;

const CardDesc = styled.p`
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
  word-break: keep-all;
`;

const NotifyWrapper = styled.div`
  display: flex;
  justify-content: center;
  animation: ${slideUp} 0.8s ease-out backwards;
  animation-delay: 0.3s;
`;

const NotifyCard = styled.div`
  width: 100%;
  max-width: 800px;
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  border-radius: 32px;
  padding: 4rem;
  color: white;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(255, 153, 0, 0.1) 0%,
      transparent 50%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

const NotifyContent = styled.div`
  position: relative;
  z-index: 1;
`;

const NotifyTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NotifyDesc = styled.p`
  font-size: 1.1rem;
  color: #cbd5e0;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const AccentText = styled.strong`
  color: ${({ theme }) => theme.colors.accent};
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 2px solid transparent;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(10px);
  transition: all 0.2s;

  &::placeholder {
    color: #a0aec0;
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  color: white;
  background: ${({ theme }) => theme.colors.accent};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s;
  min-width: 140px;

  &:hover:not(:disabled) {
    background: #e68a00;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const spin = keyframes`
    100% { transform: rotate(360deg); }
`;

const SpinningLoader = styled(Loader2)`
  animation: ${spin} 1s linear infinite;
`;

const PrivacyNote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: #718096;

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
