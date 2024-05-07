import React from 'react'
import Offer from './Offer/Offer'
import Description from './Description/Description'
import Form from './Login/Form'
import '../../../scss/Banner/Banner.scss'

const Banner = () => {
return (
    <div className='banner d-flex p-4'>
        <Offer />
        <Description />
        <Form />
    </div>
)
}

export default Banner