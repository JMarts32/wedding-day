export default function Envelope() {
  return (
    <div className="text-center">
      <h2 className="font-['Brittany','Great_Vibes',cursive] text-[clamp(3rem,12vw,5rem)] leading-none text-sand-500">
        Lluvia de sobres
      </h2>

      <p className="mt-8 mx-auto max-w-xl font-serif text-[24px] sm:text-[26px] leading-relaxed text-sand-500/85">
        Nuestro mayor regalo es su compañía y el amor que nos brindan.
        Si desean acompañarnos con un detalle, una lluvia de sobres será más que bienvenida.
      </p>

      {/* Ilustración de sobres */}
      <div className="mt-10 flex justify-center">
        <EnvelopeIllustration className="w-72 sm:w-96" />
      </div>
    </div>
  )
}

function EnvelopeIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 220" fill="none" className={className}>

      {/* SOBRE TRASERO — beige, inclinado a la derecha */}
      <g transform="rotate(-15, 220, 100)">
        <rect x="140" y="50" width="130" height="90" rx="6"
          fill="#D4C4B0" stroke="#B8A898" strokeWidth="1.5" />
        {/* Solapa */}
        <path d="M140 56 L205 100 L270 56"
          stroke="#B8A898" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        {/* Estrellitas decorativas */}
        <text x="210" y="120" fontSize="8" fill="#B8A898" opacity="0.6" textAnchor="middle">✦ ✦ ✦</text>
      </g>

      {/* SOBRE FRONTAL IZQUIERDO — verde, inclinado a la izquierda */}
      <g transform="rotate(12, 100, 120)">
        <rect x="30" y="70" width="140" height="95" rx="6"
          fill="#B8C9B0" stroke="#9AAD92" strokeWidth="1.5" />
        {/* Solapa */}
        <path d="M30 76 L100 122 L170 76"
          stroke="#9AAD92" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        {/* Corazón */}
        <path d="M100 138 C100 138, 91 130, 91 124 C91 120, 94 117, 97 117 C98.5 117, 100 118.5, 100 118.5 C100 118.5, 101.5 117, 103 117 C106 117, 109 120, 109 124 C109 130, 100 138, 100 138Z"
          fill="#9AAD92" opacity="0.7" />
      </g>

      {/* SOBRE FRONTAL DERECHO — celeste, casi horizontal */}
      <g transform="rotate(-5, 180, 160)">
        <rect x="110" y="120" width="145" height="95" rx="6"
          fill="#B8CDD4" stroke="#94B0B8" strokeWidth="1.5" />
        {/* Solapa */}
        <path d="M110 126 L182 168 L255 126"
          stroke="#94B0B8" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        {/* "To: J.R." */}
        <text x="155" y="192" fontSize="10" fill="#6A8F98"
          fontFamily="Georgia, serif" fontStyle="italic" opacity="0.85">
          To: S&O.
        </text>
      </g>

    </svg>
  )
}