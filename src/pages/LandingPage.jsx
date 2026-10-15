import HeroCopy from '../components/landing/HeroCopy.jsx'
import HeroShowcase from '../components/landing/HeroShowcase.jsx'
import FeatureSection from '../components/landing/FeatureSection.jsx'
import CatalogSection from '../components/landing/CatalogSection.jsx'

export default function LandingPage({ onNavigate, onAction, onOpenInvite }) {
  return (
    <div className="flex w-full flex-col overflow-hidden">
      <div className="relative w-full">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary-fixed/30 via-primary-container/10 to-transparent blur-3xl"></div>
        <div className="pointer-events-none absolute -left-32 top-96 h-80 w-80 rounded-full bg-secondary-container/20 blur-3xl"></div>
        <div className="pointer-events-none absolute -right-28 top-48 h-96 w-96 rounded-full bg-primary-container/15 blur-3xl"></div>

        <section className="relative w-full px-margin-lg pb-space-xl pt-space-lg">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-gutter-lg lg:grid-cols-12">
            <HeroCopy onNavigate={onNavigate} />
            <HeroShowcase onOpen={onOpenInvite} />
          </div>
        </section>

        <FeatureSection />
        <CatalogSection onAction={onAction} />
      </div>
    </div>
  )
}
