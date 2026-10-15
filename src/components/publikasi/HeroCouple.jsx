import { useEffect, useState } from 'react'
import { Icon } from './Icon.jsx'
import { PH } from '../../data/publikasi.js'

export function useTickingSeconds(start = 12) {
  const [sec, setSec] = useState(start)
  useEffect(() => {
    const t = window.setInterval(() => setSec((s) => (s - 1 + 60) % 60), 1000)
    return () => window.clearInterval(t)
  }, [])
  return sec < 10 ? `0${sec}` : `${sec}`
}

export function HeroCountdown() {
  const secs = useTickingSeconds(12)
  const boxes = [
    ['24', 'Hari', false],
    ['08', 'Jam', false],
    ['45', 'Menit', false],
    [secs, 'Detik', true],
  ]
  return (
    <section className="relative flex min-h-[520px] flex-col items-center justify-between bg-gradient-to-b from-champagne-100 via-champagne-50 to-white px-6 pb-8 pt-14 text-center">
      <div className="arch-frame relative mb-4 h-60 w-48 overflow-hidden border-4 border-white bg-slate-200 shadow-xl">
        <img alt="Mempelai Putra dan Putri" className="h-full w-full object-cover" src={PH} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>
      <div className="space-y-1">
        <p className="font-serif text-xs uppercase italic tracking-[0.2em] text-champagne-700">Walimatul &apos;Ursy</p>
        <h1 className="font-script text-4xl leading-tight text-slate-900">Putra & Putri</h1>
        <p className="text-xs font-semibold text-slate-600">Minggu, 18 Oktober 2026</p>
      </div>
      <div className="my-4 grid w-full max-w-[280px] grid-cols-4 gap-2">
        {boxes.map(([n, l, hot]) => (
          <div key={l} className="flex flex-col items-center rounded-xl border border-champagne-200/80 bg-white px-1 py-2 shadow-sm">
            <span className={`font-sans text-base font-bold leading-none ${hot ? 'text-brand-600' : 'text-slate-800'}`}>{n}</span>
            <span className="mt-1 text-[9px] uppercase tracking-wider text-slate-400">{l}</span>
          </div>
        ))}
      </div>
      <button className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow transition hover:bg-slate-800">
        <Icon name="calendarPlus" className="w-3.5 h-3.5 text-brand-300" /> Simpan ke Kalender
      </button>
    </section>
  )
}

function Person({ name, desc, ig }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-3 h-24 w-24 rounded-full bg-gradient-to-tr from-amber-300 to-champagne-200 p-1 shadow-md">
        <img alt={name} className="h-full w-full rounded-full object-cover" src={PH} />
      </div>
      <h3 className="font-serif text-xl font-bold text-slate-900">{name}</h3>
      <p className="mt-0.5 text-xs text-slate-500">{desc}</p>
      <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-pink-100 bg-pink-50 px-3 py-1 text-[11px] font-medium text-pink-600">
        <Icon name="instagram" className="w-3 h-3" /> {ig}
      </span>
    </div>
  )
}

export function CoupleProfile() {
  return (
    <section className="bg-white px-5 py-8 text-center">
      <div className="mx-auto mb-8 max-w-xs">
        <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-champagne-100 text-champagne-700">
          <Icon name="heart" className="w-4 h-4 fill-champagne-700/20" />
        </div>
        <p className="font-serif text-xs italic leading-relaxed text-slate-600">
          &quot;Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu
          sendiri, agar kamu cenderung dan merasa tenteram kepadanya...&quot;
        </p>
        <p className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-champagne-800">(QS. Ar-Rum: 21)</p>
      </div>
      <div className="mb-6">
        <Person name="Putra Pratama, S.Kom" desc="Putra pertama dari Bapak Hartono & Ibu Nurul" ig="@putra.pratama" />
      </div>
      <div className="my-2">
        <span className="font-script text-3xl text-champagne-700">&</span>
      </div>
      <Person name="Putri Amanda, S.Ds" desc="Putri kedua dari Bapak Bambang & Ibu Sri Wahyuni" ig="@putriamanda" />
    </section>
  )
}
