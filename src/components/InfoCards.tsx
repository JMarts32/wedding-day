import { useT } from "../i18n/LocaleContext"

export default function InfoCards() {
  const t = useT()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-14">
      {/* Card: El lugar */}
      <div className="bg-[#E7E9E4]/80 p-10 sm:p-12 text-center">
        <div className="text-[clamp(3rem,10vw,4rem)] leading-none text-sand-500/90 font-['Brittany','Great_Vibes',cursive]">
          {t.infoCards.locationTitle}
        </div>

        <div className="mt-6 flex justify-center">
          <LocationPinSvg className="h-28 w-28 text-[#5E7A64] opacity-80" />
        </div>

        <p className="mt-3 font-serif text-[21px] leading-[1.6] text-sand-500/75">
          Km7 vía Retorno la Españolita. Urbanización: Tablanca.<br />
          Parcela N12, Finca Villa Jardín.<br />
          Piedecuesta, Santander
        </p>

        <a
          href="https://www.google.com/maps/place/Villa+Jard%C3%ADn+Piedecuesta/@7.0130881,-73.059641,17z/data=!3m1!4b1!4m6!3m5!1s0x8e6847145314aefb:0xa504288c87a45af8!8m2!3d7.0130881!4d-73.059641!16s%2Fg%2F11bw20s1qb?entry=ttu"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#7E8C84] px-12 py-3 font-sans text-[15px] tracking-[0.28em] text-white/95 hover:opacity-95"
        >
          {t.infoCards.map}
        </a>
      </div>

      {/* Card: Clima */}
      <div className="bg-[#E7E9E4]/80 p-10 sm:p-12">
        <div className="text-center text-[clamp(3rem,10vw,4rem)] leading-none text-sand-500/80 font-['Brittany','Great_Vibes',cursive]">
          {t.infoCards.climateTitle}
        </div>

        <div className="text-center mt-10 font-serif text-[36px] leading-none text-sand-500/90">
          {t.infoCards.city}
        </div>

        <div className="text-center mt-8 space-y-6 font-serif text-[22px] text-sand-500/75">
          <Row label={t.infoCards.max} value="28°C" />
          <Divider />
          <Row label={t.infoCards.min} value="19°C" />
          <Divider />
          <Row label={t.infoCards.environment} value={t.infoCards.eternal} valueRightWrap />
        </div>
      </div>
    </div>
  )
}

function Row({
  label,
  value,
  valueRightWrap,
}: {
  label: string
  value: string
  valueRightWrap?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="tracking-[0.14em] text-sand-500/65">{label}</div>
      <div className={valueRightWrap ? "max-w-[140px] text-right" : ""}>{value}</div>
    </div>
  )
}

function Divider() {
  return <div className="h-px w-full bg-black-500/20" />
}

function LocationPinSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16H11ZM8.21567 14.3922C8.75496 14.2731 9.09558 13.7394 8.97647 13.2001C8.85735 12.6608 8.32362 12.3202 7.78433 12.4393L8.21567 14.3922ZM16.2157 12.4393C15.6764 12.3202 15.1426 12.6608 15.0235 13.2001C14.9044 13.7394 15.245 14.2731 15.7843 14.3922L16.2157 12.4393ZM15 7C15 8.65685 13.6569 10 12 10V12C14.7614 12 17 9.76142 17 7H15ZM12 10C10.3431 10 9 8.65685 9 7H7C7 9.76142 9.23858 12 12 12V10ZM9 7C9 5.34315 10.3431 4 12 4V2C9.23858 2 7 4.23858 7 7H9ZM12 4C13.6569 4 15 5.34315 15 7H17C17 4.23858 14.7614 2 12 2V4ZM11 11V16H13V11H11ZM20 17C20 17.2269 19.9007 17.5183 19.5683 17.8676C19.2311 18.222 18.6958 18.5866 17.9578 18.9146C16.4844 19.5694 14.3789 20 12 20V22C14.5917 22 16.9861 21.5351 18.7701 20.7422C19.6608 20.3463 20.4435 19.8491 21.0171 19.2463C21.5956 18.6385 22 17.8777 22 17H20ZM12 20C9.62114 20 7.51558 19.5694 6.04218 18.9146C5.30422 18.5866 4.76892 18.222 4.43166 17.8676C4.0993 17.5183 4 17.2269 4 17H2C2 17.8777 2.40438 18.6385 2.98287 19.2463C3.55645 19.8491 4.33918 20.3463 5.2299 20.7422C7.01386 21.5351 9.40829 22 12 22V20ZM4 17C4 16.6824 4.20805 16.2134 4.96356 15.6826C5.70129 15.1644 6.81544 14.7015 8.21567 14.3922L7.78433 12.4393C6.22113 12.7846 4.83528 13.3285 3.81386 14.0461C2.81023 14.7512 2 15.747 2 17H4ZM15.7843 14.3922C17.1846 14.7015 18.2987 15.1644 19.0364 15.6826C19.792 16.2134 20 16.6824 20 17H22C22 15.747 21.1898 14.7512 20.1861 14.0461C19.1647 13.3285 17.7789 12.7846 16.2157 12.4393L15.7843 14.3922Z"
        fill="currentColor"
      />
    </svg>
  )
}
