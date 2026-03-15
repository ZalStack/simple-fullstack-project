import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/App.css';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h1>Selamat Datang di Product Management</h1>
          <p style={{ margin: '2rem 0', color: '#666', fontSize: '1.2rem' }}>
            Aplikasi sederhana untuk mengelola produk dengan React.js dan REST API
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/products" className="btn btn-primary">
              Lihat Products
            </Link>
            <Link to="/products/create" className="btn btn-success">
              Tambah Product
            </Link>
          </div>
          
          <div style={{ 
            marginTop: '3rem', 
            textAlign: 'left', 
            maxWidth: '800px', 
            marginLeft: 'auto', 
            marginRight: 'auto' 
          }}>
            <h3>Fitur:</h3>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Melihat semua produk</li>
              <li>Menambah produk baru</li>
              <li>Mengedit produk</li>
              <li>Menghapus produk</li>
              <li>Detail produk</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;