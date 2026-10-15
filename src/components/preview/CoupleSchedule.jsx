import { previewImages, scheduleEvents } from '../../data/preview.js'

function PersonCard({ photo, name, relation, parents, ig }) {
  return (
    <div className="flex w-full flex-col items-center rounded-3xl bg-surface-container-lowest p-5 text-center shadow-md">
      <div className="mb-3 bg-gradient-to-tr from-primary to-primary-container p-1 shadow-inner w-24 h-24 rounded-full overflow-hidden">
        <img className="h-full w-full rounded-full object-cover" alt={name} src={photo} />
      </div>
      <h3 className="font-headline-sm text-on-surface">{name}</h3>
      <p className="mt-1 font-label-md text-on-surface-variant">{relation}</p>
      <p className="font-body-sm font-semibold text-on-surface">{parents}</p>
      <a
        className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-surface-container px-3 py-1.5 font-label-sm text-primary transition-colors hover:bg-primary-fixed"
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <span className="material-symbols-outlined text-[16px]">photo_camera</span>
        <span>{ig}</span>
      </a>
    </div>
  )
}

export function CoupleSection() {
  return (
    <section id="section-couple" className="flex w-full flex-col items-center bg-surface-container-low px-5 py-10">
      <div className="mb-8 w-full max-w-sm rounded-3xl bg-surface-container-lowest p-6 text-center shadow-md">
        <span className="material-symbols-outlined mb-2 text-3xl text-primary">format_quote</span>
        <p className="font-body-sm italic leading-relaxed text-on-surface">
          “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu
          sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
          sayang.”
        </p>
        <span className="mt-3 block font-label-sm font-bold uppercase tracking-wider text-primary">QS. Ar-Rum: 21</span>
      </div>
      <div className="w-full space-y-6">
        <PersonCard
          photo={previewImages.groom}
          name="Putra Pratama, S.Kom"
          relation="Putra sulung dari:"
          parents="Bpk. Ir. Hendra & Ibu Rina"
          ig="@putrapratama"
        />
        <div className="flex items-center justify-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container font-headline-sm text-on-primary-container shadow-md">
            &
          </span>
        </div>
        <PersonCard
          photo={previewImages.bride}
          name="Putri Amanda, S.Ds"
          relation="Putri kedua dari:"
          parents="Bpk. Drs. Bambang & Ibu Siti"
          ig="@putriamanda"
        />
      </div>
    </section>
  )
}

export function ScheduleSection() {
  return (
    <section id="section-events" className="flex w-full flex-col items-center bg-surface-container-lowest px-5 py-10">
      <span className="font-label-sm uppercase tracking-widest text-primary">Waktu & Tempat</span>
      <h2 className="mb-6 font-headline-md text-on-surface">Agenda Acara</h2>
      <div className="w-full space-y-4">
        {scheduleEvents.map((e) => (
          <div key={e.id} className="w-full rounded-3xl bg-surface-container-low p-5 shadow-sm transition-all hover:shadow-md">
            <div className="mb-2 flex items-center justify-between">
              <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-label-sm font-bold ${e.badgeCls}`}>
                {e.badge}
              </span>
              <span className="flex items-center gap-1 font-label-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-[14px]">schedule</span> {e.time}
              </span>
            </div>
            <h3 className="font-headline-sm text-on-surface">{e.title}</h3>
            <p className="mt-1 font-body-sm text-on-surface-variant">{e.addr}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 w-full overflow-hidden rounded-3xl bg-surface-container shadow-md">
        <div
          className="flex h-48 w-full items-end bg-cover bg-center p-3"
          style={{ backgroundImage: `url('${previewImages.map}')` }}
        >
          <div className="flex w-full items-center justify-between rounded-xl bg-surface-container-lowest/90 p-2.5 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-error">pin_drop</span>
              <span className="truncate font-label-sm text-on-surface">Hotel Mulia Senayan, Jakarta</span>
            </div>
            <span className="font-label-sm font-semibold text-primary">Buka Maps</span>
          </div>
        </div>
      </div>
      <a
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3 font-label-md text-on-primary shadow-md transition-all hover:bg-primary/90"
        href="https://maps.google.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-[18px]">near_me</span>
        <span>Buka Petunjuk Arah Google Maps</span>
      </a>
    </section>
  )
}
