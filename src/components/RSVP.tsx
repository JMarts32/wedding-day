import { useState } from "react"
import RsvpModal from "./RsvpModal"
import { useT } from "../i18n/LocaleContext"

export default function RSVP() {
  const t = useT()
  const [open, setOpen] = useState(false)

  return (
    <div className="text-center">
      <h2 className="font-['Brittany','Great_Vibes',cursive] text-[clamp(3rem,12vw,5rem)] leading-none text-sand-500">
        {t.rsvp.title}
      </h2>

      <p className="mt-4 font-serif text-[20px] text-stone-600">
        {t.rsvp.deadline}{" "}
        <span className="font-semibold">{t.rsvp.deadlineDate}</span>
      </p>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-7 inline-flex items-center justify-center rounded-full bg-[#6b7c6b] px-12 py-3 text-sm font-sans tracking-widest text-white hover:bg-[#5a6b5a] transition-colors cursor-pointer"
      >
        {t.rsvp.button}
      </button>

      <RsvpModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
