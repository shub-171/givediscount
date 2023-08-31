"use client"
import React, { useState, useEffect } from 'react';
import products from "./Products.json";

const shuffleArray = (array) => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const Product = () => {
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        // Check if random products are stored in local storage
        const storedRandomProducts = localStorage.getItem('randomProducts');
        if (storedRandomProducts) {
            setRandomProducts(JSON.parse(storedRandomProducts));
        } else {
            const shuffledProducts = shuffleArray([...products]);
            setRandomProducts(shuffledProducts);
            localStorage.setItem('randomProducts', JSON.stringify(shuffledProducts));
        }
    }, []);

    return (
        <>
            <div className="container">
                {randomProducts.map((product) => (
                    <a href={product.url} target="_blank" rel="noreferrer" key={product.url}>
                        <div className="product">
                            <img
                                className='product_image'
                                src={`../Images/products/${product.title}.jpg`}
                                alt={product.title}
                                title={product.title}
                            />
                            <span className="product_title">{product.title}</span>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
}

export default Product;
