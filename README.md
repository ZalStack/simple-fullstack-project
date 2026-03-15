# Product Management System - Full Stack Application

## 📝 Deskripsi Proyek

Aplikasi full-stack untuk mengelola data produk dengan operasi CRUD (Create, Read, Update, Delete).

- **Backend API**: Node.js + Express + MySQL
- **Frontend**: React.js + React Router DOM

## 🚀 Teknologi yang Digunakan

### Backend
- Node.js & Express.js
- MySQL
- dotenv, cors

### Frontend
- React 
- React Router DOM 
- Vite
- CSS Murni (tanpa framework)

## 📁 Struktur Proyek

```
simple-fullstack-project/
├── express-backend/           # Backend API
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── productController.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── react-frontend/       # Frontend React
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── ProductCard.jsx
    │   │   ├── ProductForm.jsx
    │   │   ├── Loading.jsx
    │   │   └── Alert.jsx
    │   ├── pages/
    │   │   ├── HomePage.jsx
    │   │   ├── ProductsPage.jsx
    │   │   ├── ProductDetailPage.jsx
    │   │   ├── CreateProductPage.jsx
    │   │   └── EditProductPage.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── styles/
    │   │   └── App.css
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

## ✨ Fitur Aplikasi

### Backend API
- ✅ RESTful API untuk produk
- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ Koneksi MySQL dengan connection pool
- ✅ Error handling

### Frontend React
- ✅ Halaman Home
- ✅ Daftar produk dalam bentuk card
- ✅ Tambah produk baru
- ✅ Detail produk
- ✅ Edit produk
- ✅ Hapus produk dengan konfirmasi
- ✅ Loading states
- ✅ Error handling
- ✅ Responsive design
- ✅ Format currency Rupiah
- ✅ Stock badge (high/medium/low)

## 📋 Prerequisites

- Node.js (v18 atau lebih baru)
- npm atau yarn
- MySQL
- Git

## 🔧 Instalasi dan Setup

### 1. Setup Database MySQL

```sql
CREATE DATABASE product_db;

USE product_db;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    stock INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Sample data
INSERT INTO products (name, price, description, stock) VALUES
('Laptop ASUS', 8500000, 'Laptop ASUS dengan spesifikasi tinggi', 10),
('Mouse Logitech', 250000, 'Wireless mouse', 50),
('Keyboard Mechanical', 750000, 'Keyboard mechanical switch biru', 25);
```

### 2. Backend API

```bash
# Masuk ke folder backend
cd simple-product-api

# Install dependencies
npm install express mysql2 dotenv cors

# Buat file .env
echo "PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=product_db" > .env

# Jalankan server
node server.js
# atau dengan nodemon
npx nodemon server.js
```

Backend akan berjalan di `http://localhost:3000`

### 3. Frontend React

```bash
# Masuk ke folder frontend
cd product-react-frontend

# Install dependencies
npm install react-router-dom

# Jalankan aplikasi
npm run dev
```

Frontend akan berjalan di `http://localhost:5173`

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
```

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/products` | Mendapatkan semua produk |
| GET | `/products/:id` | Mendapatkan produk by ID |
| POST | `/products` | Membuat produk baru |
| PUT | `/products/:id` | Mengupdate produk |
| DELETE | `/products/:id` | Menghapus produk |

### Contoh Request Body (POST/PUT)
```json
{
  "name": "Nama Produk",
  "price": 500000,
  "description": "Deskripsi produk",
  "stock": 20
}
```

## 🎯 Cara Penggunaan Aplikasi

1. **Halaman Home** (`/`): Informasi aplikasi
2. **Lihat Produk** (`/products`): Daftar semua produk
3. **Tambah Produk** (`/products/create`): Form tambah produk
4. **Detail Produk**: Klik tombol "Detail" pada card produk
5. **Edit Produk**: Klik tombol "Edit" di halaman detail
6. **Hapus Produk**: Klik tombol "Hapus" (akan muncul konfirmasi)

## 🔍 Troubleshooting

### Backend Error

**Database Connection Error**
```bash
# Cek koneksi MySQL
mysql -u root -p -e "SHOW DATABASES;"

# Test endpoint
curl http://localhost:3000/api/products
```

**Port 3000 sudah digunakan**
```bash
# Ganti PORT di .env
PORT=3001

# Restart server
node server.js
```

### Frontend Error

**API Connection Error**
```bash
# Pastikan backend berjalan
curl http://localhost:3000/api/products

# Cek file src/services/api.js
# Pastikan API_BASE_URL = 'http://localhost:3000/api'
```

**Module Not Found**
```bash
rm -rf node_modules package-lock.json
npm install
```

**CORS Error**
```bash
# Pastikan di server.js ada:
app.use(cors());
```

## ⚡ Quick Start (Ringkasan)

```bash
# 1. Clone repository
git clone <repository-url>
cd product-management

# 2. Setup database (jalankan SQL di atas)

# 3. Jalankan backend
cd simple-product-api
npm install
cp .env.example .env  # edit sesuai konfigurasi
node server.js

# 4. Jalankan frontend (terminal baru)
cd product-react-frontend
npm install
npm run dev
```

Akses aplikasi di `http://localhost:5173`

## 📞 Kontak

Jika ada pertanyaan atau masalah, silakan buat issue di repository.
