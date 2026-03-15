import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductForm from '../components/ProductForm';
import Loading from '../components/Loading';
import Alert from '../components/Alert';
import { getProductById } from '../services/api';
import '../styles/App.css';

function EditProductPage() {
  const { id } = useParams();
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

  if (loading) return <Loading />;

  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem 0' }}>
        <div className="container">
          {error ? (
            <>
              <Alert type="danger" message={error} />
              <Link to="/products" className="btn btn-primary">
                Kembali ke Products
              </Link>
            </>
          ) : (
            <ProductForm product={product} isEdit={true} />
          )}
        </div>
      </main>
    </>
  );
}

export default EditProductPage;