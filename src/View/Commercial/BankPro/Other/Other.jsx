import React from 'react'
import '../../../../scss/BankPro/Other.scss'
import card from '../../../../assets/CCard.svg'
import arrow from '../../../../assets/CArrow.svg'
import rent from '../../../../assets/CRent.svg'

const Other = () => {
return (
    <div className='grid OMain'>
        <div className="row">
            <div className="col">
                <div className="card cf">
                    <img src={card} alt="Card" className='CImg' />
                    <div className="card-body bf">
                        <h3 className="card-title tf">Commercial cards</h3>
                        <div className="card-text">Our commercial card program can help your employees spend less time authorizing, tracking and processing expense data.</div>
                        <br /><br /><br />
                        <a href="" className='link'>Learn more</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card cs">
                    <img src={arrow} alt="Arrow" className='CImg' />
                    <div className="card-body bs">
                        <h3 className="card-title ts">Digital Bill Payment</h3>
                        <div className="card-text">Digital Bill Payment is an innovative bill presentment and payments solution that grows with your business.</div>
                        <br /><br /><br />
                        <a href="" className='link'>Learn more</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card ct">
                    <img src={rent} alt="Rent" className='CImg' />
                    <div className="card-body bt">
                        <h3 className="card-title tt">Rent solutions</h3>
                        <div className="card-text">Whether you're a national real estate developer, affordable housing operator or local investor, we can help you streamline your online rent payments.</div>
                        <br /><br /><br />
                        <a href="" className='link'>Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Other