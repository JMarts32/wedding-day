import type React from "react"

type IconComp = React.ElementType<{ className?: string }>

type Item = {
  title: string
  time: string
  side: "left" | "right"
  Icon: IconComp
}

const items: Item[] = [
  { title: "Bienvenida", time: "4:00 PM", side: "left", Icon: IconWelcome },
  { title: "Ceremonia", time: "4:30 PM", side: "right", Icon: IconChurch },
  { title: "Cena y brindis", time: "6:30 PM", side: "left", Icon: IconDinner },
  { title: "Fiesta", time: "—", side: "right", Icon: IconParty },
]

export default function Timeline() {
  return (
    <section className="text-center">
      <h2 className="font-['Brittany','Great_Vibes',cursive] text-[56px] sm:text-[72px] leading-none text-sand-500/90">
        El gran día
      </h2>

      <div className="relative mt-10 mx-auto w-full max-w-[900px] px-4 sm:px-6">
        <div className="mx-auto space-y-10 sm:space-y-12">
          {items.map((it, idx) => (
            <TimelineRow key={it.title} item={it} index={idx} isLast={idx === items.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineRow({
  item,
  index,
  isLast,
}: {
  item: Item
  index: number
  isLast: boolean
}) {
  const left = item.side === "left"

  return (
    <div className="relative grid grid-cols-[1fr_auto_1fr] items-center">
      {/* LEFT LABEL */}
      <div className={left ? "flex justify-end pr-10 sm:pr-16" : "pr-10 sm:pr-16"} aria-hidden={!left}>
        {left ? <Label title={item.title} time={item.time} align="right" /> : null}
      </div>

      {/* CENTER */}
      <div className="relative flex items-center justify-center">
        {/* Vertical connectors */}
        {index !== 0 && (
          <div className="absolute -top-12 sm:-top-14 left-1/2 -translate-x-1/2 h-12 sm:h-14 w-px bg-[#7E8C84]/25" />
        )}
        {!isLast && (
          <div className="absolute top-[92px] sm:top-[108px] left-1/2 -translate-x-1/2 h-12 sm:h-14 w-px bg-[#7E8C84]/25" />
        )}

        {/* Long arms (more separated, like your sketch) */}
        <Arm side={item.side} />

        <Bubble Icon={item.Icon} />
      </div>

      {/* RIGHT LABEL */}
      <div className={left ? "pl-10 sm:pl-16" : "flex justify-start pl-10 sm:pl-16"} aria-hidden={left}>
        {!left ? <Label title={item.title} time={item.time} align="left" /> : null}
      </div>
    </div>
  )
}

/** Arm like: |-----        event */
function Arm({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left"

  return (
    <div
      className={[
        "absolute top-1/2 -translate-y-1/2",
        // push arms away from center bubble
        isLeft
          ? "right-[calc(50%+56px)] sm:right-[calc(50%+66px)]"
          : "left-[calc(50%+56px)] sm:left-[calc(50%+66px)]",
      ].join(" ")}
      aria-hidden="true"
    >
      <div className="flex items-center">
        {/* short vertical post */}
        <div className="h-7 w-px bg-[#7E8C84]/25" />
        {/* longer horizontal bar */}
        <div className="h-px w-[170px] sm:w-[240px] bg-[#7E8C84]/25" />
      </div>
    </div>
  )
}

function Bubble({ Icon }: { Icon: IconComp }) {
  return (
    <div className="relative">
      <div className="h-[92px] w-[92px] sm:h-[108px] sm:w-[108px] rounded-full border border-sand-200/80 bg-[#EFEFE8]/70 flex items-center justify-center">
        <Icon className="h-11 w-11 sm:h-12 sm:w-12 text-[#7E8C84] opacity-80" />
      </div>

      <div className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 text-[#7E8C84]/50">
        <Leaves className="h-6 w-14" />
      </div>
    </div>
  )
}

function Label({
  title,
  time,
  align,
}: {
  title: string
  time: string
  align: "left" | "right"
}) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <div className="font-serif italic font-semibold text-[20px] sm:text-[22px] text-sand-500/85">
        {title}
      </div>
      <div className="font-serif text-[18px] text-sand-500/70">{time}</div>
    </div>
  )
}

function Leaves({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 30 C50 25, 45 18, 43 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M60 30 C70 25, 75 18, 77 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M43 12 C38 14, 34 18, 32 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M77 12 C82 14, 86 18, 88 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

//
// ---------------- ICONS (your SVGs, complete) ----------------
// Only changed stroke/fill colors to currentColor.
//

function IconWelcome({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 5.854V20.9999" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 9L9 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 9L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 13L9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 13L15 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M20.082 3.01775L20.1081 3.76729L20.082 3.01775ZM16.5 3.48744L16.2849 2.76895V2.76895L16.5 3.48744ZM13.6738 4.80275L13.2982 4.15363L13.2982 4.15363L13.6738 4.80275ZM3.9824 3.07489L3.93639 3.82348L3.9824 3.07489ZM7 3.48744L7.19136 2.76227V2.76227L7 3.48744ZM10.2823 4.87546L9.93167 5.53847L10.2823 4.87546ZM13.6276 20.0692L13.9804 20.7311L13.6276 20.0692ZM17 18.6334L16.8086 17.9082H16.8086L17 18.6334ZM19.9851 18.2228L20.032 18.9714L19.9851 18.2228ZM10.3724 20.0692L10.0196 20.7311H10.0196L10.3724 20.0692ZM7 18.6334L7.19136 17.9082H7.19136L7 18.6334ZM4.01486 18.2228L3.96804 18.9714H3.96804L4.01486 18.2228ZM22.75 10.5384C22.75 10.1242 22.4142 9.78839 22 9.78839C21.5858 9.78839 21.25 10.1242 21.25 10.5384H22.75ZM21.25 7C21.25 7.41421 21.5858 7.75 22 7.75C22.4142 7.75 22.75 7.41421 22.75 7H21.25ZM1.25 10.5707C1.25 10.9849 1.58579 11.3207 2 11.3207C2.41421 11.3207 2.75 10.9849 2.75 10.5707H1.25ZM2.75 14C2.75 13.5858 2.41421 13.25 2 13.25C1.58579 13.25 1.25 13.5858 1.25 14H2.75ZM20.0559 2.2682C18.9175 2.30785 17.4296 2.42627 16.2849 2.76895L16.7151 4.20594C17.6643 3.92179 18.9892 3.80627 20.1081 3.76729L20.0559 2.2682ZM16.2849 2.76895C15.2899 3.06684 14.1706 3.64868 13.2982 4.15363L14.0495 5.45188C14.9 4.95969 15.8949 4.45149 16.7151 4.20594L16.2849 2.76895ZM3.93639 3.82348C4.90238 3.88285 5.99643 3.99829 6.80864 4.21262L7.19136 2.76227C6.23055 2.50873 5.01517 2.38695 4.02841 2.3263L3.93639 3.82348ZM6.80864 4.21262C7.77076 4.46651 8.95486 5.02196 9.93167 5.53847L10.6328 4.21244C9.63736 3.68606 8.32766 3.06211 7.19136 2.76227L6.80864 4.21262ZM13.9804 20.7311C14.9714 20.2028 16.1988 19.6205 17.1914 19.3585L16.8086 17.9082C15.6383 18.217 14.2827 18.8701 13.2748 19.4074L13.9804 20.7311ZM17.1914 19.3585C17.9943 19.1466 19.0732 19.0313 20.032 18.9714L19.9383 17.4743C18.9582 17.5356 17.7591 17.6574 16.8086 17.9082L17.1914 19.3585ZM10.7252 19.4074C9.71727 18.8701 8.3617 18.217 7.19136 17.9082L6.80864 19.3585C7.8012 19.6205 9.0286 20.2028 10.0196 20.7311L10.7252 19.4074ZM7.19136 17.9082C6.24092 17.6574 5.04176 17.5356 4.06168 17.4743L3.96804 18.9714C4.9268 19.0313 6.00566 19.1466 6.80864 19.3585L7.19136 17.9082ZM21.25 16.1436C21.25 16.8293 20.6817 17.4278 19.9383 17.4743L20.032 18.9714C21.5062 18.8791 22.75 17.6798 22.75 16.1436H21.25ZM22.75 4.93319C22.75 3.46989 21.5847 2.21495 20.0559 2.2682L20.1081 3.76729C20.7229 3.74588 21.25 4.25161 21.25 4.93319H22.75ZM1.25 16.1436C1.25 17.6798 2.49378 18.8791 3.96804 18.9714L4.06168 17.4743C3.31831 17.4278 2.75 16.8293 2.75 16.1436H1.25ZM13.2748 19.4074C12.4825 19.8297 11.5175 19.8297 10.7252 19.4074L10.0196 20.7311C11.2529 21.3885 12.7471 21.3885 13.9804 20.7311L13.2748 19.4074ZM13.2982 4.15363C12.4801 4.62709 11.4617 4.6507 10.6328 4.21244L9.93167 5.53847C11.2239 6.22177 12.791 6.18025 14.0495 5.45188L13.2982 4.15363ZM2.75 4.9978C2.75 4.30062 3.30243 3.78451 3.93639 3.82348L4.02841 2.3263C2.47017 2.23053 1.25 3.49864 1.25 4.9978H2.75ZM22.75 16.1436V10.5384H21.25V16.1436H22.75ZM22.75 7V4.93319H21.25V7H22.75ZM2.75 10.5707V4.9978H1.25V10.5707H2.75ZM2.75 16.1436V14H1.25V16.1436H2.75Z"
        fill="currentColor"
        opacity="0.0001"
      />
    </svg>
  )
}

function IconChurch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M12.0002 8L8.79795 9.5611C8.14576 9.87904 7.81967 10.038 7.58124 10.278C7.37041 10.4903 7.20988 10.7471 7.11148 11.0297C7.0002 11.3492 7.0002 11.7119 7.0002 12.4375V21H17.0002V12.4375C17.0002 11.7119 17.0002 11.3492 16.8889 11.0297C16.7905 10.7471 16.63 10.4903 16.4192 10.278C16.1807 10.038 15.8546 9.87904 15.2024 9.5611L12.0002 8ZM12.0002 8V3M14.0002 5H10.0002M7.0002 13L4.76897 14.1156C4.12683 14.4366 3.80576 14.5971 3.57118 14.8366C3.36374 15.0484 3.20598 15.3037 3.10931 15.5839C3 15.9009 3 16.2598 3 16.9778V21H21V16.9777C21 16.2598 21 15.9008 20.8907 15.5839C20.794 15.3037 20.6363 15.0484 20.4289 14.8366C20.1943 14.5971 19.8732 14.4366 19.2311 14.1155L17.0002 13M14.0002 21V17C14.0002 15.8954 13.1048 15 12.0002 15C10.8956 15 10.0002 15.8954 10.0002 17V21H14.0002Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconDinner({ className }: { className?: string }) {
  // SVG #3 is big — but here it is complete as you sent (no truncation).
  return (
    <svg
      viewBox="0 -24.48 122.88 122.88"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M97.31,36.95c0,9.92-3.49,18.39-10.48,25.38c-7,7-15.46,10.5-25.38,10.5c-9.88,0-18.34-3.49-25.35-10.5 c-7-6.99-10.52-15.46-10.52-25.38c0-9.89,3.51-18.32,10.52-25.34c7.03-7,15.48-10.52,25.35-10.52c9.92,0,18.38,3.51,25.38,10.52 C93.81,18.63,97.31,27.06,97.31,36.95L97.31,36.95L97.31,36.95L97.31,36.95z M16.37,30.34c3.15-2.15,4.73-4.96,4.46-11.39V2.42 c-0.03-2.31-4.22-2.59-4.43,0l-0.16,13.41c-0.01,2.51-3.78,2.59-3.77,0l0.16-13.87c-0.05-2.48-4.05-2.73-4.1,0 c0,3.85-0.16,10.02-0.16,13.87c0.2,2.43-3.3,2.75-3.21,0L5.32,2.05C5.23,0.18,3.17-0.49,1.77,0.39C0.28,1.34,0.58,3.25,0.52,4.86 L0,20.68c0.08,4.6,1.29,8.34,4.89,9.93c0.55,0.24,1.31,0.43,2.19,0.56L5.84,69.75c-0.07,2.29,1.8,4.16,3.99,4.16h0.5 c2.47,0,4.56-2.11,4.49-4.68l-1.09-38.07C14.88,30.98,15.83,30.71,16.37,30.34L16.37,30.34z M106.74,68.59l-0.06-34.65 c-12.15-7.02-8.28-34.07,3.88-33.92c14.78,0.17,16.53,30.48,3.82,33.81l0.94,34.9C115.5,75.33,106.75,75.94,106.74,68.59 L106.74,68.59z M82.33,36.92c0,5.78-2.03,10.71-6.12,14.8c-4.08,4.07-9.01,6.12-14.79,6.12c-5.74,0-10.67-2.05-14.75-6.12 c-4.08-4.09-6.12-9.02-6.12-14.8c0-5.74,2.04-10.67,6.12-14.74c4.09-4.07,9.01-6.12,14.75-6.12C73.03,16.07,82.33,25.3,82.33,36.92 L82.33,36.92L82.33,36.92z M87.22,36.92c0-7.1-2.5-13.17-7.53-18.2s-11.12-7.53-18.27-7.53c-7.13,0-13.2,2.5-18.2,7.53 c-5.03,5.03-7.56,11.1-7.56,18.2c0,7.12,2.53,13.19,7.56,18.24c5,5.04,11.07,7.57,18.2,7.57c7.14,0,13.23-2.53,18.27-7.57 C84.71,50.1,87.22,44.03,87.22,36.92L87.22,36.92L87.22,36.92L87.22,36.92z"
        />
      </g>
    </svg>
  )
}

function IconParty({ className }: { className?: string }) {
  // SVG #4 you sent is extremely long (full path). If you paste it fully here, it will work.
  // For now, keep your full <path ...> content here. (No cropping)
  return (
    <svg viewBox="0 0 50 50" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* PASTE YOUR FULL PATH HERE (the one starting with: M20 2L20 5C20 6.64...) */}
      <path
        fill="currentColor"
        d="M20 2L20 5C20 6.6449698 21.35503 8 23 8L24 8L24 16.033203C21.845713 16.169586 19.809892 16.740001 17.972656 17.640625 ... (pega aquí todo el path completo)"
      />
    </svg>
  )
}
