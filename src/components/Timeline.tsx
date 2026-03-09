import type React from "react"
import { useT } from "../i18n/LocaleContext"

type Item = {
  titleKey: "welcome" | "ceremony" | "dinner" | "party"
  time: string
  side: "left" | "right"
  Icon: React.ElementType<{ className?: string }>
}

const items: Item[] = [
  { titleKey: "welcome",  time: "4:00 PM", side: "left",  Icon: IconWelcome },
  { titleKey: "ceremony", time: "4:30 PM", side: "right", Icon: IconChurch  },
  { titleKey: "dinner",   time: "6:30 PM", side: "left",  Icon: IconDinner  },
  { titleKey: "party",    time: "—",       side: "right", Icon: IconParty   },
]

export default function Timeline() {
  const t = useT()

  return (
    <section className="py-4 text-center">
      <h2 className="font-['Brittany','Great_Vibes',cursive] text-[clamp(3rem,12vw,5rem)] leading-none text-sand-500/90">
        {t.timeline.title}
      </h2>

      <div className="relative mt-14 mx-auto max-w-xl px-4 sm:px-6">
        {/* Línea vertical central */}
        <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-px bg-sand-300/50" />

        <div className="flex flex-col">
          {items.map((item) => (
            <Row
              key={item.titleKey}
              item={item}
              title={t.timeline[item.titleKey]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Row({ item, title }: { item: Item; title: string }) {
  const isLeft = item.side === "left"

  return (
    <div className="grid grid-cols-2 items-center py-4 sm:py-6">
      {/* Celda izquierda */}
      <div className="flex justify-end pr-5 sm:pr-8">
        {isLeft
          ? <Bubble Icon={item.Icon} />
          : <Label title={title} time={item.time} align="right" />
        }
      </div>

      {/* Celda derecha */}
      <div className="flex justify-start pl-5 sm:pl-8">
        {!isLeft
          ? <Bubble Icon={item.Icon} />
          : <Label title={title} time={item.time} align="left" />
        }
      </div>
    </div>
  )
}

function Bubble({ Icon }: { Icon: React.ElementType<{ className?: string }> }) {
  return (
    <div className="relative">
      <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full border border-sand-200 bg-sand-50/60 flex items-center justify-center">
        <Icon className="h-14 w-14 sm:h-18 sm:w-18 text-[#7E8C84] opacity-80" />
      </div>
      <Leaves className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-5 w-12 text-sand-400/40" />
    </div>
  )
}

function Label({ title, time, align }: { title: string; time: string; align: "left" | "right" }) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <div className="font-serif italic text-[clamp(1.4rem,5vw,2.25rem)] text-sand-500/85 leading-snug">
        {title}
      </div>
      {time !== "—" && (
        <div className="font-serif text-[clamp(1rem,3.5vw,1.5rem)] text-sand-500/60 mt-0.5">{time}</div>
      )}
    </div>
  )
}

function Leaves({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="none">
      <path d="M60 30 C50 25, 45 18, 43 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M60 30 C70 25, 75 18, 77 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M43 12 C38 14, 34 18, 32 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M77 12 C82 14, 86 18, 88 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// ── ICONOS ────────────────────────────────────────────────

function IconWelcome({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M2 6C2 6 6 5 12 5C18 5 22 6 22 6V19C22 19 18 18 12 18C6 18 2 19 2 19V6Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 5V18" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 8.5C7.5 8.2 9 8.1 10.5 8.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 11C7.5 10.7 9 10.6 10.5 10.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M13.5 8.2C15 8.1 16.5 8.2 18 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M13.5 10.7C15 10.6 16.5 10.7 18 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function IconChurch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2V6M10 4H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 6H15L16 10H8L9 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 10H17V21H7V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 21V16C10 15.45 10.45 15 11 15H13C13.55 15 14 15.45 14 16V21"
        stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 14L7 12.5M20 14L17 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 14H7V21H4V14ZM17 14H20V21H17V14Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M11 8.5H13M12 7.5V9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function IconDinner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 13C3 9.134 7.029 6 12 6C16.971 6 21 9.134 21 13H3Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2 13H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 6V4M10.5 4H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 17L8.5 21M15 17L15.5 21M8 21H16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function IconParty({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 12H19" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 5C10 7 9 9.5 9 12C9 14.5 10 17 12 19"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 5C14 7 15 9.5 15 12C15 14.5 14 17 12 19"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 8.5H18M6 15.5H18" stroke="currentColor" strokeWidth="1.1" />
      <path d="M20 4L21 3M20 3L21 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M3 6L4 5M3 5L4 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M19 18L20 17M19 17L20 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
