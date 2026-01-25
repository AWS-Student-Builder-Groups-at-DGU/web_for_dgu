'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styled, { css } from 'styled-components';
import { Users, BookOpen, Rocket } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrapper $isScrolled={isScrolled}>
      <Container>
        <LogoLink href="/">
          <LogoImageWrapper>
            <Image
              src="/image/common/logo.png"
              alt="AWS Cloud Clubs Logo"
              width={64}
              height={64}
              priority
            />
          </LogoImageWrapper>
          <span>AWS Cloud Clubs at DGU</span>
        </LogoLink>

        <NavMenu>
          <NavItem href="/sessions" $isActive={pathname === '/sessions'}>
            <BookOpen size={18} />
            Sessions
          </NavItem>
          <NavItem href="/members" $isActive={pathname === '/members'}>
            <Users size={18} />
            Members
          </NavItem>
          <RecruitButton href="/recruit">
            Join Us <Rocket />
          </RecruitButton>
        </NavMenu>
      </Container>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 1000;
  transition: all 0.3s ease-in-out;

  ${({ $isScrolled, theme }) =>
    $isScrolled
      ? css`
          background-color: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid ${theme.colors.gray}30;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        `
      : css`
          background-color: transparent;
          border-bottom: 1px solid transparent;
        `}
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 800;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textDark};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const LogoImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: contain;
    filter: drop-shadow(0 1px 4px #e68a00);
  }
`;

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)<{ $isActive: boolean }>`
  position: relative;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.gray};
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%) scale(${({ $isActive }) => ($isActive ? 1 : 0)});
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: transform 0.2s ease;
  }
`;

const RecruitButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px ${({ theme }) => theme.colors.accent}40;

  &:hover {
    background-color: #e68a00;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${({ theme }) => theme.colors.accent}60;
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`;
