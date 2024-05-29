import React from 'react'
import '../../../../scss/Footer/About.scss'
import house from '../../../../assets/Images/house.png'

const About = () => {
return (
    <div className='grid text-sm'>
        <div className="row">
            <div className="col">
                <p className="about"><u>About Chasepay</u></p>
            </div>
            <div className="col">
                <p className="about"><u>Wesley P Brewer</u></p>
            </div>
            <div className="col">
                <p className="about"><u>Wesley P Brewer Chasepay & Co.</u></p>
            </div>
            <div className="col">
                <p className="about"><u>Media Center</u></p>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <p className="about"><u>Careers</u></p>
            </div>
            <div className="col">
                <p className="about"><u>Site Map</u></p>
            </div>
            <div className="col">
                <p className="about"><u>Privacy & Security</u></p>
            </div>
            <div className="col">
                <p className="about"><u>Terms of Use</u></p>
            </div>
            <div className="col">
                <p className="about"><u>Accessibiltiy</u></p>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <p className="about"><u>AdChoices</u></p>
            </div>
            <div className="col">
                <p className="about">
                    Give feedback
                </p>
            </div>
            <div className="col">
                <p className="about">Member FDIC</p>
            </div>
            <div className="col">
                <p className='about'>
                <span className='pe-2'>
                <img src={house} alt="house" className='opacity-100'/>
                </span>
                Equal Housing Opportunity
                </p>
                <p className="about"></p>
            </div>
            <div className="col">
                <p className="about"></p>
            </div>
            <div className="col">
                <p className="about"></p>
            </div>
        </div>
    </div>
)
}

export default About