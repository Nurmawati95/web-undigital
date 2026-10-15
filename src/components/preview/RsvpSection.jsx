import { useState } from 'react'
import { WishCard } from './WishCard.jsx'
import { initialWishes } from '../../data/preview.js'

const inputCls =
  'w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm shadow-inner focus:outline-none focus:bg-surface-container-lowest'

export default function RsvpSection({ onQr, notify }) {
  const [name, setName] = useState('Bapak Budi')
  const [status, setStatus] = useState('Hadir')
  const [count, setCount] = useState('1')
  const [msg, setMsg] = useState('')
  const [wishes, setWishes] = useState(initialWishes)

  const submit = (e) => {
    e.preventDefault()
    const n = name.trim() || 'Tamu Terhormat'
    const hadir = status === 'Hadir'
    setWishes((w) => [
      {
        id: `w-${Date.now()}`,
        initials: n.charAt(0).toUpperCase(),
        avatarCls: 'bg-secondary-container text-on-secondary-container font-bold',
        name: n,
        time: 'Baru saja',
        status,
        hadir,
        text: msg.trim() || 'Selamat berbahagia untuk kedua mempelai!',
      },
      ...w,
    ])
    setMsg('')
    notify('Terima kasih! Konfirmasi kehadiran & doa restu terkirim.')
  }

  return (
    <section id="section-rsvp" className="flex w-full flex-col items-center bg-surface-container-low px-5 py-10">
      <span className="font-label-sm uppercase tracking-widest text-primary">Konfirmasi Kehadiran</span>
      <h2 className="mb-2 font-headline-md text-on-surface">RSVP & Ucapan Doa</h2>
      <p className="mb-6 max-w-xs text-center font-body-sm text-on-surface-variant">
        Mohon kesediaan konfirmasi kehadiran demi kelancaran protokol acara kami.
      </p>
      <form onSubmit={submit} className="w-full space-y-4 rounded-3xl bg-surface-container-lowest p-5 shadow-md">
        <div>
          <label className="mb-1 block font-label-md text-on-surface">Nama Lengkap Tamu</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Contoh: Budi Santoso" className={inputCls} />
        </div>
        <div>
          <label className="mb-1 block font-label-md text-on-surface">Konfirmasi Kehadiran</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className={inputCls}>
            <option value="Hadir">Pasti Hadir</option>
            <option value="Tidak Hadir">Tidak Bisa Hadir</option>
            <option value="Ragu">Masih Ragu</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block font-label-md text-on-surface">Jumlah Tamu</label>
          <div className="grid grid-cols-2 gap-2">
            {[['1', '1 Orang'], ['2', '2 Orang (+Partner)']].map(([v, l]) => (
              <label key={v} className="flex cursor-pointer items-center gap-2 rounded-xl bg-surface-container-low p-2.5">
                <input type="radio" name="guest_count" value={v} checked={count === v} onChange={() => setCount(v)} className="text-primary" />
                <span className="font-label-md text-on-surface">{l}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1 block font-label-md text-on-surface">Ucapan & Doa Restu</label>
          <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={3} placeholder="Tuliskan pesan doa terbaik Anda di sini..." className={inputCls} />
        </div>
        <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-secondary py-3 font-label-lg text-on-secondary shadow-md transition-all hover:bg-secondary/90">
          <span className="material-symbols-outlined text-[18px]">send</span>
          <span>Kirim Konfirmasi & Doa</span>
        </button>
      </form>
      <div className="mt-6 flex w-full flex-col items-center rounded-3xl bg-surface-container-high p-4 text-center shadow-sm">
        <span className="font-label-sm font-bold uppercase tracking-wider text-primary">Fast Check-in Resepsionis</span>
        <p className="mb-3 mt-0.5 font-body-sm text-on-surface-variant">Tunjukkan kode QR ini ke penerima tamu saat tiba di lokasi</p>
        <button type="button" onClick={onQr} className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-2.5 font-label-md text-on-primary shadow-sm transition-all hover:bg-primary/90">
          <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
          <span>Tampilkan QR Tamu Saya</span>
        </button>
      </div>
      <div className="mt-8 w-full">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-headline-sm text-on-surface">Ucapan Sahabat & Kerabat</h3>
          <span className="rounded-full bg-surface-container px-2.5 py-0.5 font-label-sm text-on-surface-variant">
            {120 + wishes.length} Doa
          </span>
        </div>
        <div className="space-y-3">
          {wishes.map((w) => (
            <WishCard key={w.id} w={w} />
          ))}
        </div>
      </div>
    </section>
  )
}
