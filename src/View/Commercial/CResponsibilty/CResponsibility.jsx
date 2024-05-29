import React from 'react'
import CorpRes from '../../../assets/Images/CorpRes.jpg'
import '../../../scss/CResponsibility/CResponsibilty.scss'

const CResponsibility = () => {
return (
    <div className='grid'>
        <div className="content">
            <img src={CorpRes} alt="Corporate Resposibility" className='CorpImg' />
        <div className="text">
            <p className="CorpH mt-5">CORPORATE RESPONSIBILITY</p>
            <br />
            <h3 className='mt-2'>For these business leaders, impact and legacy <br />
            go hand in hand</h3>
            <br />
            <p>Feb 20, 2024</p>
            <br />
            <p>With a mission to uplift others and leave a positive mark on the world, BCforward's Justin and Darrianne Christian are building an IT powerhouse and inspiring students at their alma mater.</p>
            <br />
            <button className='CBtn'>WATCH VIDEO</button>
        </div>
        </div>
    </div>
)
}

export default CResponsibility