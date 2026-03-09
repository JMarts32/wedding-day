const P1 = "#d4c4a8" // petal outer
const P2 = "#c4b49a" // petal inner
const L1 = "#8fa882" // leaf light
const L2 = "#7a9870" // leaf dark
const S  = "#9aab90" // stem

function petal(w: number, h: number) {
  return `M 0 0 C ${-w} ${-h * 0.3} ${-w} ${-h * 0.7} 0 ${-h} C ${w} ${-h * 0.7} ${w} ${-h * 0.3} 0 0`
}

function leaf(w: number, h: number) {
  return `M 0 0 C ${-w} ${-h * 0.35} ${-w} ${-h * 0.7} 0 ${-h} C ${w} ${-h * 0.7} ${w} ${-h * 0.35} 0 0`
}

function Rose({ scale = 1 }: { scale?: number }) {
  const ow = 22 * scale, oh = 55 * scale
  const iw = 15 * scale, ih = 38 * scale
  const cr = 11 * scale
  const outer = [0, 60, 120, 180, 240, 300]
  const inner = [30, 90, 150, 210, 270, 330]
  return (
    <g>
      {outer.map(a => (
        <path key={`o${a}`} d={petal(ow, oh)} fill={P1} transform={`rotate(${a})`} />
      ))}
      {inner.map(a => (
        <path key={`i${a}`} d={petal(iw, ih)} fill={P2} transform={`rotate(${a})`} />
      ))}
      <circle r={cr} fill={P2} />
    </g>
  )
}

function Bud({ scale = 1 }: { scale?: number }) {
  const pw = 9 * scale, ph = 24 * scale
  return (
    <g>
      <path d={petal(pw, ph)} fill={P1} transform="rotate(-28)" />
      <path d={petal(pw, ph)} fill={P1} transform="rotate(28)" />
      <path d={petal(pw * 0.75, ph * 0.75)} fill={P2} transform="rotate(0)" />
    </g>
  )
}

/** Reusable corner arrangement (top-left orientation). Mirror with SVG transforms. */
function CornerArrangement() {
  return (
    <>
      {/* Main stem from corner */}
      <path d="M 22 22 C 58 76 102 126 152 166" stroke={S} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Left branch */}
      <path d="M 82 96 C 56 72 36 68 19 52" stroke={S} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Right branch */}
      <path d="M 127 146 C 150 120 172 105 196 98" stroke={S} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Stem extension */}
      <path d="M 152 166 C 178 186 212 200 244 212" stroke={S} strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Leaves — left branch end */}
      <path d={leaf(9, 27)} fill={L1} transform="translate(19,52) rotate(-45)" />
      <path d={leaf(9, 27)} fill={L2} transform="translate(19,52) rotate(-135)" />

      {/* Leaves — right branch end */}
      <path d={leaf(10, 30)} fill={L1} transform="translate(196,98) rotate(5)" />
      <path d={leaf(10, 30)} fill={L2} transform="translate(196,98) rotate(-85)" />

      {/* Scattered leaves along stems */}
      <path d={leaf(7, 22)} fill={L1} transform="translate(56, 70) rotate(-25)" />
      <path d={leaf(7, 22)} fill={L2} transform="translate(67, 83) rotate(65)" />
      <path d={leaf(8, 25)} fill={L1} transform="translate(110, 132) rotate(-55)" />
      <path d={leaf(8, 25)} fill={L2} transform="translate(122, 147) rotate(35)" />
      <path d={leaf(7, 22)} fill={L1} transform="translate(170, 177) rotate(-15)" />
      <path d={leaf(7, 22)} fill={L2} transform="translate(183, 187) rotate(-105)" />
      <path d={leaf(8, 24)} fill={L1} transform="translate(217, 203) rotate(20)" />
      <path d={leaf(8, 24)} fill={L2} transform="translate(230, 210) rotate(-70)" />

      {/* Main rose */}
      <g transform="translate(244,212)">
        <Rose />
      </g>

      {/* Smaller rose on left branch */}
      <g transform="translate(82,96)">
        <Rose scale={0.68} />
      </g>

      {/* Bud on right branch */}
      <g transform="translate(196,98)">
        <Bud scale={0.9} />
      </g>
    </>
  )
}

export default function FloralBackground() {
  const size = 360

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {/* Top-left */}
      <div className="absolute -top-4 -left-4 opacity-[0.18] w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[360px] md:h-[360px]">
        <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} fill="none">
          <CornerArrangement />
        </svg>
      </div>

      {/* Top-right (mirror horizontal) */}
      <div className="absolute -top-4 -right-4 opacity-[0.18] w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[360px] md:h-[360px]">
        <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} fill="none">
          <g transform={`scale(-1,1) translate(-${size},0)`}>
            <CornerArrangement />
          </g>
        </svg>
      </div>

      {/* Bottom-left (mirror vertical) */}
      <div className="absolute -bottom-4 -left-4 opacity-[0.18] w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[360px] md:h-[360px]">
        <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} fill="none">
          <g transform={`scale(1,-1) translate(0,-${size})`}>
            <CornerArrangement />
          </g>
        </svg>
      </div>

      {/* Bottom-right (mirror both) */}
      <div className="absolute -bottom-4 -right-4 opacity-[0.18] w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[360px] md:h-[360px]">
        <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} fill="none">
          <g transform={`scale(-1,-1) translate(-${size},-${size})`}>
            <CornerArrangement />
          </g>
        </svg>
      </div>
    </div>
  )
}
