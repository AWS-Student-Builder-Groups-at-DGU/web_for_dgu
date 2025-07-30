"use client"

import { useState } from "react"
import Link from "next/link"
import logo from "P/Image/common/logo.png"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About"},
        { href: "/member", label: "Members"}
    ]

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/"
        }
        return pathname.startsWith(href)
    }

    return (
        <header className="fixed top-0 w-full border-b border-gray-200 bg-white z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* 기본 로고 */}
                    <Link href="/" className="flex items-center space-x-5">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-1 rounded-lg">
                            <Image src={ logo } alt={"logo"} className="h-10 w-10" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg text-gray-900">AWS Cloud Clubs</span>
                            <span className="text-xs text-gray-600">Dongguk University</span>
                        </div>
                    </Link>

                    {/* PC */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`transition-colors duration-200 font-medium ${
                                    isActive(item.href)
                                        ? "text-orange-600 border-b-2 border-orange-600"
                                        : "text-gray-700 hover:text-orange-600"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* mobile */}
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {/* Mobile */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`transition-colors duration-200 font-medium py-2 ${
                                        isActive(item.href) ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
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
    )
}
