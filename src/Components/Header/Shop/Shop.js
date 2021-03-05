import React from 'react';
import './Shop.css';
import fakeData from './../../../fakeData/index';
import {useState} from 'react';
import Products from './../Products/Products';
import Cart from '../../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (products) =>{
        console.log('Product Added', products);
        const newCart = [...cart, products];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    {
                        products.map(pd => <Products
                            handleAddProduct = {handleAddProduct}
                             products={pd}>
                                </Products>)
                    }
                </ul>
            </div> 
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>           
        </div>
    );
};

export default Shop;