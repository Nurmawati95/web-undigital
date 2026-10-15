import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import FormulirEditPage from './pages/FormulirEditPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import LandingHeader from './components/landing/LandingHeader.jsx'
import LandingFooter from './components/landing/LandingFooter.jsx'
import LandingFab from './components/landing/LandingFab.jsx'
import PreviewPage from './pages/PreviewPage.jsx'
import { events as initialEvents } from './data/dashboard.js'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [events, setEvents] = useState(initialEvents)
  const [toast, setToast] = useState('')
  const [route, setRoute] = useState({ name: 'landing', title: '' })

  const showToast = (message) => {
    setToast(message)
    window.clearTimeout(showToast._t)
    showToast._t = window.setTimeout(() => setToast(''), 2400)
  }

  const scrollTop = () => window.scrollTo({ top: 0 })
  const goPreview = () => { setRoute({ name: 'preview', title: 'Super-Classic' }); setSidebarOpen(false); scrollTop() }
  const goLanding = () => { setRoute({ name: 'landing', title: '' }); setSidebarOpen(false); scrollTop() }
  const goDashboard = () => { setRoute({ name: 'dashboard', title: '' }); setSidebarOpen(false); scrollTop() }
  const goFormulir = (title) => {
    setRoute({ name: 'formulir', title: title || 'The Wedding of Putra & Putri' })
    setSidebarOpen(false)
    scrollTop()
  }

  const handleLandingNav = (path) => {
    if (path === 'home') return goLanding()
    if (path === 'login') { showToast('Membuka dasbor…'); return goDashboard() }
    if (path === 'registrasi') { showToast('Membuka registrasi — demo, masuk ke dasbor…'); return goDashboard() }
    showToast(`Membuka ${path} (demo)…`)
  }

  const handleAddEvent = () => {
    const n = events.length + 1
    const title = `Acara Baru ${n} — Ganti Judul`
    setEvents((prev) => [...prev, {
      id: `acara-baru-${Date.now()}`, title, status: 'inactive', statusLabel: 'Belum Aktif',
      dotClass: 'bg-error', date: 'Tanggal belum diatur',
      image: 'https://placehold.co/128x128/e2e7ff/00658d?text=U',
      imageAlt: 'Placeholder acara baru', badgeIcon: 'lock', badgeIconClass: 'text-error',
      primaryAction: { label: 'Aktifkan', icon: 'bolt' },
    }])
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
      setEvents((prev) => prev.map((item) => item.id === event.id ? {
        ...item, status: 'premium', statusLabel: 'PREMIUM', dotClass: 'bg-secondary',
        badgeIcon: 'verified', badgeIconClass: 'text-secondary',
        primaryAction: { label: 'Sebar', icon: 'send' },
      } : item))
    }
    showToast(labels[action] ?? action)
  }

  const toastEl = toast ? (
    <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-on-surface px-5 py-2.5 font-label-md text-label-md text-surface shadow-lg">
      {toast}
    </div>
  ) : null

  const handleLandingAction = (a) => {
    if (typeof a === 'string' && a.startsWith('demo:')) return goPreview()
    showToast(`Aksi katalog: ${a} (demo)…`)
  }

  if (route.name === 'preview') {
    return (
      <>
        <PreviewPage onBack={goLanding} onUse={() => { showToast('Template dipilih — buka dasbor…'); goDashboard() }} notify={showToast} />
        {toastEl}
      </>
    )
  }

  if (route.name === 'landing') {
    return (
      <div className="bg-surface font-body-md text-body-md text-on-surface antialiased">
        <LandingHeader onNavigate={handleLandingNav} />
        <main className="min-h-[calc(100vh-80px)] w-full bg-surface pt-20">
          <LandingPage
            onNavigate={handleLandingNav}
            onOpenInvite={goPreview}
            onAction={handleLandingAction}
          />
        </main>
        <LandingFooter onNavigate={handleLandingNav} />
        <LandingFab />
        {toastEl}
      </div>
    )
  }

  const dashShell = (children) => (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased">
      <Sidebar collapsed={!sidebarOpen} activePath="dashboard" onNavigate={() => setSidebarOpen(false)} />
      {sidebarOpen && (
        <button aria-label="Tutup menu" onClick={() => setSidebarOpen(false)} className="fixed inset-0 z-40 bg-on-surface/30 lg:hidden" />
      )}
      <div className="lg:pl-[260px]">
        <Header query={query} onQueryChange={setQuery} onToggleSidebar={() => setSidebarOpen((v) => !v)} />
        <main className="relative min-h-screen bg-surface-container-low p-space-md pt-16 sm:p-space-xl sm:pt-16">
          <button onClick={goLanding} className="mb-space-md inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:underline">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>Kembali ke Landing Page</span>
          </button>
          {children}
        </main>
      </div>
      {toastEl}
    </div>
  )

  if (route.name === 'formulir') {
    return dashShell(<FormulirEditPage eventTitle={route.title} onBack={goDashboard} notify={showToast} />)
  }

  return dashShell(
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
