# web-undigital — Dashboard Data Acara (React + Vite)

Hasil konversi setia dari `desain/undigital_dashboard_user_data_acara/code.html`
menjadi aplikasi React + Vite + Tailwind CSS.

## Struktur

```
index.html
vite.config.js
tailwind.config.js        # token warna/spasi/tipografi dari desain asli
postcss.config.js
src/
  main.jsx
  index.css
  App.jsx                 # shell dashboard + state pencarian & tambah acara
  data/dashboard.js       # user, navigasi, 3 acara contoh
  components/
    Sidebar.jsx
    Header.jsx
    PageIntro.jsx         # judul + kartu afiliasi
    PromoBanners.jsx      # 2 banner promo
    EventCard.jsx         # kartu acara (Belum Aktif / PREMIUM)
```

## Menjalankan

```powershell
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Catatan desain

- Font: Plus Jakarta Sans + Material Symbols Outlined via Google Fonts (di `index.html`).
- Token warna Tailwind disalin dari `tailwind.config` inline pada HTML asli.
- Gambar avatar memakai URL `lh3.googleusercontent.com` dari desain; ganti dengan
  aset lokal bila offline.
- Sidebar responsif: overlay di mobile, fixed 260px di desktop — sama seperti HTML.
- Pencarian header memfilter kartu acara; tombol Tambah Acara menambah kartu baru;
  tombol Aktifkan mengubah kartu menjadi PREMIUM (demo interaktif, tanpa backend).
