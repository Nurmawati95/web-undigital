import Accordion from './Accordion.jsx'

export default function InfoDasarShell({ open, onToggle, children }) {
  return (
    <Accordion id="acc-1" icon="tune" title="Info Dasar & Tampilan" open={open} onToggle={onToggle}>
      {children}
    </Accordion>
  )
}

export function WaField({ value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1.5 font-label-lg text-label-lg text-on-surface">
        <span>No WhatsApp Penerima Notifikasi / Pesan</span>
        <span className="text-error">*</span>
      </label>
      <div className="relative flex items-center rounded-xl bg-surface-container-low transition-all focus-within:bg-surface-container-lowest focus-within:shadow-[0_0_0_2px_#29b6f6]">
        <div className="flex shrink-0 items-center gap-1 rounded-l-xl bg-surface-container px-4 py-3 text-body-md font-semibold text-on-surface">
          <span className="material-symbols-outlined text-[18px] text-secondary">chat</span>
          <span>+62</span>
        </div>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/\D/g, ''))}
          placeholder="8xxxxxxxxxx"
          type="tel"
          className="w-full bg-transparent px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
        />
      </div>
      <p className="flex items-center gap-1.5 pt-0.5 font-body-sm text-body-sm text-outline">
        <span className="material-symbols-outlined text-[16px] text-primary">info</span>
        <span>Nomor WhatsApp ini digunakan untuk menerima notifikasi ucapan doa dan konfirmasi kehadiran (RSVP) dari tamu.</span>
      </p>
    </div>
  )
}

export function NameSlugFields({ eventName, slug, onEventName, onSlug, onCopy }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <label className="flex items-center gap-1.5 font-label-lg text-label-lg text-on-surface">
          <span>Nama Acara / Pasangan</span>
          <span className="text-error">*</span>
        </label>
        <div className="flex items-center rounded-xl bg-surface-container-low px-4 py-1.5 transition-all focus-within:bg-surface-container-lowest focus-within:shadow-[0_0_0_2px_#29b6f6]">
          <input
            value={eventName}
            onChange={(e) => onEventName(e.target.value)}
            placeholder="Contoh: The Wedding of Putra & Putri"
            className="w-full bg-transparent py-2 font-body-md text-body-md font-semibold text-on-surface placeholder:text-outline focus:outline-none"
          />
        </div>
        <p className="font-body-sm text-body-sm text-outline">Ditampilkan pada judul halaman web dan pratinjau pesan chat.</p>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="flex items-center justify-between font-label-lg text-label-lg text-on-surface">
          <span>Link Undangan (Custom Slug)</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-secondary-container px-2 py-0.5 font-label-sm text-label-sm font-bold text-on-secondary-container">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span> Tersedia
          </span>
        </label>
        <div className="relative flex items-center rounded-xl bg-surface-container-low transition-all focus-within:bg-surface-container-lowest focus-within:shadow-[0_0_0_2px_#29b6f6]">
          <span className="shrink-0 rounded-l-xl bg-surface-container px-3.5 py-3 font-label-md text-label-md text-outline">
            undigital.id/
          </span>
          <input
            value={slug}
            onChange={(e) => onSlug(e.target.value)}
            placeholder="nama-slug-acara"
            className="w-full bg-transparent px-3 py-3 font-body-md text-body-md font-semibold text-primary focus:outline-none"
          />
          <button type="button" title="Salin Link" onClick={onCopy} className="pr-3 text-outline transition-colors hover:text-primary">
            <span className="material-symbols-outlined text-[20px]">content_copy</span>
          </button>
        </div>
        <p className="font-body-sm text-body-sm text-outline">Gunakan huruf kecil dan tanda hubung (-), tanpa spasi atau simbol.</p>
      </div>
    </div>
  )
}
