"use client"
import React, { useState, useRef, useEffect } from 'react';
import products from "./Products.json";

const Product = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const searchInputRef = useRef(null);

    // Function to filter products based on search query
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === '/') {
            event.preventDefault(); 
            searchInputRef.current.focus(); 
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
        <div className="search">
            <input
                type="text"
                id="searchInput"
                placeholder="Type / to Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                ref={searchInputRef}
            />
            </div>
            <div className="container">
                {
                    filteredProducts.map((product) => (
                        <a href={product.url} target="_blank" rel="noreferrer" key={product.url}>
                            <div className="product">
                                <img className='product_image' src={product.productImage} alt={product.title} title={product.title} />
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
