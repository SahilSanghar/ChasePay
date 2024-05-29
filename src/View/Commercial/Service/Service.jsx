import React from 'react'
import service from '../../../assets/Images/commercialmain.avif'
import '../../../scss/CService/Service.scss'

const Service = () => {
return (
    <div className="service-container">
        <img src={service} alt="service" className='Service' />
        <div className="overlay-text">
            <h1 className="heading fs-1">
                Commercial Banking <br />
                Services
            </h1>

            <p className='description fs-6 pt-2 text-white'>
            We provide credit, financing, treasury and payment solutions to help your business succeed. We <br />
            also offer best-in-class commercial real estate services for investors and developers.
            </p>

            <button type="button" class="btn btn-primary mt-4">SEE OUR OFFERINGS</button>
        </div>
    </div>
)
}

export default Service