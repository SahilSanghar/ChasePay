import React from 'react'
import LCResp from '../../../assets/Images/LCResp.jpg'
import '../../../scss/CResponsibility/CResponsibilty.scss'

const LCReso = () => {
return (
    <div className='grid'>
        <div className="content">
            <img src={LCResp} alt="Corporate Resposibility" className='CorpImg' />
        <div className="text">
            <p className="CorpH mt-5">CORPORATE RESPONSIBILITY</p>
            <br />
            <h3 className='mt-2'>On the front lines of the transition: <br />
            Resources featuring veteran business owners</h3>
            <br />
            <p>May 15, 2024</p>
            <br />
            <p>We are committed to honoring veterans' service and supporting their pursuit of business growth through knowledge and connections.</p>
            <br />
            <button className='CBtn'>READ MORE</button>
        </div>
        </div>
    </div>
)
}

export default LCReso