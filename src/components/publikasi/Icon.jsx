// Lucide -> Material Symbols mapping (desain publikasi memakai lucide via CDN;
// di React kita pakai Material Symbols yang sudah ada agar tanpa dependensi baru)
export const L = {
  mailHeart: 'mail',
  smartphone: 'smartphone',
  share2: 'share',
  externalLink: 'open_in_new',
  sparkles: 'auto_awesome',
  music2: 'music_note',
  mailOpen: 'mark_email_read',
  shieldCheck: 'verified_user',
  disc3: 'album',
  chevronsDown: 'keyboard_double_arrow_down',
  calendarPlus: 'event',
  heart: 'favorite',
  instagram: 'photo_camera',
  bookOpen: 'menu_book',
  calendar: 'calendar_month',
  clock: 'schedule',
  mapPin: 'location_on',
  partyPopper: 'celebration',
  navigation: 'near_me',
  creditCard: 'credit_card',
  copy: 'content_copy',
  send: 'send',
  home: 'home',
  users: 'group',
  image: 'image',
  messageHeart: 'forum',
}

export function Icon({ name, className = 'w-4 h-4' }) {
  return <span className={`material-symbols-outlined ${className}`}>{L[name] ?? name}</span>
}
