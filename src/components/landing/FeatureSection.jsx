import { features } from '../../data/landingExtra.js'

export default function FeatureSection() {
  return (
    <section className="w-full bg-surface-container-low px-margin-lg py-space-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-space-lg">
        <div className="flex flex-col justify-between gap-space-sm md:flex-row md:items-end">
          <div className="flex flex-col gap-1">
            <span className="font-label-md text-label-md font-bold uppercase tracking-wider text-primary">
              Kenapa Pilih UNDIGITAL?
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile tracking-tight text-on-surface sm:text-headline-lg">
              Fitur Lengkap, Praktis & Diterima Hangat Tamu
            </h2>
          </div>
          <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
            Mulai dari manajemen tamu WhatsApp otomatis hingga amplop digital QRIS tanpa potongan biaya.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-gutter-md md:grid-cols-3">
          {features.map((f) => (
            <div key={f.id} className="flex flex-col gap-space-sm rounded-2xl bg-surface-container-lowest p-space-lg shadow-md transition-all hover:shadow-lg">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${f.iconWrap}`}>
                <span className="material-symbols-outlined text-[28px]">{f.icon}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">{f.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{f.desc}</p>
              <div className="mt-auto flex items-center gap-space-xs pt-space-xs">
                {f.tags.map((t) => (
                  <span key={t.label} className={`rounded-md bg-surface-container-high px-2.5 py-1 text-xs font-semibold ${t.color}`}>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
