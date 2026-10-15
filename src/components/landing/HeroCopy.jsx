import { heroAvatars, WA_ADMIN } from '../../data/landing.js'
import { WaIcon } from './LandingHeader.jsx'

export default function HeroCopy({ onNavigate }) {
  return (
    <div className="z-10 flex flex-col items-start gap-space-md lg:col-span-6">
      <div className="inline-flex items-center gap-space-xs rounded-full bg-surface-container-high px-space-md py-1.5 shadow-sm">
        <span className="font-headline-sm text-sm text-primary">✨</span>
        <span className="font-label-md text-label-md tracking-wide text-primary">
          #1 Platform Undangan Digital Indonesia
        </span>
      </div>

      <h1 className="font-display-hero text-display-hero-mobile tracking-tight text-on-surface sm:text-display-hero">
        Buat Undangan Digital Gratis Untuk <span className="text-primary-container">Ulang Tahun</span> Tanpa Ribet!
      </h1>

      <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
        Coba gratis dalam 5 menit dengan puluhan template estetik yang mudah diedit, atau santai saja dan minta
        bantuan dibuatkan langsung oleh tim admin profesional kami sampai jadi.
      </p>

      <div className="flex w-full flex-wrap items-center gap-space-sm pt-space-xs">
        <button
          onClick={() => onNavigate('registrasi')}
          className="flex min-w-[210px] items-center justify-center gap-space-xs rounded-xl bg-primary-container px-space-lg py-3.5 font-label-lg text-label-lg text-on-primary shadow-lg transition-all duration-200 hover:bg-primary hover:shadow-xl"
        >
          <span>Buat Undangan Gratis</span>
          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
        </button>
        <a
          href={WA_ADMIN}
          rel="noopener noreferrer"
          target="_blank"
          className="flex min-w-[210px] items-center justify-center gap-space-xs rounded-xl bg-surface-container-lowest px-space-lg py-3.5 font-label-lg text-label-lg text-on-surface shadow-sm transition-all duration-200 hover:bg-surface-container-low hover:shadow-md"
        >
          <WaIcon />
          <span>Dibuatin Admin Aja</span>
        </a>
      </div>

      <div className="flex items-center gap-space-xs pt-1 text-on-surface">
        <span className="material-symbols-outlined text-[20px] text-secondary">verified</span>
        <span className="font-label-md text-label-md font-semibold text-on-surface">
          Anti Rugi! Dibuatin Admin Dulu, Bayar Pas Sudah Jadi
        </span>
      </div>

      <div className="flex w-full flex-col items-start gap-space-md pt-space-sm sm:flex-row sm:items-center">
        <div className="flex items-center gap-space-sm">
          <div className="flex -space-x-2.5 overflow-hidden">
            {heroAvatars.map((src) => (
              <img key={src} className="inline-block h-9 w-9 rounded-full object-cover shadow-sm" alt="Pengguna UNDIGITAL" src={src} />
            ))}
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-fixed text-xs font-bold text-on-primary-fixed shadow-sm">
              +10k
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center text-xs text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="material-symbols-outlined fill-current text-[16px] text-amber-500">star</span>
              ))}
            </div>
            <span className="font-label-sm text-label-sm font-semibold text-on-surface">
              ⭐ 4.9/5 <span className="font-normal text-on-surface-variant">dari 10,000+ pengguna</span>
            </span>
          </div>
        </div>
        <div className="hidden h-8 w-px bg-surface-container-high sm:block"></div>
        <div className="flex flex-wrap items-center gap-space-xs">
          {['⚡ Aktif Selamanya', '🎵 Custom Musik', '💌 Tamu Sepuasnya'].map((t) => (
            <span key={t} className="inline-flex items-center gap-1 rounded-full bg-surface-container-low px-2.5 py-1 font-label-sm text-label-sm text-on-surface">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
