import Accordion, { Field, TextInput, TextArea } from './Accordion.jsx'

const pair = 'grid grid-cols-1 gap-5 md:grid-cols-2'

export function MempelaiPria({ open, onToggle, form, set }) {
  return (
    <Accordion id="acc-2" icon="person" title="Mempelai Pria" open={open} onToggle={onToggle}>
      <div className={pair}>
        <Field label="Nama Lengkap Pengantin Pria">
          <TextInput value={form.groomFull} onChange={(e) => set({ groomFull: e.target.value })} placeholder="Putra Pratama, S.Kom" />
        </Field>
        <Field label="Nama Panggilan">
          <TextInput value={form.groomNick} onChange={(e) => set({ groomNick: e.target.value })} placeholder="Putra" />
        </Field>
      </div>
      <Field label="Nama Orang Tua (Ayah & Ibu)">
        <TextInput value={form.groomParents} onChange={(e) => set({ groomParents: e.target.value })} placeholder="Putra dari Bpk. Bambang Sutrisno & Ibu Sri Wahyuni" />
      </Field>
    </Accordion>
  )
}

export function MempelaiWanita({ open, onToggle, form, set }) {
  return (
    <Accordion id="acc-3" icon="favorite" title="Mempelai Wanita" open={open} onToggle={onToggle}>
      <div className={pair}>
        <Field label="Nama Lengkap Pengantin Wanita">
          <TextInput value={form.brideFull} onChange={(e) => set({ brideFull: e.target.value })} placeholder="Putri Larasati, S.Ds" />
        </Field>
        <Field label="Nama Panggilan">
          <TextInput value={form.brideNick} onChange={(e) => set({ brideNick: e.target.value })} placeholder="Putri" />
        </Field>
      </div>
      <Field label="Nama Orang Tua (Ayah & Ibu)">
        <TextInput value={form.brideParents} onChange={(e) => set({ brideParents: e.target.value })} placeholder="Putri dari Bpk. Hendro Kartiko & Ibu Nurul Hasanah" />
      </Field>
    </Accordion>
  )
}

export function AcaraSection({ open, onToggle, form, set }) {
  return (
    <Accordion id="acc-4" icon="location_on" title="Alamat & Tanggal Acara 1" open={open} onToggle={onToggle}>
      <div className={pair}>
        <Field label="Judul Acara (cth: Akad Nikah)">
          <TextInput value={form.ceremonyTitle} onChange={(e) => set({ ceremonyTitle: e.target.value })} />
        </Field>
        <Field label="Tanggal Pelaksanaan">
          <TextInput type="date" value={form.ceremonyDate} onChange={(e) => set({ ceremonyDate: e.target.value })} />
        </Field>
      </div>
      <Field label="Nama Gedung / Lokasi">
        <TextInput value={form.venue} onChange={(e) => set({ venue: e.target.value })} placeholder="Grand Ballroom Hotel Mulia Senayan" />
      </Field>
      <Field label="Link Google Maps">
        <TextInput type="url" value={form.mapsLink} onChange={(e) => set({ mapsLink: e.target.value })} placeholder="https://maps.app.goo.gl/..." />
      </Field>
    </Accordion>
  )
}
