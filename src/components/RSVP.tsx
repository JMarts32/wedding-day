import { useState } from "react"
import RsvpModal from "./RsvpModal"

export default function RSVP() {
  const [open, setOpen] = useState(false)

  return (
    <div className="text-center">
      <h2 className="font-['Brittany','Great_Vibes',cursive] text-[clamp(3rem,12vw,5rem)] leading-none text-sand-500">
        RSVP
      </h2>

      <p className="mt-4 font-serif text-[17px] text-stone-600">
        Por favor confirmar antes del{" "}
        <span className="font-semibold">15 de mayo de 2026</span>
      </p>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-7 inline-flex items-center justify-center rounded-full bg-[#6b7c6b] px-10 py-3 text-sm font-sans tracking-widest text-white hover:bg-[#5a6b5a] transition-colors cursor-pointer"
      >
        CONFIRMAR ASISTENCIA
      </button>

      <RsvpModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}