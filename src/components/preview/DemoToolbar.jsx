export default function DemoToolbar({ view, onView, onShare, onUse }) {
  const mobileActive = view === 'mobile'
  return (
    <div className="z-30 w-full bg-surface-container-low px-space-md py-space-sm shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-space-sm md:flex-row">
        <div className="flex flex-wrap items-center gap-space-sm">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary-container px-2.5 py-1 font-label-sm uppercase tracking-wide text-on-primary-container shadow-sm">
            <span className="material-symbols-outlined text-[14px]">desktop_windows</span>
            DEMO MODE
          </span>
          <div className="flex items-center gap-1.5">
            <span className="font-headline-sm text-on-surface">Demo Template: Super-Classic</span>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-surface-container-high px-2 py-0.5 font-label-md text-on-surface">
              <span className="material-symbols-outlined fill-1 text-[14px] text-amber-500">star</span>
              4.9
            </span>
            <span className="inline-flex items-center rounded-full bg-secondary-container px-2 py-0.5 font-label-sm text-on-secondary-container">
              Gratis Default
            </span>
          </div>
        </div>
        <div className="flex items-center rounded-xl bg-surface-container-highest/60 p-1 shadow-inner">
          <button
            type="button"
            onClick={() => onView('mobile')}
            className={`flex items-center gap-1.5 rounded-lg px-space-md py-1.5 font-label-md transition-all ${
              mobileActive ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">smartphone</span>
            <span>Layar HP (Mobile 9:16)</span>
          </button>
          <button
            type="button"
            onClick={() => onView('full')}
            className={`flex items-center gap-1.5 rounded-lg px-space-md py-1.5 font-label-md transition-all ${
              !mobileActive ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">fullscreen</span>
            <span>Layar Penuh (Fullscreen)</span>
          </button>
          <div className="hidden items-center px-2 font-label-sm text-on-surface-variant xl:flex">
            <span>Responsive 100dvh</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onShare}
            className="inline-flex items-center gap-1.5 rounded-xl bg-surface-container-lowest px-3 py-2 font-label-lg text-on-surface shadow-sm transition-all hover:bg-surface-container"
          >
            <span className="material-symbols-outlined text-[18px]">share</span>
            <span>Bagikan Demo</span>
          </button>
          <button
            type="button"
            onClick={onUse}
            className="inline-flex items-center gap-1.5 rounded-xl bg-secondary px-4 py-2 font-label-lg text-on-secondary shadow-md transition-all hover:bg-secondary/90"
          >
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            <span>Gunakan Template Ini</span>
          </button>
        </div>
      </div>
    </div>
  )
}
