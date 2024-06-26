import React from 'react';
import './Product.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@awesome.me/kit-KIT_CODE/icons/classic/solid';

const Product = (product, handleAddToCart) => {
    // const {product, handleAddToCart} = props;
    const {name, img, seller, rating, price} = product;

    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {rating} starts</small></p>
            </div>
            <button onClick={ () => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
            </button>


        </div>
    );
};

export default Product;