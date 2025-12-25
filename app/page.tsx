"use client"

import { useEffect } from "react"
import { ThreeBackground } from "@/components/three-background"
import { ChatBotLanding } from "@/components/chatbot/ChatBotLanding"
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
    <main className="min-h-screen font-sans relative">
      {/* 3D 배경 */}
      <ThreeBackground />

      {/* AI 챗봇 랜딩페이지 */}
      <ChatBotLanding />
    </main>
  )
}
