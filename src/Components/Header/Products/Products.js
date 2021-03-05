import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Peoducts.css';

const Products = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock} = props.products;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-layout'>
            <h4 className='product-name'>{name}</h4>
            <p><small>By: {seller}</small></p>
            <p>${price}</p>
            <p><small>Only {stock} Left in stock - Order Soon</small></p>
            <button 
                className='main-button'
                onClick={()=>props.handleAddProduct(props.products)}            
                >
                <FontAwesomeIcon icon={faShoppingCart} /> add to cart
            </button>
            </div>      
        </div>
    );
};

export default Products;