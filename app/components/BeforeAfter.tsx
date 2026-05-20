'use client'

import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

type Props = {
  beforeImage: string
  afterImage: string
  title: string
  subtitle: string
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  title,
  subtitle,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState(false)

  const percent = useMotionValue(50)

  const smoothPercent = useSpring(percent, {
    stiffness: 420,
    damping: 45,
    mass: 0.7,
  })

  const beforeClip = useTransform(smoothPercent, (v) => `inset(0 ${100 - v}% 0 0)`)
  const handleLeft = useTransform(smoothPercent, (v) => `${v}%`)

  function updatePosition(clientX: number) {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100

    percent.set(Math.max(0, Math.min(100, next)))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
  ref={containerRef}
  className="relative aspect-[3/4] w-full select-none overflow-hidden rounded-[32px] border border-cyan-400/20 shadow-[0_0_80px_rgba(34,211,238,0.10)] cursor-ew-resize touch-none"
        onPointerDown={(e) => {
          setDragging(true)
          updatePosition(e.clientX)
          e.currentTarget.setPointerCapture(e.pointerId)
        }}
        onPointerMove={(e) => {
          if (dragging) updatePosition(e.clientX)
        }}
        onPointerUp={(e) => {
          setDragging(false)
          e.currentTarget.releasePointerCapture(e.pointerId)
        }}
        onPointerCancel={() => setDragging(false)}
      >
        <Image
          src={afterImage}
          alt={title ? `${title} nachher` : 'Nachher Bild'}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          draggable={false}
          className="pointer-events-none object-cover"
        />

<motion.div
  className="absolute inset-0 z-10 overflow-hidden"
  style={{ clipPath: beforeClip }}
>
          <Image
            src={beforeImage}
            alt={title ? `${title} vorher` : 'Vorher Bild'}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            draggable={false}
            className="pointer-events-none object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute top-0 z-30 h-full w-[3px] bg-cyan-300 shadow-[0_0_35px_rgba(34,211,238,1)]"
          style={{ left: handleLeft }}
        >
          <div
            className={`absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/70 bg-[#020B14]/80 text-2xl text-cyan-300 shadow-[0_0_45px_rgba(34,211,238,0.55)] backdrop-blur-xl transition-transform duration-200 ${
              dragging ? 'scale-110' : 'group-hover:scale-105'
            }`}
          >
            ↔
          </div>
        </motion.div>

        <div className="absolute left-6 top-6 z-40 rounded-full bg-black/65 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl pointer-events-none">
          Vorher
        </div>

        <div className="absolute right-6 top-6 z-40 rounded-full bg-cyan-400/20 px-5 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-xl pointer-events-none">
          Nachher
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>
    </motion.div>
  )
}