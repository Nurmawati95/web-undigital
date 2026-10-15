import { useState } from 'react'
import PreviewHeader from '../components/preview/PreviewHeader.jsx'
import DemoToolbar from '../components/preview/DemoToolbar.jsx'
import PhoneFrame from '../components/preview/PhoneFrame.jsx'
import { CoverSection, HeroSection } from '../components/preview/CoverHero.jsx'
import { CoupleSection, ScheduleSection } from '../components/preview/CoupleSchedule.jsx'
import { GallerySection } from '../components/preview/GallerySection.jsx'
import { GiftSection } from '../components/preview/GiftSection.jsx'
import RsvpSection from '../components/preview/RsvpSection.jsx'
import BottomNav, { QrModal } from '../components/preview/NavModal.jsx'

export default function PreviewPage({ onBack, onUse, notify }) {
  const [view, setView] = useState('mobile')
  const [qrOpen, setQrOpen] = useState(false)

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const copyGift = async (g) => {
    try {
      await navigator.clipboard.writeText(g.raw)
      notify(`Nomor rekening ${g.bank} disalin!`)
    } catch {
      notify(`Salin manual: ${g.number}`)
    }
  }

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      notify('Tautan demo berhasil disalin!')
    } catch {
      notify('Gagal menyalin tautan demo.')
    }
  }

  return (
    <div className="min-h-screen bg-inverse-surface font-body-md text-inverse-on-surface antialiased">
      <PreviewHeader view={view} onView={setView} onUse={onUse} onBack={onBack} />
      <main className="flex min-h-[100dvh] w-full items-center justify-center bg-inverse-surface p-0 pt-16 md:py-gutter md:pt-16">
        <div className="relative flex min-h-[calc(100dvh-4rem)] w-full max-w-[480px] flex-col overflow-hidden bg-surface shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:max-h-[920px] md:min-h-[844px] md:rounded-3xl">
          <div className="flex w-full flex-col">
            <DemoToolbar view={view} onView={setView} onShare={share} onUse={onUse} />
            <div className="relative flex w-full flex-1 items-start justify-center overflow-hidden bg-surface py-2 md:py-4">
              <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-fixed-dim/20 blur-3xl"></div>
              <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary-fixed/20 blur-3xl"></div>
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[780px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tertiary-fixed/10 blur-2xl"></div>
              <PhoneFrame view={view} qrOpen={qrOpen} onCloseQr={() => setQrOpen(false)}>
                <CoverSection onOpen={() => scrollTo('section-hero')} />
                <HeroSection />
                <CoupleSection />
                <ScheduleSection />
                <GallerySection />
                <GiftSection onCopy={copyGift} />
                <RsvpSection onQr={() => setQrOpen(true)} notify={notify} />
                <div className="w-full bg-surface-container-lowest py-8 text-center">
                  <p className="font-headline-sm text-primary">Putra & Putri</p>
                  <p className="mt-1 font-label-sm text-on-surface-variant">Kami yang berbahagia beserta keluarga besar</p>
                  <div className="mt-4 flex items-center justify-center gap-1 font-label-sm text-on-surface-variant">
                    <span>Dibuat dengan cinta via</span>
                    <span className="font-bold text-primary">UNDIGITAL</span>
                  </div>
                </div>
              </PhoneFrame>
              <BottomNav onNav={scrollTo} />
              <QrModal open={qrOpen} onClose={() => setQrOpen(false)} />
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-inverse-surface py-space-md text-center">
        <div className="flex w-full items-center justify-center gap-space-xs px-gutter font-label-sm text-inverse-on-surface/60">
          <span className="material-symbols-outlined text-[14px]">verified</span>
          <span>UNDIGITAL Template Engine • Pratonton Interaktif</span>
        </div>
      </footer>
    </div>
  )
}
