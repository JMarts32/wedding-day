export default function DressCode() {
  return (
    <div className="text-center">
      <h2 className="font-script text-5xl sm:text-6xl text-sand-500">Dress code</h2>
      <div className="mt-2 font-serif text-sm text-sand-500/80">Formal</div>

      <div className="mt-8 rounded-3xl bg-sand-100/60 border border-sand-200 p-6">
        <div className="text-xs font-sans tracking-wide text-sand-500/70">
          Para mantener la armonía de la celebración, el color verde estará reservado
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Card title="Mujeres" text="Vestido largo o midi. Tonos claros y neutros." />
          <Card title="Hombres" text="Traje formal o guayabera elegante. Tonos neutros." />
        </div>
      </div>
    </div>
  )
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl bg-white/45 border border-sand-200 p-6">
      <div className="font-serif text-2xl text-sand-500">{title}</div>
      <p className="mt-3 font-serif text-sm leading-relaxed text-sand-500/85">{text}</p>

      <button
        type="button"
        className="mt-5 inline-flex items-center justify-center rounded-full bg-sand-300/60 border border-sand-300 px-8 py-2 text-sm font-sans tracking-wide text-sand-500 hover:bg-sand-300/80"
      >
        IDEAS
      </button>
    </div>
  )
}
