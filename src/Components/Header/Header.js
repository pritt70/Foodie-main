import React, { useRef, useEffect } from 'react'
import { Container } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import { NavLink, Link,useNavigate } from 'react-router-dom'
import '../../style/header.css'

import { useSelector, useDispatch } from 'react-redux'
import { cartUiActions } from '../../Store/shopping-cart/cartUiSlice'
import toast from 'react-hot-toast'

const nav_links = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Foods',
    path: '/foods'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
];

export default function Header() {


  const navigate = useNavigate();

  const menuRef = useRef(null)
  // console.log(menuRef.current);
  const headerRef = useRef(null)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch()

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')
  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  //       headerRef.current.classList.add('header_shrink')
  //     }
  //     else {
  //       headerRef.current.classList.remove('header_shrink')
  //     }
  //   })

  //   return () => window.removeEventListener('scroll')
  // }, [])

  useEffect(() => {
    // Define the scroll event listener function
    const handleScroll = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header_shrink');
      } else {
        headerRef.current.classList.remove('header_shrink');
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const userLogin = localStorage.getItem('success')


  const handleLogout = () => {
    localStorage.removeItem('success');
    navigate('/login');
    toast.success("Successfully logged out")
  };


  return (
    <header className='header' ref={headerRef}>
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" width={"50%"}/>
              <h5>Foodie</h5>
            </div>
          </Link>

          {/* ====== menu ====== */}

          <div className="navigation" ref={menuRef}>
            <div className="menu d-flex align-items-center gap-5">
              {
                nav_links.map((item, index) => (
                  <NavLink
                    onClick={toggleMenu}
                    to={item.path}
                    key={index}
                    className={navClass => navClass.isActive ? 'active_menu' : ""}
                  >
                    {item.display}
                  </NavLink>
                ))
              }
            </div>
          </div>

          {/* Nav Right icon */}

          <div className="nav_right align-items-center gap-4 d-flex">
            <span className="cart_icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart_badge">{totalQuantity}</span>
            </span>
            
            <span className="user">
              <Link to='/login'>
                {userLogin ? <i class="ri-logout-circle-r-line" onClick={handleLogout}></i> :  <i className="ri-user-line"></i>}
              </Link>
            </span>

            <span className="mobile_menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}
