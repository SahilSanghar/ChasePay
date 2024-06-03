import React from 'react'
import logo from '../../../assets/Logo.png'
import '../../../scss/Header/Logo.scss'

const Logo = () => {
return (
    <div className='mx-4 px-2'>
        <a href="/"><img src={logo} alt='Logo' className='logo' /></a>
    </div>
)
}

export default Logo