import React from 'react'
import '../../../../scss/More/Options.scss'
import ipo from '../../../../assets/Images/IPO.jpeg'
import businesscard from '../../../../assets/Images/businesscard.jpg'
import cashflow from '../../../../assets/Images/cashflow.webp'
import scanupi from '../../../../assets/Images/scanupi.jpg'

const Options = () => {
return (
    <div className='container row mt-5 ms-5 gap-4'>
        <div className="card col">
            <img className="card-img-top" src={ipo} alt="Card image cap" />
            <div className="card-body">
            <h6 class="card-subtitle mb-2">INNOVATION ECONOMY BANKING</h6>
            <h5 className="card-title">From seed to IPO, grow without limits</h5>
            <p className="card-text">Our financial solutions for early-stage startups, venture-backed and high-growth companies can grow with you at every stage.</p>
            <a href="#" className="btn btn-primary one mt-5">Get in touch</a>
            </div>
        </div>

        <div className="card col">
            <img className="card-img-top" src={businesscard} alt="Card image cap" />
        <div className="card-body">
            <h6 class="card-subtitle mb-2">INK BUSINESS PREFERRED&reg;</h6>
            <h5 className="card-title mt-4">100,000 bonus points</h5>
            <p className="card-text mt-3">Plus, earn 3X points on eligible shipping and select business categories with Ink Business Preferred®. Terms apply.</p>
            <a href="#" className="btn btn-primary second mt-5">Continue</a>
        </div>
        </div>

        <div className="card col">
            <img className="card-img-top" src={cashflow} alt="Card image cap" />
        <div className="card-body">
            <h6 class="card-subtitle mb-2">CHASE PERFORMANCE BUSINESS CHECKING&reg;</h6>
            <h5 className="card-title">Easily manage your greater cash flow needs</h5>
            <p className="card-text">Chase Performance Business Checking® offers no charge on your two most expensive outgoing wires and many other benefits.</p> <br />
            <a href="#" className="btn btn-primary third mt-3">Continue</a>
        </div>
        </div>

        <div className="card col">
            <img className="card-img-top" src={scanupi} alt="Card image cap" />
        <div className="card-body">
            <h6 class="card-subtitle">DESIGNED FOR YOUR BUSINESS</h6>
            <h5 className="card-title">Business checking accounts</h5>
            <p className="card-text">Whatever your business's size or industry, we offer checking solutions that are built to meet your needs, support your vision and keep you moving forward.</p><br />
            <a href="#" className="btn btn-primary last">Continue</a>
        </div>
        </div>
    </div>
)
}

export default Options