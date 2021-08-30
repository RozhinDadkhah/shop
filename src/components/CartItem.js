import React, { useContext } from 'react'
import CartContext from '../Context/Cart/CartContext'
import './CartItem.css'
import formatCurrency from 'format-currency'


const CartItem = ({ item }) => {

    const { removeItem } = useContext(CartContext)
    let opts = { format: '%s%v', symbol: '€' }

    return (
        <li className='cartItem__item'>
            <img src={item.image} alt='' />
            <div>
                {item.name} {formatCurrency(`${item.price}`, opts)}
            </div>
            <button className='cartItem__button' onClick={() => removeItem(item._id)}>
                Rmove
            </button>
        </li>
    )
}

export default CartItem
