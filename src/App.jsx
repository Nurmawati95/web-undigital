import { useMemo, useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import PageIntro from './components/PageIntro.jsx'
import PromoBanners from './components/PromoBanners.jsx'
import EventCard from './components/EventCard.jsx'
import { events as initialEvents } from './data/dashboard.js'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [events, setEvents] = useState(initialEvents)
  const [toast, setToast] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return events
    return events.filter(
      (event) => event.title.toLowerCase().includes(q) || event.date.toLowerCase().includes(q),
    )
  }, [events, query])

  const showToast = (message) => {
    setToast(message)
    window.clearTimeout(showToast._t)
    showToast._t = window.setTimeout(() => setToast(''), 2400)
  }

  const handleAddEvent = () => {
    const n = events.length + 1
    setEvents((prev) => [
      ...prev,
      {
        id: `acara-baru-${Date.now()}`,
        title: `Acara Baru ${n} — Ganti Judul`,
        status: 'inactive',
        statusLabel: 'Belum Aktif',
        dotClass: 'bg-error',
        date: 'Tanggal belum diatur',
        image: 'https://placehold.co/128x128/e2e7ff/00658d?text=U',
        imageAlt: 'Placeholder acara baru',
        badgeIcon: 'lock',
        badgeIconClass: 'text-error',
        primaryAction: { label: 'Aktifkan', icon: 'bolt' },
      },
    ])
    showToast('Acara baru ditambahkan. Klik Edit Form untuk melengkapi.')
  }

  const handleCardAction = (action, event) => {
    const labels = {
      'edit-form': `Edit Form: ${event.title}`,
      'edit-desain': `Edit Desain: ${event.title}`,
      preview: `Preview tema: ${event.title}`,
      menu: `Menu lainnya: ${event.title}`,
      primary: event.status === 'inactive' ? `Mengaktifkan: ${event.title}` : `Menyebar: ${event.title}`,
    }
    if (action === 'primary' && event.status === 'inactive') {
      setEvents((prev) =>
        prev.map((item) =>
          item.id === event.id
            ? {
                ...item,
                status: 'premium',
                statusLabel: 'PREMIUM',
                dotClass: 'bg-secondary',
                badgeIcon: 'verified',
                badgeIconClass: 'text-secondary',
                primaryAction: { label: 'Sebar', icon: 'send' },
              }
            : item,
        ),
      )
    }
    showToast(labels[action] ?? action)
  }

  const onPromo = (id) => showToast(id === 'cetak' ? 'Membuka pemesanan cetak…' : 'Membuka program afiliasi…')
  const openCatalog = (e) => {
    e.preventDefault()
    showToast('Membuka katalog tema…')
  }

  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased">
      <Sidebar collapsed={!sidebarOpen} onNavigate={() => setSidebarOpen(false)} />
      {sidebarOpen && (
        <button
          aria-label="Tutup menu"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-on-surface/30 lg:hidden"
        />
      )}

      <div className="lg:pl-[260px]">
        <Header query={query} onQueryChange={setQuery} onToggleSidebar={() => setSidebarOpen((v) => !v)} />

        <main className="relative min-h-screen bg-surface-container-low p-space-md pt-16 sm:p-space-xl sm:pt-16">
          <div className="flex w-full flex-col">
            <PageIntro />

            <section className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm sm:p-space-xl">
              <div className="flex flex-col justify-between gap-space-md pb-space-lg sm:flex-row sm:items-center">
                <div className="flex items-center gap-space-md">
                  <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Data Acara</h2>
                  <span className="rounded-full bg-surface-container-high px-3 py-1 font-label-md text-label-md font-semibold text-primary">
                    {filtered.length} Acara Aktif
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleAddEvent}
                  className="inline-flex cursor-pointer items-center gap-2 self-start rounded-full bg-secondary px-5 py-2.5 font-label-lg text-label-lg text-on-secondary shadow-md transition-all hover:bg-on-secondary-container sm:self-auto"
                >
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span>Tambah Acara</span>
                </button>
              </div>

              <PromoBanners onAction={onPromo} />

              {filtered.length === 0 ? (
                <div className="rounded-xl bg-surface-container-low p-space-xl text-center">
                  <p className="font-label-lg text-label-lg font-semibold text-on-surface">
                    Tidak ada acara yang cocok
                  </p>
                  <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                    Coba kata kunci lain atau tambah acara baru.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-space-lg pt-space-xs lg:grid-cols-3">
                  {filtered.map((event) => (
                    <EventCard key={event.id} event={event} onAction={handleCardAction} />
                  ))}
                </div>
              )}

              <div className="mt-space-xl flex flex-col items-center justify-between gap-space-md pt-space-lg text-on-surface-variant sm:flex-row">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-primary">info</span>
                  <span className="font-body-sm text-body-sm">
                    Butuh template undangan syukuran, aqiqah, atau ulang tahun? Jelajahi ratusan desain di galeri
                    tema.
                  </span>
                </div>
                <a
                  href="#"
                  onClick={openCatalog}
                  className="flex shrink-0 items-center gap-1 font-label-md text-label-md font-semibold text-primary hover:underline"
                >
                  <span>Buka Katalog Tema</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-on-surface px-5 py-2.5 font-label-md text-label-md text-surface shadow-lg">
          {toast}
        </div>
      )}
    </div>
  )
}


