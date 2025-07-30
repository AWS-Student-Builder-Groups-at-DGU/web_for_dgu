import Link from "next/link"
import {Mail, Instagram, Github, ExternalLink, Linkedin} from "lucide-react"
import Image from "next/image";
import logo from "P/Image/common/logo.png";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/*기본 정보 */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-1 rounded-lg">
                                <Image src={ logo } alt={"logo"} className="h-10 w-10" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg">AWS Cloud Clubs</span>
                                <span className="text-xs text-gray-400">Dongguk University</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            AWS의 공식적인 대학생 커뮤니티,<br/>
                            ACC DGU입니다.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="mailto:flqld86851@gmail.com"
                                className="text-gray-400 hover:text-orange-400 transition-colors"
                                title="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                            <a href="https://www.instagram.com/awscloudclubsdgu" className="text-gray-400 hover:text-orange-400 transition-colors" title="Instagram">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="https://github.com/AWS-Cloud-Club-at-Dongguk" className="text-gray-400 hover:text-orange-400 transition-colors" title="GitHub">
                                <Github className="h-5 w-5" />
                            </a>    
                            <a href="https://www.linkedin.com/in/aws-cloud-club-at-dongguk-94265a36b" type="_blink" className="text-gray-400 hover:text-orange-400 transition-colors" title="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} AWS Cloud Clubs, Devbini. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
