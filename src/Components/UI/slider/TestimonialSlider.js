import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'

import '../../../style/slider.css'

export default function TestimonialSlider() {
    const settings = {
        dots: true,
        autoplay: true,
        Infinite: true,
        speed: 3000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slideToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <p className="review_text">
                        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis culpa consectetur perferendis dolore labore explicabo, molestiae facilis in delectus repudiandae asperiores error et id deserunt mollitia sit ipsam consequuntur rerum! "
                    </p>
                    <div className='slider_content d-flex align-items-center gap-3'>
                        <img src={ava01} alt="ava01" className=' rounded' />
                        <h6>John Doe</h6>
                    </div>
                </div>

                <div>
                    <p className="review_text">
                        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, hic itaque. Iure asperiores, molestiae rem modi obcaecati hic corrupti tempora! "
                    </p>
                    <div className='slider_content d-flex align-items-center gap-3'>
                        <img src={ava02} alt="ava01" className=' rounded' />
                        <h6>Mitchell Marsh</h6>
                    </div>
                </div>

                <div>
                    <p className="review_text">
                        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ratione incidunt quo non enim reiciendis fugiat sequi eius, cum dolor suscipit tempore laborum molestiae voluptatum, quia esse hic. Pariatur, expedita! "
                    </p>
                    <div className='slider_content d-flex align-items-center gap-3'>
                        <img src={ava03} alt="ava01" className='rounded' />
                        <h6>Steven Crock</h6>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
