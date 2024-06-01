import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import '../../style/footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className=" footer_logo text-start">
              <img src={logo} alt="logo" />
              <h5>Foodie</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, minus!
              </p>
            </div>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer_title'>Delivery Time</h5>
            <ListGroup className='delivery_time-list'>
              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer_title'>Contact</h5>
            <ListGroup className='delivery_time-list'>
              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <p>Location: ZindaBazar, Sylhet-3100, Bangladesh</p>
              </ListGroupItem>
              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Phone: 0174564973</span>
              </ListGroupItem>

              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>E-mail: Foodie@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer_title'>Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" name="email" id="email" placeholder='Enter Your Email' />
              <span><i className="ri-send-plane-line"></i></span>
            </div>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright_text fw-bold'>Copyright - 2024, Website made by Prit Khokhani. All Rights Reserved.</p>
          </Col>
          <Col lg='6' md='6'>
            <div className="social_links d-flex align-items-center gap-4 justify-content-end ">
              <p className='m-0 fw-bold'>Follow : </p>
              <span><Link to=''><i className="ri-facebook-line"></i></Link></span>
              <span><Link to=''><i className="ri-github-line"></i></Link></span>
              <span><Link to=''><i className="ri-youtube-line"></i></Link></span>
              <span><Link to=''><i className="ri-linkedin-line"></i></Link></span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
