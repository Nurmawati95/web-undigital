export const quickActions = [
  { id: 'galeri', label: 'Galery', icon: 'photo_library' },
  { id: 'love-story', label: 'Love Story', icon: 'favorite' },
  { id: 'rekening', label: 'Rekening Hadiah', icon: 'featured_seasonal_and_gifts' },
  { id: 'link', label: 'Link Tambahan', icon: 'link' },
  { id: 'susunan', label: 'Susunan Acara', icon: 'event_note' },
  { id: 'custom-form', label: 'Custom Form', icon: 'description' },
  { id: 'ucapan', label: 'Kelola Ucapan', icon: 'forum' },
  { id: 'qr', label: 'QR Buku Tamu', icon: 'qr_code_2' },
]

export const templateOptions = [
  { value: 'classic', label: 'Super-Classic — Rp. 0 (Gratis Default)' },
  { value: 'minimalist-sage', label: 'Minimalist Botanical Sage — Rp. 49.000 (Populer)' },
  { value: 'luxury-gold', label: 'Royal Midnight Gold — Rp. 75.000' },
  { value: 'javanese-modern', label: 'Javanese Heritage Modern — Rp. 59.000' },
  { value: 'sunda-ethereal', label: 'Sundanese Ethereal Blossom — Rp. 59.000' },
]

export const coverImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBUVgDkoqHr75zFjc-IvxCwJepOUTBub3v67orexyvt71y8whftWnacqhvIR8vlu_S-RTLwNKB03t3HYz_dge1joVAirqdsbEEqKwV9ogI64eldhL-eOb_ZNeBAhLNE7AoAp84exZ29UsPH_ynglxPDB1ObOAUFJJY6tH7-M1jevuu2e0wYOuTkWXcOw6pUmR_UgjEUOj-7xe_YlCVF4lJNVuBxNfKqVmWpuls1AQ9MnNiyrPI61K74'

export function initialForm(eventTitle = 'The Wedding of Putra & Putri') {
  return {
    wa: '81234567890',
    eventName: eventTitle,
    slug: 'the-wedding-of-putra-putri',
    hdUpload: true,
    template: 'classic',
    groomFull: '',
    groomNick: '',
    groomParents: '',
    brideFull: '',
    brideNick: '',
    brideParents: '',
    ceremonyTitle: 'Akad Nikah',
    ceremonyDate: '2025-08-17',
    venue: '',
    mapsLink: '',
    quote: '',
    autoplay: true,
    angpao: true,
    waTemplate: '',
  }
}

export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
