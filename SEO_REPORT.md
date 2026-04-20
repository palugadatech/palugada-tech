# SEO Report

## Ringkasan Scan

- Tipe proyek: React + Vite landing page / single page.
- Page component teridentifikasi:
  - `src/pages/HomePage.jsx` -> route `/`
  - `src/pages/NotFound.jsx` -> route `*` / fallback 404
- UI/section component:
  - `src/components/layout/Navbar.jsx`
  - `src/components/layout/Footer.jsx`
  - `src/components/layout/FloatingWhatsApp.jsx`
  - `src/components/sections/Hero.jsx`
  - `src/components/sections/PainPoints.jsx`
  - `src/components/sections/Services.jsx`
  - `src/components/sections/Portfolio.jsx`
  - `src/components/sections/Workflow.jsx`
  - `src/components/sections/FAQ.jsx`
- Route dinamis: tidak ditemukan.

## File Diubah

### `package.json`
- Menambahkan dependency `react-helmet-async`.
- Menambahkan dependency `react-router-dom`.

### `src/main.jsx`
- Menambahkan `HelmetProvider`.
- Menambahkan `BrowserRouter` untuk routing SPA dan dukungan halaman 404.

### `src/App.jsx`
- Mengubah entry utama menjadi router berbasis `Routes`.
- Menerapkan `React.lazy()` + `Suspense` untuk semua page component.

### `src/lib/seo.js`
- Menambahkan helper `BASE_URL`, `DEFAULT_OG_IMAGE`, dan generator canonical URL absolut.

### `src/pages/HomePage.jsx`
- Membuat page component homepage terpisah untuk route `/`.
- Menambahkan `title` unik 54 karakter dengan keyword utama di awal.
- Menambahkan meta description 151 karakter.
- Menambahkan canonical URL penuh.
- Menambahkan Open Graph lengkap.
- Menambahkan Twitter Card lengkap.
- Menambahkan schema `WebSite`, `Organization`, dan `BreadcrumbList`.

### `src/pages/NotFound.jsx`
- Membuat halaman 404 terpisah di `src/pages/NotFound.jsx`.
- Menambahkan `meta robots="noindex"`.
- Menambahkan title, description, canonical, OG, Twitter Card.
- Menambahkan UI informatif dan tombol kembali ke homepage.
- Menambahkan `BreadcrumbList`.

### `src/components/sections/Hero.jsx`
- Memperbarui `<h1>` agar mengandung keyword utama.
- Memperbaiki `alt` gambar hero agar deskriptif dan relevan.

### `src/components/sections/Portfolio.jsx`
- Memperbaiki `alt` semua gambar portfolio agar lebih spesifik.
- Menambahkan `loading="lazy"` pada gambar non-fold.
- Menambahkan `decoding="async"` untuk optimasi render gambar.

### `src/components/layout/Navbar.jsx`
- Memperbaiki `alt` logo agar lebih deskriptif.

### `src/components/layout/Footer.jsx`
- Memperbaiki `alt` logo footer.
- Menambahkan `loading="lazy"` untuk logo footer yang berada di bawah fold.

### `index.html`
- Memperbarui fallback `<title>` dan `<meta name="description">`.
- Menambahkan preload untuk CSS kritis.
- Menambahkan preload untuk gambar hero/LCP.

## Catatan Manual

- Canonical, OG URL, dan image URL saat ini masih memakai placeholder `https://belum-ada` sesuai brief. Setelah domain final tersedia, ganti nilai `BASE_URL` di `src/lib/seo.js`.
- Tidak ada halaman produk, kategori, blog, atau route dinamis di codebase saat scan dilakukan, sehingga schema `Product`, `Offer`, `Article`, dan `ItemList` belum diterapkan.
- Proyek tidak memiliki aset font lokal khusus, jadi preload font belum ditambahkan. Jika nanti memakai font self-hosted, tambahkan preload font di `index.html`.
- Hasil build produksi berhasil. Warning `use client` berasal dari dependency pihak ketiga saat bundling dan tidak memblokir build.
