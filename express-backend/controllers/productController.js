const db = require('../config/database');

// Mendapatkan semua produk
const getAllProducts = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM products ORDER BY created_at DESC');
        res.json({
            success: true,
            data: rows
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error mengambil data produk',
            error: error.message
        });
    }
};

// Mendapatkan produk berdasarkan ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
        
        if (rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Produk tidak ditemukan'
            });
        }
        
        res.json({
            success: true,
            data: rows[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error mengambil data produk',
            error: error.message
        });
    }
};

// Membuat produk baru
const createProduct = async (req, res) => {
    try {
        const { name, price, description, stock } = req.body;
        
        // Validasi input
        if (!name || !price) {
            return res.status(400).json({
                success: false,
                message: 'Nama dan harga produk harus diisi'
            });
        }
        
        const [result] = await db.query(
            'INSERT INTO products (name, price, description, stock) VALUES (?, ?, ?, ?)',
            [name, price, description || '', stock || 0]
        );
        
        const [newProduct] = await db.query('SELECT * FROM products WHERE id = ?', [result.insertId]);
        
        res.status(201).json({
            success: true,
            message: 'Produk berhasil dibuat',
            data: newProduct[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error membuat produk',
            error: error.message
        });
    }
};

// Mengupdate produk
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description, stock } = req.body;
        
        // Cek apakah produk ada
        const [product] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
        if (product.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Produk tidak ditemukan'
            });
        }
        
        await db.query(
            'UPDATE products SET name = ?, price = ?, description = ?, stock = ? WHERE id = ?',
            [name, price, description, stock, id]
        );
        
        const [updatedProduct] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
        
        res.json({
            success: true,
            message: 'Produk berhasil diupdate',
            data: updatedProduct[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error mengupdate produk',
            error: error.message
        });
    }
};

// Menghapus produk
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Cek apakah produk ada
        const [product] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
        if (product.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Produk tidak ditemukan'
            });
        }
        
        await db.query('DELETE FROM products WHERE id = ?', [id]);
        
        res.json({
            success: true,
            message: 'Produk berhasil dihapus'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error menghapus produk',
            error: error.message
        });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};