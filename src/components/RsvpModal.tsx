export default function RsvpModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full max-w-lg rounded-3xl bg-sand-50 border border-sand-200 shadow-xl overflow-hidden">
          <div className="px-6 py-5 border-b border-sand-200 bg-sand-100/70">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-serif text-xl text-sand-500">RSVP</div>
                <div className="font-sans text-xs tracking-wide text-sand-500/70">
                  Busca tu familia y confirma
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="h-9 w-9 rounded-full border border-sand-300 bg-white/60 text-sand-500"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="px-6 py-6">
            <label className="block text-left font-sans text-xs tracking-wide2 text-sand-500/70">
              BUSCAR POR NOMBRE / APELLIDO / FAMILIA
            </label>
            <input
              className="mt-2 w-full rounded-2xl border border-sand-200 bg-white/70 px-4 py-3 font-serif text-sand-500 outline-none focus:border-sand-300"
              placeholder="Ej: García, Silvia, Familia Pérez..."
            />

            <div className="mt-5 flex gap-3">
              <button
                type="button"
                className="flex-1 rounded-full bg-sand-300/60 border border-sand-300 px-6 py-3 text-sm font-sans tracking-wide text-sand-500 hover:bg-sand-300/80"
              >
                BUSCAR
              </button>
              <button
                type="button"
                className="flex-1 rounded-full bg-white/60 border border-sand-300 px-6 py-3 text-sm font-sans tracking-wide text-sand-500 hover:bg-white/80"
              >
                DECLINAR
              </button>
            </div>

            <div className="mt-6 rounded-2xl bg-sand-100/60 border border-sand-200 p-4 text-left">
              <div className="font-serif text-sand-500">Resultados</div>
              <div className="mt-1 font-sans text-xs text-sand-500/70">
                (Aquí vamos a listar el grupo y los invitados cuando conectemos gRPC)
              </div>
            </div>
          </div>

          <div className="px-6 py-5 border-t border-sand-200 bg-sand-100/50">
            <button
              type="button"
              className="w-full rounded-full bg-sand-300/60 border border-sand-300 px-6 py-3 text-sm font-sans tracking-wide text-sand-500 hover:bg-sand-300/80"
            >
              CONFIRMAR SELECCIÓN
            </button>
            <div className="mt-3 text-center font-sans text-[11px] text-sand-500/60">
              * Luego conectamos este botón al ConfirmAttendance del backend
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
