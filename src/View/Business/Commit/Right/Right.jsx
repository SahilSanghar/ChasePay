import React from 'react'
import '../../../../scss/Commit/Right.scss'
import path from '../../../../assets/arrow-right.svg'

const Right = () => {
return (
    <div className="main me-5">
    <div className=''>
        <div className="title fs-4 mt-2 pt-2">
        Business Checking
        </div>
        <div className="description fs-6 pt-4">
        Whatever your business size or industry, we offer checking solutions that are built to meet your needs, support your visions, and keep you moving forward.
        </div>
        <div className="button pt-3">
            <u>Continue</u>
            <img src={path} className='arrow-r'/>
        </div>
    </div>
<br />
    <div>
        <div className="title fs-4 mt-2 pt-2">
        Payment Solutions
        </div>
        <div className="description fs-6 pt-4">
        A complete suite of merchant services to accept credit cards, made simple and secure.
        </div>
        <div className="button pt-3">
        <span className="underline-gap"><u>Continue</u></span>
            <img src={path} className='arrow-r' alt="Arrow"/>
        </div>
    </div>
<br />
    <div>
        <div className="title fs-4 mt-2 pt-2">
        Business Credit Cards
        </div>
        <div className="description fs-6 pt-4">
        Find the best business credit card for you. Get rewarded on expenses with new cardmember bonus offers, and by earning cash back rewards, airline miles, or credit card reward points on all your business purchases.
        </div>
        <div className="button pt-3">
            <u>Continue</u>
            <img src={path} className='arrow-r'/>
        </div>
    </div>
    </div>
)
}

export default Right