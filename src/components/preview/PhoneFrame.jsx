import { useState } from 'react'

export default function PhoneFrame({ view, children }) {
  const [playing, setPlaying] = useState(true)
  return (
    <div
      className={`relative flex flex-col overflow-hidden bg-surface-container-lowest shadow-2xl transition-all duration-300 ${
        view === 'mobile'
          ? 'h-[calc(100dvh-7.5rem)] w-full max-w-[480px] rounded-none md:h-[844px] md:rounded-[40px]'
          : 'h-[calc(100dvh-7.5rem)] w-full max-w-none rounded-none md:h-[844px]'
      }`}
    >
      <div className="z-40 flex h-6 w-full shrink-0 select-none items-center justify-between bg-transparent px-6">
        <span className="font-label-sm text-on-surface-variant">09:41</span>
        <div className="h-4 w-20 rounded-full bg-inverse-surface/80"></div>
        <div className="flex items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined text-[14px]">signal_cellular_4_bar</span>
          <span className="material-symbols-outlined text-[14px]">wifi</span>
          <span className="material-symbols-outlined text-[14px]">battery_full</span>
        </div>
      </div>
      <div className="relative w-full flex-1 scroll-smooth overflow-y-auto overflow-x-hidden pb-24">
        {children}
      </div>
      <div className="absolute bottom-20 right-4 z-40">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label="Audio"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-lowest/90 text-primary shadow-lg backdrop-blur-md transition-all hover:scale-105 active:scale-95"
        >
          <span className={`material-symbols-outlined text-[24px] ${playing ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }}>
            {playing ? 'album' : 'play_circle'}
          </span>
        </button>
      </div>
    </div>
  )
}
