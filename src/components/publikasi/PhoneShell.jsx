export function PhoneShell({ children, screenBg = 'bg-slate-900' }) {
  return (
    <div className="relative flex w-full max-w-[390px] flex-col overflow-hidden rounded-[44px] bg-slate-900 p-3 shadow-2xl shadow-black/80 ring-1 ring-white/20">
      <div className="absolute left-1/2 top-5 z-40 flex h-5 w-32 -translate-x-1/2 items-center justify-center rounded-full bg-black">
        <div className="mr-3 h-3 w-3 rounded-full border border-slate-800 bg-slate-950"></div>
        <div className="h-2.5 w-2.5 rounded-full border border-slate-800 bg-blue-950/60"></div>
      </div>
      <div className={`relative flex h-[780px] w-full flex-col overflow-hidden rounded-[34px] ${screenBg}`}>
        {children}
      </div>
    </div>
  )
}

export function CornerOrnaments() {
  const base = 'pointer-events-none absolute z-10 opacity-80'
  const svg = (
    <svg fill="none" height="60" stroke="#f1e2c3" strokeWidth="1.2" viewBox="0 0 60 60" width="60">
      <path d="M5,5 L35,5 C40,5 45,10 45,15 C45,25 25,45 15,45 C10,45 5,40 5,35 Z" opacity="0.6"></path>
      <path d="M5,5 L5,35 C5,45 15,55 25,55" strokeDasharray="2 3"></path>
      <circle cx="15" cy="15" fill="#f1e2c3" r="3"></circle>
    </svg>
  )
  return (
    <>
      <div className={`${base} left-5 top-5`}>{svg}</div>
      <div className={`${base} right-5 top-5 scale-x-[-1]`}>{svg}</div>
      <div className={`${base} bottom-5 left-5 scale-y-[-1]`}>{svg}</div>
      <div className={`${base} bottom-5 right-5 scale-[-1]`}>{svg}</div>
    </>
  )
}

export function HomeBar({ dark = false }) {
  return (
    <div
      className={`absolute bottom-2 left-1/2 z-40 h-1 w-32 -translate-x-1/2 rounded-full ${
        dark ? 'bg-slate-900/30' : 'bg-white/40'
      }`}
    ></div>
  )
}
