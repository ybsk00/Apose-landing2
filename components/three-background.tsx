"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
    x: number
    y: number
    z: number
    vx: number
    vy: number
    size: number
    opacity: number
    color: string
}

export function ThreeBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [isMobile, setIsMobile] = useState(false)
    const animationRef = useRef<number>()
    const particlesRef = useRef<Particle[]>([])
    const mouseRef = useRef({ x: 0, y: 0 })

    useEffect(() => {
        // 모바일 감지
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)

        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // 캔버스 크기 설정
        const setCanvasSize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        setCanvasSize()
        window.addEventListener("resize", setCanvasSize)

        // 파티클 생성 (모바일은 적게)
        const particleCount = isMobile ? 30 : 80
        const colors = [
            "rgba(59, 130, 246, 0.6)",  // blue
            "rgba(6, 182, 212, 0.5)",   // cyan
            "rgba(139, 92, 246, 0.4)",  // purple
            "rgba(255, 255, 255, 0.3)", // white
        ]

        particlesRef.current = Array.from({ length: particleCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * 1000,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.2,
            color: colors[Math.floor(Math.random() * colors.length)],
        }))

        // 마우스 이동 추적
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            }
        }
        window.addEventListener("mousemove", handleMouseMove)

        // 애니메이션 루프
        const animate = () => {
            if (!ctx || !canvas) return

            // 배경 그라디언트
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
            gradient.addColorStop(0, "#0a0f1a")
            gradient.addColorStop(0.5, "#111827")
            gradient.addColorStop(1, "#0a0f1a")
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // 마우스 영향 계산
            const mouseInfluence = isMobile ? 0 : 30

            // 파티클 업데이트 및 렌더링
            particlesRef.current.forEach((particle) => {
                // 마우스 반응
                particle.x += particle.vx + mouseRef.current.x * mouseInfluence * 0.01
                particle.y += particle.vy + mouseRef.current.y * mouseInfluence * 0.01

                // 화면 경계 처리
                if (particle.x < 0) particle.x = canvas.width
                if (particle.x > canvas.width) particle.x = 0
                if (particle.y < 0) particle.y = canvas.height
                if (particle.y > canvas.height) particle.y = 0

                // 깊이에 따른 크기 조절 (3D 효과)
                const scale = (1000 - particle.z) / 1000
                const size = particle.size * scale

                // 파티클 그리기
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
                ctx.fillStyle = particle.color
                ctx.fill()

                // 연결선 (가까운 파티클끼리)
                if (!isMobile) {
                    particlesRef.current.forEach((other) => {
                        const dx = particle.x - other.x
                        const dy = particle.y - other.y
                        const distance = Math.sqrt(dx * dx + dy * dy)

                        if (distance < 150) {
                            ctx.beginPath()
                            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 150)})`
                            ctx.lineWidth = 0.5
                            ctx.moveTo(particle.x, particle.y)
                            ctx.lineTo(other.x, other.y)
                            ctx.stroke()
                        }
                    })
                }
            })

            // 중앙 글로우 효과
            const centerX = canvas.width / 2
            const centerY = canvas.height / 2
            const glowGradient = ctx.createRadialGradient(
                centerX, centerY, 0,
                centerX, centerY, canvas.width * 0.5
            )
            glowGradient.addColorStop(0, "rgba(59, 130, 246, 0.05)")
            glowGradient.addColorStop(0.5, "rgba(6, 182, 212, 0.02)")
            glowGradient.addColorStop(1, "transparent")
            ctx.fillStyle = glowGradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            animationRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", setCanvasSize)
            window.removeEventListener("mousemove", handleMouseMove)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [isMobile])

    return (
        <canvas
            ref={canvasRef}
            className="three-canvas-container"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
                pointerEvents: "none",
            }}
        />
    )
}
