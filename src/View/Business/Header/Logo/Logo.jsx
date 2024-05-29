import React from 'react'
import logo from '../../../../assets/Logo.png'
import '../../../../scss/Header/Logo.scss'

const Logo = () => {
return (
    <div className='mx-4 px-2 d-flex justify-content-between'>
        <div className='d-flex align-items-center'>
            <img src={logo} alt='Logo'className='logo'/>
            <p className='ms-3 pt-1 fs-4'><i>For</i> business</p>
        </div>
        <button type="button" className="btn btn-primary sign-in">Sign in</button>
    </div>
)
}

export default Logo