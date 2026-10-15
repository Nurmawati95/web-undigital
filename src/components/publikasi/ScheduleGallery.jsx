import { Icon } from './Icon.jsx'
import { PH, publisTimeline } from '../../data/publikasi.js'

function EventCard({ icon, title, date, time, place }) {
  return (
    <div className="relative mb-4 overflow-hidden rounded-2xl border border-champagne-200/90 bg-white p-5 shadow-sm">
      <div className="pointer-events-none absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-champagne-100/50"></div>
      <div className="mb-2 flex items-center gap-2 text-brand-600">
        <Icon name={icon} className="w-4 h-4" />
        <h3 className="font-serif text-lg font-bold text-slate-900">{title}</h3>
      </div>
      <div className="space-y-1.5 text-xs text-slate-600">
        <p className="flex items-center gap-2 font-medium text-slate-800">
          <Icon name="calendar" className="w-3.5 h-3.5 text-slate-400" /> {date}
        </p>
        <p className="flex items-center gap-2">
          <Icon name="clock" className="w-3.5 h-3.5 text-slate-400" /> {time}
        </p>
        <p className="flex items-start gap-2 pt-1">
          <Icon name="mapPin" className="w-3.5 h-3.5 text-slate-400 mt-0.5" />
          <span>{place}</span>
        </p>
      </div>
    </div>
  )
}

export function ScheduleMaps({ onMaps }) {
  return (
    <section className="bg-champagne-50/70 px-5 py-8">
      <div className="mb-6 text-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-champagne-700">Waktu & Tempat</span>
        <h2 className="mt-0.5 font-serif text-2xl font-bold text-slate-900">Rangkaian Acara</h2>
        <div className="mx-auto mt-2 h-0.5 w-12 bg-champagne-300"></div>
      </div>
      <EventCard icon="bookOpen" title="Akad Nikah" date="Minggu, 18 Oktober 2026" time="08.00 - 10.00 WIB" place="Grand Ballroom Hotel Mulia Senayan, Jakarta Pusat" />
      <EventCard icon="partyPopper" title="Resepsi Pernikahan" date="Minggu, 18 Oktober 2026" time="11.00 - 14.00 WIB" place="Grand Ballroom Hotel Mulia Senayan, Jakarta Pusat" />
      <div className="overflow-hidden rounded-2xl border border-champagne-200/90 bg-white p-3 shadow-sm">
        <div className="relative mb-3 h-36 w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-100">
          <img alt="Peta Lokasi Gedung" className="h-full w-full object-cover filter contrast-125" src={PH} />
          <div className="absolute inset-0 bg-slate-900/10"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce rounded-full bg-red-500 p-2 text-white shadow-lg ring-4 ring-white">
            <Icon name="mapPin" className="w-4 h-4" />
          </div>
        </div>
        <button
          onClick={onMaps}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-600"
        >
          <Icon name="navigation" className="w-3.5 h-3.5" /> Petunjuk Lokasi (Google Maps)
        </button>
      </div>
    </section>
  )
}

export function GalleryStory() {
  return (
    <section className="bg-white px-5 py-8">
      <div className="mb-6 text-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-champagne-700">Momen Bahagia</span>
        <h2 className="mt-0.5 font-serif text-2xl font-bold text-slate-900">Galeri Foto</h2>
        <div className="mx-auto mt-2 h-0.5 w-12 bg-champagne-300"></div>
      </div>
      <div className="mb-8 grid grid-cols-2 gap-2.5">
        <div className="space-y-2.5">
          <img alt="Prewedding 1" className="h-40 w-full rounded-xl object-cover shadow-sm" src={PH} />
          <img alt="Prewedding 2" className="h-28 w-full rounded-xl object-cover shadow-sm" src={PH} />
        </div>
        <div className="space-y-2.5">
          <img alt="Prewedding 3" className="h-28 w-full rounded-xl object-cover shadow-sm" src={PH} />
          <img alt="Prewedding 4" className="h-40 w-full rounded-xl object-cover shadow-sm" src={PH} />
        </div>
      </div>
      <div className="border-t border-slate-100 pt-6">
        <h3 className="mb-4 text-center font-serif text-lg font-bold text-slate-800">Kisah Cinta Kami</h3>
        <div className="relative space-y-4 pl-6 before:absolute before:bottom-2 before:left-2 before:top-2 before:w-0.5 before:bg-champagne-200">
          {publisTimeline.map((t) => (
            <div key={t.title} className="relative">
              <div className={`absolute -left-6 top-1 h-3.5 w-3.5 rounded-full border-2 border-white ${t.dot}`}></div>
              <span className={`text-[10px] font-bold uppercase ${t.color}`}>{t.title}</span>
              <p className="mt-0.5 text-xs text-slate-600">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
