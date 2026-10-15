import StudioBar from '../components/publikasi/StudioBar.jsx'
import { PhoneShell } from '../components/publikasi/PhoneShell.jsx'
import CoverPhone from '../components/publikasi/CoverPhone.jsx'
import ContentPhone from '../components/publikasi/ContentPhone.jsx'
import { TitleBanner, GuideCallout } from '../components/publikasi/Banners.jsx'
import { HeroCountdown, CoupleProfile } from '../components/publikasi/HeroCouple.jsx'
import { ScheduleMaps, GalleryStory } from '../components/publikasi/ScheduleGallery.jsx'
import GiftSection from '../components/publikasi/GiftSection.jsx'
import RsvpSection from '../components/publikasi/RsvpSection.jsx'

export default function PublikasiPage(props) {
  const { onBack, onMaps, notify, onOpen } = props

  const copyGuest = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/the-wedding-of-putra-putri?to=Bapak-Budi`)
      notify('Tautan tamu disalin!')
    } catch {
      notify('Gagal menyalin tautan tamu.')
    }
  }
  const copyBank = async (raw, bank) => {
    try {
      await navigator.clipboard.writeText(raw)
      notify(`Nomor rekening ${bank} disalin!`)
    } catch {
      notify(`Salin manual: ${raw}`)
    }
  }
  const full = () => notify('Membuka full web (demo).')

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0f172a] font-sans text-slate-800 antialiased">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl"></div>
        <div className="absolute -right-32 top-1/2 h-96 w-96 rounded-full bg-amber-200/25 blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"></div>
      </div>
      <StudioBar onCopy={copyGuest} onFull={full} onBack={onBack} />
      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12">
        <TitleBanner onBack={onBack} />
        <div className="grid grid-cols-1 items-start justify-center gap-8 md:gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center">
            <PhoneShell screenBg="bg-slate-900">
              <div className="relative flex h-full w-full flex-col justify-between overflow-hidden">
                <CoverPhone onOpen={onOpen} />
              </div>
            </PhoneShell>
          </div>
          <div className="flex flex-col items-center">
            <PhoneShell>
              <ContentPhone
                notify={notify}
                hero={<HeroCountdown />}
                couple={<CoupleProfile />}
                schedule={<ScheduleMaps onMaps={onMaps} />}
                gallery={<GalleryStory />}
                gift={<GiftSection onCopy={copyBank} />}
                rsvp={<RsvpSection notify={notify} />}
              />
            </PhoneShell>
          </div>
        </div>
        <GuideCallout />
      </main>
    </div>
  )
}
