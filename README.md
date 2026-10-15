# web-undigital — Dashboard + Formulir Edit Undangan (React + Vite)

Konversi setia dari dua desain HTML menjadi aplikasi React + Vite + Tailwind CSS:

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
  App.jsx                 # shell + navigasi dashboard <-> formulir + toast
  data/
    dashboard.js          # user, navigasi, 3 acara contoh
    formulir.js           # quick actions, opsi template, form awal, slugify
  pages/
    DashboardPage.jsx     # halaman Data Acara
    FormulirEditPage.jsx  # halaman Formulir Edit (9 accordion + bottom bar)
  components/
    Sidebar.jsx           # sidebar 260px (prop activePath)
    Header.jsx            # header + search
    PageIntro.jsx
    PromoBanners.jsx
    EventCard.jsx
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

- Dashboard → **Edit Form** pada kartu acara membuka Formulir Edit judul tsb.
- Dashboard → **Tambah Acara** menambah kartu lalu membuka formulirnya.
- Formulir → breadcrumb / tombol **Menu** kembali ke dashboard.
- Tombol **Simpan** memvalidasi WA, nama acara, dan slug; **Aktifkan** memberi toast.
- Semua tombol lain memberi toast demo (tanpa backend).

