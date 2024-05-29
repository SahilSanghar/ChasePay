import React from 'react'
import logo from '../../../../assets/Logo.png'
import '../../../../scss/Header/Logo.scss'

const Logo = () => {
return (
    <div>
        <div className='mt-5 mx-4 px-3'>
        <img src={logo} alt='Logo'className='logo'/>
        <br />
        <p className='ps-1 mt-2 fs-4'>
        <i className='ms-2'><span className='font-thin'>For</span></i> <span className='font-extrabold'>Business&reg;</span> 
        </p>
        </div>
    </div>
)
}

export default Logo