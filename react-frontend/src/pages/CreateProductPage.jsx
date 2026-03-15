import Navbar from '../components/Navbar';
import ProductForm from '../components/ProductForm';
import '../styles/App.css';

function CreateProductPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem 0' }}>
        <div className="container">
          <ProductForm />
        </div>
      </main>
    </>
  );
}

export default CreateProductPage;