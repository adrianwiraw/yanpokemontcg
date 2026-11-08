package main

import (
	"log"
	"os"
	"yanpokemontcg/server/config"
	"yanpokemontcg/server/routes"

	"github.com/joho/godotenv"
)

func main() {
	// 1. Load file .env untuk membaca konfigurasi database & JWT
	err := godotenv.Load()
	if err != nil {
		log.Println("Peringatan: File .env tidak ditemukan, menggunakan environment system")
	}

	// 2. Inisialisasi OAuth Google
	config.InitOauth()

	// 3. Jalankan koneksi ke MongoDB dan ambil instance client-nya
	config.ConnectDB()
	client := config.DB // Ini menampung *mongo.Client dari db.go lu

	// Use the configured database name and keep the local default backwards compatible.
	dbName := os.Getenv("MONGODB_DB_NAME")
	if dbName == "" {
		dbName = "pokemontcg_db"
	}
	db := client.Database(dbName)

	// 5. Ambil port dari .env, jika tidak ada gunakan default 8080
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// 6. Jalankan router Gin dengan mengoper variabel 'db' (*mongo.Database) ke dalamnya
	r := routes.SetupRouter(db) // 🔥 SEKARANG ARGUMENNYA PAS DAN SINKRON, BRE!

	log.Printf("Server berjalan lancar di port %s 🚀", port)

	err = r.Run(":" + port)
	if err != nil {
		log.Fatal("Gagal menjalankan server Gin:", err)
	}
}
