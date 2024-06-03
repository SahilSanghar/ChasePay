import React from 'react'
import Offer from './Offer/Offer'
import Description from './Description/Description'
import '../../../scss/Banner/Banner.scss'
import LoginForm from './Login/Login.jsx'

const Banner = () => {
return (
    <div className='banner d-flex'>
        <Offer />
        <Description />
        <LoginForm />
    </div>
)
}

export default Banner