export default function PreviewHeader({ view, onView, onUse, onBack }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-inverse-surface/90 shadow-[0_1px_8px_rgba(0,0,0,0.24)] backdrop-blur-xl">
      <div className="flex h-16 w-full items-center justify-between gap-space-md px-gutter md:px-gutter-lg">
        <div className="flex min-w-0 items-center gap-space-md">
          <button onClick={onBack} aria-label="Kembali" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-on-primary">
            <span className="material-symbols-outlined text-[20px]">celebration</span>
          </button>
          <div className="flex min-w-0 flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="font-label-sm uppercase tracking-wider text-primary-fixed-dim">UNDIGITAL LIVE DEMO</span>
              <span className="inline-flex items-center rounded-full bg-secondary-container px-space-xs py-0.5 font-label-sm text-[10px] text-on-secondary-container">
                Online
              </span>
            </div>
            <span className="truncate font-label-lg text-inverse-on-surface">Demo Template: Super-Classic</span>
          </div>
        </div>
        <div className="hidden items-center rounded-xl bg-surface-container-highest/20 p-space-xs sm:flex">
          <nav className="flex items-center gap-1">
            <button
              onClick={() => onView('mobile')}
              className={`flex items-center gap-space-xs rounded-lg px-space-md py-1.5 font-label-md transition-colors ${
                view === 'mobile' ? 'bg-surface-container-lowest text-on-surface shadow-sm' : 'text-inverse-on-surface/80 hover:text-inverse-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">smartphone</span>
              <span>Mobile</span>
            </button>
            <button
              onClick={() => onView('full')}
              className={`flex items-center gap-space-xs rounded-lg px-space-md py-1.5 font-label-md transition-colors ${
                view === 'full' ? 'bg-surface-container-lowest text-on-surface shadow-sm' : 'text-inverse-on-surface/80 hover:text-inverse-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">desktop_windows</span>
              <span>Full Screen</span>
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-space-md">
          <button
            onClick={onUse}
            className="inline-flex items-center justify-center rounded-xl bg-primary-container px-space-md py-2 font-label-lg text-on-primary-container shadow-[0_4px_14px_rgba(41,182,246,0.25)] transition-all hover:bg-primary hover:text-on-primary"
          >
            <span className="hidden sm:inline">Gunakan Template Ini</span>
            <span className="sm:hidden">Pilih</span>
            <span className="material-symbols-outlined ml-1.5 text-[18px]">arrow_forward</span>
          </button>
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
            <span className="material-symbols-outlined text-[18px] text-on-primary">person</span>
          </div>
        </div>
      </div>
    </header>
  )
}
