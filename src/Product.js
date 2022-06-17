import React from 'react';
import "./Product.css";


function Product({title,image,price,rating}) {
  return (
    <div className='product'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className='product__info'>
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
            </div>
        </div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU' alt='' />
        <button> Add to Basket </button>
    </div>
  )
}

export default Product;
