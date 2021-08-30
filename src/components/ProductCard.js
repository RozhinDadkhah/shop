import React, { useContext } from 'react'
import CartContext from '../Context/Cart/CartContext'
import './ProductCard.css'
import Rating from './Rating'

const ProductCard = ({ product }) => {

    const { addToCart } = useContext(CartContext)

    return (
        <div className='productCard__wrapper'>
            <div>
                <img className='productCard__img' src={product.image} alt='' />
                <h4>{product.name}</h4>
                <div className='productCard__price'>
                    <h5> € {product.price}</h5>
                </div>
                <div className='productCard__Rating'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </div>
                <button className='productCard__button'
                    onClick={() => addToCart(product)}
                >Add to basket</button>
            </div>
        </div>
    )
}

export default ProductCard
