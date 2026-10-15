import { user } from '../data/dashboard.js'

export default function Header({ onToggleSidebar, query, onQueryChange }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between bg-surface-container-lowest/90 px-space-md shadow-shell backdrop-blur-xl sm:px-space-xl lg:left-[260px]">
      <div className="flex items-center gap-space-md">
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-on-surface"
        >
          <span className="material-symbols-outlined text-[22px]">menu</span>
        </button>
        <label className="hidden w-64 items-center gap-space-sm rounded-xl bg-surface-container-low px-space-md py-1.5 md:flex">
          <span className="material-symbols-outlined text-[18px] text-outline">search</span>
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Cari undangan atau tamu..."
            className="w-full bg-transparent font-body-sm text-body-sm text-on-surface outline-none placeholder:text-outline"
          />
        </label>
      </div>

      <div className="flex items-center gap-space-lg">
        <button
          type="button"
          aria-label="Notifikasi"
          className="relative flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-on-surface"
        >
          <span className="material-symbols-outlined text-[22px]">notifications</span>
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-error"></span>
        </button>
        <div className="flex items-center gap-space-sm pl-space-sm">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <span className="material-symbols-outlined text-[18px] text-on-primary">person</span>
          </div>
          <div className="hidden text-left sm:flex sm:flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="font-label-lg text-label-lg text-on-surface">{user.name}</span>
              <span className="rounded-full bg-secondary-container px-1.5 py-0.5 font-label-sm text-label-sm text-on-secondary-container">
                {user.badge}
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-outline">{user.email}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
