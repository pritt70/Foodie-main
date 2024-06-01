import React, { useState, useEffect } from 'react'
import Helmet from '../Components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../Components/UI/common-section/CommonSection'
import products from '../assets/fake-data/product'
import ProductCard from '../Components/UI/product-card/ProductCard'
import ReactPaginate from 'react-paginate'

import '../style/all-foods.css'
import '../style/pagination.css'

export default function AllFoods() {

  const [searchTerm, setsearchTerm] = useState('')
  const [pageNumber, setpageNumber] = useState(0)
  const searchedProduct = products.filter(item => {
    if (searchTerm.value === '') return item;
    if (
      item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
      return item;
  })

  const productPerPage = 8
  const visitedPage = pageNumber * productPerPage
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)

  const pageCount = Math.ceil(searchedProduct.length / productPerPage)

  const changePage = ({ selected }) => {
    setpageNumber(selected)
  }

  return (
    <div>
      <Helmet title='All-Foods'>
        <CommonSection title='All Foods' />
        <section>
          <Container>
            <Row>
              <Col lg='6' md='6' sm='6' xs='12' >
                <div className="search_widget d-flex align-items-center justify-content-between">
                  <input className=' w-100 bg-transparent' type="text" placeholder="I'm looking for....." value={searchTerm} onChange={e => setsearchTerm(e.target.value)} />
                  <span><i className='ri-search-line'></i></span>
                </div>
              </Col>
              
              <Col lg='6' md='6' sm='6' xs='12' className='mb-5'>
                <div className="sorting_widget text-end">
                  <select className='w-50'>
                    <option>Default</option>
                    <option value="ascending">Alphabatically, A-Z</option>
                    <option value="descending">Alphabatically, Z-A</option>
                    <option value="high-price">High Price</option>
                    <option value="low-price">Low Price</option>
                  </select>
                </div>
              </Col>

              {displayPage
                .map((item) => (
                  <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>
                    <ProductCard item={item} />
                  </Col>
                ))}

              <div>
                <ReactPaginate
                  pageCount={pageCount}
                  onPageChange={changePage}
                  previousLabel='Prev'
                  nextLabel='Next'
                  containerClassName=' paginationBttns'
                />
              </div>
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  )
}
