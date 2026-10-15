import { useState } from 'react'
import FormHeader from '../components/form/FormHeader.jsx'
import InfoDasarShell, { WaField, NameSlugFields } from '../components/form/InfoDasarPart1.jsx'
import { CoverField, TemplateField } from '../components/form/InfoDasarPart2.jsx'
import { MempelaiPria, MempelaiWanita, AcaraSection } from '../components/form/CoupleSections.jsx'
import { GaleriSection, UcapanSection, SettingSection, WaTampilanSection, LainnyaSection } from '../components/form/ExtraSections.jsx'
import { initialForm, slugify } from '../data/formulir.js'

export default function FormulirEditPage({ eventTitle, onBack, notify }) {
  const [form, setForm] = useState(() => initialForm(eventTitle))
  const [openAcc, setOpenAcc] = useState(1)
  const patch = (p) => setForm((f) => ({ ...f, ...p }))
  const toggle = (n) => setOpenAcc((cur) => (cur === n ? 0 : n))

  const quick = (id) => notify(`Membuka ${id} (demo)…`)

  const validate = () => {
    if (!form.wa) return 'Isi No WhatsApp dulu.'
    if (!form.eventName.trim()) return 'Isi Nama Acara dulu.'
    if (!form.slug) return 'Isi slug link undangan.'
    return ''
  }

  const onSave = () => {
    const err = validate()
    notify(err ? `Belum bisa simpan: ${err}` : `Tersimpan: ${form.eventName} (undigital.id/${form.slug})`)
  }

  return (
    <div className="flex w-full flex-col pb-28">
      <FormHeader eventTitle={form.eventName} onBack={onBack} onAction={quick} />

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3">
        <InfoDasarShell open={openAcc === 1} onToggle={() => toggle(1)}>
          <WaField value={form.wa} onChange={(wa) => patch({ wa })} />
          <NameSlugFields
            eventName={form.eventName}
            slug={form.slug}
            onEventName={(v) => patch({ eventName: v, slug: slugify(v) || form.slug })}
            onSlug={(v) => patch({ slug: slugify(v) })}
            onCopy={() => notify(`Link disalin: undigital.id/${form.slug}`)}
          />
          <CoverField
            hdUpload={form.hdUpload}
            onHdChange={(hdUpload) => patch({ hdUpload })}
            onFile={(e) => notify(`Cover dipilih: ${e.target.files?.[0]?.name ?? 'file'}`)}
            onGallery={() => notify('Membuka galeri preset (demo)…')}
          />
          <TemplateField value={form.template} onChange={(template) => patch({ template })} onCatalog={() => notify('Membuka katalog tema (demo)…')} />
        </InfoDasarShell>

        <MempelaiPria open={openAcc === 2} onToggle={() => toggle(2)} form={form} set={patch} />
        <MempelaiWanita open={openAcc === 3} onToggle={() => toggle(3)} form={form} set={patch} />
        <AcaraSection open={openAcc === 4} onToggle={() => toggle(4)} form={form} set={patch} />
        <GaleriSection open={openAcc === 5} onToggle={() => toggle(5)} onUpload={() => notify('Pilih maksimal 10 foto (demo)…')} />
        <UcapanSection open={openAcc === 6} onToggle={() => toggle(6)} form={form} set={patch} />
        <SettingSection open={openAcc === 7} onToggle={() => toggle(7)} form={form} set={patch} />
        <WaTampilanSection open={openAcc === 8} onToggle={() => toggle(8)} form={form} set={patch} />
        <LainnyaSection open={openAcc === 9} onToggle={() => toggle(9)} onDetail={() => notify('Membuka detail dresscode (demo)…')} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between bg-surface-container-lowest/90 px-space-md py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:px-space-xl lg:left-[260px]">
        <button type="button" onClick={() => onBack('dashboard')} className="shadow-xs flex items-center gap-2 rounded-xl bg-surface-container-high px-4 py-2.5 font-label-lg text-label-lg text-on-surface transition-all hover:bg-surface-container-highest active:scale-95">
          <span className="material-symbols-outlined text-[20px]">menu</span>
          <span>Menu</span>
        </button>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => notify(`Mengaktifkan: ${form.eventName}`)} className="flex items-center gap-2 rounded-xl bg-secondary px-5 py-2.5 font-label-lg text-label-lg font-bold text-on-secondary shadow-sm transition-all hover:brightness-110 active:scale-95">
            <span className="material-symbols-outlined text-[20px]">bolt</span>
            <span>Aktifkan</span>
          </button>
          <button type="button" onClick={onSave} className="flex items-center gap-2 rounded-xl bg-primary-container px-6 py-2.5 font-label-lg text-label-lg font-bold text-on-primary shadow-sm transition-all hover:brightness-105 active:scale-95">
            <span className="material-symbols-outlined text-[20px]">save</span>
            <span>Simpan</span>
          </button>
        </div>
      </div>
    </div>
  )
}
