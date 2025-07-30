import { Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image";
import logo from "P/Image/common/logo.png"

export function Hero() {
    return (
        <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    <div className="space-y-8 lg:col-span-3">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                                Welcome to<br/>
                                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                                    AWS Cloud Club at DGU
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                <b>서울 소재 동국대학교의 유일한 클라우드 컴퓨팅 동아리입니다.</b> <br/>
                                AWS Cloud Clubs(ACC)은 AWS의 공식적인 대학생 커뮤니티로, <br/>
                                한국에서는 10개의 학교가 모여 연합의 형태로 활동하고 있어요.<br/><br/>
                                ACC Korea는 대학생 개발자 또는 개발자 지망생들이 학교의 장벽을 뛰어넘으며,<br/>
                                다양한 기술에 대한 지식과 경험을 접하고 서로 공유하는 것을 최우선으로 여겨요.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button>
                                <Link href="/about">더 알아보기</Link>
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-8">
                            <div className="text-center">
                                <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-gray-900">1기</div>
                                <div className="text-sm text-gray-600">현재 기수</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:col-span-2">
                        <div className="absolute -top-20 -right-4 z-10">
                            <Image
                                src={ logo }
                                alt="AWS Cloud Club at dgu Image"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 blur-3xl"></div>

                        <div className="relative z-10">
                            <Image
                                src={ logo }
                                alt="AWS Cloud Club at dgu Image"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-20 blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
