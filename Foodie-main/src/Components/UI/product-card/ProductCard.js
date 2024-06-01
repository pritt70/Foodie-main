import React from 'react'
import '../../../style/product-card.css'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../../Store/shopping-cart/cartSlice'

export default function ProductCard(props) {
    const { id, title, image01, price } = props.item
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
    }
    return (
        <div className='product_item'>
            <div className='product_img'>
                <img src={image01} alt="product-img" className='w-50' />
            </div>
            <div className="product_content">
                <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                <div className='d-flex align-items-center justify-content-between'>
                    <span className='product_price'>${price}</span>
                    <button className='addTOCart_btn' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>

        </div>


    )
}
