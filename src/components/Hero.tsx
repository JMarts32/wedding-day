export default function Hero() {
  return (
    <header className="relative h-[560px] sm:h-[720px] w-full overflow-hidden">
      <img
        src="/hero.jpg"
        alt="Silvia y Owen"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#3A2C24]/80 via-[#3A2C24]/30 to-transparent" />

      <div className="absolute inset-0 flex items-end justify-center pb-14">
        <div className="text-white text-center">
          <div className="font-['Brittany','Great_Vibes',cursive] text-8xl sm:text-9xl drop-shadow opacity-95 text-white">
            Silvia & Owen
          </div>
          <div className="mt-5 flex flex-col items-center text-white">
            <div className="h-px w-48 sm:w-60 bg-white/60" />

            <div className="mt-4 font-['Lovelace',serif] text-[22px] sm:text-[24px] tracking-[0.28em] opacity-95">
              27.06.2026
            </div>

            <div className="mt-4 h-px w-48 sm:w-60 bg-white/60" />
          </div>

        </div>
      </div>
    </header>
  )
}
