# Orientasi Penyusunan RKPD Provinsi Kepulauan Bangka Belitung Tahun 2028

Halaman pusat informasi dan tautan resmi (GitHub Pages) untuk agenda:

- **Agenda:** Orientasi Penyusunan RKPD Provinsi Kepulauan Bangka Belitung Tahun 2028
- **Hari/Tanggal:** Rabu, 25 November 2026
- **Waktu:** 09.00 WIB s.d Selesai
- **ID Meeting Zoom:** `984 2528 5233` (`98425285233`)
- **Password:** `RKPD26`
- **URL GitHub Pages:** `https://bandibappeda.github.io/OrientasiRKPD2028/`

## Cara Mengubah / Menambah Tautan Acara

Semua tautan acara (**Link Zoom**, **Materi**, **Link Absensi**, **Virtual Background**, **Link Dokumentasi**, dan **Rundown Acara**) dikelola di satu file: **`config.js`**.

1. Buka `config.js`.
2. Isi properti `url` pada setiap item di dalam `resources` dengan URL lengkap (contoh: `https://drive.google.com/...` atau `https://forms.gle/...`).
3. Jika memiliki tautan Zoom lengkap dengan `?pwd=...`, perbarui `zoom.joinUrl` dan item `id: "zoom"` di `config.js`.
4. Commit & push perubahan ke GitHub Pages.

## Thumbnail WhatsApp (Open Graph)

Meta tag `og:*` dan `twitter:*` di `index.html` sudah diarahkan ke:

- `https://bandibappeda.github.io/OrientasiRKPD2028/`
- `https://bandibappeda.github.io/OrientasiRKPD2028/og-image.jpg` (`1200 × 630` px, JPEG terkompresi optimal di bawah 300 KB untuk WhatsApp).

> **Catatan:** Jika nama repositori GitHub berbeda dari `OrientasiRKPD2028`, perbarui nilai URL pada `index.html` (tag `og:url`, `og:image`, `og:image:secure_url`, `twitter:image`, dan `canonical`) serta `pageUrl` di `config.js`.
