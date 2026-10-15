import { WA_ADMIN } from '../../data/landing.js'
import { WaIcon } from './LandingHeader.jsx'

export default function LandingFab() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 sm:flex-row sm:items-center">
      <div className="relative max-w-xs rounded-2xl bg-surface-container-lowest p-3.5 shadow-2xl transition-all duration-300 sm:max-w-sm">
        <div className="mb-1.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-secondary"></span>
            <span className="font-label-sm text-label-sm font-bold text-on-surface">Admin UNDIGITAL</span>
          </div>
          <span className="text-[10px] font-semibold text-secondary">Online • Siap Bantu</span>
        </div>
        <p className="font-body-sm text-body-sm leading-snug text-on-surface-variant">
          Mau terima beres langsung jadi hari ini? Sini mimin buatin tanpa biaya
        </p>
      </div>
      <div className="relative shrink-0">
        <span className="pointer-events-none absolute -inset-1 animate-ping rounded-full bg-secondary opacity-30"></span>
        <a
          aria-label="Konsultasi WhatsApp dengan Admin UNDIGITAL"
          href={WA_ADMIN}
          rel="noopener noreferrer"
          target="_blank"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <WaIcon className="h-7 w-7 text-on-secondary" />
        </a>
      </div>
    </div>
  )
}
