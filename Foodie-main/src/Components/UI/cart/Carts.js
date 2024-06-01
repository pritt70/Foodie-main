import React from 'react'
import { ListGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartUiActions } from '../../../Store/shopping-cart/cartUiSlice'
import CartItems from './CartItems'

import '../../../style/shopping-cart.css'

export default function Carts() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }

  return (
    <div className='cart_container'>
      <ListGroup className='cart'>
        <div className="cart_close" >
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart_item-list">
          {
            cartProducts.length === 0 ? (
              <h6 className=' text-center mt-5'>No items added to the cart</h6>
            ) : (
              cartProducts.map((item, index) => (
                <CartItems item={item} key={index}></CartItems>
              ))
            )
          }
        </div>

        <div className="cart_bottom d-flex align-items-center justify-content-between">
          <h6>Subtotal : <span>${totalAmount}</span></h6>
          <button>  
            <Link to='/checkout'>CheckOut</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  )
}





