'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <FooterTop>
          <BrandSection>
            <LogoLink href="/">
              <LogoImageWrapper>
                <Image
                  src="/Image/common/asbg.png"
                  alt="AWS Student Builder Groups Logo"
                  width={64}
                  height={64}
                />
              </LogoImageWrapper>
              <span>AWS Student Builder Groups at DGU</span>
            </LogoLink>
            <Description>
              동국대학교 학생들을 위한 AWS 클라우드 커뮤니티입니다.
              <br />
              함께 배우고, 만들고, 성장하는 즐거움을 경험하세요.
            </Description>
            <SocialLinks>
              <SocialButton
                href="https://www.linkedin.com/company/aws-student-builder-group-at-dongguk-university"
                target="_blank"
                rel="noopener noreferrer"
                $color="#0077B5"
              >
                <Linkedin size={20} />
              </SocialButton>
              <SocialButton
                href="https://www.instagram.com/asbg_dgu"
                target="_blank"
                rel="noopener noreferrer"
                $color="#E4405F"
              >
                <Instagram size={20} />
              </SocialButton>
            </SocialLinks>
          </BrandSection>

          <NavSection>
            <NavGroup>
              <h4>Community</h4>
              <Link href="/sessions">Sessions</Link>
              <Link href="/members">Members</Link>
              <Link href="/recruit">Join Us</Link>
            </NavGroup>
            <NavGroup>
              <h4>Resources</h4>
              <a
                href="https://aws.amazon.com/ko/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AWS Korea <ExternalLink size={12} />
              </a>
              <a
                href="https://github.com/AWS-Student-Builder-Groups-at-DGU"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </NavGroup>
          </NavSection>
        </FooterTop>

        <FooterBottom>
          <p>
            © {currentYear} AWS Student Builder Groups at Dongguk University. All rights
            reserved.
          </p>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: #f9fafb;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 5rem 0 2rem;
  margin-top: auto;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const BrandSection = styled.div`
  flex: 1.5;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 800;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 1.5rem;
`;

const LogoImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: contain;
    filter: drop-shadow(0 1px 4px black);
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  word-break: keep-all;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialButton = styled.a<{ $color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textDark};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ $color }) => $color};
    color: white;
    border-color: ${({ $color }) => $color};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px ${({ $color }) => $color}40;
  }
`;

const NavSection = styled.div`
  flex: 1;
  display: flex;
  gap: 4rem;

  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

const NavGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textDark};
    margin-bottom: 0.5rem;
  }

  a {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.gray};
    display: flex;
    align-items: center;
    gap: 0.3rem;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const FooterBottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray}80;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray}80;
  font-size: 0.85rem;

  .builder {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;
