import React from 'react'
import PEngine from '../../../assets/Images/PEngine.jpg'
import BioPhar from '../../../assets/Images/BioPhar.jpg'
import CurrElec from '../../../assets/Images/CurrElec.jpg'
import '../../../scss/GOptions/GOptions.scss'

const GOptions = () => {
return (
    <div className='GOptions'>
        <div className="row GRow">
            <div className="col ms-5">
                <div className="card GCard">
                    <img className="card-img-top GImg" src={PEngine} alt="PEngine" />
                <div className="card-body mt-4">
                    <h5 className="card-title fw-normal">Your payments engine built for performance</h5>
                    <p className="card-text fw-normal pt-3">Driving fast, secure and personalized shopping experiences - anytime, anywhere. This is Fintech with Foundation.</p>
                </div>

                <div className="card-body pt-3">
                    <br /><br /><br />
                    <a href="#" className="card-link text-decoration-none lm">Learn more</a>
                </div>
            </div>
            </div>

            <div className="col">
                <div className="card GCard">
                    <img className="card-img-top GImg" src={BioPhar} alt="BioPhar" />
                <div className="card-body mt-4 pt-4">
                    <h6 className="card-subtitle GSubtitle mb-2">OUTLOOK</h6>
                    <h5 className="card-title fw-normal pt-2">Biopharma and medtech venture investments trend up in Q1</h5>
                    <h6 className="card-subtitle mb-2 pt-3 fs-6">Apr 29, 2024</h6>
                    <p className="card-text fw-normal">Our Biopharma and Medtech Licensing and Venture Reports explore upfront cash, mergers, acquisitions and other trends seen since January.</p>
                </div>

                <div className="card-body">
                    <a href="#" className="card-link text-decoration-none">Read more</a>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card GCard">
                    <img className="card-img-top GImg" src={CurrElec} alt="CurrElec" />
                <div className="card-body mt-4 pt-4">
                    <h6 className="card-subtitle GSubtitle mb-2">CURRENT EVENTS</h6>
                    <h5 className="card-title fw-normal pt-2">2024 election insights</h5>
                    <p className="card-text Insight">Insights on the 2024 U.S. general election, potential election outcomes, policy agendas and investment implications to help investors navigate the election cycle in portfolios.</p>
                </div>

                <div className="card-body mt-3">
                    <br />
                    <a href="#" className="card-link text-decoration-none">Read more</a>
                </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default GOptions