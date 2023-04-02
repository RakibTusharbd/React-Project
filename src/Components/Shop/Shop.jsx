
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'
import './Shop.css'

const Shop = () => {
    const [rakib, setRakib] = useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setRakib(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    rakib.map(product => <Product
                    key={product.id}
                    product = {product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Product Summery</h4>
            </div>
           
        </div>
    );
};

export default Shop;