import { Icon } from './Icon.jsx'
import { CornerOrnaments, HomeBar } from './PhoneShell.jsx'
import { PH, guestName } from '../../data/publikasi.js'

export default function CoverPhone({ onOpen }) {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <img alt="Foto Pre-wedding Putra dan Putri" className="h-full w-full object-cover object-center filter brightness-[0.88] contrast-[1.05]" src={PH} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/30"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/40"></div>
      </div>
      <CornerOrnaments />

      <div className="relative z-20 flex items-center justify-between px-6 pt-12">
        <span className="rounded-full border border-amber-200/20 bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-amber-200/90 backdrop-blur-md">
          Wedding Invitation
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-amber-300 backdrop-blur-md">
          <Icon name="music2" className="w-4 h-4 animate-spin-slow" />
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center px-6 pb-8 text-center">
        <p className="mb-1 font-serif text-sm uppercase italic tracking-[0.25em] text-amber-200">The Wedding Of</p>
        <h2 className="my-1 font-script text-5xl leading-tight tracking-wide text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] sm:text-6xl">
          Putra & Putri
        </h2>
        <p className="mb-5 mt-1 font-sans text-[11px] uppercase tracking-widest text-slate-300/90">
          Minggu, 18 Oktober 2026 • Jakarta
        </p>

        <div className="glass-dark mb-5 w-full rounded-2xl border border-white/20 p-4 text-center shadow-2xl backdrop-blur-xl">
          <p className="font-sans text-[11px] tracking-wide text-slate-300">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
          <div className="mt-1.5 inline-block rounded-lg border border-white/10 bg-white/10 px-3 py-1">
            <h3 className="font-sans text-base font-bold tracking-wide text-amber-200">{guestName}</h3>
          </div>
          <p className="mt-2 text-[10px] italic leading-relaxed text-slate-400">
            *Mohon maaf bila ada kesalahan penulisan nama atau gelar
          </p>
        </div>

        <button
          onClick={onOpen}
          className="group relative flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 px-6 py-3.5 font-sans text-sm font-bold text-slate-900 shadow-[0_8px_25px_rgba(251,191,36,0.35)] transition-all duration-200 hover:scale-[1.02] hover:shadow-amber-300/50 active:scale-[0.98]"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/10">
            <Icon name="mailOpen" className="w-4 h-4 text-slate-900 transition group-hover:scale-110" />
          </div>
          <span className="tracking-wide">Buka Undangan</span>
        </button>
        <span className="mt-3 flex items-center gap-1 text-[10px] text-slate-400">
          <Icon name="shieldCheck" className="w-3 h-3 text-emerald-400" /> Undangan Resmi Digital
        </span>
      </div>
      <HomeBar />
    </>
  )
}
