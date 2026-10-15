import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import FormulirEditPage from './pages/FormulirEditPage.jsx'
import { events as initialEvents } from './data/dashboard.js'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [events, setEvents] = useState(initialEvents)
  const [toast, setToast] = useState('')
  const [route, setRoute] = useState({ name: 'dashboard', title: '' })

  const showToast = (message) => {
    setToast(message)
    window.clearTimeout(showToast._t)
    showToast._t = window.setTimeout(() => setToast(''), 2400)
  }

  const goFormulir = (title) => {
    setRoute({ name: 'formulir', title: title || 'The Wedding of Putra & Putri' })
    setSidebarOpen(false)
    window.scrollTo({ top: 0 })
  }
  const goDashboard = () => {
    setRoute({ name: 'dashboard', title: '' })
    setSidebarOpen(false)
    window.scrollTo({ top: 0 })
  }

  const handleAddEvent = () => {
    const n = events.length + 1
    const title = `Acara Baru ${n} — Ganti Judul`
    setEvents((prev) => [
      ...prev,
      {
        id: `acara-baru-${Date.now()}`,
        title,
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
    showToast('Acara baru ditambahkan. Membuka formulir…')
    goFormulir(title)
  }

  const handleCardAction = (action, event) => {
    if (action === 'edit-form') return goFormulir(event.title)
    const labels = {
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

  const shell = (children) => (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased">
      <Sidebar collapsed={!sidebarOpen} activePath="dashboard" onNavigate={() => setSidebarOpen(false)} />
      {sidebarOpen && (
        <button aria-label="Tutup menu" onClick={() => setSidebarOpen(false)} className="fixed inset-0 z-40 bg-on-surface/30 lg:hidden" />
      )}
      <div className="lg:pl-[260px]">
        <Header query={query} onQueryChange={setQuery} onToggleSidebar={() => setSidebarOpen((v) => !v)} />
        <main className="relative min-h-screen bg-surface-container-low p-space-md pt-16 sm:p-space-xl sm:pt-16">
          {children}
        </main>
      </div>
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-on-surface px-5 py-2.5 font-label-md text-label-md text-surface shadow-lg">
          {toast}
        </div>
      )}
    </div>
  )

  if (route.name === 'formulir') {
    return shell(<FormulirEditPage eventTitle={route.title} onBack={goDashboard} notify={showToast} />)
  }

  return shell(
    <DashboardPage
      events={events}
      query={query}
      onAddEvent={handleAddEvent}
      onCardAction={handleCardAction}
      onPromo={(id) => showToast(id === 'cetak' ? 'Membuka pemesanan cetak…' : 'Membuka program afiliasi…')}
      onCatalog={() => showToast('Membuka katalog tema…')}
    />,
  )
}
