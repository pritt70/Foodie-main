import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../Routes/Routers'
import Carts from '../UI/cart/Carts'
import { useSelector } from 'react-redux'

export default function Layout() {

  const showCart = useSelector(state => state.cartUi.cartIsVisible)
  return (
    <div>
      <Header></Header>
      {
        showCart && <Carts></Carts>
      }
      <div>
        <Routers></Routers>
      </div>
      <Footer></Footer>
    </div>
  )
}
