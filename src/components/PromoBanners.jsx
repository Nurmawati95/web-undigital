const banners = [
  {
    id: 'cetak',
    badgeIcon: 'stars',
    badgeLabel: 'Layanan Baru',
    badgeClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    title: 'Cetak Undangan Fisik Rp 1.900',
    suffix: '/lbr',
    description: 'Kombinasikan undangan digital dengan cetak premium langsung dikirim ke rumah.',
    cta: 'Pesan Sekarang',
    decoIcon: 'mark_email_read',
    decoBg: 'bg-surface-container-high/60',
  },
  {
    id: 'afiliasi',
    badgeIcon: 'trending_up',
    badgeLabel: 'Passive Income',
    badgeClass: 'bg-primary-fixed text-on-primary-fixed',
    title: 'Program Afiliasi Komisi 20RB',
    suffix: '',
    description: 'Bagikan link referral Anda dan nikmati komisi langsung setiap ada pesanan baru.',
    cta: 'Pelajari & Gabung',
    decoIcon: 'savings',
    decoBg: 'bg-primary-fixed/40',
  },
]

export default function PromoBanners({ onAction }) {
  return (
    <div className="my-space-lg grid grid-cols-1 gap-space-lg md:grid-cols-2">
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="group relative flex items-center justify-between overflow-hidden rounded-xl bg-surface-container-low p-space-lg"
        >
          <div
            className={`pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-full transition-transform group-hover:scale-110 ${banner.decoBg}`}
          ></div>
          <div className="pointer-events-none absolute bottom-4 right-6 select-none text-surface-container-highest">
            <span className="material-symbols-outlined text-[80px] opacity-40">{banner.decoIcon}</span>
          </div>

          <div className="relative z-10 max-w-sm pr-space-md">
            <span
              className={`mb-2 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-label-sm text-label-sm ${banner.badgeClass}`}
            >
              <span className="material-symbols-outlined text-[14px]">{banner.badgeIcon}</span>
              {banner.badgeLabel}
            </span>
            <h3 className="font-headline-sm text-headline-sm font-bold leading-tight text-on-surface">
              {banner.title}
              {banner.suffix && (
                <span className="font-label-sm text-label-sm font-normal text-on-surface-variant">
                  {banner.suffix}
                </span>
              )}
            </h3>
            <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">{banner.description}</p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              type="button"
              onClick={() => onAction?.(banner.id)}
              className="cursor-pointer whitespace-nowrap rounded-xl bg-primary px-4 py-2.5 font-label-md text-label-md font-semibold text-on-primary shadow-sm transition-colors hover:bg-on-primary-fixed-variant"
            >
              {banner.cta}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
