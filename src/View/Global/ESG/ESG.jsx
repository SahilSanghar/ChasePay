import React from 'react'
import ESGImg from '../../../assets/Images/ESG.jpg'
import '../../../scss/WeaMan/WeaMan.scss'

const ESG = () => {
return (
    <div className='mt-5 mb-5 ms-2'>
        <div className="row">
            <div className="col">
                <img src={ESGImg} alt="WeaManImg" className='WeaManImg' />
            </div>
            
            <div className="col">
                <p className='WMHeading mt-5'>ESG</p>
                <h3 className='WMTitle pt-2'>
                ESG at Wesley P Brewer
                </h3>
                <p className='pt-5'>
                Learn about our approach to ESG and access the latest <br />
                ESG research and insights. Discover how we are helping <br />
                support a sustainable and inclusive economy for our <br />
                clients and the communities we serve.
                </p>
                <button className='WMBtn'>
                    GET STARTED
                </button>
            </div>
        </div>
    </div>
)
}

export default ESG