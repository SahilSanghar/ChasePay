import React from 'react'

const Banner = () => {
return (
    <div className='h-[500px] mt-16 pt-14 bg-[#005EB8] text-white text-center px-[100px]'>
        <p className='text-8xl font-bold'>
            Enjoy $300
        </p>
        <p className='text-3xl pt-4'>
        as a new Chasepay checking customer, when you open a Chasepay <br />
        Total Checking® account and make direct deposits totaling $500 <br />
        or more within 90 days of coupon enrollment.
        </p>
        <div className='h-[310px] w-[950px] bg-white shadow-lg rounded-2xl mt-5 ml-[180px]'>
            <div className="row pt-14">
                <div className="col-5">
                <button type="button" className="bg-[#398100] h-[45px] w-[340px] text-xl p-[4px] mx-[10px] mb-[5px] rounded-md">Open an account</button>
                <p className='text-black text-sm px-2'>$300 Checking coupon code applied when you choose "Open an account"</p>
                </div>
                <div className="col-2">
                    <div className='pt-2 h-14 w-14 rounded-full bg-[#005EB8]'>
                        <p className='text-3xl'>OR</p>
                    </div>
                </div>
                <div className="col-5">
                <button type="button" class="bg-[#F5F7F8] text-black h-[40px] w-[340px] mx-[10px] mb-[20px] text-xl rounded-md px-[10px]">Email email address</button> <br />
                <button type="button" class="bg-[#005EB8] w-[340px] h-[40px] text-xl mx-[10px] px-[12px]">Email my coupon</button>
                <p className='text-black text-sm px-2'>Email address won't be used for other promotions or shared with third parties</p>
                </div>
            </div>
            <div className="row pt-2">
                <p className='text-black'>Account subject to approval <br />
                    Wesley P Brewer Chasepay Bank, N.A. Member FDIC. <br />
                    <a href="">
                        Get Service Fee, Bonus/Account and other Important Information.
                    </a>
                </p>
            </div>
        </div>
    </div>
)
}

export default Banner