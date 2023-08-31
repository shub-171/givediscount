import React, { useEffect, useState } from 'react';
import products from "./Products.json";

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const Product = () => {
    const [shuffledProducts, setShuffledProducts] = useState([]);

    useEffect(() => {
        const storedShuffledProducts = localStorage.getItem('shuffledProducts');

        if (storedShuffledProducts) {
            setShuffledProducts(JSON.parse(storedShuffledProducts));
        } else {
            const newShuffledProducts = shuffleArray([...products]);
            setShuffledProducts(newShuffledProducts);
            localStorage.setItem('shuffledProducts', JSON.stringify(newShuffledProducts));
        }
    }, []);

    return (
        <>
            <div className="container">
                {
                    shuffledProducts.map((product) => (
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
