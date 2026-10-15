# web-undigital — Landing + Dashboard + Formulir + Preview (React + Vite)

Konversi setia dari empat desain HTML menjadi aplikasi React + Vite + Tailwind CSS:

- `desain/undigital_landing_page_desktop/code.html` → halaman **Landing Page** (rute awal `/`)
- `desain/undigital_dashboard_user_data_acara/code.html` → halaman **Data Acara**
- `desain/undigital_formulir_edit_data_undangan/code.html` → halaman **Formulir Pengaturan Undangan**
- `desain/undigital_live_preview_demo_undangan_digital_super_classic/code.html` → halaman **Live Preview Super-Classic**

## Struktur

```
index.html
vite.config.js
tailwind.config.js        # token warna/spasi/tipografi dari desain asli
postcss.config.js
src/
  main.jsx
  index.css
  App.jsx                 # routing landing/dashboard/formulir/preview + toast
  data/
    dashboard.js          # user, navigasi, 3 acara contoh
    formulir.js           # quick actions, opsi template, form awal, slugify
    landing.js            # nav, avatar, 4 template flank, cover HP
    landingExtra.js       # 3 fitur + kategori + 4 kartu katalog
    preview.js            # gambar, timeline, jadwal, ucapan, rekening
  pages/
    LandingPage.jsx       # hero + fitur + katalog
    DashboardPage.jsx     # halaman Data Acara
    FormulirEditPage.jsx  # halaman Formulir Edit (9 accordion + bottom bar)
    PreviewPage.jsx       # live preview Super-Classic (7 section + HP)
  components/
    Sidebar.jsx           # sidebar 260px (prop activePath)
    Header.jsx            # header + search
    PageIntro.jsx
    PromoBanners.jsx
    EventCard.jsx
    landing/
      LandingHeader.jsx   # header fixed + nav + Mulai Gratis + WaIcon
      HeroCopy.jsx        # badge, headline, 2 CTA, rating, tags
      HeroShowcase.jsx    # 4 kartu miring + mockup HP + badge melayang
      FeatureSection.jsx  # 3 pilar fitur
      CatalogSection.jsx  # filter kategori + grid kartu
      TemplateCard.jsx    # kartu template katalog
      LandingFab.jsx      # tooltip admin + tombol WA
      LandingFooter.jsx   # footer 5 kolom + copyright
    preview/
      PreviewHeader.jsx   # header demo + switch Mobile/Full + Gunakan
      DemoToolbar.jsx     # badge DEMO + kontrol layar + Bagikan/Gunakan
      PhoneFrame.jsx      # bingkai HP + status bar + tombol audio
      CoverHero.jsx       # sampul + countdown live + hero arch
      CoupleSchedule.jsx  # profil mempelai + jadwal + peta
      GallerySection.jsx  # timeline love story + galeri + QrArt
      GiftSection.jsx     # BCA/Mandiri/QRIS + salin rekening
      RsvpSection.jsx     # form RSVP + QR check-in + feed ucapan
      WishCard.jsx        # kartu ucapan tamu
      NavModal.jsx        # bottom nav HP + modal QR buku tamu
    form/
      Accordion.jsx       # Accordion + Field + TextInput + TextArea
      FormHeader.jsx      # breadcrumb + judul + live preview + 8 pills
      InfoDasarPart1.jsx  # WA + nama acara + slug
      InfoDasarPart2.jsx  # cover + template
      CoupleSections.jsx  # pria / wanita / acara 1
      ExtraSections.jsx   # galeri / ucapan / setting / WA / lainnya
```

## Menjalankan

```powershell
npm install
npm run dev      # http://localhost:5173
npx vite build
```

## Alur navigasi

- Landing (awal) → **Buat Undangan Gratis / Registrasi** → dasbor; **Login / Masuk Dasbor** → dasbor.
- Landing → tombol **Buka Undangan** di mockup HP & **Demo** di katalog membuka **Live Preview**; aksi lain = toast demo; link WA admin asli (tab baru).
- Preview → header **Gunakan Template Ini** ke dasbor; toolbar **Bagikan** salin URL; switch Mobile/Full; countdown detik live; RSVP menambah ucapan; salin rekening via clipboard; QR tamu modal; bottom nav scroll.
- Dashboard → **Edit Form** / **Tambah Acara** membuka formulir; tombol **Kembali ke Landing Page** ke awal.
- Formulir → breadcrumb / **Menu** kembali ke dashboard; **Simpan** validasi WA + nama + slug.


