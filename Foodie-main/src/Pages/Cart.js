import React from 'react'
import CommonSection from '../Components/UI/common-section/CommonSection'
import Helmet from '../Components/Helmet/Helmet'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../Store/shopping-cart/cartSlice'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../style/cart-page.css'

export default function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  return (
    <div>
      <Helmet title='Cart'>
        <CommonSection title='Your Cart' />
        <section>
          <Container>
            <Row>
              <Col lg='12'>
                {
                  cartItems.length === 0 ? (
                    <h5 className='text-center'>Your cart is empty</h5>
                  ) : (
                    <table className='table table-bordered table-hover text-center'>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Title</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Delete</th>
                        </tr>
                      </thead>

                      <tbody>
                        {
                          cartItems.map(item => <Tr item={item} key={item.id} />)
                        }
                      </tbody>
                    </table>
                  )
                }

                <div className='mt-4'>
                  <h6>
                    Subtotal : $
                    <span className='cart_subtotal'>
                      {totalAmount}
                    </span>
                  </h6>
                  <p>Taxes and shipping will calculate at checkout</p>
                  <div className='cart_page-btn'>
                    <button className="addTOCart_btn me-4"><Link to='/foods'>Continue Shopping</Link></button>

                    <button className="addTOCart_btn"><Link to='/checkout'>Proceed to checkOut</Link></button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  )
}

const Tr = props => {

  const { id, image01, title, price, quantity } = props.item

  const dispatch = useDispatch()

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }

  return <tr>
    <td className='cart_img-box'>
      <img src={image01} alt="" />
    </td>
    <td>{title}</td>
    <td>${price}</td>
    <td>{quantity}px</td>
    <td className='cart_item-del'>
      <i className='ri-delete-bin-line' onClick={deleteItem}></i>
    </td>
  </tr>
}