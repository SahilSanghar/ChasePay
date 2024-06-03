import React from 'react'
import cp from '../../../../assets/Images/Chasepay.png'

const Navbar = () => {
return (
    <nav className='bg-[#005EB8] text-[#fff] fixed-top d-flex pl-[600px] h-[70px] px-[140px] shadow-md'>
        <p className='text-4xl mt-2'>Chasepay</p> 
        <img src={cp} alt="" className='h-[45px] w-[45px] mt-[12px] opacity-100'/>
    </nav>
    )
}

export default Navbar