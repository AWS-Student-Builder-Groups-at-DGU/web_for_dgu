'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Cloud } from 'lucide-react';
import Logo from 'P/Image/common/logo.png';
import Image from 'next/image';

export function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/session', label: 'Sessions' },
    { href: '/member', label: 'Members' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-orange-600 via-orange-600 to-orange-700 backdrop-blur-sm border-b border-orange-500/30 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={Logo}
              alt={'logo'}
              className="h-15 w-15 text-orange-600"
            />
            {/*<div className="bg-gradient-to-br from-white to-orange-50 p-2 rounded-lg shadow-md">*/}
            {/*</div>*/}
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white">
                AWS Cloud Club
              </span>
              <span className="text-xs text-orange-100">
                Dongguk University
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-all duration-200 font-medium px-3 py-2 rounded-lg ${
                  isActive(item.href)
                    ? 'text-white bg-white/20 border-b-2 border-white shadow-sm'
                    : 'text-orange-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-orange-500/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-500/30 bg-gradient-to-r from-orange-600 to-orange-700">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-200 font-medium py-2 px-3 rounded-lg ${
                    isActive(item.href)
                      ? 'text-white bg-white/20'
                      : 'text-orange-100 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
