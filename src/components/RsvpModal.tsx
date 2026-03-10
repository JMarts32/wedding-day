import { useState } from "react"
import { useT, useLocale } from "../i18n/LocaleContext"

interface Guest {
  name: string
  email: string
}

type ModalStep = "form" | "loading" | "success" | "error"

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8003"

export default function RsvpModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const t = useT()
  const locale = useLocale()
  const [step, setStep] = useState<ModalStep>("form")
  const [errorMsg, setErrorMsg] = useState("")
  const [guests, setGuests] = useState<Guest[]>([{ name: "", email: "" }])

  if (!open) return null

  const updateGuest = (index: number, field: keyof Guest, value: string) => {
    setGuests(prev =>
      prev.map((g, i) => (i === index ? { ...g, [field]: value } : g))
    )
  }

  const addGuest = () => setGuests(prev => [...prev, { name: "", email: "" }])

  const removeGuest = (index: number) =>
    setGuests(prev => prev.filter((_, i) => i !== index))

  const isValid = guests.every(
    g => g.name.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g.email)
  )

  const handleClose = () => {
    setStep("form")
    setGuests([{ name: "", email: "" }])
    setErrorMsg("")
    onClose()
  }

  const handleConfirm = async () => {
    if (!isValid) return
    setStep("loading")
    try {
      const res = await fetch(`${API_URL}/rsvp/confirm`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ guests, language: locale }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail ?? "Error")
      setStep("success")
      import("canvas-confetti").then(({ default: confetti }) => {
        confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } })
      })
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Error")
      setStep("error")
    }
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={handleClose} />

      <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4">
        <div className="w-full max-w-2xl rounded-3xl bg-[#f5f2eb] border border-sand-200 shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="px-6 sm:px-9 py-5 sm:py-7 border-b border-sand-200/60">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-['Brittany','Great_Vibes',cursive] text-5xl sm:text-6xl text-sand-500 leading-none">
                  {t.rsvp.title}
                </div>
                <div className="font-serif italic text-[17px] text-stone-600 mt-1">
                  {t.modal.subtitle}
                </div>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="h-11 w-11 rounded-full border border-sand-200 bg-white/60 text-stone-500 hover:text-stone-700 hover:bg-white transition-colors cursor-pointer flex items-center justify-center text-base"
                aria-label={t.modal.close}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 sm:px-9 py-5 sm:py-7 max-h-[70vh] overflow-y-auto">

            {/* Success */}
            {step === "success" && (
              <div className="py-10 text-center">
                <div className="text-6xl mb-5">🎉</div>
                <div className="font-['Brittany','Great_Vibes',cursive] text-5xl sm:text-6xl text-sand-500 mb-4">
                  {t.modal.successTitle}
                </div>
                <p className="font-serif italic text-[18px] sm:text-[20px] text-stone-600 leading-relaxed">
                  {t.modal.successText}
                  <strong className="not-italic font-semibold">{t.modal.successDate}</strong>
                  {t.modal.successEmail}
                </p>
              </div>
            )}

            {/* Error */}
            {step === "error" && (
              <div className="py-8 text-center">
                <div className="text-5xl mb-4">😕</div>
                <p className="font-serif italic text-[18px] sm:text-[20px] text-stone-600 mb-6">{errorMsg}</p>
                <button
                  type="button"
                  onClick={() => setStep("form")}
                  className="rounded-full border border-sand-300 px-8 py-3 text-[14px] font-sans tracking-widest text-stone-600 hover:bg-sand-100 transition-colors cursor-pointer"
                >
                  {t.modal.errorRetry}
                </button>
              </div>
            )}

            {/* Loading */}
            {step === "loading" && (
              <div className="py-14 text-center">
                <div className="font-serif italic text-[18px] sm:text-[20px] text-stone-500 animate-pulse">
                  {t.modal.loading}
                </div>
              </div>
            )}

            {/* Form */}
            {step === "form" && (
              <>
                <p className="font-serif italic text-[17px] text-stone-600 mb-7 leading-relaxed">
                  {t.modal.intro}
                </p>

                {guests.map((guest, index) => (
                  <div
                    key={index}
                    className="mb-5 rounded-2xl border border-sand-200 bg-white/50 p-5 sm:p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-sans text-[12px] tracking-widest text-stone-400">
                        {t.modal.guest} {index + 1}
                      </span>
                      {guests.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeGuest(index)}
                          className="font-sans text-[14px] text-stone-400 hover:text-stone-600 transition-colors cursor-pointer"
                        >
                          {t.modal.remove}
                        </button>
                      )}
                    </div>

                    <input
                      type="text"
                      value={guest.name}
                      onChange={e => updateGuest(index, "name", e.target.value)}
                      placeholder={t.modal.namePlaceholder}
                      className="w-full rounded-xl border border-sand-200 bg-white/70 px-5 py-4 font-serif text-[17px] text-stone-700 placeholder:text-stone-300 outline-none focus:border-[#6b7c6b] transition-colors mb-3"
                    />
                    <input
                      type="email"
                      value={guest.email}
                      onChange={e => updateGuest(index, "email", e.target.value)}
                      placeholder={t.modal.emailPlaceholder}
                      className="w-full rounded-xl border border-sand-200 bg-white/70 px-5 py-4 font-serif text-[17px] text-stone-700 placeholder:text-stone-300 outline-none focus:border-[#6b7c6b] transition-colors"
                    />
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addGuest}
                  className="w-full rounded-2xl border border-dashed border-sand-300 py-4 font-sans text-[13px] tracking-widest text-stone-400 hover:text-stone-600 hover:border-sand-400 transition-colors cursor-pointer"
                >
                  {t.modal.addGuest}
                </button>
              </>
            )}
          </div>

          {/* Footer */}
          {(step === "form" || step === "loading") && (
            <div className="px-6 sm:px-9 py-5 sm:py-6 border-t border-sand-200/60">
              <button
                type="button"
                onClick={handleConfirm}
                disabled={!isValid || step === "loading"}
                className="w-full rounded-full bg-[#6b7c6b] px-6 py-4 text-[14px] font-sans tracking-widest text-white hover:bg-[#5a6b5a] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                {step === "loading" ? t.modal.confirming : t.modal.confirm}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
