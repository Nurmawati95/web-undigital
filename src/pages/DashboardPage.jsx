import { useMemo, useState } from 'react'
import PageIntro from '../components/PageIntro.jsx'
import PromoBanners from '../components/PromoBanners.jsx'
import EventCard from '../components/EventCard.jsx'

export default function DashboardPage({ events, query, onAddEvent, onCardAction, onPromo, onCatalog }) {
  const filtered = useMemo(() => {
    const q = (query || '').trim().toLowerCase()
    if (!q) return events
    return events.filter((e) => e.title.toLowerCase().includes(q) || e.date.toLowerCase().includes(q))
  }, [events, query])

  return (
    <div className="flex w-full flex-col">
      <PageIntro />
      <section className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm sm:p-space-xl">
        <div className="flex flex-col justify-between gap-space-md pb-space-lg sm:flex-row sm:items-center">
          <div className="flex items-center gap-space-md">
            <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Data Acara</h2>
            <span className="rounded-full bg-surface-container-high px-3 py-1 font-label-md text-label-md font-semibold text-primary">
              {filtered.length} Acara Aktif
            </span>
          </div>
          <button
            type="button"
            onClick={onAddEvent}
            className="inline-flex cursor-pointer items-center gap-2 self-start rounded-full bg-secondary px-5 py-2.5 font-label-lg text-label-lg text-on-secondary shadow-md transition-all hover:bg-on-secondary-container sm:self-auto"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span>Tambah Acara</span>
          </button>
        </div>
        <PromoBanners onAction={onPromo} />
        {filtered.length === 0 ? (
          <div className="rounded-xl bg-surface-container-low p-space-xl text-center">
            <p className="font-label-lg text-label-lg font-semibold text-on-surface">Tidak ada acara yang cocok</p>
            <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Coba kata kunci lain atau tambah acara baru.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-space-lg pt-space-xs lg:grid-cols-3">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} onAction={onCardAction} />
            ))}
          </div>
        )}
        <div className="mt-space-xl flex flex-col items-center justify-between gap-space-md pt-space-lg text-on-surface-variant sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-primary">info</span>
            <span className="font-body-sm text-body-sm">
              Butuh template undangan syukuran, aqiqah, atau ulang tahun? Jelajahi ratusan desain di galeri tema.
            </span>
          </div>
          <button onClick={onCatalog} className="flex shrink-0 items-center gap-1 font-label-md text-label-md font-semibold text-primary hover:underline">
            <span>Buka Katalog Tema</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>
      </section>
    </div>
  )
}
