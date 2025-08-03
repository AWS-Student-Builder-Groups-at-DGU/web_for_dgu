import {ArrowRight, Cloud, Code, Users} from "lucide-react"
import Link from "next/link"
import {Button} from "@/components/ui/button";

const keyframes = `
  @keyframes gradient-flow {
    0% { background-position: 0% center; }
    100% { background-position: -200% center; }
  }
`;

export function Hero() {
    return (
        <>
            <style>{keyframes}</style>
            <section
                className="min-h-screen flex flex-col justify-center items-center px-4 pb-16 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute top-1/4 left-1/6 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-orange-600/5 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
                    <div className="text-center space-y-8">
                        <div
                            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full border border-orange-500/30 backdrop-blur-sm">
                            <Cloud className="w-5 h-5 text-orange-400"/>
                            <span className="text-orange-300 text-sm font-semibold tracking-wide">Dongguk Univ.</span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
                                <span
                                    className="block bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 text-transparent bg-clip-text bg-[length:200%_auto] [animation:gradient-flow_3s_linear_infinite]">
                                    AWS Cloud Clubs
                                </span>
                            </h1>
                            <div
                                className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div
                                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl">
                                <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                                    <span className="font-bold text-orange-300">AWS Cloud Clubs at Dongguk</span>
                                    은 동국대학교 유일의 클라우드 동아리로,
                                    <br/>
                                    다양한 Hands-On 세션과 스터디를 통해 함께 성장하는 AWS 공식 커뮤니티입니다.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto pt-8">
                            <div className="text-center group">
                                <div
                                    className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-4 rounded-2xl mb-3 backdrop-blur-sm border border-orange-500/20 group-hover:scale-105 transition-transform duration-300">
                                    <Users className="h-8 w-8 text-orange-400 mx-auto"/>
                                </div>
                                <div className="text-3xl font-bold text-white">1기</div>
                                <div className="text-sm text-gray-400">Current Class</div>
                            </div>
                            <div className="text-center group">
                                <div
                                    className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-4 rounded-2xl mb-3 backdrop-blur-sm border border-orange-500/20 group-hover:scale-105 transition-transform duration-300">
                                    <Code className="h-8 w-8 text-orange-400 mx-auto"/>
                                </div>
                                <div className="text-3xl font-bold text-white">2회</div>
                                <div className="text-sm text-gray-400">Sessions</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                            <Button
                                asChild
                                size="lg"
                                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 border-0"
                            >
                                <Link href="/session">
                                    <span>세션 목록</span>
                                    <ArrowRight
                                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"/>
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="px-8 py-4 bg-white/10 backdrop-blur-lg text-gray-200 font-medium rounded-xl border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300"
                            >
                                <Link href="/about">더 알아보기</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
                <div
                    className="absolute top-40 right-20 w-3 h-3 bg-orange-500 rounded-full animate-ping delay-1000"></div>
                <div
                    className="absolute bottom-40 left-20 w-2 h-2 bg-orange-600 rounded-full animate-ping delay-2000"></div>
            </section>
        </>
    )
}