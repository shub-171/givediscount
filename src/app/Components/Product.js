import React from 'react';
import products from "./Products.json";

const Product = () => {

    return (
        <>
            <div className="container">
                {
                    products.map((product) => (
                        <a href={product.url} target="_blank" rel="noreferrer" key={product.url}>
                            <div className="product">
                                <img className='product_image' src={`../Images/products/${product.title}.jpg`} alt={product.title} title={product.title} />
                                <span className="product_title">{product.title}</span>
                            </div>
                        </a>
                    ))
                }
            </div>
        </>
    );
}

export default Product;
