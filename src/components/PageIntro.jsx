export default function PageIntro() {
  return (
    <div className="mb-space-lg flex flex-col justify-between gap-space-lg lg:flex-row lg:items-center">
      <div>
        <div className="mb-1 flex items-center gap-space-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-primary-container"></span>
          <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-outline">
            Ruang Kelola Undangan
          </span>
        </div>
        <h1 className="font-headline-md text-headline-md font-bold text-on-surface">Data Acara</h1>
        <p className="mt-0.5 font-body-md text-body-md text-on-surface-variant">
          Kelola semua undangan digital dan acara spesial Anda di sini
        </p>
      </div>

      <div className="flex max-w-md items-center gap-space-lg rounded-2xl bg-surface-container-lowest p-space-md shadow-sm">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-fixed text-primary">
          <span className="material-symbols-outlined text-[26px]">monetization_on</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <p className="font-label-lg text-label-lg font-bold text-on-surface">Dashboard Afiliator</p>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary"></span>
          </div>
          <p className="truncate font-body-sm text-body-sm text-on-surface-variant">
            Dapatkan komisi ekstra dari setiap undangan teman
          </p>
        </div>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-flex shrink-0 items-center gap-1 rounded-xl bg-primary px-3.5 py-2 font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-on-primary-fixed-variant"
        >
          <span>Buka</span>
          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
        </a>
      </div>
    </div>
  )
}
