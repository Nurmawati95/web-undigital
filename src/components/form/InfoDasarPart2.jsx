import { coverImage, templateOptions } from '../../data/formulir.js'

export function CoverField({ hdUpload, onHdChange, onFile, onGallery }) {
  return (
    <div className="flex flex-col gap-2 pt-2">
      <label className="flex items-center gap-2 font-label-lg text-label-lg font-bold text-on-surface">
        <span>Foto Acara / Sampul Utama</span>
        <span className="rounded-md bg-primary-fixed px-2 py-0.5 font-label-sm text-label-sm text-primary">
          Rekomendasi 1:1
        </span>
      </label>
      <div className="flex flex-col items-start gap-5 rounded-2xl bg-surface-container-low p-4 sm:flex-row sm:items-center sm:p-5">
        <div className="group relative h-[110px] w-[110px] shrink-0 overflow-hidden rounded-xl shadow-sm">
          <img src={coverImage} alt="Sampul utama undangan" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center bg-on-surface/30 text-on-primary opacity-0 transition-opacity group-hover:opacity-100">
            <span className="material-symbols-outlined text-[24px]">zoom_in</span>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <label className="shadow-xs inline-flex cursor-pointer items-center gap-2 rounded-xl bg-surface-container-lowest px-4 py-2 font-label-lg text-label-lg text-on-surface transition-all hover:bg-surface-container-high active:scale-95">
              <span className="material-symbols-outlined text-[18px] text-primary">upload_file</span>
              <span>Pilih File</span>
              <input accept="image/*" className="hidden" type="file" onChange={onFile} />
            </label>
            <button
              type="button"
              onClick={onGallery}
              className="inline-flex items-center gap-2 rounded-full bg-primary-container px-4 py-2 font-label-lg text-label-lg text-on-primary shadow-sm transition-all hover:brightness-105 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">perm_media</span>
              <span>Pilih Foto Lain (Tanpa Foto Asli)</span>
            </button>
          </div>
          <div className="flex items-center gap-2 font-body-sm text-body-sm text-outline">
            <span className="material-symbols-outlined text-[16px]">check_circle</span>
            <span>Format: JPG, PNG maks. 5MB (Dimensi min. 800 x 800 pixel)</span>
          </div>
          <div className="flex items-center gap-2.5 pt-1">
            <label className="relative flex cursor-pointer select-none items-center gap-2.5">
              <input type="checkbox" checked={hdUpload} onChange={(e) => onHdChange(e.target.checked)} className="h-5 w-5 cursor-pointer rounded-md accent-primary focus:ring-primary" />
              <span className="font-label-md text-label-md text-on-surface">Upload tanpa kompresi [HD]</span>
            </label>
            <span className="shadow-xs inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 font-label-sm text-label-sm font-bold text-amber-800">
              <span className="material-symbols-outlined text-[13px] text-amber-600">stars</span>
              PREMIUM
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TemplateField({ value, onChange, onCatalog }) {
  return (
    <div className="flex flex-col gap-1.5 pt-2">
      <div className="flex items-center justify-between">
        <label className="font-label-lg text-label-lg font-bold text-on-surface">Pilih Template Desain</label>
        <button onClick={onCatalog} className="flex items-center gap-1 font-label-md text-label-md text-primary hover:underline">
          <span>Katalog Semua Tema</span>
          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
        </button>
      </div>
      <div className="relative rounded-xl bg-surface-container-low transition-all focus-within:bg-surface-container-lowest focus-within:shadow-[0_0_0_2px_#29b6f6]">
        <div className="pointer-events-none absolute left-3.5 top-1/2 flex -translate-y-1/2 items-center text-primary">
          <span className="material-symbols-outlined text-[20px]">style</span>
        </div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full cursor-pointer appearance-none rounded-xl bg-transparent py-3.5 pl-11 pr-10 font-body-md text-body-md font-semibold text-on-surface focus:outline-none"
        >
          {templateOptions.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3.5 top-1/2 flex -translate-y-1/2 items-center text-outline">
          <span className="material-symbols-outlined text-[20px]">arrow_drop_down</span>
        </div>
      </div>
      <div className="flex items-center gap-2 pt-1 font-body-sm text-body-sm text-outline">
        <span className="rounded bg-surface-container px-2 py-0.5 font-label-sm text-label-sm text-on-surface-variant">Free Tier</span>
        <span>Template ini mencakup fitur RSVP WhatsApp, galeri 10 foto, peta Google Maps, dan buku tamu digital.</span>
      </div>
    </div>
  )
}
