import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct, updateProduct } from '../services/api';
import '../styles/App.css';

function ProductForm({ product, isEdit = false }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: product?.name || '',
    price: product?.price || '',
    stock: product?.stock || 0,
    description: product?.description || ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? parseFloat(value) || 0 : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isEdit) {
        await updateProduct(product.id, formData);
        navigate(`/products/${product.id}`);
      } else {
        const newProduct = await createProduct(formData);
        navigate(`/products/${newProduct.id}`);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>{isEdit ? 'Edit Produk' : 'Tambah Produk Baru'}</h2>
      
      {error && (
        <div className="alert alert-danger" style={{ marginBottom: '1rem' }}>
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nama Produk *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="price">Harga *</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            step="1000"
            required
            disabled={loading}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="stock">Stok</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            min="0"
            disabled={loading}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Deskripsi</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
        
        <div className="action-buttons">
          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading ? 'Loading...' : (isEdit ? 'Update' : 'Simpan')}
          </button>
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={() => navigate('/products')}
            disabled={loading}
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;