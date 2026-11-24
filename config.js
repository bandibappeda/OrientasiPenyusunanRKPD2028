/**
 * =============================================================================
 * KONFIGURASI PUSAT — ORIENTASI PENYUSUNAN RKPD 2028
 * =============================================================================
 * Cukup ubah tautan di file ini saja ketika materi, absensi, virtual background,
 * dokumentasi, rundown, atau tautan lengkap Zoom sudah tersedia.
 *
 * Cara mengisi:
 * - Ganti tanda "" (string kosong) dengan URL lengkap (diawali https://...).
 * - Biarkan "" jika tautan belum tersedia (tombol otomatis menampilkan badge
 *   "Segera" dan notifikasi ramah saat diklik).
 */
window.EVENT_CONFIG = {
  // URL resmi GitHub Pages ini (digunakan saat berbagi undangan ke WhatsApp)
  pageUrl: "https://bandibappeda.github.io/OrientasiPenyusunanRKPD2028/",

  // Detail agenda utama
  event: {
    title: "Orientasi Penyusunan RKPD Provinsi Kepulauan Bangka Belitung Tahun 2028",
    shortTitle: "Orientasi Penyusunan RKPD 2028",
    organizer: "Bappeda Provinsi Kepulauan Bangka Belitung",
    dateLabel: "Rabu, 25 November 2026",
    timeLabel: "09.00 WIB s.d Selesai",
    // Waktu mulai & perkiraan selesai dalam WIB (UTC+07:00) untuk hitung mundur & kalender
    startISO: "2026-11-25T09:00:00+07:00",
    endISO: "2026-11-25T16:00:00+07:00",
  },

  // Kredensial Zoom Meeting
  zoom: {
    meetingIdRaw: "98425285233",
    meetingIdFormatted: "984 2528 5233",
    passcode: "RKPD26",
    // Tautan langsung Zoom Meeting dengan passcode tersemat
    joinUrl: "https://zoom.us/j/98425285233?pwd=6sYc0u4zIDKAaaTz2TIJGend43oBTm.1",
  },

  // Daftar kartu tautan acara — isi `url` di sini satu tempat
  resources: [
    {
      id: "zoom",
      label: "Link Zoom",
      subtitle: "ID: 984 2528 5233 · Passcode: RKPD26",
      url: "https://zoom.us/j/98425285233?pwd=6sYc0u4zIDKAaaTz2TIJGend43oBTm.1",
      icon: "video",
    },
    {
      id: "materi",
      label: "Materi",
      url: "https://drive.google.com/drive/folders/1JJpmRJy-c3_iBOzsJbDBpGvr-gCQ2Xi7?usp=sharing",
      icon: "folder",
    },
    {
      id: "absensi",
      label: "Link Absensi",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSclmY3_h9u7NsEoZMpgGU9dGrhe633W4nSEqmZOYOXCIHojRA/viewform?usp=publish-editor",
      icon: "check",
    },
    {
      id: "vbg",
      label: "Virtual Background",
      url: "https://drive.google.com/drive/folders/1QtZU90_5EUbg9-B_mpzolKVinV8bNGCf?usp=sharing",
      icon: "image",
    },
    {
      id: "dokumentasi",
      label: "Link Dokumentasi",
      url: "https://drive.google.com/drive/folders/1CMS1PfJSqyZAZfEzlYtI3qgDCg5KmdUG?usp=sharing",
      icon: "camera",
    },
    {
      id: "rundown",
      label: "Rundown Acara",
      url: "https://drive.google.com/drive/folders/1Xf-SJ1hSSNugP6FY3VYM_BNVi1atWZGy?usp=sharing",
      icon: "schedule",
    },
  ],
};
