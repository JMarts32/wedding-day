import { useT } from "../i18n/LocaleContext"

export default function Recommendations() {
  const t = useT()

  return (
    <div className="text-center">
      <h2 className="font-['Brittany','Great_Vibes',cursive] text-[clamp(3rem,12vw,5rem)] leading-none text-sand-500">
        {t.recommendations.title}
      </h2>

      <div className="mt-10 mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 text-left items-start">

        {/* Guía local */}
        <div>
          <h3 className="font-serif text-[2.5rem] sm:text-[3rem] text-stone-600 leading-tight">
            {t.recommendations.localGuideTitle}
          </h3>
          <div className="mt-6 flex flex-col">
            {t.recommendations.guide.map((item) => (
              <div key={item.title} className="py-4">
                <div className="font-serif font-semibold text-[20px] text-stone-600">
                  {item.title}
                </div>
                <div className="mt-1 font-serif italic text-[20px] leading-relaxed text-stone-500">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alojamiento */}
        <div>
          <h3 className="font-serif text-[2.5rem] sm:text-[3rem] text-stone-600 leading-tight">
            {t.recommendations.accommodationTitle}
          </h3>
          <div className="mt-6 flex flex-col divide-y divide-sand-200/60">
            {t.recommendations.accommodation.map((item) => (
              <div key={item.title} className="py-4">
                <div className="font-serif font-semibold text-[20px] text-stone-600">
                  {item.title}
                </div>
                <div className="mt-1 font-serif italic text-[20px] leading-relaxed text-stone-500">
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
