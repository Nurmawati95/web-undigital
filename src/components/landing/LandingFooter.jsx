export default function LandingFooter({ onNavigate }) {
  const link = (path, label) => (
    <button key={label} onClick={() => onNavigate(path)} className="text-left font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary">
      {label}
    </button>
  )

  return (
    <footer className="w-full border-t border-surface-container-high bg-surface-container-lowest py-space-xl">
      <div className="w-full px-margin-lg">
        <div className="mb-space-xl grid grid-cols-1 gap-gutter-lg md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-space-sm lg:col-span-2">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface">UNDIGITAL</span>
            </div>
            <p className="max-w-sm font-body-sm text-body-sm text-on-surface-variant">
              Platform undangan digital modern terkemuka di Indonesia. Ciptakan momen pernikahan, syukuran, dan acara
              spesial dengan interaktif, elegan, dan siap kirim ke WhatsApp.
            </p>
            <div className="mt-space-xs flex items-center gap-space-xs">
              <div className="flex items-center gap-space-xs rounded-lg bg-surface-container-low px-space-sm py-space-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
                <span className="font-label-sm text-label-sm">Bank-Grade Security</span>
              </div>
              <div className="flex items-center gap-space-xs rounded-lg bg-surface-container-low px-space-sm py-space-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-primary">lock</span>
                <span className="font-label-sm text-label-sm">SSL 256-bit Encrypted</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="mb-space-xs font-label-lg text-label-lg text-on-surface">Navigasi Cepat</span>
            {link('home', 'Beranda')}
            {link('harga', 'Paket & Harga')}
            {link('template', 'Katalog Template')}
            {link('contoh', 'Contoh Undangan')}
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="mb-space-xs font-label-lg text-label-lg text-on-surface">Fitur & Utilitas</span>
            {link('tools', 'WhatsApp Guest Sender')}
            {link('tools', 'QR Code Buku Tamu')}
            {link('tutorial', 'Pusat Tutorial')}
            {link('artikel', 'Blog & Inspirasi')}
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="mb-space-xs font-label-lg text-label-lg text-on-surface">Keamanan & Akun</span>
            {link('registrasi', 'Daftar Akun Baru')}
            {link('login', 'Masuk Dasbor')}
            <div className="mt-space-sm flex items-center gap-space-sm rounded-xl bg-surface-container-low p-space-sm">
              <span className="material-symbols-outlined text-[24px] text-secondary">shield</span>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface">QRIS Terverifikasi</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Angpao Cashless Aman</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-space-md border-t border-surface-container pt-space-lg md:flex-row">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            © 2025 UNDIGITAL Indonesia. Hak Cipta Dilindungi Undang-Undang.
          </span>
          <div className="flex items-center gap-space-md">
            <span className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span> Server Jakarta ID
            </span>
            <span className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] text-primary">bolt</span> 99.9% Uptime
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
