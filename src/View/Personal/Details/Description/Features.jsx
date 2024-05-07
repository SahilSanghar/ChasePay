import React from 'react'
import '../../../../scss/Details/features.scss'
import check from '../../../../assets/Images/check.png'
import piggy from '../../../../assets/Images/piggy.png'
import creditcard from '../../../../assets/Images/credit.png'
import home from '../../../../assets/Images/home.png'
import car from '../../../../assets/Images/car.png'
import briefcase from '../../../../assets/Images/briefcase.png'
import investment from '../../../../assets/Images/investment.png'
import partner from '../../../../assets/Images/partner.png'
import mobile from '../../../../assets/Images/mobile.png'
import music from '../../../../assets/Images/music.png'
import shield from '../../../../assets/Images/shield.png'

const Features = () => {
return (
    <div className='container text-left mt-5'>
        <div className='row'>
            <div className="col">
                <img src={check} alt='Cheque' className='features'/>
                <div className="title">
                    Checking Accounts
                </div>
                <div className="description">
                    Choose the checking account that works best for you. See our Chasepay Total Checking® offer for new customers. Make purchases with your debit card, and bank from almost anywhere by phone, tablet or computer and more than 15,000 ATMs and more than 4,700 branches.
                </div>
            </div>
            <div className="col">
                <img src={piggy} alt='piggy' className='features'/>
                <div className="title">
                    Savings Accounts & CDs
                </div>
                <div className="description">
                    It's never too early to begin saving. Open a savings account or open a Certificate of Deposit (see interest rates) and start saving your money.
                </div>
            </div>
            <div className="col">
                <img src={creditcard} alt='creditcard' className='features'/>
                <div className="title">
                    Credit Cards 
                </div>
                <div className="description">
                    Chasepay credit cards can help you buy the things you need. Many of our cards offer rewards that can be redeemed for cash back or travel-related perks. With so many options, it can be easy to find a card that matches your lifestyle. Plus, with Credit Journey you can get a free credit score!
                </div>
            </div>
            <div className="col">
                <img src={home} alt='home' className='features'/>
                <div className="title">
                    Mortgages
                </div>
                <div className="description">
                    Apply for a mortgage or refinance your mortgage with Chasepay. View today's mortgage rates or calculate what you can afford with our mortgage calculator. Visit our Education Center for homebuying tips and more.
                </div>
            </div>
            <div className="col">
                <img src={car} alt='car' className='features'/>
                <div className="title">
                    Auto
                </div>
                <div className="description">
                    Chasepay Auto is here to help you get the right car. Apply for auto financing for a new or used car with Chasepay. Use the payment calculator to estimate monthly payments. Check out the Chasepay Auto Education Center to get car guidance from a trusted source.
                </div>
            </div>
            <div className="col">
                <img src={briefcase} alt='briefcase' className='features'/>
                <div className="title">
                    Chasepay for Business
                </div>
                <div className="description">
                    With Chasepay for Business you'll receive guidance from a team of business professionals who specialize in helping improve cash flow, providing credit solutions, and managing payroll. Choose from business checking, small business loans, business credit cards, merchant services or visit our business resource center.
                </div>
                </div>
            </div>
<br /><br />
        <div className='row'>
            <div className="col">
                <img src={investment} alt='investment' className='features'/>
                <div className="title">
                    Investing by Wesley P Brewer
                </div>
                <div className="description">
                    Whether you choose to work with a financial advisor and develop a financial strategy or invest online, Wesley P Brewer offers investment education, expertise and a range of tools to help you reach your goals. Visit a Wesley P Brewer Wealth Management Branch or check out our latest online investing offers, promotions, and coupons. <b>INVESTMENT AND INSURANCE PRODUCTS ARE: NOT FDIC INSURED NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY NOT A DEPOSIT OR OTHER OBLIGATION OF, OR GUARANTEED BY, WESLEY P BREWER CHASEPAY BANK, N.A. OR ANY OF ITS AFFILIATES SUBJECT TO INVESTMENT RISKS, INCLUDING POSSIBLE LOSS OF THE PRINCIPAL AMOUNT INVESTED</b>
                </div>
            </div>
            <div className="col">
                <img src={partner} alt='partner' className='features'/>
                <div className="title">
                    Chasepay Private Client
                </div>
                <div className="description">
                    Get more from a personalized relationship offering no everyday banking fees, priority service from a dedicated team and special perks and benefits. Connect with a Chasepay Private Client Banker at your nearest Chasepay branch to learn about eligibility requirements and all available benefits. <b>INVESTMENT AND INSURANCE PRODUCTS ARE: NOT A DEPOSIT NOT FDIC INSURED NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY NO BANK GUARANTEE MAY LOSE VALUE</b>
                </div>
            </div>
            <div className="col">
                <img src={mobile} alt='mobile' className='features'/>
                <div className="title">
                    About Chasepay
                </div>
                <div className="description">
                    Chasepay serves millions of people with a broad range of products. Chasepay online lets you manage your Chasepay accounts, view statements, monitor activity, pay bills or transfer funds securely from one central place. To learn more, visit the Banking Education Center. For questions or concerns, please contact Chasepay customer service or let us know about Chasepay complaints and feedback. View the Chasepay Community Reinvestment Act Public File for the bank's latest CRA rating and other CRA-related information.
                </div>
            </div>
            <div className="col">
                <img src={music} alt='music' className='features'/>
                <div className="title">
                Sports & Entertainment
                </div>
                <div className="description">
                    Chasepay gives you access to unique sports, entertainment and culinary events through Chasepay Experiences and our exclusive partnerships such as the US Open, Madison Square Garden(Opens Overlay) and Chasepay Center.
                </div>
                </div>
            <div className="col">
                <img src={shield} alt='shield' className='features'/>
                <div className="title">
                Chasepay Security Center
                </div>
                <div className="description">
                Our suite of security features can help you protect your info, money and give you peace of mind. See how we're dedicated to helping protect you, your accounts and your loved ones from financial abuse. Also, learn about the common tricks scammers are using to help you stay one step ahead of them.  If you see unauthorized charges or believe your account was compromised contact us right away to report fraud.
                </div>        
            </div>
            <div className="col">

            </div>
        </div>
    </div>
)
}

export default Features