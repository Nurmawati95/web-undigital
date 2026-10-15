import { Icon } from './Icon.jsx'

const BOTTOM_NAV = [
  ['home', 'Home'],
  ['users', 'Mempelai'],
  ['calendar', 'Acara'],
  ['image', 'Galeri'],
  ['messageHeart', 'Ucapan'],
]

export default function ContentPhone({ hero, couple, schedule, gallery, gift, rsvp, notify }) {
  return (
    <div className="no-scrollbar relative flex h-full w-full flex-col overflow-hidden rounded-[34px] bg-champagne-50">
      <div className="absolute right-4 top-14 z-40 flex flex-col gap-2.5">
        <button title="Play / Pause Audio" onClick={() => notify('Audio undangan diputar (demo).')} className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-800 shadow-md backdrop-blur transition hover:bg-white active:scale-95">
          <Icon name="disc3" className="w-4 h-4 text-brand-600 animate-spin-slow" />
        </button>
        <button title="Auto Scroll" onClick={() => notify('Auto-scroll dimulai (demo).')} className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-800 shadow-md backdrop-blur transition hover:bg-white active:scale-95">
          <Icon name="chevronsDown" className="w-4 h-4 text-slate-600" />
        </button>
      </div>
      <div className="no-scrollbar h-full scroll-smooth overflow-y-auto pb-24">
        {hero}
        {couple}
        {schedule}
        {gallery}
        {gift}
        {rsvp}
      </div>
      <div className="absolute bottom-3 left-4 right-4 z-40">
        <nav className="glass-card flex items-center justify-around rounded-2xl border border-white/60 px-3 py-2 shadow-xl">
          {BOTTOM_NAV.map(([icon, label], i) => (
            <button key={label} onClick={() => notify(`Navigasi ${label} (demo).`)} className={`flex flex-col items-center transition ${i === 0 ? 'text-brand-600' : 'text-slate-500 hover:text-slate-800'}`}>
              <Icon name={icon} className="w-4 h-4" />
              <span className={`mt-0.5 text-[9px] ${i === 0 ? 'font-semibold' : 'font-medium'}`}>{label}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="pointer-events-none absolute bottom-1 left-1/2 z-40 h-1 w-32 -translate-x-1/2 rounded-full bg-slate-900/30"></div>
    </div>
  )
}
