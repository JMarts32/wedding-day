import { useT } from "../i18n/LocaleContext"

export default function DressCode() {
  const t = useT()

  return (
    <div className="text-center">
      {/* Título */}
      <h2 className="font-['Brittany','Great_Vibes',cursive] text-[clamp(3rem,12vw,5rem)] leading-none text-sand-500/90">
        {t.dressCode.title}
      </h2>
      <div className="font-['Brittany','Great_Vibes',cursive] text-[clamp(2rem,8vw,3.5rem)] leading-none text-sand-500/90 -mt-1">
        {t.dressCode.subtitle}
      </div>

      {/* Banner verde */}
      <div className="mt-8 mx-auto max-w-2xl bg-[#8A9E8A]/25 border-y border-[#8A9E8A]/40 px-6 py-4">
        <p className="font-serif text-[17px] sm:text-[18px] text-[#4a5e4a] leading-snug">
          {t.dressCode.banner}
        </p>
      </div>

      {/* Grid principal — 1 col en móvil, 2 en sm+ */}
      {/* Orden en DOM = columnas en desktop (auto-flow por filas); order CSS para mobile */}
      <div className="mt-10 max-w-2xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-x-16">

        {/* FILA 1 — Títulos y texto */}
        <div className="flex flex-col items-center gap-3 order-1 sm:order-none">
          <div className="w-full border-b border-[#d4c4a8]/40 pb-2">
            <div className="font-serif text-[2.2rem] sm:text-[2.5rem] text-text-stone-600">{t.dressCode.women}</div>
          </div>
          <p className="font-serif text-[20px] sm:text-[21px] leading-relaxed text-text-stone-600">
            {t.dressCode.womenDesc}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 order-4 sm:order-none mt-10 sm:mt-0">
          <div className="w-full border-b border-[#d4c4a8]/40 pb-2">
            <div className="font-serif text-[2.2rem] sm:text-[2.5rem] text-text-stone-600">{t.dressCode.men}</div>
          </div>
          <p className="font-serif text-[20px] sm:text-[21px] leading-relaxed text-stone-600">
            {t.dressCode.menDesc}
          </p>
        </div>

        {/* FILA 2 — Iconos */}
        <div className="flex items-end justify-center mt-6 order-2 sm:order-none">
          <IconDress className="h-36 w-36 text-[#c8a84b]" />
        </div>

        <div className="flex items-end justify-center mt-6 order-5 sm:order-none">
          <IconShirt className="h-36 w-36 text-[#c8a84b]" />
        </div>

        {/* FILA 3 — Botones */}
        <div className="flex justify-center mt-6 mb-4 order-3 sm:order-none">
          <button
            type="button"
            onClick={() => window.open("https://co.pinterest.com/silvia97/mujeres/?invite_code=7b5cc51cb44c4cb48c9b809bad41ca63&sender=549298623209285358", "_blank")}
            className="cursor-pointer inline-flex items-center justify-center rounded-full bg-[#6b7c6b] px-10 py-2.5 text-sm font-sans tracking-widest text-white hover:bg-[#5a6b5a] transition-colors"
          >
            {t.dressCode.ideas}
          </button>
        </div>

        <div className="flex justify-center mt-6 mb-4 order-6 sm:order-none">
          <button
            type="button"
            onClick={() => window.open("https://co.pinterest.com/silvia97/hombre/?invite_code=a4b8f82174ac4115adb421a58073fd3e&sender=549298623209285358", "_blank")}
            className="cursor-pointer inline-flex items-center justify-center rounded-full bg-[#6b7c6b] px-10 py-2.5 text-sm font-sans tracking-widest text-white hover:bg-[#5a6b5a] transition-colors"
          >
            {t.dressCode.ideas}
          </button>
        </div>

      </div>
    </div>
  )
}

function IconDress({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 130" fill="none" className={className}>
      <path
        d="M38 10 C35 8, 28 12, 25 20 L30 45 L70 45 L75 20 C72 12, 65 8, 62 10"
        fill="currentColor" opacity="0.9"
      />
      <path d="M38 10 C40 4, 46 2, 50 2 C54 2, 60 4, 62 10"
        stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path
        d="M30 45 C20 60, 10 80, 8 115 L50 120 L92 115 C90 80, 80 60, 70 45 Z"
        fill="currentColor" opacity="0.85"
      />
      <path d="M50 50 L45 120" stroke="white" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
      <path d="M50 50 L55 120" stroke="white" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
      <path d="M50 50 L35 118" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
      <path d="M50 50 L65 118" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
    </svg>
  )
}

function IconShirt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 110" fill="none" className={className}>
      <rect x="22" y="30" width="76" height="72" rx="3" fill="currentColor" opacity="0.9" />
      <path d="M22 30 L22 55 L8 50 L4 35 L18 26 Z" fill="currentColor" opacity="0.85" />
      <rect x="4" y="48" width="18" height="7" rx="2" fill="currentColor" opacity="0.7" />
      <path d="M98 30 L98 55 L112 50 L116 35 L102 26 Z" fill="currentColor" opacity="0.85" />
      <rect x="98" y="48" width="18" height="7" rx="2" fill="currentColor" opacity="0.7" />
      <path d="M48 30 L60 48 L72 30 C68 24, 52 24, 48 30 Z" fill="white" opacity="0.15" />
      <path d="M48 30 L60 48" stroke="white" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <path d="M72 30 L60 48" stroke="white" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <line x1="60" y1="48" x2="60" y2="98" stroke="white" strokeWidth="1.5" opacity="0.35" />
      {[56, 66, 76, 86].map(y => (
        <circle key={y} cx="60" cy={y} r="2.2" fill="white" opacity="0.55" />
      ))}
      <rect x="29" y="44" width="22" height="18" rx="3" fill="white" opacity="0.15" />
      <path d="M29 52 L51 52" stroke="white" strokeWidth="1" opacity="0.25" />
      <rect x="69" y="44" width="22" height="18" rx="3" fill="white" opacity="0.15" />
      <path d="M69 52 L91 52" stroke="white" strokeWidth="1" opacity="0.25" />
      <line x1="44" y1="44" x2="44" y2="100" stroke="white" strokeWidth="1" opacity="0.18" />
      <line x1="76" y1="44" x2="76" y2="100" stroke="white" strokeWidth="1" opacity="0.18" />
    </svg>
  )
}
