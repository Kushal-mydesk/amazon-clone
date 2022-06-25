import React from 'react';
import "./Product.css";


function Product({ id,title,image,price,rating,off_rating}) {
  return (
    <div className='product'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className='product__info'>
            <p>{title}</p>
            <p className="product__price">
                <small>Rs.</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating).fill().map((_,i) => (
                    <span class="fa fa-star checked"></span>
                ))}
                {Array(off_rating).fill().map((_,i) => (
                    <span class="fa fa-star "></span>
                ))}
            </div>
        </div>
        <img src={image} alt='' />
        <button> Add to Basket </button>
    </div>
  )
}

export default Product;
