import { useState } from 'react'
import { categories, templates } from '../../data/landingExtra.js'
import TemplateCard from './TemplateCard.jsx'

export default function CatalogSection({ onAction }) {
  const [cat, setCat] = useState('Semua Kategori')
  const list = templates.filter(
    (t) => cat === 'Semua Kategori' || t.cat === cat || (cat === 'Khitanan & Tasyakuran' && t.cat === 'Khitanan'),
  )

  return (
    <section className="w-full border-t border-surface-container-high bg-surface px-margin-lg py-space-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-space-lg">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-space-xs text-center">
          <div className="inline-flex items-center gap-space-xs rounded-full bg-surface-container-high px-space-md py-1.5 shadow-sm">
            <span className="material-symbols-outlined text-[16px] text-primary">auto_awesome</span>
            <span className="font-label-md text-label-md font-bold uppercase tracking-wide text-primary">
              Katalog Template Terpopuler
            </span>
          </div>
          <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile tracking-tight text-on-surface sm:text-headline-lg">
            Pilih Desain Favorit Sesuai Momen Spesialmu
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Tersedia puluhan tema elegan dan kekinian. Mudah diedit, responsif di HP tamu, dan siap disebarkan ke WhatsApp.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-space-xs">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={
                c === cat
                  ? 'rounded-full bg-primary-container px-space-md py-2 font-label-md text-label-md font-semibold text-on-primary shadow-sm transition-all duration-200'
                  : 'rounded-full border border-surface-container-high bg-surface-container-lowest px-space-md py-2 font-label-md text-label-md font-medium text-on-surface-variant transition-all duration-200 hover:bg-surface-container-low hover:text-on-surface'
              }
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-gutter-md md:grid-cols-2 lg:grid-cols-4">
          {list.map((t) => (
            <TemplateCard key={t.id} t={t} onAction={onAction} />
          ))}
        </div>
        <div className="flex items-center justify-center pt-space-md">
          <button onClick={() => onAction?.('semua-template')} className="inline-flex items-center gap-space-xs rounded-xl border border-surface-container-high bg-surface-container-lowest px-space-xl py-3.5 font-label-lg text-label-lg font-bold text-on-surface shadow-sm transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-md">
            <span>Lihat 50+ Template Lainnya</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  )
}
