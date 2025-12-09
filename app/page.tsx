"use client"

import { ConsultationForm } from "@/components/consultation-form"
// import { GeminiChat } from "@/components/gemini-chat"
import {
  TrendingUp,
  Target,
  Zap,
  Lock,
  AlertCircle,
  Users,
  Megaphone,
  RepeatIcon,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { useEffect } from "react"
import { sendMetaConversionEvent, getMetaBrowserId, getMetaClickId } from "@/lib/meta-conversion"

export default function Home() {
  useEffect(() => {
    const sendViewContentEvent = async () => {
      try {
        await sendMetaConversionEvent({
          eventName: "ViewContent",
          eventSourceUrl: window.location.href,
          userAgent: navigator.userAgent,
          fbp: getMetaBrowserId() ?? undefined,
          fbc: getMetaClickId() ?? undefined,
        })
        console.log("[v0] Meta Conversions API ViewContent event sent")
      } catch (error) {
        console.error("[v0] Meta Conversions API ViewContent error:", error)
      }
    }

    sendViewContentEvent()
  }, [])

  return (
    <main className="min-h-screen bg-background font-sans">
      {/* Hero Section - Mobile Optimized & High Impact */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background/90" />
        </div>

        <div className="container relative z-10 px-4 py-12 md:py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-red-600/90 text-white rounded-full text-sm font-bold animate-pulse">
            <AlertCircle className="w-4 h-4" />
            <span>병원 마케팅 긴급 진단</span>
          </div>

          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-xl">
            막힌 블로그 시대,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              AI 이중퍼널
            </span>
            로 길을 엽니다.
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
            블로그 지수도 안 보이고, 의료법은 더 까다로워졌습니다.
            <br className="hidden md:block" />
            이제 환자는 검색창이 아니라 AI에게 증상·치료를 묻습니다.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 max-w-2xl mx-auto mb-10">
            <p className="text-lg font-semibold text-blue-200">
              우리 병원을 AI 대화 안으로 넣어, 증상 질문 → 진료예약까지
              <br className="md:hidden" /> 자동으로 이어주는 시스템입니다.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 w-full sm:w-auto"
            >
              AI 마케팅 무료 컨설팅 신청하기
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Problem Awareness Section - Hooking */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-slate-900">
              병원 블로그,
              <br />
              <span className="text-red-600 underline decoration-4 decoration-red-200 underline-offset-4">
                더 이상 답이 아닌 이유
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              "지수도 안 보이는 블로그"에 계속 돈 쓰실 건가요?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="/images/image.png"
                alt="블로그 지수 측정 불가"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-bold text-lg">
                  <AlertCircle className="inline-block w-5 h-5 mr-2 text-red-500" />
                  그래서 필요한 건 "AI 안에 들어간 병원"입니다.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    1
                  </span>
                  블로그 지수 측정 불가
                </h3>
                <p className="text-slate-600">
                  블로그연구소·블덱스 등 지수 사이트 중단 → "최적 블로그"라는 말 자체가 검증 불가능.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    2
                  </span>
                  의료법·심의는 그대로
                </h3>
                <p className="text-slate-600">
                  강한 카피·후기 못 쓰니, 노출·전환 모두 예전만 못함.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    3
                  </span>
                  환자 행동 변화
                </h3>
                <p className="text-slate-600">
                  환자는 이제 "어느 병원?"이 아니라 "이 증상 뭐죠? 어떻게 치료하죠?"를 AI에게 먼저 질문.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Dual Funnel */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Solution</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-slate-900">
              AI 이중퍼널 한 번으로,
              <br />
              증상 질문 → 진료예약까지
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              환자가 AI에게 증상을 묻는 순간부터,
              <br className="hidden md:block" />
              사전 문진과 예약까지 자동으로 이어집니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Funnel 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-cyan-500 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6">
                <Megaphone className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">1단계: 헬스케어 AI</h3>
              <ul className="space-y-3 mb-8 mt-6">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                  <span className="font-bold">증상·생활습관 24시간 응답</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                  <span className="font-bold">의료법 위반 없는 정보·자가체크</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                  <span className="font-bold">관심 환자 리드 데이터 자동 수집</span>
                </li>
              </ul>
              <div className="rounded-xl overflow-hidden bg-cyan-50 p-4">
                <img
                  src="/abstract-teal-cyan-funnel-diagram-wide-top-narrow-.jpg"
                  alt="광고 영역 퍼널"
                  className="w-full h-40 object-contain mix-blend-multiply"
                />
              </div>
            </div>

            {/* Funnel 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-blue-600 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">2단계: 메디컬 AI</h3>
              <ul className="space-y-3 mb-8 mt-6">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-bold">추가 질문으로 사전 문진 자동 정리</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-bold">챗봇 안에서 진료예약까지 원스톱</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-bold">진단·처방은 하지 않는, ‘원격진료가 아닌 진료 준비 시스템’</span>
                </li>
              </ul>
              <div className="rounded-xl overflow-hidden bg-blue-50 p-4">
                <img
                  src="/abstract-blue-funnel-diagram-narrow-inverted-cone-.jpg"
                  alt="의료 영역 퍼널"
                  className="w-full h-40 object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              원장님은 <span className="text-blue-600">진료</span>에만 집중하세요
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              상담·선별·예약은 AI가 대신 처리합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <RepeatIcon className="w-6 h-6 text-white" />,
                bg: "bg-emerald-500",
                title: "전화·카톡 상담 부담 감소",
                desc: "단순 문의는 AI가 처리하여 직원 피로도 하락",
              },
              {
                icon: <Users className="w-6 h-6 text-white" />,
                bg: "bg-blue-500",
                title: "신규·우량 환자 예약 증가",
                desc: "진료 의지가 높은 환자만 선별하여 예약 연결",
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-white" />,
                bg: "bg-orange-500",
                title: "상담 대비 실제 내원 전환율 상승",
                desc: "AI 사전 문진으로 신뢰도 확보 후 내원 유도",
              },
              {
                icon: <Target className="w-6 h-6 text-white" />,
                bg: "bg-cyan-500",
                title: "같은 예산으로 더 많은 실환자 유입",
                desc: "블로그 상위노출 경쟁 없이 AI 대화로 유입",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow bg-slate-50">
                <div className={`shrink-0 w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center shadow-md`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webtoon Section - Preserved */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-yellow-400 font-bold tracking-wider text-sm uppercase">Success Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">병원 매출 성장의 여정</h2>
              <p className="text-gray-400">AI 헬스케어 도입 후 변화된 병원의 모습을 웹툰으로 확인하세요.</p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-black">
              <img
                src="/images/nano-banana.jpeg"
                alt="AI 헬스케어로 시작해서 메디컬 AI로의 전환의 여정 웹툰"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section - Preserved */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">솔루션 소개 영상</h2>
              <p className="text-lg text-slate-600">LLM 기반 이중퍼널 시스템의 작동 원리를 확인하세요</p>
            </div>

            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black ring-4 ring-white"
              style={{ aspectRatio: "16/9" }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Ywlrh6ALEBQ"
                title="LLM 기반 이중퍼널 병원 마케팅 솔루션"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gemini Chat Section - HIDDEN */}
      {/* 
      <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">24시간 마케팅 상담</h2>
            <p className="text-lg text-muted-foreground">혁신적인 병원마케팅 방법에 대해서 궁금하신 점이 있으신가요? 무엇이든지 물어보세요</p>
          </div>
          <GeminiChat />
        </div>
      </section> 
      */}

      {/* Consultation Form Section - Preserved */}
      <section id="consultation-form" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              무료 컨설팅 및 데모 신청
            </h2>
            <p className="text-lg text-slate-600">
              지금 신청하시면 <span className="font-bold text-blue-600">병원 맞춤형 진단 리포트</span>를 무료로 제공해드립니다.
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <div className="inline-flex items-start gap-2 text-sm text-amber-400/90 bg-amber-950/30 border border-amber-900/50 rounded-lg p-4 text-left md:text-center">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="leading-relaxed">본 서비스는 의료행위가 아니며, 치료 결정은 의료진 상담이 필수입니다.</p>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-lg text-white">주식회사 루미브리즈</p>
              <p className="text-sm">대표 유범석</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm pt-2">
                <a href="mailto:lumibreeze00@gmail.com" className="hover:text-white transition-colors">
                  ✉ lumibreeze00@gmail.com
                </a>
                <a href="tel:010-8761-4598" className="hover:text-white transition-colors">
                  📞 010-8761-4598
                </a>
              </div>
            </div>
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} LumiBreeze. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
