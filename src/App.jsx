import { useState } from 'react';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm.jsx';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Eyeshadow', price: 15, description: 'A vibrant eyeshadow palette with multiple colors.' },
    { id: 2, name: 'Foundation', price: 25, description: 'Long-lasting liquid foundation for smooth coverage.' },
    { id: 3, name: 'Lipstick', price: 10, description: 'Matte lipstick with rich color and moisturizing feel.' },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />

    </>
  );
}


export default App;
