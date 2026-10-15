import { quickActions } from '../../data/formulir.js'

export default function FormHeader({ eventTitle, onAction, onBack }) {
  return (
    <div className="mx-auto mb-space-lg flex w-full max-w-5xl flex-col gap-space-md">
      <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-outline">
        <button onClick={() => onBack?.('dashboard')} className="flex items-center gap-1 transition-colors hover:text-primary">
          <span className="material-symbols-outlined text-[16px]">home</span>
          <span>Dashboard</span>
        </button>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <button onClick={() => onBack?.('dashboard')} className="cursor-pointer transition-colors hover:text-primary">
          Data Acara
        </button>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="max-w-[280px] truncate font-semibold text-on-surface sm:max-w-md">
          Edit Data Undangan ({eventTitle})
        </span>
      </div>

      <div className="flex flex-col justify-between gap-space-sm rounded-2xl bg-surface-container-lowest p-space-md shadow-sm sm:flex-row sm:items-center">
        <div className="flex items-center gap-space-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-fixed text-primary shadow-inner">
            <span className="material-symbols-outlined text-[26px]">edit_calendar</span>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-space-sm">
              <h1 className="font-headline-sm text-headline-sm tracking-tight text-on-surface">
                Formulir Pengaturan Undangan
              </h1>
              <span className="flex items-center gap-1 rounded-full bg-secondary-container px-2.5 py-0.5 font-label-sm text-label-sm text-on-secondary-container shadow-xs">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary"></span>
                Live Preview
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Lengkapi detail mempelai, jadwal prosesi, dan visual cover digital Anda.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-space-xs">
          <button
            type="button"
            onClick={() => onAction?.('open-link')}
            className="flex items-center gap-1.5 rounded-xl bg-surface-container-low px-3.5 py-1.5 font-label-md text-label-md text-on-surface transition-all hover:bg-surface-container"
          >
            <span className="material-symbols-outlined text-[18px] text-primary">visibility</span>
            <span>Buka Tautan</span>
          </button>
        </div>
      </div>

      <div className="scrollbar-none flex w-full items-center gap-2 overflow-x-auto pb-1 pt-0.5">
        {quickActions.map((qa) => (
          <button
            key={qa.id}
            type="button"
            onClick={() => onAction?.(qa.id)}
            className="flex shrink-0 items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 font-label-md text-label-md text-on-secondary shadow-sm transition-all hover:brightness-110 active:scale-95"
          >
            <span className="material-symbols-outlined text-[16px]">{qa.icon}</span>
            <span>{qa.label}</span>
          </button>
        ))}
        <button
          type="button"
          aria-label="Opsi Lainnya"
          onClick={() => onAction?.('more')}
          className="shadow-xs ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant transition-all hover:bg-surface-container-highest"
        >
          <span className="material-symbols-outlined text-[18px]">more_horiz</span>
        </button>
      </div>
    </div>
  )
}
