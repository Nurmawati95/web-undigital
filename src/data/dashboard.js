export const user = {
  name: 'Rian Ardiansyah',
  email: 'rian.ardiansyah@mail.id',
  badge: 'Member',
}

export const navSections = [
  {
    label: 'Content',
    items: [
      { label: 'Dashboard', icon: 'grid_view', path: 'dashboard', active: true },
      { label: 'Undangan Non-Link', icon: 'drafts', path: 'undangan-non-link', active: false },
      { label: 'List Tema', icon: 'palette', path: 'list-tema', active: false },
      { label: 'Cari Contoh', icon: 'explore', path: 'cari-contoh', active: false },
    ],
  },
  {
    label: 'Peluang',
    items: [
      { label: 'Dashboard Afiliator', icon: 'monetization_on', path: 'dashboard-afiliator', active: false },
      { label: 'Gabung Reseller', icon: 'handshake', path: 'gabung-reseller', active: false },
    ],
  },
]

export const events = [
  {
    id: 'putra-putri',
    title: 'The Wedding of Putra & Putri',
    status: 'inactive',
    statusLabel: 'Belum Aktif',
    dotClass: 'bg-error',
    date: 'Minggu, 18 Okt 2026',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAR6xKvySFFCBB5qmA1rmnM_-hp37g0_epg1vHTeZzpilYPTkQ5BguSpsSzvlBh7VNGf6oJWNASBnLgGB_baN0nuzNlshZc1CKuKM1eOKeVeopEdbA_V8YTrkk8_YkHOuX1h-9FJYDDIPJIZj7kvH8q2ULwNNJuahHb_fdpDjNFDLWen71O17ydWQgppS69v9dTp-l_HJO_Mjn94tTH1FXwi8oipnfsrJiVowIolNY',
    imageAlt:
      'Intimate portrait of Indonesian wedding couple in elegant pastel traditional modern attire smiling softly with outdoor garden blurred background',
    badgeIcon: 'lock',
    badgeIconClass: 'text-error',
    primaryAction: { label: 'Aktifkan', icon: 'bolt' },
  },
  {
    id: 'dimas-sarah',
    title: 'The Wedding of Dimas & Sarah',
    status: 'premium',
    statusLabel: 'PREMIUM',
    dotClass: 'bg-secondary',
    date: 'Minggu, 24 Mei 2026',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzuHF0k1N309RKjlkJz8CJwl_Q8TJqxKIzHWw-LKeanb4lmYjSpCt3geee-WcvTrkdcS7Ycb2BDWLQj7PaOeOUebJJEVCIsNBhY00cxMKPGZaVMe3ezsg6Y92qmxLyW1ho099kBw2XKI_u6IXMw5MrJicKzWxQ4GAunuNUwNHpIwBp7ZM0zqlRKYxw0nHXFxaxJKG1n_MUF_eML5ydSxTjwF3-oBW66dXD56QTUuw',
    imageAlt:
      'Charming Indonesian bride and groom in white modern kebaya and minimalist suit, cheerful laughter, cinematic natural daylight studio portrait',
    badgeIcon: 'verified',
    badgeIconClass: 'text-secondary',
    primaryAction: { label: 'Sebar', icon: 'send' },
  },
  {
    id: 'reza-anisa',
    title: 'The Wedding of Reza & Anisa',
    status: 'premium',
    statusLabel: 'PREMIUM',
    dotClass: 'bg-secondary',
    date: 'Sabtu, 12 Des 2026',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBHMS97PdvVu-DrZa7YSrjrKjUH_zrAKTOz_9VG1SCTsASHMjJM0Od6UFX7xo_8AgutKqNB-u90GkHUo3VPE7a_DOgv7K_vSaRPk4ICS5snRRxQr_H__PtUHDdQhpj1xnSDJLwqxt3p_65ydhW9SZewl-h9rUz2Cfuefm4zFJ4tklJqdcGhE7pDiGC8ImpGXZNuJJ0vV99B7iGg_zyjhjIB07xXn-eIat5puWFHzNY',
    imageAlt:
      'Sophisticated Indonesian wedding couple in earth-toned sage and gold traditional Javanese royal attire, golden hour soft rim light',
    badgeIcon: 'verified',
    badgeIconClass: 'text-secondary',
    primaryAction: { label: 'Sebar', icon: 'send' },
  },
]
