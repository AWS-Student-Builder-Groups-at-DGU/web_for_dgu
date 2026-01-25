"use client";

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { User, Presentation, MonitorPlay } from "lucide-react";

interface SessionItem {
    title: string;
    engTitle: string;
    desc: string;
    presenter: string;
    tags: string[];
}

interface Session {
    id: number;
    mainTheme: string;
    items: SessionItem[];
}

const SESSIONS_DATA: Record<string, Session[]> = {
    "1기": [
        {
            id: 1,
            mainTheme: "Cloud Networking & Observability",
            items: [
                {
                    title: "VPC 내부 네트워크 기술 뼛속까지 뜯어보기",
                    engTitle: "Dissecting VPC: A Deep Dive into Internal Cloud Networking",
                    desc: "AWS VPC가 어떻게 L3 네트워크 가상화를 실현하는지, Mapping Service와 Hyperplane을 통해 확장성과 격리를 어떻게 구현하는지 학습했습니다. 서브넷팅, 라우팅 등 전통적 개념과 클라우드 아키텍처를 연결했습니다.",
                    presenter: "이도형",
                    tags: ["VPC", "Networking", "Hyperplane"]
                },
                {
                    title: "K6 탐색적 부하 테스트: SLI 측정과 알림 연동",
                    engTitle: "Exploratory Load Testing with K6: SLI Metrics and End-to-End Alerting",
                    desc: "K6를 활용한 SLI 측정 부하 테스트를 실행하고, CloudWatch → SNS → Gmail로 이어지는 End-to-End Observability Flow를 실습했습니다. Node.js와 K6 AMI 환경에서 모니터링 파이프라인을 구축했습니다.",
                    presenter: "김찬빈",
                    tags: ["K6", "CloudWatch", "SNS"]
                },
            ],
        },
        {
            id: 2,
            mainTheme: "AI-Assisted Dev & Serverless",
            items: [
                {
                    title: "Amazon Q CLI를 이용한 가성비 인프라 설계하기",
                    engTitle: "Cost-Effective Infrastructure Design with Amazon Q CLI",
                    desc: "Amazon Q를 코드 자동완성을 넘어 전체 개발 사이클 관리 도구로 활용했습니다. Amazon Q CLI 프롬프트만으로 익명 메시지 웹 앱을 배포하며 AI 도구의 효율성을 체험했습니다.",
                    presenter: "정은지",
                    tags: ["AmazonQ", "CLI", "GenAI"]
                },
                {
                    title: "서버 개발자를 대체하는 방법 - Serverless A to Z",
                    engTitle: "How to replace server developers - Serverless A to Z",
                    desc: "AWS Lambda를 직접 경험하며 서버리스 아키텍처를 익혔습니다. 축제 사이트 개발 경험을 바탕으로 Fargate, EC2 Auto Scaling과 비교하며 비용 및 트래픽 관리 전략을 공유했습니다.",
                    presenter: "오현석",
                    tags: ["Lambda", "Serverless", "Architecture"]
                },
            ],
        },
        {
            id: 3,
            mainTheme: "Security Strategy & GenAI Project",
            items: [
                {
                    title: "프로처럼 클라우드 협업하기 – AWS Multi Account Strategy",
                    engTitle: "Collaborating in the Cloud Like a Pro",
                    desc: "단일 계정의 위험성을 인지하고, AWS Organizations와 IAM Identity Center를 활용해 환경을 분리했습니다. 보안 강화와 비용 분리, 운영 효율성을 높이는 Multi-Account 전략을 실습했습니다.",
                    presenter: "최윤호",
                    tags: ["Organizations", "IAM", "Security"]
                },
                {
                    title: "Bedrock과 Rekognition을 이용하여 내 전생 만들기",
                    engTitle: "Creating Your Past-Life Self with Bedrock and Rekognition",
                    desc: "Amazon Bedrock(Titan)으로 초상화를 만들고 Rekognition으로 얼굴을 분석해 합성하는 실습을 진행했습니다. SageMaker 노트북에서 S3, Lambda 등을 연동하며 AI 워크플로우를 구현했습니다.",
                    presenter: "이민형",
                    tags: ["Bedrock", "Rekognition", "SageMaker"]
                },
            ],
        },
        {
            id: 4,
            mainTheme: "Cloud-Native Deployment Workflow",
            items: [
                {
                    title: "Kiro의 Vibe코딩으로 컨테이너화 배포하기",
                    engTitle: "Containerized Deployment with Kiro's Vibe Coding",
                    desc: "AI IDE인 Kiro를 활용해 프롬프트만으로 Flask 앱 개발, Docker 컨테이너화, ECR 푸시, EKS 배포까지 시연했습니다. AI가 배포 오류를 스스로 진단하고 해결하는 과정을 확인했습니다.",
                    presenter: "고동현",
                    tags: ["Kiro", "EKS", "ECR"]
                },
                {
                    title: "AWS 서비스를 중심으로 살펴보는 단계별 백엔드 배포 전략",
                    engTitle: "A Step-by-Step Backend Deployment Strategy",
                    desc: "VPC 네트워크 구성부터 EC2, ECS, Lambda 컴퓨팅 선택, CodeDeploy CI/CD 파이프라인까지 백엔드 배포의 A to Z를 다뤘습니다. 명확한 아키텍처 다이어그램으로 AWS 생태계를 이해했습니다.",
                    presenter: "백지은",
                    tags: ["Backend", "Deployment", "CI/CD"]
                },
            ],
        },
        {
            id: 5,
            mainTheme: "Container Orchestration & Workflow",
            items: [
                {
                    title: "ECS + Fargate로 컨테이너 기반 배포하기",
                    engTitle: "Deploying Container-based Applications with ECS + Fargate",
                    desc: "ECS와 Fargate를 활용한 서버리스 컨테이너 배포의 전 과정을 경험했습니다. Node.js 앱을 Dockerizing하고 ECR에 푸시한 뒤, 인프라 관리 없이 서비스를 배포하며 일관성 있는 운영을 배웠습니다.",
                    presenter: "김민서",
                    tags: ["ECS", "Fargate", "Docker"]
                },
                {
                    title: "Step Functions를 사용하여 AWS Lambda 함수 오케스트레이션",
                    engTitle: "Orchestrating AWS Lambda Functions with Step Functions",
                    desc: "MSA 환경에서 Step Functions로 Lambda, SQS, SNS를 조화롭게 오케스트레이션했습니다. 복잡한 로직을 상태 머신으로 정의하여 서버리스 아키텍처의 유지보수성을 극대화했습니다.",
                    presenter: "이승현",
                    tags: ["StepFunctions", "Lambda", "MSA"]
                },
            ],
        },
        {
            id: 6,
            mainTheme: "Data Engineering & Performance",
            items: [
                {
                    title: "클라우드 기반 IoT 데이터 파이프라인 체험하기",
                    engTitle: "Experiencing Cloud-based IoT Data Pipeline",
                    desc: "AWS IoT Core, S3, QuickSight를 연결해 센서 데이터 수집부터 시각화까지의 파이프라인을 구축했습니다. MQTT로 생성된 데이터를 IoT Rule을 통해 적재하고 그래프로 분석했습니다.",
                    presenter: "서예은",
                    tags: ["IoTCore", "QuickSight", "S3"]
                },
                {
                    title: "EC2와 함께하는 캐시 실습 : Redis로 DB 성능 최적화하기",
                    engTitle: "Optimizing DB Performance with Redis",
                    desc: "Cache-Aside 패턴을 적용해 EC2, SQLite, ElastiCache(Redis)를 연동했습니다. 캐싱 적용 전후의 응답 속도가 30배 이상 차이나는 성능 향상을 직접 데이터로 확인했습니다.",
                    presenter: "김지우",
                    tags: ["Redis", "ElastiCache", "Performance"]
                },
            ],
        },
        {
            id: 7,
            mainTheme: "Global Services & Network Traffic",
            items: [
                {
                    title: "AWS Translate와 Polly로 번역·음성 변환 웹서비스 구축하기",
                    engTitle: "Building a Translation & TTS Web Service",
                    desc: "API Gateway, Lambda, Translate, Polly를 연동해 텍스트 번역 및 음성 변환 서버리스 파이프라인을 구축했습니다. S3 정적 호스팅과 CORS, IAM 권한 관리까지 실무적인 핸즈온을 진행했습니다.",
                    presenter: "최선우",
                    tags: ["Translate", "Polly", "Serverless"]
                },
                {
                    title: "로드밸런서 완벽 해부: NLB vs ALB",
                    engTitle: "Deep Dive into Load Balancers: NLB vs ALB",
                    desc: "L4(NLB)와 L7(ALB) 로드밸런서의 차이점을 패킷 흐름과 3-way handshake 과정을 통해 심층 분석했습니다. Scale-up과 Scale-out 개념을 다지며 각 서비스의 적절한 사용 사례를 익혔습니다.",
                    presenter: "이민형",
                    tags: ["ELB", "NLB", "ALB"]
                },
            ],
        },
    ],
};

