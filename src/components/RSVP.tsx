import { useState } from "react"
import RsvpModal from "./RsvpModal"

export default function RSVP() {
  const [open, setOpen] = useState(false)

  return (
    <div className="text-center">
      <h2 className="font-script text-6xl text-sand-500">RSVP</h2>

      <p className="mt-4 font-serif text-base text-sand-500/85">
        Por favor confirmar antes del <span className="font-medium">15 de mayo de 2026</span>
      </p>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-7 inline-flex items-center justify-center rounded-full bg-sand-300/60 border border-sand-300 px-10 py-3 text-sm font-sans tracking-wide text-sand-500 hover:bg-sand-300/80"
      >
        CONFIRMAR ASISTENCIA
      </button>

      <RsvpModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
