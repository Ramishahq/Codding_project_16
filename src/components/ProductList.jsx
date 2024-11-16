import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
}

export default ProductList;