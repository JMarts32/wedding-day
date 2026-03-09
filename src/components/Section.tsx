import type { PropsWithChildren } from "react"

export default function Section({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <section className={`px-6 sm:px-10 py-8 sm:py-10 ${className ?? ""}`}>
      <div className="invite-container">{children}</div>
    </section>
  )
}
