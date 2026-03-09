import type React from "react"

type GuideItem = { title: string; desc: string }
type AccomItem = { title: string; desc: string }

const guideItems: GuideItem[] = [
  { title: "Comer obleas", desc: "No te vayas sin probar las tradiciones en Floridablanca." },
  { title: "Conocer parques y miradores", desc: 'Bucaramanga es conocida como la "Ciudad de los Parques", ideal para disfrutar de espacios verdes y hermosas vistas.' },
  { title: "Disfrutar la gastronomía", desc: "Atrévete a probar los sabores locales y descubrir por qué la cocina de la región es tan especial." },
]

const accomItems: AccomItem[] = [
  { title: "Cabecera",           desc: "La zona más exclusiva con acceso a todo." },
  { title: "Cañaveral",          desc: "Cerca de centros comerciales y fácil acceso." },
  { title: "Cabecera del Llano", desc: "Tradición y comodidad urbana." },
  { title: "Nuevo Sotomayor",    desc: "Zona tranquila y céntrica." },
]

export default function Recommendations() {
  return (
    <div className="text-center">
      <h2 className="font-['Brittany','Great_Vibes',cursive] text-[clamp(3rem,12vw,5rem)] leading-none text-sand-500">
        Recomendaciones
      </h2>

      <div className="mt-10 mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 text-left items-start">

        {/* Guía local */}
        <div>
          <h3 className="font-georgia text-[2rem] sm:text-[2.5rem] text-stone-700 leading-tight">
            Guía local
          </h3>
          <div className="mt-6 flex flex-col">
            {guideItems.map((item) => (
              <div key={item.title} className="py-4">
                <div className="font-georgia font-semibold text-[18px] text-stone-700">
                  {item.title}
                </div>
                <div className="mt-1 font-georgia italic text-[18px] leading-relaxed text-stone-600">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alojamiento */}
        <div>
          <h3 className="font-georgia text-[2rem] sm:text-[2.5rem] text-stone-700 leading-tight">
            Alojamiento
          </h3>
          <div className="mt-6 flex flex-col divide-y divide-sand-200/60">
            {accomItems.map((item) => (
              <div key={item.title} className="py-4">
                <div className="font-georgia font-semibold text-[18px] text-stone-700">
                  {item.title}
                </div>
                <div className="mt-1 font-georgia italic text-[18px] leading-relaxed text-stone-600">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}