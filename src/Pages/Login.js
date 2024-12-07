import React, { useRef, useref } from 'react'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { Link,useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast' 

export default function Login() {

  const loginEmailRef = useRef()
  const loginPasswordRef = useRef()

  const navigate = useNavigate();

  const userSignup = JSON.parse(localStorage.getItem('signup'))

  const submitHandler = (e) => {
    e.preventDefault()

    const setData = {
      email: loginEmailRef.current.value,
      password: loginPasswordRef.current.value
    }

    if (setData.email === userSignup.email && setData.password === userSignup.password) {
      localStorage.setItem('success', true);

      if (localStorage.getItem('success')) {
        navigate("/")
        
        toast.success("Your account has been Logged in successfully")
        return 
      }
      
    } else {
      toast.error('Invalid credentials')
    }

    console.log(setData);
  }

  return (
    <div>
      <Helmet title='Login'>
        <CommonSection title='Login' />
        <section>
          <Container>
            <Row>
              <Col lg='6' md='6' sm='12' className='m-auto text-center'>
                <form className='form mb-5' onSubmit={submitHandler}>
                  <div className="form_group">
                    <input
                      type="email"
                      placeholder='Email'
                      required
                      ref={loginEmailRef} />
                  </div>
                  <div className="form_group">
                    <input
                      type="password"
                      placeholder='Password'
                      required
                      ref={loginPasswordRef} />
                  </div>
                  <button className="addTOCart_btn">Login</button>
                </form>

                <Link to='/register'>
                  Don't have an account? Create an account
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  )
}
