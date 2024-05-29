import React from 'react'
import WeaManImg from '../../../assets/Images/WeaManImg.png'
import '../../../scss/WeaMan/WeaMan.scss'

const WeaMan = () => {
return (
    <div className='mt-5 mb-5 ms-2'>
        <div className="row">
            <div className="col">
                <img src={WeaManImg} alt="WeaManImg" className='WeaManImg' />
            </div>
            
            <div className="col">
                <p className='WMHeading mt-5'>WEALTH MANAGEMENT</p>
                <h3 className='WMTitle pt-2'>
                Personalize your <br />
                investment experience
                </h3>
                <p className='pt-5'>
                Whether you want to work with a J.P. Morgan advisor to <br />
                create a personalized financial strategy or invest on your <br /> 
                own with our powerful digital tools, the answer is <br />
                J.P. Morgan Wealth Management.
                </p>
                <button className='WMBtn'>
                    GET STARTED
                </button>
            </div>
        </div>
    </div>
)
}

export default WeaMan