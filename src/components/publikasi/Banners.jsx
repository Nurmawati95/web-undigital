import { Icon } from './Icon.jsx'

export function TitleBanner({ onBack }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center text-white">
      <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
        <Icon name="sparkles" className="w-3.5 h-3.5" /> Client & Guest Experience Preview
      </span>
      <h1 className="font-sans text-2xl font-bold tracking-tight text-white sm:text-3xl">
        Simulasi 2 Kondisi Layar Undangan Digital
      </h1>
      <p className="mt-2 text-sm text-slate-300">
        Sisi kiri menampilkan <span className="font-semibold text-white">Sampul Depan (Cover Lock)</span> saat link baru
        dibuka, dan sisi kanan adalah <span className="font-semibold text-white">Isi Undangan Lengkap</span> setelah tombol
        &quot;Buka Undangan&quot; ditekan.
      </p>
      <button onClick={onBack} className="mt-4 inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20">
        Kembali
      </button>
    </div>
  )
}

export function GuideCallout() {
  return (
    <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-white/10 bg-slate-900/90 p-6 text-white backdrop-blur-md">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            <h4 className="text-sm font-bold">Respon Desktop & Tablet Standar UNDIGITAL</h4>
          </div>
          <p className="text-xs leading-relaxed text-slate-300">
            Pada perangkat layar lebar (Laptop/Desktop), halaman publikasi ini otomatis memusatkan tampilan smartphone
            (max-width 480px, 100dvh) di tengah layar dengan latar belakang foto mempelai ber-efek blur elegan di sisi
            kanan dan kiri, menjaga pengalaman interaktif mobile-first tetap maksimal.
          </p>
        </div>
        <div className="flex flex-shrink-0 items-center gap-2">
          <span className="rounded-lg border border-brand-500/30 bg-white/10 px-3 py-1.5 text-xs font-medium text-brand-300">
            Rasio 9:16 • 100dvh
          </span>
        </div>
      </div>
    </div>
  )
}

export function ScreenLabel({ dot, title, badge }) {
  return (
    <div className="mb-3 flex w-full max-w-[400px] items-center justify-between px-2 text-xs text-slate-300">
      <div className="flex items-center gap-2">
        <span className={`h-2.5 w-2.5 rounded-full ${dot}`}></span>
        <span className="text-[11px] font-bold uppercase tracking-wider text-white">{title}</span>
      </div>
      <span className="rounded border px-2 py-0.5 text-[11px] font-medium">{badge}</span>
    </div>
  )
}
