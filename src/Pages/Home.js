import React, { useState, useEffect } from 'react'
import Helmet from '../Components/Helmet/Helmet'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import heroImg from '../assets/images/hero.png'
import { Link } from 'react-router-dom'
import Category from '../Components/UI/category/Category'

import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'

import products from '../assets/fake-data/product'

import foodCategoryImg01 from '../assets/images/hamburger.png'
import foodCategoryImg02 from '../assets/images/pizza.png'
import foodCategoryImg03 from '../assets/images/bread.png'

import ProductCard from '../Components/UI/product-card/ProductCard'

import whyImg from '../assets/images/location.png'
import networkImg from '../assets/images/network.png'
import TestimonialSlider from '../Components/UI/slider/TestimonialSlider'

// =========== Styles ===========
import '../style/hero-section.css'
import '../style/home.css'
import '../style/product-card.css'


const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis!"
  },
  {
    title: 'Super Delivery',
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis!"
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis!"
  },
]

export default function Home() {

  const [category, setCategory] = useState('ALL')
  const [allProducts, setAllProducts] = useState(products)

  const [hotPizza, setHotPizza] = useState([])

  useEffect(() => {
    const filteredPizza = products.filter(item => item.category === 'Pizza')
    const slicePizza = filteredPizza.slice(0, 4)
    setHotPizza(slicePizza)
  }, [])

  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products)
    }
    if (category === 'BURGER') {
      const filteredProducts = products.filter(item => item.category === 'Burger')

      setAllProducts(filteredProducts)
    }
    if (category === 'PIZZA') {
      const filteredProducts = products.filter(item => item.category === 'Pizza')

      setAllProducts(filteredProducts)
    }
    if (category === 'BREAD') {
      const filteredProducts = products.filter(item => item.category === 'Bread')

      setAllProducts(filteredProducts)
    }
  }, [category])

  return (
    <div>
      <Helmet title='Home'>
        {/* ================== Home Food Section Start ================== */}
        <section>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className="hero_content">
                  <h5 className='mb-3'>Easy way to make an order</h5>

                  <h1 className='mb-4 hero_title'>
                    <span>HUNGRY?</span> Just wait <br /> food <span>at your door</span>
                  </h1>

                  <p>Hungry? Don't feel like cooking? You're in the right place! Welcome to our convenient food ordering service where delicious meals are just a few clicks away. Whether you're craving something comforting, healthy, or indulgent, we've got you covered.</p>

                  <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                    <button className='order_btn d-flex align-item-center justify-content-between'>Order now
                      <i className="ri-arrow-right-s-line"></i>
                    </button>

                    <button className='all_foods-btn'>
                      <Link to='/foods'>See all foods</Link>
                    </button>
                  </div>

                  <div className='hero_service d-flex align-items-center gap-5 mt-5'>
                    <p className='d-flex align-items-center gap-2'><span className='shipping_icon'><i className="ri-car-line"></i></span> No shipping charge</p>

                    <p className='d-flex align-items-center gap-2'><span className='shipping_icon'><i className="ri-shield-check-line"></i></span> 100% secure checkout</p>
                  </div>
                </div>
              </Col>

              <Col lg='6' md='6'>
                <div className="hero_img">
                  <img src={heroImg} alt="hero-img" className='w-100' />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* ================== Home Section End ================== */}

        {/* ================== Category Section Start ================== */}
        <section className='pt-0'>
          <Category></Category>
        </section>
        {/* ================== Catagoty Section End ================== */}

        {/* ================== Service Section Start ================== */}
        <section>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h5 className='feature_subtitle mb-4'>What we serve</h5>
                <h2 className='feature_title'>Just sit back at home</h2>
                <h2 className='feature_title'>
                  We will <span>take care</span>
                </h2>
                <p className='mb-1 mt-4 feature_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, recusandae.</p>
                <p className='feature_text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, provident!</p>
              </Col>

              {
                featureData.map((item, index) => (
                  <Col lg='4' md='6' sm='6' xs='12' key={index} className='mt-4'>
                    <div className="feature_item text-center px-5 py-3">
                      <img src={item.imgUrl} alt="feature-img" className='w-25 mb-3' />
                      <h5 className='fw-bold mb-3'>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </Col>
                ))
              }

            </Row>
          </Container>
        </section>
        {/* ================== Service Section End ================== */}

        {/* ================== Popular Food Section Start ================== */}
        <section>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2>Popular Foods</h2>
              </Col>

              <Col lg='12'>
                <div className="food_category d-flex align-items-center justify-content-center flex-wrap gap-3">
                  <button
                    className={`all_btn fw-bold ${category === 'ALL' ? 'foodBtnActive' : ''}`}
                    onClick={() => setCategory('ALL')}>All</button>

                  <button
                    className={`d-flex align-items-center gap-2 fw-bold ${category === 'BURGER' ? 'foodBtnActive' : ''}`}
                    onClick={() => setCategory('BURGER')}>
                    <img src={foodCategoryImg01} alt="" className="img-fluid" />
                    Burger
                  </button>

                  <button
                    className={`d-flex align-items-center gap-2 fw-bold ${category === 'PIZZA' ? 'foodBtnActive' : ''}`}
                    onClick={() => setCategory('PIZZA')}>
                    <img src={foodCategoryImg02} alt="" className="img-fluid" />
                    Pizza
                  </button>

                  <button
                    className={`d-flex align-items-center gap-2 fw-bold ${category === 'BREAD' ? 'foodBtnActive' : ''}`}
                    onClick={() => setCategory('BREAD')}>
                    <img src={foodCategoryImg03} alt="" className="img-fluid" />
                    Bread
                  </button>
                </div>
              </Col>

              {
                allProducts.map((item) => (
                  <Col lg='3' md='4' sm='6' xs='12' key={item.id} className='mt-4'>
                    <ProductCard item={item}></ProductCard>
                  </Col>
                ))
              }

            </Row>
          </Container>
        </section>
        {/* ================== Popular Food Section End ================== */}

        {/* ==================  Section Start ================== */}
        <section className='why_choose-us'>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <img src={whyImg} alt="why-tasty-treat" className='w-100' />
              </Col>
              <Col lg='6' md='6'>
                <div className="why_tasty-treat">
                  <h2 className='tasty_treat-title mb-4'>
                    Why <span>Foodie?</span>
                  </h2>
                  <p className='tasty_treat-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolore inventore, numquam explicabo debitis saepe ea, vel, repellendus quos beatae exercitationem? Iusto provident facere deleniti quaerat, voluptatem unde voluptatibus aperiam?</p>

                  <ListGroup className=' mt-4 '>
                    <ListGroupItem className=' border-0  p-3 '>
                      <p className='choose_us-title d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"></i>Fresh and tasty foods</p>
                      <p className='choose_us-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, unde. Lorem ipsum dolor sit amet.</p>
                    </ListGroupItem>

                    <ListGroupItem className=' border-0 p-3'>
                      <p className='choose_us-title d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"></i>Quality support</p>
                      <p className='choose_us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, praesentium? Lorem ipsum dolor sit amet.</p>
                    </ListGroupItem>

                    <ListGroupItem className=' border-0 p-3'>
                      <p className='choose_us-title d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"></i> Order from any location</p>
                      <p className='choose_us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, nostrum? Lorem ipsum dolor sit amet.</p>
                    </ListGroupItem>

                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* ==================  Section End ================== */}

        {/* ==================  Section Start ================== */}
        <section className='pt-0'>
          <Container>
            <Row>
              <Col lg='12' className=' text-center mb-5'>
                <h2>Hot Pizza</h2>
              </Col>
              {
                hotPizza.map(item => (
                  <Col lg='3' md='4' key={item.id} className=' d-flex justify-content-center mt-4'>
                    <ProductCard item={item}></ProductCard>
                  </Col>
                ))
              }
            </Row>
          </Container>
        </section>
        {/* ==================  Section End ================== */}

        {/* ==================  Section Start ================== */}
        <section>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className='testimonial '>
                  <h5 className='testimonial_subtitle mb-4'>Testimonial</h5>
                  <h2 className='testimonial_title mb-4'>
                    What our <span>Customers</span> are saying
                  </h2>
                  <p className='testimonial_desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda excepturi fugit odit vitae aliquam animi dolorem molestiae! Odio, maxime dolores, eos consequatur impedit, ab ullam repellat nemo accusamus maiores placeat.</p>

                  <TestimonialSlider></TestimonialSlider>
                </div>
              </Col>

              <Col lg='6' md='6'>
                <img src={networkImg} alt="network-img" className='w-100' />
              </Col>
            </Row>
          </Container>
        </section>
        {/* ==================  Section End ================== */}
      </Helmet>
    </div>
  )
}
