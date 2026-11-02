# Yandev 

**Yandev** adalah koleksi aplikasi web lintas bahasa dan *framework* yang dirancang untuk pengujian performa, eksperimen arsitektur, dan pengembangan sistem:

* **Python:** FastAPI, Django, Flask *(Layanan REST API & Machine Learning)*
* **JavaScript / TypeScript:** Next.js, React, Vue.js, Express.js *(Aplikasi Full-Stack & Real-Time)*
* **Go:** Gin, Fiber *(Microservices & High-Concurrency Backend)*
* **Rust:** Actix-web, Axum *(Sistem High-Performance & Low-Latency)*
* **PHP:** Laravel, Symfony *(Aplikasi Enterprise & CMS)*
* **Java:** Spring Boot *(Arsitektur Sistem Skala Besar)*

---

## 🚀 Cara Memulai (Setup Global)

Kloning repositori ini untuk mengakses seluruh proyek:

```bash
git clone https://github.com/username/yandev-web-projects.git
cd yandev-web-projects
```

---

## 📁 Daftar Proyek

### 1. 🎴 PokémonTCG Dashboard & Marketplace
Aplikasi *full-stack marketplace* dan koleksi kartu Pokémon berbasis **MNG Stack** (MongoDB, Next.js, Go/Gin).

* **Folder:** `./yanpokemontcg`
* **Live Demo:** [yanpokemontcg.vercel.app](https://yanpokemontcg.vercel.app)
* **Stack:** Next.js, Go (Gin), MongoDB, Midtrans, Google OAuth
* **Cara Menjalankan:**
  ```bash
  cd yanpokemontcg
  # [Frontend]
  npm install && npm run dev
  # [Backend - di terminal terpisah]
  cd server && go run main.go
  ```

---

### 🛠️ [Placeholder Proyek Lainnya]

Untuk menjalankan proyek berbasis bahasa atau *framework* lain di dalam repositori ini, gunakan panduan umum berikut:

* **Node.js / Express / Next.js / Vue:**
  ```bash
  cd <nama-folder-proyek>
  npm install && npm run dev
  ```

* **Go (Gin / Fiber):**
  ```bash
  cd <nama-folder-proyek>
  go run main.go
  ```

* **Python (FastAPI / Django / Flask):**
  ```bash
  cd <nama-folder-proyek>
  python -m venv venv && source venv/bin/activate
  pip install -r requirements.txt
  python main.py # atau uvicorn main:app --reload
  ```

* **Rust (Actix / Axum):**
  ```bash
  cd <nama-folder-proyek>
  cargo run
  ```

* **PHP (Laravel / Symfony):**
  ```bash
  cd <nama-folder-proyek>
  composer install && php artisan serve
  ```

* **Java (Spring Boot):**
  ```bash
  cd <nama-folder-proyek>
  ./mvnw spring-boot:run
  ```

> *Detail konfigurasi `.env` dan instruksi spesifik dapat dilihat pada `README.md` di dalam masing-masing folder proyek.*
