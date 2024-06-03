import React, { useState } from 'react'
import hamburger from '../../../../assets/hamburger.svg'
import cross from '../../../../assets/cross.svg'
import Chasepay from '../../../../assets/Images/Chasepay.png'
import '../../../../scss/Interactor/CAcomp/Navbar.scss'
import creditcard from '../../../../assets/Images/credit.png'
import check from '../../../../assets/Images/check.png'
import piggy from '../../../../assets/Images/piggy.png'
import car from '../../../../assets/Images/car.png'
import home from '../../../../assets/Images/home.png'
import investment from '../../../../assets/Images/investment.png'
import briefcase from '../../../../assets/Images/briefcase.png'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

return (
    <nav className={`CANavbar fixed-top`}>
        <div>
            <button  onClick={toggleMenu}>
            <img src={isMenuOpen ? cross : hamburger} alt="hamburger menu" className='CAHambur cursor-pointer' />
            </button>
        </div>
        <div className='d-flex ms-60'>
            <h1 className='CAChasepay me-3'>CHASEPAY</h1>
            <img src={Chasepay} alt="CALogo" className='CAlogo opacity-100' />
        </div>
        <div className='d-flex mt-2'>
            <h6 className=''>
                ATM & branch
            </h6>
            <h6 className='ms-4'>
                Espanol
            </h6>
            <button type="button" className="btn btn-primary CABtn ms-4">
                Sign in
            </button>
        </div>
            <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <div className='Nsidebar p-4'>
                </div>
                <li className='ps-4'>Home</li>
                <li className='ps-4'>Sign in</li>
                <li className='ps-4'>Free credit score</li>
                <li className='ps-4'>Financial Education</li>
                <li className='border-0 ps-4'>Espanol</li>
                <div className='Nsidebar'>
                    <p className='pt-[10px] pl-[20px]'>OPEN AN ACCOUNT</p>
                </div>
                <li>
                    <img src={creditcard} alt="Credit Cards" className='me-3' />
                    Credit Cards
                </li>
                <li>
                    <img src={check} alt="Check" className='me-3' />
                    Checking Accounts
                </li>
                <li>
                    <img src={piggy} alt="Savings" className='me-3' />
                    Savings Accounts
                </li>
                <li>
                    <img src="" alt="" className='me-3' />
                    CDs
                </li>
                <li>
                    <img src={car} alt="Auto" className='me-3' />
                    Auto
                </li>
                <li>
                    <img src={home} alt="Home" className='me-3' />
                    Mortgage
                </li>
                <li>
                    <img src="" alt="" className='me-3' />
                    Home Equity
                </li>
                <li>
                    <img src={investment} alt="investment" className='me-3' />
                    Invest with Wesley P Brewer Advisor
                </li>
                <li>
                    <img src="" alt="" className='me-3' />
                    Online Investing with Wesley P Brewer
                </li>
                <li>
                    <img src={briefcase} alt="Business" className='me-3' />
                    Chasepay for Business
                </li>
                <li>
                    <img src="" alt="" className='me-3' />
                    Commercial Banking
                </li>
                <li className='border-0'>
                    <img src="" alt="" className='me-3' />
                    See all
                </li>
                <div className='Nsidebar pt-[5px] pl-[20px]'>
                    <p className='p-2'>CONNECT WITH CHASEPAY</p>
                </div>
                <li className='ps-4'>Customer Service</li>
                <li className='ps-4'>Give feedback</li>
                <li className='border-0 ps-4'>Schedule a meeting</li>
                <div className='Nsidebar1'>
                    <p className='pt-2 ps-4'>About Chasepay</p>
                    <p className='ps-4'>Wesley P Brewer</p>
                    <p className='ps-4'>Wesley P Brewer Chasepay & Co.</p>
                    <p className='ps-4'>Media Center</p>
                    <p className='ps-4'>Careers</p>
                    <p className='ps-4'>Chasepay Canada</p>
                    <p className='ps-4'>SAFE ACT:Chasepay Mortgage Loan Originators</p>
                    <p className='ps-4'>Fair Lending</p>
                </div>
            </ul>
    </nav>
)
}

export default Navbar