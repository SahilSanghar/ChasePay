import React from 'react'

const HowItWorks = () => {
return (
    <div className='mt-4'>
        <h3 className='text-[#002F6C] text-center text-4xl'>
            How it works
        </h3>

        <div className="row gap-0 pt-5 px-40">
            <div className="col px-0">
                <div className='d-flex'>
                <p className='text-center text-[#002F6C] text-4xl font-semibold border-3 rounded-full w-fit px-2 py-1 ms-36'>01
                </p>
                <span className='text-black mt-2'>
                    ____________________________
                </span>
                </div>
                <p className='px-5 py-4 text-lg'>
                    <a href="" className='text-[#005EB8]'>
                        Open a checking account
                    </a> &nbsp;
                    online with the coupon
                    code or enter your email
                    address to get your
                    coupon and bring it to
                    a &nbsp;
                    <a href="" className='text-[#005EB8]'>
                        Chasepay Branch
                    </a> &nbsp;
                    to open an account.
                </p>
            </div>

            <div className="col px-0">
                <div className='d-flex'>
                <span className='text-black mt-2'>
                    ______________________
                </span>
                <p className='text-center text-4xl font-semibold border-3 rounded-full w-fit px-2 py-1 text-[#002F6C]'>02
                </p>
                <span className='text-black mt-2'>
                    ______________________________
                </span>
                </div>
                <p className='px-5 py-4 text-lg'>Make direct deposits totaling $500 or more within 90 days of coupon enrollment.</p>
            </div>
            
            <div className="col px-0">
                
                <div className='d-flex'>
                <span className='text-black mt-2'>
                    _________________
                </span>
                <p className='text-center text-4xl font-semibold border-3 rounded-full w-fit px-2 py-1 text-[#002F6C]'>03
                </p>
                </div>
                <p className='px-2 py-4 text-lg'>
                Receive your bonus
                within 15 days.
                </p>
            </div>
        </div>
    </div>
)
}

export default HowItWorks