const slideUp = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

export default function SessionsPage() {
    const [activeGen, setActiveGen] = useState("1기");
    const [mounted, setMounted] = useState(false);
    const gens = Object.keys(SESSIONS_DATA);
    const sessions = SESSIONS_DATA[activeGen] || [];

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <PageWrapper>
            <Container>
                <HeaderSection>
                    <div className="badge"><Presentation size={14} /> Sessions</div>
                    <h1>Knowledge <span className="highlight">Archive</span></h1>
                    <p>격주로 진행되는 토픽 모음입니다.</p>
                </HeaderSection>

                <TabWrapper>
                    {gens.map((gen) => (
                        <TabButton key={gen} $active={activeGen === gen} onClick={() => setActiveGen(gen)}>
                            {gen}
                        </TabButton>
                    ))}
                </TabWrapper>

                {sessions.map((session, sIndex) => (
                    <SessionBlock key={session.id} style={{ animationDelay: `${sIndex * 0.1}s` }}>
                        <SessionHeader>
                            <span className="session-number">SESSION {session.id}</span>
                            <h2>{session.mainTheme}</h2>
                        </SessionHeader>

                        <TopicGrid>
                            {session.items.map((item, tIndex) => (
                                <TopicCard key={tIndex}>
                                    <ImageWrapper>
                                        <Image
                                            src={`https://acc-web-image-s3.s3.ap-northeast-2.amazonaws.com/sessions/${session.id}-${tIndex + 1}.jpg`}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 500px"
                                        />
                                        <div className="overlay" />
                                        <div className="topic-badge">
                                            <MonitorPlay size={12} /> TOPIC {tIndex + 1}
                                        </div>
                                    </ImageWrapper>

                                    <ContentWrapper>
                                        <TagRow>
                                            {item.tags.map(t => <span key={t}>#{t}</span>)}
                                        </TagRow>

                                        <TitleGroup>
                                            <h3>{item.title}</h3>
                                            <p className="eng-title">{item.engTitle}</p>
                                        </TitleGroup>

                                        <Description>{item.desc}</Description>

                                        <PresenterInfo>
                                            <User size={14} />
                                            <span>Speaker {item.presenter}</span>
                                        </PresenterInfo>
                                    </ContentWrapper>
                                </TopicCard>
                            ))}
                        </TopicGrid>
                    </SessionBlock>
                ))}
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
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5rem;
`;

const HeaderSection = styled.div`
    text-align: center;
    margin-bottom: 5rem;
    animation: ${slideUp} 0.6s ease-out;

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
        .highlight { color: ${({ theme }) => theme.colors.accent}; }
    }
    p { color: #4a5568; font-size: 1.2rem; font-weight: 500; }
`;

const TabWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 6rem;
`;

const TabButton = styled.button<{ $active: boolean }>`
    padding: 0.6rem 1.8rem;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.9rem;
    border: 1px solid ${props => props.$active ? props.theme.colors.primary : "#e2e8f0"};
    background: ${props => props.$active ? props.theme.colors.primary : "white"};
    color: ${props => props.$active ? "white" : "#64748b"};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

const SessionBlock = styled.div`
    margin-bottom: 6rem;
    animation: ${slideUp} 0.6s ease-out backwards;
`;

const SessionHeader = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-left: 0.5rem;
    border-left: 4px solid ${({ theme }) => theme.colors.accent};

    .session-number {
        font-size: 0.9rem;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.accent};
        letter-spacing: 0.05em;
    }

    h2 {
        font-size: 2rem;
        font-weight: 800;
        color: #1a202c;
    }

    @media (max-width: 768px) {
        h2 { font-size: 1.6rem; }
    }
`;

const TopicGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 850px) {
        grid-template-columns: 1fr;
    }
`;

const TopicCard = styled.div`
    background: white;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid #e2e8f0;
    display: flex;
    flex-direction: column;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08);
        border-color: ${({ theme }) => theme.colors.accent}50;

        img { transform: scale(1.05); }
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 240px;
    background-color: #f1f5f9;
    overflow: hidden;

    img {
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 50%);
        z-index: 1;
    }

    .topic-badge {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px);
        color: white;
        font-size: 0.75rem;
        font-weight: 700;
        padding: 0.3rem 0.6rem;
        border-radius: 6px;
        z-index: 2;
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }
`;

const ContentWrapper = styled.div`
    padding: 1.8rem;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const TagRow = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;

    span {
        font-size: 0.75rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.primary}10;
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
    }
`;

const TitleGroup = styled.div`
    margin-bottom: 1rem;

    h3 {
        font-size: 1.3rem;
        font-weight: 800;
        color: #1a202c;
        margin-bottom: 0.3rem;
        line-height: 1.4;
    }

    .eng-title {
        font-size: 0.9rem;
        color: #94a3b8;
        font-weight: 500;
    }
`;

const Description = styled.p`
    font-size: 0.95rem;
    color: #4a5568;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    word-break: keep-all;
    flex: 1;
`;

const PresenterInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: #64748b;
    padding-top: 1rem;
    border-top: 1px solid #f1f5f9;

    svg { color: #cbd5e1; }
`;