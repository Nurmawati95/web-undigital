export default function EventCard({ event, onAction }) {
  const isInactive = event.status === 'inactive'

  return (
    <article className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm transition-shadow hover:shadow-md">
      <div>
        <div className="mb-space-md flex items-center justify-between gap-space-sm">
          <div className="flex min-w-0 items-center gap-2">
            <span className={`h-2 w-2 shrink-0 rounded-full ${event.dotClass}`}></span>
            <h3 title={event.title} className="truncate font-label-lg text-label-lg font-bold text-on-surface">
              {event.title}
            </h3>
          </div>
          <button
            type="button"
            aria-label={`Menu ${event.title}`}
            onClick={() => onAction?.('menu', event)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-outline transition-colors hover:bg-surface-container-low hover:text-on-surface"
          >
            <span className="material-symbols-outlined text-[20px]">more_vert</span>
          </button>
        </div>

        <div className="mb-space-lg flex items-start gap-space-md">
          <div className="relative shrink-0">
            <img
              src={event.image}
              alt={event.title}
              loading="lazy"
              className="h-16 w-16 rounded-full bg-surface-container object-cover shadow-sm"
            />
            <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-surface-container-lowest shadow-sm">
              <span className={`material-symbols-outlined text-[13px] ${event.badgeIconClass}`}>
                {event.badgeIcon}
              </span>
            </span>
          </div>

          <div className="flex min-w-0 flex-col space-y-1">
            <div>
              {isInactive ? (
                <span className="inline-flex items-center rounded-full bg-error-container px-2 py-0.5 font-label-sm text-label-sm font-semibold text-on-error-container">
                  {event.statusLabel}
                </span>
              ) : (
                <span className="inline-flex items-center rounded-full bg-secondary-container px-2 py-0.5 font-label-sm text-label-sm font-bold tracking-wide text-on-secondary-container">
                  {event.statusLabel}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5 text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] text-outline">calendar_today</span>
              <span className="font-body-sm text-body-sm font-medium">{event.date}</span>
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onAction?.('preview', event)
              }}
              className="inline-flex items-center gap-1 pt-0.5 font-label-md text-label-md font-medium text-primary hover:underline"
            >
              <span>Pilih Tema - Preview Undangan</span>
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>

      <div className="-mx-space-lg -mb-space-lg grid grid-cols-3 gap-2 rounded-b-2xl bg-surface-container-low/50 p-space-md pt-space-md">
        <button
          type="button"
          onClick={() => onAction?.('edit-form', event)}
          className="truncate rounded-xl bg-surface-container-highest px-2 py-2 text-center font-label-sm text-label-sm font-medium text-on-surface transition-colors hover:bg-surface-container"
        >
          Edit Form
        </button>
        <button
          type="button"
          onClick={() => onAction?.('edit-desain', event)}
          className="truncate rounded-xl bg-secondary px-2 py-2 text-center font-label-sm text-label-sm font-medium text-on-secondary transition-colors hover:bg-on-secondary-container"
        >
          Edit Desain
        </button>
        <button
          type="button"
          onClick={() => onAction?.('primary', event)}
          className="flex items-center justify-center gap-1 truncate rounded-xl bg-primary px-2 py-2 text-center font-label-sm text-label-sm font-semibold text-on-primary shadow-sm transition-colors hover:bg-on-primary-fixed-variant"
        >
          <span className="material-symbols-outlined text-[14px]">{event.primaryAction.icon}</span>
          <span>{event.primaryAction.label}</span>
        </button>
      </div>
    </article>
  )
}
