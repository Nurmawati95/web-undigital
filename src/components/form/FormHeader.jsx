import { quickActions as fallbackActions } from '../../data/formulir.js'
import { useFormHeader } from '../../hooks/useFormHeader.js'

export default function FormHeader(props) {
  const { eventSlug, onAction, onBack } = props
  const live = useFormHeader(eventSlug)
  const isControlled = props.headingTitle !== undefined || props.actions !== undefined || props.eventTitle !== undefined
  const loading = props.loading ?? (isControlled ? false : live.loading)
  const title = props.eventTitle ?? live.eventTitle ?? ''
  const hTitle = props.headingTitle ?? live.header.headingTitle
  const hSubtitle = props.headingSubtitle ?? live.header.headingSubtitle
  const bLabel = props.badgeLabel ?? live.header.badgeLabel
  const sBadge = props.showBadge ?? live.header.showBadge
  const sOpenLink = props.showOpenLink ?? live.header.showOpenLink
  const openLabel = props.openLinkLabel ?? live.header.openLinkLabel
  const list = props.actions ?? live.actions ?? fallbackActions

  if (loading) {
    return (
      <div className="mx-auto mb-space-lg flex w-full max-w-5xl flex-col gap-space-md" aria-busy="true">
        <div className="h-4 w-2/3 animate-pulse rounded bg-surface-container-high" />
        <div className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm">
          <div className="h-5 w-64 animate-pulse rounded bg-surface-container-high" />
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto mb-space-lg flex w-full max-w-5xl flex-col gap-space-md">
      <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-outline">
        <button onClick={() => onBack?.('dashboard')} className="flex items-center gap-1 transition-colors hover:text-primary">
          <span className="material-symbols-outlined text-[16px]">home</span>
          <span>Dashboard</span>
        </button>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <button onClick={() => onBack?.('dashboard')} className="cursor-pointer transition-colors hover:text-primary">
          Data Acara
        </button>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="max-w-[280px] truncate font-semibold text-on-surface sm:max-w-md">
          Edit Data Undangan ({title})
        </span>
      </div>

      <div className="flex flex-col justify-between gap-space-sm rounded-2xl bg-surface-container-lowest p-space-md shadow-sm sm:flex-row sm:items-center">
        <div className="flex items-center gap-space-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-fixed text-primary shadow-inner">
            <span className="material-symbols-outlined text-[26px]">edit_calendar</span>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-space-sm">
              <h1 className="font-headline-sm text-headline-sm tracking-tight text-on-surface">
                {hTitle}
              </h1>
              {sBadge && (
                <span className="flex items-center gap-1 rounded-full bg-secondary-container px-2.5 py-0.5 font-label-sm text-label-sm text-on-secondary-container shadow-xs">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary"></span>
                  {bLabel}
                </span>
              )}
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {hSubtitle}
            </p>
          </div>
        </div>
        {sOpenLink && (
          <div className="flex items-center gap-space-xs">
            <button
              type="button"
              onClick={() => onAction?.('open-link')}
              className="flex items-center gap-1.5 rounded-xl bg-surface-container-low px-3.5 py-1.5 font-label-md text-label-md text-on-surface transition-all hover:bg-surface-container"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">visibility</span>
              <span>{openLabel}</span>
            </button>
          </div>
        )}
      </div>

      <div className="scrollbar-none flex w-full items-center gap-2 overflow-x-auto pb-1 pt-0.5">
        {list.map((qa) => (
          <button
            key={qa.id ?? qa.action_id}
            type="button"
            onClick={() => onAction?.(qa.id ?? qa.action_id)}
            className="flex shrink-0 items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 font-label-md text-label-md text-on-secondary shadow-sm transition-all hover:brightness-110 active:scale-95"
          >
            <span className="material-symbols-outlined text-[16px]">{qa.icon}</span>
            <span>{qa.label}</span>
          </button>
        ))}
        <button
          type="button"
          aria-label="Opsi Lainnya"
          onClick={() => onAction?.('more')}
          className="shadow-xs ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant transition-all hover:bg-surface-container-highest"
        >
          <span className="material-symbols-outlined text-[18px]">more_horiz</span>
        </button>
      </div>
    </div>
  )
}
