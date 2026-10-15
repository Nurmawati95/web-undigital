import { navSections } from '../data/dashboard.js'

export default function Sidebar({ collapsed, onNavigate, activePath = 'dashboard' }) {
  return (
    <aside
      className={`fixed left-0 top-0 z-50 flex h-full w-[260px] flex-col justify-between bg-surface-container-lowest shadow-shell transition-transform duration-300 ${
        collapsed ? '-translate-x-full' : 'translate-x-0'
      } lg:translate-x-0`}
    >
      <div className="flex flex-1 flex-col overflow-y-auto">
        <div className="flex h-16 items-center gap-space-sm px-space-lg">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-on-primary shadow-sm">
            <span className="material-symbols-outlined text-[22px]">mark_email_read</span>
          </div>
          <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface">UNDIGITAL</span>
        </div>
        <nav className="space-y-space-md px-space-md py-space-sm">
          {navSections.map((section) => (
            <div key={section.label} className="space-y-space-xs pt-space-xs first:pt-0">
              <p className="px-space-md py-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">
                {section.label}
              </p>
              {section.items.map((item) => {
                const isActive = item.path === activePath
                return (
                  <a
                    key={item.path}
                    href="#"
                    aria-current={isActive ? 'page' : undefined}
                    onClick={(e) => {
                      e.preventDefault()
                      onNavigate?.(item)
                    }}
                    className={`flex items-center gap-space-sm px-space-md py-2.5 transition-all ${
                      isActive
                        ? 'rounded-xl bg-primary-fixed font-semibold text-on-primary-fixed'
                        : 'rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    <span className="font-label-lg text-label-lg">{item.label}</span>
                  </a>
                )
              })}
            </div>
          ))}
        </nav>
      </div>
      <div className="bg-surface-container-lowest p-space-md">
        <div className="flex items-center justify-between rounded-xl bg-surface-container-low p-space-md">
          <div className="flex items-center gap-space-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container text-primary">
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
            </div>
            <div>
              <p className="font-label-md text-label-md text-on-surface">Bantuan CS</p>
              <p className="font-label-sm text-label-sm text-outline">Online 24/7</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-[18px] text-outline">open_in_new</span>
        </div>
      </div>
    </aside>
  )
}
