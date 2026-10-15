import Accordion, { Field, TextArea } from './Accordion.jsx'

export function GaleriSection({ open, onToggle, onUpload }) {
  return (
    <Accordion id="acc-5" icon="collections" title="Galery Foto" open={open} onToggle={onToggle}>
      <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-outline-variant/40 bg-surface-container-low p-8 text-center">
        <span className="material-symbols-outlined text-[40px] text-primary">cloud_upload</span>
        <p className="font-label-lg text-label-lg font-semibold text-on-surface">Tarik & lepas foto prewedding di sini</p>
        <p className="font-body-sm text-body-sm text-outline">Atau klik tombol di bawah untuk memilih maksimal 10 foto</p>
        <button type="button" onClick={onUpload} className="mt-2 rounded-xl bg-primary px-4 py-2 font-label-md text-label-md text-on-primary shadow-sm hover:brightness-105">
          Unggah Foto Galeri
        </button>
      </div>
    </Accordion>
  )
}

export function UcapanSection({ open, onToggle, form, set }) {
  return (
    <Accordion id="acc-6" icon="format_quote" title="Ucapan & Kata-Kata" open={open} onToggle={onToggle}>
      <Field label="Pilihan Kutipan Doa / Ayat">
        <TextArea rows={3} value={form.quote} onChange={(e) => set({ quote: e.target.value })} placeholder="Contoh: Dan di antara tanda-tanda kekuasaan-Nya... (QS. Ar-Rum: 21)" />
      </Field>
    </Accordion>
  )
}

function SwitchRow({ title, desc, checked, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <div>
        <p className="font-label-lg text-label-lg font-semibold text-on-surface">{title}</p>
        <p className="font-body-sm text-body-sm text-outline">{desc}</p>
      </div>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="h-5 w-5 cursor-pointer rounded-md accent-primary" />
    </div>
  )
}

export function SettingSection({ open, onToggle, form, set }) {
  return (
    <Accordion id="acc-7" icon="display_settings" title="Setting" open={open} onToggle={onToggle}>
      <SwitchRow title="Putar Musik Otomatis (Autoplay Audio)" desc="Musik background akan otomatis menyala saat buku tamu terbuka." checked={form.autoplay} onChange={(v) => set({ autoplay: v })} />
      <SwitchRow title="Tampilkan Kolom Angpao Digital" desc="Tamu dapat menyalin nomor rekening bank atau dompet digital." checked={form.angpao} onChange={(v) => set({ angpao: v })} />
    </Accordion>
  )
}

export function WaTampilanSection({ open, onToggle, form, set }) {
  return (
    <Accordion id="acc-8" icon="smartphone" title="Tampilan WA" open={open} onToggle={onToggle}>
      <Field label="Template Teks Share WhatsApp">
        <TextArea rows={4} value={form.waTemplate} onChange={(e) => set({ waTemplate: e.target.value })} placeholder="Kepada Yth. Bapak/Ibu/Saudara/i [Nama Tamu]..." />
      </Field>
    </Accordion>
  )
}

export function LainnyaSection({ open, onToggle, onDetail }) {
  return (
    <Accordion id="acc-9" icon="more_horiz" title="Lainnya" open={open} onToggle={onToggle}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-label-lg text-label-lg font-semibold text-on-surface">Protokol Kesehatan & Dresscode</p>
          <p className="font-body-sm text-body-sm text-outline">Informasi tambahan mengenai warna busana tamu dan pedoman acara.</p>
        </div>
        <button type="button" onClick={onDetail} className="rounded-lg bg-surface-container px-3.5 py-1.5 font-label-md text-label-md text-on-surface hover:bg-surface-container-high">
          Atur Detail
        </button>
      </div>
    </Accordion>
  )
}
