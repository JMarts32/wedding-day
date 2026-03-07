export default function Recommendations() {
  return (
    <div className="text-center">
      <h2 className="font-script text-5xl sm:text-6xl text-sand-500">Recomendaciones</h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
        <Box title="Guía local">
          <ul className="space-y-3 font-serif text-sm text-sand-500/85">
            <li>
              <div className="font-medium">Comer obleas</div>
              <div className="text-sand-500/70">No te vayas sin probarlas en el centro.</div>
            </li>
            <li>
              <div className="font-medium">Conocer parques y miradores</div>
              <div className="text-sand-500/70">Atardecer en un mirador es obligatorio.</div>
            </li>
            <li>
              <div className="font-medium">Disfrutar la gastronomía</div>
              <div className="text-sand-500/70">Cabro, pepitoria y buena carne.</div>
            </li>
          </ul>
        </Box>

        <Box title="Alojamiento">
          <ul className="space-y-3 font-serif text-sm text-sand-500/85">
            <li>
              <div className="font-medium">Cabecera</div>
              <div className="text-sand-500/70">Zona central con buena oferta.</div>
            </li>
            <li>
              <div className="font-medium">Cañaveral</div>
              <div className="text-sand-500/70">Más tranquilo y familiar.</div>
            </li>
            <li>
              <div className="font-medium">Nuevo Sotomayor</div>
              <div className="text-sand-500/70">Opciones cómodas y cercanas.</div>
            </li>
          </ul>
        </Box>
      </div>
    </div>
  )
}

function Box({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-sand-100/60 border border-sand-200 p-6">
      <div className="font-serif text-xl text-sand-500">{title}</div>
      <div className="mt-4">{children}</div>
    </div>
  )
}
