import { flankTemplates, phoneCover } from '../../data/landing.js'

function FlankCard({ t }) {
  return (
    <div className={`absolute ${t.pos} z-0 hidden h-64 w-44 flex-col overflow-hidden rounded-2xl bg-surface-container-lowest opacity-90 shadow-xl transition-transform duration-300 hover:rotate-0 hover:scale-105 sm:flex sm:h-72 sm:w-52`}>
      <div className="relative h-32 w-full bg-cover bg-center" style={{ backgroundImage: `url('${t.img}')` }}>
        <span className={`absolute top-2 px-2 py-0.5 rounded-full bg-surface-container-lowest/80 text-[10px] font-bold ${t.badgeRight ? 'right-2' : 'left-2'} ${t.badgeColor ?? 'text-on-surface'}`}>
          {t.badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between bg-surface-container-lowest p-3">
        <div>
          <p className="font-headline-sm text-xs font-bold text-on-surface">{t.title}</p>
          <p className="font-label-sm text-[10px] text-on-surface-variant">{t.desc}</p>
        </div>
        <div className={`flex items-center justify-between text-[10px] ${t.color ?? 'text-primary'}`}>
          <span className="font-semibold">{t.date}</span>
          <span className="material-symbols-outlined text-xs">{t.icon}</span>
        </div>
      </div>
    </div>
  )
}

export default function HeroShowcase({ onOpen }) {
  return (
    <div className="relative flex select-none items-center justify-center py-space-md lg:col-span-6 lg:min-h-[660px] min-h-[580px]">
      {flankTemplates.map((t) => (
        <FlankCard key={t.id} t={t} />
      ))}

      <div className="relative z-20 h-[580px] w-[290px] rounded-[44px] bg-slate-900 p-3 shadow-2xl shadow-primary/20 sm:h-[630px] sm:w-[320px]">
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[36px] bg-surface-container-lowest">
          <div className="absolute left-1/2 top-2.5 z-30 flex h-5 w-28 -translate-x-1/2 items-center justify-end rounded-full bg-slate-900 pr-2">
            <div className="h-2.5 w-2.5 rounded-full bg-slate-800"></div>
          </div>
          <div className="relative flex h-full w-full flex-col justify-between bg-cover bg-center p-5 pt-10" style={{ backgroundImage: `url('${phoneCover}')` }}>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/80"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-1.5 rounded-full bg-surface-container-lowest/80 px-3 py-1 shadow-sm backdrop-blur-md">
                <span className="material-symbols-outlined animate-spin text-xs text-primary">music_note</span>
                <span className="font-label-sm text-[10px] font-semibold text-on-surface">Payung Teduh - Akad</span>
              </div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-container-lowest/80 text-on-surface shadow-sm backdrop-blur-md">
                <span className="material-symbols-outlined text-sm">share</span>
              </div>
            </div>
            <div className="relative z-10 my-auto flex flex-col items-center text-center">
              <span className="mb-1 text-[11px] font-medium uppercase tracking-[0.25em] text-surface-container-lowest/90">THE WEDDING OF</span>
              <h2 className="font-display-hero text-2xl tracking-tight text-surface-container-lowest drop-shadow-md">Dimas & Sarah</h2>
              <div className="my-2 h-0.5 w-12 bg-primary-container"></div>
              <p className="text-[12px] font-light text-surface-container-lowest/90">Minggu, 24 Mei 2026</p>
              <div className="mt-4 flex items-center gap-1.5">
                {[['24', 'Hari'], ['08', 'Jam'], ['45', 'Menit']].map(([n, l]) => (
                  <div key={l} className="min-w-[38px] rounded-lg bg-surface-container-lowest/90 px-2 py-1 text-center text-on-surface shadow-sm backdrop-blur-md">
                    <div className="text-xs font-bold leading-none text-primary">{n}</div>
                    <div className="text-[8px] uppercase tracking-wider text-on-surface-variant">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <button onClick={onOpen} className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-primary-container px-4 py-2.5 text-center font-label-md font-bold text-on-primary shadow-lg transition-colors hover:bg-primary">
                <span className="material-symbols-outlined text-[16px]">mail</span>
                <span>Buka Undangan</span>
              </button>
              <span className="text-[10px] font-light text-surface-container-lowest/70">Kepada Yth: Teman & Sahabat</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-3 -left-4 z-30 flex animate-bounce items-center gap-2.5 rounded-2xl bg-surface-container-lowest px-3.5 py-2 shadow-xl sm:-left-8">
        <span className="flex h-2.5 w-2.5 rounded-full bg-secondary"></span>
        <div className="flex flex-col">
          <span className="font-label-sm text-[11px] font-bold text-on-surface">🔥 980+ dipakai hari ini</span>
          <span className="font-body-sm text-[9px] text-on-surface-variant">Real-time RSVP Tamu Aktif</span>
        </div>
      </div>
      <div className="absolute -right-4 -top-3 z-30 flex items-center gap-2 rounded-2xl bg-surface-container-lowest px-3 py-1.5 shadow-xl sm:-right-6">
        <span className="material-symbols-outlined text-[18px] text-primary">graphic_eq</span>
        <span className="font-label-sm text-[11px] font-bold text-on-surface">🎵 Auto Play Music</span>
      </div>
    </div>
  )
}
