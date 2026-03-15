const API_BASE_URL = process.env.API_BASE_URL;

// Fungsi untuk handle response
async function handleResponse(response) {
  if (!response.ok) {
    let errorMessage = 'Terjadi kesalahan pada server';
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch (e) {
      // Ignore parse error
    }
    throw new Error(errorMessage);
  }
  
  // Untuk response 204 No Content
  if (response.status === 204) {
    return null;
  }
  
  const data = await response.json();
  return data.data || data;
}

// GET semua products
export async function getProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    return await handleResponse(response);
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

// GET product by ID
export async function getProductById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return await handleResponse(response);
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
}

// POST create new product
export async function createProduct(productData) {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData)
    });
    return await handleResponse(response);
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}

// PUT update product
export async function updateProduct(id, productData) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData)
    });
    return await handleResponse(response);
  } catch (error) {
    console.error(`Error updating product ${id}:`, error);
    throw error;
  }
}

// DELETE product
export async function deleteProduct(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'DELETE'
    });
    await handleResponse(response);
    return { success: true };
  } catch (error) {
    console.error(`Error deleting product ${id}:`, error);
    throw error;
  }
}

// Format currency
export function formatCurrency(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}