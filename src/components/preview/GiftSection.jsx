import { giftAccounts } from '../../data/preview.js'
import { QrArt } from './GallerySection.jsx'

export function GiftSection({ onCopy }) {
  return (
    <section id="section-gift" className="flex w-full flex-col items-center bg-surface-container-lowest px-5 py-10">
      <span className="font-label-sm uppercase tracking-widest text-primary">Tanda Kasih</span>
      <h2 className="mb-2 font-headline-md text-on-surface">Amplop Digital & Kado</h2>
      <p className="mb-6 max-w-xs text-center font-body-sm text-on-surface-variant">
        Doa restu Anda merupakan karunia terindah bagi kami. Namun jika ingin memberikan tanda kasih secara digital,
        Anda dapat menggunakan opsi berikut:
      </p>
      <div className="w-full space-y-4">
        {giftAccounts.map((g) => (
          <div key={g.id} className="flex w-full flex-col rounded-3xl bg-surface-container-low p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-headline-sm font-extrabold tracking-wider text-primary">{g.bank}</span>
              <span className="font-label-sm text-on-surface-variant">{g.bankFull}</span>
            </div>
            <span className="font-label-sm text-on-surface-variant">Nomor Rekening:</span>
            <span className="my-1 font-headline-sm tracking-widest text-on-surface">{g.number}</span>
            <span className="font-body-sm text-on-surface-variant">{g.name}</span>
            <button
              type="button"
              onClick={() => onCopy(g)}
              className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl bg-surface-container py-2.5 font-label-md text-on-surface shadow-sm transition-all hover:bg-primary hover:text-on-primary"
            >
              <span className="material-symbols-outlined text-[16px]">content_copy</span>
              <span>Salin Nomor Rekening {g.bank === 'MANDIRI' ? 'Mandiri' : 'BCA'}</span>
            </button>
          </div>
        ))}
        <div className="flex w-full flex-col items-center rounded-3xl bg-surface-container-low p-5 text-center shadow-sm">
          <span className="font-label-md font-bold uppercase tracking-widest text-primary">
            QRIS Standar Pembayaran Nasional
          </span>
          <p className="mb-4 mt-0.5 font-body-sm text-on-surface-variant">
            Mendukung GoPay, OVO, Dana, ShopeePay & Seluruh Mobile Banking
          </p>
          <div className="mb-3 rounded-2xl bg-surface-container-lowest p-3 shadow-inner">
            <QrArt />
          </div>
          <span className="font-label-sm text-on-surface-variant">NMID: ID102938472910</span>
          <span className="mt-2 inline-block rounded-full bg-secondary-container px-3 py-1 font-label-sm text-on-secondary-container">
            Scan via E-Wallet Anda
          </span>
        </div>
      </div>
    </section>
  )
}
