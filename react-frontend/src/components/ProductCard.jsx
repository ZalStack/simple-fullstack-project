import { Link, useNavigate } from 'react-router-dom';
import { formatCurrency, deleteProduct } from '../services/api';
import '../styles/App.css';

function ProductCard({ product, onDelete }) {
  const navigate = useNavigate();

  const getStockClass = (stock) => {
    if (stock > 20) return 'stock-high';
    if (stock > 10) return 'stock-medium';
    return 'stock-low';
  };

  const handleDelete = async () => {
    if (window.confirm('Yakin ingin menghapus produk ini?')) {
      try {
        await deleteProduct(product.id);
        onDelete?.(product.id);
      } catch (error) {
        alert('Gagal menghapus produk: ' + error.message);
      }
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>{product.name}</h3>
      </div>
      <div className="card-body">
        <p className="price">{formatCurrency(product.price)}</p>
        <p>
          {product.description?.substring(0, 50) || 'Tidak ada deskripsi'}
          {product.description?.length > 50 ? '...' : ''}
        </p>
        <p>
          Stock:{' '}
          <span className={`stock-badge ${getStockClass(product.stock)}`}>
            {product.stock} unit
          </span>
        </p>
      </div>
      <div className="card-footer">
        <Link to={`/products/${product.id}`} className="btn btn-primary">
          Detail
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Hapus
        </button>
      </div>
    </div>
  );
}

export default ProductCard;