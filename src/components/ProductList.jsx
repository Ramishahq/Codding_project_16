import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
            //each ProductItem receives a unique key id,
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
}

export default ProductList;