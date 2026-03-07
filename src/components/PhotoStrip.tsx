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
    <div className="overflow-hidden rounded-xl border-sand-200 bg-blak/100 opacity-90">
      <img src={src} alt={alt} className="h-150 sm:h-114 w-full object-cover" />
    </div>
  )
}
