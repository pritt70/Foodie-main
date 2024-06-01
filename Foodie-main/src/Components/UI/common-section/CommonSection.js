import React from 'react'
import { Container } from 'reactstrap'
import '../../../style/common-section.css'

export default function CommonSection(props) {
    return (
        <div>
            <section className='common_section'>
                <Container>
                    <h2 className=' text-white'>{props.title}</h2>
                </Container>
            </section>
        </div>
    )
}
