export default function Accordion({ id, icon, title, open, onToggle, children }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm transition-all">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between bg-primary-fixed/40 px-5 py-4 text-left transition-colors hover:bg-primary-fixed/60"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-fixed text-primary shadow-xs">
            <span className="material-symbols-outlined text-[20px]">{icon}</span>
          </div>
          <span className="font-headline-sm text-label-lg font-bold uppercase tracking-wider text-on-surface">
            {title}
          </span>
        </div>
        <span
          className={`material-symbols-outlined text-[22px] text-primary transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        >
          keyboard_arrow_down
        </span>
      </button>
      {open && <div id={id} className="flex flex-col gap-5 p-6 md:p-8">{children}</div>}
    </div>
  )
}

export function Field({ label, required, hint, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-label-lg text-label-lg text-on-surface">
        <span className="inline-flex items-center gap-1.5">
          <span>{label}</span>
          {required && <span className="text-error">*</span>}
        </span>
      </label>
      {children}
      {hint && <p className="font-body-sm text-body-sm text-outline">{hint}</p>}
    </div>
  )
}

export function TextInput(props) {
  return (
    <input
      {...props}
      className="w-full rounded-xl bg-surface-container-low px-4 py-2.5 font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:outline-none focus:shadow-[0_0_0_2px_#29b6f6]"
    />
  )
}

export function TextArea(props) {
  return (
    <textarea
      {...props}
      className="w-full rounded-xl bg-surface-container-low p-4 font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:outline-none focus:shadow-[0_0_0_2px_#29b6f6]"
    />
  )
}
