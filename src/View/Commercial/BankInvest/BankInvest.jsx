import React from 'react'
import BankInv from '../../../assets/Images/BankInv.jpg'
import BankWes from '../../../assets/Images/BankWes.jpg'
import RightArrow from '../../../assets/Right_Arrow.svg'
import cameravideo from '../../../assets/camera-video.svg'
import '../../../scss/BankInvest/BankInvest.scss'

const BankInvest = () => {
return (
    <div className='grid BIMain'>
        <div className="row">
        <div className="col">
            <div className="card BICard">
                    <img className="card-img-top" src={BankInv} alt="Card image cap" />
                <div className="card-body mt-3">
                    <h5 className="card-title fs-6 BITitle">BANKING</h5>
                    <p className="card-text fs-5">Helping New York Blood Center Enterprises invest in its future</p>
                    <h6 className="card-subtitle mb-2">May 16, 2024</h6>
                    <p className="text pt-1">Wesley P Brewer led a $46 million bond sale to support New York Blood Center Enterprises' critical infrastructure needs.</p>
                    <br /><br /><br /><br />
                    <a href="#" className="text-decoration-none">Read more
                    <img src={RightArrow} alt="RightArrow" /></a>
                </div>
            </div>
        </div>

        <div className="col">
        <div className="card BICard">
                    <img className="card-img-top" src={BankWes} alt="Card image cap" />
                <div className="card-body mt-3">
                    <h5 className="card-title fs-6 BITitle">BANKING</h5>
                    <p className="card-text fs-5">Wesley P Brewer and Rippling</p>
                    <h6 className="card-subtitle mb-2">Apr 11, 2024</h6>
                    <p className="text pt-1">Startups to multinational enterprises rely on Rippling to run their businesses, and most important, their payroll. Find out how Wesley P Brewer and Rippling worked together to get money moving when it mattered the most.</p>
                    <br /><br />
                    <a href="#" className="text-decoration-none">Read more
                    <img src={RightArrow} alt="RightArrow" /></a>
                </div>
            </div>
        </div>

            <div className="col">
                <div className='BIBox ps-4 pt-2'>
                    <p className='BBTitle ps-2'>Banking</p>
                    <p className='BBText ps-2'>A $5 billion supercharge for battery maker Northvolt</p>
                    <a href="#" className="text-decoration-none ps-2 BBLink">Read more
                    <img src={RightArrow} alt="RightArrow" /></a>
                </div>
                <br />
                <div className='BIBox ps-4 pt-3'>
                    <p className='BBTitle'><img src={cameravideo} alt="cameravideo" /> &nbsp;| &nbsp;3:56 - CORPORATE RESPONSIBILITY</p>
                    <p className='BBText ps-2'>For these business leaders, impact and legacy go hand in hand</p>
                    <a href="#" className="text-decoration-none ps-2 BBLink">Read more
                    <img src={RightArrow} alt="RightArrow" /></a>
                </div>
                <br />
                <div className='BIBox ps-4 pt-4'>
                    <p className='BBTitle'><img src={cameravideo} alt="cameravideo" /> &nbsp;| &nbsp;3:07 - BANKING</p>
                    <p className='BBText ps-2'>How Trek rode its way to success</p>
                    <a href="#" className="text-decoration-none ps-2 BBLink">Read more
                    <img src={RightArrow} alt="RightArrow" /></a>
                </div>
            </div>
        </div>
    </div>
)
}

export default BankInvest