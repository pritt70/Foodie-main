import React, { useState, useEffect } from 'react'
import products from '../assets/fake-data/product'
import { useParams } from 'react-router-dom'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'

import { useDispatch } from 'react-redux'
import { cartActions } from '../Store/shopping-cart/cartSlice'

import ProductCard from '../Components/UI/product-card/ProductCard'

import '../style/product-details.css'

export default function FoodDetails() {

  const [tab, setTab] = useState('desc')
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [reviewMsg, setReviewMsg] = useState('')

  const { id } = useParams()
  const dispatch = useDispatch()

  const product = products.find(product => product.id === id)
  const [previeImg, setPrevieImg] = useState(product.image01)
  const { title, price, category, desc, image01 } = product

  const relatedProduct = products.filter(item => category === item.category)

  const addItem = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image01
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    
    console.log(enteredName, enteredEmail, reviewMsg);
  }

  useEffect(() => {
    setPrevieImg(product.image01)
  }, [product])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])

  return (
    <div>
      <Helmet title='Product-details'>
        <CommonSection title={title} />

        <section>
          <Container>
            <Row>
              <Col lg='2' md='2'>
                <div className="product_images">
                  <div className="img_item mb-2" onClick={() => setPrevieImg(product.image01)}>
                    <img src={product.image01} alt="" className='w-50' />
                  </div>

                  <div className="img_item mb-2" onClick={() => setPrevieImg(product.image02)}>
                    <img src={product.image02} alt="" className='w-50' />
                  </div>

                  <div className="img_item" onClick={() => setPrevieImg(product.image03)}>
                    <img src={product.image03} alt="" className='w-50' />
                  </div>
                </div>
              </Col>

              <Col lg='4' md='4'>
                <div className="product_main-img">
                  <img src={previeImg} alt="" className='w-100' />
                </div>
              </Col>

              <Col lg='6' md='6'>
                <div className="single_product-content">
                  <h2 className='product_title mb-3'>{title}</h2>
                  <p className='product_price'>Price: <span>${price}</span></p>
                  <p className='category mb-5'>Category: <span>{category}</span></p>

                  <button onClick={addItem} className='addTOCart_btn'>Add to Cart</button>
                </div>
              </Col>

              <Col lg='12'>
                <div className="tabs d-flex align-items-center gap-5 py-2">
                  <h6
                    className={`${tab === "desc" ? "tab_active" : ""}`} onClick={() => setTab('desc')}
                  >
                    Description
                  </h6>

                  <h6
                    className={`${tab === "rev" ? "tab_active" : ""}`}
                    onClick={() => setTab('rev')}
                  >
                    Review
                  </h6>
                </div>

                {
                  tab === 'desc' ? (
                    <div className="tab_content">
                      <p>{desc}</p>
                    </div>
                  ) : (
                    <div className="tab_form mb-3">
                      <div className="review pt-5">
                        <p className="user_name mb-0">Jhon Doe</p>
                        <p className='user_email'>jhon1@gmail.com</p>
                        <p className='feedback_text'>great product</p>
                      </div>

                      <div className="review_text">
                        <p className="user_name mb-0">Jhon Doe</p>
                        <p className='user_email'>jhon1@gmail.com</p>
                        <p className='feedback_text'>great product</p>
                      </div>

                      <div className="review_text">
                        <p className="user_name mb-0">Jhon Doe</p>
                        <p className='user_email'>jhon1@gmail.com</p>
                        <p className='feedback_text'>great product</p>
                      </div>

                      <form className='form' onSubmit={submitHandler}>
                        <div className='form_group'>
                          <input type="text" placeholder='Enter your name'
                          onChange={e => setEnteredName(e.target.value)} required />
                        </div>

                        <div className='form_group'>
                          <input type="text" placeholder='Enter your email'
                          onChange={e => setEnteredEmail(e.target.value)} required/>
                        </div>

                        <div className='form_group'>
                          <textarea type="text" rows={5} placeholder='Write your review'
                          onChange={e => setReviewMsg(e.target.value)} required />
                        </div>

                        <button type='submit' className='addTOCart_btn'>Submit</button>
                      </form>
                    </div>
                  )
                }
              </Col>

              <Col lg='12' className='mb-5 mt-4'>
                <h2 className='related_product-title'>You might also like</h2>
              </Col>

              {
                relatedProduct.map(item => (
                  <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
                    <ProductCard item={item}></ProductCard>
                  </Col>
                ))
              }
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  )
}
