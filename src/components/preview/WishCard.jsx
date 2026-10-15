export function WishCard({ w }) {  return (
    <div className="rounded-2xl bg-surface-container-lowest p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`flex h-8 w-8 items-center justify-center rounded-full font-label-md ${w.avatarCls}`}>
            {w.initials}
          </div>
          <div>
            <h4 className="font-label-md font-bold text-on-surface">{w.name}</h4>
            <span className="font-label-sm text-[11px] text-on-surface-variant">{w.time}</span>
          </div>
        </div>
        <span
          className={`rounded-full px-2 py-0.5 font-label-sm text-[10px] ${
            w.hadir ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-highest text-on-surface'
          }`}
        >
          {w.status}
        </span>
      </div>
      <p className="mt-2 font-body-sm text-on-surface">{w.text}</p>
    </div>
  )
}
