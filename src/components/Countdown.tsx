import { useEffect, useMemo, useRef, useState } from "react"
import confetti from "canvas-confetti"

function pad2(n: number) {
  return String(n).padStart(2, "0")
}

function fireConfetti() {
  const duration = 2500
  const end = Date.now() + duration

  const frame = () => {
    confetti({
      particleCount: 5,
      spread: 70,
      startVelocity: 35,
      ticks: 200,
      origin: { x: Math.random() * 0.2 + 0.4, y: 0.2 },
    })
    if (Date.now() < end) requestAnimationFrame(frame)
  }

  confetti({ particleCount: 120, spread: 85, startVelocity: 45, origin: { x: 0.2, y: 0.35 } })
  confetti({ particleCount: 120, spread: 85, startVelocity: 45, origin: { x: 0.8, y: 0.35 } })
  requestAnimationFrame(frame)
}

export default function Countdown({ targetIso }: { targetIso: string }) {
  const target = useMemo(() => new Date(targetIso).getTime(), [targetIso])
  const [now, setNow] = useState(Date.now())
  const hasFiredRef = useRef(false)

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  const diff = Math.max(0, target - now)

  useEffect(() => {
    if (diff === 0 && !hasFiredRef.current) {
      hasFiredRef.current = true
      fireConfetti()
    }
  }, [diff])

  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return (
    <div className="py-6">
      <div className="flex items-baseline justify-center gap-6 sm:gap-10">
        <Num value={String(days)} />
        <Sep />
        <Num value={pad2(hours)} />
        <Sep />
        <Num value={pad2(minutes)} />
        <Sep />
        <Num value={pad2(seconds)} />
      </div>

      <div className="mt-3 flex items-center justify-center gap-6 sm:gap-10">
        <Lab text="DÍAS" />
        <LabSpacer />
        <Lab text="HORAS" />
        <LabSpacer />
        <Lab text="MINUTOS" />
        <LabSpacer />
        <Lab text="SEGUNDOS" />
      </div>
    </div>
  )
}

function Num({ value }: { value: string }) {
  return (
    <div className="font-['Lovelace',serif] tabular-nums text-[64px] sm:text-[84px] leading-none font-light tracking-[0.06em] text-[#7E8C84]">
      {value}
    </div>
  )
}

function Sep() {
  return (
    <div className="font-['Lovelace',serif] text-[44px] sm:text-[58px] leading-none text-[#7E8C84]/90 translate-y-[2px]" aria-hidden="true">
      ·
    </div>
  )
}

function Lab({ text }: { text: string }) {
  return (
    <div className="w-[78px] sm:w-[92px] text-center">
      <div className="font-['Lovelace',serif] text-[18px] sm:text-[22px] tracking-[0.22em] text-[#7E8C84]/85">
        {text}
      </div>
    </div>
  )
}

function LabSpacer() {
  return <div className="w-[18px] sm:w-[22px]" aria-hidden="true" />
}
