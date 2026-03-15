# Product Management System - Full Stack Application

## 📝 Project Description

A full-stack application for managing product data with CRUD operations (Create, Read, Update, Delete).

- **Backend API**: Node.js + Express + MySQL
- **Frontend**: React.js + React Router DOM

## 🚀 Technologies Used

### Backend
- Node.js & Express.js
- MySQL
- dotenv, cors

### Frontend
- React 
- React Router DOM 
- Vite
- Pure CSS (no framework)

## 📁 Project Structure

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

## ✨ Application Features

### Backend API
- ✅ RESTful API for products
- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ MySQL connection with connection pool
- ✅ Error handling

### React Frontend
- ✅ Home page
- ✅ Product list in card format
- ✅ Add new product
- ✅ Product details
- ✅ Edit product
- ✅ Delete product with confirmation
- ✅ Loading states
- ✅ Error handling
- ✅ Responsive design
- ✅ Indonesian Rupiah currency format
- ✅ Stock badge (high/medium/low)

## 📋 Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- MySQL
- Git

## 🔧 Installation and Setup

### 1. MySQL Database Setup

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
('ASUS Laptop', 8500000, 'ASUS laptop with high specifications', 10),
('Logitech Mouse', 250000, 'Wireless mouse', 50),
('Mechanical Keyboard', 750000, 'Mechanical keyboard with blue switch', 25);
```

### 2. Backend API

```bash
# Navigate to backend folder
cd express-backend

# Install dependencies
npm install express mysql2 dotenv cors

# Create .env file
echo "PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=product_db" > .env

# Run the server
node server.js
# or with nodemon
npx nodemon server.js
```

Backend will run at `http://localhost:3000`

### 3. React Frontend

```bash
# Navigate to frontend folder
cd react-frontend

# Install dependencies
npm install react-router-dom

# Run the application
npm run dev
```

Frontend will run at `http://localhost:5173`

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
```

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get product by ID |
| POST | `/products` | Create new product |
| PUT | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |

### Example Request Body (POST/PUT)
```json
{
  "name": "Product Name",
  "price": 500000,
  "description": "Product description",
  "stock": 20
}
```

## 🎯 How to Use the Application

1. **Home Page** (`/`): Application information
2. **View Products** (`/products`): List all products
3. **Add Product** (`/products/create`): Add product form
4. **Product Details**: Click "Detail" button on product card
5. **Edit Product**: Click "Edit" button on detail page
6. **Delete Product**: Click "Delete" button (confirmation will appear)

## 🔍 Troubleshooting

### Backend Error

**Database Connection Error**
```bash
# Check MySQL connection
mysql -u root -p -e "SHOW DATABASES;"

# Test endpoint
curl http://localhost:3000/api/products
```

**Port 3000 already in use**
```bash
# Change PORT in .env
PORT=3001

# Restart server
node server.js
```

### Frontend Error

**API Connection Error**
```bash
# Make sure backend is running
curl http://localhost:3000/api/products

# Check src/services/api.js file
# Make sure API_BASE_URL = 'http://localhost:3000/api'
```

**Module Not Found**
```bash
rm -rf node_modules package-lock.json
npm install
```

**CORS Error**
```bash
# Make sure in server.js there is:
app.use(cors());
```

## ⚡ Quick Start (Summary)

```bash
# 1. Clone repository
git clone <repository-url>
cd product-management

# 2. Setup database (run SQL above)

# 3. Run backend
cd express-backend
npm install
cp .env.example .env  # edit according to your configuration
node server.js

# 4. Run frontend (new terminal)
cd react-frontend
npm install
npm run dev
```

Access the application at `http://localhost:5173`

## 📞 Contact

If you have any questions or issues, please create an issue in the repository.
