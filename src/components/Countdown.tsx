import { useEffect, useMemo, useRef, useState } from "react"
import confetti from "canvas-confetti"
import { useT } from "../i18n/LocaleContext"

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
  const t = useT()
  const target = useMemo(() => new Date(targetIso).getTime(), [targetIso])
  const [now, setNow] = useState(Date.now())
  const hasFiredRef = useRef(false)

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timer)
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
      <div className="flex items-baseline justify-center gap-3 sm:gap-8">
        <Num value={String(days)} />
        <Sep />
        <Num value={pad2(hours)} />
        <Sep />
        <Num value={pad2(minutes)} />
        <Sep />
        <Num value={pad2(seconds)} />
      </div>

      <div className="mt-3 flex items-center justify-center gap-3 sm:gap-8">
        <Lab text={t.countdown.days} />
        <LabSpacer />
        <Lab text={t.countdown.hours} />
        <LabSpacer />
        <Lab text={t.countdown.minutes} />
        <LabSpacer />
        <Lab text={t.countdown.seconds} />
      </div>
    </div>
  )
}

function Num({ value }: { value: string }) {
  return (
    <div className="font-['Lovelace',serif] tabular-nums text-[clamp(2.5rem,10vw,5.25rem)] leading-none font-light tracking-[0.06em] text-[#7E8C84]">
      {value}
    </div>
  )
}

function Sep() {
  return (
    <div className="font-['Lovelace',serif] text-[clamp(1.75rem,7vw,3.6rem)] leading-none text-[#7E8C84]/90 translate-y-[2px]" aria-hidden="true">
      ·
    </div>
  )
}

function Lab({ text }: { text: string }) {
  return (
    <div className="w-[clamp(3.5rem,12vw,5.75rem)] text-center">
      <div className="font-['Lovelace',serif] text-[clamp(0.65rem,2.2vw,1.375rem)] tracking-[0.18em] text-[#7E8C84]/85">
        {text}
      </div>
    </div>
  )
}

function LabSpacer() {
  return <div className="w-[clamp(0.75rem,2.5vw,1.375rem)]" aria-hidden="true" />
}
