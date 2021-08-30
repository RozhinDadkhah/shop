import React, { useContext } from 'react'
import CartContext from '../Context/Cart/CartContext'
import './Cart.css'
import formatCurrency from 'format-currency'
import CartItem from './CartItem'

const Cart = () => {

    const { showCart, cartItem, showHideCart } = useContext(CartContext)

    let opts = { format: '%s%v', symbol: '€' }
    return (
        <>
            {showCart && (
                <div className='cart__wrapper'>
                    <div style={{ textAlign: "right" }}>
                        <i
                            style={{ cursor: "pointer" }}
                            className='fa fa-times-circle'
                            aria-hidden='true'
                            onClick={showHideCart}></i>
                    </div>
                    <div className='cart__innerWrapper'>
                        {cartItem.length === 0 ? (
                            <h4>Cart is empty</h4>
                        ) : (
                            <ul>
                                {cartItem.map((item) => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </ul>)
                        }
                    </div>
                    <div className='cart__cartTotal'>
                        <div>
                            Cart Total
                        </div>
                        <div></div>
                        <div style={{ marginLeft: 5 }}>
                            {formatCurrency(cartItem.reduce((amount, item) => item.price + amount, 0), opts)}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Cart
