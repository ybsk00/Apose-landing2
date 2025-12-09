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
            막혀버린 블로그 시대,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              AI 이중퍼널
            </span>
            로 새 길을 엽니다.
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
            이제는 블로그 지수도, 상위노출도 제대로 측정되지 않습니다.
            <br className="hidden md:block" />
            환자들은 검색창이 아니라 AI에게 증상과 치료 방법을 먼저 묻는 시대가 되었습니다.
            <br className="hidden md:block" />
            의료법을 지키면서도, 이 AI 유입을 실제 진료 예약으로 연결하는 새로운 길이 필요합니다.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 max-w-2xl mx-auto mb-10">
            <p className="text-lg font-semibold text-blue-200">
              AI 이중퍼널로 "증상 질문 → AI 상담 → 진료예약"까지
              <br className="md:hidden" /> 자동으로 이어지는 병원 전용 마케팅 구조를 만듭니다.
            </p>
          </div>

          {/* Stats Cards - Mobile Stack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center justify-between md:block md:text-center">
              <div className="text-left md:text-center">
                <p className="text-sm text-gray-300">도입 병원 기준</p>
                <p className="text-xl font-bold text-white">상담 전환 최대 3배↑</p>
              </div>
              <Users className="w-8 h-8 text-blue-400 opacity-80" />
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center justify-between md:block md:text-center">
              <div className="text-left md:text-center">
                <p className="text-sm text-gray-300">불필요 상담·노쇼</p>
                <p className="text-xl font-bold text-yellow-400">대폭 감소</p>
              </div>
              <TrendingUp className="w-8 h-8 text-yellow-400 opacity-80" />
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center justify-between md:block md:text-center">
              <div className="text-left md:text-center">
                <p className="text-sm text-gray-300">의료법 리스크</p>
                <p className="text-xl font-bold text-green-400">Zero에 가깝게 설계</p>
              </div>
              <ShieldCheck className="w-8 h-8 text-green-400 opacity-80" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 w-full sm:w-auto"
            >
              무료 AI 마케팅 컨설팅 신청하기
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
              병원 블로그 마케팅,
              <br />
              <span className="text-red-600 underline decoration-4 decoration-red-200 underline-offset-4">
                '지수도 없는 시대'
              </span>
              에 빠지셨나요?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              의료법 때문에 강력한 카피를 쓰기도 어렵고,
              <br className="hidden md:block" />
              이제는 <span className="font-bold text-slate-900">블로그 지수 측정 사이트(블로그연구소, 블덱스 등)</span>도 더 이상 제대로 작동하지 않습니다.
              <br />
              "최적 블로그 만들어 드린다"는 말이 검증조차 안 되는 시대가 된 겁니다.
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
                  지수도 안 보이는 블로그, 계속 돈을 써야 할까요?
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
                  블로그연구소·블덱스 등 지수 측정 도구들이 막히면서 '최적 블로그'라는 말 자체가 증명 불가능해졌습니다.
                  상위노출이 되는지, 돈 쓴 만큼 효과가 있는지 알 수 없습니다.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    2
                  </span>
                  의료법·심의 리스크 상시 존재
                </h3>
                <p className="text-slate-600">
                  치료 후기·효능 보장·사진 활용이 심의 대상이 되면서, 예전처럼 자극적인 카피로 승부를 볼 수도 없습니다.
                  심의 리스크는 그대로인데, 유입은 점점 줄어드는 구조입니다.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    3
                  </span>
                  환자 행동의 완전한 변화
                </h3>
                <p className="text-slate-600">
                  이제 환자는 "어느 병원 갈까?"보다 "이 증상 뭐죠? 어떻게 치료하죠?"를 AI에게 먼저 묻습니다.
                  블로그를 아무리 잘 써도, AI 대화 안에 병원이 들어있지 않으면 그 유입은 남의 병원이 가져가게 됩니다.
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
              블로그 대신, AI 안에 병원을 심어 넣는
              <br />
              AI 이중퍼널 시스템
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              광고와 의료 정보를 <span className="font-bold text-blue-600">헬스케어(유입)</span>와 <span className="font-bold text-blue-600">메디컬(전환)</span>로 분리해
              <br className="hidden md:block" />
              의료법을 지키면서도, AI 대화를 통해 진짜 내원환자를 만들어내는 구조입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Funnel 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-cyan-500 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6">
                <Megaphone className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">1단계: AI 헬스케어 허브</h3>
              <p className="text-cyan-600 font-semibold mb-4">"증상 질문"이 들어오는 입구를 선점합니다.</p>
              <p className="text-slate-600 mb-6 min-h-[4.5rem]">
                환자가 AI에게 증상·생활습관·걱정거리를 묻는 순간, 우리 병원의 헬스케어 AI 챗봇이 먼저 응답합니다.
                의료행위는 하지 않되, 안전한 정보·자가체크·생활 가이드로 신뢰를 쌓습니다.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">의료법 안심 운영</span>
                    <br />
                    ‘진단·치료’가 아닌 정보·교육용 헬스케어 콘텐츠만 제공
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">블로그 대신 AI 노출</span>
                    <br />
                    환자가 검색창이 아닌 AI에게 질문할 때 우리 병원 챗봇이 먼저 답하도록 설계
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">리드(잠재환자) 데이터 자동 수집</span>
                    <br />
                    자가진단·설문 응답을 바탕으로 관심 질환/증상별 세그먼트 DB 자동 생성
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">로그인·동의까지 자연스럽게</span>
                    <br />
                    “자세한 분석 보기” 시점에 회원가입·마케팅 동의까지 자연스럽게 완료
                  </div>
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
              <h3 className="text-2xl font-bold mb-2">2단계: 내부 메디컬 허브</h3>
              <p className="text-blue-600 font-semibold mb-4">AI가 사전 문진과 예약까지 대신합니다.</p>
              <p className="text-slate-600 mb-6 min-h-[4.5rem]">
                헬스케어 단계에서 로그인한 사용자 중, 실제 진료가 필요해 보이는 케이스만 골라 메디컬 AI가 추가 질문을 이어갑니다.
                여기서도 진단·처방은 하지 않고, 사전 문진 + 진료예약까지만 처리합니다.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">AI 사전 문진 & 정리</span>
                    <br />
                    증상·기간·검사결과 등을 AI가 구조화해서 의사에게 예진 리포트로 전달
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">진료예약까지 원스톱</span>
                    <br />
                    카카오/네이버 예약 연동으로 환자는 챗봇 안에서 바로 예약 완료
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">원격진료가 아닌 ‘진료 준비 시스템’</span>
                    <br />
                    AI는 진단·처방·치료 결정은 하지 않음. 최종 판단은 의료진이 수행
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">좋은 환자만 골라서 연결</span>
                    <br />
                    단순 문의는 거르고 진료 의지가 있는 환자만 예약으로 넘겨 원장님 시간 절약
                  </div>
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
              원장님은 <span className="text-blue-600">진료</span>에만 집중하세요.
              <br />
              복잡한 마케팅과 응대는 AI 이중퍼널이 대신합니다.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              블로그 지수·상위노출에 신경 쓸 필요 없습니다.
              <br className="hidden md:block" />
              AI가 환자의 증상 질문을 받는 순간부터, 진료예약·리마인드·사전 문진까지 자동으로 처리합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <RepeatIcon className="w-6 h-6 text-white" />,
                bg: "bg-emerald-500",
                title: "AI 24시간 자동 상담",
                desc: "야간·주말에도 증상·치료에 대한 1차 질문은 AI 헬스케어 챗봇이 즉시 응답",
              },
              {
                icon: <Lock className="w-6 h-6 text-white" />,
                bg: "bg-red-500",
                title: "법적 리스크 최소화 설계",
                desc: "의료법 가이드에 맞춘 비(非)진단형 헬스케어 콘텐츠 + 진료준비용 메디컬 AI로 구성",
              },
              {
                icon: <Users className="w-6 h-6 text-white" />,
                bg: "bg-blue-500",
                title: "신환 필터링 & 예약 증가",
                desc: "진료 의지가 뚜렷한 환자만 예약 프로세스로 안내하여 상담 효율 극대화",
              },
              {
                icon: <Clock className="w-6 h-6 text-white" />,
                bg: "bg-purple-500",
                title: "진료 시간 확보",
                desc: "사전 문진·기본 설명은 AI가 처리하여 실제 진료 시간은 설명·코칭·치료에 집중",
              },
              {
                icon: <Target className="w-6 h-6 text-white" />,
                bg: "bg-cyan-500",
                title: "재내원·관리 자동화",
                desc: "증상/질환별 태깅을 바탕으로 리마인드·관리 메시지가 자동 발송",
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-white" />,
                bg: "bg-orange-500",
                title: "광고비 효율 극대화",
                desc: "검색·블로그 중심이 아닌 AI 유입 중심 구조로 전환하여 같은 예산으로 더 많은 진짜 환자를 확보",
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
