import React, { useRef, useref } from 'react'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { Link,useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast' 

export default function Register() {

  const signupNameRef = useRef()
  const signupPasswordRef = useRef()
  const signupEmailRef = useRef()

  const navigate = useNavigate();

  
  const submitHandler = (e) => {
    e.preventDefault()
    
    const setData = {
      name: signupNameRef.current.value,
      email: signupEmailRef.current.value,
      password: signupPasswordRef.current.value,
    }

    console.log(setData);

    if (setData.name && setData.name && setData.name) {
      localStorage.setItem('signup', JSON.stringify(setData));
      toast.success("Your account successfully created")
      navigate('/login');
      
    }else{
      toast.error("Please enter valid credentials")
    }




  }

  return (
    <div>
      <Helmet title='Sign-Up'>
        <CommonSection title='SignUp' />
        <section>
          <Container>
            <Row>
              <Col lg='6' md='6' sm='12' className='m-auto text-center'>
                <form className='form mb-5' onSubmit={submitHandler}>
                  <div className="form_group">
                    <input
                      type="text"
                      placeholder='Full Name'
                      required
                      ref={signupNameRef} />
                  </div>
                  <div className="form_group">
                    <input
                      type="email"
                      placeholder='Email'
                      required
                      ref={signupEmailRef} />
                  </div>
                  <div className="form_group">
                    <input
                      type="password"
                      placeholder='Password'
                      required
                      ref={signupPasswordRef} />
                  </div>
                  <button className="addTOCart_btn">Sign Up</button>
                </form>

                <Link to='/login'>
                  Already have an account? Login
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  )
}
