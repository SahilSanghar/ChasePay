import React from 'react'
import '../../../../../scss/Banner/Background.scss'
import '../../../../../scss/Banner/miniPics.scss'
import business from '../../../../../assets/Images/business.jpg'
import businesscard from '../../../../../assets/Images/businesscard.jpg'
import people from '../../../../../assets/Images/people.jpeg'

const Background = () => {
return (
    <div className='background d-flex'>
        <img src={business} alt="business" className='business'/>
        <div className='mt-3 right'>
            <h3 className='pt-3'>Chase for Business</h3>
            <p className='pt-1'>From banking to payment acceptance to credit cards and local <br />
            support, we offer flexible solutions to help you go far.</p>
            <img src={people} alt="people" className='mini opacity-100'/>
            &nbsp; &nbsp;
            <img src={businesscard} alt="businesscard" className='mini opacity-100'/>
            
            <div class="container text-center">
        <div class="row">
        <div className='description col'>
            <p className='heading'>CHASE BUSINESS COMPLETE CHECKING&reg;</p>
            <h3 className='title'>Earn $300</h3>
            <p className='detail pt-1'>When you open a Business Complete <br />
            Checking account with qualifying <br /> 
            activities. For new business checking <br />
            customers.</p>
            <button type="button" className="btn btn-primary button mt-1">Open now</button>
            </div>
            
            <div className='description col'>
            <p className='heading'>INK BUSINESS PREMIER &#8480;</p>
            <h3 className='title'>Earn up to $750 bonus cash back</h3>
            <p className='detail'>Plus, earn a total of 2.5% cash back on <br />
            eligible purchases made for your <br /> 
            business with Ink Business Premier℠. <br />
            Terms apply.</p>
            <button type="button" className="btn btn-primary button">Continue</button>
            </div>
    </div>
</div>




            
            
            
        </div>
    </div>
)
}

export default Background