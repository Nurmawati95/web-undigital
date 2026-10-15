import { Icon } from './Icon.jsx'

export default function GiftSection({ onCopy }) {
  return (
    <section className="bg-champagne-50/70 px-5 py-8 text-center">
      <span className="text-[10px] font-bold uppercase tracking-widest text-champagne-700">Tanda Kasih</span>
      <h2 className="mt-0.5 font-serif text-2xl font-bold text-slate-900">Amplop Digital</h2>
      <div className="mx-auto mb-3 mt-2 h-0.5 w-12 bg-champagne-300"></div>
      <p className="mx-auto mb-6 max-w-xs text-xs text-slate-600">
        Doa restu Anda adalah karunia terindah bagi kami. Namun jika ingin memberikan tanda kasih secara cashless:
      </p>
      <div className="relative mb-3.5 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-left text-white shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-bold tracking-wider text-blue-400">BCA</span>
          <Icon name="creditCard" className="w-5 h-5 text-slate-400" />
        </div>
        <p className="text-xs text-slate-400">Nomor Rekening:</p>
        <div className="mt-1 flex items-center justify-between">
          <span className="font-mono text-lg font-bold tracking-widest text-amber-200">8230 1928 44</span>
          <button onClick={() => onCopy('8230192844', 'BCA')} className="flex items-center gap-1 rounded bg-white/20 px-2.5 py-1 text-[10px] font-semibold text-white transition hover:bg-white/30">
            <Icon name="copy" className="w-3 h-3" /> Salin
          </button>
        </div>
        <p className="mt-2 text-xs text-slate-300">a.n <span className="font-semibold text-white">Putra Pratama</span></p>
      </div>
      <div className="rounded-2xl border border-champagne-200/90 bg-white p-4 text-left shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-bold text-yellow-600">Bank Mandiri</span>
          <span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-600">Bebas Biaya</span>
        </div>
        <p className="text-xs text-slate-400">Nomor Rekening:</p>
        <div className="mt-1 flex items-center justify-between">
          <span className="font-mono text-base font-bold tracking-wider text-slate-800">1320 0293 8841</span>
          <button onClick={() => onCopy('132002938841', 'Mandiri')} className="flex items-center gap-1 rounded bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-700 transition hover:bg-slate-200">
            <Icon name="copy" className="w-3 h-3" /> Salin
          </button>
        </div>
        <p className="mt-2 text-xs text-slate-500">a.n <span className="font-semibold text-slate-800">Putri Amanda</span></p>
      </div>
    </section>
  )
}
