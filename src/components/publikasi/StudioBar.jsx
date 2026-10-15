import { Icon } from './Icon.jsx'

export default function StudioBar({ onCopy, onFull, onBack }) {
  return (
    <header className="relative z-20 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-slate-900/80 px-6 py-4 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          aria-label="Kembali"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-500 to-cyan-300 text-white shadow-lg shadow-brand-500/20"
        >
          <Icon name="mailHeart" className="w-5 h-5" />
        </button>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold tracking-wide text-white">UNDIGITAL</span>
            <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>
              Guest View Mode
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Pratinjau Undangan: <span className="font-medium text-slate-200">The Wedding of Putra & Putri</span> (Slug:
            /the-wedding-of-putra-putri)
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden items-center rounded-xl border border-white/10 bg-slate-800/90 p-1 text-xs font-medium text-slate-300 md:flex">
          <span className="flex items-center gap-1.5 rounded-lg bg-brand-500 px-3 py-1.5 font-semibold text-white shadow-sm">
            <Icon name="smartphone" className="w-3.5 h-3.5" /> Dual Mobile View (9:16)
          </span>
          <button onClick={onCopy} className="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 transition hover:text-white">
            <Icon name="share2" className="w-3.5 h-3.5" /> Salin Tautan Tamu
          </button>
        </div>
        <button
          onClick={onFull}
          className="flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
        >
          <Icon name="externalLink" className="w-3.5 h-3.5 text-brand-300" /> Buka Full Web
        </button>
      </div>
    </header>
  )
}
