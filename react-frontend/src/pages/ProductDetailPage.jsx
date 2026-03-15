import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import Alert from '../components/Alert';
import { getProductById, formatCurrency, deleteProduct } from '../services/api';
import '../styles/App.css';

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Yakin ingin menghapus produk ini?')) {
      try {
        await deleteProduct(id);
        navigate('/products');
      } catch (error) {
        alert('Gagal menghapus produk: ' + error.message);
      }
    }
  };

  const getStockClass = (stock) => {
    if (stock > 20) return 'stock-high';
    if (stock > 10) return 'stock-medium';
    return 'stock-low';
  };

  if (loading) return <Loading />;

  if (error) {
    return (
      <>
        <Navbar />
        <main style={{ padding: '2rem 0' }}>
          <div className="container">
            <Alert type="danger" message={error} />
            <Link to="/products" className="btn btn-primary">
              Kembali ke Products
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem 0' }}>
        <div className="container">
          <div className="product-detail">
            <h1>{product.name}</h1>
            
            <div className="product-info">
              <p>
                <strong>Harga:</strong>
                <span className="price">{formatCurrency(product.price)}</span>
              </p>
              <p>
                <strong>Stok:</strong>
                <span className={`stock-badge ${getStockClass(product.stock)}`}>
                  {product.stock} unit
                </span>
              </p>
              <p>
                <strong>Deskripsi:</strong>
                <br />
                {product.description || 'Tidak ada deskripsi'}
              </p>
            </div>
            
            <div className="action-buttons">
              <Link to={`/products/edit/${product.id}`} className="btn btn-primary">
                Edit
              </Link>
              <button onClick={handleDelete} className="btn btn-danger">
                Hapus
              </button>
              <Link to="/products" className="btn btn-success">
                Kembali
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductDetailPage;