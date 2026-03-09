export default function PhotoStrip() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Photo src="/p1.jpg" alt="Foto 1" />
      <Photo src="/p2.jpg" alt="Foto 2" />
    </div>
  )
}

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-xl border-sand-200 bg-black/100 opacity-90">
      <img src={src} alt={alt} className="h-64 sm:h-96 md:h-[480px] w-full object-cover" />
    </div>
  )
}
