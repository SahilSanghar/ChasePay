import React from 'react'
import {useNavigate} from 'react-router-dom';
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

    const navigateCheckAcc = () => {
        navigate('/personal/checking');
    };

return (
    <div className='container text-left mt-5'>
        <div className='row'>
            <div className="col">
                <img src={check} alt='Cheque' className='features'/>
                <div className="title">
                    Checking Accounts
                </div>
                <div className="description">
                    Choose the <a href="/personal/checking">checking account</a> that works best for you. See our <a href="/consumer/banking/seo">Chasepay Total Checking®</a> offer for new customers. Make purchases with your debit card, and bank from almost anywhere by phone, tablet or computer and more than 15,000 ATMs and more than 4,700 branches.
                </div>
            </div>
            <div className="col">
                <img src={piggy} alt='piggy' className='features'/>
                <div className="title">
                    Savings Accounts & CDs
                </div>
                <div className="description">
                    It's never too early to begin saving. <a href="/personal/savings">Open a savings account</a> or open a Certificate of Deposit (<a href="/personal/savings/bank-cd">see interest rates</a>) and start saving your money.
                </div>
            </div>
            <div className="col">
                <img src={creditcard} alt='creditcard' className='features'/>
                <div className="title">
                    Credit Cards 
                </div>
                <div className="description">
                    Chasepay <a href="/creditcards.chasepay.com">credit cards</a> can help you buy the things you need. Many of our cards <a href="/creditcards.chasepay.com/rewards-credit-cards">offer rewards</a> that can be redeemed for <a href="/creditcards.chasepay.com/cash-back-credit-cards">cash back</a> or <a href="/creditcards.chasepay.com/travel-credit-cards">travel-related</a> perks. With so many options, it can be easy to find a card that matches your lifestyle. Plus, with Credit Journey you can get a <a href="/personal/credit-cards/free-credit-score">free credit score!</a>
                </div>
            </div>
            <div className="col">
                <img src={home} alt='home' className='features'/>
                <div className="title">
                    Mortgages
                </div>
                <div className="description">
                    Apply for a <a href="/personal/mortgage">mortgage</a> or <a href="/personal/mortgage/mortgage-refinance">refinance your mortgage</a> with Chasepay. View today's <a href="/personal/mortgage/mortgage-rates">mortgage rates</a> or calculate what you can afford with our <a href="/personal/mortgage/calculators-resources/mortgage-calculator">mortgage calculator</a>. Visit our <a href="/personal/mortgage/education">Education Center</a> for homebuying tips and more.
                </div>
            </div>
            <div className="col">
                <img src={car} alt='car' className='features'/>
                <div className="title">
                    Auto
                </div>
                <div className="description">
                    <a href="/autofinance.chase.com">Chasepay Auto</a> is here to help you get the right car. Apply for <a href="/auto-finance/auto-loans">auto financing</a> for a new or used car with Chasepay. Use the <a href="/autopreferred.chase.com/garage/auto-loan-calculator">payment calculator</a> to estimate monthly payments. Check out the <a href="/personal/auto/education">Chasepay Auto Education Center</a> to get car guidance from a trusted source.
                </div>
            </div>
            <div className="col">
                <img src={briefcase} alt='briefcase' className='features'/>
                <div className="title">
                    Chasepay for Business
                </div>
                <div className="description">
                    With Chasepay for Business you'll receive guidance from a team of business professionals who specialize in helping improve cash flow, providing credit solutions, and managing payroll. Choose from <a href="/business/banking/checking">business checking</a>, <a href="/business/banking/loans">small business loans</a>, <a href="/creditcards.chase.com/business-credit-cards">business credit cards</a>, <a href="/business/payments">merchant services</a> or visit our <a href="/business/knowledge-center">business resource center</a>.
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
                    Whether you choose to work with a <a href="/personal/investments/advisor-services">financial advisor</a> and develop a financial strategy or <a href="/personal/investments/online-investing">invest online</a>, Wesley P Brewer offers <a href="/personal/investments/learning-and-insights">investment education</a>, expertise and a range of tools to help you reach your goals. Visit a Wesley P Brewer <a href="/WesleyPBrewerwealthmanagement.chase.com/advisor">Wealth Management Branch</a> or check out our latest online investing <a href="/investing/self-directedoffer">offers, promotions, and coupons.</a> <b>INVESTMENT AND INSURANCE PRODUCTS ARE: NOT FDIC INSURED NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY NOT A DEPOSIT OR OTHER OBLIGATION OF, OR GUARANTEED BY, WESLEY P BREWER CHASEPAY BANK, N.A. OR ANY OF ITS AFFILIATES SUBJECT TO INVESTMENT RISKS, INCLUDING POSSIBLE LOSS OF THE PRINCIPAL AMOUNT INVESTED</b>
                </div>
            </div>
            <div className="col">
                <img src={partner} alt='partner' className='features'/>
                <div className="title">
                    Chasepay Private Client
                </div>
                <div className="description">
                    Get more from a personalized relationship offering <a href="/personal/checking/private-client#personalized-financial-relationship">no everyday banking fees</a>, priority service from a <a href="/personal/checking/private-client/team">dedicated team</a> and <a href="/personal/checking/private-client/perks">special perks and benefits</a>. Connect with a Chasepay Private Client Banker at your nearest <a href="/investing/self-directedoffer">Chasepay branch</a> to learn about eligibility requirements and all available benefits. <b>INVESTMENT AND INSURANCE PRODUCTS ARE: NOT A DEPOSIT NOT FDIC INSURED NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY NO BANK GUARANTEE MAY LOSE VALUE</b>
                </div>
            </div>
            <div className="col">
                <img src={mobile} alt='mobile' className='features'/>
                <div className="title">
                    About Chasepay
                </div>
                <div className="description">
                    Chasepay serves millions of people with a broad range of products. <a href="/">Chasepay online</a> lets you manage your Chasepay accounts, view statements, monitor activity, pay bills or transfer funds securely from one central place. To learn more, visit the <a href="/personal/banking/education">Banking Education Center.</a> For questions or concerns, please contact <a href="/digital/customer-service">Chasepay customer service</a> or let us know about <a href="/digital/resources/complaints-feedback">Chasepay complaints and feedback.</a> View the <a href="/digital/resources/about-chase/cra-public-file">Chasepay Community Reinvestment Act Public File</a> for the bank's latest CRA rating and other CRA-related information.
                </div>
            </div>
            <div className="col">
                <img src={music} alt='music' className='features'/>
                <div className="title">
                    Sports & Entertainment
                </div>
                <div className="description">
                    Chasepay gives you access to unique sports, entertainment and culinary events through <a href="/personal/events/experiences">Chasepay Experiences</a> and our exclusive partnerships such as the <a href="/personal/events/us-open">US Open</a>, <a href="/www.msg.com/madison-square-garden">Madison Square Garden</a> and <a href="/personal/events/chase-center">Chasepay Center.</a>
                </div>
                </div>
            <div className="col">
                <img src={shield} alt='shield' className='features'/>
                <div className="title">
                    Chasepay Security Center
                </div>
                <div className="description">
                    Our <a href="">suite of security features</a> can <a href="">help you protect</a> your info, money and give you peace of mind. See how we're dedicated to helping <a href="">protect you</a>, your accounts and your loved ones from <a href="">financial abuse</a>. Also, <a href="">learn about the common tricks scammers are using</a> to help you stay one step ahead of them.  If you see unauthorized charges or believe your account was compromised contact us right away to <a href="">report fraud</a>.
                </div>        
            </div>
            <div className="col">

            </div>
        </div>
    </div>
)
}

export default Features