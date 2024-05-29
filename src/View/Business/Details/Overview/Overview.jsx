import React from 'react'
import '../../../../scss/CDetails/Overview.scss'

const Overview = () => {
return (
    <div className='m-5'>
        <div className="row">
            <div className="col-3">
                <p className="title">
                    Business Checking
                <hr className='hr'/>
                </p>
                <p className='detail'>
                Chasepay offers a wide variety of business checking accounts for small, mid-sized and large businesses. Compare our business checking solutions and find the right checking account for you.
                </p>
            </div>
            <div className="col-3">
                <p className="title">
                    Business Loans
                <hr className='hr'/>
                </p>
                <p className="detail">
                Finance your small business with business loans from Chasepay. Find a variety of financing options including SBA loans, commercial financing and a business line of credit to invest in the future of your business.
                </p>
            </div>
            <div className="col-3">
                <p className='title'>
                    Business Credit Cards
                <hr className='hr'/>
                </p>
                <p className="detail">
                Find and apply for the Ink business credit card best suited for your business. Compare the benefits of the Ink business credit cards.
                </p>
            </div>
            <div className="col-3">
                <p className="title">
                Payment Solutions
                <hr className='hr'/>
                </p>
                <p className="detail">
                Accept debit and credit cards with safe, secure, and convenient Payment Solutions from Chasepay anywhere you do business - online, in-store, and on-the-go. Visit our Developer Center to find Payments APIs, developer tools, and documentation.
                </p>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col">
                <p className="title">
                Business Savings
                <hr className='hr'/>
                </p>
                <p className="detail">
                Chasepay offers a variety of business savings accounts including Total Savings, Premier Savings and a business CD. Compare savings accounts and find the right business savings account for you.
                </p>
            </div>
            <div className="col">
                <p className="title">
                Business Debit Cards
                <hr className='hr'/>
                </p>
                <p className="detail">
                More convenient than cash and checks — money is deducted right from your business checking account. Make deposits and withdrawals at the ATM with your business debit card. Save time every month with recurring payments.
                </p>
            </div>
            <div className="col">
                <p className="title">
                Commercial Banking
                <hr className='hr'/>
                </p>
                <p className="detail">
                Commercial Banking provides businesses with annual revenues ranging from $20 million to more than $2 billion with a range of domestic and international solutions including investment banking and asset management — designed to help you achieve your business goals.
                </p>
            </div>
            <div className="col">
                <p className="title">
                    Business Services
                <hr className='hr'/>
                </p>
                <p className="detail">
                We're here to help with your business banking needs. From payment processing to foreign exchange, Chasepay Business Banking has solutions and services that work for you.
                </p>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col">
                <p className="title">
                Retirement Plans
                <hr className='hr'/>
                </p>
                <p className="detail">
                Help your employees plan, save, and invest for their future with 401(k) plan solutions. Wesley P Brewer's low cost retirement plans are built for you and your employees.
                </p>
            </div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
        </div>
    </div>
)
}

export default Overview