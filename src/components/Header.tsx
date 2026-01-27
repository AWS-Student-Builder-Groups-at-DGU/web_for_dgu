'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styled, { css } from 'styled-components';
import { Users, BookOpen, Rocket, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    } return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <HeaderWrapper $isScrolled={isScrolled}>
      <Container>
        <LogoLink href="/" onClick={() => closeMenu()}>
          <LogoImageWrapper>
            <Image
              src={process.env.NEXT_PUBLIC_S3_URL + '/logo.png'}
              alt="AWS Cloud Clubs Logo"
              width={64}
              height={64}
              priority
            />
          </LogoImageWrapper>
          <span className={'logo-text'}>AWS Cloud Clubs at DGU</span>
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

        <MobileMenuToggle onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={28} />
        </MobileMenuToggle>
      </Container>

      <MobileMenuOverlay $isOpen={isMobileMenuOpen}>
        <MobileMenuHeader>
          <span className="mobile-title">Menu</span>
          <CloseButton onClick={closeMenu}>
            <X size={32} />
          </CloseButton>
        </MobileMenuHeader>

        <MobileNavList>
          <MobileLink href="/" onClick={closeMenu} $isActive={pathname === '/'}>
            Home
          </MobileLink>
          <MobileLink href="/sessions" onClick={closeMenu} $isActive={pathname === '/sessions'}>
            Sessions
          </MobileLink>
          <MobileLink href="/members" onClick={closeMenu} $isActive={pathname === '/members'}>
            Members
          </MobileLink>
          <MobileRecruitButton href="/recruit" onClick={closeMenu}>
            Join Us <Rocket size={20} />
          </MobileRecruitButton>
        </MobileNavList>
      </MobileMenuOverlay>
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
          background-color: rgba(255, 255, 255, 0.95);
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
  z-index: 1002;

  &:hover {
    opacity: 0.8;
  }

  .logo-text {
    @media (max-width: 480px) {
      font-size: 1rem;
    }
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

const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textDark};
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  z-index: 2000;
  padding: 7rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'all' : 'none')};
`;

const MobileMenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;

    .mobile-title {
        font-size: 1.5rem;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.textDark};
    }
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textDark};
    padding: 0.5rem;
`;

const MobileNavList = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
`;

const MobileLink = styled(Link)<{ $isActive: boolean }>`
    font-size: 1.8rem;
    font-weight: 700;
    color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.textDark};
    transition: color 0.2s;
    
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const MobileRecruitButton = styled(Link)`
    margin-top: 2rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.accent};
    color: white;
    padding: 1rem;
    border-radius: 16px;
    font-weight: 700;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;