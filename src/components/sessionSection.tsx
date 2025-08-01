import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

export function SessionSection() {
    const getTypeColor = (type: string) => {
        switch (type) {
            case "Hands-On":
                return "bg-blue-500 hover:bg-blue-600";
            default:
                return "bg-gray-500 hover:bg-gray-600";
        }
    };

    const sessions = [
        {
            id: 3,
            title: "2st Sessions",
            date: "2025-07-31",
            time: "19:00",
            location: "정보문화관 P404",
            type: "Hands-On",
            description:
                "1. Amazon Q CLI를 이용한 가성비 인프라 설계부터 배포까지\n" +
                "2. 서버 개발자를 대체하는 방법: Serverless A to Z",
            images: [
                "",
            ],
            isNew: true,
        },
        {
            id: 2,
            title: "1st Sessions",
            date: "2025-07-17",
            time: "19:00",
            location: "정보문화관 P404",
            type: "Hands-On",
            description:
                "1. VPC 내부 네트워크 기술 뼛속까지 뜯어보기\n" +
                "2. K6 탐색적 부하 테스트 실습",
            images: [
                "",
            ],
            isNew: false,
        },
        {
            id: 1,
            title: "OT",
            date: "2025-07-10",
            time: "19:00",
            location: "정보문화관 P404",
            type: "Hands-On",
            description:
                "ACC 활동의 첫 시작, 가벼운 네트워킹과 뒤풀이 진행",
            images: [
                "",
            ],
            isNew: false,
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sessions</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        AWS Cloud Clubs at DGU 활동 내용이 업데이트 됩니다.
                    </p>
                </div>

                <div className="grid gap-6 max-w-5xl mx-auto mb-16">
                    {sessions.map((session) => (
                        <Card key={session.id} className="hover:shadow-lg transition-shadow duration-300">
                            {session.images && session.images.length > 0 && (
                                <div className="grid grid-cols-2 gap-2 p-4 pb-0">
                                    {session.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image || ""}
                                            alt={`${session.title}`}
                                            className="w-full h-32 object-cover rounded-lg"
                                        />
                                    ))}
                                </div>
                            )}

                            <CardHeader>
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <CardTitle className="text-lg">{session.title}</CardTitle>
                                            {session.isNew && <Badge className="bg-red-500 hover:bg-red-600">NEW</Badge>}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge className={getTypeColor(session.type)}>{session.type}</Badge>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="p-6 pt-2">
                                <div className="text-gray-600 mb-4 whitespace-pre-line">
                                    {session.description}
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm">
                                    <div className="flex items-center text-gray-500">
                                        <Calendar className="h-4 w-4 mr-1 text-orange-600" />
                                        {new Date(session.date).toLocaleDateString("ko-KR", {
                                            weekday: "short",
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </div>
                                    <div className="flex items-center text-gray-500">
                                        <Clock className="h-4 w-4 mr-1 text-orange-600" />
                                        {session.time}
                                    </div>
                                    <div className="flex items-center text-gray-500">
                                        <MapPin className="h-4 w-4 mr-1 text-orange-600" />
                                        {session.location}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
