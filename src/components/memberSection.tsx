import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Github } from "lucide-react"

import cbkim from "P/Image/profile/cbkim.jpg"
import Image from "next/image";

export function MemberSection() {
    const positionToColor = {
        Captain: "bg-orange-600",
        DevRel: "bg-orange-400",
        Member: "bg-gray-500",
    };

    const members = [
        {
            name: "이도형",
            position: "Captain",
            year: "컴퓨터공학과 4학년",
            bio: "Description",
            image: "",
            email: "rlrlfhtm2@dgu.ac.kr",
            linkedin: "#",
            github: "#",
            interest: ["AWS"],
        },
        {
            name: "정은지",
            position: "Captain",
            year: "컴퓨터공학과 4학년",
            bio: "Description",
            image: "",
            email: "bian87@dgu.ac.kr",
            linkedin: "#",
            github: "#",
            interest: ["AWS"],
        },
        {
            name: "김찬빈",
            position: "DevRel",
            year: "융합보안학과 3학년",
            bio: "🧑‍💻 백엔드 중심의 5년차 풀스택 개발자, DevOps/SRE를 꿈꾸며 소통과 실질적 가치를 추구합니다.",
            image: cbkim,
            email: "flqld86851@gmail.com",
            linkedin: "https://github.com/devbini",
            github: "https://linkedin.com/in/devbini",
            interest: ["DevOps", "FE", "BE", "SRE"],
        },
        {
            name: "오현석",
            position: "DevRel",
            year: "정보통신공학과 4학년",
            bio: "",
            image: "",
            email: "ohhs1010@gmail.com\n",
            linkedin: "#",
            github: "#",
            interest: ["AWS"],
        },
        {
            name: "고동현",
            position: "Member",
            year: "컴퓨터공학과 3학년",
            bio: "",
            image: "",
            email: "hanser0204@naver.com",
            linkedin: "https://linkedin.com/in/gosorasora",
            github: "https://github.com/gosorasora",
            interest: ["AWS"],
        },
        {
            name: "김민서",
            position: "Member",
            year: "정보통신공학과 4학년",
            bio: "",
            image: "",
            email: "kimim0410@gmail.com",
            linkedin: "https://linkedin.com/in/galllee",
            github: "https://github.com/galllee",
            interest: ["AWS"],
        },

        {
            name: "김지우",
            position: "Member",
            year: "컴퓨터공학과 4학년",
            bio: "",
            image: "",
            email: "2022110421@dgu.ac.kr",
            linkedin: "https://linkedin.com/in/ryann1203",
            github: "https://github.com/ryann1203",
            interest: ["AWS"],
        },

        {
            name: "백지은",
            position: "Member",
            year: "AI소프트웨어융합학부 3학년",
            bio: "",
            image: "",
            email: "onneamis9@naver.com",
            linkedin: "https://linkedin.com/in/Jieun13",
            github: "https://github.com/Jieun13",
            interest: ["AWS"],
        },

        {
            name: "서예은",
            position: "Member",
            year: "정보통신공학과 4학년",
            bio: "",
            image: "",
            email: "michelle200323@gmail.com",
            linkedin: "https://linkedin.com/in/michelle259",
            github: "https://github.com/michelle259",
            interest: ["AWS"],
        },

        {
            name: "이민형",
            position: "Member",
            year: "정보통신공학과 3학년",
            bio: "",
            image: "",
            email: "koreamax012@gmail.com",
            linkedin: "https://linkedin.com/in/Koreamax",
            github: "https://github.com/Koreamax",
            interest: ["AWS"],
        },

        {
            name: "이승현",
            position: "Member",
            year: "정보통신공학과 4학년",
            bio: "",
            image: "",
            email: "hh7141@dgu.ac.kr",
            linkedin: "https://linkedin.com/in/nanami-tomoe",
            github: "https://github.com/nanami-tomoe",
            interest: ["AWS"],
        },

        {
            name: "최선우",
            position: "Member",
            year: "컴퓨터 AI 학부 2학년",
            bio: "",
            image: "",
            email: "seonwoo31@dgu.ac.kr",
            linkedin: "https://linkedin.com/in/seonwoochoi24",
            github: "https://github.com/seonwoochoi24",
            interest: ["AWS"],
        },

        {
            name: "최윤호",
            position: "Member",
            year: "정보통신공학과 4학년",
            bio: "",
            image: "",
            email: "cyunho62100@gmail.com",
            linkedin: "https://linkedin.com/in/yunhoch0i",
            github: "https://github.com/yunhoch0i",
            interest: ["AWS"],
        },
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Members</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        AWS Cloud Clubs at DGU를 지탱하고 함께 이끌어가는 멤버들입니다.<br/>
                        2명의 캡틴, 2명의 DevRel, 9명의 멤버로 이루어져 있습니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {members.map((member, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="relative">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge className={`${positionToColor[member.position] || "bg-gray-400"} text-white`}>{member.position}</Badge>
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-orange-600 font-medium text-sm">{member.year}</p>
                                </div>

                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-1">
                                        {member.interest.map((data, index) => (
                                            <Badge key={index} variant="outline" className="text-xs">
                                                {data}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex space-x-3">
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                                        title="Email"
                                    >
                                        <Mail className="h-4 w-4 text-gray-600" />
                                    </a>
                                    <a
                                        href={member.linkedin}
                                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                                        title="LinkedIn"
                                        target="_blank"
                                    >
                                        <Linkedin className="h-4 w-4 text-gray-600" />
                                    </a>
                                    <a
                                        href={member.github}
                                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                                        title="GitHub"
                                        target="_blank"
                                    >
                                        <Github className="h-4 w-4 text-gray-600" />
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Card className="max-w-2xl mx-auto bg-gradient-to-r from-orange-50 to-blue-50">
                        <CardContent className="p-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">참가하고 싶으신가요?</h2>
                            <p className="text-gray-600 mb-6">
                                모든 멤버는 1년간 ACC 활동을 진행하게 되며, <br/>
                                활동이 끝나면 다음 기수의 멤버를 모집하게 됩니다.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
