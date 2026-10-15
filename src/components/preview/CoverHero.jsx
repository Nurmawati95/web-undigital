import { useEffect, useState } from 'react'
import { previewImages } from '../../data/preview.js'

function useCountdown() {
  const [sec, setSec] = useState(22)
  useEffect(() => {
    const t = window.setInterval(() => setSec((s) => (s - 1 + 60) % 60), 1000)
    return () => window.clearInterval(t)
  }, [])
  return { days: 184, hours: 14, mins: 45, secs: sec < 10 ? `0${sec}` : `${sec}` }
}

export function CoverSection({ onOpen }) {
  return (
    <section
      id="section-cover"
      className="relative flex min-h-[580px] w-full flex-col items-center justify-between overflow-hidden bg-cover bg-center p-6 text-center"
      style={{ backgroundImage: `url('${previewImages.cover}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-inverse-surface/60 via-inverse-surface/30 to-inverse-surface/80"></div>
      <div className="relative z-10 flex flex-col items-center pt-4">
        <span className="inline-flex items-center gap-1 rounded-full bg-surface-container-lowest/80 px-3 py-1 font-label-sm uppercase tracking-widest text-primary shadow-sm backdrop-blur-md">
          <span className="material-symbols-outlined text-[14px]">favorite</span>
          The Wedding Celebration
        </span>
      </div>
      <div className="relative z-10 py-6">
        <h3 className="mb-1 font-label-md uppercase tracking-[0.25em] text-primary-fixed">Pernikahan Suci</h3>
        <h1 className="font-display-hero-mobile text-surface-container-lowest drop-shadow-md md:text-display-hero">
          Putra & Putri
        </h1>
        <p className="mt-2 font-label-lg tracking-wider text-surface-variant">Jumat, 30 Oktober 2026</p>
      </div>
      <div className="relative z-10 flex w-full max-w-xs flex-col items-center gap-4 pb-4">
        <div className="w-full rounded-2xl bg-surface-container-lowest/85 p-4 text-center shadow-lg backdrop-blur-xl">
          <span className="block font-label-sm uppercase tracking-wider text-on-surface-variant">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </span>
          <h2 className="mt-1 font-headline-sm font-bold text-on-surface">Bapak Budi & Partner</h2>
          <span className="mt-1 inline-block rounded-full bg-secondary-container px-2.5 py-0.5 font-label-sm text-on-secondary-container">
            Tamu Undangan Spesial
          </span>
        </div>
        <button
          onClick={onOpen}
          className="group flex w-full transform items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-label-lg text-on-primary shadow-lg transition-all hover:bg-primary/95 active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px] text-amber-300">mail</span>
          <span>Buka Sampul Undangan</span>
          <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-y-0.5">
            keyboard_arrow_down
          </span>
        </button>
      </div>
    </section>
  )
}

export function HeroSection() {
  const c = useCountdown()
  const boxes = [
    [c.days, 'Hari'],
    [c.hours, 'Jam'],
    [c.mins, 'Menit'],
    [c.secs, 'Detik'],
  ]
  return (
    <section id="section-hero" className="relative flex w-full flex-col items-center bg-surface-container-lowest px-5 py-10 text-center">
      <div className="relative mb-6 h-72 w-56 overflow-hidden rounded-b-2xl rounded-t-[112px] bg-surface-container shadow-xl">
        <img className="h-full w-full object-cover" alt="Mempelai Putra dan Putri" src={previewImages.arch} />
        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/30 to-transparent"></div>
      </div>
      <span className="mb-1 font-label-sm uppercase tracking-widest text-primary">
        Maha Suci Allah yang Menciptakan Berpasang-Pasangan
      </span>
      <h2 className="font-headline-lg-mobile text-on-surface sm:text-headline-lg">Putra Pratama & Putri Amanda</h2>
      <p className="mt-2 max-w-xs font-body-md text-body-md text-on-surface-variant">
        Dengan penuh rasa syukur, kami mengundang Anda untuk merayakan momen awal lembaran cinta kami.
      </p>
      <div className="my-6 grid w-full max-w-sm grid-cols-4 gap-2.5">
        {boxes.map(([n, l]) => (
          <div key={l} className="flex flex-col items-center justify-center rounded-2xl bg-surface-container p-3 shadow-sm">
            <span className="font-headline-md font-extrabold text-primary">{n}</span>
            <span className="font-label-sm text-on-surface-variant">{l}</span>
          </div>
        ))}
      </div>
      <a
        className="inline-flex items-center gap-2 rounded-xl bg-surface-container-high px-5 py-2.5 font-label-md text-on-surface shadow-sm transition-all hover:bg-surface-container-highest"
        href="https://calendar.google.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-[18px] text-primary">event</span>
        <span>Simpan ke Google Calendar</span>
      </a>
    </section>
  )
}
