import { galleryImages, timeline } from '../../data/preview.js'

export function GallerySection() {
  return (
    <section id="section-gallery" className="w-full bg-surface-container-low px-5 py-10">
      <div className="mb-8 text-center">
        <span className="font-label-sm uppercase tracking-widest text-primary">Kisah Dua Hati</span>
        <h2 className="font-headline-md text-on-surface">Perjalanan Cinta Kami</h2>
      </div>
      <div className="relative space-y-6 pl-6 before:absolute before:bottom-2 before:left-2.5 before:top-2 before:w-0.5 before:bg-primary-fixed-dim">
        {timeline.map((t) => (
          <div key={t.year} className="relative">
            <div className={`absolute -left-6 top-1 h-3.5 w-3.5 rounded-full border-2 border-surface-container-lowest shadow-sm ${t.hot ? 'bg-secondary' : 'bg-primary'}`}></div>
            <span className={`font-label-sm font-bold ${t.hot ? 'text-secondary' : 'text-primary'}`}>{t.year}</span>
            <h4 className="mt-0.5 font-headline-sm text-base text-on-surface">{t.title}</h4>
            <p className="mt-1 font-body-sm text-on-surface-variant">{t.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <h3 className="mb-4 text-center font-headline-sm text-on-surface">Galeri Kenangan Pre-Wedding</h3>
        <div className="grid grid-cols-2 gap-3">
          {galleryImages.map((src, i) => (
            <div key={i} className="group relative h-44 overflow-hidden rounded-2xl bg-surface-container shadow-sm">
              <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" alt={`Galeri pre-wedding ${i + 1}`} src={src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function QrArt({ className = 'h-40 w-40 text-on-surface' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 100 100">
      <rect fill="none" height="28" rx="4" stroke="currentColor" strokeWidth="5" width="28" x="5" y="5"></rect>
      <rect fill="currentColor" height="14" width="14" x="12" y="12"></rect>
      <rect fill="none" height="28" rx="4" stroke="currentColor" strokeWidth="5" width="28" x="67" y="5"></rect>
      <rect fill="currentColor" height="14" width="14" x="74" y="12"></rect>
      <rect fill="none" height="28" rx="4" stroke="currentColor" strokeWidth="5" width="28" x="5" y="67"></rect>
      <rect fill="currentColor" height="14" width="14" x="12" y="74"></rect>
      <rect height="8" width="8" x="42" y="10"></rect>
      <rect height="6" width="6" x="52" y="20"></rect>
      <rect height="6" width="10" x="40" y="32"></rect>
      <rect height="8" width="8" x="10" y="44"></rect>
      <rect height="6" width="6" x="25" y="48"></rect>
      <rect fill="currentColor" height="16" rx="2" width="16" x="42" y="44"></rect>
      <rect height="12" width="8" x="68" y="44"></rect>
      <rect height="8" width="8" x="84" y="48"></rect>
      <rect height="10" width="8" x="44" y="68"></rect>
      <rect height="8" width="10" x="62" y="68"></rect>
      <rect height="16" width="16" x="76" y="76"></rect>
      <rect height="8" width="10" x="54" y="82"></rect>
    </svg>
  )
}
