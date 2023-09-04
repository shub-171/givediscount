"use client"
import React, { useState, useEffect } from 'react';
import products from "./Products.json";

function shuffleArray(array) {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function Product() {
    const [shuffledProducts, setShuffledProducts] = useState([]);

    useEffect(() => {
        setShuffledProducts(shuffleArray(products));
    }, []);

    return (
        <>
            <div className="container">
                {shuffledProducts.map((product) => (
                    <a href={product.url} target="_blank" rel="noreferrer" key={product.url}>
                        <div className="product">
                            <img className='product_image' src={`../Images/products/${product.title}.jpg`} alt={product.title} title={product.title} />
                            <span className="product_title">{product.title}</span>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
}

export default Product;
