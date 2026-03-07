export default function AudioCard() {
  return (
    <div className="mx-auto max-w-md rounded-3xl bg-sand-100/60 border-sand-200 px-6 py-5">
      <div className="text-center font-['Brittany','Great_Vibes',cursive] font-script text-6xl text-sand-500">
        Tenemos un mensaje
      </div>

      <div className="mt-4 rounded-2xl bg-white/50 border border-sand-200 px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs font-sans text-sand-500/70">—:—</div>

          <button
            type="button"
            className="h-9 w-9 rounded-full bg-sand-200/80 border-sand-300 flex items-center justify-center"
            aria-label="Play"
          >
            ▶
          </button>

          <div className="text-xs font-sans text-sand-500/70">—:—</div>
        </div>

        <div className="mt-3 h-1 w-full rounded-full bg-sand-200 overflow-hidden">
          <div className="h-full w-1/3 bg-sand-400/60 rounded-full" />
        </div>
      </div>
    </div>
  )
}
