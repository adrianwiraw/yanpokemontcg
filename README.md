<<<<<<< HEAD
<div align="center">
  <img src="./public/Thumbnail.png" alt="PokemonTCG Dashboard & Marketplace" />

  <h1 align="center" style="font-family: 'Pokemon', Arial, sans-serif; font-size: 3rem; margin-top: 1rem;">
    PokémonTCG Dashboard & Marketplace
  </h1>

  <p>
    <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"></a>
    <a href="https://react.dev"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"></a>
    <a href="https://go.dev"><img src="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white" alt="Go"></a>
    <a href="https://gin-gonic.com"><img src="https://img.shields.io/badge/Gin-000000?style=for-the-badge&logo=go&logoColor=white" alt="Gin"></a>
    <a href="https://www.mongodb.com"><img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"></a>
  </p>
</div>

A full-stack Pokemon trading card application built with Next.js for the frontend and Go/Gin for the backend. Aplikasi ini mendukung registrasi, verifikasi OTP email, login manual dan Google OAuth, serta fitur dashboard koleksi kartu dengan pembelian menggunakan koin.

## Fitur Utama

### Autentikasi & Profil

- Registrasi akun dengan email dan password.
- Verifikasi akun melalui OTP yang dikirimkan ke email.
- Login manual email/password.
- Login Google OAuth.
- Token JWT disimpan di `localStorage` dan cookie untuk mendukung akses frontend dan middleware.
- Dashboard profile menampilkan nama, email, bio, dan avatar pengguna.
- Logout membersihkan session user, token, cookie, dan cache klien.

### Dashboard Pengguna

- Halaman dashboard menampilkan koleksi kartu Pokemon milik pengguna.
- Komponen detail kartu menampilkan informasi kartu dan harga.
- Pesan fallback ditampilkan jika koleksi kosong.
- Profile card menampilkan status pengguna secara ringkas.

### Marketplace & Checkout

- Marketplace menampilkan showcase kartu Pokemon.
- Checkout kartu menggunakan saldo koin pengguna.
- Backend memperbarui saldo koin dan menambahkan kartu ke koleksi setelah pembelian.
- Pesan error ramah ketika koin tidak cukup atau keranjang kosong.

### Top-Up Koin & Pembayaran

- Dukungan top-up koin melalui Midtrans sandbox.
- Endpoint backend membuat Snap token untuk Midtrans.
- Webhook Midtrans memproses status pembayaran seperti `capture`, `settlement`, `deny`, `expire`, dan `cancel`.
- Koin otomatis ditambahkan ke akun user saat pembayaran berhasil.

### Backend & Data

- Backend API dibuat dengan Go dan framework Gin.
- Database MongoDB menyimpan data user, OTP, kartu, dan transaksi.
- Middleware autentikasi memvalidasi token JWT sebelum akses ke route dashboard dan marketplace.
- Struktur API mencakup route register, verify, login, logout, dashboard, marketplace, dan payment.

## Struktur Proyek

### Frontend

- `app/` — Next.js App Router.
- `app/(auth)/auth/` — halaman login, register, verifikasi OTP, dan sukses.
- `app/(dashboard)/dashboard/` — halaman dashboard dan komponen terkait.
- `components/` — komponen UI global.
- `src/` — context, services, hooks, util, tipe, dan konfigurasi.

### Backend

- `server/` — backend Go.
- `server/config/` — konfigurasi database, OAuth, dan Midtrans.
- `server/controllers/` — logika API endpoint.
- `server/middleware/` — middleware autentikasi.
- `server/routes/` — routing API.
- `server/models/` — model data untuk MongoDB.

## Instalasi & Jalankan Lokal

1. Install dependency frontend:

```bash
npm install
```

2. Jalankan frontend:

```bash
npm run dev
```

3. Siapkan backend Go sesuai environment variables.
4. Jalankan backend Go dengan konfigurasi yang sesuai.

## Environment Variables Backend

Pastikan backend mengatur env berikut:

- `JWT_SECRET`
- `FRONTEND_URL`
- `MONGODB_URI`
- `MONGODB_DB_NAME`
- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`
- `MIDTRANS_SERVER_KEY`
- `NODE_ENV`

## Catatan

README ini dibuat untuk menjelaskan fitur aplikasi dan struktur utamanya. Untuk detail implementasi, lihat file di `server/controllers` dan `app/(dashboard)`.
=======
# Happy Development uwuu💖

```text
██╗   ██╗ █████╗ ███╗   ██╗██████╗ ███████╗██╗   ██╗
╚██  ██╔╝██╔══██╗████╗  ██║██╔══██╗██╔════╝██║   ██║
 ╚████╔╝ ███████║██╔██╗ ██║██║  ██║█████╗  ██║   ██║
  ╚██╔╝  ██╔══██║██║╚██╗██║██║  ██║██╔══╝  ╚██╗ ██╔╝
   ██║   ██║  ██║██║ ╚████║██████╔╝███████╗ ╚████╔╝ 
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝  ╚═══╝  
```

Yandev adalah kumpulan aplikasi web eksperimental lintas bahasa dan framework yang dirancang untuk pengujian performa, eksplorasi arsitektur, dan pengembangan sistem.

## Web Projects

- [yanpokemontcg](./yanpokemontcg/README.md) — Aplikasi *full-stack marketplace* dan manajemen koleksi kartu Pokémon berbasis MNG Stack (MongoDB, Next.js, Go/Gin). Mendukung autentikasi multi-metode, transaksi koin *in-app*, serta integrasi *payment gateway* Midtrans.

## Penggunaan & Pengujian Lab

Seluruh proyek dalam repositori ini ditujukan untuk lingkungan pengujian laboratorium (*sandbox*). Pastikan untuk mengonfigurasi `environment variables` secara terisolasi dan menggunakan kredensial pengujian (*sandbox/demo mode*) saat menjalankan fitur pihak ketiga.
>>>>>>> d1be472ce68987da17fb09849c7a5681aa5873ab
