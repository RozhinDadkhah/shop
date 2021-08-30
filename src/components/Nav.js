import React, { useContext } from 'react'
import CartContext from '../Context/Cart/CartContext'
import './Nav.css'

const Nav = () => {

    const { cartItem, showHideCart } = useContext(CartContext)

    return (
        <nav>
            <div className='nav__left'>Store</div>
            <div className='nav__middle'>
                <div className='input__wrapper'>
                    <input type='text' />
                    <i className='fas fa-search'></i>
                </div>
            </div>
            <div className='nav__right'>
                <div className='cart__icon'>
                    <i className='fa fa-shopping-cart' aria-hidden='true' onClick={showHideCart}></i>
                    {cartItem.length > 0 &&
                        <div className='item__count'>
                            <span>{cartItem.length}</span>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Nav
