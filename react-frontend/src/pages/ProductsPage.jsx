import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import Alert from '../components/Alert';
import { getProducts } from '../services/api';
import '../styles/App.css';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (deletedId) => {
    setProducts(products.filter(p => p.id !== deletedId));
  };

  if (loading) return <Loading />;

  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem 0' }}>
        <div className="container">
          <div className="page-header">
            <h1>Daftar Produk</h1>
            <Link to="/products/create" className="btn btn-success">
              Tambah Produk Baru
            </Link>
          </div>
          
          {error && <Alert type="danger" message={error} onClose={() => setError('')} />}
          
          {products.length === 0 ? (
            <div className="empty-state">
              <h3>Belum ada produk</h3>
              <p>Tambahkan produk pertama Anda</p>
              <Link to="/products/create" className="btn btn-primary">
                Tambah Produk
              </Link>
            </div>
          ) : (
            <div className="card-container">
              {products.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default ProductsPage;