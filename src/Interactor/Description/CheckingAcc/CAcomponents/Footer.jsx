import React from 'react'
import EqHouse from '../../../../assets/EqualHousing.png'

const Footer = () => {
return (
    <div className='text-center text-sm mt-4'>
        <p className='px-[200px]'>
            "Chasepay", "Wesley P Brewer," the Wesley P Brewer Chase logo and the Octagon Symbol are trademarks of Wesley P Brewer Chasepay Bank, N.A. Wesley P Brewer Chasepay Bank, N.A. is a wholly-owned subsidiary of Wesley P Brewer Chasepay & Co.
        </p>
        <div className='w-full d-flex ml-[400px] py-2'>
            <div className=''>
            <a href="" className='text-black'>Privacy</a> &nbsp;&nbsp;
            <a href="" className='text-black'>Security</a> &nbsp;&nbsp;
            <a href="" className='text-black'>Terms of use</a> &nbsp;&nbsp;
            <a href="" className='text-black'>Accessibility</a> &nbsp;&nbsp;
            <a href="" className='text-black'>Help for homeowners</a> &nbsp;&nbsp;
            <a href="" className='text-black'>Site map</a> &nbsp;&nbsp;
            <a href="" className='text-black'>AdChoices</a> &nbsp;&nbsp;
            </div>
            <div className=''>
            <p>Member FDIC</p>
            </div>
            <img src={EqHouse} alt="EqHouse" className='h-[30px] w-[90px] mt-[-5px] opacity-100' />
        </div>
        <p>
            &copy;2024 Wesley P Brewer Chasepay & Co.
        </p>
    </div>
)
}

export default Footer