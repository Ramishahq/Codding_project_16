
function ProductList({ products }) {
    return (
      <div>
        <h2>Product List</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> - ${product.price}
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ProductList;
  