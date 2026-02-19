import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "병원 전용 AI 챗봇 | 무료 상담 - A Pose",
  description:
    "답변 오류 최소화, 의료법 준수, 브랜드 맞춤형 AI 챗봇. 24시간 환자 응대, 예약 전환율 47% 향상.",
  robots: "noindex, nofollow",
}

export default function HospitalChatbotLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
