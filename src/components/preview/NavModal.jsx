const NAV = [
  ['section-cover', 'home', 'Home'],
  ['section-couple', 'favorite', 'Mempelai'],
  ['section-events', 'calendar_month', 'Acara'],
  ['section-gallery', 'photo_library', 'Galeri'],
  ['section-rsvp', 'rate_review', 'Ucapan'],
]

export default function BottomNav({ onNav }) {
  return (
    <div className="absolute bottom-3 left-3 right-3 z-40">
      <nav className="flex w-full items-center justify-around rounded-2xl bg-surface-container-lowest/85 px-2 py-2 shadow-xl backdrop-blur-xl">
        {NAV.map(([id, icon, label]) => (
          <button
            key={id}
            onClick={() => onNav(id)}
            className="flex flex-col items-center gap-0.5 px-2 py-1 text-on-surface-variant transition-colors hover:text-primary"
          >
            <span className="material-symbols-outlined text-[18px]">{icon}</span>
            <span className="font-label-sm text-[10px]">{label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export function QrModal({ open, onClose }) {
  if (!open) return null
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-inverse-surface/75 p-6 backdrop-blur-sm">
      <div className="relative w-full max-w-xs rounded-3xl bg-surface-container-lowest p-6 text-center shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-surface-container text-on-surface"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
        <span className="mt-2 block font-label-sm font-bold uppercase tracking-wider text-primary">Buku Tamu Digital</span>
        <h3 className="mt-1 font-headline-sm text-on-surface">Bapak Budi</h3>
        <span className="mt-1 inline-block rounded-full bg-secondary-container px-2.5 py-0.5 font-label-sm text-[11px] text-on-secondary-container">
          VIP Guest • Meja A-12
        </span>
        <div className="my-4 flex justify-center rounded-2xl bg-surface-container-low p-4 shadow-inner">
          <svg className="h-48 w-48 text-on-surface" fill="currentColor" viewBox="0 0 100 100">
            <rect fill="none" height="28" rx="3" stroke="currentColor" strokeWidth="5" width="28" x="5" y="5"></rect>
            <rect fill="currentColor" height="14" width="14" x="12" y="12"></rect>
            <rect fill="none" height="28" rx="3" stroke="currentColor" strokeWidth="5" width="28" x="67" y="5"></rect>
            <rect fill="currentColor" height="14" width="14" x="74" y="12"></rect>
            <rect fill="none" height="28" rx="3" stroke="currentColor" strokeWidth="5" width="28" x="5" y="67"></rect>
            <rect fill="currentColor" height="14" width="14" x="12" y="74"></rect>
            <rect height="8" width="8" x="42" y="12"></rect>
            <rect height="12" width="12" x="42" y="32"></rect>
            <rect height="8" width="20" x="65" y="45"></rect>
            <rect height="14" width="8" x="10" y="44"></rect>
            <rect height="25" width="10" x="45" y="60"></rect>
            <rect height="18" width="18" x="70" y="70"></rect>
          </svg>
        </div>
        <p className="font-body-sm text-xs text-on-surface-variant">
          Kode Tiket: <span className="font-mono font-bold text-on-surface">UND-2026-BB89</span>
        </p>
      </div>
    </div>
  )
}
