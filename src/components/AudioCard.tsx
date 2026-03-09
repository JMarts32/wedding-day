"use client"

import { useRef, useState, useEffect } from "react"

export default function AudioCard() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onLoaded = () => setDuration(audio.duration)
    const onTimeUpdate = () => setCurrentTime(audio.currentTime)
    const onEnded = () => setIsPlaying(false)

    audio.addEventListener("loadedmetadata", onLoaded)
    audio.addEventListener("timeupdate", onTimeUpdate)
    audio.addEventListener("ended", onEnded)

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded)
      audio.removeEventListener("timeupdate", onTimeUpdate)
      audio.removeEventListener("ended", onEnded)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    if (!audio || !duration) return

    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    audio.currentTime = ratio * duration
  }

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "—:——"
    const m = Math.floor(seconds / 60)
    const s = Math.floor(seconds % 60).toString().padStart(2, "0")
    return `${m}:${s}`
  }

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <div className="mx-auto max-w-md rounded-3xl border-sand-200 px-6 py-5">
      <audio ref={audioRef} src="/audio_silvia.mp3" preload="metadata" />

      <div className="text-center font-['Brittany','Great_Vibes',cursive] font-script text-sand-500 text-[clamp(1rem,12.5vw,4rem)]">
        Tenemos un mensaje
      </div>

      <div className="mt-4 rounded-2xl bg-white/50 border border-sand-200 px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs font-sans text-sand-500/70 w-10 text-left">
            {formatTime(currentTime)}
          </div>

          <button
            type="button"
            onClick={togglePlay}
            className="h-9 w-9 rounded-full bg-sand-200/80 border border-sand-300 flex items-center justify-center transition-transform active:scale-95"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="2" y="2" width="3.5" height="10" rx="1" fill="currentColor" />
                <rect x="8.5" y="2" width="3.5" height="10" rx="1" fill="currentColor" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 2L12 7L3 12V2Z" fill="currentColor" />
              </svg>
            )}
          </button>

          <div className="text-xs font-sans text-sand-500/70 w-10 text-right">
            {formatTime(duration)}
          </div>
        </div>

        <div
          className="mt-3 h-2 w-full rounded-full bg-stone-300 overflow-hidden cursor-pointer"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-stone-500 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}