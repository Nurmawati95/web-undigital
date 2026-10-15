# web-undigital — Landing + Dashboard + Formulir (React + Vite)

Konversi setia dari tiga desain HTML menjadi aplikasi React + Vite + Tailwind CSS:

- `desain/undigital_landing_page_desktop/code.html` → halaman **Landing Page** (rute awal `/`)
- `desain/undigital_dashboard_user_data_acara/code.html` → halaman **Data Acara**
- `desain/undigital_formulir_edit_data_undangan/code.html` → halaman **Formulir Pengaturan Undangan**

## Struktur

```
index.html
vite.config.js
tailwind.config.js        # token warna/spasi/tipografi dari desain asli
postcss.config.js
src/
  main.jsx
  index.css
  App.jsx                 # routing landing/dashboard/formulir + toast
  data/
    dashboard.js          # user, navigasi, 3 acara contoh
    formulir.js           # quick actions, opsi template, form awal, slugify
    landing.js            # nav, avatar, 4 template flank, cover HP
    landingExtra.js       # 3 fitur + kategori + 4 kartu katalog
  pages/
    LandingPage.jsx       # hero + fitur + katalog
    DashboardPage.jsx     # halaman Data Acara
    FormulirEditPage.jsx  # halaman Formulir Edit (9 accordion + bottom bar)
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
- Landing → CTA lain, filter kategori, Demo/Gunakan, footer, FAB = toast demo; link WA admin asli (tab baru).
- Dashboard → **Edit Form** / **Tambah Acara** membuka formulir; tombol **Kembali ke Landing Page** ke awal.
- Formulir → breadcrumb / **Menu** kembali ke dashboard; **Simpan** validasi WA + nama + slug.


