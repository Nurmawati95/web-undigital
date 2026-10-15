import { useState } from 'react'
import { Icon } from './Icon.jsx'
import { guestName, publisWishes } from '../../data/publikasi.js'

export default function RsvpSection({ notify }) {
  const [name, setName] = useState(guestName)
  const [msg, setMsg] = useState('')
  const [wishes, setWishes] = useState(publisWishes)

  const send = () => {
    const n = name.trim() || 'Tamu Terhormat'
    setWishes((w) => [
      { id: `w-${Date.now()}`, name: n, time: 'Baru saja', text: `"${msg.trim() || 'Selamat berbahagia untuk kedua mempelai!'}"` },
      ...w,
    ])
    setMsg('')
    notify('Ucapan terkirim. Terima kasih!')
  }

  return (
    <section className="bg-white px-5 py-8">
      <div className="mb-6 text-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-champagne-700">Buku Tamu</span>
        <h2 className="mt-0.5 font-serif text-2xl font-bold text-slate-900">Konfirmasi & Ucapan</h2>
        <div className="mx-auto mt-2 h-0.5 w-12 bg-champagne-300"></div>
      </div>
      <div className="mb-6 rounded-2xl border border-slate-200/80 bg-slate-50 p-4">
        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Nama Lengkap</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Masukkan nama Anda..." />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Konfirmasi Kehadiran</label>
            <select className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500">
              <option>Hadir (1 - 2 Orang)</option>
              <option>Hadir (&gt; 2 Orang)</option>
              <option>Maaf, Tidak Bisa Hadir</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Doa & Ucapan Selamat</label>
            <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={3} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Tuliskan ucapan dan doa terbaik untuk kedua mempelai..." />
          </div>
          <button onClick={send} className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-brand-500 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-brand-600">
            <Icon name="send" className="w-3.5 h-3.5" /> Kirim Ucapan
          </button>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b pb-2 text-xs text-slate-500">
          <span className="font-bold text-slate-700">{126 + wishes.length} Ucapan & Doa</span>
          <span className="text-[11px] font-medium text-emerald-600">96% Konfirmasi Hadir</span>
        </div>
        {wishes.map((w) => (
          <div key={w.id} className="rounded-xl border border-champagne-200/60 bg-champagne-50/50 p-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">{w.name}</span>
              <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700">Hadir</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600">{w.text}</p>
            <span className="mt-1 block text-[10px] text-slate-400">{w.time}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t border-slate-100 pt-6 text-center">
        <p className="font-script text-2xl text-slate-800">Putra & Putri</p>
        <p className="mt-1 text-[10px] text-slate-400">Dibuat dengan penuh cinta memakai UNDIGITAL.id</p>
      </div>
    </section>
  )
}
