export default function TemplateCard({ t, onAction }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-surface-container-high bg-surface-container-lowest shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative h-52 w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('${t.img}')` }}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60"></div>
        <div className="absolute left-3 top-3 flex items-center gap-1.5">
          {t.badges.map((b) => (
            <span key={b.label} className={`rounded-full px-2.5 py-1 font-label-sm text-xs font-bold shadow-sm ${b.cls}`}>
              {b.label}
            </span>
          ))}
        </div>
        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-surface-container-lowest/90 px-2.5 py-1 text-[11px] font-semibold text-on-surface shadow-sm backdrop-blur-md">
          <span className="material-symbols-outlined text-[14px] text-primary">music_note</span>
          <span>{t.music}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-space-sm p-space-md">
        <div>
          <div className="mb-1 flex items-center justify-between text-xs text-on-surface-variant">
            <span className={`font-label-sm text-[11px] font-semibold uppercase tracking-wider ${t.catColor}`}>{t.cat}</span>
            <span className="flex items-center gap-1 text-xs font-bold text-amber-500">
              <span className="material-symbols-outlined fill-current text-[14px]">star</span> {t.rating}
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-[18px] text-on-surface">{t.title}</h3>
          <p className="mt-1 font-body-sm text-body-sm leading-snug text-on-surface-variant">{t.desc}</p>
        </div>
        <div className="flex items-center gap-2 pt-space-xs">
          <button onClick={() => onAction?.(`demo:${t.id}`)} className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-surface-container-low px-3 py-2 text-center font-label-md text-label-md font-semibold text-on-surface transition-colors hover:bg-surface-container">
            <span className="material-symbols-outlined text-[16px]">visibility</span>
            <span>Demo</span>
          </button>
          <button onClick={() => onAction?.(`pakai:${t.id}`)} className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-primary-container px-3 py-2 text-center font-label-md text-label-md font-semibold text-on-primary shadow-sm transition-colors hover:bg-primary">
            <span className="material-symbols-outlined text-[16px]">edit_note</span>
            <span>Gunakan</span>
          </button>
        </div>
      </div>
    </div>
  )
}
