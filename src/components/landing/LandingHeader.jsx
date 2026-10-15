import { LOGO_URL, landingNav, WA_ADMIN } from '../../data/landing.js'

export default function LandingHeader({ onNavigate }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-surface-container-high bg-surface-container-lowest/90 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="flex h-20 w-full items-center justify-between gap-space-md px-margin-lg">
        <button onClick={() => onNavigate('home')} className="flex shrink-0 items-center gap-space-md">
          <img alt="UNDIGITAL Brand Logo" className="h-8 w-auto object-contain" src={LOGO_URL} />
          <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface">UNDIGITAL</span>
        </button>
        <nav className="hidden items-center gap-space-xs xl:flex">
          {landingNav.map((n) =>
            n.active ? (
              <span key={n.path} className="rounded-lg bg-surface-container px-space-sm py-space-xs font-bold text-on-surface">
                {n.label}
              </span>
            ) : (
              <button
                key={n.path}
                onClick={() => onNavigate(n.path)}
                className="rounded px-space-sm py-space-xs font-label-md text-label-md text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-on-surface"
              >
                {n.label}
              </button>
            ),
          )}
        </nav>
        <div className="flex shrink-0 items-center gap-space-sm">
          <button
            onClick={() => onNavigate('registrasi')}
            className="whitespace-nowrap rounded-xl bg-primary-container px-space-lg py-space-sm text-center font-label-lg text-label-lg text-on-primary shadow-[0_4px_14px_rgba(41,182,246,0.35)] transition-all duration-200 hover:bg-primary"
          >
            Mulai Gratis
          </button>
          <button
            onClick={() => onNavigate('login')}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary"
            aria-label="Masuk"
          >
            <span className="material-symbols-outlined text-[18px] text-on-primary">person</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export function WaIcon({ className = 'h-5 w-5 shrink-0 text-secondary' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824zM12.001 2c-5.523 0-10 4.477-10 10 0 1.774.462 3.441 1.27 4.896l-1.348 4.922 5.064-1.328c1.402.766 3.003 1.204 4.708 1.204 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10z"></path>
    </svg>
  )
}

export { WA_ADMIN }
